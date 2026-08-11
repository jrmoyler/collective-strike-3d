/**
 * CS3D Bridge — integrates the VFX Kit with Collective Strike 3D runtime.
 *
 * Usage inside game-runtime or match start:
 *
 *   import { createVFXKit } from '../vfx-kit/index.js';
 *   import { attachVFXKit } from '../vfx-kit/bridge/cs3d-bridge.js';
 *
 *   const kit = createVFXKit({
 *     scene,
 *     particleSystem: fx,           // existing cs3d-particles instance
 *     getQualityScale: () => qualityProfile.particleScale || 1.0,
 *   });
 *   attachVFXKit(kit, { onAbilityCast, onDoctrineCast });
 *
 * On match teardown always call kit.clear() then kit.dispose().
 */

import { ELEMENT_META } from '../settings.js';

/**
 * Attach high-level helpers that map operator abilities / doctrines
 * onto the kit. Returns an API the game can call from input-actions.
 */
export function attachVFXKit(kit, {
  onAbilityCast = null,
  onDoctrineCast = null,
} = {}) {
  // Simple mapping: current operator ability → elemental id
  // Game can override this table per operator DNA later.
  const defaultAbilityMap = {
    frost: 'frost',
    storm: 'storm',
    cinder: 'cinder',
    nova: 'nova',
    voltaic: 'voltaic',
    seismic: 'seismic',
    tidal: 'tidal',
    gale: 'gale',
    plasma: 'plasma',
    vine: 'vine',
    void: 'void',
  };

  return {
    /**
     * Fire a skillshot-style ability from current aim.
     * @param {string} elementId
     * @param {THREE.Vector3} origin
     * @param {THREE.Vector3} direction
     * @param {number} distance
     */
    fire(elementId, origin, direction, distance) {
      const ability = kit.cast(elementId, origin, direction, distance);
      if (ability && typeof onAbilityCast === 'function') {
        onAbilityCast(elementId, ability);
      }
      return ability;
    },

    /**
     * Fire a zone ability (reads centre as far end of the line).
     * Invokes onDoctrineCast on success (distinct from fire / onAbilityCast).
     */
    fireZone(elementId, origin, direction, distance) {
      const ability = kit.cast(elementId, origin, direction, distance);
      if (ability && typeof onDoctrineCast === 'function') {
        onDoctrineCast(elementId, ability);
      }
      return ability;
    },

    update: kit.update.bind(kit),
    clear: kit.clear.bind(kit),
    dispose: kit.dispose.bind(kit),
    get activeCount() { return kit.activeCount; },
    ELEMENT_META,
    defaultAbilityMap,
  };
}
