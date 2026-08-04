# Neon Foundry — content and strategic differentiation audit

Arena id `forge`. Concept reference `docs/arena-concepts/forge-furnace-core.webp`.
Framework `src/arena-content.js`; live integration in `COLLECTIVE_STRIKE_3D.html`
(`buildArenaIdentity`, `initializeArenaRuntime`, `applyArenaVolumes`).

## Before the pass

The first Neon Foundry pass (`buildForgeContentPass`) proved the shape of the
idea but had five defects that a measured review exposed. All five are fixed;
this section records what was wrong so the framework does not reacquire them.

1. **The budget was never measured.** The kit declared
   `drawCallCeiling: root.children.length` in `userData` and the unit test
   asserted against that number. `root.children.length` is not a draw call
   count — it excludes the rest of the arena, the shadow pass, and any material
   that forces extra render targets. Measuring for real found the scene at **644
   live draw calls against a 620 ceiling** and **162 arena geometries against a
   140 ceiling**, both while the metadata reported "10".
2. **Duplicate background.** The pass added 18 instanced skyline towers while
   the generic runtime still added 18 individual background structures — 18
   wasted draw calls and a doubled silhouette.
3. **Hazard visuals were disconnected.** The steam lamps received a generic
   `{type:"pulse"}` animation driven by wall-clock time. They pulsed on their
   own schedule with no relationship to the hazard they sat on, so the lamp, the
   plane, the fog volume and the HUD warning could disagree inside one frame.
4. **Conveyors did not show their vector.** The whole roller `InstancedMesh` was
   spun about Y at `±0.48`, which rotates the family as a rigid body around the
   arena origin — it is not roller motion, and the sign came from the array index
   rather than from `value.vector`.
5. **Geometry did not match collision.** Block skins were rotated
   `index % 2 ? Math.PI/2 : 0` without swapping dimensions, so every second
   non-square skin overhung its footprint. Ramp treads were placed by linear
   interpolation between `ramp.from` and `ramp.to` instead of reading
   `arenaElevationAt`, so on both Forge ramps — where authored platforms overlap
   the ramp footprint — they floated over the deck. Guard posts stood
   `elevation + 1.15` units tall at the platform corners, reading as chest-high
   cover that stops no projectile.

## Implemented content layers

`buildArenaContentPass(definition, theme, tileSize)` resolves the Forge kit from
`CONTENT_PASS_KITS` and runs the shared layer pipeline, then the Forge-specific
`families` hook. Live integration is one data-driven call, not another optional
per-arena branch.

1. **Background:** two instanced families (`refinery-stacks`, `cracking-towers`,
   20 instances) outside the playable footprint. The generic 18-box skyline is
   skipped for any arena that has a content pass; every other arena keeps its
   current behavior untouched.
2. **Surfaces:** three independent procedural surface sets with separate albedo,
   roughness and normal signals.
3. **Block skins:** seven footprint-exact skins for seven authored blocks — an
   octagonal furnace hero, tall anchors for rifle holds, low pieces for the
   close-range perimeter — plus cap bands on the exact collision top and vent
   cowls inside the footprint. No rotation is applied to any non-square skin.
   The original meshes stay in the tree, invisible, with `collisionProxy` and
   `collisionHeight` intact.
4. **Platforms and ramps:** deck modules on all four platforms, tread modules on
   both ramps reading `arenaElevationAt` with the local surface slope baked in,
   and edge stanchions capped at 0.42 units above the deck so a railing never
   implies cover the grid does not own.
5. **Skirting and decals:** deck edge skirting per floor zone and four-sided
   objective approach markers (Abyss uses three-sided, so shape alone
   distinguishes the two maps).
6. **Landmark family:** the furnace reactor remains the hero; ten instanced
   coolant drums ring it without competing for mass.
7. **Hazards:** emitter stacks on the boundary corners of `steam-west`,
   `steam-east` and `furnace-heat`, each capped by a state lamp bound by stable
   id and driven from `hazardPhaseAt()` — the single call that also drives the
   plane, rim, fog volume and HUD warning in the same frame.
8. **Interactables:** one shader strip per conveyor whose `uDirection` uniform is
   `Math.sign` of the authored `value.vector`, plus correctly oriented static
   rollers. North and south visibly travel in opposite directions, and the flow
   clock is `arenaRuntimeState.elapsed`, so it freezes with the round.

The kit is entirely procedural Three.js geometry and generated data textures. It
adds no runtime request, decoder, model or texture binary.

## What this map forces

Rifles and disciplined mid-range holds earn control from the raised north and
south gantries, which now read as gantries rather than grey boxes. Shotguns can
win the protected furnace under-route but must commit through heat. Conveyor
direction rewards timing and lightweight repositioning — and is now visible from
outside the lane. Utility clears or crosses the alternating steam gates, whose
posts telegraph on a countable beat at both boundary corners.

## What this map punishes

Stationary centre camping, slow heavy-weapon rotations against a conveyor,
uncoordinated pushes through active steam, and close-range loadouts that contest
the exposed gantry sightlines without first taking an under-route. The
60:30:10 hierarchy is preserved: dark deck and refinery mass dominate, light
structural panels describe routes, and orange/white emissive is reserved for
heat, hazard state, interaction direction and objective readability.

## Measured budget

Read from real `WebGLRenderer` counters on a stable live round at 1280×720,
after `renderer.compile()` and twelve settled frames, by `npm run budget`
(`scripts/arena-budget.mjs`). The arena share is the difference between an
identical frame with the arena visible and with it hidden.

| Metric | Ceiling | Forge before | Forge after |
| --- | --- | --- | --- |
| Direct arena children | 180 | 110 | **44** |
| Live-round draw calls (whole scene) | 620 | 644 ✗ | **568** |
| Live-round triangles (whole scene) | 420,000 | 318,742 | **317,630** |
| Arena geometries | 140 | 162 ✗ | **89** |
| Arena textures | 40 | 30 | **27** |
| Vendored arena model bytes | 12 MB | 0 | **0** |
| Arena-attributable draw calls | — | 195 | **117** |
| Arena-attributable triangles | — | 31,582 | **27,782** |
| Content-pass instanced families | — | 10 | **18** |
| Content-pass instances | — | 101 | **184** |

Machine-readable report: `docs/arena-shots/budget.json`.

## Screenshots

| View | Path |
| --- | --- |
| Gameplay camera | `docs/arena-shots/forge-01-gameplay.png` |
| Elevated three-quarter overview | `docs/arena-shots/forge-02-overview.png` |
| Hazard telegraph state | `docs/arena-shots/forge-03-hazard-telegraph.png` |
| Hazard active state | `docs/arena-shots/forge-04-hazard-active.png` |

## Attribution

Neon Foundry introduced no model or texture binary. See `assets/ATTRIBUTION.md`.
