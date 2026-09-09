import test from 'node:test';
import assert from 'node:assert/strict';
import { combatCameraFocus, cameraDamping, shotAcoustics } from '../src/combat-presentation.js';

test('camera lead is bounded even for off-map aiming and follows actor elevation', () => {
  const actor = { x: 20, y: 30 }, focus = combatCameraFocus(actor, { x: 99999, y: -99999 }, .1, 4);
  assert.ok(Math.hypot(focus.x - 2, focus.z - 3) <= 3.200001);
  assert.equal(focus.y, 4);
  assert.deepEqual(combatCameraFocus(actor, {}, .1, 4, false), { x: 2, y: 4, z: 3 });
});
test('camera damping converges equally at 30 and 120 Hz', () => {
  const run = hz => { let x = 0; for (let i = 0; i < hz; i++) x += (10 - x) * cameraDamping(1 / hz); return x; };
  assert.ok(Math.abs(run(30) - run(120)) < 1e-10);
});
test('gunshots pan toward source, attenuate with range and muffle behind cover', () => {
  const listener = { x: 0, y: 0 }, source = { x: 110, y: 0 };
  const open = shotAcoustics(source, listener), closed = shotAcoustics(source, listener, true);
  assert.equal(open.pan, .5);
  assert.equal(shotAcoustics({ x: -110, y: 0 }, listener).pan, -.5);
  assert.ok(closed.gain < open.gain && closed.cutoff < open.cutoff);
  assert.equal(shotAcoustics({ x: 900, y: 0 }, listener).gain, 0);
});
