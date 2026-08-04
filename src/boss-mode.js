/**
 * Encounter planning shared by the live runtime and Node contract tests.
 * This module deliberately has no DOM or Three.js dependency.
 */

export const PLAYLISTS = Object.freeze({
  standard: Object.freeze({
    id: 'standard',
    name: 'TACTICAL',
    description: 'Classic first-to-six spike match, followed by an Apex Challenge for the winning squad.',
    squadSize: 5,
    apexAfterMatch: true,
    totalWaves: 0,
  }),
  boss: Object.freeze({
    id: 'boss',
    name: 'BOSS MODE',
    description: 'Deploy a five-operator squad against one random Apex boss and its reinforcements.',
    squadSize: 5,
    apexAfterMatch: false,
    totalWaves: 1,
  }),
  wave: Object.freeze({
    id: 'wave',
    name: 'WAVE MODE',
    description: 'Choose five operators, clear every unselected division, then defeat a random Apex boss.',
    squadSize: 5,
    apexAfterMatch: false,
    totalWaves: 5,
  }),
});

export const BOSS_PHASE_THRESHOLDS = Object.freeze([0.75, 0.5, 0.25]);

export function bossPhaseForHealth(hp, maxHp) {
  const ratio = Math.max(0, Math.min(1, Number(hp) / Math.max(1, Number(maxHp))));
  return BOSS_PHASE_THRESHOLDS.reduce((phase, threshold) => phase + Number(ratio <= threshold), 0);
}

export function createBossBalance({ hpMult = 4, difficulty = "tactical", squadSize = 5, source = "boss" } = {}) {
  const difficultyScale = difficulty === "elite" ? 1.2 : difficulty === "rookie" ? 0.86 : 1;
  const squadScale = 1 + Math.max(0, Math.min(4, squadSize - 1)) * 0.08;
  const sourceScale = source === "apex" ? 1.12 : source === "wave" ? 1.06 : 1;
  const maxHp = Math.round(1150 * hpMult * difficultyScale * squadScale * sourceScale);
  return Object.freeze({
    maxHp,
    armor: Math.round(maxHp * 0.085),
    damageScale: +(difficultyScale * (0.96 + Math.max(0, squadSize - 1) * 0.025)).toFixed(2),
    phaseThresholds: BOSS_PHASE_THRESHOLDS,
    reinforcementCounts: Object.freeze([0, 2, 2, 3]),
  });
}

export function normalizeSquad(selectedIds, operatorIds, primaryId, size = 5) {
  const allowed = new Set(operatorIds);
  const result = [];
  const push = id => {
    if (allowed.has(id) && !result.includes(id) && result.length < size) result.push(id);
  };
  push(primaryId);
  for (const id of selectedIds || []) push(id);
  return result;
}

function shuffled(values, rng) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.max(0, Math.min(i, Math.floor(rng() * (i + 1))));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function chooseRandomBoss(bossIds, rng = Math.random, previousId = null) {
  if (!bossIds?.length) return null;
  const candidates = bossIds.length > 1 && previousId
    ? bossIds.filter(id => id !== previousId)
    : [...bossIds];
  const index = Math.max(0, Math.min(candidates.length - 1, Math.floor(rng() * candidates.length)));
  return candidates[index] || null;
}

export function buildWavePlan({
  operatorIds,
  squadIds,
  bossId,
  rng = Math.random,
  characterWaveCount = PLAYLISTS.wave.totalWaves - 1,
}) {
  const squad = new Set(squadIds);
  const enemyIds = shuffled(operatorIds.filter(id => !squad.has(id)), rng);
  const waves = [];
  const base = Math.floor(enemyIds.length / characterWaveCount);
  let remainder = enemyIds.length % characterWaveCount;
  let cursor = 0;

  for (let index = 0; index < characterWaveCount; index++) {
    const size = base + (remainder-- > 0 ? 1 : 0);
    waves.push({
      index: index + 1,
      kind: 'operators',
      operatorIds: enemyIds.slice(cursor, cursor + size),
      healthScale: +(1 + index * 0.12).toFixed(2),
      damageScale: +(1 + index * 0.08).toFixed(2),
    });
    cursor += size;
  }

  waves.push({
    index: characterWaveCount + 1,
    kind: 'boss',
    bossId,
    operatorIds: [],
    healthScale: 1,
    damageScale: 1,
  });
  return waves;
}

export function cellsForCircle({ x, y, radius, tile, mapW, mapH }) {
  const minX = Math.max(0, Math.floor((x - radius) / tile));
  const maxX = Math.min(mapW - 1, Math.floor((x + radius) / tile));
  const minY = Math.max(0, Math.floor((y - radius) / tile));
  const maxY = Math.min(mapH - 1, Math.floor((y + radius) / tile));
  const cells = [];

  for (let cy = minY; cy <= maxY; cy++) {
    for (let cx = minX; cx <= maxX; cx++) {
      const nearestX = Math.max(cx * tile, Math.min(x, (cx + 1) * tile));
      const nearestY = Math.max(cy * tile, Math.min(y, (cy + 1) * tile));
      const dx = x - nearestX;
      const dy = y - nearestY;
      if (dx * dx + dy * dy <= radius * radius) cells.push({ x: cx, y: cy });
    }
  }
  return cells;
}

export function canOccupyCircle({ x, y, radius, tile, grid, occupied = [] }) {
  if (!grid?.length || !grid[0]?.length) return false;
  const cells = cellsForCircle({
    x,
    y,
    radius,
    tile,
    mapW: grid[0].length,
    mapH: grid.length,
  });
  if (!cells.length || cells.some(cell => grid[cell.y]?.[cell.x] === 1)) return false;
  return !occupied.some(other => {
    if (!other || other.alive === false) return false;
    const otherRadius = other.radius || 0;
    return Math.hypot(x - other.x, y - other.y) < radius + otherRadius;
  });
}

export function findBossSpawn({
  zone,
  tile,
  radius,
  grid,
  players = [],
  minPlayerDistance = tile * 4,
  rng = Math.random,
  attempts = 80,
}) {
  const minX = zone.x * tile + radius;
  const maxX = (zone.x + zone.w) * tile - radius;
  const minY = zone.y * tile + radius;
  const maxY = (zone.y + zone.h) * tile - radius;
  if (maxX < minX || maxY < minY) return null;

  for (let attempt = 0; attempt < attempts; attempt++) {
    const candidate = {
      x: minX + (maxX - minX) * rng(),
      y: minY + (maxY - minY) * rng(),
    };
    if (!canOccupyCircle({ ...candidate, radius, tile, grid })) continue;
    const unsafe = players.some(player => player.alive !== false
      && Math.hypot(candidate.x - player.x, candidate.y - player.y) < minPlayerDistance);
    if (!unsafe) return candidate;
  }
  return null;
}

export function shouldStartApexChallenge({
  playlistId,
  scoreATK,
  scoreDEF,
  firstTo,
  apexComplete,
}) {
  if (playlistId !== 'standard' || apexComplete) return null;
  if (scoreATK >= firstTo) return 'ATK';
  if (scoreDEF >= firstTo) return 'DEF';
  return null;
}
