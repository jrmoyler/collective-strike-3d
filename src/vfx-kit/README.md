# Elemental VFX Kit for Collective Strike 3D

Reusable skillshot / zone ability system adapted from [LinearAbilityCastingThreeJS](https://github.com/achrefelouafi/LinearAbiltyCastingThreeJS) (MIT) for the Collective Strike 3D runtime.

## Features

- **11 elemental abilities**
  - Original 5: Frost Lance, Storm Lance, Cinder Fall, Nova Beam, Voltaic Snare
  - New 6: Seismic Rupture, Tidal Surge, Gale Vortex, Plasma Arc, Vine Constrict, Void Snare
- Settings-driven (single source of truth) — dimensions resolved every frame
- Object pooling + concurrent ceiling
- Quality-scale aware (hooks into CS3D `PARTICLE_BUDGETS` / quality profiles)
- Full dispose / teardown ownership
- Offline-first, no external assets required

## Quick Integration

```js
import { createVFXKit } from './vfx-kit/index.js';
import { attachVFXKit } from './vfx-kit/bridge/cs3d-bridge.js';

// Inside match start / arena ready
const kit = createVFXKit({
  scene,
  particleSystem: fx,                    // existing cs3d-particles
  getQualityScale: () => quality.particleScale || 1.0,
});

const vfx = attachVFXKit(kit);

// From ability / doctrine activation
vfx.fire('frost', origin, direction, distance);

// Every simulation tick
vfx.update(dt);

// Match teardown (required)
vfx.clear();
vfx.dispose();
```

## Design Rules (preserved from original)

1. Settings objects are the only place dimensions live.
2. Ability records store fractions, jitters and event timestamps only.
3. Everything is resolved against live `settings` each frame (including paused frames).
4. Pooling and explicit dispose prevent leaks across matches.

## Extending

1. Add a block to `settings.js` + entry in `ELEMENT_META`.
2. Subclass `AbilityBase`, implement the hooks, call `registerAbility(id, Class)`.
3. Import the new file from `index.js`.

## Status

Initial scaffold + working implementations of all 11.  
Frost Lance is the most complete reference (instanced procedural crystals).  
Subsequent PRs will deepen materials, GPU particles, ground decals, and quality-scaled density.
