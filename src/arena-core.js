/* Multi-arena definitions and themed builders for Collective Strike 3D v1.1.
 * Inlined into the main HTML runtime; kept here for documentation and future modular extraction.
 */

export const ARENAS = {
  forge: {
    id: "forge", name: "FORGE LATTICE", tag: "Industrial combat facility", mood: "Industrial",
    accent: "#d4a843", secondary: "#38bdf8", fog: 0x060d1c, fogDensity: 0.0052, bg: "#030712",
    hemi: [0x6f9bff, 0x02060f, 0.30], ambient: [0x4f6a9e, 0.09], sun: [0xffe8cc, 1.18], rim: [0x4f74ff, 0.34],
    environmentIntensity: 0.82, exposure: 1.03, assetSet: "space+industrial",
    floor: ["#0e1729", "rgba(150,175,215,.16)"], floorTint: 0xb9c6de, wall: 0x93a2bd,
    particle: 0x9fc4ff, particleCount: 1200, particleStyle: "dust",
    description: "The original Collective lattice. Hazard-banded corridors, gantry lamps, and the classic A/B plant sites."
  },
  neon: {
    id: "neon", name: "NEON CANOPY", tag: "Cyber rooftop lattice", mood: "Cyber",
    accent: "#f472b6", secondary: "#22d3ee", fog: 0x0a0618, fogDensity: 0.0044, bg: "#05010f",
    hemi: [0xff6bcb, 0x0a0418, 0.28], ambient: [0x3b1d6e, 0.12], sun: [0xffb4e2, 0.95], rim: [0x22d3ee, 0.55],
    environmentIntensity: 0.72, exposure: 1.08, assetSet: "space+industrial",
    floor: ["#12081f", "rgba(244,114,182,.18)"], floorTint: 0xc4b5fd, wall: 0x7c5cbf,
    particle: 0xf9a8d4, particleCount: 900, particleStyle: "rain",
    description: "Vertical sky-bridges and neon arteries over the canopy. High-contrast sightlines and holographic rails."
  },
  cryo: {
    id: "cryo", name: "CRYO RELAY", tag: "Frozen research outpost", mood: "Cryogenic",
    accent: "#7dd3fc", secondary: "#e0f2fe", fog: 0x0a1524, fogDensity: 0.0068, bg: "#020810",
    hemi: [0xa5d8ff, 0x02060f, 0.38], ambient: [0x6ba3c7, 0.14], sun: [0xdbeafe, 1.05], rim: [0x38bdf8, 0.48],
    environmentIntensity: 1.02, exposure: 1.07, assetSet: "cave",
    floor: ["#0c1828", "rgba(125,211,252,.22)"], floorTint: 0xbfdbfe, wall: 0x8ba4c0,
    particle: 0xe0f2fe, particleCount: 1400, particleStyle: "frost",
    description: "Ice-laced corridors and crystalline cover. Dense cold fog and reflective surfaces punish over-commitment."
  },
  verdant: {
    id: "verdant", name: "VERDANT CORE", tag: "Overgrown bio-lab", mood: "Organic",
    accent: "#4ade80", secondary: "#fbbf24", fog: 0x06140c, fogDensity: 0.0058, bg: "#020a06",
    hemi: [0x86efac, 0x03120a, 0.32], ambient: [0x3f6b4a, 0.11], sun: [0xd9f99d, 1.08], rim: [0xfbbf24, 0.40],
    environmentIntensity: 0.70, exposure: 1.00, assetSet: "cave",
    floor: ["#0a1a10", "rgba(74,222,128,.16)"], floorTint: 0xa7f3d0, wall: 0x6b8f71,
    particle: 0x86efac, particleCount: 1100, particleStyle: "spore",
    description: "Living walls and spore volumes. Soft organic cover and amber hazard strips replace cold metal."
  }
};

export const ARENA_ORDER = ["forge", "neon", "cryo", "verdant"];
