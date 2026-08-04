# Neon Foundry — living-set audit and reference content pass

## Before the pass

The living-set already connected the furnace to both sites and spawns, placed
refinery canisters on collision-backed blocks, and gave the arena moving valves,
service drones, practical lights, and an industrial PBR family. It supported the
**mid + vertical** theme in silhouette, but did not communicate the strategy
strongly enough:

- each cover block received the same small canister treatment, so tall rifle
  holds and low close-range cover read alike;
- authored platforms and ramps remained generic boxes rather than a coherent
  gantry route;
- conveyor movement existed in simulation but lacked mechanical rollers that
  showed the commitment and direction of the timing route;
- steam volumes had runtime telegraphs but no physical emitters at their edges;
- the refinery skyline was sparse and visually interchangeable with other maps.

No topology, site, spawn, or layout-rule change was needed. The existing north
and south conveyors already create opposed timing choices, the two steam windows
already deny prolonged utility-free pushes, and furnace heat already makes the
central under-route a calculated close-range commitment.

## Reference implementation

`buildForgeContentPass()` layers the complete forge pattern under one disposable
arena-owned group:

1. **Background:** 18 instanced refinery towers outside the combat footprint.
2. **Surfaces:** the existing independent procedural floor/structure PBR maps.
3. **Block skins:** seven footprint-matched industrial shells; the original
   collision meshes remain present with `collisionProxy` and `collisionHeight`
   but are invisible on forge.
4. **Platforms and ramps:** instanced grating, truss posts, and ramp treads make
   the rifle-height gantries and their access points readable.
5. **Skirting and decals:** paired emissive cover-height bands distinguish hard
   vertical holds from the low perimeter pieces without adding collision.
6. **Landmark family:** the existing expanded furnace landmark remains the hero;
   supporting pieces reuse its steel, deck, heat, and coolant visual language.
7. **Hazards:** physical steam stacks and state lamps anchor both timed volumes;
   the existing planes, rings, fog, warnings, slow, and damage windows remain the
   gameplay source of truth.
8. **Interactables:** instanced rollers reinforce each conveyor's opposing push;
   runtime conveyor forces and the existing animated direction strips retain
   their active visual state.

The kit uses only procedural Three.js geometry and generated data textures. It
adds no runtime request, decoder, model, or texture binary. Repeated families are
`InstancedMesh` objects, with a declared ceiling of 14 kit draw calls and more
than 80 placed instances. As one direct child of `arenaGroup`, it remains inside
the 180-child arena ceiling and is released by the existing tree teardown.

## What this map forces and what it punishes

**Forces:** rifles and disciplined mid-range holds earn control from the raised
north/south gantries; shotguns can win the protected furnace under-route but must
commit through heat; conveyor direction rewards timing, lightweight repositioning,
and weapon-ready planning; utility clears or crosses the alternating steam gates.

**Punishes:** stationary center camping, slow heavy-weapon rotations against a
conveyor, uncoordinated pushes through active steam, and close-range loadouts that
try to contest the exposed gantry sightlines without first taking an under-route.

The intended 60:30:10 hierarchy remains: dark deck and refinery mass dominate,
light structural panels describe routes, and orange/white emissive cues are
reserved for heat, hazards, interaction direction, and objective readability.
