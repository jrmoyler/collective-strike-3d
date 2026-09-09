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

test('weapon finishing keeps receiver and sockets intact, with bounded frame-independent cooling', async () => {
  const THREE = await import('three');
  const {polishWeaponAssembly, updateWeaponFinish} = await import('../src/divisional-arsenal.js');
  const weapon = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial());
  const muzzle = new THREE.Object3D(); muzzle.position.z = 1.4;
  const energy = new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshStandardMaterial({emissiveIntensity: 2.8}));
  weapon.add(body, muzzle, energy); weapon.userData = {body, muzzle};
  polishWeaponAssembly(THREE, weapon);
  const count = body.children.length;
  polishWeaponAssembly(THREE, weapon);
  assert.equal(body.children.length, count);
  assert.equal(weapon.userData.muzzle, muzzle);
  assert.equal(muzzle.position.z, 1.4);
  assert.equal(weapon.userData.finish.pins.parent, body);
  assert.equal(weapon.userData.finish.vents.count, 10);
  updateWeaponFinish(weapon, 1 / 60, 1);
  assert.ok(energy.material.emissiveIntensity > 1.2 && energy.material.emissiveIntensity < 1.6);
  const heat = weapon.userData.finish.heat;
  for (let i = 0; i < 60; i++) updateWeaponFinish(weapon, 1 / 60, 0);
  assert.ok(Math.abs(weapon.userData.finish.heat - heat * Math.exp(-2.8)) < 1e-8);
  updateWeaponFinish(weapon, NaN, Infinity);
  assert.ok(Number.isFinite(energy.material.emissiveIntensity));
});
