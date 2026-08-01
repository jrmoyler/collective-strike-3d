# Arena Identity System

Collective Strike 3D no longer uses one collision grid with ten visual skins. The canonical arena registry is `src/arena-core.js`; it is bundled into the offline runtime and adapted to the existing map-select UI by `src/arena-runtime.js`.

## Definition anatomy

Every entry in `ARENA_DEFINITIONS` must provide:

- `identity`: stable ID, display name, biome, silhouette and tactical summary.
- `topology`: playable floor rectangles, voids, blocking geometry, platforms, ramps, landmark and boundary treatment.
- `traversal`: authored routes and the arena-specific movement mechanic.
- `combat`: two sites, team spawn zones, at least three named subspaces, cover density and sightline profile.
- `hazards`: timed, telegraphed gameplay volumes.
- `interactables`: conveyors, water, ice slides, covered routes or phase barriers.
- `visuals`: material response, lighting palette, sky/depth treatment and landmark description.
- `audio`: music tier and ambient sound hooks.
- `runtimeModifiers`: camera/readability and ambient-event settings.
- `bossCompatibility`: one or more validated boss-safe spawn zones and clearance rules.

Stable IDs are intentional: soundtrack mappings, career stats and existing links continue to use `forge`, `abyss`, `tempest`, `verdant`, `cryo`, `mirage`, `neon`, `solar`, `lunar` and `caldera`.

## Adding an arena

1. Add a complete definition to `ARENA_DEFINITIONS` and append its ID to `ARENA_ORDER`.
2. Compose a unique footprint with `floorZones`, then subtract `voids` and add collision with `blocks`.
3. Place both team spawns, both sites and boss-safe zones on open cells. Keep every hazard clear of spawn zones.
4. Give the map at least three combat subspaces, a landmark and a unique traversal mechanic.
5. Add or reuse a landmark renderer in `addLandmark()` only when the existing primitive family cannot express the silhouette.
6. Run `npm test` and `npm run smoke`. Registry tests reject duplicate footprints, unreachable sites and invalid boss spawns.

## Runtime primitives

Topology primitives are rectangles expressed in collision-grid units. The browser factory currently renders:

- floor plates and void/pit overlays;
- raised platforms and sloped ramp surfaces;
- collision-backed wall/cover blocks;
- arena rims and readable boundary lighting;
- landmark families (reactor, sanctum, tower, biomechanical heart, rift, monolith and beacon structures);
- hazard telegraph planes and rings;
- conveyor/slide direction strips and phase barriers;
- bounded particle fields and distant background silhouettes.

Implemented gameplay volumes include `steam`, `heat`, `surge`, `mist`, `wind`, `bramble`, `spores`, `cracking-ice`, `null-pulse`, `dust` and `transit-wake`. Interactables include `conveyor`, `water`, `ice-slide`, `covered-route`, `recovery-field`, `proximity-pulse` and `phase-barrier`.

## Lifecycle and teardown

`rebuildArena()` always calls `teardownArena()` before construction—even when restarting the same ID. Teardown:

- removes the old arena group;
- disposes arena-owned geometries, materials and textures once;
- clears environmental animation adapters;
- removes temporary meshes;
- releases hazard/interactable runtime state;
- restores dynamic collision cells before the next definition is applied.

Arena behavior runs inside the existing simulation tick. It does not create timers, animation-frame callbacks or per-arena input listeners. The map-select listener set is installed once.

## Performance conventions

- Keep simulation content data-only; Three.js objects belong to the disposable arena group.
- Reuse the shared primitive geometry cache. Mark shared geometry with `userData.shared` so teardown does not dispose it.
- Prefer a few composed meshes over large external models and unique textures.
- Keep ambient particle systems bounded (currently 240–420 points per map).
- Place decorative geometry inside blocked cells or outside the playable footprint so render meshes never imply false collision.
- Use deterministic seeded variation only for non-critical background composition.
- Avoid runtime `setTimeout`, document listeners or extra render loops in arena code.

## Current headline identities

| Stable ID | Arena | Gameplay identity |
|---|---|---|
| `forge` | Neon Foundry | Vertical furnace killbox, catwalks, conveyors and steam denial |
| `abyss` | Sunken Archive | Raised sanctum, flooded flanks, layered ruin cover and memory surge |
| `tempest` | Skygrave Bastion | Disconnected-looking battlements, fair bridges, high tower and crosswinds |
| `verdant` | Verdant Overrun | Root tunnels, ambush pockets, clear lab lanes and reactive spores |
| `cryo` | Cryo Rift | Split shelves, ice corridors, slides and telegraphed cracking routes |
| `mirage` | Null Cathedral | Monumental nave, off-axis chambers, galleries and phase barriers |

The remaining four definitions retain their stable identities but also use unique footprints, sites, spawns, hazards and traversal rules.
