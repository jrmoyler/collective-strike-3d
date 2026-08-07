/**
 * Pure combat presentation and balance contracts.
 *
 * The runtime owns actors, rendering and audio. This module only turns a live
 * weapon definition plus small pieces of combat state into deterministic data
 * that those systems can consume.
 */

const freeze = value => {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) freeze(child);
  return Object.freeze(value);
};

const finite = (value, fallback) => Number.isFinite(Number(value)) ? Number(value) : fallback;
const clamp = (value, minimum, maximum) => Math.max(minimum, Math.min(maximum, value));
const rounded = (value, precision = 12) => Number(value.toFixed(precision));

export const COMBAT_PROFILE_LIMITS = freeze({
  maxSpread: 0.35,
  maxBloom: 0.24,
  maxRecoilPitch: 8,
  maxRecoilYaw: 4,
  maxAnalysisShots: 512,
  maxAnalysisTtk: 60,
  maxAnalysisHealth: 10_000,
  maxAnalysisArmor: 10_000,
});
export const DEFAULT_COMBAT_HEALTH = 150;

const DEFAULT_MODIFIERS = freeze({
  movementSpread: 1.7,
  adsSpread: 0.68,
  controlBuffSpread: 0.65,
  controlDebuffSpread: 1.65,
});

function makeProfile({
  id,
  source,
  form,
  spread,
  recoil,
  bloom,
  tracer,
  muzzleIntensity,
  impactIntensity,
  cameraKick,
  palette = {},
}) {
  return freeze({
    id,
    source,
    form,
    spread: { base: clamp(finite(spread, 0.04), 0, COMBAT_PROFILE_LIMITS.maxSpread) },
    recoil: {
      pitch: finite(recoil.pitch, 0.75),
      yaw: finite(recoil.yaw, 0.2),
      roll: finite(recoil.roll, 0.04),
      returnPerSecond: finite(recoil.returnPerSecond, 7),
      maxPitch: clamp(finite(recoil.maxPitch, 5), 0, COMBAT_PROFILE_LIMITS.maxRecoilPitch),
      maxYaw: clamp(finite(recoil.maxYaw, 2), 0, COMBAT_PROFILE_LIMITS.maxRecoilYaw),
    },
    bloom: {
      perShot: clamp(finite(bloom.perShot, 0.01), 0, COMBAT_PROFILE_LIMITS.maxBloom),
      max: clamp(finite(bloom.max, 0.08), 0, COMBAT_PROFILE_LIMITS.maxBloom),
      recoveryDelay: clamp(finite(bloom.recoveryDelay, 0.14), 0, 2),
      recoveryPerSecond: clamp(finite(bloom.recoveryPerSecond, 0.12), 0, 2),
    },
    tracer: {
      sheath: clamp(finite(tracer.sheath, 0.42), 0, 2),
      core: clamp(finite(tracer.core, 1), 0, 2),
      trail: clamp(finite(tracer.trail, 0.38), 0, 2),
      velocity: clamp(finite(tracer.velocity, 70), 1, 300),
      thickness: clamp(finite(tracer.thickness, 1), 0.1, 4),
    },
    muzzleIntensity: clamp(finite(muzzleIntensity, 1), 0, 4),
    impactIntensity: clamp(finite(impactIntensity, 1), 0, 4),
    cameraKick: clamp(finite(cameraKick, 0.1), 0, 3),
    palette: {
      primary: typeof palette.primary === "string" ? palette.primary : null,
      core: typeof palette.core === "string" ? palette.core : "#ffffff",
    },
    modifiers: DEFAULT_MODIFIERS,
  });
}

const standard = (id, values) => makeProfile({
  id: `standard:${id}`,
  source: "standard",
  form: id,
  ...values,
});

export const STANDARD_COMBAT_PROFILES = freeze({
  pistol: standard("pistol", {
    spread: 0.04,
    recoil: { pitch: 0.72, yaw: 0.2, roll: 0.035, returnPerSecond: 8.2, maxPitch: 3.2, maxYaw: 1.3 },
    bloom: { perShot: 0.008, max: 0.045, recoveryDelay: 0.13, recoveryPerSecond: 0.12 },
    tracer: { sheath: 0.34, core: 0.96, trail: 0.28, velocity: 68, thickness: 0.9 },
    muzzleIntensity: 0.82, impactIntensity: 0.9, cameraKick: 0.08,
  }),
  smg: standard("smg", {
    spread: 0.075,
    recoil: { pitch: 0.44, yaw: 0.28, roll: 0.045, returnPerSecond: 10.5, maxPitch: 4.4, maxYaw: 2.1 },
    bloom: { perShot: 0.013, max: 0.12, recoveryDelay: 0.11, recoveryPerSecond: 0.17 },
    tracer: { sheath: 0.3, core: 0.92, trail: 0.24, velocity: 76, thickness: 0.7 },
    muzzleIntensity: 0.72, impactIntensity: 0.78, cameraKick: 0.06,
  }),
  rifle: standard("rifle", {
    spread: 0.04,
    recoil: { pitch: 0.82, yaw: 0.22, roll: 0.04, returnPerSecond: 8.8, maxPitch: 5.2, maxYaw: 1.8 },
    bloom: { perShot: 0.009, max: 0.078, recoveryDelay: 0.14, recoveryPerSecond: 0.13 },
    tracer: { sheath: 0.42, core: 1, trail: 0.36, velocity: 84, thickness: 1 },
    muzzleIntensity: 1, impactIntensity: 1.05, cameraKick: 0.09,
  }),
  sniper: standard("sniper", {
    spread: 0.004,
    recoil: { pitch: 2.1, yaw: 0.13, roll: 0.075, returnPerSecond: 5.4, maxPitch: 6.4, maxYaw: 1.2 },
    bloom: { perShot: 0.024, max: 0.035, recoveryDelay: 0.31, recoveryPerSecond: 0.09 },
    tracer: { sheath: 0.58, core: 1.2, trail: 0.5, velocity: 118, thickness: 1.7 },
    muzzleIntensity: 1.65, impactIntensity: 1.45, cameraKick: 0.34,
  }),
});

const FORM_ROWS = [
  ["staff", 0.72, 0.007, 70, 1.05, 0.95, 1.02, 0.11],
  ["scepter", 0.96, 0.009, 64, 1.2, 1.1, 1.16, 0.14],
  ["blade", 0.58, 0.012, 82, 0.82, 0.92, 1.04, 0.1],
  ["hammer", 1.65, 0.015, 52, 1.65, 1.6, 1.68, 0.24],
  ["vial", 0.62, 0.006, 68, 0.95, 0.88, 0.94, 0.09],
  ["sickle", 0.9, 0.011, 72, 1.12, 1.08, 1.2, 0.15],
  ["drone", 0.5, 0.01, 88, 0.78, 0.9, 0.92, 0.08],
  ["rifle", 0.84, 0.009, 80, 1.08, 1.1, 1.14, 0.13],
  ["lance", 1.05, 0.008, 86, 1.25, 1.25, 1.32, 0.17],
  ["orb", 0.66, 0.0075, 60, 1.2, 1.2, 1.08, 0.12],
  ["axe", 1.32, 0.013, 58, 1.45, 1.42, 1.52, 0.21],
  ["compass", 0.7, 0.0085, 76, 1, 1.02, 1.06, 0.105],
  ["prism", 0.78, 0.0065, 74, 1.1, 1.16, 1.2, 0.125],
  ["gavel", 1.45, 0.014, 54, 1.55, 1.5, 1.6, 0.225],
  ["gauntlet", 0.48, 0.016, 92, 0.72, 0.86, 0.9, 0.075],
  ["tome", 0.82, 0.0078, 65, 1.15, 1.18, 1.24, 0.135],
  ["bow", 1.08, 0.0068, 96, 1, 1.12, 1.3, 0.145],
  ["scythe", 1.2, 0.0125, 62, 1.35, 1.34, 1.44, 0.19],
];

export const DOCTRINE_FORM_PROFILES = freeze(Object.fromEntries(FORM_ROWS.map(([
  form, pitch, perShot, velocity, thickness, muzzleIntensity, impactIntensity, cameraKick,
]) => [form, makeProfile({
  id: `form:${form}`,
  source: "doctrine-form",
  form,
  spread: 0.025,
  recoil: {
    pitch,
    yaw: rounded(0.14 + perShot * 7),
    roll: rounded(0.025 + thickness * 0.018),
    returnPerSecond: rounded(7.8 - Math.min(2.2, pitch * 0.8)),
    maxPitch: rounded(3.8 + Math.min(2.4, pitch)),
    maxYaw: rounded(1.5 + perShot * 30),
  },
  bloom: {
    perShot,
    max: rounded(Math.min(0.14, 0.052 + perShot * 4.5)),
    recoveryDelay: rounded(0.11 + pitch * 0.035),
    recoveryPerSecond: rounded(0.105 + velocity * 0.00055),
  },
  tracer: {
    sheath: rounded(0.38 + thickness * 0.045),
    core: rounded(0.96 + impactIntensity * 0.08),
    trail: rounded(0.3 + thickness * 0.055),
    velocity,
    thickness,
  },
  muzzleIntensity,
  impactIntensity,
  cameraKick,
})])));

const FALLBACK_PROFILE = makeProfile({
  id: "fallback:generic",
  source: "fallback",
  form: "generic",
  spread: 0.04,
  recoil: { pitch: 0.75, yaw: 0.2, roll: 0.04, returnPerSecond: 7.5, maxPitch: 4.5, maxYaw: 1.8 },
  bloom: { perShot: 0.01, max: 0.08, recoveryDelay: 0.15, recoveryPerSecond: 0.12 },
  tracer: { sheath: 0.4, core: 1, trail: 0.34, velocity: 72, thickness: 1 },
  muzzleIntensity: 1,
  impactIntensity: 1,
  cameraKick: 0.1,
});

const hasProfileContract = value => Boolean(value?.recoil && value?.bloom && value?.tracer && value?.spread);

/** Resolve either a live weapon object or a standard weapon id. */
export function resolveCombatProfile(weapon) {
  if (hasProfileContract(weapon)) return weapon;
  if (typeof weapon === "string") return STANDARD_COMBAT_PROFILES[weapon] || FALLBACK_PROFILE;

  const id = typeof weapon?.id === "string" ? weapon.id : "unknown";
  if (STANDARD_COMBAT_PROFILES[id]) {
    const base = STANDARD_COMBAT_PROFILES[id];
    const spread = finite(weapon?.spread, base.spread.base);
    if (spread === base.spread.base) return base;
    return makeProfile({ ...base, spread });
  }

  const formBase = DOCTRINE_FORM_PROFILES[weapon?.form];
  if (!formBase) {
    const spread = clamp(finite(weapon?.spread, FALLBACK_PROFILE.spread.base), 0, COMBAT_PROFILE_LIMITS.maxSpread);
    if (spread === FALLBACK_PROFILE.spread.base) return FALLBACK_PROFILE;
    return makeProfile({ ...FALLBACK_PROFILE, spread });
  }

  const damage = clamp(finite(weapon.dmg, 45), 1, 160);
  const delay = clamp(finite(weapon.delay, 0.2), 0.06, 1.5);
  const statsControl = Array.isArray(weapon.stats) ? weapon.stats[3] : undefined;
  const control = clamp(finite(weapon.control, finite(statsControl, 70)), 0, 100);
  const controlScale = 1.16 - control * 0.0038;
  const powerScale = clamp(Math.sqrt(damage / 45), 0.72, 1.55);
  const cadenceScale = clamp(0.18 / delay, 0.68, 1.45);

  return makeProfile({
    ...formBase,
    id: `weapon:${id}`,
    form: weapon.form,
    spread: finite(weapon.spread, formBase.spread.base),
    recoil: {
      ...formBase.recoil,
      pitch: rounded(formBase.recoil.pitch * powerScale * controlScale),
      yaw: rounded(formBase.recoil.yaw * controlScale),
      roll: rounded(formBase.recoil.roll * powerScale),
    },
    bloom: {
      ...formBase.bloom,
      perShot: rounded(formBase.bloom.perShot * cadenceScale * controlScale),
      max: rounded(formBase.bloom.max * clamp(controlScale, 0.78, 1.18)),
    },
    tracer: {
      ...formBase.tracer,
      velocity: rounded(formBase.tracer.velocity * clamp(0.94 + cadenceScale * 0.06, 0.96, 1.04)),
      thickness: rounded(formBase.tracer.thickness * clamp(powerScale, 0.82, 1.3)),
    },
    muzzleIntensity: rounded(formBase.muzzleIntensity * powerScale),
    impactIntensity: rounded(formBase.impactIntensity * powerScale),
    cameraKick: rounded(formBase.cameraKick * powerScale * controlScale),
    palette: { primary: weapon.glow, core: "#ffffff" },
  });
}

const asProfile = value => hasProfileContract(value) ? value : resolveCombatProfile(value);

export function createCombatState(profileValue, initial = {}) {
  const profile = asProfile(profileValue);
  return {
    bloom: clamp(finite(initial.bloom, 0), 0, profile.bloom.max),
    recoveryDelay: clamp(finite(initial.recoveryDelay, 0), 0, profile.bloom.recoveryDelay),
    recoil: {
      pitch: clamp(finite(initial.recoil?.pitch, 0), 0, profile.recoil.maxPitch),
      yaw: clamp(finite(initial.recoil?.yaw, 0), -profile.recoil.maxYaw, profile.recoil.maxYaw),
    },
    shotIndex: Math.max(0, Math.floor(finite(initial.shotIndex, 0))),
  };
}

const decayToZero = (value, amount) => value > 0
  ? Math.max(0, value - amount)
  : Math.min(0, value + amount);

/** Advance recovery by elapsed simulation time. Input state is never mutated. */
export function advanceCombatState(stateValue, profileValue, elapsedSeconds) {
  const profile = asProfile(profileValue);
  const state = createCombatState(profile, stateValue);
  const elapsed = clamp(finite(elapsedSeconds, 0), 0, 60);
  const recoveryTime = Math.max(0, elapsed - state.recoveryDelay);
  return {
    ...state,
    bloom: rounded(Math.max(0, state.bloom - recoveryTime * profile.bloom.recoveryPerSecond)),
    recoveryDelay: rounded(Math.max(0, state.recoveryDelay - elapsed)),
    recoil: {
      pitch: rounded(decayToZero(state.recoil.pitch, elapsed * profile.recoil.returnPerSecond)),
      yaw: rounded(decayToZero(state.recoil.yaw, elapsed * profile.recoil.returnPerSecond * 0.7)),
    },
  };
}

function controlMultiplier(control) {
  if (control === "buff") return DEFAULT_MODIFIERS.controlBuffSpread;
  if (control === "debuff") return DEFAULT_MODIFIERS.controlDebuffSpread;
  if (Number.isFinite(Number(control))) return clamp(Number(control), 0.5, 2);
  return 1;
}

/** Multipliers mirror the live movement/control values and add an ADS hook. */
export function combatModifiers(profileValue, context = {}) {
  asProfile(profileValue); // Validate/normalize without coupling modifiers to a renderer.
  const movement = context.moving ? DEFAULT_MODIFIERS.movementSpread : 1;
  const ads = context.ads ? DEFAULT_MODIFIERS.adsSpread : 1;
  const control = controlMultiplier(context.control);
  return {
    spread: rounded(clamp(movement * ads * control, 0.35, 3)),
    bloom: rounded(clamp((context.moving ? 1.12 : 1) * (context.ads ? 0.82 : 1) * control, 0.4, 2.4)),
    recoil: rounded(clamp((context.moving ? 1.16 : 1) * (context.ads ? 0.72 : 1) * Math.sqrt(control), 0.4, 2)),
    cameraKick: rounded(clamp((context.moving ? 1.08 : 1) * (context.ads ? 0.78 : 1) * Math.sqrt(control), 0.4, 2)),
  };
}

export function effectiveSpread(profileValue, stateValue = {}, context = {}) {
  const profile = asProfile(profileValue);
  const state = createCombatState(profile, stateValue);
  const modifiers = combatModifiers(profile, context);
  return rounded(clamp((profile.spread.base + state.bloom) * modifiers.spread, 0, COMBAT_PROFILE_LIMITS.maxSpread));
}

const YAW_PATTERN = freeze([0.35, -0.55, 0.72, -0.3, 0.88, -0.75, 0.5, -0.92]);

/**
 * Apply one shot and return both next simulation state and presentation hooks.
 * Callers can route the impulse to weapon animation, tracer to FX, and cameraKick
 * to their own camera system.
 */
export function fireCombatShot(stateValue, profileValue, context = {}) {
  const profile = asProfile(profileValue);
  const state = createCombatState(profile, stateValue);
  const modifiers = combatModifiers(profile, context);
  const pattern = YAW_PATTERN[state.shotIndex % YAW_PATTERN.length];
  const climb = 1 + Math.min(8, state.shotIndex) * 0.025;
  const impulse = {
    pitch: rounded(profile.recoil.pitch * climb * modifiers.recoil),
    yaw: rounded(profile.recoil.yaw * pattern * modifiers.recoil),
    roll: rounded(profile.recoil.roll * -Math.sign(pattern) * modifiers.recoil),
  };
  const nextState = {
    bloom: rounded(Math.min(profile.bloom.max, state.bloom + profile.bloom.perShot * modifiers.bloom)),
    recoveryDelay: profile.bloom.recoveryDelay,
    recoil: {
      pitch: rounded(Math.min(profile.recoil.maxPitch, state.recoil.pitch + impulse.pitch)),
      yaw: rounded(clamp(state.recoil.yaw + impulse.yaw, -profile.recoil.maxYaw, profile.recoil.maxYaw)),
    },
    shotIndex: state.shotIndex + 1,
  };
  return {
    state: nextState,
    impulse,
    spread: effectiveSpread(profile, state, context),
    tracer: profile.tracer,
    muzzleIntensity: profile.muzzleIntensity,
    impactIntensity: profile.impactIntensity,
    cameraKick: rounded(clamp(profile.cameraKick * modifiers.cameraKick, 0, 3)),
  };
}

const FEEDBACK = freeze({
  hit: { kind: "hit", priority: 1, sound: "hit", colorToken: "neutral", markerSeconds: 0.16, shake: 0 },
  boss: { kind: "boss", priority: 2, sound: "boss", colorToken: "boss", markerSeconds: 0.2, shake: 0.02 },
  armor: { kind: "armor", priority: 3, sound: "armor", colorToken: "armor", markerSeconds: 0.2, shake: 0.02 },
  critical: { kind: "critical", priority: 4, sound: "critical", colorToken: "critical", markerSeconds: 0.24, shake: 0.06 },
  elimination: { kind: "elimination", priority: 5, sound: "elimination", colorToken: "elimination", markerSeconds: 0.3, shake: 0.14 },
});

/** Resolve the same precedence used by damage()/confirmHit(), without UI calls. */
export function resolveHitFeedback({
  remainingHealth = 1,
  eliminated = false,
  armorBefore = 0,
  armorHit = false,
  critical = false,
  boss = false,
} = {}) {
  if (eliminated || finite(remainingHealth, 1) <= 0) return FEEDBACK.elimination;
  if (critical) return FEEDBACK.critical;
  if (armorHit || finite(armorBefore, 0) > 0) return FEEDBACK.armor;
  if (boss) return FEEDBACK.boss;
  return FEEDBACK.hit;
}

function ttkBand(ttk) {
  if (ttk <= 0.05) return "instant";
  if (ttk <= 0.5) return "fast";
  if (ttk <= 0.9) return "competitive";
  if (ttk <= 1.5) return "standard";
  return "slow";
}

/**
 * Bounded live-rule TTK simulation. Armor mirrors damage(): a shot that begins
 * against armor deals 55% health damage and removes 35% of raw damage as armor.
 */
export function analyzeWeaponBalance(weapon = {}, options = {}) {
  const damage = finite(weapon.dmg, 0);
  const delay = finite(weapon.delay, 0);
  const magazine = Math.max(0, Math.floor(finite(weapon.mag, 0)));
  const id = typeof weapon.id === "string" ? weapon.id : "unknown";
  if (damage <= 0 || delay <= 0) {
    return freeze({ id, valid: false, capped: false, shots: null, ttk: null, dps: null, band: "invalid", magazineSufficient: false, issues: ["non-positive damage or delay"] });
  }

  let health = clamp(finite(options.health, DEFAULT_COMBAT_HEALTH), 1, COMBAT_PROFILE_LIMITS.maxAnalysisHealth);
  let armor = clamp(finite(options.armor, 0), 0, COMBAT_PROFILE_LIMITS.maxAnalysisArmor);
  const requestedMax = Math.max(1, Math.floor(finite(options.maxShots, COMBAT_PROFILE_LIMITS.maxAnalysisShots)));
  const maxShots = Math.min(requestedMax, COMBAT_PROFILE_LIMITS.maxAnalysisShots);
  const multiplier = clamp(finite(options.damageMultiplier, 1), 0.01, 100);
  const rawDamage = damage * multiplier;
  let shots = 0;

  while (health > 0 && shots < maxShots) {
    const armored = armor > 0;
    health -= rawDamage * (armored ? 0.55 : 1);
    if (armored) armor = Math.max(0, armor - rawDamage * 0.35);
    shots += 1;
  }

  const capped = health > 0;
  const rawTtk = Math.max(0, shots - 1) * delay;
  const ttk = rounded(Math.min(rawTtk, COMBAT_PROFILE_LIMITS.maxAnalysisTtk), 6);
  const band = capped ? "beyond-cap" : ttkBand(ttk);
  const magazineSufficient = magazine > 0 && shots <= magazine && !capped;
  const issues = [];
  if (capped) issues.push(`not lethal within ${maxShots} shots`);
  if (!magazineSufficient) issues.push("requires reload or exceeds analysis cap");
  return freeze({
    id,
    valid: true,
    capped,
    shots,
    ttk,
    dps: rounded(rawDamage / delay, 6),
    band,
    magazineSufficient,
    remainingHealth: rounded(Math.max(0, health), 6),
    issues,
  });
}

/** Analyze a registry or array with stable band counts and issue lists. */
export function analyzeArsenalBalance(weapons, options = {}) {
  const entries = Array.isArray(weapons)
    ? weapons.map((weapon, index) => [weapon?.id || String(index), weapon])
    : Object.entries(weapons || {});
  const results = entries.map(([key, weapon]) => analyzeWeaponBalance({ ...weapon, id: weapon?.id || key }, options));
  const invalid = results.filter(result => !result.valid).map(result => result.id).sort();
  const unsafe = results.filter(result => !result.valid || result.capped).map(result => result.id).sort();
  const counts = {};
  for (const result of results) counts[result.band] = (counts[result.band] || 0) + 1;
  const byBand = Object.fromEntries(Object.entries(counts).sort(([a], [b]) => a.localeCompare(b)));
  return freeze({ total: results.length, byBand, invalid, unsafe, results });
}
