# Arena strategy kits — the shipped ten

Every arena in `ARENA_ORDER` now ships a content pass. This is the per-arena
reference: what each kit is trying to say, which authored volumes it dresses,
and which prop families carry it. The framework itself is documented in
[`ARENA_SYSTEM.md`](ARENA_SYSTEM.md); the two arenas that shipped first have
longer write-ups in [`FORGE_STRATEGY_AUDIT.md`](FORGE_STRATEGY_AUDIT.md) and
[`ABYSS_STRATEGY_AUDIT.md`](ABYSS_STRATEGY_AUDIT.md).

## What a kit is responsible for

A kit is a data entry in `CONTENT_PASS_KITS` plus one `families(ctx)` hook. The
six shared layers — atmosphere, block skins, platforms and ramps, skirting and
decals, hazard visuals, interactable visuals — run for every arena from the same
code. The kit only chooses:

| Field | Decides |
| --- | --- |
| `surfaces` | which finish profile the hard / deck / ground materials use |
| `blockGeometry` | the cover silhouette, normalised into the unit box on the way in |
| `anchorHeight`, `skinInset`, `heroInset` | where tall cover stops being low cover |
| `atmosphere` | the skyline families placed outside the playable footprint |
| `hazardTypes` | which authored hazards get an emitter stack and a state lamp |
| `families` | the arena's own supporting prop ecology |

Three invariants hold for all ten, and each is a test rather than a convention:

- A block skin never leaves its authored footprint or rises above its collision
  height. `unitBounded()` normalises kit geometry so this survives any
  silhouette choice.
- No kit prop that reads as standing on the floor is placed over a void.
- Every authored interactable gets a binding, so no volume ships unexplained.

## The ten

| Arena | Strategy identity | Dressed volumes | Prop families |
| --- | --- | --- | --- |
| `forge` | Mid-vertical furnace: rifle gantries, shotgun under-route, utility against steam | 2 conveyors, 2 steam windows, furnace heat | coolant drums, refinery vent cowls |
| `abyss` | Split-range: raised sanctum for rifles, flooded stacks for shotguns | 2 water routes, surge, mist | memory conduits, reliquary nodes, archive cages, index rings, wall pilasters, shelf ledges, stack caps, shelf banks |
| `tempest` | Aerial fortress: everything crosses the spine, tower stair decides the round | 2 recovery fields, 3 wind windows | banner masts, crenellation merlons, buttress corbels, storm lanterns |
| `verdant` | Ambush pockets separated by two clean lanes | root tunnel, reactive flora, bramble, spores | arterial roots, root buttresses, nursery pods, canopy fronds |
| `cryo` | Fractured shelf: read the telegraph, rotate through the caves | 2 ice slides, 2 cracking routes | rift-edge crystals, fracture veins, pylon caps, frost drifts |
| `mirage` | One commanding axial lane with off-axis counterplay | 2 phase gates, null pulse, reliquary chill | orbit rings, nave piers, votive lamps, suspended censers |
| `neon` | Closed rooftop ring: two bridges, two spines, one transit core | boost rail, covered spine, transit wake, downdraft, holo static | holo gantries, roof plant, signage fins, drone beacons |
| `solar` | Exposed reflector courts against a shaded diagonal | shade trench, coolant conduit, flare, glare, squall | collector arms, mirror ranks, coolant manifolds, sand drifts |
| `lunar` | Rim long-range against bowl close-range | crawler track, mag rail, 3 dust windows | crater berms, beacon masts, track sleepers, spoil heaps |
| `caldera` | Curved rim lanes around a denied centre | vent boost, thermal lift, magma breath, ash fall, ember vent | throat fins, terrace braziers, basalt columns, ash drifts |

## Interactable visuals

The framework draws seven volume types. Each says something different about
what the volume does to a player who enters it:

| Type | Read | Bound as |
| --- | --- | --- |
| `conveyor` | chevrons travelling along the authored vector, rollers across it | `conveyor-flow` |
| `ice-slide` | the same chevrons, but grooves cut along travel and frost kerbs at the edges — nothing is driving this | `ice-slide-flow` |
| `water` | boundary strips, waterline stains, depth gauges that grow toward the middle, entry markers | `water-route` |
| `covered-route` | a lit corridor under head-height ribs, with a mouth marker at each open end | `covered-route` |
| `recovery-field` | one slow inward breath, cool | `recovery-field` |
| `proximity-pulse` | three fast outward fronts, hot | `proximity-pulse` |
| `phase-barrier` | a gate frame with a lamp on each jamb, lit from the same schedule the collision grid opens on | `phase-gate-frame` |

Direction always comes from the authored vector, never from an array index, so
two opposed lanes visibly travel in opposite directions. Movement cost stays
authoritative in `arena-core`; the visual layer only makes it legible.

## Surface finishes

`SURFACE_FINISHES` in `src/arena-assets.js` is the profile table each kit's
`surfaces` entry resolves against. Before it existed there were four real
finishes and every other name fell through to worn metal with a different noise
seed, so an arena could declare `lunar-regolith` and get brushed panel seams.
A profile decides panel seam pitch and depth, directional brushing, speckle
density and base roughness — enough that basalt, regolith, packed snow and
collector glass do not read as the same material tinted differently.

## Adding an eleventh arena

1. Author the definition in `arena-core.js` and append the id to `ARENA_ORDER`.
2. Add a `CONTENT_PASS_KITS` entry. Its `surfaces` must name real finish
   profiles and its `hazardTypes` must name types the arena actually authors —
   both are tested.
3. Implement `<id>Families(ctx)` using the shared placement helpers
   (`landmarkRing`, `blockTops`, `blockSkirts`, `zonePerimeter`, `overheadField`)
   so placement rules stay consistent across the roster.
4. Run `npm run check`. The registry, footprint, void, binding and budget gates
   all widen to the new arena automatically.
