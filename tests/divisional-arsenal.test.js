import test from "node:test";
import assert from "node:assert/strict";

import { ASCENDANT_BY_ID, ASCENDANT_WEAPONS, validateAscendantArsenal } from "../src/divisional-arsenal.js";

const DIVISIONS = ["zenflow", "collective", "hybrid", "nexus", "terra", "vital", "binary", "gaia", "vector", "animus", "aether", "obsidian", "kinetic", "civic", "quantum", "signal", "juris", "nomad", "eon", "cognara"];

test("Arsenal Ascendant equips one validated weapon per division", () => {
  assert.deepEqual(validateAscendantArsenal(DIVISIONS), []);
  assert.equal(Object.keys(ASCENDANT_WEAPONS).length, 20);
  assert.equal(Object.keys(ASCENDANT_BY_ID).length, 20);
  for (const division of DIVISIONS) {
    const weapon = ASCENDANT_WEAPONS[division];
    assert.equal(weapon.owner, division);
    assert.equal(weapon.series, "ASCENDANT");
    assert.ok(weapon.dmg >= 40);
    assert.ok(weapon.special.n && weapon.special.eff);
  }
});

test("every Ascendant weapon has a distinct procedural geometry profile", () => {
  const profiles = Object.values(ASCENDANT_WEAPONS).map(weapon => [weapon.form, weapon.crest, weapon.prongs, weapon.orbitRings, weapon.fins].join(":"));
  assert.equal(new Set(profiles).size, profiles.length);
});
