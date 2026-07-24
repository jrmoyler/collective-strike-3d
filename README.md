# Collective Strike 3D: Riftfall

Riftfall is the React Three Fiber generation of Collective Strike 3D: a tactical dungeon shooter featuring 20 division operators, physically separate held weapons, two-hand grip rigs, corruption anchors, escalating enemy waves, a Rift Monarch boss encounter, distinct combat ability archetypes, procedural Web Audio, PBR textures, shader-driven dungeon surfaces, post-processing, physics debris, responsive HUDs, dual-stick gamepad input, and adaptive render settings.

## Stack

- React 19 and Vite 8
- Three.js 0.185
- React Three Fiber and Drei
- React Three Rapier
- React Three Postprocessing
- Zustand
- Anime.js 4
- Custom GLSL rune and mist shaders

## Development

```bash
npm install
npm run dev
```

## Verification and production build

```bash
npm run check
```

## Controls

- `WASD`: move
- Mouse: aim and fire
- `Shift`: sprint
- `E`: division ability
- `R`: reload
- `Esc`: pause
- Standard dual-stick gamepads are supported

Threat levels range from Initiate to Ascendant. The renderer automatically steps down expensive effects when sustained frame rate falls below its performance target.

## Legacy build

`COLLECTIVE_STRIKE_3D.html` remains in the repository as the first-generation standalone build. Vercel deploys the new Vite application.
