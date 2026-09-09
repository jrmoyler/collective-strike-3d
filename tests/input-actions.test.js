import test from "node:test";
import assert from "node:assert/strict";

import { ACTIONS, DEFAULT_KEY_BINDINGS, chooseSpatialFocus, createActionInput, normalizeAxis } from "../src/input-actions.js";

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

test("spatial focus chooses the nearest candidate in the requested direction", () => {
  const current = { id: "center", left: 100, top: 100, width: 40, height: 40 };
  const candidates = [
    { id: "left", left: 20, top: 105, width: 40, height: 40 },
    { id: "right-near", left: 170, top: 102, width: 40, height: 40 },
    { id: "right-far", left: 280, top: 100, width: 40, height: 40 },
    { id: "down", left: 104, top: 190, width: 40, height: 40 },
  ];
  assert.equal(chooseSpatialFocus(current, candidates, { x: 1, y: 0 })?.id, "right-near");
  assert.equal(chooseSpatialFocus(current, candidates, { x: -1, y: 0 })?.id, "left");
  assert.equal(chooseSpatialFocus(current, candidates, { x: 0, y: 1 })?.id, "down");
});

test("spatial focus rejects backwards and zero-area candidates", () => {
  const current = { id: "center", left: 100, top: 100, width: 40, height: 40 };
  const candidates = [
    { id: "behind", left: 20, top: 100, width: 40, height: 40 },
    { id: "hidden", left: 180, top: 100, width: 0, height: 40 },
  ];
  assert.equal(chooseSpatialFocus(current, candidates, { x: 1, y: 0 }), null);
});

test("idle controller polling does not release keyboard or touch interaction", () => {
  const input = createActionInput();
  input.handleKey("KeyF", true);
  input.setAction("interact", false, "gamepad");
  assert.equal(input.isDown("interact"), true);
  input.setAction("interact", true, "touch");
  input.handleKey("KeyF", false);
  assert.equal(input.isDown("interact"), true);
  input.setAction("interact", false, "touch");
  assert.equal(input.isDown("interact"), false);
});

test("releasing one of two bound movement keys preserves the other hold", () => {
  const input = createActionInput();
  input.handleKey("KeyW", true);
  input.handleKey("ArrowUp", true);
  input.handleKey("KeyW", false);
  assert.equal(input.movement().y, -1);
  input.releaseAll();
  assert.equal(input.movement().y, 0);
});

test("disconnect releases controller fire without clearing a mouse hold", () => {
  const input = createActionInput();
  input.connectGamepad({ index: 0 });
  input.setAction("fire", true, "gamepad");
  input.setAction("fire", true, "keyboard");
  input.disconnectGamepad(0);
  assert.equal(input.isDown("fire"), true);
  input.setAction("fire", false, "keyboard");
  assert.equal(input.isDown("fire"), false);
});

test("invalid controller axes never inject non-finite movement", () => {
  for (const value of [NaN, Infinity, -Infinity]) assert.equal(normalizeAxis(value), 0);
  for (const deadzone of [1, -1, NaN]) assert.ok(Number.isFinite(normalizeAxis(0.8, deadzone)));
});
