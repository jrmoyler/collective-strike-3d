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
