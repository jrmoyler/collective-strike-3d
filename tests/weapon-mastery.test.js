import test from "node:test";
import assert from "node:assert/strict";

import {
  applyWeaponMastery,
  createWeaponLedger,
  recordWeaponDamage,
  recordWeaponTime,
  recordWeaponXp,
  setActiveWeapon,
  weaponEngagement,
  weaponMasteryAwards,
} from "../src/weapon-mastery.js";

const sum = awards => Object.values(awards).reduce((acc, xp) => acc + xp, 0);

test("a late weapon swap cannot claim the mastery the fighting weapon earned", () => {
  const ledger = createWeaponLedger("ascendant_vector");
  recordWeaponDamage(ledger, 4200);
  recordWeaponTime(ledger, 280);
  recordWeaponXp(ledger, 340);
  setActiveWeapon(ledger, "pistol");
  recordWeaponTime(ledger, 4);

  const awards = weaponMasteryAwards(ledger, 520);
  assert.equal(sum(awards), 520);
  assert.ok(awards.ascendant_vector > 500);
  assert.ok((awards.pistol || 0) < 20);
});

test("match XP splits across the weapons that actually fought", () => {
  const ledger = createWeaponLedger("rifle");
  recordWeaponDamage(ledger, 1000);
  recordWeaponTime(ledger, 100);
  setActiveWeapon(ledger, "sniper");
  recordWeaponDamage(ledger, 1000);
  recordWeaponTime(ledger, 100);

  const awards = weaponMasteryAwards(ledger, 401);
  assert.equal(sum(awards), 401);
  assert.deepEqual(Object.keys(awards).sort(), ["rifle", "sniper"]);
  assert.ok(Math.abs(awards.rifle - awards.sniper) <= 1);
});

test("XP awarded during play stays with the weapon that was in hand", () => {
  const ledger = createWeaponLedger("smg");
  recordWeaponXp(ledger, 200);
  recordWeaponTime(ledger, 10);
  setActiveWeapon(ledger, "signature");
  recordWeaponXp(ledger, 100);
  recordWeaponTime(ledger, 10);

  const awards = weaponMasteryAwards(ledger, 300);
  assert.deepEqual(awards, { smg: 200, signature: 100 });
});

test("engagement weights damage and carry time, and the completion bonus follows it", () => {
  const ledger = createWeaponLedger("rifle");
  recordWeaponDamage(ledger, 500);
  recordWeaponTime(ledger, 30);
  assert.deepEqual(weaponEngagement(ledger), { rifle: 800 });

  recordWeaponXp(ledger, 100);
  setActiveWeapon(ledger, "pistol");
  const awards = weaponMasteryAwards(ledger, 280);
  assert.equal(awards.rifle, 280);
  assert.equal(awards.pistol, undefined);
});

test("degenerate ledgers still land every point of XP somewhere", () => {
  assert.deepEqual(weaponMasteryAwards(createWeaponLedger("pistol"), 90), { pistol: 90 });
  assert.deepEqual(weaponMasteryAwards(null, 90, "signature"), { signature: 90 });
  assert.deepEqual(weaponMasteryAwards(null, 90), {});
  assert.deepEqual(weaponMasteryAwards(createWeaponLedger("pistol"), 0), {});

  const overAttributed = createWeaponLedger("rifle");
  recordWeaponXp(overAttributed, 300);
  setActiveWeapon(overAttributed, "sniper");
  recordWeaponXp(overAttributed, 100);
  const awards = weaponMasteryAwards(overAttributed, 200);
  assert.equal(sum(awards), 200);
  assert.equal(awards.rifle, 150);
  assert.equal(awards.sniper, 50);
});

test("awards merge additively into stored career mastery", () => {
  const career = { rifle: 40 };
  const next = applyWeaponMastery(career, { rifle: 60, sniper: 25, bogus: Number.NaN });
  assert.deepEqual(next, { rifle: 100, sniper: 25 });
  assert.deepEqual(career, { rifle: 40 });
});
