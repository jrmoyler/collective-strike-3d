# Arena Identity System

Collective Strike 3D no longer uses one collision grid with ten visual skins. The canonical arena registry is `src/arena-core.js`; `src/arena-ballistics.js` converts its surfaces and cover into a deterministic height field. Both are bundled into the offline runtime and adapted to the existing map-select UI by `src/arena-runtime.js`.

## Definition anatomy

Every entry in `ARENA_DEFINITIONS` must provide:

- `identity`: stable ID, display name, biome, silhouette and tactical summary.
- `topology`: playable floor rectangles, voids, blocking geometry, platforms, ramps, landmark and boundary treatment.
- `traversal`: authored routes and the arena-specific movement mechanic.
- `combat`: two sites, team spawn zones, at least four named subspaces, cover density and sightline profile.
- `hazards`: at least two timed, telegraphed gameplay volumes.
- `interactables`: at least two conveyors, water bodies, ice slides, covered routes or phase barriers.
- `visuals`: material response, lighting palette, sky/depth treatment and landmark description.
- `audio`: music tier and ambient sound hooks.
- `runtimeModifiers`: camera/readability and ambient-event settings.
- `bossCompatibility`: one or more validated boss-safe spawn zones and clearance rules.

Stable IDs are intentional: soundtrack mappings, career stats and existing links continue to use `forge`, `abyss`, `tempest`, `verdant`, `cryo`, `mirage`, `neon`, `solar`, `lunar` and `caldera`.

## Adding an arena

1. Add a complete definition to `ARENA_DEFINITIONS` and append its ID to `ARENA_ORDER`.
2. Compose a unique footprint with `floorZones`, then subtract `voids` and add collision with `blocks`.
3. Place both team spawns, both sites and boss-safe zones on open cells. Keep every hazard clear of spawn zones.
4. Satisfy `ARENA_LAYOUT_RULES` (see below) — this is the part that decides whether the map plays, not just whether it loads.
5. Give the map at least four combat subspaces, a landmark, three traversal mechanics, two hazards and two interactables.
6. Add or reuse a landmark renderer in `addLandmark()` only when the existing primitive family cannot express the silhouette.
7. Run `npm test` and `npm run smoke`. Registry tests reject duplicate footprints, unreachable sites, unfair walking geometry and invalid boss spawns.

## Walking geometry contract

`ARENA_LAYOUT_RULES` in `src/arena-core.js` is the objective definition of a
playable plant/defuse arena, and `validateArenaWalkingGeometry()` measures every
definition against it with a breadth-first walk over the collision grid. All
distances are in grid cells.

| Rule | Value | Why |
| --- | --- | --- |
| attacker spawn → each site | 15–32 | attackers cross real ground to touch either site |
| defender spawn → each site | 5–16 | defenders can set up on either site, and can rotate |
| approach cost (attack − defend) | ≥ 6 | no site is effectively inside the attacker spawn |
| site imbalance, per team | ≤ 6 | neither site is the obvious default pick |
| site separation | ≥ 12 | a single hold cannot cover both sites |
| spawn separation | ≥ 18 and ≥ defender rotation + 6 | no spawn-to-spawn rush |
| walkable space | one connected region | no unreachable floor |

`measureArenaLayout()` returns the same numbers if you want to inspect a
candidate layout while iterating. Before this contract existed, nine of the ten
arenas spawned one squad next to a site and roughly twenty-five cells from the
other; `abyss` spawned the defenders on top of site B.

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

## Elevation, cover and projectiles

`traceArenaSegment()` is the single height-aware obstruction path for weapons, bot vision, crosshair acquisition, doctrine lanes and boss melee reach. It samples the authored platform/ramp surface, deterministic block heights, dynamic barriers and arena boundaries. Voids remain non-walkable but no longer behave like invisible projectile walls.

- `arenaBlockHeight()` must remain consistent with rendered cover. Set `collisionHeight` on a block when a specific low/high cover profile is required.
- Actor muzzle and target heights are sampled from their current surface, including ramps and platforms.
- Platform lips can block shallow uphill shots; readable ledge positions can shoot down when the trajectory clears the deck.
- Phase shots explicitly opt out of obstruction while ordinary shots, bots and bosses share the same trace.
- Keep collision-critical heights declarative and deterministic. Never derive them from frame-time animation or unseeded decoration.

## Water and local atmosphere

Water interactables render with a bounded procedural shader using two low-amplitude wave functions, view-dependent Fresnel color and no texture downloads. Visibility hazards create 24-point local fog volumes whose opacity follows the existing telegraph/active/cooldown state. Both effects live under the arena group, share the main render loop, and are disposed during rebuild.

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
- Keep local fog volumes at or below 24 points per hazard and water surfaces at 18×18 subdivisions unless profiling justifies an increase.
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
| `neon` | Neon Canopy | Closed rooftop ring: two sky bridges, two service spines, one transit core |
| `solar` | Solar Bastion | Exposed reflector courts against a shaded cooling diagonal |
| `lunar` | Lunar Excavation | Crater-split bowl forcing a committed east or west rotation |
| `caldera` | Ember Caldera | Horseshoe terraces around a denied lava throat |

Every definition uses its own footprint, spawn-and-site configuration, hazard
set, interactable set and traversal mechanics; the registry tests reject any two
arenas that share them.
