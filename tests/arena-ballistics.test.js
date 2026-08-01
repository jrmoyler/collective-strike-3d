import test from "node:test";
import assert from "node:assert/strict";

import { createArenaGrid } from "../src/arena-core.js";
import { arenaBlockHeight, arenaLineClear, traceArenaSegment } from "../src/arena-ballistics.js";

const definition = {
  topology: {
    floorZones: [{ x: 0, y: 0, w: 12, h: 6 }],
    voids: [{ x: 2, y: 0, w: 1, h: 2 }],
    blocks: [],
    platforms: [{ x: 6, y: 0, w: 6, h: 6, elevation: 3.2 }],
    ramps: [],
  },
};

const shot = (overrides = {}) => traceArenaSegment({
  definition,
  grid: createArenaGrid(definition, 12, 6),
  tileSize: 1,
  start: { x: 1.5, y: 3, z: 1.55 },
  end: { x: 10.5, y: 3, z: 4.5 },
  ...overrides,
});

test("platform lips occlude shallow uphill shots but permit readable ledge shots", () => {
  const uphill = shot();
  assert.equal(uphill.clear, false);
  assert.equal(uphill.reason, "terrain");

  const ledge = shot({ start: { x: 6.35, y: 3, z: 4.75 }, end: { x: 1.5, y: 3, z: 1.35 } });
  assert.equal(ledge.clear, true);
});

test("airborne shots cross authored voids instead of treating pits as walls", () => {
  const result = shot({ start: { x: 0.5, y: 1, z: 1.4 }, end: { x: 4.5, y: 1, z: 1.4 } });
  assert.equal(result.clear, true);
});

test("cover height, not palette or grid occupancy alone, controls line of sight", () => {
  const low = structuredClone(definition);
  low.topology.platforms = [];
  low.topology.blocks = [{ x: 4, y: 2, w: 1, h: 2, collisionHeight: 1.1 }];
  const high = structuredClone(low);
  high.topology.blocks[0].collisionHeight = 2.4;
  const from = { x: 1.5, y: 3 };
  const to = { x: 8.5, y: 3 };
  assert.equal(arenaLineClear({ definition: low, grid: createArenaGrid(low, 12, 6), tileSize: 1, from, to }), true);
  assert.equal(arenaLineClear({ definition: high, grid: createArenaGrid(high, 12, 6), tileSize: 1, from, to }), false);
});

test("dynamic phase barriers participate in the same height trace", () => {
  const flat = structuredClone(definition);
  flat.topology.platforms = [];
  const grid = createArenaGrid(flat, 12, 6);
  grid[3][5] = 1;
  const result = traceArenaSegment({
    definition: flat,
    grid,
    tileSize: 1,
    start: { x: 1.5, y: 3.5, z: 1.55 },
    end: { x: 9.5, y: 3.5, z: 1.55 },
  });
  assert.equal(result.clear, false);
  assert.equal(result.reason, "dynamic-barrier");
});

test("authored cover heights are deterministic", () => {
  const block = { x: 7, y: 11, w: 3, h: 2 };
  assert.equal(arenaBlockHeight(block), arenaBlockHeight({ ...block }));
  assert.equal(arenaBlockHeight({ ...block, collisionHeight: 1.25 }), 1.25);
});
