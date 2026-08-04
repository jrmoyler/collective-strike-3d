# Forge prop ecosystem reconstruction contract

Reference: `docs/arena-concepts/forge-furnace-core.webp`

## Intake observation

- Classification: hard-surface mechanical/architectural furnace landmark, `object` domain, confidence 0.98.
- Overall form: octagonal service-deck footprint beneath a tall radial-symmetry assembly. The primary mass is a cylindrical furnace shell surrounded by tapered buttresses and capped by a supported circular pour ring.
- Macro hierarchy: service deck; furnace vessel; radial support frame; overhead ring; crucible/pour system; coolant/service network.
- Meso hierarchy: segmented ceramic jacket, dark steel shell bands, vertical molten window, six tapered buttresses, upper columns, service pods, copper pipe loops, railings and access stairs.
- Micro systems: radial fastener rows, recessed panel seams, raised trim bands, edge wear, soot/cavity dirt, brushed-metal streaking, heat-tinted copper, grating, warning lamps, emissive seams and molten spill.
- Spatial relationships: buttresses overlap and brace the vessel; upper columns socket the service deck to the overhead ring; the crucible sits inside the ring and above the open furnace throat; coolant pipes attach to the vessel and service pods; the molten window is embedded in the forward shell.
- PBR families: blackened/brushed steel (metalness 0.75-1, roughness 0.32-0.58); pale ceramic/painted panels (metalness 0-0.15, roughness 0.46-0.72); oxidized copper pipes (metalness 0.8, roughness 0.26-0.5); worn composite deck (metalness 0.25, roughness 0.7); opaque emissive molten regions with matching local lights.
- Identity blockers: losing the octagonal base, radial tapered supports, vertical molten window, overhead ring, suspended crucible/pour stream, or copper service loop fails the silhouette/identity gate.
- Single-view limits: the rear service layout, exact buttress count behind the vessel, pipe routing, access points, and hidden fasteners are inferred by radial repetition. Those regions are deliberately approximate and gameplay-safe.

## Quality contract

The browser-ready prop ecosystem must preserve the reference's layered industrial language while extending it into an arena-scale family. It requires at least six macro assemblies, ten meso subassemblies, sixteen mapped micro details, three repeated systems, four independent material signals, warm/cool practical lighting, named pivots, clickable/explodable semantic groups, and stable real-time performance.

Required repeated systems:

- radial support/buttress modules with deterministic angle and scale variation;
- instanced fasteners, service canisters, vents, and perimeter fixtures;
- connected coolant/power conduits that visually link the landmark, arena cover, sites, and subspaces.

Required material details:

- independent albedo, roughness, and normal-height signals (no channel aliasing);
- cavity-biased soot/dirt, edge-wear highlights, directional brushing, panel-line seams, copper heat tint, and emissive spill;
- correct sRGB assignment for albedo/emissive textures and linear color space for data maps.

Required review views: reference-matched three-quarter view, opposite rear three-quarter view, low grazing-light view, and live gameplay camera. A pass is blocked by an unreadable silhouette, floating attachments, flat single-color materials, ungrounded emissive surfaces, duplicated asset placement, or decorative props that imply false collision.

## Detail inventory

1. Octagonal deck edge chamfers -> `service-deck.localFeatures.edgeTreatment`.
2. Deck grating and panel lines -> `deck-material.localOverrides.linework`.
3. Furnace shell horizontal seams -> `furnace-shell.localFeatures.grooveBands`.
4. Ceramic jacket panel seams -> `ceramic-material.localOverrides.panelLines`.
5. Radial shell fastener rows -> `furnace-shell.localFeatures.fastenerRing`.
6. Vertical molten window recess -> `molten-window.localFeatures.recess`.
7. Molten window emissive core -> `molten-material.localOverrides.emissive`.
8. Window frame edge wear -> `steel-material.localOverrides.edgeWear`.
9. Tapered buttress knees -> `buttress.localFeatures.taperedJoint`.
10. Buttress access ladders -> `buttress.localFeatures.repeatedRungs`.
11. Overhead ring segmented plates -> `pour-ring.localFeatures.segmentSeams`.
12. Ring radial fasteners -> `pour-ring.localFeatures.fastenerRing`.
13. Crucible soot gradient -> `crucible-material.localOverrides.cavityDirt`.
14. Pour stream emissive spill -> `molten-material.localOverrides.localLight`.
15. Copper coolant loops -> `coolant-network.localFeatures.tubePaths`.
16. Copper heat/oxidation variation -> `copper-material.localOverrides.heatTint`.
17. Service-pod cap seams -> `service-pod.localFeatures.grooveBand`.
18. Perimeter railing and stairs -> `service-deck.localFeatures.safetyHardware`.
