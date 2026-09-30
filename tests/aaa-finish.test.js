import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

import { BOSS_BY_ID } from '../src/boss-dna.js';
import { makeBossRig, updateBossRig } from '../src/boss-rig.js';
import { finishBossRig, finishWeapon, updateBossFinish, updateOperatorDeath, updateOperatorFinish, tick } from '../src/aaa-finish.js';

const opts = { THREE, S: 0.1 };
const snapshot = rig => rig.parts.map(mesh => [mesh.name, mesh.geometry.uuid, mesh.position.toArray(), mesh.scale.toArray()]);

test('boss finish upgrades surfaces without altering silhouette, parts or hit proxy', () => {
  for (const [id, dna] of Object.entries(BOSS_BY_ID)) {
    const rig = makeBossRig({ id, dna, x: 300, y: 300, angle: 0 }, opts);
    const before = { parts: snapshot(rig), segments: rig.segments.length, limbs: rig.limbs.length, radius: rig.hitProxy.radius };
    finishBossRig(THREE, rig);
    assert.deepEqual(snapshot(rig), before.parts, `${id} parts changed`);
    assert.equal(rig.segments.length, before.segments);
    assert.equal(rig.limbs.length, before.limbs);
    assert.equal(rig.hitProxy.radius, before.radius);
    for (const key of ['skin', 'armor', 'trim', 'accent']) assert.equal(typeof rig.materials[key].onBeforeCompile, 'function', `${id} ${key} not finished`);
    assert.ok(rig.aaa, `${id} finish state missing`);
  }
});

test('boss hit flash fires on impact onset and decays even under sustained fire', () => {
  const dna = BOSS_BY_ID.overseer_prime;
  const rig = finishBossRig(THREE, makeBossRig({ id: dna.id, dna, x: 0, y: 0, angle: 0 }, opts));
  updateBossRig(rig, 0.016, 1, { hit: 1 });
  updateBossFinish(rig, 0.016, 1, { hit: 1 });
  const peak = rig.aaa.uHit.value;
  assert.ok(peak > 0.5);
  for (let i = 0; i < 12; i++) updateBossFinish(rig, 0.016, 1 + i * 0.016, { hit: 1 });
  assert.ok(rig.aaa.uHit.value < 0.05, 'a held hit value must not hold the flash');
  updateBossFinish(rig, 0.1, 2, { telegraph: true });
  assert.ok(rig.aaa.uSurge.value > 0.3);
});

test('weapon finish keeps grip, muzzle and receiver transforms intact', () => {
  const box = new THREE.BoxGeometry(1, 1, 1), cyl = new THREE.CylinderGeometry(1, 1, 1, 8);
  const dark = new THREE.MeshStandardMaterial(), metal = new THREE.MeshStandardMaterial();
  const energy = new THREE.MeshStandardMaterial({ emissive: 0xffffff, emissiveIntensity: 2.5 });
  const weapon = new THREE.Group(), body = new THREE.Mesh(box, dark), rail = new THREE.Mesh(box, dark), barrel = new THREE.Mesh(cyl, metal), core = new THREE.Mesh(box, energy);
  body.scale.set(.48, .25, 1.02); rail.scale.set(.24, .055, .86); barrel.scale.set(.06, .54, .06);
  weapon.add(body, rail, barrel, core);
  const muzzle = [0, 0, 1.6];
  weapon.userData = { body, rail, barrel, dark, metal, trim: metal, profile: { grip: [0, -.17, -.16], muzzle } };
  const scales = [body, rail, barrel].map(mesh => mesh.scale.toArray());
  finishWeapon(THREE, weapon);
  assert.deepEqual([body, rail, barrel].map(mesh => mesh.scale.toArray()), scales);
  assert.deepEqual(weapon.userData.profile.muzzle, muzzle);
  assert.equal(rail.children.filter(child => child.isInstancedMesh).length, 1);
  assert.equal(barrel.children.filter(child => child.isInstancedMesh).length, 1);
  assert.equal(energy.customProgramCacheKey(), 'cs3d-aaa-energy');
  assert.equal(dark.customProgramCacheKey(), 'cs3d-aaa-metal');
  assert.equal(finishWeapon(THREE, weapon), weapon, 'finishing twice is a no-op');
});

test('operator finish life cycle: flash, blink and elimination dissolve restore cleanly', () => {
  tick(12.5);
  const shared = { uHit: { value: 0 }, uDissolve: { value: 0 } };
  const weapon = new THREE.Group();
  const shadowDisc = new THREE.Mesh(new THREE.CircleGeometry(1, 8), new THREE.MeshBasicMaterial({ transparent: true, opacity: .58 }));
  const rig = { shared, weapon, shadowDisc, root: new THREE.Group(), legs: [], arms: [], aaa: { eyes: [], emissive: [], joints: null, blinkAt: 1, blink: 0, phase: 0, dissolving: false } };
  updateOperatorFinish(rig, 0.016, 1, 1);
  assert.ok(shared.uHit.value > 0.5);
  updateOperatorDeath(rig, 2.4);
  assert.ok(shared.uDissolve.value >= 1);
  assert.equal(weapon.visible, false);
  updateOperatorFinish(rig, 0.016, 5, 0);
  assert.equal(shared.uDissolve.value, 0);
  assert.equal(weapon.visible, true);
  assert.equal(shadowDisc.material.opacity, .58);
});
