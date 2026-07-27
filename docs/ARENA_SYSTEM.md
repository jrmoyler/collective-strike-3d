# Multi-Arena + VFX Upgrade (v1.1)

## Arenas (connected tactical lattice)

All four arenas share the same 36×26 collision grid, Site A/B, and spawn zones so bots, spike objective, minimap, and round flow remain identical. Only art direction, lighting, particles, and prop sets change — this is intentional so the simulation stays rock-solid while presentation becomes four distinct worlds.

| ID | Name | Mood | Key visual language |
|----|------|------|---------------------|
| `forge` | Forge Lattice | Industrial facility | Gold hazard, blue conduits, gantry lamps, dust motes (legacy polished) |
| `neon` | Neon Canopy | Cyber rooftops | Magenta/cyan neon, sky bridges, holographic rails, rain particles |
| `cryo` | Cryo Relay | Frozen outpost | Ice blue, reflective floor, crystalline cover, cold fog, frost particles |
| `verdant` | Verdant Core | Overgrown bio-lab | Emerald/amber, living walls, spore volumes, organic soft cover |

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

## R3F note

Full migration to `@react-three/fiber` remains the correct next architectural step (see HANDOFF). This PR keeps the production single-file + vendored contract intact while delivering the multi-arena content and library upgrades.
