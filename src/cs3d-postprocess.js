/*
 * Collective Strike 3D - Advanced Post-Processing Pipeline
 * 
 * Extends the existing EffectComposer with quality-gated screen effects:
 * - Film grain / dither
 * - Chromatic aberration (damage-reactive)
 * - Dynamic vignette (HP/ability reactive)
 * - Motion blur / afterimage
 * - God rays / light shafts
 * - Camera trauma system
 * - Hitstop on eliminations
 */

import * as THREE from "three";

// These will be available on window.THREE from vendor.js
const { ShaderPass, EffectComposer, RenderPass, UnrealBloomPass } = THREE;

// ============================================================================
// SHADER CHUNKS - Custom post-processing shaders
// ============================================================================

const filmGrainVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const filmGrainFragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform float size;
  uniform sampler2D tDiffuse;
  varying vec2 vUv;
  
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }
  
  void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    
    // Grain noise
    float grain = random(vUv + time * size) * 2.0 - 1.0;
    color.rgb += grain * intensity;
    
    // Subtle dither pattern
    float dither = mod(gl_FragCoord.x + gl_FragCoord.y, 2.0) * 0.01 * intensity;
    color.rgb += dither;
    
    gl_FragColor = color;
  }
`;

const chromaticAberrationVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const chromaticAberrationFragmentShader = `
  uniform sampler2D tDiffuse;
  uniform float strength;
  uniform vec2 offset;
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    
    // Radial distortion from center
    vec2 center = vec2(0.5, 0.5);
    vec2 dir = uv - center;
    float dist = length(dir);
    
    // Apply offset based on damage direction
    vec2 aberration = dir * dist * strength * (1.0 + length(offset) * 0.5);
    
    // Sample RGB channels at different positions
    float r = texture2D(tDiffuse, uv + aberration + offset * 0.3).r;
    float g = texture2D(tDiffuse, uv + aberration).g;
    float b = texture2D(tDiffuse, uv - aberration - offset * 0.3).b;
    
    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

const dynamicVignetteVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const dynamicVignetteFragmentShader = `
  uniform sampler2D tDiffuse;
  uniform float intensity;
  uniform float darkness;
  uniform vec2 centerOffset;
  varying vec2 vUv;
  
  void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    
    // Vignette from center (with offset for ability use direction)
    vec2 center = vec2(0.5, 0.5) + centerOffset * 0.1;
    float dist = distance(vUv, center);
    float vignette = smoothstep(0.8, 0.2, dist * (1.0 + intensity * 0.5));
    
    // Darken edges
    color.rgb *= mix(1.0, 1.0 - darkness, vignette);
    
    // Subtle color shift at edges when intensity is high
    if (intensity > 0.5) {
      float edgeFactor = 1.0 - vignette;
      color.r += edgeFactor * 0.05 * intensity;
      color.b -= edgeFactor * 0.05 * intensity;
    }
    
    gl_FragColor = color;
  }
`;

const motionBlurVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const motionBlurFragmentShader = `
  uniform sampler2D tDiffuse;
  uniform sampler2D tPrev;
  uniform vec2 velocity;
  uniform float intensity;
  uniform int samples;
  varying vec2 vUv;
  
  void main() {
    vec4 color = vec4(0.0);
    float total = 0.0;
    
    // Multi-sample along velocity vector
    for (int i = 0; i < 16; i++) {
      if (i >= samples) break;
      
      float t = float(i) / float(samples - 1);
      vec2 offset = velocity * t * intensity;
      vec2 sampleUV = vUv + offset;
      
      // Blend current and previous frame
      vec4 curr = texture2D(tDiffuse, clamp(sampleUV, 0.0, 1.0));
      vec4 prev = texture2D(tPrev, clamp(sampleUV, 0.0, 1.0));
      
      color += mix(prev, curr, t);
      total += 1.0;
    }
    
    gl_FragColor = color / total;
  }
`;

const godRaysVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const godRaysFragmentShader = `
  uniform sampler2D tDiffuse;
  uniform vec2 lightPosition;
  uniform float exposure;
  uniform float decay;
  uniform float density;
  uniform float weight;
  uniform int samples;
  varying vec2 vUv;
  
  void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    
    // Vector from light to pixel
    vec2 delta = vUv - lightPosition;
    delta *= (1.0 / float(samples)) * density;
    
    vec2 uv = vUv;
    float illuminationDecay = 1.0;
    
    // Ray march towards light
    for (int i = 0; i < 64; i++) {
      if (i >= samples) break;
      
      uv -= delta;
      if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) break;
      
      vec4 sample = texture2D(tDiffuse, uv);
      sample *= illuminationDecay * weight;
      color += sample;
      
      illuminationDecay *= decay;
    }
    
    color *= exposure;
    gl_FragColor = color;
  }
`;

// ============================================================================
// POST-PROCESS EFFECT CLASSES
// ============================================================================

export class FilmGrainPass extends THREE.ShaderPass {
  constructor(intensity = 0.05, size = 1.0) {
    super({
      uniforms: {
        time: { value: 0 },
        intensity: { value: intensity },
        size: { value: size },
        tDiffuse: { value: null },
      },
      vertexShader: filmGrainVertexShader,
      fragmentShader: filmGrainFragmentShader,
    });
    this.enabled = intensity > 0;
  }
  
  update(deltaTime) {
    this.uniforms.time.value += deltaTime;
  }
  
  setIntensity(value) {
    this.uniforms.intensity.value = value;
    this.enabled = value > 0;
  }
}

export class ChromaticAberrationPass extends THREE.ShaderPass {
  constructor(strength = 0.002) {
    super({
      uniforms: {
        strength: { value: strength },
        offset: { value: new THREE.Vector2(0, 0) },
        tDiffuse: { value: null },
      },
      vertexShader: chromaticAberrationVertexShader,
      fragmentShader: chromaticAberrationFragmentShader,
    });
    this.enabled = strength > 0;
    this.baseStrength = strength;
    this.damageSpike = 0;
  }
  
  setDamage(amount, direction = new THREE.Vector2(0, 0)) {
    // Spike on damage, decay over time
    this.damageSpike = Math.min(1.0, this.damageSpike + amount);
    this.uniforms.offset.value.set(direction.x, direction.y);
  }
  
  update(deltaTime) {
    // Decay damage spike
    this.damageSpike = Math.max(0, this.damageSpike - deltaTime * 2.0);
    const totalStrength = this.baseStrength * (1.0 + this.damageSpike * 3.0);
    this.uniforms.strength.value = totalStrength;
    this.enabled = totalStrength > 0.0001;
  }
}

export class DynamicVignettePass extends THREE.ShaderPass {
  constructor(intensity = 0.3, darkness = 0.4) {
    super({
      uniforms: {
        intensity: { value: intensity },
        darkness: { value: darkness },
        centerOffset: { value: new THREE.Vector2(0, 0) },
        tDiffuse: { value: null },
      },
      vertexShader: dynamicVignetteVertexShader,
      fragmentShader: dynamicVignetteFragmentShader,
    });
    this.enabled = true;
    this.baseIntensity = intensity;
    this.hpReactive = 0;
    this.abilityReactive = 0;
  }
  
  setLowHP(amount) {
    this.hpReactive = Math.min(1.0, amount);
  }
  
  setAbilityUse(direction = new THREE.Vector2(0, 0)) {
    this.abilityReactive = 0.5;
    this.uniforms.centerOffset.value.copy(direction);
  }
  
  update(deltaTime) {
    // Decay ability reactive
    this.abilityReactive = Math.max(0, this.abilityReactive - deltaTime * 3.0);
    
    // Combine HP and ability reactivity
    const totalIntensity = this.baseIntensity * (1.0 + this.hpReactive * 0.8 + this.abilityReactive * 0.5);
    this.uniforms.intensity.value = totalIntensity;
  }
}

export class MotionBlurPass extends THREE.ShaderPass {
  constructor(intensity = 0.3, samples = 8) {
    super({
      uniforms: {
        tPrev: { value: null },
        velocity: { value: new THREE.Vector2(0, 0) },
        intensity: { value: intensity },
        samples: { value: samples },
        tDiffuse: { value: null },
      },
      vertexShader: motionBlurVertexShader,
      fragmentShader: motionBlurFragmentShader,
    });
    this.enabled = intensity > 0;
    this.baseIntensity = intensity;
    this.prevRenderTarget = null;
  }
  
  init(renderer, scene, camera) {
    const size = renderer.getSize(new THREE.Vector2());
    this.prevRenderTarget = new THREE.WebGLRenderTarget(
      Math.floor(size.width),
      Math.floor(size.height),
      {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
      }
    );
    this.uniforms.tPrev.value = this.prevRenderTarget.texture;
  }
  
  capture(renderer) {
    if (this.prevRenderTarget && this.enabled) {
      renderer.setRenderTarget(this.prevRenderTarget);
      // Current frame becomes previous
    }
  }
  
  setVelocity(velocity) {
    this.uniforms.velocity.value.copy(velocity);
  }
  
  setIntensity(value) {
    this.uniforms.intensity.value = value;
    this.enabled = value > 0;
  }
  
  dispose() {
    if (this.prevRenderTarget) {
      this.prevRenderTarget.dispose();
      this.prevRenderTarget = null;
    }
  }
}

export class GodRaysPass extends THREE.ShaderPass {
  constructor(lightPosition = new THREE.Vector2(0.5, 0.8), options = {}) {
    const {
      exposure = 0.6,
      decay = 0.96,
      density = 0.5,
      weight = 0.4,
      samples = 32,
    } = options;
    
    super({
      uniforms: {
        lightPosition: { value: new THREE.Vector2(lightPosition.x, lightPosition.y) },
        exposure: { value: exposure },
        decay: { value: decay },
        density: { value: density },
        weight: { value: weight },
        samples: { value: samples },
        tDiffuse: { value: null },
      },
      vertexShader: godRaysVertexShader,
      fragmentShader: godRaysFragmentShader,
    });
    this.enabled = true;
    this.lightSources = [];
  }
  
  addLightSource(screenPos, options = {}) {
    this.lightSources.push({
      position: new THREE.Vector2(screenPos.x, screenPos.y),
      intensity: options.intensity || 1.0,
      flicker: options.flicker || false,
    });
  }
  
  update(deltaTime, time) {
    // Animate light sources
    if (this.lightSources.length > 0) {
      const primary = this.lightSources[0];
      this.uniforms.lightPosition.value.copy(primary.position);
      
      if (primary.flicker) {
        const flicker = 0.95 + Math.sin(time * 10.0) * 0.05;
        this.uniforms.exposure.value = this.uniforms.exposure.value * flicker;
      }
    }
  }
  
  setSamples(count) {
    this.uniforms.samples.value = count;
  }
}

// ============================================================================
// CAMERA TRAUMA SYSTEM
// ============================================================================

export class CameraTraumaController {
  constructor(camera, options = {}) {
    this.camera = camera;
    this.trauma = 0;
    this.decay = options.decay || 2.5;
    this.shakeMultiplier = options.shakeMultiplier || 0.5;
    
    // Trauma profiles for different event types
    this.profiles = {
      gunfire: { trauma: 0.08, decay: 4.0, frequency: [15, 20, 25] },
      explosion: { trauma: 0.4, decay: 1.5, frequency: [8, 12, 18] },
      abilityHit: { trauma: 0.15, decay: 3.0, frequency: [10, 15, 22] },
      nearDeath: { trauma: 0.25, decay: 2.0, frequency: [5, 8, 12] },
      heavyLand: { trauma: 0.12, decay: 3.5, frequency: [12, 18, 24] },
      dash: { trauma: 0.06, decay: 5.0, frequency: [20, 30, 40] },
    };
    
    // Multi-frequency noise state
    this.noiseState = {
      x: [0, 0, 0],
      y: [0, 0, 0],
      z: [0, 0, 0],
      rx: [0, 0, 0],
      ry: [0, 0, 0],
    };
    
    this.originalTransform = new THREE.Object3D();
    this.originalTransform.position.copy(camera.position);
    this.originalTransform.quaternion.copy(camera.quaternion);
    
    this.enabled = true;
    this.intensityMultiplier = 1.0;
  }
  
  addTrauma(profileName, amount = 1.0) {
    if (!this.enabled) return;
    
    const profile = this.profiles[profileName] || this.profiles.gunfire;
    const traumaAmount = profile.trauma * amount * this.intensityMultiplier;
    this.trauma = Math.min(1.0, this.trauma + traumaAmount);
    
    // Update decay rate
    this.decay = profile.decay;
  }
  
  setIntensity(multiplier) {
    this.intensityMultiplier = multiplier;
  }
  
  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled) {
      this.trauma = 0;
      this.camera.position.copy(this.originalTransform.position);
      this.camera.quaternion.copy(this.originalTransform.quaternion);
    }
  }
  
  update(deltaTime, time) {
    if (!this.enabled || this.trauma <= 0.001) {
      this.trauma = 0;
      this.camera.position.copy(this.originalTransform.position);
      this.camera.quaternion.copy(this.originalTransform.quaternion);
      return;
    }
    
    // Decay trauma
    this.trauma = Math.max(0, this.trauma - deltaTime * this.decay);
    const traumaSquared = this.trauma * this.trauma;
    
    // Get active profile based on highest trauma source
    let profile = this.profiles.gunfire;
    if (this.trauma > 0.3) profile = this.profiles.explosion;
    else if (this.trauma > 0.2) profile = this.profiles.nearDeath;
    else if (this.trauma > 0.1) profile = this.profiles.abilityHit;
    
    const [f1, f2, f3] = profile.frequency;
    
    // Multi-frequency Perlin-like noise
    for (let i = 0; i < 3; i++) {
      const freq = [f1, f2, f3][i];
      this.noiseState.x[i] = Math.sin(time * freq + i) * (1.0 / (i + 1));
      this.noiseState.y[i] = Math.cos(time * freq * 1.1 + i * 2) * (1.0 / (i + 1));
      this.noiseState.z[i] = Math.sin(time * freq * 0.9 + i * 3) * (1.0 / (i + 1));
      this.noiseState.rx[i] = Math.cos(time * freq * 1.3 + i * 1.5) * (1.0 / (i + 1));
      this.noiseState.ry[i] = Math.sin(time * freq * 1.2 + i * 2.5) * (1.0 / (i + 1));
    }
    
    // Sum noise components
    const noiseX = (this.noiseState.x[0] + this.noiseState.x[1] + this.noiseState.x[2]) / 1.83;
    const noiseY = (this.noiseState.y[0] + this.noiseState.y[1] + this.noiseState.y[2]) / 1.83;
    const noiseZ = (this.noiseState.z[0] + this.noiseState.z[1] + this.noiseState.z[2]) / 1.83;
    const noiseRX = (this.noiseState.rx[0] + this.noiseState.rx[1] + this.noiseState.rx[2]) / 1.83;
    const noiseRY = (this.noiseState.ry[0] + this.noiseState.ry[1] + this.noiseState.ry[2]) / 1.83;
    
    // Apply shake scaled by trauma^2 (smooth impact)
    const shakeScale = traumaSquared * this.shakeMultiplier;
    
    this.camera.position.x = this.originalTransform.position.x + noiseX * shakeScale * 0.1;
    this.camera.position.y = this.originalTransform.position.y + noiseY * shakeScale * 0.1;
    this.camera.position.z = this.originalTransform.position.z + noiseZ * shakeScale * 0.05;
    
    // Rotation shake
    const qx = new THREE.Quaternion();
    qx.setFromAxisAngle(new THREE.Vector3(1, 0, 0), noiseRX * shakeScale * 0.15);
    const qy = new THREE.Quaternion();
    qy.setFromAxisAngle(new THREE.Vector3(0, 1, 0), noiseRY * shakeScale * 0.15);
    
    const targetQuat = this.originalTransform.quaternion.clone().multiply(qx).multiply(qy);
    this.camera.quaternion.slerp(targetQuat, 0.5);
  }
  
  reset() {
    this.trauma = 0;
    this.camera.position.copy(this.originalTransform.position);
    this.camera.quaternion.copy(this.originalTransform.quaternion);
  }
}

// ============================================================================
// HITSTOP SYSTEM
// ============================================================================

export class HitstopController {
  constructor(options = {}) {
    this.duration = 0;
    this.remaining = 0;
    this.enabled = options.enabled !== false;
    this.timeScale = 1.0;
    
    // Hitstop profiles
    this.profiles = {
      elimination: { duration: 0.15, slowMo: 0.3 },
      heavyAbility: { duration: 0.1, slowMo: 0.5 },
      multiKill: { duration: 0.25, slowMo: 0.2 },
      bossHit: { duration: 0.2, slowMo: 0.4 },
      default: { duration: 0.05, slowMo: 0.6 },
    };
    
    this.callbacks = {
      onStart: null,
      onEnd: null,
    };
  }
  
  trigger(profileName = 'default', intensity = 1.0) {
    if (!this.enabled) return false;
    
    const profile = this.profiles[profileName] || this.profiles.default;
    this.duration = profile.duration * intensity;
    this.remaining = this.duration;
    this.timeScale = profile.slowMo;
    
    this.callbacks.onStart?.(profileName);
    return true;
  }
  
  update(deltaTime) {
    if (this.remaining <= 0) {
      if (this.timeScale !== 1.0) {
        this.timeScale = 1.0;
        this.callbacks.onEnd?.();
      }
      return deltaTime;
    }
    
    this.remaining -= deltaTime;
    if (this.remaining < 0) this.remaining = 0;
    
    // Return scaled delta time
    return deltaTime * this.timeScale;
  }
  
  getTimeScale() {
    return this.timeScale;
  }
  
  isActive() {
    return this.remaining > 0;
  }
  
  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled) {
      this.remaining = 0;
      this.timeScale = 1.0;
    }
  }
}

// ============================================================================
// POST-PROCESSING MANAGER
// ============================================================================

export class PostProcessManager {
  constructor(renderer, scene, camera, qualityProfile = 'high') {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.qualityProfile = qualityProfile;
    
    // Initialize composer
    this.composer = new THREE.EffectComposer(renderer);
    
    // Base render pass
    this.renderPass = new THREE.RenderPass(scene, camera);
    this.composer.addPass(this.renderPass);
    
    // Quality-gated settings
    this.settings = this._getQualitySettings(qualityProfile);
    
    // Create passes
    this.passes = {};
    this._createPasses();
    
    // Camera trauma
    this.traumaController = new CameraTraumaController(camera, {
      decay: this.settings.traumaDecay,
      shakeMultiplier: this.settings.traumaIntensity,
    });
    
    // Hitstop
    this.hitstopController = new HitstopController({
      enabled: this.settings.hitstopEnabled,
    });
    
    // State tracking
    this.elapsedTime = 0;
    this.playerHP = 1.0;
    this.lastFrameTexture = null;
  }
  
  _getQualitySettings(profile) {
    const settings = {
      low: {
        filmGrain: 0,
        chromaticAberration: 0,
        vignette: 0.2,
        motionBlur: 0,
        godRays: false,
        bloomStrength: 0.8,
        traumaIntensity: 0.4,
        traumaDecay: 3.0,
        hitstopEnabled: false,
      },
      medium: {
        filmGrain: 0.03,
        chromaticAberration: 0.001,
        vignette: 0.3,
        motionBlur: 0.15,
        godRays: false,
        bloomStrength: 1.0,
        traumaIntensity: 0.6,
        traumaDecay: 2.5,
        hitstopEnabled: true,
      },
      high: {
        filmGrain: 0.05,
        chromaticAberration: 0.002,
        vignette: 0.35,
        motionBlur: 0.3,
        godRays: true,
        bloomStrength: 1.2,
        traumaIntensity: 0.8,
        traumaDecay: 2.5,
        hitstopEnabled: true,
      },
      ultra: {
        filmGrain: 0.07,
        chromaticAberration: 0.003,
        vignette: 0.4,
        motionBlur: 0.4,
        godRays: true,
        bloomStrength: 1.4,
        traumaIntensity: 1.0,
        traumaDecay: 2.5,
        hitstopEnabled: true,
      },
      cinematic: {
        filmGrain: 0.1,
        chromaticAberration: 0.005,
        vignette: 0.45,
        motionBlur: 0.5,
        godRays: true,
        bloomStrength: 1.6,
        traumaIntensity: 1.2,
        traumaDecay: 2.0,
        hitstopEnabled: true,
      },
    };
    
    return settings[profile] || settings.high;
  }
  
  _createPasses() {
    const s = this.settings;
    
    // Film grain
    if (s.filmGrain > 0) {
      this.passes.filmGrain = new FilmGrainPass(s.filmGrain, 1.0);
      this.composer.addPass(this.passes.filmGrain);
    }
    
    // Chromatic aberration
    if (s.chromaticAberration > 0) {
      this.passes.chromaticAberration = new ChromaticAberrationPass(s.chromaticAberration);
      this.composer.addPass(this.passes.chromaticAberration);
    }
    
    // Dynamic vignette
    this.passes.vignette = new DynamicVignettePass(s.vignette, 0.4);
    this.composer.addPass(this.passes.vignette);
    
    // Motion blur (only if enabled)
    if (s.motionBlur > 0) {
      this.passes.motionBlur = new MotionBlurPass(s.motionBlur, 8);
      this.passes.motionBlur.init(this.renderer, this.scene, this.camera);
      this.composer.addPass(this.passes.motionBlur);
    }
    
    // God rays (only if enabled)
    if (s.godRays) {
      this.passes.godRays = new GodRaysPass(
        new THREE.Vector2(0.5, 0.8),
        { exposure: 0.5, decay: 0.96, density: 0.6, samples: 32 }
      );
      this.composer.addPass(this.passes.godRays);
    }
    
    // Bloom pass (existing UnrealBloomPass - adjust strength)
    // This should already exist in the pipeline, we just track it
    const bloomPass = this.composer.passes.find(p => p instanceof UnrealBloomPass);
    if (bloomPass) {
      bloomPass.strength = s.bloomStrength;
    }
  }
  
  setQuality(profile) {
    this.qualityProfile = profile;
    this.settings = this._getQualitySettings(profile);
    
    // Rebuild passes
    this._rebuildPasses();
    
    // Update controllers
    this.traumaController.setIntensity(this.settings.traumaIntensity);
    this.hitstopController.setEnabled(this.settings.hitstopEnabled);
  }
  
  _rebuildPasses() {
    // Remove all passes except RenderPass
    while (this.composer.passes.length > 1) {
      const pass = this.composer.passes.pop();
      if (pass.dispose) pass.dispose();
    }
    
    this._createPasses();
  }
  
  addGodRaySource(worldPosition, options = {}) {
    if (!this.passes.godRays) return;
    
    // Convert world position to screen space
    const screenPos = worldPosition.clone().project(this.camera);
    screenPos.x = screenPos.x * 0.5 + 0.5;
    screenPos.y = -screenPos.y * 0.5 + 0.5;
    
    this.passes.godRays.addLightSource(screenPos, options);
  }
  
  triggerTrauma(profileName, amount = 1.0, direction = new THREE.Vector2(0, 0)) {
    this.traumaController.addTrauma(profileName, amount);
    
    // Also trigger chromatic aberration spike
    if (this.passes.chromaticAberration) {
      this.passes.chromaticAberration.setDamage(amount * 0.5, direction);
    }
    
    // Trigger vignette pulse for near-death
    if (profileName === 'nearDeath' && this.passes.vignette) {
      this.passes.vignette.setLowHP(amount);
    }
  }
  
  triggerHitstop(profileName = 'default', intensity = 1.0) {
    return this.hitstopController.trigger(profileName, intensity);
  }
  
  setPlayerHP(hpRatio) {
    this.playerHP = Math.max(0, Math.min(1, hpRatio));
    
    // Update vignette based on HP
    if (this.passes.vignette) {
      const lowHPAmount = Math.max(0, 1.0 - this.playerHP * 2.0); // Starts at 50% HP
      this.passes.vignette.setLowHP(lowHPAmount);
    }
  }
  
  triggerAbilityUse(direction = new THREE.Vector2(0, 0)) {
    if (this.passes.vignette) {
      this.passes.vignette.setAbilityUse(direction);
    }
  }
  
  updateMotionBlur(velocity) {
    if (this.passes.motionBlur) {
      const screenVel = new THREE.Vector2(velocity.x, velocity.y).multiplyScalar(0.01);
      this.passes.motionBlur.setVelocity(screenVel);
    }
  }
  
  render(deltaTime) {
    // Handle hitstop time scaling
    const scaledDelta = this.hitstopController.update(deltaTime);
    
    // Update elapsed time
    this.elapsedTime += scaledDelta;
    
    // Update trauma
    this.traumaController.update(scaledDelta, this.elapsedTime);
    
    // Update passes
    if (this.passes.filmGrain) {
      this.passes.filmGrain.update(scaledDelta);
    }
    if (this.passes.chromaticAberration) {
      this.passes.chromaticAberration.update(scaledDelta);
    }
    if (this.passes.vignette) {
      this.passes.vignette.update(scaledDelta);
    }
    if (this.passes.godRays) {
      this.passes.godRays.update(scaledDelta, this.elapsedTime);
    }
    
    // Capture previous frame for motion blur
    if (this.passes.motionBlur) {
      this.passes.motionBlur.capture(this.renderer);
    }
    
    // Render through composer
    this.composer.render();
  }
  
  resize(width, height) {
    this.composer.setSize(width, height);
    
    if (this.passes.motionBlur) {
      this.passes.motionBlur.dispose();
      this.passes.motionBlur.init(this.renderer, this.scene, this.camera);
    }
  }
  
  dispose() {
    this.composer.passes.forEach(pass => {
      if (pass.dispose) pass.dispose();
    });
    this.composer.dispose();
  }
}
