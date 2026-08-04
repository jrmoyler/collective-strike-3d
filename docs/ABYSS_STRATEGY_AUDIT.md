# Sunken Archive — content and strategic differentiation audit

Arena id `abyss`. Concept reference `docs/arena-concepts/abyss-memory-sanctum.webp`.
Framework `src/arena-content.js`; live integration in `COLLECTIVE_STRIKE_3D.html`
(`buildArenaIdentity`, `initializeArenaRuntime`, `applyArenaVolumes`).

## Before the pass

Sunken Archive already had the gameplay data for a split-range map: a raised
central sanctum platform, two water interactables with real movement
multipliers, a slow `memory-surge` and a visibility `mist-beat`, seven layered
ruin blocks and the archive-sanctum landmark. What it did not have was a way to
*see* any of that.

- Every collision block rendered as the same untextured slab, so a tall sanctum
  anchor and a low flooded-route stack read identically. Range identity was
  invisible from the gameplay camera.
- The archive sanctum sits on the authored `sanctum-core` block, which is 4.5
  units tall. The landmark's dais, prism and orbit ring were all authored below
  that height, so the hero of the map was buried inside its own plinth.
- The two water zones were shader planes with no boundary, no depth cue and no
  entry points. Nothing told a player that crossing cost movement speed.
- Hazard volumes had runtime telegraphs but no physical emitters, so a surge or
  mist window only existed as a translucent floor tint.
- The background was the generic eighteen-box skyline shared with nine other
  arenas.
- Fifteen props used `MeshPhysicalMaterial` with `transmission`, which makes the
  renderer re-render the entire scene into a transmission target once per
  object. Measured cost: **419 arena draw calls and 180,010 arena triangles**,
  putting the whole scene at 869 draw calls and 468k triangles — over two of the
  documented ceilings before a single new prop was added.

No topology, site, spawn or layout-rule change was needed, and none was made.
The authored geometry already separates the raised sanctum from the flooded
stacks; it just was not legible.

## Implemented content layers

Built in order, validated after each layer.

1. **Background atmosphere.** Three instanced families — `broken-stacks`,
   `collapsed-arches`, `distant-columns`, 28 instances — placed outside the union
   bounding box of every authored floor zone with at least three tiles of
   clearance. Tagged `non-colliding-atmosphere`; a unit test asserts every
   instance's world AABB lies outside the playable footprint.
2. **Floor and wall surfaces.** Three independent procedural surface sets (stone
   hard, painted deck, stone ground) with separate albedo, roughness and normal
   signals, plus a `wet` family that reads through clearcoat and roughness rather
   than emissive colour. No transmission, no map-wide transparent overdraw.
3. **Block skinning.** Seven skins for seven authored blocks: an octagonal hero
   prism on the `sanctum-core` footprint, tall clean anchors for ranged holds,
   and lower broken pieces on the flooded routes. `reliquary-wall-pilasters` and
   `archive-shelf-ledges` give the anchors a vertical rhythm; `collapsed-stack-caps`
   break the low pieces. Every skin is inset inside its authored footprint and
   capped at its authored `collisionHeight`; the original meshes stay in the tree,
   invisible, with `collisionProxy` and `collisionHeight` intact.
4. **Platform and ramp modules.** A deck module on the raised sanctum, tread
   modules on both ramps reading `arenaElevationAt` so they sit on the real
   walking surface and carry its local slope, grip strips, and edge stanchions
   that stop 0.42 units above the deck — visible as an edge, too low to read as
   projectile cover.
5. **Skirting, decals and navigation.** Deck edge skirting on every floor zone,
   waterline stains at each pool boundary, depth gauges that grow toward the
   centre of each pool, entry/exit cones at the pool edge midpoints, and
   three-sided objective approach markers (Forge uses four-sided, so the shape
   distinguishes the two maps without relying on colour).
6. **Landmark family.** The archive sanctum stays the hero and its read-critical
   elements were lifted above the 4.5-unit plinth so the silhouette survives.
   Supporting family: `sanctum-memory-conduits` (12), `sanctum-reliquary-nodes` (8),
   `suspended-archive-cages` (6, overhead and non-interactive),
   `broken-index-rings` (4). All instanced, all subordinate in mass to the hero.
7. **Water interactable visuals.** Bound to `flooded-west` and `flooded-east` by
   stable id. Each pool gets an animated boundary strip, a waterline stain, depth
   gauges and entry markers. The authored `movementMultiplier` remains the only
   authority; `interactableMovementMultiplier()` is now the single function the
   runtime and the tests both call.
8. **Hazard visual states.** `memory-surge` and `mist-beat` each get emitter
   stacks on all four boundary corners, capped by state lamps driven from
   `hazardPhaseAt()` — the same call the hazard plane, rim, fog volume and HUD
   warning use in the same frame. Four explicit states: cold small idle, amber
   telegraph with a countable three-beat cadence, hot red active, dim ember
   cooldown. Mist stays inside its authored 8×9-tile volume; there is no
   full-map fog wall.

## What this map forces

- **Rifles and DMRs onto the sanctum.** The raised deck is the only place with
  clean long sightlines, and the anchors flanking it are now tall, clean and
  rangeable. Holding it is a deliberate position, not an accident.
- **Shotguns and SMGs into the flooded stacks.** Cover along the water is low
  and broken, sightlines are cut by shelf banks, and the depth gauges say plainly
  where the route gets slow. Close range is where that terrain pays.
- **A route decision at every rotation.** Sanctum or water, and the water costs
  14% movement speed west, 12% east — authored values the visuals now advertise
  before you commit rather than after.
- **Reading the mist clock before taking a long hold.** `mist-beat` sits over the
  east approach; when it opens, the sanctum's east sightline stops being free.
- **Entering water at a marked point.** Entry cones mark the four edge midpoints,
  so a push has an intended seam instead of a uniform wall of slow.

## What this map punishes

- **Static long-range holds.** The mist window arrives on a 19.9-second cycle and
  closes the comfortable sanctum sightline for 4.5 seconds. A player who does not
  reposition trades a controlled angle for a blind one.
- **Careless water pushes.** `memory-surge` overlaps `flooded-west` exactly. A
  push timed into an active surge stacks a 35% hazard slow on top of a 14% route
  cost, in the open, at close range.
- **Ignoring the telegraph cadence.** Both hazards telegraph with a countable
  beat on physical posts at every corner. Walking into an amber post is a read
  failure, not a surprise.
- **Treating the sanctum as safe cover.** The edge stanchions are deliberately
  below shot height; the deck edge stops bullets nowhere. Anyone who reads the
  balustrade as cover gets shot through it.
- **Bringing a close-range loadout onto the open deck** without first taking a
  flooded route to break the approach.

## Measured budget

Every figure below is read from real `WebGLRenderer` counters on a stable live
round at 1280×720, after `renderer.compile()` and twelve settled frames, by
`npm run budget` (`scripts/arena-budget.mjs`). The arena share is the difference
between an identical frame with the arena visible and with it hidden. Declared
`userData` estimates are recorded as diagnostics only and gate nothing.

| Metric | Ceiling | Abyss before | Abyss after | Forge after |
| --- | --- | --- | --- | --- |
| Direct arena children | 180 | 95 | **39** | **44** |
| Live-round draw calls (whole scene) | 620 | 869 ✗ | **555** | **568** |
| Live-round triangles (whole scene) | 420,000 | 468,514 ✗ | **317,796** | **317,630** |
| Arena geometries | 140 | 124 | **78** | **89** |
| Arena textures | 40 | 21 | **24** | **27** |
| Vendored arena model bytes | 12 MB | 0 | **0** | **0** |
| Arena-attributable draw calls | — | 419 | **105** | **117** |
| Arena-attributable triangles | — | 180,010 | **29,292** | **27,782** |
| Content-pass instanced families | — | — | **29** | **18** |
| Content-pass instances | — | — | **266** | **184** |

Non-arena scene cost (ten operator rigs, weapons, markers, HUD-adjacent 3D) is
~450 draw calls and ~288k triangles, so the arena budget is what remains under
each ceiling. Machine-readable report: `docs/arena-shots/budget.json`.

Teardown is stable: four consecutive forge↔abyss rebuild cycles hold renderer
geometries at 118, textures at 31, lifecycle listeners at 51, scheduler jobs at
0, animation tracks at 13 and arena children at 44.

## Screenshots

| View | Path |
| --- | --- |
| Gameplay camera | `docs/arena-shots/abyss-01-gameplay.png` |
| Elevated three-quarter overview | `docs/arena-shots/abyss-02-overview.png` |
| Hazard telegraph state | `docs/arena-shots/abyss-03-hazard-telegraph.png` |
| Hazard active state | `docs/arena-shots/abyss-04-hazard-active.png` |

The telegraph and active captures were the review that caught the buried
landmark and the unreadable water boundary; both were fixed before this document
was written.

## Attribution

Sunken Archive introduced no model or texture binary. See `assets/ATTRIBUTION.md`.
