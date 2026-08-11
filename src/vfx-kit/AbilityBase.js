/**
 * AbilityBase — travelling-front skillshot / zone ability foundation.
 *
 * Design rules (from LinearAbilityCastingThreeJS):
 * 1. Settings are the single source of truth. Nothing stores absolute metres
 *    or radians at spawn time except timestamps of discrete events.
 * 2. Records store only fractions, signed lateral offsets, unitless jitters
 *    and event timestamps. Dimensions are resolved against live settings
 *    every frame (including zero-delta paused frames).
 * 3. Phases: arm → travel → impact → hold → fade.
 * 4. Full ownership of dispose so CS3D teardown never leaks.
 */

import * as THREE from 'three';
import { settings } from './settings.js';

export const Phase = Object.freeze({
  IDLE: 'idle',
  TRAVEL: 'travel',
  IMPACT: 'impact',
  HOLD: 'hold',
  FADE: 'fade',
  DEAD: 'dead',
});

export class AbilityBase {
  /**
   * @param {object} opts
   * @param {string} opts.id              element id from ELEMENT_META
   * @param {THREE.Scene} opts.scene
   * @param {object} opts.context         shared services from AbilityManager
   */
  constructor({ id, scene, context }) {
    this.id = id;
    this.scene = scene;
    this.ctx = context;
    this.cfg = settings[id];
    this.phase = Phase.IDLE;
    this.age = 0;
    this.travelT = 0;          // 0..1 along the line
    this.origin = new THREE.Vector3();
    this.dir = new THREE.Vector3(0, 0, 1);
    this.distance = 0;
    this.localFrame = new THREE.Matrix4();
    this._alive = false;
    this._disposed = false;

    // Subclasses populate these
    this.meshes = [];
    this.lights = [];
    this.particleEmitters = [];
  }

  // ------------------------------------------------------------------
  // Lifecycle
  // ------------------------------------------------------------------

  /**
   * Spawn a new cast.
   * @param {THREE.Vector3} origin
   * @param {THREE.Vector3} direction  unit vector
   * @param {number} distance
   */
  spawn(origin, direction, distance) {
    if (this._disposed) return;
    this.origin.copy(origin);
    this.dir.copy(direction).normalize();
    this.distance = Math.max(this.cfg.minRange || 2, Math.min(distance, this.cfg.range));
    this.age = 0;
    this.travelT = 0;
    this.phase = Phase.TRAVEL;
    this._alive = true;

    // Build local frame: X = right, Y = up, Z = forward
    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(this.dir, up).normalize();
    if (right.lengthSq() < 0.01) {
      right.set(1, 0, 0);
    }
    const realUp = new THREE.Vector3().crossVectors(right, this.dir).normalize();
    this.localFrame.makeBasis(right, realUp, this.dir);
    this.localFrame.setPosition(this.origin);

    this.onSpawn();
    this.createShaders?.();
    this.createParticles?.();
  }

  /**
   * Called every simulation frame (respects pause via zero delta).
   * @param {number} dt  scaled delta
   * @param {number} realDt  unscaled real time (for indicators)
   */
  update(dt, realDt = dt) {
    if (!this._alive || this.phase === Phase.DEAD) return;

    this.age += dt * (settings.global.timeScale || 1);

    switch (this.phase) {
      case Phase.TRAVEL: {
        const speed = this.cfg.speed || 40;
        if (speed > 0) {
          this.travelT = Math.min(1, this.travelT + (speed * dt) / this.distance);
        } else {
          // sustained / zone abilities jump to impact after charge
          this.travelT = 1;
        }
        this.onTravel(dt);
        if (this.travelT >= 1) {
          this.phase = Phase.IMPACT;
          this.onImpact();
        }
        break;
      }
      case Phase.IMPACT:
        this.phase = Phase.HOLD;
        // fall through
      case Phase.HOLD: {
        const holdTime = this.cfg.lifetime || 3;
        this.onHold?.(dt);
        if (this.age > holdTime) {
          this.phase = Phase.FADE;
          this.onFadeStart?.();
        }
        break;
      }
      case Phase.FADE: {
        this.onFade(dt);
        if (this.age > (this.cfg.lifetime || 3) + 1.2) {
          this.kill();
        }
        break;
      }
    }
  }

  kill() {
    this.phase = Phase.DEAD;
    this._alive = false;
    this.onKill();
  }

  /**
   * Full teardown. Must release every GPU resource.
   */
  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    this._alive = false;
    this.phase = Phase.DEAD;

    for (const m of this.meshes) {
      this.scene.remove(m);
      m.geometry?.dispose();
      if (Array.isArray(m.material)) {
        m.material.forEach(mat => mat.dispose());
      } else {
        m.material?.dispose();
      }
    }
    this.meshes.length = 0;

    for (const l of this.lights) {
      this.scene.remove(l);
    }
    this.lights.length = 0;

    for (const e of this.particleEmitters) {
      e.dispose?.();
    }
    this.particleEmitters.length = 0;

    this.onDispose();
  }

  // ------------------------------------------------------------------
  // Geometry helpers (resolve against live settings)
  // ------------------------------------------------------------------

  /** World position at fraction t along the cast line */
  pointAt(t) {
    return this.origin.clone().addScaledVector(this.dir, t * this.distance);
  }

  /** Local → world using the cast frame */
  localToWorld(local) {
    return local.clone().applyMatrix4(this.localFrame);
  }

  // ------------------------------------------------------------------
  // Hooks for subclasses (override these)
  // ------------------------------------------------------------------
  onSpawn() {}
  createShaders() {}
  createParticles() {}
  onTravel(dt) {}
  onImpact() {}
  onHold(dt) {}
  onFadeStart() {}
  onFade(dt) {}
  onKill() {}
  onDispose() {}
}
