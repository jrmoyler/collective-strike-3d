import assert from "node:assert/strict";

globalThis.window = globalThis;
const { useGame } = await import("../src/store.js");

useGame.getState().deploy();
assert.equal(useGame.getState().phase, "playing", "deploy enters gameplay");
assert.equal(useGame.getState().bossSpawned, false, "deploy resets boss state");

useGame.setState({ ammo: 0, reserve: 10 });
assert.equal(useGame.getState().reload(), true, "reload starts when magazine is empty");
assert.equal(useGame.getState().reloading, true, "reload exposes a timed HUD state");
await new Promise(resolve => setTimeout(resolve, 920));
assert.equal(useGame.getState().ammo, 10, "reload transfers reserve ammunition");
assert.equal(useGame.getState().reserve, 0, "reload consumes reserve ammunition");
assert.equal(useGame.getState().reloading, false, "reload completes cleanly");

const monarch = { id: "test-monarch", type: "monarch", hp: 100, maxHp: 100, position: [0, 0, 0] };
useGame.setState({
  phase: "playing",
  bossSpawned: true,
  anchors: useGame.getState().anchors.map(anchor => ({ ...anchor, hp: 0 })),
  enemies: [monarch]
});
useGame.getState().hitEnemy(monarch.id, monarch.hp);
assert.equal(useGame.getState().phase, "victory", "defeating the Rift Monarch wins the run");
assert.equal(useGame.getState().enemies.length, 0, "boss victory clears remaining enemies");

useGame.getState().returnToMenu();
assert.equal(useGame.getState().phase, "menu", "return to menu resets the run state");

console.log("✓ 11 gameplay state assertions passed.");
