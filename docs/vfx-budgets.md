# VFX Budgets & Quality Profiles

This document describes the visual effects (VFX) budgeting system for Collective Strike 3D, ensuring the game maintains performance across a wide range of hardware while delivering premium visual quality on capable systems.

## Quality Profile Overview

Collective Strike 3D uses a tiered quality system that scales VFX complexity based on user hardware and preferences. Each profile defines strict budgets for:

- **Particle Count**: Maximum simultaneous particles in the scene
- **Light Count**: Maximum dynamic lights affecting particles/VFX
- **Post-Process Complexity**: Number and resolution of post-processing passes
- **Shader Complexity**: Instruction count and texture sampling limits
- **Update Frequency**: How often particle systems are updated (Hz)

### Quality Profile Table

| Profile | Particle Budget | Light Budget | Post-Process Passes | Update Rate | Target Hardware |
|---------|-----------------|--------------|---------------------|-------------|-----------------|
| **Low** | 200 | 2 | 3 (Bloom + Vignette) | 30 Hz | Integrated GPUs, mobile |
| **Medium** | 500 | 4 | 5 (+ Grain + CA) | 45 Hz | Mid-range discrete GPUs |
| **High** | 1000 | 8 | 7 (+ Motion Blur) | 60 Hz | High-end discrete GPUs |
| **Ultra** | 2000 | 16 | 9 (+ God Rays) | 90 Hz | Enthusiast GPUs |
| **Cinematic** | 5000+ | 32+ | All effects maxed | 120+ Hz | Screenshots/trailers |

## Particle System Architecture

### ParticleManager Class

The `ParticleManager` (in `src/cs3d-particles.js`) is the central hub for all particle effects. It implements:

```javascript
// Usage example
const particleManager = new ParticleManager(scene, camera, renderer, {
  qualityProfile: 'high', // or 'low', 'medium', 'ultra', 'cinematic'
  hazardIntensity: 0.8    // 0-1 scale for arena hazard effects
});

// Spawn particles
particleManager.spawnImpact(position, normal, materialType);
particleManager.spawnMuzzleFlash(position, direction);
particleManager.spawnTracer(start, end, color);
particleManager.spawnFootprint(position, movementType, surfaceType);
```

### Particle Types

Each particle type has custom shaders optimized for performance:

1. **Default**: Generic billboard particles with fade-in/out
2. **Steam**: Volumetric-looking rising columns with soft dissipation
3. **Ember**: Glowing particles with heat distortion effect
4. **Ice**: Crystalline shards with refraction-like coloring
5. **Spore**: Organic floating particles with gentle drift
6. **Pulse**: Energy rings expanding from emission point
7. **Rain**: Streak particles with gravity acceleration

### Shader Implementation

All particle shaders use `Points` with `ShaderMaterial` for maximum efficiency:

```glsl
// Vertex shader example (steam particles)
attribute float size;
attribute vec3 customColor;
attribute float age;
uniform float time;

varying vec3 vColor;
varying float vAge;

void main() {
  vColor = customColor;
  vAge = age;
  
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  
  // Size attenuation with distance
  gl_PointSize = size * (300.0 / -mvPosition.z);
  
  // Animate rise over lifetime
  mvPosition.y += sin(time * 2.0 + position.x) * 0.1;
  
  gl_Position = projectionMatrix * mvPosition;
}
```

## Hazard Effect Creators

Hazard effects are arena-specific environmental VFX that run continuously. Each arena has a unique hazard effect creator function.

### Available Hazard Effects

| Arena | Hazard Effect | Visual Description |
|-------|---------------|-------------------|
| **forge** | Steam Columns | Rising steam vents with heat shimmer |
| **cryo** | Ice Cracks | Crystalline fracture particles |
| **caldera** | Magma Embers | Glowing embers from lava flows |
| **verdant** | Spore Bursts | Organic spore clouds |
| **mirage** | Null Pulse | Energy ring distortions |
| **neon** | Rain Streaks | Falling rain with transit wake |
| **lunar** | Dust Plumes | Fine regolith dust particles |

### Authoring a New Hazard Effect

To add a hazard effect for a new arena:

1. **Define the effect creator** in `src/cs3d-particles.js`:

```javascript
function createLavaDripEffect(particleManager, config) {
  const { scene, emitterPosition, intensity } = config;
  
  const effect = {
    type: 'lava-drip',
    emitter: emitterPosition.clone(),
    intensity: Math.min(intensity, 1.0),
    particleCount: Math.floor(50 * intensity),
    updateInterval: 100, // ms between spawns
    lastUpdate: 0
  };
  
  return effect;
}
```

2. **Register the effect** in the hazard effect registry:

```javascript
export const HAZARD_EFFECT_CREATORS = {
  'forge-steam': createForgeSteamEffect,
  'cryo-ice-crack': createCryoIceCrackEffect,
  'caldera-magma': createCalderaMagmaEffect,
  'verdant-spore': createVerdantSporeEffect,
  'mirage-pulse': createMiragePulseEffect,
  'neon-rain': createNeonRainEffect,
  'lunar-dust': createLunarDustEffect,
  'volcano-lava-drip': createLavaDripEffect  // Add your new effect
};
```

3. **Configure in arena definition** (`src/arena-core.js`):

```javascript
ARENA_DEFINITIONS['volcano'] = {
  // ... existing arena config
  hazardEffects: [
    {
      type: 'lava-drip',
      emitterPosition: new THREE.Vector3(0, 10, 0),
      intensity: 0.8,
      boundingRadius: 50
    }
  ]
};
```

### Hazard Effect Lifecycle

Hazard effects are managed by the `HazardEffectController`:

```javascript
class HazardEffectController {
  constructor(particleManager, arenaConfig) {
    this.particleManager = particleManager;
    this.effects = [];
    
    // Initialize effects from arena config
    if (arenaConfig.hazardEffects) {
      arenaConfig.hazardEffects.forEach(effectConfig => {
        const creator = HAZARD_EFFECT_CREATORS[effectConfig.type];
        if (creator) {
          this.effects.push(creator(particleManager, effectConfig));
        }
      });
    }
  }
  
  update(deltaTime, time) {
    this.effects.forEach(effect => {
      if (time - effect.lastUpdate > effect.updateInterval) {
        // Spawn particles based on intensity
        const spawnCount = Math.floor(effect.particleCount * deltaTime * 10);
        for (let i = 0; i < spawnCount; i++) {
          this.particleManager.spawn(/* ... */);
        }
        effect.lastUpdate = time;
      }
    });
  }
  
  setIntensity(intensity) {
    // Scale all effects by global intensity (quality profile)
    this.effects.forEach(effect => {
      effect.intensity = intensity;
    });
  }
}
```

## Impact System

The impact system creates material-aware particle effects when bullets hit surfaces.

### Material Types

| Material Type | Particle Color | Secondary Effect | Decal Type |
|---------------|----------------|------------------|------------|
| **metal** | Yellow/orange sparks | Bright flash | Scorch mark |
| **concrete** | Gray dust cloud | Small debris | Chip mark |
| **ice** | Blue-white chips | Crystalline shards | Frost crack |
| **organic** | Red gore splatter | Blood mist | Blood stain |
| **glass** | Clear shards | Shattering particles | Crack pattern |
| **wood** | Brown splinters | Wood chips | Splinter mark |
| **energy** | Colored glow | Dissipating rings | Burn pattern |

### Impact Decal Atlas

Impacts use a small decal atlas (64x64 pixels, 8x8 grid) for efficient rendering:

```
[Scorch] [Chip] [Crack] [Blood] [Glass] [Wood] [Energy] [Empty]
```

Decals are rendered using `DecalGeometry` or projected quads with the atlas UV coordinates.

## Muzzle Flash Hierarchy

Muzzle flashes have multiple layers for realism:

1. **Primary Flash**: Bright core (1-2 frames)
2. **Secondary Flash**: Expanding ring (2-3 frames)
3. **Light**: Temporary point light for scene illumination
4. **Residual Glow**: Fading afterimage (3-5 frames)

```javascript
particleManager.spawnMuzzleFlash(position, direction, {
  primaryScale: 1.0,
  secondaryScale: 1.5,
  lightIntensity: 2.0,
  lightDistance: 10,
  duration: 0.1  // seconds
});
```

## Tracer System

Tracers are short-lived ribbon particles showing bullet paths:

```javascript
particleManager.spawnTracer(startPos, endPos, {
  color: new THREE.Color(0xffaa00),
  width: 0.05,
  duration: 0.3,
  fadeOut: true
});
```

Tracers use stretched `Points` or `LineSegments` with custom shaders for smooth fading.

## Footprint System

Footprints and movement dust appear based on:

- Surface type (more visible on lunar, cryo, verdant, solar)
- Movement speed (running creates more disturbance)
- Crouch/walk state (reduced visibility)

```javascript
particleManager.spawnFootprint(position, {
  movementType: 'run',  // 'walk', 'run', 'crouch', 'slide'
  surfaceType: 'dust',  // 'metal', 'ice', 'organic', etc.
  fadeDuration: 3.0     // seconds until invisible
});
```

## Post-Processing Pipeline

The post-processing chain (in `src/cs3d-postprocess.js`) extends `EffectComposer`:

### Effect Chain Order

1. **RenderPass**: Base scene render
2. **UnrealBloomPass**: Existing bloom (quality-gated threshold/strength)
3. **FilmGrainPass**: Subtle noise/dither (Medium+)
4. **ChromaticAberrationPass**: Damage-reactive CA (Medium+)
5. **DynamicVignettePass**: HP/ability reactive vignette (High+)
6. **MotionBlurPass**: Speed-based blur (High+)
7. **GodRaysPass**: Light shafts from emissives (Ultra+)

### Quality Gating Example

```javascript
class PostProcessPipeline {
  constructor(renderer, scene, camera, qualityProfile) {
    this.composer = new EffectComposer(renderer);
    this.quality = QUALITY_PROFILES[qualityProfile];
    
    // Always add bloom
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      this.quality.bloomStrength,
      this.quality.bloomRadius,
      this.quality.bloomThreshold
    );
    this.composer.addPass(this.bloomPass);
    
    // Add grain on Medium+
    if (this.quality.filmGrain) {
      this.grainPass = new ShaderPass(filmGrainShader);
      this.grainPass.uniforms.intensity.value = this.quality.grainIntensity;
      this.composer.addPass(this.grainPass);
    }
    
    // Add motion blur on High+
    if (this.quality.motionBlur) {
      this.motionBlurPass = new ShaderPass(motionBlurShader);
      this.composer.addPass(this.motionBlurPass);
    }
    
    // Add god rays on Ultra+
    if (this.quality.godRays) {
      this.godRaysPass = new ShaderPass(godRaysShader);
      this.composer.addPass(this.godRaysPass);
    }
  }
}
```

## Camera Trauma System

Camera trauma replaces simple shake with multi-frequency profiles:

### Trauma Profiles

| Event Type | Low Freq | Mid Freq | High Freq | Duration | Decay |
|------------|----------|----------|-----------|----------|-------|
| **Gunfire** | 0.02 | 0.05 | 0.1 | 0.1s | Fast |
| **Explosion** | 0.2 | 0.1 | 0.05 | 0.5s | Medium |
| **Ability Hit** | 0.1 | 0.15 | 0.1 | 0.3s | Medium |
| **Near-Death** | 0.3 | 0.2 | 0.1 | 2.0s | Slow |

```javascript
cameraTrauma.addTrauma({
  profile: 'explosion',
  intensity: 1.0,  // scaled by damage/severity
  direction: new THREE.Vector3(1, 0, 0)  // optional directional bias
});
```

## Hitstop System

Hitstop freezes time briefly on significant events:

```javascript
hitstop.trigger({
  duration: 0.15,      // seconds (1-3 frames at 60fps)
  slowMoFactor: 0.1,   // how much to slow down
  onElimination: true,
  onHeavyAbility: true
});
```

Hitstop is optional via settings and respects quality profiles (disabled on Low).

## Performance Guidelines

### Optimization Strategies

1. **Use InstancedMesh/Points**: Never use individual Mesh objects for particles
2. **Batch Updates**: Update particle attributes in bulk, not per-particle
3. **LOD for Particles**: Reduce particle count at distance
4. **Cull Off-Screen**: Don't spawn/update particles outside camera frustum
5. **Reuse Geometry**: Share geometry buffers where possible
6. **Texture Atlases**: Combine multiple textures into one for fewer binds

### Profiling Targets

| Quality Level | Frame Time Budget | Particle Update Time | Post-Process Time |
|---------------|-------------------|----------------------|-------------------|
| Low | 33ms (30 fps) | < 5ms | < 3ms |
| Medium | 22ms (45 fps) | < 8ms | < 5ms |
| High | 16ms (60 fps) | < 10ms | < 8ms |
| Ultra | 11ms (90 fps) | < 12ms | < 10ms |
| Cinematic | Variable | Max quality | Max quality |

### Memory Budgets

| Resource | Low | Medium | High | Ultra |
|----------|-----|--------|------|-------|
| Particle Textures | 2 MB | 4 MB | 8 MB | 16 MB |
| Decal Atlas | 0.5 MB | 1 MB | 2 MB | 4 MB |
| G-Buffers (PP) | 1 RT | 2 RT | 3 RT | 4+ RT |

## Settings Integration

Users can control VFX via settings:

```javascript
const userSettings = {
  qualityProfile: 'high',
  bloomStrength: 0.8,      // 0-1
  particleDensity: 0.7,    // 0-1 multiplier on budget
  screenEffects: true,     // Enable/disable post-processing
  hitstopEnabled: true,
  traumaIntensity: 0.8,    // 0-1
  godRaysEnabled: true
};
```

These settings are persisted via the existing save system and migrate across versions.

## Testing & Validation

Run the following to verify VFX systems:

```bash
# Build and test
npm run build
npm run test

# Check bundle includes particle system
grep -q "CS3D_PARTICLES" vendor/cs3d-runtime.js && echo "✓ Particle system bundled"

# Verify quality profiles
node -e "require('./vendor/cs3d-runtime.js'); console.log(Object.keys(QUALITY_PROFILES))"
```

## Future Enhancements

Potential additions for future updates:

- **Volumetric Fog**: Density-based fog with light scattering
- **Screen-Space Reflections**: For metallic/wet surfaces
- **Temporal Anti-Aliasing**: Smoother edges at minimal cost
- **Particle Collisions**: Particles bouncing off surfaces
- **Wind Zones**: Arena-wide wind affecting particle trajectories
- **Weather System**: Dynamic rain/snow/fog transitions

---

*Last updated: 2024*
*Version: 1.0*
# Collective Strike 3D - VFX Budgets & Particle System Documentation

## Overview

The CS3D particle system provides a lightweight, quality-gated VFX framework using Three.js Points + custom ShaderMaterials. All effects are designed for offline-first bundling with zero external dependencies.

## Quality Profiles & Budgets

Particle budgets are automatically enforced based on the user's quality setting:

| Profile   | Max Particles | Max Decals | Max Tracers | Hazard Intensity |
|-----------|---------------|------------|-------------|------------------|
| Low       | 150           | 4          | 6           | 0.4              |
| Medium    | 400           | 8          | 12          | 0.65             |
| High      | 800           | 16         | 20          | 0.85             |
| Ultra     | 1500          | 32         | 30          | 1.0              |
| Cinematic | 3000          | 64         | 50          | 1.2              |

### Accessing Budgets

```javascript
// Via runtime API
const budgets = window.CS3D_PARTICLES.PARTICLE_BUDGETS;
console.log(budgets.high.maxParticles); // 800

// Via ParticleManager instance
const pm = new window.CS3D_PARTICLES.ParticleManager(scene, "high");
console.log(pm.budget.maxParticles); // 800
```

## ParticleManager API

### Constructor

```javascript
const pm = new window.CS3D_PARTICLES.ParticleManager(scene, qualityProfile);
// qualityProfile: "low" | "medium" | "high" | "ultra" | "cinematic"
```

### Core Methods

#### `spawnParticle(config)`
Spawn a single particle with custom attributes.

```javascript
pm.spawnParticle({
  position: new THREE.Vector3(x, y, z),
  velocity: new THREE.Vector3(vx, vy, vz),
  life: 1.5,           // seconds
  size: 0.1,           // world units
  color: new THREE.Color(1, 0.5, 0.2),
  drag: 0.3,           // 0-1 velocity damping
  type: "default"      // "default" | "steam" | "ember" | "ice"
});
```

#### `spawnParticleBurst(config)`
Spawn multiple particles in a burst pattern.

```javascript
pm.spawnParticleBurst({
  position: new THREE.Vector3(x, y, z),
  count: 15,
  spread: 0.5,         // spawn area radius
  velocityMin: new THREE.Vector3(-1, 0, -1),
  velocityMax: new THREE.Vector3(1, 2, 1),
  lifeMin: 0.5,
  lifeMax: 1.5,
  sizeMin: 0.05,
  sizeMax: 0.15,
  color: new THREE.Color(1, 1, 1),
  type: "default"
});
```

#### `spawnImpact(position, normal, materialType, intensity)`
Material-aware impact effect with particles + decal.

```javascript
pm.spawnImpact(
  hitPosition,
  surfaceNormal,
  "metal",      // "metal" | "ice" | "organic" | "concrete" | "scorched"
  1.0           // intensity multiplier
);
```

#### `spawnMuzzleFlash(position, direction, weaponType)`
Two-stage muzzle flash (primary + secondary).

```javascript
pm.spawnMuzzleFlash(
  barrelPosition,
  fireDirection,
  "rifle"       // "pistol" | "rifle" | "shotgun" | "sniper"
);
```

#### `spawnTracer(start, end, color, duration)`
Bullet tracer line effect.

```javascript
pm.spawnTracer(
  startPos,
  endPos,
  new THREE.Color(1, 0.9, 0.6),
  0.15          // seconds
);
```

#### `spawnFootprint(position, materialType)`
Movement dust / snow / mud particles.

```javascript
pm.spawnFootprint(
  footPosition,
  "snow"        // "dust" | "snow" | "mud" | "leaves"
);
```

#### `update(deltaTime)`
Update all active particles (call every frame).

```javascript
pm.update(deltaSeconds);
```

#### `setQuality(profile)`
Change quality profile at runtime.

```javascript
pm.setQuality("medium");
```

#### `clear()` / `dispose()`
Remove all particles / full cleanup.

```javascript
pm.clear();    // Remove active particles
pm.dispose();  // Full disposal including materials
```

## Arena Hazard Effects

Hazard effects are arena-specific ambient VFX that run continuously. Each effect respects the current quality budget via `hazardIntensity`.

### Creating Hazard Effects

```javascript
// Create effect bound to ParticleManager
const steamEffect = window.CS3D_PARTICLES.createForgeSteamEffect(pm, arenaConfig);

// Effect has update() and dispose() methods
function gameLoop(deltaTime) {
  steamEffect.update(elapsedTime);
}

// Cleanup when arena unloads
steamEffect.dispose();
```

### Available Hazard Effect Creators

| Creator                        | Arena Type     | Visual Description                    |
|--------------------------------|----------------|---------------------------------------|
| `createForgeSteamEffect`       | Forge          | Rising steam columns from vents       |
| `createCryoIceCrackEffect`     | Cryo           | Crystalline shard bursts from ice     |
| `createCalderaMagmaEffect`     | Caldera        | Glowing embers from lava vents        |
| `createVerdantSporeEffect`     | Verdant        | Floating spore clouds from nodes      |
| `createMiragePulseEffect`      | Mirage         | Expanding energy rings                |
| `createNeonRainEffect`         | Neon           | Rain streaks + transit wake particles |
| `createLunarDustEffect`        | Lunar          | Low-gravity dust plumes               |

### Automatic Hazard Effect Creation

Use `createHazardEffectsForArena` to auto-generate effects based on arena hazard types:

```javascript
const effects = window.CS3D_PARTICLES.createHazardEffectsForArena(pm, arenaDefinition);

// Effects array contains all relevant hazard effect instances
effects.forEach(effect => {
  // Call effect.update(time) each frame
});
```

### Hazard Type Mapping

| Arena Hazard Type | Visual Effect      |
|-------------------|--------------------|
| `heat`            | caldera-magma      |
| `dust`            | lunar-dust         |
| `cold`            | cryo-ice-crack     |
| `organic`         | verdant-spore      |
| `energy`          | mirage-pulse       |
| `steam`           | forge-steam        |
| `rain`            | neon-rain          |

## Authoring a New Hazard Effect

### Step 1: Define Emitter Positions

```javascript
export function createCustomHazardEffect(particleManager, arenaConfig) {
  const { hazardIntensity } = particleManager.budget;
  
  // Define emission points in arena coordinates
  const emitterPositions = [
    new THREE.Vector3(10, 0.5, 15),
    new THREE.Vector3(20, 0.5, 10),
    // ...
  ];
```

### Step 2: Create Effect Object

```javascript
  const effect = {
    type: "custom-hazard",
    timer: 0,
    
    update: (time) => {
      // Control emission frequency based on quality
      if (Math.random() > 0.1 * hazardIntensity) return;
      
      const emitter = emitterPositions[Math.floor(Math.random() * emitterPositions.length)];
      
      // Spawn particles
      particleManager.spawnParticleBurst({
        position: emitter.clone(),
        count: Math.floor(5 * hazardIntensity),
        spread: 0.3,
        velocityMin: new THREE.Vector3(-0.2, 0.5, -0.2),
        velocityMax: new THREE.Vector3(0.2, 1.5, 0.2),
        lifeMin: 1.0,
        lifeMax: 2.5,
        sizeMin: 0.1,
        sizeMax: 0.3,
        color: new THREE.Color(0.5, 0.8, 1.0),
        type: "steam",  // or "default", "ember", "ice"
      });
    },
    
    dispose: () => {
      // Cleanup if needed
    },
  };
  
  return effect;
}
```

### Step 3: Register Effect Creator

Add to `HAZARD_EFFECT_CREATORS` in `src/cs3d-particles.js`:

```javascript
export const HAZARD_EFFECT_CREATORS = {
  // ... existing creators
  "custom-hazard": createCustomHazardEffect,
};
```

### Step 4: Export via vendor.js

```javascript
import { createCustomHazardEffect } from "./cs3d-particles.js";

window.CS3D_PARTICLES = Object.freeze({
  // ... existing exports
  createCustomHazardEffect,
});
```

### Step 5: Rebuild Runtime

```bash
npm run vendor
```

## Shader Customization

Particle shaders are defined as GLSL strings in `src/cs3d-particles.js`. Key customization points:

### Vertex Shader Variables

```glsl
// Available attributes
attribute vec3 startPos;    // Initial position
attribute vec3 velocity;    // Velocity vector
attribute float life;       // Lifetime in seconds
attribute float size;       // Base size
attribute vec3 color;       // RGB color
attribute float drag;       // Velocity damping

// Varyings to fragment shader
varying float vLife;        // Remaining life (1.0 -> 0.0)
varying vec3 vColor;        // Interpolated color
varying float vAlpha;       // Computed alpha
```

### Fragment Shader Tips

- Use `gl_PointCoord` for per-pixel effects within point sprites
- Discard pixels outside circular/shape bounds for clean edges
- Multiply alpha by `vLife` for fade-out
- Use `smoothstep` for soft edges

## Performance Guidelines

### Budget Adherence
- Always multiply counts by `hazardIntensity` for quality scaling
- Use `Math.floor()` for integer particle counts
- Pool and recycle particles where possible

### Shader Optimization
- Keep vertex shaders simple; avoid complex branching
- Use `lowp` precision where acceptable
- Minimize texture lookups in fragment shaders

### Memory Management
- Call `dispose()` on unused ParticleManagers
- Clear particles on scene transitions
- Avoid creating new geometries/materials per-frame

## Integration Example

```javascript
// Initialize in scene setup
const particleManager = new window.CS3D_PARTICLES.ParticleManager(scene, settings.quality);

// Create hazard effects for current arena
const hazardEffects = window.CS3D_PARTICLES.createHazardEffectsForArena(
  particleManager, 
  currentArena
);

// In render loop
let lastTime = performance.now();
function animate() {
  requestAnimationFrame(animate);
  
  const now = performance.now();
  const delta = (now - lastTime) / 1000;
  lastTime = now;
  
  // Update particles
  particleManager.update(delta);
  
  // Update hazard effects
  const elapsed = now / 1000;
  hazardEffects.forEach(effect => effect.update(elapsed));
  
  renderer.render(scene, camera);
}

// On quality change
function onQualityChanged(newQuality) {
  particleManager.setQuality(newQuality);
}

// Cleanup
function onSceneUnload() {
  hazardEffects.forEach(effect => effect.dispose());
  particleManager.dispose();
}
```

## Debugging

```javascript
// Check active particle count
console.log(particleManager.activeParticles.length);

// Check decal count
console.log(particleManager.decals.length);

// Inspect budget
console.log(particleManager.budget);

// Force garbage collection (dev only)
particleManager.clear();
```

## Future Extensions

Potential additions for future work:

1. **InstancedMesh particles** for higher counts on capable hardware
2. **GPU-accelerated simulation** via compute shaders (WebGPU)
3. **Volumetric fog volumes** for dense atmospheric effects
4. **Decal projection system** for arbitrary surface marks
5. **Weather system integration** (snow accumulation, wet surfaces)
6. **Ability-specific VFX templates** per division/doctrine
