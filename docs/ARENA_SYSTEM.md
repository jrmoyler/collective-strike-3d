# Ten-Arena Deployment System (v1.3)

## Arenas (connected tactical lattice)

All ten arenas share the same 36×26 collision grid, Site A/B, and spawn zones so bots, spike objective, minimap, and round flow remain identical. Art direction, procedural textures, PBR material response, architecture kits, lighting, particles, and animated environmental systems change per arena.

| ID | Name | Biome | Key visual language |
|----|------|-------|---------------------|
| `forge` | Forge Lattice | Molten industrial basin | Hazard panels, pressure stacks, turbines, gantries, dust |
| `neon` | Neon Canopy | Megacity cloud layer | Wet cyber rooftops, holographic rails, towers, rain |
| `cryo` | Cryo Relay | Polar ice shelf | Fractured ice textures, translucent crystals, coolant tanks, frost |
| `verdant` | Verdant Core | Post-human rainforest | Wet stone, root textures, luminous trees, vines, spores |
| `solar` | Solar Bastion | Sunscorched mesa | Sandstone tessellation, brass heliostats, collectors, heat dust |
| `abyss` | Abyssal Vault | Hadopelagic trench | Ribbed bulkheads, pressure glass, sonar rings, bubbles |
| `tempest` | Tempest Spire | Thunderhead archipelago | Hex alloy, cloud banks, conductor spires, rain, lightning |
| `lunar` | Lunar Excavation | Lunar terminator | Cratered regolith, drills, satellite dishes, moon dust |
| `caldera` | Ember Caldera | Basalt caldera | Volcanic fractures, magma flows, obsidian arches, embers |
| `mirage` | Mirage Terminal | Glass-dune trade route | Mosaic stone, textile canopies, prisms, lanterns, sand |

## Post-operator map selection

Character/squad selection now advances to a dedicated deployment stage:

- The actual arena scene graph is framed by a slowly moving isometric camera.
- Site A/B and both team spawns are identified by animated 3D markers.
- The roster supports click selection, previous/next buttons, Left/Right keys, Enter confirmation, and Escape/Back.
- Each selection exposes the map name, biome, recommended playlist, and tactical summary.
- The confirmed arena is rebuilt before match entities spawn.

## Offline contract

The scene uses only vendored Three.js and runtime-generated Canvas textures. No map image, model, font, shader, or material requires a network request.
