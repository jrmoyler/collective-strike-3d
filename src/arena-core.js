/* Canonical arena metadata for documentation, tools, and future module work.
 * The browser build consumes the equivalent offline registry in arena-runtime.
 */
export const ARENAS = {
  forge: {
    id: "forge", name: "FORGE LATTICE", tag: "Heavy-industry combat facility",
    biome: "Molten industrial basin", recommendedMode: "TACTICAL", architecture: "forge",
    accent: "#d4a843", secondary: "#38bdf8", particleStyle: "dust",
    description: "Heat stacks, service gantries, pressure pipes, and hazard-lit plant sites."
  },
  neon: {
    id: "neon", name: "NEON CANOPY", tag: "Rain-swept cyber rooftops",
    biome: "Megacity cloud layer", recommendedMode: "WAVE MODE", architecture: "neon",
    accent: "#f472b6", secondary: "#22d3ee", particleStyle: "rain",
    description: "Animated towers, transit rails, wet surfaces, and holographic signage."
  },
  cryo: {
    id: "cryo", name: "CRYO RELAY", tag: "Sub-zero research outpost",
    biome: "Polar ice shelf", recommendedMode: "TACTICAL", architecture: "cryo",
    accent: "#7dd3fc", secondary: "#e0f2fe", particleStyle: "frost",
    description: "Coolant vessels, translucent ice, cold haze, and crystalline machinery."
  },
  verdant: {
    id: "verdant", name: "VERDANT CORE", tag: "Reclaimed bioluminescent lab",
    biome: "Post-human rainforest", recommendedMode: "BOSS MODE", architecture: "verdant",
    accent: "#4ade80", secondary: "#fbbf24", particleStyle: "spore",
    description: "Wet stone, living roots, luminous flora, vines, and drifting spores."
  },
  solar: {
    id: "solar", name: "SOLAR BASTION", tag: "Heliostat desert fortress",
    biome: "Sunscorched mesa", recommendedMode: "TACTICAL", architecture: "solar",
    accent: "#fbbf24", secondary: "#fb7185", particleStyle: "sand",
    description: "Sandstone, brass, animated heliostats, turbine pylons, and blazing collectors."
  },
  abyss: {
    id: "abyss", name: "ABYSSAL VAULT", tag: "Submerged pressure station",
    biome: "Hadopelagic trench", recommendedMode: "BOSS MODE", architecture: "abyss",
    accent: "#2dd4bf", secondary: "#818cf8", particleStyle: "bubble",
    description: "Ribbed bulkheads, pressure windows, sonar beacons, and bioluminescent life."
  },
  tempest: {
    id: "tempest", name: "TEMPEST SPIRE", tag: "Storm-bound sky citadel",
    biome: "Thunderhead archipelago", recommendedMode: "WAVE MODE", architecture: "tempest",
    accent: "#a78bfa", secondary: "#60a5fa", particleStyle: "storm",
    description: "Levitating conductors, rotating vanes, cloud vapor, rain, and electrical arcs."
  },
  lunar: {
    id: "lunar", name: "LUNAR EXCAVATION", tag: "Low-gravity moon quarry",
    biome: "Lunar terminator", recommendedMode: "TACTICAL", architecture: "lunar",
    accent: "#e2e8f0", secondary: "#22d3ee", particleStyle: "regolith",
    description: "Regolith berms, drilling towers, satellite dishes, and drifting moon dust."
  },
  caldera: {
    id: "caldera", name: "EMBER CALDERA", tag: "Volcanic geothermal shrine",
    biome: "Basalt caldera", recommendedMode: "BOSS MODE", architecture: "caldera",
    accent: "#f97316", secondary: "#ef4444", particleStyle: "ember",
    description: "Magma channels, obsidian arches, heat vents, lava light, and airborne embers."
  },
  mirage: {
    id: "mirage", name: "MIRAGE TERMINAL", tag: "Holographic desert bazaar",
    biome: "Glass-dune trade route", recommendedMode: "WAVE MODE", architecture: "mirage",
    accent: "#f0abfc", secondary: "#facc15", particleStyle: "sand",
    description: "Patterned stone, textile canopies, holographic stalls, prisms, and lanterns."
  }
};

export const ARENA_ORDER = [
  "forge",
  "neon",
  "cryo",
  "verdant",
  "solar",
  "abyss",
  "tempest",
  "lunar",
  "caldera",
  "mirage"
];
