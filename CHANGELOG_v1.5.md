# Collective Strike 3D v1.5 — Ten arena strategy kits

## The eight missing kits are implemented

`CONTENT_PASS_KITS` declared kit data for all ten arenas but only two of the
`families()` builders existed. `tempestFamilies`, `verdantFamilies`,
`cryoFamilies`, `mirageFamilies`, `neonFamilies`, `solarFamilies`,
`lunarFamilies` and `calderaFamilies` were referenced and never defined, so
`src/arena-content.js` threw `ReferenceError: tempestFamilies is not defined`
the moment the module was evaluated. That took the whole `CS3D_ARENA_CONTENT`
bundle down with it and left `npm test` red.

All eight are implemented, each with its own supporting prop ecology:

- **Skygrave Bastion** — banner masts on the spine deck, a run of crenellation
  teeth along every wall top, buttress corbels under the hanging wing decks,
  storm lanterns overhead.
- **Verdant Overrun** — arterial roots banked low around the heart, root
  buttresses against cover bases, nursery pods on the spore boundary, a flat
  frond canopy above.
- **Cryo Rift** — crystals growing off the rift lips, fracture veins tracing the
  cracking routes on the deck itself, pylon caps, frost drifts.
- **Null Cathedral** — ritual orbit rings inlaid across the nave floor, nave
  piers, gallery votive lamps, suspended censers.
- **Neon Canopy** — holo gantries over the transit core, rooftop plant on the
  cover tops, lit signage fins cutting the long roof lanes, drone beacons.
- **Solar Bastion** — collector arms standing on the crown massif, heliostat
  mirror ranks facing it, coolant manifolds beside the conduit lane, sand drifts.
- **Lunar Excavation** — berms around the whole crater lip, a beacon mast ring
  clear of the pit, sleepers under the crawler tracks, spoil heaps.
- **Ember Caldera** — columnar fins along the throat lip, offering braziers on
  the terraces, basalt columns, ash drifts.

## Five interactable types stopped shipping unexplained

Only `conveyor` and `water` had content-pass visuals. Every other authored
volume fell through to four pulsing arrows that said nothing about what it did.
`ice-slide`, `covered-route`, `recovery-field`, `proximity-pulse` and
`phase-barrier` now each have a distinct read, and every authored interactable
on all ten arenas resolves to a binding.

`phaseBarrierStateAt()` is now shared between the content pass and the runtime
tick, so a gate's frame lamps and the collision cell the grid opens are computed
from one schedule and cannot disagree inside a frame.

## Kit data that pointed at nothing

- **Hazard types.** The `mirage`, `solar`, `lunar` and `caldera` kits declared
  hazard types (`void-surge`, `solar-flare`, `regolith-blast`, `magma-breath`)
  that matched zero authored hazards, so those arenas would have lit no emitter
  stacks and no state lamps at all. Every kit now names types its own arena
  authors, and a test enforces it.
- **Surface finishes.** `proceduralSurfaceSet` parameterised four finishes and
  silently fell back for everything else, so `ice-crystal`, `lunar-regolith`,
  `solar-panel` and nineteen other declared names produced worn metal with a
  different noise seed. `SURFACE_FINISHES` is now a real profile table — seam
  pitch and depth, brushing, speckle density, base roughness — and a test fails
  a kit that names a finish that does not exist.
- **Block geometry.** Six kits used cover silhouettes whose local radius
  exceeded 0.5 (`OctahedronGeometry(0.58)`, `TorusGeometry(0.5, 0.18)`,
  `CylinderGeometry(0.54, 0.58)`), which draws cover on all four sides of a
  block that the collision grid does not own. `unitBounded()` normalises kit
  geometry into the unit box on the way into the skin layer, so a kit can pick
  any silhouette and stay footprint-exact.

## Authored content fixes found by the polish pass

- **Neon's south ramp** ran into the deck it served: the platform covered its low
  end, so the treads explained 21% of the transition and the rest was a flat
  staircase on the deck. Moved east of the platform edge and reversed.
- **Caldera's two ramps** ran off the terraces straight into the lava throat —
  two of every seven treads hung over the void. Moved to the terrace south edges,
  which is where the ground is.
- **Objective approach chevrons** were placed on nominal site corners, so the
  sites authored across a corner pit (Forge site A among them) had markers
  hanging over the drop. Corners that land in a void are dropped.
- **Landmark families** on Lunar and Caldera were rings laid straight across the
  crater and the lava throat. Both now clear their pit; Solar's collector arms
  stand on the crown massif instead of being buried in its side, and Mirage's
  orbit rings sit on the nave floor instead of inside the monolith footprint.
- **`.gitignore`** had been overwritten with a single line of stray text, so
  `dist/`, `node_modules/` and `screenshots/` were no longer ignored. Restored.

## Verification

All ten arenas are now inside every gate, not two:

- `tests/arena-content.test.js` covers the full roster and adds contracts for
  the bug classes above: kit surfaces resolve to real finishes, kit hazard types
  resolve to authored hazards, every interactable binds, block geometry is unit
  bounded, no ramp lays treads over a void, and no ground-standing kit prop is
  left hanging over one. 81 tests pass.
- `npm run smoke` asserts a content pass on all ten and fails if any arena is
  still on the generic fallback. Hazard and interactable state agreement is
  checked across all 24 authored hazards.
- `npm run budget` measures all ten in a live round rather than forge and abyss,
  and gates on the arena's own share (see below). Worst case is 117 arena draw
  calls against 140, 37k arena triangles against 60k, 89 arena geometries
  against 140, and 27 arena textures against 40.
- `scripts/verify.mjs` asserts every arena declares a kit *and* implements its
  family builder — the exact gap that shipped last time.

## The budget gate now attributes regressions

`npm run budget` gated on `liveDrawCalls`, a whole-scene reading sampled at an
arbitrary point in a live round. Across runs the non-arena share — ten operator
rigs, their weapons, bosses and the shadow pass — measured anywhere from 219 to
551 draw calls depending on how many actors were alive and in frustum, while an
arena's own share varied by 35. The ten-arena pass tripped the 620 ceiling on
Cryo at 638 with an arena share of 87, which is noise, not content.

`arenaDrawCalls` (≤ 140) and `arenaTriangles` (≤ 60k) are now hard gates. They
are the difference between an identical frame with the arena visible and hidden,
so they measure the only thing a content pass owns and are stable across runs.
The whole-scene ceilings are kept as a backstop against the game as a whole
growing, widened to 700 / 460k so they stop failing on round-state noise.

Measured worst case across the roster: 117 arena draw calls (Forge), 37k arena
triangles (Mirage), 89 arena geometries (Forge), 27 arena textures.
