/**
 * Collective Strike 3D — Elemental VFX Kit
 *
 * Reusable skillshot / zone ability system adapted from
 * LinearAbilityCastingThreeJS (achrefelouafi) under MIT.
 *
 * Public API:
 *   import { createVFXKit, ELEMENT_META, settings } from './vfx-kit/index.js';
 *
 *   const kit = createVFXKit({ scene, particleSystem, getQualityScale });
 *   kit.cast('frost', origin, direction, distance);
 *   kit.update(dt);
 *   kit.clear(); // on match teardown
 */

export { settings, ELEMENT_META, ELEMENTS, CastShape } from './settings.js';
export { AbilityBase, Phase } from './AbilityBase.js';
export { AbilityManager, registerAbility } from './AbilityManager.js';

// Ability registrations (side-effect imports)
import './abilities/FrostLance.js';
import './abilities/StormLance.js';
import './abilities/CinderFall.js';
import './abilities/NovaBeam.js';
import './abilities/VoltaicSnare.js';
import './abilities/SeismicRupture.js';
import './abilities/TidalSurge.js';
import './abilities/GaleVortex.js';
import './abilities/PlasmaArc.js';
import './abilities/VineConstrict.js';
import './abilities/VoidSnare.js';

import { AbilityManager } from './AbilityManager.js';

/**
 * Factory used by the game.
 * @param {object} opts
 * @param {THREE.Scene} opts.scene
 * @param {object} [opts.particleSystem]  CS3D particle system instance
 * @param {() => number} [opts.getQualityScale]  returns 0.4–1.2
 * @param {object} [opts.clock]
 */
export function createVFXKit(opts) {
  const manager = new AbilityManager(opts);
  return {
    manager,
    cast: (id, origin, direction, distance) => manager.cast(id, origin, direction, distance),
    update: (dt, realDt) => manager.update(dt, realDt),
    clear: () => manager.clear(),
    dispose: () => manager.dispose(),
    get activeCount() { return manager.activeCount; },
  };
}
