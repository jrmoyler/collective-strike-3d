import { arenaElevationAt, pointInZone } from "./arena-core.js";

const EPSILON = 1e-6;

/**
 * Cover height tiers for ballistics and bot weapon selection.
 * These are authoritative values used throughout the engine.
 */
export const COVER_TIERS = Object.freeze({
  LOW: { min: 0, max: 1.5, label: "low", crouchOnly: true },    // ankle to knee
  MID: { min: 1.5, max: 2.8, label: "mid", crouchOnly: false }, // waist to chest
  HIGH: { min: 2.8, max: Infinity, label: "high", crouchOnly: false }, // standing
});

/** Categorize a height into a tier */
export function getCoverTier(height) {
  if (height < COVER_TIERS.LOW.max) return "LOW";
  if (height < COVER_TIERS.MID.max) return "MID";
  return "HIGH";
}

/**
 * Get the collision height of a block, respecting authored values or deriving
 * from kind. This is the single source of truth for cover height.
 */
export function arenaBlockHeight(block) {
  if (Number.isFinite(block?.collisionHeight)) return Math.max(0, block.collisionHeight);
  if (block?.kind === "high-tower") return 8;
  if (["monolith", "furnace-core", "broken-lab", "sanctum-core", "transit-core"].includes(block?.kind)) return 4.5;
  if (String(block?.kind || "").includes("core")) return 4.5;
  // Default randomized height for legacy blocks without explicit collisionHeight
  const hash = Math.abs(((block?.x || 0) * 73856093) ^ ((block?.y || 0) * 19349663) ^ ((block?.w || 0) * 83492791));
  return 2.65 + (hash % 151) / 100;
}

export function arenaActorHeight(definition, actor, tileSize, offset = 1.55) {
  const surface = arenaElevationAt(definition, actor.x / tileSize, actor.y / tileSize);
  return surface + (actor.isBoss ? Math.max(1.8, Math.min(3.4, (actor.radius || 45) / 24)) : offset);
}

export function arenaObstacleAt(definition, grid, tileX, tileY, options = {}) {
  const cellX = Math.floor(tileX);
  const cellY = Math.floor(tileY);
  if (cellX < 0 || cellY < 0 || cellY >= grid.length || cellX >= (grid[0]?.length || 0)) {
    return { height: Infinity, reason: "boundary" };
  }

  let blockHeight = -Infinity;
  for (const block of definition.topology.blocks || []) {
    if (pointInZone(tileX, tileY, block)) blockHeight = Math.max(blockHeight, arenaBlockHeight(block));
  }
  if (Number.isFinite(blockHeight)) return { height: blockHeight, reason: "cover" };

  for (const value of definition.topology.voids || []) {
    if (pointInZone(tileX, tileY, value)) return { height: -Infinity, reason: "void" };
  }

  if (grid[cellY]?.[cellX] === 1) {
    const onAuthoredFloor = (definition.topology.floorZones || []).some(value => pointInZone(tileX, tileY, value));
    return onAuthoredFloor
      ? { height: options.dynamicBarrierHeight ?? 3.8, reason: "dynamic-barrier" }
      : { height: -Infinity, reason: "open-depth" };
  }
  return { height: -Infinity, reason: "clear" };
}

export function traceArenaSegment({
  definition,
  grid,
  start,
  end,
  tileSize = 1,
  step = tileSize * 0.18,
  clearance = 0.06,
  ignoreObstacles = false,
  dynamicBarrierHeight = 3.8,
}) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const dz = end.z - start.z;
  const distance = Math.hypot(dx, dy);
  if (distance < EPSILON || ignoreObstacles) {
    return { clear: true, distance, fraction: 1, point: { ...end }, reason: "clear", obstacleHeight: -Infinity };
  }

  const samples = Math.max(2, Math.ceil(distance / Math.max(step, EPSILON)));
  for (let index = 1; index <= samples; index++) {
    const fraction = index / samples;
    const x = start.x + dx * fraction;
    const y = start.y + dy * fraction;
    const z = start.z + dz * fraction;
    const tileX = x / tileSize;
    const tileY = y / tileSize;
    const surface = arenaElevationAt(definition, tileX, tileY);
    if (z <= surface + clearance) {
      return {
        clear: false,
        distance: distance * fraction,
        fraction,
        point: { x, y, z: surface + clearance },
        reason: "terrain",
        obstacleHeight: surface,
      };
    }
    const obstacle = arenaObstacleAt(definition, grid, tileX, tileY, { dynamicBarrierHeight });
    if (z <= obstacle.height + clearance) {
      return {
        clear: false,
        distance: distance * fraction,
        fraction,
        point: { x, y, z: Number.isFinite(obstacle.height) ? obstacle.height : z },
        reason: obstacle.reason,
        obstacleHeight: obstacle.height,
      };
    }
  }
  return { clear: true, distance, fraction: 1, point: { ...end }, reason: "clear", obstacleHeight: -Infinity };
}

export function arenaLineClear({ definition, grid, tileSize, from, to, fromHeight, toHeight, ignoreObstacles = false }) {
  const start = { x: from.x, y: from.y, z: fromHeight ?? arenaActorHeight(definition, from, tileSize) };
  const end = { x: to.x, y: to.y, z: toHeight ?? arenaActorHeight(definition, to, tileSize, 1.3) };
  return traceArenaSegment({ definition, grid, tileSize, start, end, ignoreObstacles }).clear;
}
