export const ACTIONS = Object.freeze([
  "moveUp", "moveDown", "moveLeft", "moveRight", "aim", "fire", "reload", "interact", "ability", "doctrine",
  "weapon1", "weapon2", "weapon3", "weapon4", "weapon5", "weapon6", "pause", "confirm", "cancel", "scoreboard",
  "spectateNext", "spectatePrevious", "armory",
]);

export const DEFAULT_KEY_BINDINGS = Object.freeze({
  KeyW: "moveUp", ArrowUp: "moveUp", KeyS: "moveDown", ArrowDown: "moveDown", KeyA: "moveLeft", ArrowLeft: "moveLeft",
  KeyD: "moveRight", ArrowRight: "moveRight", Mouse0: "fire", KeyR: "reload", KeyF: "interact", KeyE: "ability", KeyQ: "doctrine",
  Digit1: "weapon1", Digit2: "weapon2", Digit3: "weapon3", Digit4: "weapon4", Digit5: "weapon5", Digit6: "weapon6",
  Escape: "pause", Enter: "confirm", Space: "confirm", Backspace: "cancel", Tab: "scoreboard", BracketRight: "spectateNext",
  BracketLeft: "spectatePrevious", KeyB: "armory",
});

export const GAMEPAD_BINDINGS = Object.freeze({
  0: "confirm", 1: "cancel", 2: "interact", 3: "reload", 4: "spectatePrevious", 5: "spectateNext", 6: "ability", 7: "fire",
  8: "scoreboard", 9: "pause", 10: "doctrine", 11: "armory", 12: "weapon1", 13: "weapon2", 14: "weapon5", 15: "weapon6",
});

export function normalizeAxis(value, deadzone = 0.18) {
  const magnitude = Math.abs(Number(value) || 0);
  if (magnitude <= deadzone) return 0;
  return Math.sign(value) * Math.min(1, (magnitude - deadzone) / (1 - deadzone));
}

export function createActionInput({ keyboard = DEFAULT_KEY_BINDINGS } = {}) {
  const down = new Set();
  const edges = new Set();
  const pads = new Map();
  let mode = "keyboard";

  const setAction = (action, active, nextMode = mode) => {
    if (!ACTIONS.includes(action)) return false;
    if (active) {
      mode = nextMode;
      if (!down.has(action)) edges.add(action);
      down.add(action);
    } else down.delete(action);
    return true;
  };

  return {
    get mode() { return mode; },
    get gamepads() { return [...pads.values()].sort((a, b) => a.index - b.index); },
    setMode(next) { if (["keyboard", "touch", "gamepad"].includes(next)) mode = next; return mode; },
    setAction,
    handleKey(code, active) {
      const action = keyboard[code];
      if (!action) return null;
      setAction(action, active, "keyboard");
      return action;
    },
    isDown(action) { return down.has(action); },
    consume(action) { const active = edges.has(action); edges.delete(action); return active; },
    releaseAll() { down.clear(); edges.clear(); },
    connectGamepad(gamepad) {
      pads.set(gamepad.index, { index: gamepad.index, id: gamepad.id || "Standard Gamepad" });
      mode = "gamepad";
    },
    disconnectGamepad(index) { pads.delete(index); },
    movement() {
      return { x: Number(down.has("moveRight")) - Number(down.has("moveLeft")), y: Number(down.has("moveDown")) - Number(down.has("moveUp")) };
    },
  };
}
