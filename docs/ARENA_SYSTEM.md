# Multi-Arena + Modular Environment Upgrade (v1.3)

## Arenas (connected tactical lattice)

All four arenas share the same 36×26 collision grid, Site A/B, and spawn zones so bots, spike objective, minimap, and round flow remain identical. Only art direction, lighting, particles, and prop sets change — this is intentional so the simulation stays rock-solid while presentation becomes four distinct worlds.

| ID | Name | Mood | Key visual language |
|----|------|------|---------------------|
| `forge` | Forge Lattice | Industrial facility | Gold hazard, blue conduits, gantry lamps, dust motes (legacy polished) |
| `neon` | Neon Canopy | Cyber rooftops | Magenta/cyan neon, sky bridges, holographic rails, rain particles |
| `cryo` | Cryo Relay | Frozen outpost | Ice blue, reflective floor, crystalline cover, cold fog, frost particles |
| `verdant` | Verdant Core | Overgrown bio-lab | Emerald/amber, living walls, spore volumes, organic soft cover |

## Immutable tactical layout

The simulation still owns one `36 × 26` `grid`, one `walls` list, the original
Site A/B rectangles, and the original attacker/defender spawn rectangles. The
Kenney layer receives those values as read-only inputs. It derives only the
visible faces of solid cells and snaps 4 m modular meshes to those faces.
No GLB mesh participates in `solid()`, `solidWorld()`, bot pathfinding, spike
logic, or spawn selection.

## Offline modular asset pipeline

- Source GLBs live under `assets/environments/kenney/`.
- `scripts/environment-catalog.mjs` validates the manifest and generates
  `src/environment-catalog.js`, embedding the curated binaries as base64.
- `src/environment-assets.js` parses those buffers with the vendored
  `GLTFLoader`. If the embedded data is omitted in a future hosted build, the
  same catalog entries retain local relative `.glb` paths.
- `scripts/build.mjs` copies the catalog, loader, and source GLBs into `dist/`.
  The embedded catalog keeps direct local/offline launch working without fetch
  or CORS requirements.
- Loaded wall geometry is shared and rendered with `InstancedMesh`. Per-arena
  materials and textures are owned by the active arena group and disposed when
  an arena is replaced.

The committed selection is a 626 kB GLB subset plus 71 kB of palette textures
from three official CC0 packs:

| Pack | Use |
| --- | --- |
| Kenney City Kit (Industrial) | Forge stacks/tanks and Forge/Neon perimeter silhouettes |
| Kenney Modular Space Kit | Forge/Neon grid wall shells, detail panels, and gate arches |
| Kenney Modular Cave Kit | Cryo/Verdant rock wall shells, gates, columns, and perimeter skirt |

License and source links are recorded in
`assets/environments/kenney/ATTRIBUTION.md`.

## Rendering and lighting

`src/vendor.js` now exposes `GLTFLoader` and `RoomEnvironment` alongside the
existing post-processing classes. `PMREMGenerator` converts the neutral room
environment into an offline IBL texture once. Each arena then applies its own
environment intensity, hemisphere/ambient/key/rim balance, and ACES exposure.
The arena background remains the competitive-readability color rather than the
IBL texture.

Procedural floor decals, emissive skirting, site lighting, volumetric shafts,
particles, and bloom remain active beneath/around the modular shell. Adaptive
quality and the user bloom control are unchanged.

## Dependency upgrades

- `three` 0.149.0 → **0.185.1** (r185)
- `animejs` 3.2.2 → **4.5.0** (with Three adapter + v3-compat shim)
- Vendor bundle still offline-first; `window.anime` shim preserves existing UI animations
- Modern API available as `window.animejs.animate / stagger / createTimeline`

## Gameplay / UI / UX / VFX upgrades in this pass

- Arena select screen (cards + live theme preview, keyboard/gamepad)
- Per-arena lighting, fog, emissive language, particle fields
- Stronger muzzle / impact / ability / spike VFX
- anime.js 4 driven menu transitions (staggered cards, banner scale)
- Clearer objective chip states per arena flavour
- Adaptive quality + bloom still driven by pause settings
- Career line + pause settings preserved

## Architecture note

Full migration to `@react-three/fiber` remains the correct next architectural step (see HANDOFF). This PR keeps the production single-file + vendored contract intact while delivering the multi-arena content and library upgrades.
