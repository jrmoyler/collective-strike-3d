/**
 * AbilityManager — pools, registers and drives all elemental abilities.
 * Respects CS3D quality budgets and simulation clock.
 */

import * as THREE from 'three';
import { settings, ELEMENTS, ELEMENT_META } from './settings.js';
import { AbilityBase, Phase } from './AbilityBase.js';

// Ability class registry (populated by individual ability modules)
const ABILITY_CLASSES = new Map();

export function registerAbility(id, AbilityClass) {
  ABILITY_CLASSES.set(id, AbilityClass);
}

export class AbilityManager {
  /**
   * @param {object} opts
   * @param {THREE.Scene} opts.scene
   * @param {object} opts.particleSystem   CS3D particle system (or kit particles)
   * @param {function} opts.getQualityScale  () => number 0.4–1.2
   * @param {object} opts.clock            { getDelta(), getElapsedTime() }
   */
  constructor({ scene, particleSystem = null, getQualityScale = () => 1.0, clock = null }) {
    this.scene = scene;
    this.particleSystem = particleSystem;
    this.getQualityScale = getQualityScale;
    this.clock = clock;

    this.pool = new Map(); // id → AbilityBase[]
    this.active = [];
    this.maxConcurrent = 4; // matches original pool ceiling

    // Pre-warm pools
    for (const id of ELEMENTS) {
      this.pool.set(id, []);
    }
  }

  /**
   * Acquire an ability instance (pool or create).
   */
  _acquire(id) {
    const free = this.pool.get(id) || [];
    let ability = free.pop();
    if (!ability) {
      const Cls = ABILITY_CLASSES.get(id);
      if (!Cls) {
        console.warn(`[VFXKit] No ability class registered for "${id}"`);
        return null;
      }
      ability = new Cls({
        id,
        scene: this.scene,
        context: {
          particleSystem: this.particleSystem,
          getQualityScale: this.getQualityScale,
          manager: this,
        },
      });
    }
    return ability;
  }

  /**
   * Return an ability to the pool after dispose.
   */
  _release(ability) {
    if (!ability) return;
    ability.dispose();
    const free = this.pool.get(ability.id) || [];
    if (free.length < 3) { // soft ceiling per type
      free.push(ability);
      this.pool.set(ability.id, free);
    }
  }

  /**
   * Cast an ability.
   * @param {string} id
   * @param {THREE.Vector3} origin
   * @param {THREE.Vector3} direction
   * @param {number} distance
   * @returns {AbilityBase|null}
   */
  cast(id, origin, direction, distance) {
    // Enforce concurrent ceiling
    if (this.active.length >= this.maxConcurrent) {
      // Kill oldest
      const oldest = this.active.shift();
      this._release(oldest);
    }

    const ability = this._acquire(id);
    if (!ability) return null;

    // Apply live quality scale
    settings.global.qualityScale = this.getQualityScale();

    ability.spawn(origin, direction, distance);
    this.active.push(ability);
    return ability;
  }

  /**
   * Convenience for zone abilities (reads centre as pointAt(1)).
   */
  castZone(id, origin, direction, distance) {
    return this.cast(id, origin, direction, distance);
  }

  /**
   * Drive all active abilities. Call from game simulation tick.
   * @param {number} dt  scaled delta (0 when paused)
   * @param {number} realDt
   */
  update(dt, realDt = dt) {
    settings.global.qualityScale = this.getQualityScale();

    for (let i = this.active.length - 1; i >= 0; i--) {
      const a = this.active[i];
      a.update(dt, realDt);
      if (a.phase === Phase.DEAD || !a._alive) {
        this.active.splice(i, 1);
        this._release(a);
      }
    }
  }

  /**
   * Clear everything (match teardown / C key).
   */
  clear() {
    for (const a of this.active) {
      this._release(a);
    }
    this.active.length = 0;
  }

  /**
   * Full dispose of the manager itself.
   */
  dispose() {
    this.clear();
    for (const free of this.pool.values()) {
      for (const a of free) a.dispose();
      free.length = 0;
    }
    this.pool.clear();
  }

  get activeCount() {
    return this.active.length;
  }
}
