import test from "node:test";
import assert from "node:assert/strict";

import * as tactical from "../src/tactical-ai.js";
import { ARENA_DEFINITIONS, ARENA_ORDER, ARENA_SIZE, createArenaGrid } from "../src/arena-core.js";

const sites = [
  { id: "A", x: 0, y: 0, w: 4, h: 4 },
  { id: "B", x: 20, y: 0, w: 4, h: 4 },
];

test("execute planning chooses the site with less nearby enemy pressure", () => {
  const plan = tactical.choosePlantPlan?.({
    actors: [
      { id: "carrier", alive: true, x: 100, y: 20, hasSpike: true },
      { id: "two", alive: true, x: 105, y: 30 },
      { id: "three", alive: true, x: 95, y: 10 },
    ],
    enemies: [
      { id: "stack-1", alive: true, x: 15, y: 20 },
      { id: "stack-2", alive: true, x: 25, y: 25 },
      { id: "stack-3", alive: true, x: 35, y: 15 },
    ],
    sites,
    tileSize: 10,
    seed: "round-7",
  });

  assert.equal(plan?.siteId, "B");
});

test("execute planning uses friendly proximity when enemy pressure is even", () => {
  const plan = tactical.choosePlantPlan({
    actors: [
      { id: "carrier", alive: true, x: 25, y: 20, hasSpike: true },
      { id: "two", alive: true, x: 35, y: 25 },
      { id: "three", alive: true, x: 45, y: 15 },
    ],
    enemies: [{ id: "mid", alive: true, x: 120, y: 20 }],
    sites,
    tileSize: 10,
    seed: "round-8",
  });

  assert.equal(plan.siteId, "A");
  assert.ok(plan.choices.find(choice => choice.siteId === "A").friendlyPressure
    > plan.choices.find(choice => choice.siteId === "B").friendlyPressure);
});

test("a healthy squad fakes the stacked site before committing to the open site", () => {
  const plan = tactical.choosePlantPlan({
    actors: [
      { id: "carrier", alive: true, x: 105, y: 20, hasSpike: true },
      { id: "near-a", alive: true, x: 80, y: 20 },
      { id: "near-b", alive: true, x: 140, y: 20 },
      { id: "four", alive: true, x: 100, y: 35 },
    ],
    enemies: [
      { id: "stack-1", alive: true, x: 15, y: 20 },
      { id: "stack-2", alive: true, x: 25, y: 25 },
      { id: "stack-3", alive: true, x: 35, y: 15 },
    ],
    sites,
    tileSize: 10,
    seed: "fake-a",
  });

  assert.equal(plan.siteId, "B");
  assert.equal(plan.decision, "fake");
  assert.equal(plan.fakeSiteId, "A");
  assert.deepEqual(plan.fakeActorIds, ["near-a"]);
  assert.equal(plan.commitActorIds.includes("carrier"), true);
  assert.equal(plan.commitActorIds.includes("near-a"), false);
});

test("execute planning does not split a two-player attack into a fake", () => {
  const plan = tactical.choosePlantPlan({
    actors: [
      { id: "carrier", alive: true, x: 100, y: 20, hasSpike: true },
      { id: "two", alive: true, x: 90, y: 20 },
    ],
    enemies: [
      { id: "stack-1", alive: true, x: 15, y: 20 },
      { id: "stack-2", alive: true, x: 25, y: 25 },
    ],
    sites,
    tileSize: 10,
    seed: "no-split",
  });

  assert.equal(plan.decision, "commit");
  assert.deepEqual(plan.fakeActorIds, []);
  assert.deepEqual(new Set(plan.commitActorIds), new Set(["carrier", "two"]));
});

test("execute planning keeps a badly wounded squad together instead of faking", () => {
  const plan = tactical.choosePlantPlan({
    actors: [
      { id: "carrier", alive: true, x: 100, y: 20, hp: 20, maxHp: 100, hasSpike: true },
      { id: "two", alive: true, x: 90, y: 20, hp: 20, maxHp: 100 },
      { id: "three", alive: true, x: 110, y: 20, hp: 20, maxHp: 100 },
      { id: "four", alive: true, x: 100, y: 30, hp: 20, maxHp: 100 },
    ],
    enemies: [
      { id: "stack-1", alive: true, x: 15, y: 20 },
      { id: "stack-2", alive: true, x: 25, y: 25 },
      { id: "stack-3", alive: true, x: 35, y: 15 },
    ],
    sites,
    tileSize: 10,
    seed: "wounded",
  });

  assert.equal(plan.decision, "commit");
  assert.deepEqual(plan.fakeActorIds, []);
});

test("live-shaped actors without a maxHp field still make health-aware execute decisions", () => {
  const plan = tactical.choosePlantPlan({
    actors: [
      { id: "carrier", alive: true, x: 100, y: 20, hp: 20, hasSpike: true },
      { id: "two", alive: true, x: 90, y: 20, hp: 20 },
      { id: "three", alive: true, x: 110, y: 20, hp: 20 },
      { id: "four", alive: true, x: 100, y: 30, hp: 20 },
    ],
    enemies: [
      { id: "stack-1", alive: true, x: 15, y: 20 },
      { id: "stack-2", alive: true, x: 25, y: 25 },
      { id: "stack-3", alive: true, x: 35, y: 15 },
    ],
    sites,
    tileSize: 10,
    seed: "live-wounded",
  });

  assert.equal(plan.decision, "commit");
});

test("execute groups are stable across actor order and never send carrierId on the fake", () => {
  const actors = [
    { id: "carrier", alive: true, x: 70, y: 20 },
    { id: "faker", alive: true, x: 90, y: 20 },
    { id: "three", alive: true, x: 120, y: 20 },
    { id: "four", alive: true, x: 130, y: 20 },
  ];
  const options = {
    carrierId: "carrier",
    enemies: [
      { id: "stack-1", alive: true, x: 15, y: 20 },
      { id: "stack-2", alive: true, x: 25, y: 25 },
      { id: "stack-3", alive: true, x: 35, y: 15 },
    ],
    sites,
    tileSize: 10,
    seed: "stable-groups",
  };

  const forward = tactical.choosePlantPlan({ ...options, actors });
  const reversed = tactical.choosePlantPlan({ ...options, actors: [...actors].reverse() });
  assert.deepEqual(forward, reversed);
  assert.equal(forward.decision, "fake");
  assert.equal(forward.fakeActorIds.includes("carrier"), false);
  assert.equal(forward.commitActorIds.includes("carrier"), true);
});

test("execute planning holds safely when no living attackers or valid sites exist", () => {
  assert.deepEqual(
    tactical.choosePlantPlan({ actors: [{ id: "dead", alive: false, x: 0, y: 0 }], sites }),
    { type: "execute", status: "unavailable", siteId: null, decision: "hold", choices: [], commitActorIds: [], fakeActorIds: [] },
  );
  assert.equal(tactical.choosePlantPlan({ actors: [{ id: "one", alive: true, x: 0, y: 0 }], sites: [] }).status, "unavailable");
});

test("four living defenders receive distinct defuser, cover, entry, and flank jobs", () => {
  const assignments = tactical.assignDefenderPostPlantRoles?.({
    actors: [
      { id: "near", alive: true, x: 110, y: 100, hp: 85, maxHp: 100 },
      { id: "healthy", alive: true, x: 180, y: 100, hp: 100, maxHp: 100 },
      { id: "third", alive: true, x: 230, y: 120, hp: 70, maxHp: 100 },
      { id: "wide", alive: true, x: 310, y: 160, hp: 80, maxHp: 100 },
    ],
    enemies: [{ id: "holder", alive: true, x: 80, y: 100 }],
    bomb: { x: 100, y: 100 },
    seed: "retake-1",
  }) ?? [];

  assert.deepEqual(new Set(assignments.map(value => value.role)), new Set(["defuser", "cover", "entry", "flank"]));
  assert.equal(assignments.find(value => value.role === "defuser")?.actorId, "near");
  assert.equal(new Set(assignments.map(value => value.actorId)).size, 4);
});

test("all five living defenders receive an explicit post-plant role", () => {
  const actors = Array.from({ length: 5 }, (_, index) => ({ id: `d${index + 1}`, alive: true, x: 30 + index * 40, y: 0, hp: 150 }));
  const assignments = tactical.assignDefenderPostPlantRoles({ actors, bomb: { x: 0, y: 0 }, seed: "full-retake" });
  assert.equal(assignments.length, 5);
  assert.equal(new Set(assignments.map(value => value.actorId)).size, 5);
  assert.equal(assignments.some(value => value.role === "reserve"), true);
});

test("seeded defender assignments are independent of actor input order", () => {
  const actors = [
    { id: "alpha", alive: true, x: 100, y: 0 },
    { id: "bravo", alive: true, x: 0, y: 100 },
    { id: "charlie", alive: true, x: -100, y: 0 },
    { id: "delta", alive: true, x: 0, y: -100 },
  ];
  const options = { bomb: { x: 0, y: 0 }, seed: "stable-round" };

  assert.deepEqual(
    tactical.assignDefenderPostPlantRoles({ ...options, actors }),
    tactical.assignDefenderPostPlantRoles({ ...options, actors: [...actors].reverse() }),
  );
});

test("previous living role owners stay assigned across replans and seed changes", () => {
  const actors = [
    { id: "one", alive: true, x: 20, y: 0 },
    { id: "two", alive: true, x: 40, y: 0 },
    { id: "three", alive: true, x: 60, y: 0 },
    { id: "four", alive: true, x: 80, y: 0 },
  ];
  const previousAssignments = { one: "flank", two: "defuser", three: "cover", four: "entry" };
  const result = tactical.assignDefenderPostPlantRoles({ actors, bomb: { x: 0, y: 0 }, seed: "changed", previousAssignments });

  assert.deepEqual(Object.fromEntries(result.map(value => [value.actorId, value.role])), previousAssignments);
});

test("a dead prior defuser is ignored and the critical role moves to a survivor", () => {
  const result = tactical.assignDefenderPostPlantRoles({
    actors: [
      { id: "dead", alive: false, x: 1, y: 0 },
      { id: "near", alive: true, x: 25, y: 0 },
      { id: "far", alive: true, x: 90, y: 0 },
    ],
    bomb: { x: 0, y: 0 },
    previousAssignments: { dead: "defuser", near: "cover", far: "entry" },
    seed: "replacement",
  });

  assert.equal(result.find(value => value.role === "defuser")?.actorId, "near");
  assert.equal(result.some(value => value.actorId === "dead"), false);
  assert.deepEqual(tactical.assignDefenderPostPlantRoles({ actors: null, bomb: null }), []);
});

test("a two-defender retake pairs the defuser with cover", () => {
  const result = tactical.assignDefenderPostPlantRoles({
    actors: [
      { id: "near", alive: true, x: 20, y: 0 },
      { id: "second", alive: true, x: 80, y: 0 },
    ],
    bomb: { x: 0, y: 0 },
    seed: "two-defenders",
  });

  assert.deepEqual(result.map(value => value.role), ["defuser", "cover"]);
});

test("attacker post-plant assigns an anchor, a separated crossfire, and pressure", () => {
  const result = tactical.assignAttackerPostPlantRoles?.({
    actors: [
      { id: "close", alive: true, x: 105, y: 100 },
      { id: "wide", alive: true, x: 330, y: 100 },
      { id: "forward", alive: true, x: 180, y: 160 },
      { id: "four", alive: true, x: 210, y: 70 },
    ],
    enemies: [{ id: "retaker", alive: true, x: 40, y: 100 }],
    bomb: { x: 100, y: 100 },
    seed: "postplant-1",
  }) ?? [];
  const anchor = result.find(value => value.role === "anchor");
  const crossfire = result.find(value => value.role === "crossfire");

  assert.equal(anchor?.actorId, "close");
  assert.equal(crossfire?.actorId, "wide");
  assert.equal(result.filter(value => value.role === "pressure").length, 2);
  assert.ok(Math.hypot(anchor.target.x - crossfire.target.x, anchor.target.y - crossfire.target.y) >= 160);
});

test("a lone attacker anchors the spike without inventing missing teammates", () => {
  assert.deepEqual(
    tactical.assignAttackerPostPlantRoles({ actors: [{ id: "solo", alive: true, x: 4, y: 5 }], bomb: { x: 0, y: 0 } }),
    [{ actorId: "solo", role: "anchor", intent: "hold", target: { x: 0, y: 0 } }],
  );
  assert.deepEqual(tactical.assignAttackerPostPlantRoles({ actors: [], bomb: { x: 0, y: 0 } }), []);
});

test("assignment targets expose coordinates without leaking bomb runtime metadata", () => {
  const [assignment] = tactical.assignAttackerPostPlantRoles({
    actors: [{ id: "solo", alive: true, x: 4, y: 5 }],
    bomb: { state: "planted", x: 0, y: 0, timer: 22, carrier: { id: "old" } },
  });

  assert.deepEqual(assignment.target, { x: 0, y: 0 });
});

test("defenders rally when only one player is close enough to retake", () => {
  const plan = tactical.planDefenderRetake?.({
    actors: [
      { id: "near", alive: true, x: 120, y: 100 },
      { id: "far-1", alive: true, x: 650, y: 100 },
      { id: "far-2", alive: true, x: 700, y: 160 },
      { id: "far-3", alive: true, x: 760, y: 80 },
    ],
    enemies: [{ id: "holder", alive: true, x: 80, y: 100 }],
    bomb: { x: 100, y: 100 },
    secondsRemaining: 24,
    rallyRadius: 220,
    seed: "rally",
  });

  assert.equal(plan?.phase, "rally");
  assert.equal(plan?.readyCount, 1);
  assert.equal(plan?.requiredCount, 3);
  assert.equal(plan?.assignments.every(value => value.intent === "rally"), true);
  assert.equal(new Set(plan?.assignments.map(value => `${Math.round(value.target.x)}:${Math.round(value.target.y)}`)).size, 4);
});

const nearestOpenForTest = (grid, inputX, inputY) => {
  const width = grid[0].length;
  const height = grid.length;
  const x = Math.max(1, Math.min(width - 2, Math.floor(inputX)));
  const y = Math.max(1, Math.min(height - 2, Math.floor(inputY)));
  if (grid[y][x] === 0) return { x, y };
  for (let radius = 1; radius < 6; radius++) {
    for (let cy = y - radius; cy <= y + radius; cy++) {
      for (let cx = x - radius; cx <= x + radius; cx++) {
        if (cx > 0 && cy > 0 && cx < width - 1 && cy < height - 1 && grid[cy]?.[cx] === 0) return { x: cx, y: cy };
      }
    }
  }
  return null;
};

const pathExistsForTest = (grid, actor, target, tileSize) => {
  const start = nearestOpenForTest(grid, actor.x / tileSize, actor.y / tileSize);
  const goal = nearestOpenForTest(grid, target.x / tileSize, target.y / tileSize);
  if (!start || !goal) return false;
  const width = grid[0].length;
  const queue = [start];
  const seen = new Set([`${start.x}:${start.y}`]);
  for (let index = 0; index < queue.length; index++) {
    const cell = queue[index];
    if (cell.x === goal.x && cell.y === goal.y) return true;
    for (const [x, y] of [[cell.x + 1, cell.y], [cell.x - 1, cell.y], [cell.x, cell.y + 1], [cell.x, cell.y - 1]]) {
      const key = `${x}:${y}`;
      if (x <= 0 || y <= 0 || x >= width - 1 || y >= grid.length - 1 || grid[y][x] !== 0 || seen.has(key)) continue;
      seen.add(key);
      queue.push({ x, y });
    }
  }
  return false;
};

test("all arena retakes reserve five distinct reachable cells after navigation snapping", () => {
  const tileSize = ARENA_SIZE.tile;
  for (const arenaId of ARENA_ORDER) {
    const definition = ARENA_DEFINITIONS[arenaId];
    const grid = createArenaGrid(definition);
    const spawn = definition.combat.spawns.DEF;
    const origin = nearestOpenForTest(grid, spawn.x + spawn.w / 2, spawn.y + spawn.h / 2);
    assert.ok(origin, `${arenaId} has a defender start cell`);
    const actors = Array.from({ length: 5 }, (_, index) => ({
      id: `def-${index + 1}`,
      alive: true,
      x: (origin.x + 0.5) * tileSize,
      y: (origin.y + 0.5) * tileSize,
      retakeDistance: 999,
      retakeReachable: true,
      hp: 150,
      maxHp: 150,
    }));
    for (const site of definition.combat.sites) {
      const bomb = { x: (site.x + site.w / 2) * tileSize, y: (site.y + site.h / 2) * tileSize };
      const raw = tactical.planDefenderRetake({ actors, bomb, secondsRemaining: 25, rallyRadius: 280, seed: `${arenaId}:${site.id}` });
      assert.equal(raw.phase, "rally", `${arenaId} ${site.id} enters rally`);
      const resolved = tactical.resolveDistinctRallyTargets({
        plan: raw,
        actors,
        tileSize,
        minSpacing: 30,
        maxRadius: 8,
        isWalkable: (x, y) => x > 0 && y > 0 && x < grid[0].length - 1 && y < grid.length - 1 && grid[y][x] === 0,
        isReachable: (actor, target) => pathExistsForTest(grid, actor, target, tileSize),
      });
      const cells = resolved.assignments.map(value => `${value.resolvedCell?.x}:${value.resolvedCell?.y}`);
      assert.equal(resolved.rallyResolution.resolvedCount, 5, `${arenaId} ${site.id} resolves every role`);
      assert.equal(new Set(cells).size, 5, `${arenaId} ${site.id} reserves five snapped cells`);
      for (const assignment of resolved.assignments) {
        assert.equal(assignment.navigationResolved, true, `${arenaId} ${site.id} target is resolved`);
        assert.equal(pathExistsForTest(grid, actors[0], assignment.target, tileSize), true, `${arenaId} ${site.id} target is reachable`);
      }
      for (let left = 0; left < resolved.assignments.length; left++) {
        for (let right = left + 1; right < resolved.assignments.length; right++) {
          assert.ok(Math.hypot(
            resolved.assignments[left].target.x - resolved.assignments[right].target.x,
            resolved.assignments[left].target.y - resolved.assignments[right].target.y,
          ) >= 30, `${arenaId} ${site.id} maintains two body radii`);
        }
      }
    }
  }
});

test("rally resolution reports an unreachable assignment instead of silently stacking it", () => {
  const plan = { phase: "rally", assignments: [{ actorId: "one", target: { x: 20, y: 20 } }] };
  const resolved = tactical.resolveDistinctRallyTargets({
    plan,
    actors: [{ id: "one", x: 0, y: 0 }],
    tileSize: 40,
    isWalkable: () => false,
  });
  assert.equal(resolved.assignments[0].navigationResolved, false);
  assert.deepEqual(resolved.assignments[0].target, { x: 0, y: 0 });
  assert.equal(resolved.assignments[0].intent, "hold");
  assert.deepEqual(resolved.rallyResolution.unresolvedActorIds, ["one"]);
});

test("unreachable or route-distant defenders do not count toward the rally quorum", () => {
  const plan = tactical.planDefenderRetake({
    actors: [
      { id: "near", alive: true, x: 120, y: 100, retakeDistance: 20, retakeReachable: true },
      { id: "behind-wall", alive: true, x: 130, y: 100, retakeDistance: 20, retakeReachable: false },
      { id: "long-route", alive: true, x: 140, y: 100, retakeDistance: 500, retakeReachable: true },
    ],
    bomb: { x: 100, y: 100 },
    secondsRemaining: 24,
    rallyRadius: 220,
  });
  assert.deepEqual(plan.readyActorIds, ["near"]);
  assert.equal(plan.phase, "rally");
});

test("defenders execute together once the retake quorum reaches the site", () => {
  const plan = tactical.planDefenderRetake({
    actors: [
      { id: "one", alive: true, x: 120, y: 100 },
      { id: "two", alive: true, x: 160, y: 100 },
      { id: "three", alive: true, x: 210, y: 120 },
      { id: "four", alive: true, x: 700, y: 100 },
    ],
    bomb: { x: 100, y: 100 },
    secondsRemaining: 24,
    rallyRadius: 220,
    seed: "quorum",
  });

  assert.equal(plan.phase, "execute");
  assert.equal(plan.readyCount, 3);
  assert.equal(plan.assignments.find(value => value.role === "defuser").intent, "defuse");
});

test("critical spike time releases a retake even before the full rally quorum", () => {
  const plan = tactical.planDefenderRetake({
    actors: [
      { id: "one", alive: true, x: 120, y: 100 },
      { id: "two", alive: true, x: 700, y: 100 },
      { id: "three", alive: true, x: 750, y: 100 },
    ],
    bomb: { x: 100, y: 100 },
    secondsRemaining: 7.5,
    defuseDuration: 5.6,
    rallyRadius: 180,
    seed: "urgent",
  });

  assert.equal(plan.phase, "execute");
  assert.equal(plan.timeCritical, true);
  assert.ok(plan.urgency >= 0.75);
});

test("one surviving defender gets an explicit clutch plan instead of a phantom rally", () => {
  const plan = tactical.planDefenderRetake({
    actors: [{ id: "solo", alive: true, x: 300, y: 100 }],
    bomb: { x: 100, y: 100 },
    secondsRemaining: 18,
  });

  assert.equal(plan.phase, "clutch");
  assert.equal(plan.requiredCount, 1);
  assert.deepEqual(plan.assignments.map(value => value.actorId), ["solo"]);
  assert.equal(plan.assignments[0].role, "defuser");
});

test("trade signal tells an isolated bot to close on an engaged teammate", () => {
  const signal = tactical.computeTradeSignal?.({
    actor: { id: "trail", alive: true, x: 0, y: 0 },
    allies: [
      { id: "trail", alive: true, x: 0, y: 0 },
      { id: "entry", alive: true, x: 400, y: 0, targetId: "enemy", hp: 60, maxHp: 100 },
    ],
    enemies: [{ id: "enemy", alive: true, x: 430, y: 0 }],
  });

  assert.equal(signal?.spacing, "isolated");
  assert.equal(signal?.followActorId, "entry");
  assert.equal(signal?.shouldClose, true);
  assert.ok(signal?.urgency >= 0.6);
});

test("live target references raise trade urgency without a test-only targetId", () => {
  const signal = tactical.computeTradeSignal({
    actor: { id: "trail", alive: true, x: 0, y: 0 },
    allies: [{ id: "entry", alive: true, x: 180, y: 0, target: { id: "enemy" }, hp: 80 }],
    enemies: [],
  });
  assert.equal(signal.spacing, "trade-ready");
  assert.ok(signal.urgency >= 0.35);
});

test("trade-ready spacing stays stable when no fight or objective is urgent", () => {
  const signal = tactical.computeTradeSignal({
    actor: { id: "trail", alive: true, x: 0, y: 0 },
    allies: [{ id: "entry", alive: true, x: 180, y: 0, hp: 100, maxHp: 100 }],
    enemies: [{ id: "enemy", alive: true, x: 800, y: 0 }],
  });

  assert.equal(signal.spacing, "trade-ready");
  assert.equal(signal.shouldClose, false);
  assert.ok(signal.urgency < 0.4);
});

test("spike urgency raises the trade signal even when spacing is already good", () => {
  const signal = tactical.computeTradeSignal({
    actor: { id: "trail", alive: true, x: 0, y: 0 },
    allies: [{ id: "entry", alive: true, x: 180, y: 0 }],
    enemies: [],
    bomb: { state: "planted", timer: 6 },
  });

  assert.equal(signal.spacing, "trade-ready");
  assert.equal(signal.shouldClose, true);
  assert.ok(signal.urgency >= 0.65);
});

test("trade signals degrade safely when the actor or teammate is missing", () => {
  assert.equal(tactical.computeTradeSignal({ actor: null, allies: [] }).spacing, "unavailable");
  assert.deepEqual(tactical.computeTradeSignal({ actor: { id: "solo", x: 0, y: 0 }, allies: [] }), {
    spacing: "solo",
    distance: null,
    urgency: 0,
    followActorId: null,
    recommendedDistance: { min: 90, max: 260 },
    shouldClose: false,
  });
});

test("round planner routes planted states and falls back to idle without an objective", () => {
  const planted = tactical.createTacticalPlan?.({
    team: "ATK",
    actors: [{ id: "anchor", team: "ATK", alive: true, x: 10, y: 0 }],
    enemies: [{ id: "def", team: "DEF", alive: true, x: 200, y: 0 }],
    bomb: { state: "planted", x: 0, y: 0, timer: 20 },
    seed: "main-plan",
  });
  const idle = tactical.createTacticalPlan?.({ team: "DEF", actors: [], enemies: [], bomb: null });

  assert.equal(planted?.type, "attacker-postplant");
  assert.equal(planted?.assignments[0].role, "anchor");
  assert.deepEqual(idle, { type: "idle", phase: "hold", assignments: [], reason: "objective-unavailable" });
});

test("round planner sends the nearest survivor to recover a dropped spike", () => {
  const plan = tactical.createTacticalPlan({
    team: "ATK",
    actors: [
      { id: "far", team: "ATK", alive: true, x: 500, y: 0 },
      { id: "near", team: "ATK", alive: true, x: 120, y: 0 },
      { id: "dead", team: "ATK", alive: false, x: 101, y: 0 },
    ],
    bomb: { state: "dropped", x: 100, y: 0 },
  });

  assert.deepEqual(plan.assignments, [{ actorId: "near", role: "carrier", intent: "recover", target: { x: 100, y: 0 } }]);
  assert.equal(tactical.createTacticalPlan({ team: "ATK", actors: [], bomb: { state: "dropped", x: 100, y: 0 } }).phase, "unavailable");
});
