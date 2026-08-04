import test from "node:test";
import assert from "node:assert/strict";

import { LATTICE_RANK_COUNT, XP_PER_LATTICE_RANK, applyOperationReport, createOperationBoard, latticeRank, latticeRankProgress, normalizeOperations } from "../src/operations.js";

test("Operations exposes a deterministic 200-rank long-form progression track", () => {
  assert.equal(LATTICE_RANK_COUNT, 200);
  assert.equal(latticeRank(0), 1);
  assert.equal(latticeRank(XP_PER_LATTICE_RANK), 2);
  assert.equal(latticeRank(Number.MAX_SAFE_INTEGER), 200);
  assert.deepEqual(createOperationBoard({ seed: "forge", cycle: 3, rank: 12 }), createOperationBoard({ seed: "forge", cycle: 3, rank: 12 }));
});

test("match reports advance contracts, award operation XP, and rotate a completed board", () => {
  const base = normalizeOperations({}, { seed: "test" });
  const report = { won: true, kills: 100, damage: 100000, objectives: 100, roundWins: 100, doctrines: 100, bossDamage: 100000, bossKills: 10 };
  const result = applyOperationReport(base, report, { seed: "test" });
  assert.ok(result.matchXp > 0);
  assert.ok(result.contractXp > 0);
  assert.equal(result.completed.length, 3);
  assert.equal(result.state.cycle, 1);
  assert.equal(result.state.contracts.every(contract => !contract.complete), true);
  assert.ok(latticeRankProgress(result.state.xp).ratio >= 0);
});
