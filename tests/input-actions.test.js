import test from "node:test";
import assert from "node:assert/strict";

import { ACTIONS, DEFAULT_KEY_BINDINGS, createActionInput, normalizeAxis } from "../src/input-actions.js";

test("action registry covers gameplay, menus, weapon slots, and spectating", () => {
  for (const action of ["moveUp", "moveDown", "moveLeft", "moveRight", "aim", "fire", "reload", "interact", "ability", "doctrine", "weapon1", "weapon6", "pause", "confirm", "cancel", "scoreboard", "spectateNext", "spectatePrevious"])
    assert.equal(ACTIONS.includes(action), true, `${action} is registered`);
});

test("keyboard mapping produces action edges independently of physical keys", () => {
  const input = createActionInput({ keyboard: DEFAULT_KEY_BINDINGS });
  assert.equal(input.handleKey("KeyR", true), "reload");
  assert.equal(input.isDown("reload"), true);
  assert.equal(input.consume("reload"), true);
  assert.equal(input.consume("reload"), false);
  input.handleKey("KeyR", false);
  assert.equal(input.isDown("reload"), false);
});

test("input mode changes live and connected gamepads are tracked by index", () => {
  const input = createActionInput();
  input.setMode("touch");
  input.connectGamepad({ index: 2, id: "Standard Pad" });
  assert.equal(input.mode, "gamepad");
  assert.deepEqual(input.gamepads, [{ index: 2, id: "Standard Pad" }]);
  input.disconnectGamepad(2);
  assert.deepEqual(input.gamepads, []);
});

test("axis normalization applies a deadzone without losing full-scale input", () => {
  assert.equal(normalizeAxis(0.1, 0.18), 0);
  assert.equal(normalizeAxis(1, 0.18), 1);
  assert.equal(normalizeAxis(-1, 0.18), -1);
  assert.ok(normalizeAxis(0.59, 0.18) > 0.49 && normalizeAxis(0.59, 0.18) < 0.51);
});
