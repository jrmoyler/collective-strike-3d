import test from 'node:test';
import assert from 'node:assert/strict';

import {
  PLAYLISTS,
  buildWavePlan,
  canOccupyCircle,
  cellsForCircle,
  chooseRandomBoss,
  createBossBalance,
  bossPhaseForHealth,
  findBossSpawn,
  normalizeSquad,
  shouldStartApexChallenge,
} from '../src/boss-mode.js';

const OPERATORS = Array.from({ length: 20 }, (_, index) => `operator_${index + 1}`);

test('normalizeSquad preserves the controlled operator, removes duplicates, and enforces five slots', () => {
  assert.deepEqual(
    normalizeSquad(
      ['operator_4', 'operator_2', 'operator_4', 'operator_9', 'operator_12', 'operator_13', 'operator_14'],
      OPERATORS,
      'operator_2',
    ),
    ['operator_2', 'operator_4', 'operator_9', 'operator_12', 'operator_13'],
  );
});

test('boss balance scales for a full squad and exposes three escalation gates', () => {
  const tactical = createBossBalance({ hpMult: 4, difficulty: 'tactical', squadSize: 5 });
  const elite = createBossBalance({ hpMult: 4, difficulty: 'elite', squadSize: 5, source: 'apex' });
  assert.ok(tactical.maxHp >= 6000);
  assert.ok(elite.maxHp > tactical.maxHp);
  assert.ok(tactical.armor >= tactical.maxHp * 0.08);
  assert.deepEqual([1, 0.74, 0.49, 0.24, 0].map(ratio => bossPhaseForHealth(ratio * tactical.maxHp, tactical.maxHp)), [0, 1, 2, 3, 3]);
  assert.deepEqual(tactical.reinforcementCounts, [0, 2, 2, 3]);
});

test('wave plan uses every unselected operator exactly once before the final boss', () => {
  const squadIds = OPERATORS.slice(0, 5);
  const plan = buildWavePlan({
    operatorIds: OPERATORS,
    squadIds,
    bossId: 'eon_anchor',
    rng: () => 0.42,
  });

  assert.equal(plan.length, PLAYLISTS.wave.totalWaves);
  assert.equal(plan.at(-1).kind, 'boss');
  assert.equal(plan.at(-1).bossId, 'eon_anchor');

  const enemyIds = plan.slice(0, -1).flatMap(wave => wave.operatorIds);
  assert.equal(enemyIds.length, 15);
  assert.equal(new Set(enemyIds).size, 15);
  assert.deepEqual([...enemyIds].sort(), OPERATORS.slice(5).sort());
  assert.equal(enemyIds.some(id => squadIds.includes(id)), false);
});

test('chooseRandomBoss avoids an immediate repeat when alternatives exist', () => {
  assert.equal(
    chooseRandomBoss(['overseer_prime', 'eon_anchor', 'loom_hydra'], () => 0, 'overseer_prime'),
    'eon_anchor',
  );
});

test('circle occupancy checks every overlapped collision cell', () => {
  const cells = cellsForCircle({ x: 100, y: 100, radius: 25, tile: 40, mapW: 6, mapH: 6 });
  assert.deepEqual(cells, [
    { x: 2, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 },
    { x: 3, y: 2 }, { x: 2, y: 3 },
  ]);

  const grid = Array.from({ length: 6 }, () => Array(6).fill(0));
  grid[3][2] = 1;
  assert.equal(canOccupyCircle({ x: 100, y: 100, radius: 25, tile: 40, grid }), false);
  grid[3][2] = 0;
  assert.equal(canOccupyCircle({ x: 100, y: 100, radius: 25, tile: 40, grid }), true);
});

test('boss spawn rules reject walls and living-player safety bubbles', () => {
  const grid = Array.from({ length: 10 }, () => Array(10).fill(0));
  grid[5][5] = 1;
  const sequence = [0.5, 0.5, 0.95, 0.95];
  let cursor = 0;
  const spawn = findBossSpawn({
    zone: { x: 1, y: 1, w: 8, h: 8 },
    tile: 40,
    radius: 30,
    grid,
    players: [{ x: 220, y: 220, alive: true }],
    minPlayerDistance: 100,
    rng: () => sequence[cursor++] ?? 0.95,
  });

  assert.ok(spawn);
  assert.ok(Math.hypot(spawn.x - 220, spawn.y - 220) >= 100);
  assert.equal(canOccupyCircle({ ...spawn, radius: 30, tile: 40, grid }), true);
});

test('only the completed standard match winner enters the apex challenge', () => {
  assert.equal(shouldStartApexChallenge({
    playlistId: 'standard',
    scoreATK: 6,
    scoreDEF: 4,
    firstTo: 6,
    apexComplete: false,
  }), 'ATK');
  assert.equal(shouldStartApexChallenge({
    playlistId: 'wave',
    scoreATK: 6,
    scoreDEF: 4,
    firstTo: 6,
    apexComplete: false,
  }), null);
  assert.equal(shouldStartApexChallenge({
    playlistId: 'standard',
    scoreATK: 6,
    scoreDEF: 4,
    firstTo: 6,
    apexComplete: true,
  }), null);
});
