import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

import { BOSS_BY_ID } from '../src/boss-dna.js';
import { makeBossRig, updateBossRig } from '../src/boss-rig.js';

const opts = { THREE, S: 0.1 };

test('colossus boss builds a complete mesh hierarchy with collision proxy and animated limbs', () => {
  const dna = BOSS_BY_ID.overseer_prime;
  const rig = makeBossRig({ id: dna.id, dna, x: 400, y: 300, angle: 0 }, opts);

  assert.equal(rig.stub, false);
  assert.ok(rig.root instanceof THREE.Group);
  assert.ok(rig.parts.length >= 10);
  assert.ok(rig.limbs.length >= 4);
  assert.ok(rig.hitProxy.radius > 30);

  const before = rig.limbs[0].pivot.rotation.x;
  updateBossRig(rig, 0.25, 1.5, { speed: 120, angle: 0.4, phase: 'live' });
  assert.notEqual(rig.limbs[0].pivot.rotation.x, before);
});

test('orbital and swarm bosses create visible, animated segment meshes', () => {
  for (const id of ['narrative_lens', 'synapse_swarm']) {
    const dna = BOSS_BY_ID[id];
    const rig = makeBossRig({ id, dna, x: 300, y: 300, angle: 0 }, opts);
    assert.equal(rig.segments.length, dna.segments);
    assert.equal(rig.segments.every(segment => segment.mesh instanceof THREE.Object3D), true);

    const before = rig.segments[0].anchor.position.clone();
    updateBossRig(rig, 0.2, 2, { speed: 80, angle: 0.2, phase: 'live' });
    assert.ok(rig.segments[0].anchor.position.distanceTo(before) > 0.001);
  }
});

test('loom hydra combines a deforming helix with three independently targetable heads', () => {
  const dna = BOSS_BY_ID.loom_hydra;
  const rig = makeBossRig({ id: dna.id, dna, x: 500, y: 420, angle: 0 }, opts);

  assert.deepEqual(rig.locos, ['helix_titan', 'swarm_host']);
  assert.equal(rig.segments.length, 3);
  assert.equal(rig.segments.every(segment => segment.type === 'head' && segment.mesh), true);
  assert.ok(rig.coil.length >= 8);

  const before = rig.coil[4].position.clone();
  updateBossRig(rig, 0.16, 3.25, { speed: 40, angle: 1.1, phase: 'live' });
  assert.ok(rig.coil[4].position.distanceTo(before) > 0.001);
});
