/*
 * Collective Strike 3D - Budgeted Particle & VFX System
 * 
 * A lightweight, quality-gated particle manager using Points + InstancedMesh
 * with custom ShaderMaterials. Designed for offline-first bundling.
 * 
 * Features:
 * - Particle budgets per quality profile (Low/Medium/High/Ultra)
 * - Arena hazard FX (steam, heat shimmer, ice crack, spore bursts, etc.)
 * - Impact system with material-aware particles + decals
 * - Muzzle flash hierarchy
 * - Tracers with soft trails
 * - Footprints / movement dust
 * - Ability & doctrine residual effects
 */

import * as THREE from "three";

// ============================================================================
// PARTICLE BUDGETS - Quality gated
// ============================================================================

export const PARTICLE_BUDGETS = Object.freeze({
  low: { maxParticles: 150, maxDecals: 4, maxTracers: 6, maxMuzzleFlashes: 2, hazardIntensity: 0.4 },
  medium: { maxParticles: 400, maxDecals: 8, maxTracers: 12, maxMuzzleFlashes: 4, hazardIntensity: 0.65 },
  high: { maxParticles: 800, maxDecals: 16, maxTracers: 20, maxMuzzleFlashes: 6, hazardIntensity: 0.85 },
  ultra: { maxParticles: 1500, maxDecals: 32, maxTracers: 30, maxMuzzleFlashes: 8, hazardIntensity: 1.0 },
  cinematic: { maxParticles: 3000, maxDecals: 64, maxTracers: 50, maxMuzzleFlashes: 12, hazardIntensity: 1.2 },
});

// ============================================================================
// SHADER CHUNKS - Custom GLSL for particle effects
// ============================================================================

// All particle families share a compact attribute layout and four batched draws.
// Birth time is per particle, so late bursts always begin at age zero.
const particleVertexShader = `
  uniform float time;
  uniform float family;
  attribute vec3 velocity;
  attribute float birth;
  attribute float life;
  attribute float size;
  attribute vec3 tint;
  attribute float drag;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vRotation;
  void main() {
    float age = max(0.0, time - birth);
    float t = clamp(age / max(life, 0.001), 0.0, 1.0);
    vec3 pos = position + velocity * age / (1.0 + drag * age);
    if (family == 2.0 || family == 3.0) pos.y -= 1.9 * age * age;
    if (family == 1.0) {
      pos.x += sin(age * 3.0 + position.z * 4.0) * age * 0.16;
      pos.y += age * 0.25;
    }
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    float expansion = family == 1.0 ? 1.0 + t * 2.8 : 1.0 - t * 0.5;
    gl_PointSize = clamp(size * 400.0 / max(0.2, -mv.z) * expansion, 1.0, 128.0);
    vAlpha = (1.0 - smoothstep(0.15, 1.0, t)) * (family == 1.0 ? 0.24 : 1.0);
    vColor = tint;
    vRotation = age * 5.0 + position.x;
  }
`;
const particleFragmentShader = `
  uniform float family;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vRotation;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = length(p);
    if (d > 0.5) discard;
    float shape = exp(-d*d*22.0) * (1.0 - smoothstep(0.32, 0.5, d));
    if (family == 3.0) {
      vec2 q = mat2(cos(vRotation), -sin(vRotation), sin(vRotation), cos(vRotation)) * p;
      shape = 1.0 - smoothstep(0.26, 0.34, abs(q.x) + abs(q.y));
    }
    if (family == 1.0) {
      float lobe = sin(p.x*15.0 + vRotation)*sin(p.y*12.0 - vRotation)*0.15 + 0.85;
      shape *= lobe;
    }
    gl_FragColor = vec4(vColor, vAlpha * shape);
  }
`;
// ============================================================================
// PARTICLE MANAGER CLASS
// ============================================================================

export class ParticleManager {
  constructor(scene, qualityProfile = "high") {
    this.scene = scene;
    this.qualityProfile = qualityProfile;
    this.budget = PARTICLE_BUDGETS[qualityProfile] || PARTICLE_BUDGETS.high;
    
    // Particle pools
    this.particleSystems = new Map();
    this.activeParticles = [];
    this.inactiveParticles = [];
    
    // Decal pool
    this.decals = [];
    this.maxDecals = this.budget.maxDecals;
    
    // Shared geometry
    this.particleGeometry = new THREE.BufferGeometry();
    
    const makeMaterial = (family) => new THREE.ShaderMaterial({
      vertexShader: particleVertexShader, fragmentShader: particleFragmentShader,
      transparent: true, depthWrite: false,
      blending: family === 1 ? THREE.NormalBlending : THREE.AdditiveBlending,
      uniforms: { time: { value: 0 }, family: { value: family } },
    });
    this.particleMaterial = makeMaterial(0);
    this.steamMaterial = makeMaterial(1);
    this.emberMaterial = makeMaterial(2);
    this.iceMaterial = makeMaterial(3);
    const materials = { default: this.particleMaterial, steam: this.steamMaterial, ember: this.emberMaterial, ice: this.iceMaterial };
    for (const [type, material] of Object.entries(materials)) {
      const geometry = new THREE.BufferGeometry();
      for (const [name, width] of Object.entries({position:3, velocity:3, birth:1, life:1, size:1, tint:3, drag:1})) {
        geometry.setAttribute(name, new THREE.BufferAttribute(new Float32Array(PARTICLE_BUDGETS.cinematic.maxParticles * width), width).setUsage(THREE.DynamicDrawUsage));
      }
      geometry.setDrawRange(0, 0);
      const points = new THREE.Points(geometry, material);
      points.frustumCulled = false; // Vertex shader moves particles beyond birth bounds.
      points.name = `combat-particles-${type}`;
      this.particleSystems.set(type, points);
      this.scene.add(points);
    }
    // Decal texture atlas (procedural)
    this.decalCanvas = this._createDecalAtlas();
    this.decalTexture = new THREE.CanvasTexture(this.decalCanvas);
    
    this.debris = [];
    this.debrisMesh = new THREE.InstancedMesh(
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.MeshStandardMaterial({color: 0x89939b, roughness: .72, metalness: .45}),
      96,
    );
    this.debrisMesh.name = 'combat-impact-fragments';
    this.debrisMesh.count = 0;
    this.debrisMesh.frustumCulled = false;
    this.debrisMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.debrisMesh);
    this._debrisTransform = new THREE.Object3D();
    // Time tracking
    this.elapsedTime = 0;
  }
  
  // Presentation-only API: never mutates collision, damage or ability state.
  impact(position, color = 0xffbd72, intensity = 1) {
    const amount = Math.max(.2, Math.min(3, intensity));
    const tint = new THREE.Color(color);
    const quality = this.budget.hazardIntensity;
    this.spawnParticleBurst({position, count: Math.ceil(5 * quality * amount), type: 'steam',
      spread: .14, lifeMin: .28, lifeMax: .7, sizeMin: .16 * amount, sizeMax: .4 * amount,
      color: tint.clone().lerp(new THREE.Color(0x79828c), .82),
      velocityMin: new THREE.Vector3(-.7, .4, -.7), velocityMax: new THREE.Vector3(.7, 1.7, .7)});
    this.spawnParticleBurst({position, count: Math.ceil(5 * quality * amount), type: 'ember',
      spread: .08, lifeMin: .12, lifeMax: .45, sizeMin: .025, sizeMax: .065,
      color: tint, velocityMin: new THREE.Vector3(-3, .6, -3), velocityMax: new THREE.Vector3(3, 4, 3)});
    const limit = Math.min(96, Math.round(64 * quality));
    for (let i = 0; i < Math.ceil(4 * quality * amount) && this.debris.length < limit; i++) {
      this.debris.push({position: position.clone(), velocity: new THREE.Vector3((Math.random()-.5)*5, 1+Math.random()*3, (Math.random()-.5)*5),
        born: this.elapsedTime, life: .4 + Math.random() * .4, size: (.025 + Math.random() * .045) * amount,
        spin: Math.random() * 10, seed: Math.random() * 6});
    }
  }

  detonation(position, color = 0xffa34a, intensity = 1) {
    this.impact(position, color, Math.min(3, 2 * intensity));
    this.spawnParticleBurst({position, count: Math.round(18 * this.budget.hazardIntensity), type: 'steam',
      spread: .7, lifeMin: .6, lifeMax: 1.35, sizeMin: .5, sizeMax: 1.1,
      color: new THREE.Color(0x5c626b),
      velocityMin: new THREE.Vector3(-1.2, 1.8, -1.2), velocityMax: new THREE.Vector3(1.2, 4, 1.2)});
  }

  get stats() {
    return {particles: this.activeParticles.length, decals: this.decals.length, debris: this.debris.length,
      particleDraws: [...this.particleSystems.values()].filter(p => p.geometry.drawRange.count > 0).length,
      debrisDraws: this.debrisMesh.count > 0 ? 1 : 0};
  }

  _createDecalAtlas() {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    
    // Create circular gradient decals
    const gradients = [
      { x: 64, y: 64, r: 40, color: "#333" }, // bullet hole
      { x: 192, y: 64, r: 35, color: "#444" }, // impact crater
      { x: 64, y: 192, r: 45, color: "#2a2" }, // acid/bio splat
      { x: 192, y: 192, r: 38, color: "#555" }, // scorch mark
    ];
    
    for (const g of gradients) {
      const grad = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r);
      grad.addColorStop(0, g.color);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
      ctx.fill();
    }
    
    return canvas;
  }
  
  setQuality(profile) {
    this.qualityProfile = profile;
    this.budget = PARTICLE_BUDGETS[profile] || PARTICLE_BUDGETS.high;
    this.maxDecals = this.budget.maxDecals;
    this.debris.length = Math.min(this.debris.length, Math.min(96, Math.round(64 * this.budget.hazardIntensity)));
    this._enforceBudgets();
  }
  
  _enforceBudgets() {
    // Trim excess particles if budget reduced
    while (this.activeParticles.length > this.budget.maxParticles) {
      const p = this.activeParticles.pop();
      this._disposeParticle(p);
    }
    while (this.decals.length > this.maxDecals) {
      const d = this.decals.shift();
      this.scene.remove(d.mesh);
      d.mesh.geometry.dispose();
      d.mesh.material.dispose();
    }
  }
  
  spawnParticle(config) {
    if (this.activeParticles.length >= this.budget.maxParticles) {
      // Recycle oldest particle
      const old = this.activeParticles.shift();
      this._disposeParticle(old);
    }
    
    const {
      position = new THREE.Vector3(),
      velocity = new THREE.Vector3(0, 0, 0),
      life = 1.0,
      size = 0.1,
      color = new THREE.Color(1, 1, 1),
      drag = 0.3,
      type = "default",
    } = config;
    
    const particle = {
      position: position.clone(), velocity: velocity.clone(), color: color.clone(),
      size: Math.max(0.001, size), drag: Math.max(0, drag),
      userData: { spawnTime: this.elapsedTime, life: Math.max(0.001, life), type: this.particleSystems.has(type) ? type : 'default' },
    };
    this.activeParticles.push(particle);
    return particle;
  }

  spawnParticleBurst(config) {
    const {
      position = new THREE.Vector3(),
      count = 10,
      spread = 0.5,
      velocityMin = new THREE.Vector3(-1, 1, -1),
      velocityMax = new THREE.Vector3(1, 2, 1),
      lifeMin = 0.5,
      lifeMax = 1.5,
      sizeMin = 0.05,
      sizeMax = 0.15,
      color = new THREE.Color(1, 1, 1),
      type = "default",
      drag = .3,
    } = config;
    
    const spawned = [];
    for (let i = 0; i < count; i++) {
      const vel = new THREE.Vector3(
        velocityMin.x + Math.random() * (velocityMax.x - velocityMin.x),
        velocityMin.y + Math.random() * (velocityMax.y - velocityMin.y),
        velocityMin.z + Math.random() * (velocityMax.z - velocityMin.z),
      );
      
      spawned.push(this.spawnParticle({
        position: position.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread,
        )),
        velocity: vel,
        life: lifeMin + Math.random() * (lifeMax - lifeMin),
        size: sizeMin + Math.random() * (sizeMax - sizeMin),
        color: color.clone().offsetHSL(Math.random() * 0.1, 0, 0),
        type, drag,
      }));
    }
    
    return spawned;
  }
  
  spawnImpact(position, normal, materialType = "concrete", intensity = 1.0) {
    const scale = Math.min(1.5, intensity);
    
    // Spawn particles based on material type
    switch (materialType) {
      case "metal":
        this.spawnParticleBurst({
          position,
          count: Math.floor(8 * scale * this.budget.hazardIntensity),
          spread: 0.1,
          velocityMin: new THREE.Vector3(-2, 0.5, -2).multiplyScalar(scale),
          velocityMax: new THREE.Vector3(2, 2, 2).multiplyScalar(scale),
          lifeMin: 0.3,
          lifeMax: 0.6,
          color: new THREE.Color(1, 0.9, 0.6),
          type: "default",
        });
        break;
        
      case "ice":
        this.spawnParticleBurst({
          position,
          count: Math.floor(12 * scale * this.budget.hazardIntensity),
          spread: 0.15,
          velocityMin: new THREE.Vector3(-1.5, 0.3, -1.5).multiplyScalar(scale),
          velocityMax: new THREE.Vector3(1.5, 1.5, 1.5).multiplyScalar(scale),
          lifeMin: 0.4,
          lifeMax: 0.8,
          color: new THREE.Color(0.7, 0.85, 1.0),
          type: "ice",
        });
        break;
        
      case "organic":
        this.spawnParticleBurst({
          position,
          count: Math.floor(10 * scale * this.budget.hazardIntensity),
          spread: 0.2,
          velocityMin: new THREE.Vector3(-1, 0.2, -1).multiplyScalar(scale),
          velocityMax: new THREE.Vector3(1, 1.5, 1).multiplyScalar(scale),
          lifeMin: 0.5,
          lifeMax: 1.0,
          color: new THREE.Color(0.4, 0.6, 0.3),
          type: "default",
        });
        break;
        
      default: // concrete / stone / dust
        this.spawnParticleBurst({
          position,
          count: Math.floor(6 * scale * this.budget.hazardIntensity),
          spread: 0.1,
          velocityMin: new THREE.Vector3(-1, 0.3, -1).multiplyScalar(scale),
          velocityMax: new THREE.Vector3(1, 1.5, 1).multiplyScalar(scale),
          lifeMin: 0.4,
          lifeMax: 0.7,
          color: new THREE.Color(0.7, 0.65, 0.6),
          type: "default",
        });
    }
    
    // Add decal
    this._spawnDecal(position, normal, materialType);
  }
  
  _spawnDecal(position, normal, materialType) {
    if (this.decals.length >= this.maxDecals) {
      const old = this.decals.shift();
      this.scene.remove(old.mesh);
      old.mesh.geometry.dispose();
      old.mesh.material.dispose();
    }
    
    // Select decal frame based on material type
    const frameIndex = {
      concrete: 1,
      metal: 1,
      ice: 0,
      organic: 2,
      scorched: 3,
    }[materialType] || 0;
    
    const uvScale = 0.5;
    const uvOffset = new THREE.Vector2(
      (frameIndex % 2) * 0.5,
      Math.floor(frameIndex / 2) * 0.5,
    );
    
    const geometry = new THREE.PlaneGeometry(0.15, 0.15);
    const material = new THREE.MeshBasicMaterial({
      map: this.decalTexture,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      opacity: 0.8,
    });
    
    const uv = geometry.getAttribute('uv');
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * uvScale + uvOffset.x, uv.getY(i) * uvScale + uvOffset.y);
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position).addScaledVector(normal, 0.012);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal.clone().normalize());
    
    this.scene.add(mesh);
    this.decals.push({ mesh, spawnTime: this.elapsedTime, life: 8.0 });
  }
  
  spawnMuzzleFlash(position, direction, weaponType = "rifle") {
    const scale = { pistol: 0.6, rifle: 1.0, shotgun: 1.4, sniper: 0.8 }[weaponType] || 1.0;
    const intensity = this.budget.hazardIntensity;
    
    // Primary flash - bright core
    this.spawnParticleBurst({
      position,
      count: Math.floor(5 * scale * intensity),
      spread: 0.05,
      velocityMin: direction.clone().multiplyScalar(2),
      velocityMax: direction.clone().multiplyScalar(4),
      lifeMin: 0.05,
      lifeMax: 0.12,
      sizeMin: 0.15 * scale,
      sizeMax: 0.3 * scale,
      color: new THREE.Color(1, 0.95, 0.7),
    });
    
    // Secondary flash - outer glow
    this.spawnParticleBurst({
      position: position.clone().add(direction.clone().multiplyScalar(0.1)),
      count: Math.floor(3 * scale * intensity),
      spread: 0.15,
      velocityMin: direction.clone().multiplyScalar(1),
      velocityMax: direction.clone().multiplyScalar(2.5),
      lifeMin: 0.08,
      lifeMax: 0.18,
      sizeMin: 0.25 * scale,
      sizeMax: 0.5 * scale,
      color: new THREE.Color(1, 0.8, 0.5),
    });
  }
  
  spawnTracer(start, end, color = new THREE.Color(1, 0.9, 0.6), duration = 0.15) {
    if (this.activeParticles.filter(p => p.userData.isTracer).length >= this.budget.maxTracers) return;
    
    const direction = new THREE.Vector3().subVectors(end, start);
    const length = direction.length();
    direction.normalize();
    
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array([start.x, start.y, start.z, end.x, end.y, end.z]);
    const colors = new Float32Array([
      color.r, color.g, color.b,
      color.r * 0.5, color.g * 0.4, color.b * 0.3,
    ]);
    const alphas = new Float32Array([1.0, 0.0]);
    
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
    
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float alpha;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        uniform vec3 color;
        void main() {
          gl_FragColor = vec4(color, vAlpha * 0.8);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        color: { value: color },
      },
    });
    
    const line = new THREE.Line(geometry, material);
    line.userData = {
      spawnTime: this.elapsedTime,
      life: duration,
      isTracer: true,
      start: start.clone(),
      end: end.clone(),
    };
    
    this.scene.add(line);
    this.activeParticles.push(line);
  }
  
  spawnFootprint(position, materialType = "dust") {
    const color = {
      dust: new THREE.Color(0.75, 0.7, 0.65),
      snow: new THREE.Color(0.9, 0.92, 0.95),
      mud: new THREE.Color(0.35, 0.3, 0.25),
      leaves: new THREE.Color(0.4, 0.5, 0.3),
    }[materialType] || new THREE.Color(0.7, 0.7, 0.7);
    
    this.spawnParticle({
      position: position.clone().add(new THREE.Vector3(0, 0.02, 0)),
      velocity: new THREE.Vector3(0, 0.05, 0),
      life: 2.0,
      size: 0.08,
      color,
      drag: 0.8,
    });
  }
  
  update(deltaTime) {
    this.elapsedTime += Math.max(0, Number.isFinite(deltaTime) ? deltaTime : 0);
    
    // Update shader uniforms
    this.particleMaterial.uniforms.time.value = this.elapsedTime;
    this.steamMaterial.uniforms.time.value = this.elapsedTime;
    this.emberMaterial.uniforms.time.value = this.elapsedTime;
    this.iceMaterial.uniforms.time.value = this.elapsedTime;
    
    // Update active particles
    for (let i = this.activeParticles.length - 1; i >= 0; i--) {
      const p = this.activeParticles[i];
      const data = p.userData;
      const age = this.elapsedTime - data.spawnTime;
      
      if (age >= data.life) {
        this._disposeParticle(p);
        this.activeParticles.splice(i, 1);
      }
    }
    
    // Compact live attributes into four persistent GPU buffers; no per-shot geometry.
    const counts = { default: 0, steam: 0, ember: 0, ice: 0 };
    for (const p of this.activeParticles) {
      if (p.userData.isTracer) continue;
      const type = p.userData.type, i = counts[type]++;
      const a = this.particleSystems.get(type).geometry.attributes;
      a.position.setXYZ(i, p.position.x, p.position.y, p.position.z);
      a.velocity.setXYZ(i, p.velocity.x, p.velocity.y, p.velocity.z);
      a.tint.setXYZ(i, p.color.r, p.color.g, p.color.b);
      a.birth.setX(i, p.userData.spawnTime); a.life.setX(i, p.userData.life);
      a.size.setX(i, p.size); a.drag.setX(i, p.drag);
    }
    for (const [type, points] of this.particleSystems) {
      points.geometry.setDrawRange(0, counts[type]);
      points.visible = counts[type] > 0;
      for (const attribute of Object.values(points.geometry.attributes)) {
        attribute.clearUpdateRanges();
        if (counts[type]) attribute.addUpdateRange(0, counts[type] * attribute.itemSize);
        attribute.needsUpdate = true;
      }
    }

    this.debris = this.debris.filter(p => this.elapsedTime - p.born < p.life);
    const transform = this._debrisTransform;
    for (let i = 0; i < this.debris.length; i++) {
      const p = this.debris[i], age = this.elapsedTime - p.born;
      transform.position.copy(p.position).addScaledVector(p.velocity, age);
      transform.position.y -= 4.9 * age * age;
      transform.rotation.set(p.seed + age * p.spin, age * p.spin * .7, p.seed);
      transform.scale.set(p.size, p.size * .55, p.size * (1 - age / p.life));
      transform.updateMatrix();
      this.debrisMesh.setMatrixAt(i, transform.matrix);
    }
    this.debrisMesh.count = this.debris.length;
    this.debrisMesh.instanceMatrix.needsUpdate = true;

    // Update decals
    for (let i = this.decals.length - 1; i >= 0; i--) {
      const d = this.decals[i];
      const age = this.elapsedTime - d.spawnTime;
      
      if (age >= d.life) {
        this.scene.remove(d.mesh);
        d.mesh.geometry.dispose();
        d.mesh.material.dispose();
        this.decals.splice(i, 1);
      } else {
        // Fade out
        const fadeStart = d.life * 0.7;
        if (age > fadeStart) {
          d.mesh.material.opacity = 0.8 * (1 - (age - fadeStart) / (d.life - fadeStart));
        }
      }
    }
  }
  
  _disposeParticle(p) {
    if (p.isObject3D) this.scene.remove(p);
    if (p.geometry) p.geometry.dispose();
    if (p.userData.isTracer) p.material?.dispose();
  }
  
  clear() {
    this.debris.length = 0;
    this.debrisMesh.count = 0;
    for (const p of this.activeParticles) {
      this._disposeParticle(p);
    }
    this.activeParticles = [];
    for (const points of this.particleSystems.values()) { points.geometry.setDrawRange(0, 0); points.visible = false; }
    
    for (const d of this.decals) {
      this.scene.remove(d.mesh);
      d.mesh.geometry.dispose();
      d.mesh.material.dispose();
    }
    this.decals = [];
  }
  
  dispose() {
    this.clear();
    this.scene.remove(this.debrisMesh);
    this.debrisMesh.geometry.dispose();
    this.debrisMesh.material.dispose();
    this.particleGeometry.dispose();
    for (const points of this.particleSystems.values()) { this.scene.remove(points); points.geometry.dispose(); }
    this.particleSystems.clear();
    this.particleMaterial.dispose();
    this.steamMaterial.dispose();
    this.emberMaterial.dispose();
    this.iceMaterial.dispose();
    if (this.decalTexture) this.decalTexture.dispose();
  }
}

// ============================================================================
// HAZARD EFFECT FACTORIES - Arena-specific VFX
// ============================================================================

export function createForgeSteamEffect(particleManager, arenaConfig) {
  const { hazardIntensity } = particleManager.budget;
  const emitterPositions = [
    new THREE.Vector3(12, 0.5, 12),
    new THREE.Vector3(24, 0.5, 8),
    new THREE.Vector3(8, 0.5, 24),
  ];
  
  const effect = {
    type: "forge-steam",
    emitters: [],
    update: (time) => {
      if (Math.random() > 0.15 * hazardIntensity) return;
      
      const emitter = emitterPositions[Math.floor(Math.random() * emitterPositions.length)];
      const jitter = new THREE.Vector3(
        (Math.random() - 0.5) * 1.5,
        0,
        (Math.random() - 0.5) * 1.5,
      );
      
      particleManager.spawnParticleBurst({
        position: emitter.clone().add(jitter),
        count: Math.floor(3 * hazardIntensity),
        spread: 0.3,
        velocityMin: new THREE.Vector3(-0.1, 0.8, -0.1),
        velocityMax: new THREE.Vector3(0.1, 1.5, 0.1),
        lifeMin: 1.5,
        lifeMax: 3.0,
        sizeMin: 0.3,
        sizeMax: 0.6,
        color: new THREE.Color(0.85, 0.85, 0.9),
        type: "steam",
      });
    },
    dispose: () => {},
  };
  
  return effect;
}

export function createCryoIceCrackEffect(particleManager, arenaConfig) {
  const { hazardIntensity } = particleManager.budget;
  const crackZones = [
    { x: 10, z: 15, radius: 4 },
    { x: 22, z: 10, radius: 3 },
    { x: 16, z: 22, radius: 5 },
  ];
  
  const effect = {
    type: "cryo-ice-crack",
    lastCrack: 0,
    update: (time) => {
      if (time - effect.lastCrack < 2.5 / hazardIntensity) return;
      if (Math.random() > 0.08 * hazardIntensity) return;
      
      effect.lastCrack = time;
      
      const zone = crackZones[Math.floor(Math.random() * crackZones.length)];
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * zone.radius;
      
      const position = new THREE.Vector3(
        zone.x + Math.cos(angle) * dist,
        0.1,
        zone.z + Math.sin(angle) * dist,
      );
      
      // Ice shard burst
      particleManager.spawnParticleBurst({
        position,
        count: Math.floor(8 * hazardIntensity),
        spread: 0.2,
        velocityMin: new THREE.Vector3(-1, 0.5, -1),
        velocityMax: new THREE.Vector3(1, 1.5, 1),
        lifeMin: 0.6,
        lifeMax: 1.2,
        sizeMin: 0.04,
        sizeMax: 0.1,
        color: new THREE.Color(0.75, 0.88, 1.0),
        type: "ice",
      });
      
      // Occasional secondary crystalline particles
      if (Math.random() > 0.5) {
        particleManager.spawnParticleBurst({
          position: position.clone().add(new THREE.Vector3(0, 0.3, 0)),
          count: Math.floor(4 * hazardIntensity),
          spread: 0.15,
          velocityMin: new THREE.Vector3(-0.5, 1, -0.5),
          velocityMax: new THREE.Vector3(0.5, 2, 0.5),
          lifeMin: 0.8,
          lifeMax: 1.5,
          sizeMin: 0.02,
          sizeMax: 0.05,
          color: new THREE.Color(0.9, 0.95, 1.0),
          type: "ice",
        });
      }
    },
    dispose: () => {},
  };
  
  return effect;
}

export function createCalderaMagmaEffect(particleManager, arenaConfig) {
  const { hazardIntensity } = particleManager.budget;
  const ventPositions = [
    new THREE.Vector3(18, 0.3, 13),
    new THREE.Vector3(14, 0.3, 18),
    new THREE.Vector3(22, 0.3, 16),
  ];
  
  const effect = {
    type: "caldera-magma",
    embers: [],
    update: (time) => {
      // Continuous ember emission
      for (const vent of ventPositions) {
        if (Math.random() > 0.25 * hazardIntensity) continue;
        
        const jitter = new THREE.Vector3(
          (Math.random() - 0.5) * 1.0,
          0,
          (Math.random() - 0.5) * 1.0,
        );
        
        particleManager.spawnParticleBurst({
          position: vent.clone().add(jitter),
          count: Math.floor(2 * hazardIntensity),
          spread: 0.2,
          velocityMin: new THREE.Vector3(-0.2, 0.6, -0.2),
          velocityMax: new THREE.Vector3(0.2, 1.8, 0.2),
          lifeMin: 0.8,
          lifeMax: 1.8,
          sizeMin: 0.08,
          sizeMax: 0.2,
          color: new THREE.Color(1, 0.5, 0.1),
          type: "ember",
        });
      }
      
      // Occasional magma bubble burst
      if (Math.random() > 0.04 * hazardIntensity) return;
      
      const vent = ventPositions[Math.floor(Math.random() * ventPositions.length)];
      particleManager.spawnParticleBurst({
        position: vent.clone(),
        count: Math.floor(6 * hazardIntensity),
        spread: 0.5,
        velocityMin: new THREE.Vector3(-0.5, 1.5, -0.5),
        velocityMax: new THREE.Vector3(0.5, 3.0, 0.5),
        lifeMin: 0.5,
        lifeMax: 1.0,
        sizeMin: 0.15,
        sizeMax: 0.35,
        color: new THREE.Color(1, 0.3, 0.05),
        type: "ember",
      });
    },
    dispose: () => {},
  };
  
  return effect;
}

// ============================================================================
// VERDANT SPORE BURST EFFECT
// ============================================================================

export function createVerdantSporeEffect(particleManager, arenaConfig) {
  const { hazardIntensity } = particleManager.budget;
  const sporeNodes = [
    new THREE.Vector3(8, 1.5, 8),
    new THREE.Vector3(24, 1.5, 24),
    new THREE.Vector3(10, 1.5, 22),
    new THREE.Vector3(22, 1.5, 10),
  ];
  
  const effect = {
    type: "verdant-spore",
    pulseTimer: 0,
    update: (time) => {
      effect.pulseTimer += 0.016;
      
      // Periodic spore release
      if (effect.pulseTimer > 3.0 / hazardIntensity) {
        effect.pulseTimer = 0;
        
        const node = sporeNodes[Math.floor(Math.random() * sporeNodes.length)];
        const spread = 0.8 + Math.random() * 0.5;
        
        particleManager.spawnParticleBurst({
          position: node.clone(),
          count: Math.floor(12 * hazardIntensity),
          spread,
          velocityMin: new THREE.Vector3(-0.3, 0.2, -0.3),
          velocityMax: new THREE.Vector3(0.3, 0.6, 0.3),
          lifeMin: 2.0,
          lifeMax: 4.0,
          sizeMin: 0.03,
          sizeMax: 0.08,
          color: new THREE.Color(0.6, 0.9, 0.5),
          drag: 0.5,
        });
      }
    },
    dispose: () => {},
  };
  
  return effect;
}

// ============================================================================
// MIRAGE NULL-PULSE RING EFFECT
// ============================================================================

export function createMiragePulseEffect(particleManager, arenaConfig) {
  const { hazardIntensity } = particleManager.budget;
  const pulseCenters = [
    new THREE.Vector3(18, 0.5, 13),
    new THREE.Vector3(10, 0.5, 20),
    new THREE.Vector3(24, 0.5, 8),
  ];
  
  const effect = {
    type: "mirage-pulse",
    pulseTimer: 0,
    activeRings: [],
    update: (time) => {
      effect.pulseTimer += 0.016;
      
      if (effect.pulseTimer > 4.0 / hazardIntensity) {
        effect.pulseTimer = 0;
        
        const center = pulseCenters[Math.floor(Math.random() * pulseCenters.length)];
        
        // Create expanding ring
        const ringCount = Math.floor(16 * hazardIntensity);
        const radius = 0.5;
        const maxRadius = 6;
        const speed = 2.0;
        
        for (let i = 0; i < ringCount; i++) {
          const angle = (i / ringCount) * Math.PI * 2;
          const position = new THREE.Vector3(
            center.x + Math.cos(angle) * radius,
            center.y,
            center.z + Math.sin(angle) * radius,
          );
          
          particleManager.spawnParticle({
            position,
            velocity: new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle)).multiplyScalar(speed),
            life: maxRadius / speed,
            size: 0.12,
            color: new THREE.Color(0.7, 0.5, 1.0),
            drag: 0.0,
          });
        }
      }
    },
    dispose: () => {},
  };
  
  return effect;
}

// ============================================================================
// NEON TRANSIT WAKE AND RAIN EFFECT
// ============================================================================

export function createNeonRainEffect(particleManager, arenaConfig) {
  const { hazardIntensity } = particleManager.budget;
  const rainArea = { x: 16, z: 13, width: 20, depth: 16 };
  
  const effect = {
    type: "neon-rain",
    dripTimer: 0,
    update: (time) => {
      effect.dripTimer += 0.016;
      
      // Continuous rain
      const dripCount = Math.floor(8 * hazardIntensity);
      for (let i = 0; i < dripCount; i++) {
        const x = rainArea.x - rainArea.width / 2 + Math.random() * rainArea.width;
        const z = rainArea.z - rainArea.depth / 2 + Math.random() * rainArea.depth;
        
        particleManager.spawnParticle({
          position: new THREE.Vector3(x, 8, z),
          velocity: new THREE.Vector3(0, -3, 0),
          life: 2.5,
          size: 0.02,
          color: new THREE.Color(0.6, 0.7, 0.9),
          drag: 0.1,
        });
      }
      
      // Transit wake particles
      if (Math.random() > 0.1 * hazardIntensity) return;
      
      const transitPath = [
        new THREE.Vector3(8, 3, 10),
        new THREE.Vector3(24, 3, 16),
      ];
      
      const t = (time % 3) / 3;
      const position = new THREE.Vector3().lerpVectors(transitPath[0], transitPath[1], t);
      
      particleManager.spawnParticleBurst({
        position,
        count: Math.floor(3 * hazardIntensity),
        spread: 0.3,
        velocityMin: new THREE.Vector3(-0.5, 0.3, -0.5),
        velocityMax: new THREE.Vector3(0.5, 0.8, 0.5),
        lifeMin: 0.8,
        lifeMax: 1.5,
        sizeMin: 0.05,
        sizeMax: 0.12,
        color: new THREE.Color(0.2, 0.8, 1.0),
      });
    },
    dispose: () => {},
  };
  
  return effect;
}

// ============================================================================
// LUNAR DUST PLUME EFFECT
// ============================================================================

export function createLunarDustEffect(particleManager, arenaConfig) {
  const { hazardIntensity } = particleManager.budget;
  const plumeSources = [
    new THREE.Vector3(16, 0.2, 8),
    new THREE.Vector3(8, 0.2, 20),
    new THREE.Vector3(24, 0.2, 18),
  ];
  
  const effect = {
    type: "lunar-dust",
    update: (time) => {
      if (Math.random() > 0.12 * hazardIntensity) return;
      
      const source = plumeSources[Math.floor(Math.random() * plumeSources.length)];
      const jitter = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        0,
        (Math.random() - 0.5) * 2,
      );
      
      // Low-gravity dust plume
      particleManager.spawnParticleBurst({
        position: source.clone().add(jitter),
        count: Math.floor(5 * hazardIntensity),
        spread: 0.4,
        velocityMin: new THREE.Vector3(-0.3, 0.4, -0.3),
        velocityMax: new THREE.Vector3(0.3, 1.2, 0.3),
        lifeMin: 2.5,
        lifeMax: 4.5,
        sizeMin: 0.04,
        sizeMax: 0.12,
        color: new THREE.Color(0.75, 0.73, 0.7),
        drag: 0.2,
      });
    },
    dispose: () => {},
  };
  
  return effect;
}

// ============================================================================
// EXPORT ALL HAZARD EFFECT CREATORS
// ============================================================================

export const HAZARD_EFFECT_CREATORS = {
  "forge-steam": createForgeSteamEffect,
  "cryo-ice-crack": createCryoIceCrackEffect,
  "caldera-magma": createCalderaMagmaEffect,
  "verdant-spore": createVerdantSporeEffect,
  "mirage-pulse": createMiragePulseEffect,
  "neon-rain": createNeonRainEffect,
  "lunar-dust": createLunarDustEffect,
};

// Export for arena-runtime integration
export function createHazardEffectsForArena(particleManager, arenaDefinition) {
  const effects = [];
  const hazardTypes = new Set();
  
  // Extract hazard types from arena definition
  if (arenaDefinition.hazards) {
    for (const hazard of arenaDefinition.hazards) {
      if (hazard.type) {
        hazardTypes.add(hazard.type);
      }
    }
  }
  
  // Map hazard types to visual effects
  const typeMapping = {
    heat: "caldera-magma",
    dust: "lunar-dust",
    cold: "cryo-ice-crack",
    organic: "verdant-spore",
    energy: "mirage-pulse",
    steam: "forge-steam",
    rain: "neon-rain",
  };
  
  for (const hazardType of hazardTypes) {
    const effectType = typeMapping[hazardType] || hazardType;
    const creator = HAZARD_EFFECT_CREATORS[effectType];
    if (creator) {
      effects.push(creator(particleManager, arenaDefinition));
    }
  }
  
  return effects;
}
