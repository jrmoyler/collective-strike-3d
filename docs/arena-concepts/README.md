# Arena landmark concept set

These ten images were generated with OpenAI's built-in image generation mode as single-view, isometric concept references. They are design evidence for the procedural Three.js reconstructions in `src/arena-assets.js`; the runtime does not download or texture from them.

All prompts shared this art direction: an isolated premium competitive-shooter arena landmark, three-quarter isometric view, readable low-poly/PBR materials, dramatic emissive accents, neutral studio background, no characters, no text, no logo, and no UI.

| Arena | Reference | Prompt-specific subject |
| --- | --- | --- |
| Neon Foundry | `forge-furnace-core.webp` | A six-legged industrial furnace core with ceramic jacket, exposed molten window, overhead pour ring, crucible, coolant loop, and orange/cyan safety light language. |
| Sunken Archive | `abyss-memory-sanctum.webp` | An octagonal drowned-memory sanctum with raised dais, eight reliquaries, broken pylons, floating faceted memory prism, and cyan spectral orbit. |
| Skygrave Bastion | `tempest-signal-tower.webp` | A storm signal tower with heavy octagonal foot, radial buttresses, stacked service decks, trident lightning crown, and electric blue beacon. |
| Verdant Overrun | `verdant-biomech-heart.webp` | A contained biomechanical heart with separate lobes and ventricle, root cables, nutrient canisters, dark exoskeleton frame, and toxic green/cyan bioluminescence. |
| Cryo Rift | `cryo-rift-stabilizer.webp` | Twin ice-armored pylons bridged by a mechanical rift stabilizer, crystalline crowns, a central energy clamp, and luminous cryogenic feed pipes. |
| Null Cathedral | `mirage-null-monolith.webp` | A towering asymmetrical black null monolith above a ritual dais, three non-coplanar rune orbits, reliquary spires, and magenta/cyan void energy. |
| Neon Canopy | `neon-transit-hologram.webp` | A rooftop transit nexus with four pylons, suspended maglev carriage, layered holographic route rings, and vivid magenta/cyan city lighting. |
| Solar Bastion | `solar-heliostat-crown.webp` | A desert receiver tower ringed by eight mechanical heliostat petals and articulated arms, with a radiant gold chamber and cool blue detailing. |
| Lunar Excavation | `lunar-excavation-drill.webp` | A tracked lunar excavation rig with hoppers, angled drill boom, large toothed rotary bore, telemetry mast, and cold industrial work lights. |
| Ember Caldera | `caldera-lava-throat.webp` | A broken basalt lava-throat shrine with three thermal towers, a suspended crucible, crown-like rock fins, and intense orange heat channels. |

Because each source is a single view, hidden-side geometry is an intentional, gameplay-safe inference. The reconstruction contract prioritizes silhouette, landmark identity, named runtime parts, semantic materials, bounded draw cost, and collision independence.
