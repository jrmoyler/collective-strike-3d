/**
 * Arena Identity System
 *
 * This module is deliberately free of DOM and Three.js dependencies. It owns
 * the authored topology, gameplay volumes, deterministic decoration seeds and
 * validation used by both the browser bundle and Node contract tests.
 */

export const ARENA_SIZE = Object.freeze({ width: 36, height: 26, tile: 40 });

const r = (x, y, w, h, extra = {}) => Object.freeze({ x, y, w, h, ...extra });
const zone = (id, x, y, w, h, extra = {}) => Object.freeze({ id, ...r(x, y, w, h), ...extra });

const baseVisuals = ({
  accent, secondary, fog, fogDensity, background, floorTint, wall, outer,
  trim = accent, particle = secondary, roughness = 0.66, metalness = 0.22,
  sky = "enclosed", landmark,
}) => Object.freeze({
  accent, secondary, fog, fogDensity, background, floorTint, wall, outer,
  trim, particle, floorRoughness: roughness, floorMetalness: metalness,
  sky, landmark,
});

/**
 * The six headline arenas are deliberately mapped onto stable legacy IDs so
 * career data, soundtrack mapping and deployed links continue to work.
 */
export const ARENA_DEFINITIONS = Object.freeze({
  forge: Object.freeze({
    identity: Object.freeze({ id: "forge", name: "NEON FOUNDRY", biome: "Vertical industrial furnace", recommendedMode: "TACTICAL", silhouette: "stepped cruciform refinery", tacticalSummary: "Own the furnace ring, climb the offset catwalk routes, or ride the conveyors through the dark perimeter before steam closes a sightline." }),
    topology: Object.freeze({
      floorZones: [r(1, 1, 34, 24), r(0, 10, 36, 6)],
      voids: [r(1, 1, 5, 4), r(30, 1, 5, 4), r(1, 21, 5, 4), r(30, 21, 5, 4)],
      blocks: [r(14, 9, 8, 7, { kind: "furnace" }), r(7, 5, 3, 5), r(26, 16, 3, 5), r(3, 12, 4, 2), r(29, 12, 4, 2)],
      platforms: [r(2, 6, 9, 3, { elevation: 2.4 }), r(25, 17, 9, 3, { elevation: 2.4 }), r(11, 6, 4, 2, { elevation: 1.2 }), r(21, 18, 4, 2, { elevation: 1.2 })],
      ramps: [r(9, 7, 4, 2, { from: 0, to: 2.4 }), r(23, 18, 4, 2, { from: 0, to: 2.4 })],
      landmark: Object.freeze({ type: "furnace-reactor", x: 18, y: 12.5, scale: 2.8 }),
      boundary: "armored heat shield and grated service edge",
    }),
    traversal: Object.freeze({ mechanics: ["elevated-catwalk", "conveyor-push", "under-furnace-flank"], routes: ["west sniper gantry", "furnace ring", "east service conveyor", "dark perimeter"] }),
    combat: Object.freeze({
      sites: [zone("A", 3, 6, 6, 4), zone("B", 27, 16, 6, 4)],
      spawns: Object.freeze({ ATK: r(3, 16, 5, 4), DEF: r(28, 6, 5, 4) }),
      subspaces: ["furnace control ring", "west gantry", "east conveyor", "perimeter service trench"],
      coverDensity: "medium", sightlineProfile: "vertical crossfire with protected under-routes",
    }),
    hazards: [
      zone("steam-west", 10, 9, 3, 5, { type: "steam", telegraph: 1.2, active: 3.2, cooldown: 9, effect: "slow", strength: 0.45 }),
      zone("steam-east", 23, 12, 3, 5, { type: "steam", telegraph: 1.2, active: 3.2, cooldown: 9, offset: 4.5, effect: "slow", strength: 0.45 }),
      zone("furnace-heat", 13, 8, 10, 9, { type: "heat", telegraph: 1.5, active: 2.4, cooldown: 12, effect: "damage", damagePerSecond: 8, inset: 1 }),
    ],
    interactables: [zone("conveyor-north", 10, 5, 15, 2, { type: "conveyor", vector: [1, 0], strength: 42 }), zone("conveyor-south", 11, 19, 15, 2, { type: "conveyor", vector: [-1, 0], strength: 42 })],
    visuals: baseVisuals({ accent: 0xff7a18, secondary: 0xf8fafc, fog: 0x120806, fogDensity: 0.0046, background: 0x030407, floorTint: 0x6d493a, wall: 0x343942, outer: 0x020204, particle: 0xffb25b, roughness: 0.48, metalness: 0.56, sky: "smoke-stack", landmark: "white-hot furnace core" }),
    audio: Object.freeze({ musicTier: "combat_4", ambience: ["furnace-roar", "chain-rattle", "pressure-release"] }),
    runtimeModifiers: Object.freeze({ cameraHeight: 46, cameraLead: 0.08, ambientEvent: "steam-cycle", elevationScale: 1 }),
    bossCompatibility: Object.freeze({ safeSpawnZones: [r(2, 10, 10, 5), r(24, 10, 10, 5)], minimumClearance: 2, disabledHazardsDuringSpawn: true }),
  }),

  abyss: Object.freeze({
    identity: Object.freeze({ id: "abyss", name: "SUNKEN ARCHIVE", biome: "Flooded mnemonic ruins", recommendedMode: "BOSS MODE", silhouette: "broken crescent around a raised sanctum", tacticalSummary: "The dry sanctum controls the map, but flooded flanks and collapsed stacks let squads fracture long sightlines and surface behind it." }),
    topology: Object.freeze({
      floorZones: [r(2, 2, 32, 22), r(0, 8, 5, 10), r(31, 5, 5, 15)],
      voids: [r(2, 2, 7, 3), r(27, 21, 7, 3), r(1, 18, 6, 5), r(30, 2, 5, 5)],
      blocks: [r(16, 11, 4, 3, { kind: "sanctum-core" }), r(6, 7, 2, 6), r(9, 16, 6, 2), r(24, 5, 2, 7), r(27, 14, 5, 2), r(4, 13, 3, 2)],
      platforms: [r(13, 8, 10, 9, { elevation: 1.4 })],
      ramps: [r(11, 11, 3, 3, { from: 0, to: 1.4 }), r(22, 12, 3, 3, { from: 1.4, to: 0 })],
      landmark: Object.freeze({ type: "archive-sanctum", x: 18, y: 12.5, scale: 2.5 }),
      boundary: "collapsed seawall and black flooded depth",
    }),
    traversal: Object.freeze({ mechanics: ["shallow-water-slow", "raised-sanctum", "collapsed-stack-slalom"], routes: ["raised sanctum", "west flooded stacks", "east moon pool", "southern ruin breach"] }),
    combat: Object.freeze({ sites: [zone("A", 14, 9, 8, 7), zone("B", 26, 16, 5, 4)], spawns: Object.freeze({ ATK: r(4, 5, 5, 3), DEF: r(27, 18, 5, 3) }), subspaces: ["central sanctum", "flooded west archive", "moon-pool flank", "collapsed reading hall"], coverDensity: "high layered", sightlineProfile: "broken mid-range lanes with reflective low routes" }),
    hazards: [zone("memory-surge", 3, 9, 9, 8, { type: "surge", telegraph: 1.8, active: 4, cooldown: 13, effect: "slow", strength: 0.35 }), zone("mist-beat", 23, 7, 10, 10, { type: "mist", telegraph: 1.4, active: 4.5, cooldown: 14, offset: 6, effect: "visibility" })],
    interactables: [zone("flooded-west", 3, 9, 9, 8, { type: "water", movementMultiplier: 0.86 }), zone("flooded-east", 24, 7, 8, 10, { type: "water", movementMultiplier: 0.88 })],
    visuals: baseVisuals({ accent: 0x93c5fd, secondary: 0xc4b5fd, fog: 0x071321, fogDensity: 0.0071, background: 0x01050a, floorTint: 0x4d6878, wall: 0x596874, outer: 0x010409, particle: 0xdbeafe, roughness: 0.72, metalness: 0.08, sky: "moonlit-ruin", landmark: "raised memory sanctum" }),
    audio: Object.freeze({ musicTier: "combat_2", ambience: ["distant-water", "stone-groan", "whispered-index"] }),
    runtimeModifiers: Object.freeze({ cameraHeight: 44, cameraLead: 0.06, ambientEvent: "water-surge", elevationScale: 1 }),
    bossCompatibility: Object.freeze({ safeSpawnZones: [r(14, 17, 8, 5), r(24, 8, 7, 7)], minimumClearance: 2, disabledHazardsDuringSpawn: true }),
  }),

  tempest: Object.freeze({
    identity: Object.freeze({ id: "tempest", name: "SKYGRAVE BASTION", biome: "Stormborne aerial fortress", recommendedMode: "WAVE MODE", silhouette: "three offset battlements on narrow bridges", tacticalSummary: "The tower owns distance; two lower bridge systems and sheltered crenellation runs provide counterplay without forcing a lethal crossing." }),
    topology: Object.freeze({
      floorZones: [r(15, 1, 6, 24), r(2, 4, 11, 8), r(6, 17, 9, 5), r(23, 14, 11, 8), r(13, 7, 2, 3), r(13, 18, 2, 3), r(21, 17, 2, 3)],
      voids: [],
      blocks: [r(16, 8, 4, 6, { kind: "high-tower" }), r(4, 6, 2, 3), r(9, 8, 3, 2), r(26, 16, 2, 4), r(30, 18, 2, 2), r(8, 18, 3, 2)],
      platforms: [r(15, 4, 6, 12, { elevation: 3.2 }), r(2, 4, 11, 8, { elevation: 1.1 }), r(23, 14, 11, 8, { elevation: 1.1 })],
      ramps: [r(13, 7, 4, 3, { from: 1.1, to: 3.2 }), r(19, 15, 4, 3, { from: 3.2, to: 1.1 })],
      landmark: Object.freeze({ type: "grave-tower", x: 18, y: 11, scale: 3.4 }),
      boundary: "waist-high crenellations with storm recovery field",
    }),
    traversal: Object.freeze({ mechanics: ["bridge-crossing", "wind-lane", "tower-ramp"], routes: ["dominant grave tower", "west battlement", "east counter-battery", "lower banner bridge"] }),
    combat: Object.freeze({ sites: [zone("A", 3, 5, 7, 5), zone("B", 25, 15, 7, 5)], spawns: Object.freeze({ ATK: r(16, 20, 4, 4), DEF: r(16, 2, 4, 4) }), subspaces: ["grave tower", "west battlement", "east counter-battery", "lower bridge network"], coverDensity: "low-medium", sightlineProfile: "long exposed lanes broken by crenellations and hanging masonry" }),
    hazards: [zone("crosswind-west", 12, 6, 4, 6, { type: "wind", telegraph: 1.4, active: 3.2, cooldown: 10, effect: "push", vector: [0, 1], strength: 28 }), zone("crosswind-east", 20, 14, 4, 7, { type: "wind", telegraph: 1.4, active: 3.2, cooldown: 10, offset: 5, effect: "push", vector: [0, -1], strength: 28 })],
    interactables: [zone("recovery-west", 12, 6, 3, 6, { type: "recovery-field" }), zone("recovery-east", 21, 15, 3, 6, { type: "recovery-field" })],
    visuals: baseVisuals({ accent: 0xb7c6dc, secondary: 0x93c5fd, fog: 0x8994a8, fogDensity: 0.0026, background: 0x202d45, floorTint: 0x7a7f89, wall: 0x596171, outer: 0x111827, particle: 0xe2e8f0, roughness: 0.84, metalness: 0.05, sky: "moving-cloud-sea", landmark: "dominant grave tower" }),
    audio: Object.freeze({ musicTier: "combat_3", ambience: ["high-wind", "banner-snap", "distant-thunder"] }),
    runtimeModifiers: Object.freeze({ cameraHeight: 49, cameraLead: 0.1, ambientEvent: "wind-gust", elevationScale: 1 }),
    bossCompatibility: Object.freeze({ safeSpawnZones: [r(15, 14, 6, 5), r(3, 5, 9, 6), r(24, 15, 9, 6)], minimumClearance: 2, disabledHazardsDuringSpawn: true }),
  }),

  verdant: Object.freeze({
    identity: Object.freeze({ id: "verdant", name: "VERDANT OVERRUN", biome: "Biomechanical research overgrowth", recommendedMode: "BOSS MODE", silhouette: "root-lobed facility with a severed glass spine", tacticalSummary: "Dense root pockets reward ambushes while the exposed lab spine and two cleared service lanes keep objective rotations readable." }),
    topology: Object.freeze({ floorZones: [r(2, 3, 32, 20), r(0, 9, 7, 8), r(29, 6, 7, 13)], voids: [r(2, 3, 6, 3), r(28, 20, 6, 3)], blocks: [r(15, 4, 6, 5, { kind: "broken-lab" }), r(12, 12, 3, 7), r(21, 10, 3, 8), r(5, 14, 5, 3), r(27, 7, 4, 3), r(7, 6, 2, 4)], platforms: [r(15, 9, 6, 4, { elevation: 0.8 })], ramps: [r(13, 9, 3, 3, { from: 0, to: 0.8 })], landmark: Object.freeze({ type: "biomech-heart", x: 18, y: 7, scale: 2.6 }), boundary: "root wall, shattered glass and containment fencing" }),
    traversal: Object.freeze({ mechanics: ["root-tunnel", "bramble-slow", "cleared-lab-lane"], routes: ["biomech heart", "west root tunnel", "east clean lane", "spore nursery"] }),
    combat: Object.freeze({ sites: [zone("A", 4, 5, 6, 5), zone("B", 26, 15, 6, 5)], spawns: Object.freeze({ ATK: r(4, 18, 5, 3), DEF: r(27, 4, 5, 3) }), subspaces: ["heart chamber", "root tunnel", "cleared lab spine", "spore nursery"], coverDensity: "high pockets / low lanes", sightlineProfile: "ambush pockets separated by two crisp traversal lanes" }),
    hazards: [zone("bramble-nest", 8, 11, 5, 6, { type: "bramble", telegraph: 0.8, active: 6, cooldown: 12, effect: "slow", strength: 0.5 }), zone("burst-pods", 24, 10, 5, 6, { type: "spores", telegraph: 1.5, active: 3.6, cooldown: 11, offset: 5, effect: "visibility" })],
    interactables: [zone("root-tunnel", 2, 10, 8, 3, { type: "covered-route", movementMultiplier: 1.04 }), zone("reactive-flora", 24, 10, 5, 6, { type: "proximity-pulse" })],
    visuals: baseVisuals({ accent: 0x42d392, secondary: 0x2dd4bf, fog: 0x07140e, fogDensity: 0.0056, background: 0x020906, floorTint: 0x4b6752, wall: 0x425849, outer: 0x010603, particle: 0xa7f3d0, roughness: 0.86, metalness: 0.04, sky: "broken-greenhouse", landmark: "pulsing biomechanical heart" }),
    audio: Object.freeze({ musicTier: "combat_1", ambience: ["wet-growth", "glass-creak", "pod-click"] }),
    runtimeModifiers: Object.freeze({ cameraHeight: 43, cameraLead: 0.05, ambientEvent: "spore-bloom", elevationScale: 1 }),
    bossCompatibility: Object.freeze({ safeSpawnZones: [r(14, 14, 7, 7), r(24, 5, 8, 6)], minimumClearance: 2, disabledHazardsDuringSpawn: true }),
  }),

  cryo: Object.freeze({
    identity: Object.freeze({ id: "cryo", name: "CRYO RIFT", biome: "Fractured polar machinery", recommendedMode: "TACTICAL", silhouette: "split ice shelf stitched by three crossings", tacticalSummary: "Watch the rift telegraph, rotate through ice-cave cover, and use the stable central machinery bridge when outer shelves begin to crack." }),
    topology: Object.freeze({ floorZones: [r(1, 2, 34, 22)], voids: [r(16, 2, 4, 7), r(16, 11, 4, 5), r(16, 18, 4, 6), r(1, 2, 5, 4), r(30, 20, 5, 4)], blocks: [r(7, 6, 5, 2), r(5, 15, 3, 6), r(24, 5, 3, 6), r(27, 16, 5, 2), r(13, 12, 3, 2), r(20, 17, 3, 2)], platforms: [r(2, 3, 13, 5, { elevation: 1.2 }), r(21, 18, 13, 5, { elevation: 1.2 })], ramps: [r(12, 6, 4, 3, { from: 1.2, to: 0 }), r(20, 17, 4, 3, { from: 0, to: 1.2 })], landmark: Object.freeze({ type: "rift-chasm", x: 18, y: 13, scale: 3.2 }), boundary: "snow berm and crystalline safety pylons" }),
    traversal: Object.freeze({ mechanics: ["cracking-route", "readable-ice-slide", "cavern-shortcut"], routes: ["north ice shelf", "central machinery bridge", "south ridge", "west ice cavern"] }),
    combat: Object.freeze({ sites: [zone("A", 3, 7, 6, 5), zone("B", 27, 14, 6, 5)], spawns: Object.freeze({ ATK: r(3, 18, 5, 4), DEF: r(28, 4, 5, 4) }), subspaces: ["rift overlook", "ice cavern", "machinery bridge", "exposed outer shelf"], coverDensity: "medium asymmetric", sightlineProfile: "exposed shelves contrasted with tight ice corridors" }),
    hazards: [zone("cracking-north", 12, 8, 8, 3, { type: "cracking-ice", telegraph: 2.2, active: 3, cooldown: 13, effect: "damage", damagePerSecond: 7 }), zone("cracking-south", 16, 16, 8, 3, { type: "cracking-ice", telegraph: 2.2, active: 3, cooldown: 13, offset: 6.5, effect: "damage", damagePerSecond: 7 })],
    interactables: [zone("slide-west", 8, 13, 6, 2, { type: "ice-slide", vector: [1, 0], strength: 22 }), zone("slide-east", 22, 11, 6, 2, { type: "ice-slide", vector: [-1, 0], strength: 22 })],
    visuals: baseVisuals({ accent: 0x9ee7ff, secondary: 0xf8fafc, fog: 0x0b1a2a, fogDensity: 0.0062, background: 0x020812, floorTint: 0xb9d9e8, wall: 0x7d9caf, outer: 0x01050b, particle: 0xe0f2fe, roughness: 0.28, metalness: 0.12, sky: "polar-night", landmark: "luminous depth rift" }),
    audio: Object.freeze({ musicTier: "combat_3", ambience: ["ice-groan", "polar-wind", "deep-rift"] }),
    runtimeModifiers: Object.freeze({ cameraHeight: 45, cameraLead: 0.07, ambientEvent: "ice-fracture", elevationScale: 1 }),
    bossCompatibility: Object.freeze({ safeSpawnZones: [r(7, 9, 8, 6), r(21, 11, 8, 6)], minimumClearance: 2, disabledHazardsDuringSpawn: true }),
  }),

  mirage: Object.freeze({
    identity: Object.freeze({ id: "mirage", name: "NULL CATHEDRAL", biome: "Alien ritual megastructure", recommendedMode: "WAVE MODE", silhouette: "asymmetrical nave with offset transepts", tacticalSummary: "The nave is decisive but exposed. Side chapels, elevated galleries, and telegraphed phase barriers let squads rotate around the ritual machine." }),
    topology: Object.freeze({ floorZones: [r(12, 1, 12, 24), r(2, 4, 10, 7), r(4, 15, 8, 7), r(24, 7, 10, 12), r(10, 7, 4, 3), r(10, 17, 4, 3)], voids: [], blocks: [r(16, 9, 5, 7, { kind: "monolith" }), r(5, 6, 4, 2), r(6, 17, 3, 3), r(27, 9, 3, 2), r(29, 14, 3, 3), r(13, 4, 2, 4)], platforms: [r(12, 2, 4, 8, { elevation: 2.3 }), r(22, 16, 2, 7, { elevation: 2.3 })], ramps: [r(10, 7, 4, 3, { from: 0, to: 2.3 }), r(22, 15, 4, 3, { from: 2.3, to: 0 })], landmark: Object.freeze({ type: "null-monolith", x: 18.5, y: 12.5, scale: 3.5 }), boundary: "black-stone buttress and luminous void curb" }),
    traversal: Object.freeze({ mechanics: ["phase-barrier", "gallery-ramp", "off-axis-chapel"], routes: ["monumental nave", "west reliquary", "east ritual chamber", "upper galleries"] }),
    combat: Object.freeze({ sites: [zone("A", 3, 5, 7, 5), zone("B", 26, 12, 6, 5)], spawns: Object.freeze({ ATK: r(6, 18, 5, 3), DEF: r(15, 2, 6, 3) }), subspaces: ["great nave", "west reliquary", "east ritual chamber", "elevated galleries"], coverDensity: "low nave / high chambers", sightlineProfile: "one commanding axial lane with off-axis counterplay" }),
    hazards: [zone("null-pulse", 13, 8, 10, 10, { type: "null-pulse", telegraph: 2, active: 2.8, cooldown: 14, effect: "slow", strength: 0.4 })],
    interactables: [zone("phase-gate-west", 11, 8, 2, 2, { type: "phase-barrier", telegraph: 2.5, active: 4, cooldown: 12 }), zone("phase-gate-east", 23, 16, 2, 2, { type: "phase-barrier", telegraph: 2.5, active: 4, cooldown: 12, offset: 6 })],
    visuals: baseVisuals({ accent: 0xa78bfa, secondary: 0xe9d5ff, fog: 0x090811, fogDensity: 0.0048, background: 0x010103, floorTint: 0x292631, wall: 0x17151d, outer: 0x000001, particle: 0xc4b5fd, roughness: 0.72, metalness: 0.18, sky: "void-aperture", landmark: "rotating ritual monolith" }),
    audio: Object.freeze({ musicTier: "combat_4", ambience: ["sub-bass-choir", "stone-resonance", "ring-hum"] }),
    runtimeModifiers: Object.freeze({ cameraHeight: 47, cameraLead: 0.06, ambientEvent: "ritual-phase", elevationScale: 1 }),
    bossCompatibility: Object.freeze({ safeSpawnZones: [r(13, 17, 10, 6), r(24, 8, 8, 9)], minimumClearance: 2, disabledHazardsDuringSpawn: true }),
  }),

  neon: Object.freeze({
    identity: Object.freeze({ id: "neon", name: "NEON CANOPY", biome: "Megacity rooftop exchange", recommendedMode: "WAVE MODE", silhouette: "offset rooftop diamonds around a transit spine", tacticalSummary: "Fast transit lanes connect four unequal rooftops while holographic screens interrupt otherwise dangerous skyline sightlines." }),
    topology: Object.freeze({ floorZones: [r(3, 3, 12, 8), r(21, 3, 12, 8), r(4, 16, 10, 7), r(22, 15, 11, 8), r(14, 6, 8, 3), r(12, 18, 11, 3), r(17, 8, 3, 11)], voids: [], blocks: [r(6, 5, 3, 3), r(26, 6, 4, 2), r(7, 18, 2, 3), r(27, 17, 3, 3), r(17, 6, 2, 2)], platforms: [r(21, 3, 12, 8, { elevation: 1.6 }), r(4, 16, 10, 7, { elevation: 0.8 })], ramps: [r(19, 6, 4, 3, { from: 0, to: 1.6 }), r(12, 18, 4, 3, { from: 0.8, to: 0 })], landmark: Object.freeze({ type: "transit-holo", x: 18, y: 7, scale: 2.2 }), boundary: "lit parapet and city-depth curb" }),
    traversal: Object.freeze({ mechanics: ["transit-boost", "roof-ramp"], routes: ["north transit spine", "west data roof", "east tower roof", "south maintenance bridge"] }),
    combat: Object.freeze({ sites: [zone("A", 4, 4, 6, 5), zone("B", 25, 16, 6, 5)], spawns: Object.freeze({ ATK: r(5, 18, 5, 3), DEF: r(27, 4, 5, 3) }), subspaces: ["transit spine", "data roof", "tower roof", "maintenance bridge"], coverDensity: "medium-low", sightlineProfile: "roof-to-roof long lanes with billboard cuts" }),
    hazards: [zone("train-wake", 14, 6, 8, 3, { type: "transit-wake", telegraph: 1.4, active: 2, cooldown: 9, effect: "push", vector: [1, 0], strength: 24 })],
    interactables: [zone("boost-rail", 13, 18, 10, 3, { type: "conveyor", vector: [1, 0], strength: 34 })],
    visuals: baseVisuals({ accent: 0xf472b6, secondary: 0x22d3ee, fog: 0x0a0618, fogDensity: 0.0044, background: 0x05010f, floorTint: 0x8b7bb7, wall: 0x49386f, outer: 0x03010a, particle: 0xf9a8d4, roughness: 0.4, metalness: 0.52, sky: "rain-city", landmark: "suspended transit hologram" }),
    audio: Object.freeze({ musicTier: "combat_2", ambience: ["rain", "maglev-pass", "city-hum"] }), runtimeModifiers: Object.freeze({ cameraHeight: 45, cameraLead: 0.09, ambientEvent: "transit-pass", elevationScale: 1 }), bossCompatibility: Object.freeze({ safeSpawnZones: [r(4, 4, 9, 6), r(23, 15, 9, 7)], minimumClearance: 2, disabledHazardsDuringSpawn: true }),
  }),

  solar: Object.freeze({
    identity: Object.freeze({ id: "solar", name: "SOLAR BASTION", biome: "Heliostat desert fortress", recommendedMode: "TACTICAL", silhouette: "sunburst courts around a shaded diagonal", tacticalSummary: "Cross exposed reflector courts quickly or rotate through the shaded diagonal cooling trench." }),
    topology: Object.freeze({ floorZones: [r(2, 2, 32, 22)], voids: [r(2, 2, 7, 5), r(27, 19, 7, 5)], blocks: [r(15, 9, 6, 8), r(5, 8, 5, 2), r(26, 7, 4, 2), r(7, 17, 3, 3), r(25, 17, 5, 2)], platforms: [r(3, 14, 9, 7, { elevation: 1 })], ramps: [r(10, 15, 4, 3, { from: 1, to: 0 })], landmark: Object.freeze({ type: "solar-crown", x: 18, y: 12.5, scale: 2.7 }), boundary: "sandstone curtain wall" }),
    traversal: Object.freeze({ mechanics: ["shade-lane", "reflector-cycle"], routes: ["solar court", "cooling trench", "west battery", "east collector"] }),
    combat: Object.freeze({ sites: [zone("A", 4, 14, 6, 5), zone("B", 26, 4, 6, 5)], spawns: Object.freeze({ ATK: r(27, 17, 5, 3), DEF: r(4, 5, 5, 3) }), subspaces: ["solar court", "cooling trench", "west battery", "east collector"], coverDensity: "low exposed", sightlineProfile: "hard long-range courts and shaded close trench" }), hazards: [zone("solar-flare", 11, 4, 14, 5, { type: "heat", telegraph: 2, active: 2.5, cooldown: 13, effect: "damage", damagePerSecond: 6 })], interactables: [zone("shade-trench", 8, 17, 18, 3, { type: "covered-route", movementMultiplier: 1.06 })], visuals: baseVisuals({ accent: 0xfbbf24, secondary: 0xfb7185, fog: 0x2a1608, fogDensity: 0.0037, background: 0x160b04, floorTint: 0xc79a63, wall: 0x9b7046, outer: 0x120904, particle: 0xffd98a, roughness: 0.78, metalness: 0.16, sky: "sun-haze", landmark: "heliostat crown" }), audio: Object.freeze({ musicTier: "combat_1", ambience: ["dry-wind", "mirror-servo"] }), runtimeModifiers: Object.freeze({ cameraHeight: 44, cameraLead: 0.08, ambientEvent: "reflector-sweep", elevationScale: 1 }), bossCompatibility: Object.freeze({ safeSpawnZones: [r(10, 10, 7, 6), r(21, 10, 7, 6)], minimumClearance: 2, disabledHazardsDuringSpawn: true }),
  }),

  lunar: Object.freeze({
    identity: Object.freeze({ id: "lunar", name: "LUNAR EXCAVATION", biome: "Low-gravity moon quarry", recommendedMode: "TACTICAL", silhouette: "terraced quarry bowl with a broken rim road", tacticalSummary: "The excavation bowl favors short fights while the incomplete rim road creates a dangerous long rotation." }),
    topology: Object.freeze({ floorZones: [r(2, 2, 32, 22)], voids: [r(2, 2, 9, 4), r(25, 20, 9, 4), r(15, 10, 6, 6)], blocks: [r(6, 8, 4, 3), r(26, 6, 3, 5), r(8, 18, 5, 2), r(24, 17, 5, 2)], platforms: [r(11, 5, 14, 4, { elevation: 1.8 }), r(4, 14, 8, 7, { elevation: 0.9 })], ramps: [r(10, 7, 4, 3, { from: 0, to: 1.8 }), r(10, 16, 4, 3, { from: 0.9, to: 0 })], landmark: Object.freeze({ type: "quarry-crater", x: 18, y: 13, scale: 3 }), boundary: "regolith berm and beacon poles" }), traversal: Object.freeze({ mechanics: ["quarry-ramp", "rim-road"], routes: ["quarry bowl", "north rim", "west crawler cut", "east drill lane"] }), combat: Object.freeze({ sites: [zone("A", 4, 14, 6, 5), zone("B", 26, 5, 6, 5)], spawns: Object.freeze({ ATK: r(27, 17, 5, 3), DEF: r(4, 6, 5, 3) }), subspaces: ["quarry bowl", "north rim", "crawler cut", "drill lane"], coverDensity: "medium sparse", sightlineProfile: "rim long-range / bowl close-range" }), hazards: [zone("regolith-blast", 12, 16, 12, 4, { type: "dust", telegraph: 1.8, active: 3.5, cooldown: 13, effect: "visibility" })], interactables: [zone("crawler-track", 11, 5, 14, 3, { type: "conveyor", vector: [1, 0], strength: 20 })], visuals: baseVisuals({ accent: 0xe2e8f0, secondary: 0x22d3ee, fog: 0x090b12, fogDensity: 0.0028, background: 0x010205, floorTint: 0x9aa1ad, wall: 0x727986, outer: 0x030407, particle: 0xdbeafe, roughness: 0.9, metalness: 0.08, sky: "starfield", landmark: "excavation crater" }), audio: Object.freeze({ musicTier: "combat_2", ambience: ["radio-static", "drill-thrum"] }), runtimeModifiers: Object.freeze({ cameraHeight: 46, cameraLead: 0.07, ambientEvent: "regolith-blast", elevationScale: 1 }), bossCompatibility: Object.freeze({ safeSpawnZones: [r(11, 5, 14, 4), r(12, 17, 12, 5)], minimumClearance: 2, disabledHazardsDuringSpawn: true }),
  }),

  caldera: Object.freeze({
    identity: Object.freeze({ id: "caldera", name: "EMBER CALDERA", biome: "Basalt geothermal shrine", recommendedMode: "BOSS MODE", silhouette: "horseshoe basalt terraces around a lava throat", tacticalSummary: "Control the horseshoe rim, then decide between the hot throat shortcut and the safer shrine corridors." }),
    topology: Object.freeze({ floorZones: [r(2, 2, 32, 22)], voids: [r(13, 7, 10, 12), r(2, 2, 6, 5), r(28, 19, 6, 5)], blocks: [r(7, 8, 4, 3), r(25, 7, 4, 3), r(6, 17, 5, 2), r(25, 16, 5, 2)], platforms: [r(3, 10, 9, 6, { elevation: 1.3 }), r(24, 10, 9, 6, { elevation: 1.3 })], ramps: [r(10, 11, 4, 3, { from: 1.3, to: 0 }), r(22, 11, 4, 3, { from: 0, to: 1.3 })], landmark: Object.freeze({ type: "lava-throat", x: 18, y: 13, scale: 3.2 }), boundary: "obsidian rim and magma trench" }), traversal: Object.freeze({ mechanics: ["heat-shortcut", "terrace-ramp"], routes: ["horseshoe rim", "west shrine", "east vent hall", "hot throat shortcut"] }), combat: Object.freeze({ sites: [zone("A", 4, 10, 6, 5), zone("B", 26, 10, 6, 5)], spawns: Object.freeze({ ATK: r(4, 18, 5, 3), DEF: r(27, 4, 5, 3) }), subspaces: ["lava throat", "west shrine", "east vent hall", "horseshoe rim"], coverDensity: "medium", sightlineProfile: "curved rim lanes around a denied center" }), hazards: [zone("magma-breath", 12, 9, 12, 8, { type: "heat", telegraph: 2, active: 3, cooldown: 12, effect: "damage", damagePerSecond: 9 })], interactables: [zone("vent-boost", 10, 19, 16, 2, { type: "conveyor", vector: [1, 0], strength: 24 })], visuals: baseVisuals({ accent: 0xf97316, secondary: 0xef4444, fog: 0x210706, fogDensity: 0.0064, background: 0x0d0202, floorTint: 0x5f4545, wall: 0x594145, outer: 0x0c0202, particle: 0xfdba74, roughness: 0.86, metalness: 0.12, sky: "ash-column", landmark: "open lava throat" }), audio: Object.freeze({ musicTier: "combat_4", ambience: ["lava-roar", "rockfall"] }), runtimeModifiers: Object.freeze({ cameraHeight: 45, cameraLead: 0.08, ambientEvent: "magma-breath", elevationScale: 1 }), bossCompatibility: Object.freeze({ safeSpawnZones: [r(3, 10, 9, 6), r(24, 10, 9, 6)], minimumClearance: 2, disabledHazardsDuringSpawn: true }),
  }),
});

export const ARENA_ORDER = Object.freeze([
  "forge", "abyss", "tempest", "verdant", "cryo", "mirage",
  "neon", "solar", "lunar", "caldera",
]);

export function createSeededRandom(seed = 1) {
  let state = (Number(seed) || 1) >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function pointInZone(x, y, value) {
  return x >= value.x && y >= value.y && x < value.x + value.w && y < value.y + value.h;
}

function paint(grid, value, cell) {
  const minX = Math.max(0, Math.floor(value.x));
  const maxX = Math.min(grid[0].length, Math.ceil(value.x + value.w));
  const minY = Math.max(0, Math.floor(value.y));
  const maxY = Math.min(grid.length, Math.ceil(value.y + value.h));
  for (let y = minY; y < maxY; y++) for (let x = minX; x < maxX; x++) grid[y][x] = cell;
}

export function createArenaGrid(definition, width = ARENA_SIZE.width, height = ARENA_SIZE.height) {
  const grid = Array.from({ length: height }, () => Array(width).fill(1));
  for (const floor of definition.topology.floorZones) paint(grid, floor, 0);
  for (const value of definition.topology.voids || []) paint(grid, value, 1);
  for (const value of definition.topology.blocks || []) paint(grid, value, 1);
  return grid;
}

export function arenaElevationAt(definition, tileX, tileY) {
  let elevation = 0;
  for (const platform of definition.topology.platforms || []) {
    if (pointInZone(tileX, tileY, platform)) elevation = Math.max(elevation, platform.elevation || 0);
  }
  for (const ramp of definition.topology.ramps || []) {
    if (!pointInZone(tileX, tileY, ramp)) continue;
    const progress = ramp.w >= ramp.h ? (tileX - ramp.x) / ramp.w : (tileY - ramp.y) / ramp.h;
    elevation = Math.max(elevation, (ramp.from || 0) + ((ramp.to || 0) - (ramp.from || 0)) * Math.max(0, Math.min(1, progress)));
  }
  return elevation;
}

function zoneHasOpenCell(grid, value, inset = 0) {
  for (let y = Math.ceil(value.y + inset); y < Math.floor(value.y + value.h - inset); y++) {
    for (let x = Math.ceil(value.x + inset); x < Math.floor(value.x + value.w - inset); x++) {
      if (grid[y]?.[x] === 0) return true;
    }
  }
  return false;
}

function zonesOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

export function topologySignature(definition) {
  return createArenaGrid(definition).map(row => row.join("")).join("|");
}

export function validateArenaDefinition(definition) {
  const errors = [];
  for (const section of ["identity", "topology", "traversal", "combat", "hazards", "interactables", "visuals", "audio", "runtimeModifiers", "bossCompatibility"]) {
    if (definition?.[section] == null) errors.push(`missing ${section}`);
  }
  if (errors.length) return errors;
  const grid = createArenaGrid(definition);
  for (const [team, spawn] of Object.entries(definition.combat.spawns || {})) {
    if (!zoneHasOpenCell(grid, spawn)) errors.push(`${team} spawn has no open cell`);
    for (const hazard of definition.hazards) if (zonesOverlap(spawn, hazard)) errors.push(`${team} spawn overlaps hazard ${hazard.id}`);
  }
  for (const site of definition.combat.sites || []) if (!zoneHasOpenCell(grid, site)) errors.push(`site ${site.id} has no open cell`);
  if ((definition.combat.subspaces || []).length < 3) errors.push("fewer than three combat subspaces");
  if (!(definition.topology.landmark?.type)) errors.push("missing landmark");
  if (!(definition.traversal.mechanics || []).length) errors.push("missing traversal mechanic");
  if (!definition.hazards.length) errors.push("missing hazard");
  if (!(definition.bossCompatibility.safeSpawnZones || []).some(value => zoneHasOpenCell(grid, value, definition.bossCompatibility.minimumClearance || 0))) errors.push("no boss-safe spawn zone");
  return errors;
}

export function validateArenaRegistry(registry = ARENA_DEFINITIONS, order = ARENA_ORDER) {
  const errors = [];
  const signatures = new Map();
  for (const id of order) {
    const definition = registry[id];
    if (!definition) { errors.push(`${id}: missing definition`); continue; }
    for (const error of validateArenaDefinition(definition)) errors.push(`${id}: ${error}`);
    const signature = topologySignature(definition);
    if (signatures.has(signature)) errors.push(`${id}: topology duplicates ${signatures.get(signature)}`);
    signatures.set(signature, id);
  }
  return errors;
}

export const ARENAS = ARENA_DEFINITIONS;
