# Arena art pipeline — vendored asset proposal

Status: **proposal, nothing downloaded yet.** This document is the shortlist and
folder structure to approve before any third-party file enters the repository.
It covers arenas, props and weapons only. Operators are out of scope by
construction — see [`OPERATOR_RIGS.md`](OPERATOR_RIGS.md).

## What the offline contract actually requires

Worth stating precisely, because it decides the whole design:

- `scripts/verify.mjs` scans `COLLECTIVE_STRIKE_3D.html` for `https?://` and
  fails on any host that is not `openapi.vercel.sh` or `www.w3.org`. **No remote
  host may appear in the runtime.**
- `npm run smoke` fails the run on any console, page, or network error.
- The build already ships 78 MB of local MP3s under `dist/assets/audio/` that the
  runtime fetches by relative path at runtime. Same-origin fetches of vendored
  files are the established pattern and are not a contract violation.

So GLBs under `assets/models/` loaded by relative path fit the existing contract
exactly. What must not happen is a CDN reference, a Draco decoder pulled from
`unpkg`, or a KTX2 transcoder fetched at runtime — all three are the usual way
this breaks. Decoders get vendored into `vendor/cs3d-runtime.js` with everything
else.

## Measured budget we have to stay inside

`npm run budget` (`scripts/arena-budget.mjs`) boots the built game in headless
Chromium, walks it into a live round, rebuilds each arena, waits for
`renderer.compile()` and twelve settled frames, and reads real `WebGLRenderer`
counters. The arena share is the difference between an identical frame with the
arena visible and with it hidden. **Declared `userData` counts are diagnostics
and gate nothing** — `root.children.length` is not a draw-call count, and
treating it as one is how the first Forge pass shipped 24 draw calls over
ceiling while reporting "10".

| Metric | Forge | Abyss | Verdant (no pass) | Ceiling |
| --- | --- | --- | --- | --- |
| Arena children | 44 | 39 | 51 | 180 |
| Draw calls, live round | 568 | 555 | 602 | 620 |
| Triangles, live round | 318k | 318k | 314k | 420k |
| Arena geometries | 89 | 78 | 139 | 140 |
| Arena textures | 27 | 24 | 18 | 40 |
| Total vendored model bytes | 0 | 0 | 0 | 12 MB across all ten arenas |

Two numbers are worth carrying forward. The **non-arena scene costs ~450 draw
calls** — ten operator rigs, their weapons and the shadow pass — so an arena has
roughly 170 draw calls of headroom, not 620. And an arena that has not had a
content pass yet (Verdant, 139 arena geometries) sits within one geometry of the
ceiling, so the remaining eight arenas need their pass before they can grow.

Three structural rules keep those numbers reachable.

- Repeated kit pieces are placed with `InstancedMesh`, one draw call per piece
  type per arena.
- Every new mesh is either static arena geometry owned by `arenaGroup` — and
  therefore released by the existing `teardownArena` / `disposeTree` path — or has
  a bounded lifetime through `tempMeshes`. Nothing new gets its own lifetime.
- **No material uses `transmission`.** A transmissive `MeshPhysicalMaterial`
  makes the renderer re-render the whole scene into a transmission target once
  per object. Fifteen such props cost Sunken Archive 419 arena draw calls and
  180k triangles per frame. Fake refraction with clearcoat and alpha instead;
  `tests/arena-assets.test.js` enforces this for every arena.

## What is safe to layer, and what is not

Collision is built by `applyArenaDefinition` from `ARENA_DEFINITIONS.topology`
in `src/arena-core.js`, entirely independently of any mesh. `ARENA_LAYOUT_RULES`
and the arena test suite walk that grid. So the rule is simple:

**Do not touch `topology`, `combat.sites`, or `combat.spawns`.** Everything else
is paint.

| Layer | Built by | Treatment |
| --- | --- | --- |
| `outer` ground plane | flat `MeshStandardMaterial` | CC0 PBR surface per biome |
| `floorZones` | `addIdentityBox(.32)` + emissive rim | tiling PBR floor + decals |
| `blocks` | boxes, `collisionProxy` | **skin in place** — kit pieces snapped to the exact block footprint, box kept as an invisible proxy |
| `platforms` / `ramps` | boxes | gantry and stair modules at the same footprint |
| 18 background props | `backgroundMat` boxes outside play space | free real estate, zero collision risk, biggest visual win per byte |
| `addLandmark` | per-biome procedural | hero authored piece per arena |
| decals, debris, skirting | does not exist yet | additive, non-colliding |

The block treatment is the one that needs discipline: the authored piece is
placed at the block's centre and scaled to its footprint, the box mesh becomes
`visible = false`, and `userData.collisionProxy` / `collisionHeight` stay exactly
as they are. Ballistics reads the height field, not the mesh, so the trace stays
correct.

## Shortlist

Availability and licence verified 2026-08-04; nothing downloaded.

### Tier 1 — the baseline, CC0, no licence friction

| Source | Pack | Verified | Use |
| --- | --- | --- | --- |
| Kenney | City Kit Industrial — 25 assets, CC0 | `kenney.nl/assets/city-kit-industrial` → 200, licence CC0 | crates, barriers, tanks, structural modules, cover |
| Quaternius | Modular Sci-Fi MegaKit — CC0, ships glTF/FBX/OBJ | `quaternius.com/packs/modularscifimegakit.html` → 200 | corridors, walls, columns, doors, floor modules, gantries |
| AmbientCG | CC0 PBR surfaces | `ambientcg.com` → 200 | floor and wall materials per biome |
| Poly Haven | CC0 textures and HDRIs | `polyhaven.com/textures` → 200 | biome surfaces, light probes |

Kenney and Quaternius are both flat-shaded low-poly, which is the right call
here for two reasons beyond licensing: they carry vertex colour rather than
texture sets, so they cost geometry instead of texture memory, and they stay
visually subordinate to the operators. Photoreal scanned geometry would fight
the toon creatures for attention and lose the 60:30:10 restraint.

### Tier 2 — only where the free kits genuinely cannot reach

- **threejsassets.com** — Draco GLBs for industrial and night-palette pieces the
  above kits lack. Per-asset licence check required before each download; only
  free-commercial-use assets. Studio is authoring only, ship the optimised GLB.
- **Sketchfab / Quixel Megascans** — one hero landmark at most, and only after
  `gltf-transform` prune + Draco + texture reduction. Prefer stylised.

### Tier 3 — weapons, conditional

**Quaternius Sci-Fi Modular Guns**, CC0, at
`quaternius.com/packs/scifimodularguns.html` (note: not the `scifimodulargunpack`
path in the brief, which 404s).

This one is gated. The current weapon system is the gameplay source of truth:
`WVIS` profiles define `grip`, `fore`, `reload`, `muzzle` and `flash` sockets in
weapon-local space, and the smoke run asserts that both hands land on `grip` and
`fore` within a small tolerance every frame. An imported mesh only ships if it
can be re-socketed to those exact points, recoloured to the division accent, and
still passes `maxSocketError`. If a candidate fails any of the three, the
procedural silhouette stays. Tracers, muzzle flash and livery tint are unchanged
either way.

## Folder structure

```
assets/
  audio/                      unchanged
  models/
    kits/
      kenney-industrial/      shared low-poly props, all arenas
      quaternius-scifi/       shared modular structure, all arenas
    arenas/
      forge/                  Neon Foundry landmark + arena-specific pieces
      abyss/  tempest/  verdant/  cryo/
      mirage/ neon/  solar/   lunar/   caldera/
    weapons/                  only if Tier 3 clears the socket gate
  textures/
    surfaces/                 CC0 PBR sets, per biome
  ATTRIBUTION.md              per-asset source, author, licence, URL, SHA-256
tools/
  fetch-assets.mjs            download to a scratch dir, verify checksums
  optimize-assets.mjs         gltf-transform prune/dedup/weld/draco, writes manifest
src/
  asset-manifest.js           generated: id -> relative path, bounds, socket points
```

`assets/ATTRIBUTION.md` is not optional. CC0 does not require attribution, but a
repository that cannot say where a binary came from cannot be audited, and the
Tier 2 sources do carry attribution terms.

## Pipeline

Download and optimisation are **build-time only and are not part of
`npm run build`.** `npm run build` must keep working with zero network access
against the already-committed binaries. Fetching is a separate, deliberate step.

```
npm run assets:fetch      # scratch dir only, records SHA-256, never writes assets/
npm run assets:optimize   # gltf-transform -> assets/models/**, regenerates the manifest
npm run check             # unchanged gate: test + build + audio + smoke
```

`gltf-transform` runs `prune`, `dedup`, `weld`, `resample`, `draco`, and
`textureCompress` to 512² where a texture survives at all. Target is under 60 kB
per prop and under 400 kB per landmark. `@gltf-transform/cli` is a devDependency;
nothing new enters `dependencies`.

Every committed GLB is Y-up, real-world scale (1 unit = 1 metre — note the arena
uses `TILE * S` = 4 units per tile), centred on its footprint, and origin at the
base so it drops onto the deck without a magic offset.

## The content-pass framework

Arena art now goes through `src/arena-content.js`, not through per-arena calls in
the runtime.

```
buildArenaContentPass(definition, theme, tileSize) -> { root, animations, bindings } | null
CONTENT_PASS_KITS[arenaId]   // data: materials, geometries, atmosphere, hazard types
kit.families(ctx)            // optional per-arena hook for identity pieces
```

Shared layers (atmosphere, block skins, platforms and ramps, skirting and decals,
hazard visuals, interactable visuals) run for every kit and read only authored
data. `buildArenaIdentity` calls the factory once; an arena with no kit gets
`null` and keeps its existing generic background, living set and interactable
arrows unchanged. Adding an arena is a kit entry plus an optional hook — never
another optional call site.

Visual state is delivered through `bindings`, plain objects keyed by the authored
hazard or interactable id:

```
bindings.hazards       -> [{ id, kind, apply(phase, progress), reset() }]
bindings.interactables -> [{ id, kind, apply(elapsed, dt),      reset() }]
```

`initializeArenaRuntime` attaches them to the matching runtime entry by id, and
`applyArenaVolumes` calls them from the existing simulation tick. Hazard phase
comes from `hazardPhaseAt()` — one pure function, four explicit states (`idle`,
`telegraph`, `active`, `cooldown`) — which the plane, rim, fog volume, HUD
warning and every binding all read in the same frame. There is no second clock,
no new timer and no new requestAnimationFrame loop.

## Hero arena first

**Neon Foundry (`forge`)** is the reference implementation. It has the densest
topology of the ten — 7 blocks, 4 platforms, 2 ramps, 3 hazards, 2 conveyor
interactables, 5 subspaces — so whatever pattern survives it will survive the
other nine. It also has the strongest existing biome language (heat, steam,
molten pour) for a first read on whether authored geometry helps or just adds
noise.

Order: background props → floor and wall surfaces → block skinning → gantries and
doorways on platforms and ramps → emissive skirting and decals → landmark. Run
`npm run check` after each of those six, not at the end. Roll to the remaining
nine only once Neon Foundry holds the budget table above.

## Two things to settle before the first download

1. **Approve the shortlist.** Third-party binaries in a repository are close to
   permanent. Confirm Tier 1 and whether Tier 2 and Tier 3 are in scope at all.
2. **Resolve the Amber Gold collision.** `DIVS` gives The Collective the accent
   `#D4A843`, which the Design System Bible reserves for the parent specimen and
   the single most important element on a screen. The creature `DNA` table does
   not have this problem — The Collective's accent there is `#FEF3C7` — so the
   drift is in the UI palette, not the operator bodies. It should be settled
   before arena emissives start using accent colours, because that is the point
   at which gold either stays exclusive or stops meaning anything.
