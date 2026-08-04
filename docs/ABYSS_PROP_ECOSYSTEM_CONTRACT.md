# Sunken Archive prop ecosystem reconstruction contract

Reference: `docs/arena-concepts/abyss-memory-sanctum.webp`

## Intake observation

- Classification: hard-surface architectural/ritual landmark, `object` domain, confidence 0.97.
- Overall form: an octagonal raised sanctum standing on a stepped stone plinth, ringed by a lower flooded terrace. A tall pinnacled screen closes one side; a violet crystal prism rises from a basin at the centre of the upper deck.
- Macro hierarchy: flooded lower terrace; stepped plinth; octagonal upper deck; reliquary colonnade; pinnacled reredos screen; central memory prism and basin.
- Meso hierarchy: two stone stair runs climbing the plinth, eight capped reliquary columns on the deck edge, balustrade panels between columns, arched window slits in the screen, bronze ring inlays in the deck, submerged debris shelves in the flooded ring, spill channels between pool and terrace.
- Micro systems: bronze capital rings, panel joint lines, chipped stone edges, waterline staining, algae/silt in cavities, glowing rune slots, crystal facet highlights, standing water reflections, cracked balustrade fragments.
- Spatial relationships: the stairs are the only reachable transition between the flooded ring and the upper deck; the reliquary columns sit on the deck edge, not on the plinth face; the screen occupies one octagon face and reads as the back of the sanctum; the prism sits inside a recessed basin, so it is visible from below only above the plinth line.
- PBR families: pale weathered limestone (metalness 0, roughness 0.72–0.9); oxidised bronze trim (metalness 0.8, roughness 0.3–0.5); wet stone and submerged shelf (metalness 0.08, roughness 0.10–0.22, restrained clearcoat, no transmission); still water (low roughness, restrained reflection, no full-map transparency); violet/cyan emissive crystal and rune slots with matching local light.
- Identity blockers: losing the octagonal plan, the stepped plinth, the flooded lower ring, the reliquary colonnade, the stair transitions, or the central prism fails the silhouette/identity gate.
- Single-view limits: the rear of the screen, the drainage between pool segments, the underside of the plinth, and the exact reliquary count behind the prism are inferred from octagonal repetition. Those regions are deliberately approximate and gameplay-safe.

## Quality contract

The browser-ready prop ecosystem must carry the reference's drowned-archive language into an arena-scale family while making Sunken Archive's split-range identity legible on sight. It requires at least six macro assemblies, ten meso subassemblies, sixteen mapped micro details, three repeated instanced systems, four independent material signals, cool practical lighting, semantic runtime bindings for both water routes and both hazards, and stable real-time performance measured in the browser.

Required repeated systems:

- reliquary/archive kit modules with deterministic placement derived from authored block footprints;
- instanced conduits, cages, index rings, depth gauges and waterline stains;
- instanced drowned-archive skyline placed wholly outside the playable footprint.

Required material details:

- independent albedo, roughness and normal signals (no channel aliasing);
- wet routes read through roughness and restrained specular response, not through emissive colour or map-wide transparency;
- **no `transmission`.** A transmissive material forces the renderer to re-render the entire scene into a transmission target once per object; before this pass that single choice cost Sunken Archive 419 arena draw calls and 180k triangles per frame. Refraction is faked with clearcoat plus alpha.
- correct sRGB assignment for albedo and linear colour space for data maps.

## Collision and placement rules

Collision is authored in `src/arena-core.js` and is never derived from a mesh.

- `topology`, `combat.sites`, `combat.spawns` and `ARENA_LAYOUT_RULES` are untouched.
- Every block skin is snapped to the exact authored footprint and never exceeds the authored `collisionHeight`. Skins are never rotated a quarter turn without swapping dimensions — a non-square footprint rotated in place stops matching its proxy.
- The original block mesh stays in the tree with `userData.collisionProxy` and `userData.collisionHeight` intact; only `visible` is set to false, and only once a replacement skin exists.
- Decorative protrusions stay inside the collision footprint. The only geometry outside it is overhead and explicitly non-interactive (`suspended-archive-cages`, above shot height).
- Platform edge stanchions stop at 0.42 units above the deck, well below shot height, so nothing implies projectile cover the grid does not own.
- Ramp treads read `arenaElevationAt` — the same height field ballistics and movement use — so they sit on the walking surface. Where an authored platform overlaps a ramp footprint the platform *is* the surface, and the tread lies flat rather than tilting off the deck.
- Atmosphere is placed outside the union bounding box of every authored floor zone, with at least three tiles of clearance, and is tagged `non-colliding-atmosphere`.

## Required review views

Reference-matched three-quarter overview, live gameplay camera, hazard telegraph state, and hazard active state. A pass is blocked by an unreadable silhouette, floating modules, a buried hero landmark, geometry that implies false collision, duplicated background, or hazard states that cannot be told apart.

Captured at `docs/arena-shots/abyss-01-gameplay.png`, `abyss-02-overview.png`, `abyss-03-hazard-telegraph.png`, `abyss-04-hazard-active.png`.

## Detail inventory

1. Octagonal plinth silhouette -> `block-skin-hero` (8-sided prism on the `sanctum-core` footprint).
2. Stepped plinth cap edge -> `block-cover-cap-bands`.
3. Reliquary colonnade -> `sanctum-reliquary-nodes`.
4. Reliquary capital glow -> reliquary node `energy` material emissive.
5. Bronze deck ring inlays -> `broken-index-rings`.
6. Memory conduits feeding the sanctum -> `sanctum-memory-conduits`.
7. Suspended archive storage -> `suspended-archive-cages` (overhead, non-interactive).
8. Archive stack shelving rhythm -> `reliquary-wall-pilasters`.
9. Shelf ledger bands -> `archive-shelf-ledges`.
10. Collapsed low stacks in the flooded routes -> `collapsed-stack-caps`.
11. Broken shelf banks lining the water -> `collapsed-shelf-banks`.
12. Stair runs onto the deck -> `ramp-tread-modules` + `ramp-tread-grip-strips`.
13. Deck balustrade fragments -> `platform-edge-stanchions` (below shot height).
14. Waterline staining -> `waterline-stains-<id>`.
15. Depth gauges rising toward the middle of each pool -> `water-depth-gauges-<id>`.
16. Pool entry and exit points -> `water-entry-markers-<id>`.
17. Terrace edge skirting -> `deck-edge-skirting`.
18. Objective approach shape markers -> `objective-approach-markers` (three-sided, distinct from Forge's four-sided cones).
19. Surge and mist boundary posts -> `hazard-emitter-stacks`.
20. Hazard state lamps on every boundary post -> `hazard-state-lamps`.
21. Drowned skyline -> `atmosphere-broken-stacks`, `atmosphere-collapsed-arches`, `atmosphere-distant-columns`.

## Performance and instancing rules

- Every repeated kit family is a single `InstancedMesh`; the only plain meshes the pass adds are the one-per-zone water boundary strips.
- The pass is one direct child of `arenaGroup` and is released by the existing `teardownArena` / `disposeTree` path. It adds no timer, no requestAnimationFrame loop, no global listener and no independent lifecycle.
- Flow and boundary shaders advance from `arenaRuntimeState.elapsed`, so they freeze exactly when the round freezes.
- The pass is entirely procedural: no model, no texture binary, no decoder, no runtime request.
- Budget is proved by `npm run budget`, which reads real `WebGLRenderer` counters on a stable live-round frame. Declared `userData` counts are diagnostics and are never the gate.
