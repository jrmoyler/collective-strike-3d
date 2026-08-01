import test from "node:test";
import assert from "node:assert/strict";

import {
  ARENA_DEFINITIONS,
  ARENA_ORDER,
  ARENA_SIZE,
  arenaElevationAt,
  createArenaGrid,
  createSeededRandom,
  topologySignature,
  validateArenaRegistry,
} from "../src/arena-core.js";
import { findBossSpawn } from "../src/boss-mode.js";

const openCells = (grid, value) => {
  const cells = [];
  for (let y = Math.floor(value.y); y < Math.ceil(value.y + value.h); y++) {
    for (let x = Math.floor(value.x); x < Math.ceil(value.x + value.w); x++) {
      if (grid[y]?.[x] === 0) cells.push({ x, y });
    }
  }
  return cells;
};

const reachable = (grid, starts) => {
  const seen = new Set(starts.map(cell => `${cell.x}:${cell.y}`));
  const queue = [...starts];
  while (queue.length) {
    const cell = queue.shift();
    for (const [x, y] of [[cell.x + 1, cell.y], [cell.x - 1, cell.y], [cell.x, cell.y + 1], [cell.x, cell.y - 1]]) {
      const key = `${x}:${y}`;
      if (grid[y]?.[x] !== 0 || seen.has(key)) continue;
      seen.add(key);
      queue.push({ x, y });
    }
  }
  return seen;
};

test("arena registry contains ten complete and topologically unique definitions", () => {
  assert.deepEqual(validateArenaRegistry(), []);
  assert.equal(ARENA_ORDER.length, 10);
  assert.equal(new Set(ARENA_ORDER.map(id => topologySignature(ARENA_DEFINITIONS[id]))).size, 10);
  for (const id of ARENA_ORDER) {
    const definition = ARENA_DEFINITIONS[id];
    assert.ok(definition.identity.silhouette);
    assert.ok(definition.topology.landmark.type);
    assert.ok(definition.traversal.mechanics.length);
    assert.ok(definition.hazards.length);
    assert.ok(definition.combat.subspaces.length >= 3);
  }
});

test("both team spawns can reach both objective sites on every arena", () => {
  for (const id of ARENA_ORDER) {
    const definition = ARENA_DEFINITIONS[id];
    const grid = createArenaGrid(definition);
    for (const [team, spawn] of Object.entries(definition.combat.spawns)) {
      const starts = openCells(grid, spawn);
      assert.ok(starts.length, `${id} ${team} has an open spawn cell`);
      const visited = reachable(grid, starts);
      for (const site of definition.combat.sites) {
        assert.ok(openCells(grid, site).some(cell => visited.has(`${cell.x}:${cell.y}`)), `${id} ${team} can reach site ${site.id}`);
      }
    }
  }
});

test("boss-safe zones produce collision-safe spawns on every arena", () => {
  for (const id of ARENA_ORDER) {
    const definition = ARENA_DEFINITIONS[id];
    const grid = createArenaGrid(definition);
    const rng = createSeededRandom(id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0));
    const point = definition.bossCompatibility.safeSpawnZones
      .map(zone => findBossSpawn({ zone, tile: ARENA_SIZE.tile, radius: 45, grid, rng, attempts: 250 }))
      .find(Boolean);
    assert.ok(point, `${id} exposes a valid boss spawn`);
  }
});

test("elevation sampling is deterministic and only raises authored surfaces", () => {
  for (const id of ARENA_ORDER) {
    const definition = ARENA_DEFINITIONS[id];
    assert.equal(arenaElevationAt(definition, -1, -1), 0);
    for (const platform of definition.topology.platforms) {
      assert.ok(arenaElevationAt(definition, platform.x + 0.5, platform.y + 0.5) > 0, `${id} platform raises actors`);
    }
  }
});

test("seeded decoration random is repeatable", () => {
  const a = createSeededRandom(4242);
  const b = createSeededRandom(4242);
  assert.deepEqual(Array.from({ length: 12 }, () => a()), Array.from({ length: 12 }, () => b()));
});
