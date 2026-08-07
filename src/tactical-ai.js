/**
 * Pure tactical planning primitives for the browser runtime and contract tests.
 */

const isFinitePoint = value => Number.isFinite(value?.x) && Number.isFinite(value?.y);
const aliveActors = values => (Array.isArray(values) ? values : [])
  .filter(value => value?.alive !== false && value?.id != null && isFinitePoint(value));
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const clamp = (value, low, high) => Math.max(low, Math.min(high, value));

const hashSeed = value => {
  let hash = 2166136261;
  for (const character of String(value)) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const seededRank = (seed, actorId, role) => hashSeed(`${seed}:${role}:${actorId}`) / 0x100000000;
const healthRatio = actor => {
  const maximum = Number.isFinite(actor?.maxHp) && actor.maxHp > 0
    ? actor.maxHp
    : Number.isFinite(actor?.maxHealth) && actor.maxHealth > 0 ? actor.maxHealth : 150;
  return Number.isFinite(actor?.hp)
  ? clamp(actor.hp / maximum, 0, 1)
  : 1;
};
const nearest = (values, point) => [...values].sort((a, b) => distance(a, point) - distance(b, point) || String(a.id).localeCompare(String(b.id)))[0] ?? null;
const validPoint = (value, fallback = { x: 0, y: 0 }) => isFinitePoint(value) ? { x: value.x, y: value.y } : { ...fallback };
const previousRole = (previousAssignments, actorId) => {
  if (Array.isArray(previousAssignments)) return previousAssignments.find(value => value?.actorId === actorId)?.role ?? null;
  return previousAssignments?.[actorId] ?? null;
};

export const TACTICAL_ROLES = Object.freeze({
  defender: Object.freeze(["defuser", "cover", "entry", "flank", "reserve"]),
  attacker: Object.freeze(["anchor", "crossfire", "pressure"]),
});

const sitePoint = (site, tileSize) => ({
  x: (Number(site?.x) + Number(site?.w || 0) / 2) * tileSize,
  y: (Number(site?.y) + Number(site?.h || 0) / 2) * tileSize,
});

const proximityPressure = (values, point, radius) => aliveActors(values)
  .sort((a, b) => String(a.id).localeCompare(String(b.id)))
  .reduce((total, actor) => {
    return total + healthRatio(actor) * Math.max(0, 1 - distance(actor, point) / radius);
  }, 0);

/** Choose the objective with the best friendly proximity and lowest enemy load. */
export function choosePlantPlan({ actors = [], enemies = [], sites = [], tileSize = 1, allowFake = true, carrierId = null, seed = "0" } = {}) {
  const scale = Number.isFinite(tileSize) && tileSize > 0 ? tileSize : 1;
  const radius = Math.max(320, scale * 14);
  const squad = aliveActors(actors);
  const unavailable = { type: "execute", status: "unavailable", siteId: null, decision: "hold", choices: [], commitActorIds: [], fakeActorIds: [] };
  if (!squad.length) return unavailable;
  const choices = sites
    .filter(site => site?.id != null && Number.isFinite(site.x) && Number.isFinite(site.y))
    .map(site => {
      const point = sitePoint(site, scale);
      const friendlyPressure = proximityPressure(actors, point, radius);
      const enemyPressure = proximityPressure(enemies, point, radius);
      return { siteId: site.id, point, friendlyPressure, enemyPressure, score: friendlyPressure - enemyPressure * 1.15 };
    })
    .sort((a, b) => b.score - a.score || String(a.siteId).localeCompare(String(b.siteId)));
  const choice = choices[0];
  if (!choice) return unavailable;
  const decoy = choices.slice(1).sort((a, b) => b.enemyPressure - a.enemyPressure || String(a.siteId).localeCompare(String(b.siteId)))[0];
  const carrier = squad.find(actor => actor.hasSpike || actor.isCarrier || actor.id === carrierId);
  const effectiveStrength = squad.reduce((total, actor) => total + healthRatio(actor), 0);
  const canFake = allowFake && squad.length >= 3 && effectiveStrength >= Math.max(2.25, squad.length * 0.6)
    && decoy && decoy.enemyPressure - choice.enemyPressure >= 0.75;
  const faker = canFake
    ? squad.filter(actor => actor !== carrier).sort((a, b) => distance(a, decoy.point) - distance(b, decoy.point)
      || seededRank(seed, a.id, "fake") - seededRank(seed, b.id, "fake")
      || String(a.id).localeCompare(String(b.id)))[0]
    : null;
  const fakeActorIds = faker ? [faker.id] : [];
  const commitActorIds = squad
    .filter(actor => actor !== faker)
    .sort((a, b) => Number(b === carrier) - Number(a === carrier)
      || seededRank(seed, a.id, "commit") - seededRank(seed, b.id, "commit")
      || String(a.id).localeCompare(String(b.id)))
    .map(actor => actor.id);
  return {
    type: "execute",
    status: "ready",
    siteId: choice.siteId,
    target: choice.point,
    decision: faker ? "fake" : "commit",
    fakeSiteId: faker ? decoy.siteId : null,
    commitActorIds,
    fakeActorIds,
    choices,
  };
}

const roleTarget = (role, bomb, enemies, actor) => {
  if (role === "defuser" || role === "anchor") return validPoint(bomb);
  const threat = nearest(enemies, bomb);
  const angle = threat ? Math.atan2(threat.y - bomb.y, threat.x - bomb.x) : 0;
  if (role === "entry") return { x: bomb.x + Math.cos(angle) * 80, y: bomb.y + Math.sin(angle) * 80 };
  if (role === "cover") return { x: bomb.x + Math.cos(angle + Math.PI / 2) * 110, y: bomb.y + Math.sin(angle + Math.PI / 2) * 110 };
  if (role === "flank") return { x: bomb.x - Math.cos(angle) * 180, y: bomb.y - Math.sin(angle) * 180 };
  if (role === "reserve") return { x: bomb.x - Math.cos(angle + Math.PI / 3) * 150, y: bomb.y - Math.sin(angle + Math.PI / 3) * 150 };
  if (role === "crossfire") {
    const actorDistance = distance(actor, bomb);
    if (actorDistance > 0) {
      const reach = Math.max(180, Math.min(260, actorDistance));
      return { x: bomb.x + (actor.x - bomb.x) / actorDistance * reach, y: bomb.y + (actor.y - bomb.y) / actorDistance * reach };
    }
    return { x: bomb.x + 180, y: bomb.y };
  }
  if (role === "pressure" && threat) return { x: threat.x, y: threat.y };
  return { x: actor.x, y: actor.y };
};

const defenderScore = (role, actor, bomb, enemies) => {
  const bombDistance = distance(actor, bomb);
  const healthPenalty = (1 - healthRatio(actor)) * 300;
  if (role === "defuser") return bombDistance + healthPenalty * 0.45;
  if (role === "entry") {
    const threat = nearest(enemies, actor);
    return healthPenalty + bombDistance * 0.25 + (threat ? distance(actor, threat) * 0.1 : 0);
  }
  if (role === "cover") return bombDistance * 0.65 + healthPenalty * 0.35;
  if (role === "reserve") return bombDistance * 0.45 + healthPenalty * 0.2;
  return -bombDistance + healthPenalty * 0.15;
};

/** Assign planted-spike retake responsibilities without mutating runtime actors. */
export function assignDefenderPostPlantRoles({ actors = [], enemies = [], bomb = null, seed = "0", previousAssignments = null } = {}) {
  const squad = aliveActors(actors);
  if (!squad.length || !isFinitePoint(bomb)) return [];
  const hostiles = aliveActors(enemies);
  const available = new Set(squad.map(actor => actor.id));
  const byId = new Map(squad.map(actor => [actor.id, actor]));
  const assigned = new Map();
  const fillOrder = TACTICAL_ROLES.defender.slice(0, squad.length);

  for (const role of fillOrder) {
    const prior = squad.find(actor => available.has(actor.id) && previousRole(previousAssignments, actor.id) === role);
    const actor = prior ?? squad
      .filter(value => available.has(value.id))
      .sort((a, b) => defenderScore(role, a, bomb, hostiles) - defenderScore(role, b, bomb, hostiles)
        || seededRank(seed, a.id, role) - seededRank(seed, b.id, role)
        || String(a.id).localeCompare(String(b.id)))[0];
    if (!actor) continue;
    available.delete(actor.id);
    assigned.set(role, actor.id);
  }

  return TACTICAL_ROLES.defender
    .filter(role => assigned.has(role))
    .map(role => {
      const actor = byId.get(assigned.get(role));
      return { actorId: actor.id, role, intent: role === "defuser" ? "defuse" : "support", target: roleTarget(role, bomb, hostiles, actor) };
    });
}

/** Assign attackers to protect the plant from multiple angles and contest space. */
export function assignAttackerPostPlantRoles({ actors = [], enemies = [], bomb = null, seed = "0", previousAssignments = null } = {}) {
  const squad = aliveActors(actors);
  if (!squad.length || !isFinitePoint(bomb)) return [];
  const hostiles = aliveActors(enemies);
  const available = new Set(squad.map(actor => actor.id));
  const assigned = [];

  const take = (role, score) => {
    const prior = squad.find(actor => available.has(actor.id) && previousRole(previousAssignments, actor.id) === role);
    const actor = prior ?? squad.filter(value => available.has(value.id)).sort((a, b) => score(a) - score(b)
      || seededRank(seed, a.id, role) - seededRank(seed, b.id, role)
      || String(a.id).localeCompare(String(b.id)))[0];
    if (!actor) return null;
    available.delete(actor.id);
    assigned.push({ actorId: actor.id, role, intent: role === "pressure" ? "disrupt" : "hold", target: roleTarget(role, bomb, hostiles, actor) });
    return actor;
  };

  const anchor = take("anchor", actor => distance(actor, bomb));
  if (available.size) take("crossfire", actor => -distance(actor, anchor ?? bomb));
  for (const actor of squad
    .filter(value => available.has(value.id))
    .sort((a, b) => seededRank(seed, a.id, "pressure") - seededRank(seed, b.id, "pressure") || String(a.id).localeCompare(String(b.id)))) {
    available.delete(actor.id);
    assigned.push({ actorId: actor.id, role: "pressure", intent: "disrupt", target: roleTarget("pressure", bomb, hostiles, actor) });
  }
  return assigned;
}

const retakeRallyPoint = (squad, bomb, enemies, rallyRadius) => {
  const centroid = squad.reduce((point, actor) => ({ x: point.x + actor.x / squad.length, y: point.y + actor.y / squad.length }), { x: 0, y: 0 });
  let dx = centroid.x - bomb.x;
  let dy = centroid.y - bomb.y;
  let length = Math.hypot(dx, dy);
  if (length < 1) {
    const threat = nearest(enemies, bomb);
    dx = threat ? bomb.x - threat.x : 1;
    dy = threat ? bomb.y - threat.y : 0;
    length = Math.hypot(dx, dy) || 1;
  }
  const offset = rallyRadius * 0.7;
  return { x: bomb.x + dx / length * offset, y: bomb.y + dy / length * offset };
};

/** Gate defender movement at a rally until a quorum forms or spike time forces action. */
export function planDefenderRetake({
  actors = [], enemies = [], bomb = null, seed = "0", previousAssignments = null,
  secondsRemaining = bomb?.timer, defuseDuration = 5.6, rallyRadius = 260,
} = {}) {
  const squad = aliveActors(actors);
  const unavailable = {
    type: "defender-retake", phase: "unavailable", assignments: [], readyCount: 0,
    requiredCount: 0, urgency: 0, timeCritical: false, rallyPoint: null,
  };
  if (!squad.length || !isFinitePoint(bomb)) return unavailable;
  const radius = Number.isFinite(rallyRadius) && rallyRadius > 0 ? rallyRadius : 260;
  const requiredCount = squad.length === 1 ? 1 : Math.max(2, Math.ceil(squad.length * 0.6));
  const readyIds = squad.filter(actor => {
    const approachDistance = Number.isFinite(actor.retakeDistance) ? actor.retakeDistance : distance(actor, bomb);
    return approachDistance <= radius && actor.retakeReachable !== false;
  }).map(actor => actor.id);
  const remaining = Number(secondsRemaining);
  const validRemaining = Number.isFinite(remaining);
  const urgency = validRemaining ? clamp((defuseDuration + 8 - remaining) / 8, 0, 1) : 0;
  const timeCritical = validRemaining && remaining <= defuseDuration + 2.5;
  const phase = squad.length === 1 ? "clutch" : (timeCritical || readyIds.length >= requiredCount ? "execute" : "rally");
  const hostiles = aliveActors(enemies);
  const rallyPoint = retakeRallyPoint(squad, bomb, hostiles, radius);
  let assignments = assignDefenderPostPlantRoles({ actors: squad, enemies: hostiles, bomb, seed, previousAssignments });
  if (phase === "rally") assignments = assignments.map((value, index) => {
    const angle = Math.atan2(rallyPoint.y - bomb.y, rallyPoint.x - bomb.x) + (index - (assignments.length - 1) / 2) * 0.34;
    const spread = 46 + (index % 2) * 24;
    return { ...value, intent: "rally", target: { x: rallyPoint.x + Math.cos(angle + Math.PI / 2) * spread, y: rallyPoint.y + Math.sin(angle + Math.PI / 2) * spread } };
  });
  return {
    type: "defender-retake",
    phase,
    assignments,
    readyCount: readyIds.length,
    readyActorIds: readyIds,
    requiredCount,
    urgency,
    timeCritical,
    rallyPoint,
  };
}

/**
 * Resolve rally intentions onto reserved navigation cells. Raw formation
 * offsets can legitimately land inside cover; resolving each target in
 * isolation then collapses multiple bots onto the same nearest cell. This
 * allocator runs after planning and before the movement consumer so every
 * accepted target is already a distinct, reachable cell center.
 */
export function resolveDistinctRallyTargets({
  plan = null, actors = [], tileSize = 1, isWalkable = () => true,
  isReachable = () => true, minSpacing = null, maxRadius = 7,
} = {}) {
  if (plan?.phase !== "rally" || !Array.isArray(plan.assignments) || !plan.assignments.length) return plan;
  const scale = Number.isFinite(tileSize) && tileSize > 0 ? tileSize : 1;
  const separation = Number.isFinite(minSpacing) && minSpacing >= 0 ? minSpacing : scale * 0.75;
  const radius = Number.isFinite(maxRadius) && maxRadius >= 0 ? Math.floor(maxRadius) : 7;
  const byId = new Map(aliveActors(actors).map(actor => [actor.id, actor]));
  const reserved = [];
  const unresolvedActorIds = [];
  const assignments = plan.assignments.map(assignment => {
    const actor = byId.get(assignment?.actorId);
    if (!actor || !isFinitePoint(assignment?.target)) {
      unresolvedActorIds.push(assignment?.actorId ?? null);
      return { ...assignment, navigationResolved: false };
    }
    const baseX = Math.floor(assignment.target.x / scale);
    const baseY = Math.floor(assignment.target.y / scale);
    const candidates = [];
    for (let y = baseY - radius; y <= baseY + radius; y++) {
      for (let x = baseX - radius; x <= baseX + radius; x++) {
        const point = { x: (x + 0.5) * scale, y: (y + 0.5) * scale };
        candidates.push({
          x,
          y,
          point,
          targetDistance: distance(point, assignment.target),
          actorDistance: distance(point, actor),
        });
      }
    }
    candidates.sort((a, b) => a.targetDistance - b.targetDistance
      || a.actorDistance - b.actorDistance || a.y - b.y || a.x - b.x);
    const chosen = candidates.find(candidate => {
      if (!isWalkable(candidate.x, candidate.y, candidate.point)) return false;
      if (reserved.some(point => distance(point, candidate.point) < separation)) return false;
      return isReachable(actor, candidate.point, { x: candidate.x, y: candidate.y });
    });
    if (!chosen) {
      unresolvedActorIds.push(actor.id);
      return {
        ...assignment,
        intent: "hold",
        target: { x: actor.x, y: actor.y },
        navigationResolved: false,
      };
    }
    reserved.push(chosen.point);
    return {
      ...assignment,
      target: chosen.point,
      navigationResolved: true,
      resolvedCell: { x: chosen.x, y: chosen.y },
    };
  });
  return {
    ...plan,
    assignments,
    rallyResolution: {
      resolvedCount: assignments.length - unresolvedActorIds.length,
      unresolvedActorIds,
      minSpacing: separation,
    },
  };
}

/** Return a local spacing/urgency recommendation a bot can consume every think tick. */
export function computeTradeSignal({ actor = null, allies = [], enemies = [], bomb = null, minimumDistance = 90, maximumDistance = 260 } = {}) {
  const recommendedDistance = {
    min: Number.isFinite(minimumDistance) && minimumDistance >= 0 ? minimumDistance : 90,
    max: Number.isFinite(maximumDistance) && maximumDistance > 0 ? maximumDistance : 260,
  };
  const objectiveUrgency = bomb?.state === "planted" && Number.isFinite(bomb.timer)
    ? (bomb.timer <= 8 ? 0.7 : bomb.timer <= 12 ? 0.35 : 0)
    : 0;
  if (!isFinitePoint(actor)) {
    return { spacing: "unavailable", distance: null, urgency: objectiveUrgency, followActorId: null, recommendedDistance, shouldClose: false };
  }
  const partners = aliveActors(allies).filter(ally => ally.id !== actor.id);
  const partner = nearest(partners, actor);
  if (!partner) {
    return { spacing: "solo", distance: null, urgency: objectiveUrgency, followActorId: null, recommendedDistance, shouldClose: false };
  }
  const gap = distance(actor, partner);
  const spacing = gap < recommendedDistance.min ? "crowded" : gap <= recommendedDistance.max ? "trade-ready" : "isolated";
  const enemyPressure = proximityPressure(enemies, partner, 280);
  const engagedUrgency = partner.engaged || partner.targetId != null || partner.target != null ? 0.35 : 0;
  const healthUrgency = (1 - healthRatio(partner)) * 0.25;
  const urgency = clamp(objectiveUrgency + engagedUrgency + Math.min(0.35, enemyPressure * 0.25) + healthUrgency, 0, 1);
  return {
    spacing,
    distance: gap,
    urgency,
    followActorId: partner.id,
    recommendedDistance,
    shouldClose: spacing === "isolated" || urgency >= 0.65,
  };
}

/** Route current objective state to a compact squad plan for botThink integration. */
export function createTacticalPlan({
  team, actors = [], enemies = [], bomb = null, sites = [], tileSize = 1, seed = "0",
  previousAssignments = null, secondsRemaining = bomb?.timer, defuseDuration = 5.6,
  rallyRadius = 260, allowFake = true,
} = {}) {
  const squad = aliveActors(actors).filter(actor => actor.team == null || actor.team === team);
  const hostiles = aliveActors(enemies).filter(actor => actor.team == null || actor.team !== team);
  if (!bomb?.state) return { type: "idle", phase: "hold", assignments: [], reason: "objective-unavailable" };
  if (bomb.state === "planted" && team === "DEF") {
    return planDefenderRetake({
      actors: squad, enemies: hostiles, bomb, seed, previousAssignments,
      secondsRemaining, defuseDuration, rallyRadius,
    });
  }
  if (bomb.state === "planted" && team === "ATK") {
    const assignments = assignAttackerPostPlantRoles({ actors: squad, enemies: hostiles, bomb, seed, previousAssignments });
    return {
      type: "attacker-postplant",
      phase: assignments.length ? "hold" : "unavailable",
      assignments,
      tradeSignals: Object.fromEntries(squad.map(actor => [actor.id, computeTradeSignal({ actor, allies: squad, enemies: hostiles, bomb })])),
    };
  }
  if ((bomb.state === "carried" || bomb.state === "dropped") && team === "ATK") {
    if (bomb.state === "dropped" && isFinitePoint(bomb)) {
      const recoverer = nearest(squad, bomb);
      return {
        type: "spike-recovery",
        phase: recoverer ? "recover" : "unavailable",
        assignments: recoverer ? [{ actorId: recoverer.id, role: "carrier", intent: "recover", target: validPoint(bomb) }] : [],
      };
    }
    return choosePlantPlan({
      actors: squad, enemies: hostiles, sites, tileSize, seed, allowFake,
      carrierId: bomb.carrierId ?? bomb.carrier?.id ?? null,
    });
  }
  return { type: "idle", phase: "hold", assignments: [], reason: "objective-state-unhandled" };
}
