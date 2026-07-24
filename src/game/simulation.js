import * as THREE from "three";

export const simulation = {
  player: {
    position: new THREE.Vector3(0, 0, 12),
    velocity: new THREE.Vector3(),
    aimPoint: new THREE.Vector3(0, 0, 0),
    angle: Math.PI,
    firing: false,
    cooldown: 0,
    abilityCooldown: 0,
    dash: 0
  },
  keys: new Set(),
  enemies: new Map(),
  anchors: new Map(),
  effects: [],
  elapsed: 0,
  reset() {
    this.player.position.set(0, 0, 12);
    this.player.velocity.set(0, 0, 0);
    this.player.aimPoint.set(0, 0, 0);
    this.player.firing = false;
    this.player.cooldown = 0;
    this.player.abilityCooldown = 0;
    this.player.dash = 0;
    this.enemies.clear();
    this.anchors.clear();
    this.effects.length = 0;
    this.elapsed = 0;
  }
};

export const ARENA_LIMIT = 28;
export const COVER = [
  { x: -14, z: -8, w: 8, d: 2.8 },
  { x: 12, z: -5, w: 3, d: 9 },
  { x: -8, z: 9, w: 3, d: 8 },
  { x: 8, z: 10, w: 10, d: 2.8 },
  { x: 0, z: 0, w: 5, d: 5 }
];

export function collides(x, z, radius = 0.75) {
  if (Math.abs(x) > ARENA_LIMIT - radius || Math.abs(z) > ARENA_LIMIT - radius) return true;
  return COVER.some(box =>
    x + radius > box.x - box.w / 2 &&
    x - radius < box.x + box.w / 2 &&
    z + radius > box.z - box.d / 2 &&
    z - radius < box.z + box.d / 2
  );
}

export function moveWithCollision(position, delta, radius = 0.75) {
  const nx = position.x + delta.x;
  const nz = position.z + delta.z;
  if (!collides(nx, position.z, radius)) position.x = nx;
  if (!collides(position.x, nz, radius)) position.z = nz;
}
