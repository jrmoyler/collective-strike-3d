/**
 * Arsenal Ascendant: a third one-to-one divisional weapon set.
 * Data stays renderer-agnostic so the live game, tests, armory, and rig sheet
 * consume the same definitions.
 */

const makeWeapon = ({
  owner, name, type, form, glow, stats, specialType, special, onHit,
  crest, prongs = 2, orbitRings = 1, fins = 2, cooldown = 29,
}) => {
  const [power, speed, range, control] = stats;
  const magazine = Math.max(6, Math.round(7 + speed * 0.18));
  return Object.freeze({
    id: `ascendant_${owner}`,
    owner,
    n: name,
    type,
    form,
    glow,
    stats,
    specialType,
    special,
    onHit,
    series: "ASCENDANT",
    crest,
    prongs,
    orbitRings,
    fins,
    cooldown,
    dmg: Math.round(20 + power * 0.44),
    delay: +Math.max(0.085, 0.47 - speed * 0.0041).toFixed(3),
    mag: magazine,
    res: magazine * 4,
    spread: +Math.max(0.01, 0.068 - range * 0.00058).toFixed(3),
    auto: speed >= 64,
    control,
  });
};

const entries = [
  ["zenflow", "NOOSPHERE", "LATTICE TRIDENT", "lance", "#C4B5FD", [68, 72, 94, 88], "STORM", "NEURAL WEATHER", "A thought-storm chains through visible hostiles and leaves them linked.", "link", "prism", 3, 3, 3],
  ["collective", "COVENANT", "COMMAND GAVEL", "gavel", "#FDE68A", [88, 48, 64, 94], "AURA", "EXECUTIVE ORDER", "An authority field strengthens allies and taxes marked eliminations.", "tithe", "crown", 4, 2, 4],
  ["hybrid", "CURRICULUM", "CODEX HALBERD", "axe", "#FDE047", [72, 60, 76, 92], "NOVA", "MASTERY CASCADE", "A learning nova restores allies while suppressing hostile movement.", "slow", "book", 2, 2, 3],
  ["nexus", "APERTURE", "CINEMATIC RAILBLADE", "blade", "#FDA4AF", [91, 86, 74, 58], "BEAM", "FINAL CUT", "A frame-slicing beam pierces the lane and staggers every target it crosses.", "reveal", "lens", 2, 2, 5],
  ["terra", "CONTINENT", "PILE-DRIVER MAUL", "hammer", "#93C5FD", [98, 34, 48, 82], "SHATTER", "FAULTLINE", "A structural impact strips armor and arrests enemies inside the rupture.", "breach", "plate", 4, 1, 4],
  ["vital", "GENESIS", "LANCET GLAIVE", "sickle", "#5EEAD4", [70, 74, 78, 94], "BEAM", "REGENESIS LANCE", "A helix beam damages hostiles and repairs every ally in its path.", "toxin", "helix", 2, 3, 2],
  ["binary", "COMPILER", "MATRIX HALBERD", "axe", "#5EEAD4", [80, 82, 86, 86], "AURA", "ZERO-DAY MESH", "A compiler field accelerates allied cooldowns and destabilizes hostile fire.", "jam", "fork", 3, 2, 4],
  ["gaia", "CANOPY", "ROOT-CIRCUIT LONGBOW", "bow", "#86EFAC", [78, 79, 92, 84], "STORM", "SUCCESSION BLOOM", "Living arcs seed enemies and grow restorative blooms when they fall.", "seed", "leaf", 4, 2, 5],
  ["vector", "PARALLAX", "PHASE-RAIL LAUNCHER", "drone", "#F8FAFC", [77, 94, 90, 62], "SWARM", "ROUTE COLLAPSE", "Vector drones collapse on targets while opening a speed corridor for allies.", "displace", "arrow", 4, 3, 5],
  ["animus", "TITANFALL", "ARC SIEGE HAMMER", "hammer", "#67E8F9", [96, 61, 68, 76], "SHATTER", "TITAN DIRECTIVE", "An arc impact launches autonomous follow-up strikes and primes weak points.", "crit", "titan", 4, 3, 6],
  ["aether", "UPLINK", "RELAY TRIDENT", "lance", "#A7F3D0", [66, 78, 96, 92], "AURA", "PERFECT SIGNAL", "A synchronized field reveals threats and shares recovery across the squad.", "reveal", "antenna", 3, 3, 3],
  ["obsidian", "BLACKSTAR", "WARD SHIELD-SPEAR", "lance", "#FDBA74", [90, 58, 84, 88], "SHATTER", "ABSOLUTE CONTAINMENT", "Breach shards lock the marked zone and peel armor from trapped hostiles.", "breach", "shield", 4, 2, 4],
  ["kinetic", "MOMENTUM", "TWIN ARC TONFA", "gauntlet", "#86EFAC", [86, 98, 56, 62], "SWARM", "OVERSPEED", "Phantom tonfa strikes compound attack speed and launch a kinetic dash.", "haste", "split", 4, 2, 6],
  ["civic", "CONCORD", "SANCTUARY LANTERN", "orb", "#BAE6FD", [58, 70, 74, 98], "NOVA", "COMMON GROUND", "A sanctuary nova shields the squad and forces hostiles out of its center.", "rally", "dove", 3, 3, 2],
  ["quantum", "MERKLE", "PROBABILITY CUBE-CANNON", "prism", "#DDD6FE", [82, 66, 88, 96], "NOVA", "CONSENSUS BREAK", "A probability nova records incoming damage and refunds it as armor.", "refund", "cube", 4, 4, 3],
  ["signal", "RESONANCE", "BROADCAST LANCE", "rifle", "#FDA4AF", [84, 96, 98, 68], "BEAM", "REDLINE TRANSMISSION", "A broadcast beam stacks conversion marks and amplifies sustained squad fire.", "signal", "wave", 3, 3, 5],
  ["juris", "PRECEDENT", "VERDICT PIKE", "axe", "#A5B4FC", [95, 42, 72, 96], "SHATTER", "FINAL JURISDICTION", "Converging verdict shards slow and expose the highest-threat hostile.", "verdict", "scales", 4, 2, 4],
  ["nomad", "MERIDIAN", "HORIZON SCIMITAR", "blade", "#FDE68A", [80, 92, 76, 78], "AURA", "CARAVAN GATE", "A moving horizon relocates the wielder and frees allies from movement control.", "waypoint", "compass", 2, 3, 5],
  ["eon", "ETERNITY", "CHRONO SCYTHE", "scythe", "#A5F3FC", [72, 52, 82, 99], "NOVA", "EVENT HORIZON", "A temporal nova slows hostile attacks while accelerating allied recovery.", "time", "hourglass", 4, 4, 3],
  ["cognara", "NOUMENON", "EMPATHY PRISM", "prism", "#F9A8D4", [76, 72, 90, 99], "STORM", "MIRROR MIND", "A cognitive storm reveals weak points and reflects a share of hostile pressure.", "mirror", "brain", 5, 4, 4],
];

export const ASCENDANT_WEAPONS = Object.freeze(Object.fromEntries(entries.map(([
  owner, name, type, form, glow, stats, specialType, specialName, effect,
  onHit, crest, prongs, orbitRings, fins,
]) => [owner, makeWeapon({
  owner, name, type, form, glow, stats, specialType, onHit, crest, prongs,
  orbitRings, fins, special: Object.freeze({ n: specialName, d: effect, eff: effect }),
})])));

export const ASCENDANT_BY_ID = Object.freeze(Object.fromEntries(
  Object.values(ASCENDANT_WEAPONS).map(weapon => [weapon.id, weapon]),
));

export function validateAscendantArsenal(divisions) {
  const errors = [];
  const ids = new Set();
  const signatures = new Set();
  for (const division of divisions) {
    const weapon = ASCENDANT_WEAPONS[division];
    if (!weapon) { errors.push(`${division}: missing Ascendant weapon`); continue; }
    if (ids.has(weapon.id)) errors.push(`${division}: duplicate id ${weapon.id}`);
    ids.add(weapon.id);
    const signature = [weapon.form, weapon.crest, weapon.prongs, weapon.orbitRings, weapon.fins].join(":");
    if (signatures.has(signature)) errors.push(`${division}: duplicate geometry profile ${signature}`);
    signatures.add(signature);
    if (!weapon.special?.n || !weapon.special?.eff) errors.push(`${division}: missing doctrine contract`);
  }
  return errors;
}
