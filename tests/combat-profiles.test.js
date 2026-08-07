import test from "node:test";
import assert from "node:assert/strict";

import {
  COMBAT_PROFILE_LIMITS,
  DEFAULT_COMBAT_HEALTH,
  DOCTRINE_FORM_PROFILES,
  STANDARD_COMBAT_PROFILES,
  advanceCombatState,
  analyzeArsenalBalance,
  analyzeWeaponBalance,
  combatModifiers,
  createCombatState,
  effectiveSpread,
  fireCombatShot,
  resolveCombatProfile,
  resolveHitFeedback,
} from "../src/combat-profiles.js";

const STANDARD_WEAPONS = {
  pistol: { id: "pistol", dmg: 24, delay: 0.3, mag: 12, spread: 0.04 },
  smg: { id: "smg", dmg: 19, delay: 0.082, mag: 30, spread: 0.075 },
  rifle: { id: "rifle", dmg: 31, delay: 0.125, mag: 30, spread: 0.04 },
  sniper: { id: "sniper", dmg: 118, delay: 1.15, mag: 5, spread: 0.004 },
};

const ALL_DOCTRINE_FORMS = [
  "staff", "scepter", "blade", "hammer", "vial", "sickle", "drone",
  "rifle", "lance", "orb", "axe", "compass", "prism", "gavel",
  "gauntlet", "tome", "bow", "scythe",
];

test("standard profiles preserve live spread values and remain presentation-distinct", () => {
  const signatures = [];
  for (const [id, weapon] of Object.entries(STANDARD_WEAPONS)) {
    const profile = resolveCombatProfile(weapon);
    assert.equal(profile.id, `standard:${id}`);
    assert.equal(profile.spread.base, weapon.spread);
    signatures.push([profile.recoil.pitch, profile.tracer.velocity, profile.tracer.thickness].join(":"));
  }
  assert.equal(new Set(signatures).size, 4);
  assert.equal(Object.keys(STANDARD_COMBAT_PROFILES).length, 4);
});

test("every live doctrine form owns a complete and distinct presentation profile", () => {
  assert.deepEqual(Object.keys(DOCTRINE_FORM_PROFILES).sort(), [...ALL_DOCTRINE_FORMS].sort());
  const signatures = [];
  for (const form of ALL_DOCTRINE_FORMS) {
    const profile = resolveCombatProfile({ id: `test_${form}`, form, dmg: 45, delay: 0.2, spread: 0.025, glow: "#abcdef" });
    assert.equal(profile.source, "doctrine-form");
    assert.equal(profile.form, form);
    assert.equal(profile.palette.primary, "#abcdef");
    assert.ok(profile.tracer.sheath > 0 && profile.tracer.core > 0 && profile.tracer.trail > 0);
    signatures.push([profile.recoil.pitch, profile.bloom.perShot, profile.tracer.velocity, profile.tracer.thickness].join(":"));
  }
  assert.equal(new Set(signatures).size, ALL_DOCTRINE_FORMS.length);
});

test("weapon control makes otherwise identical doctrine forms steadier", () => {
  const loose = resolveCombatProfile({ id: "loose", form: "rifle", dmg: 46, delay: 0.1, spread: 0.035, control: 20 });
  const stable = resolveCombatProfile({ id: "stable", form: "rifle", dmg: 46, delay: 0.1, spread: 0.035, control: 95 });
  assert.ok(stable.recoil.pitch < loose.recoil.pitch);
  assert.ok(stable.bloom.perShot < loose.bloom.perShot);
  assert.equal(stable.spread.base, loose.spread.base);
});

test("unknown weapons resolve to the same safe fallback contract", () => {
  const byId = resolveCombatProfile("unregistered-plasma");
  const byObject = resolveCombatProfile({ id: "unregistered-plasma", dmg: Number.NaN, delay: -2, spread: 99 });
  assert.equal(byId.source, "fallback");
  assert.equal(byObject.source, "fallback");
  assert.equal(byId.form, "generic");
  assert.deepEqual(byObject.tracer, byId.tracer);
  assert.ok(byObject.spread.base <= COMBAT_PROFILE_LIMITS.maxSpread);
});

test("successive shots accumulate bloom and clamp at the profile ceiling", () => {
  const profile = resolveCombatProfile(STANDARD_WEAPONS.smg);
  let state = createCombatState(profile);
  for (let i = 0; i < 100; i++) state = fireCombatShot(state, profile).state;
  assert.equal(state.bloom, profile.bloom.max);
  assert.equal(state.shotIndex, 100);
  assert.equal(state.recoveryDelay, profile.bloom.recoveryDelay);
});

test("bloom waits for its recovery delay then recovers linearly to zero", () => {
  const profile = resolveCombatProfile(STANDARD_WEAPONS.rifle);
  const fired = fireCombatShot(createCombatState(profile), profile).state;
  const waiting = advanceCombatState(fired, profile, profile.bloom.recoveryDelay / 2);
  assert.equal(waiting.bloom, fired.bloom);
  const oneTenthRecovery = advanceCombatState(waiting, profile, profile.bloom.recoveryDelay / 2 + 0.1);
  assert.equal(oneTenthRecovery.bloom, Math.max(0, fired.bloom - profile.bloom.recoveryPerSecond * 0.1));
  const settled = advanceCombatState(oneTenthRecovery, profile, 60);
  assert.equal(settled.bloom, 0);
  assert.equal(settled.recoil.pitch, 0);
  assert.equal(settled.recoil.yaw, 0);
});

test("recoil impulse is deterministic and its horizontal pattern changes by shot", () => {
  const profile = resolveCombatProfile(STANDARD_WEAPONS.rifle);
  const initial = createCombatState(profile);
  const a = fireCombatShot(initial, profile, { moving: true });
  const b = fireCombatShot(initial, profile, { moving: true });
  assert.deepEqual(a.impulse, b.impulse);
  const second = fireCombatShot(a.state, profile, { moving: true });
  assert.notEqual(second.impulse.yaw, a.impulse.yaw);
  assert.ok(a.impulse.pitch > 0);
});

test("movement, ADS, and control states compose into bounded spread modifiers", () => {
  const profile = resolveCombatProfile(STANDARD_WEAPONS.rifle);
  const base = combatModifiers(profile);
  const moving = combatModifiers(profile, { moving: true });
  const ads = combatModifiers(profile, { ads: true });
  const controlled = combatModifiers(profile, { control: "buff" });
  const disrupted = combatModifiers(profile, { control: "debuff" });
  assert.equal(base.spread, 1);
  assert.equal(moving.spread, 1.7);
  assert.equal(ads.spread, 0.68);
  assert.equal(controlled.spread, 0.65);
  assert.equal(disrupted.spread, 1.65);
  assert.ok(effectiveSpread(profile, { bloom: 999 }, { moving: true, control: "debuff" }) <= COMBAT_PROFILE_LIMITS.maxSpread);
});

test("shot output exposes renderer-agnostic tracer, flash, impact, and camera hooks", () => {
  const profile = resolveCombatProfile(STANDARD_WEAPONS.sniper);
  const shot = fireCombatShot(createCombatState(profile), profile, { ads: true });
  assert.deepEqual(Object.keys(shot.tracer).sort(), ["core", "sheath", "thickness", "trail", "velocity"].sort());
  assert.ok(shot.tracer.velocity > 0);
  assert.ok(shot.tracer.thickness > 0);
  assert.ok(shot.muzzleIntensity > 0);
  assert.ok(shot.impactIntensity > 0);
  assert.ok(shot.cameraKick > 0);
  assert.ok(shot.spread >= profile.spread.base * 0.68);
});

test("elimination feedback takes priority over critical and armor feedback", () => {
  const feedback = resolveHitFeedback({ remainingHealth: 0, armorBefore: 40, critical: true });
  assert.equal(feedback.kind, "elimination");
  assert.equal(feedback.sound, "elimination");
  assert.ok(feedback.priority > resolveHitFeedback({ remainingHealth: 10, critical: true }).priority);
});

test("hit feedback distinguishes armor, critical, boss, and ordinary hits", () => {
  const cases = [
    [{ remainingHealth: 50, armorBefore: 20 }, "armor"],
    [{ remainingHealth: 50, armorBefore: 20, critical: true }, "critical"],
    [{ remainingHealth: 500, boss: true }, "boss"],
    [{ remainingHealth: 50 }, "hit"],
  ];
  for (const [input, expected] of cases) assert.equal(resolveHitFeedback(input).kind, expected);
});

test("standard weapon TTK analysis lands in stable literal bands", () => {
  const expected = {
    pistol: { shots: 7, ttk: 1.8, band: "slow" },
    smg: { shots: 8, ttk: 0.574, band: "competitive" },
    rifle: { shots: 5, ttk: 0.5, band: "fast" },
    sniper: { shots: 2, ttk: 1.15, band: "standard" },
  };
  assert.equal(DEFAULT_COMBAT_HEALTH, 150);
  for (const [id, weapon] of Object.entries(STANDARD_WEAPONS)) {
    const result = analyzeWeaponBalance(weapon);
    assert.equal(result.shots, expected[id].shots);
    assert.equal(result.ttk, expected[id].ttk);
    assert.equal(result.band, expected[id].band);
    assert.equal(result.magazineSufficient, true);
  }
});

test("armor simulation increases bullets-to-kill without changing weapon data", () => {
  const weapon = { ...STANDARD_WEAPONS.rifle };
  const unarmored = analyzeWeaponBalance(weapon);
  const armored = analyzeWeaponBalance(weapon, { armor: 25 });
  assert.ok(armored.shots > unarmored.shots);
  assert.ok(armored.ttk > unarmored.ttk);
  assert.deepEqual(weapon, STANDARD_WEAPONS.rifle);
});

test("balance analysis is hard-bounded for invalid or non-lethal weapons", () => {
  const invalid = analyzeWeaponBalance({ id: "broken", dmg: 0, delay: 0, mag: 0 });
  assert.equal(invalid.valid, false);
  assert.equal(invalid.band, "invalid");
  assert.equal(invalid.shots, null);

  const capped = analyzeWeaponBalance({ id: "peashooter", dmg: 0.01, delay: 1, mag: 1 }, { health: 10_000, maxShots: 999_999 });
  assert.equal(capped.valid, true);
  assert.equal(capped.capped, true);
  assert.equal(capped.shots, COMBAT_PROFILE_LIMITS.maxAnalysisShots);
  assert.equal(capped.band, "beyond-cap");
});

test("arsenal analysis reports band counts and unsafe entries deterministically", () => {
  const report = analyzeArsenalBalance({ ...STANDARD_WEAPONS, broken: { id: "broken", dmg: -1, delay: 0.1, mag: 4 } });
  assert.equal(report.total, 5);
  assert.deepEqual(report.invalid, ["broken"]);
  assert.deepEqual(report.byBand, { competitive: 1, fast: 1, invalid: 1, slow: 1, standard: 1 });
});
