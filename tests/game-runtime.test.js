import test from "node:test";
import assert from "node:assert/strict";

import {
  GAME_STATES,
  GameScheduler,
  LifecycleRegistry,
  QualityController,
  createGameStateMachine,
  recoverNavigationPath,
} from "../src/game-runtime.js";

test("game state machine accepts legal player-journey transitions", () => {
  const machine = createGameStateMachine(GAME_STATES.LOADING);
  for (const state of [
    GAME_STATES.MENU,
    GAME_STATES.MODE_SELECT,
    GAME_STATES.OPERATOR_SELECT,
    GAME_STATES.ARENA_SELECT,
    GAME_STATES.DEPLOYMENT,
    GAME_STATES.BUY,
    GAME_STATES.LIVE,
    GAME_STATES.ROUND_END,
    GAME_STATES.RESULTS,
  ]) assert.equal(machine.transition(state).ok, true, `transitioned to ${state}`);
  assert.equal(machine.state, GAME_STATES.RESULTS);
});

test("game state machine rejects illegal transitions without corrupting state", () => {
  const machine = createGameStateMachine(GAME_STATES.MENU);
  const result = machine.transition(GAME_STATES.LIVE);
  assert.deepEqual(result, { ok: false, from: GAME_STATES.MENU, to: GAME_STATES.LIVE, reason: "illegal-transition" });
  assert.equal(machine.state, GAME_STATES.MENU);
});

test("pause resumes the exact prior simulation state", () => {
  const machine = createGameStateMachine(GAME_STATES.LIVE);
  assert.equal(machine.pause().ok, true);
  assert.equal(machine.state, GAME_STATES.PAUSED);
  assert.equal(machine.resume().ok, true);
  assert.equal(machine.state, GAME_STATES.LIVE);
  assert.equal(machine.resume().ok, false);
});

test("game scheduler freezes delayed combat work and cancels by lifecycle tag", () => {
  const scheduler = new GameScheduler();
  const events = [];
  scheduler.schedule(() => events.push("doctrine"), 0.2, "match");
  scheduler.tick(0.1);
  assert.deepEqual(events, []);
  scheduler.tick(0);
  assert.deepEqual(events, []);
  scheduler.cancelTag("match");
  scheduler.tick(1);
  assert.deepEqual(events, []);
  assert.equal(scheduler.size, 0);
});

test("lifecycle teardown removes listeners and scheduled cleanup exactly once", () => {
  const registry = new LifecycleRegistry();
  const target = new EventTarget();
  let events = 0;
  let disposed = 0;
  registry.listen(target, "ping", () => events++);
  registry.add(() => disposed++);
  target.dispatchEvent(new Event("ping"));
  assert.equal(events, 1);
  assert.deepEqual(registry.counts(), { listeners: 1, disposers: 1 });
  assert.equal(registry.teardown(), 2);
  assert.equal(registry.teardown(), 0);
  target.dispatchEvent(new Event("ping"));
  assert.equal(events, 1);
  assert.equal(disposed, 1);
});

test("quality controller downgrades only after sustained slow frames and upgrades conservatively", () => {
  const quality = new QualityController({ initial: "high", downgradeSamples: 3, upgradeSamples: 5 });
  assert.equal(quality.sample(25), "high");
  assert.equal(quality.sample(25), "high");
  assert.equal(quality.sample(25), "medium");
  for (let index = 0; index < 4; index++) assert.equal(quality.sample(12), "medium");
  assert.equal(quality.sample(12), "high");
});

test("bot path recovery rejects unreachable goals and returns a nearby reachable route", () => {
  const result = recoverNavigationPath({
    actor: { x: 20, y: 20 },
    goal: { x: 300, y: 300 },
    findPath: goal => goal.x === 300 ? [] : [{ x: 80, y: 80 }],
    fallbackGoals: [{ x: 80, y: 80 }, { x: 120, y: 80 }],
  });
  assert.deepEqual(result, { path: [{ x: 80, y: 80 }], goal: { x: 80, y: 80 }, recovered: true });
});
