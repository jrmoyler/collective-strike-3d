/**
 * Collective Strike 3D — makeBossRig (stub + hybrid support)
 *
 * Builds a lightweight procedural rig for apex bosses from BOSS_DNA.
 * Shares the same visual vocabulary as operator makeRig (sphere torso,
 * accent plates, tendrils, etc.) but branches on loco / hybrid classes
 * that no operator uses.
 *
 * Hybrid bosses (e.g. LOOM HYDRA: helix_titan + swarm_host) instantiate
 * every class returned by resolveBossLocos so the coil and detachable
 * heads are both present. Single-loco bosses are unchanged.
 *
 * This is intentionally a stub: full mesh construction, IK, and collision
 * multi-cell occupancy land in a later PR once the data layer is reviewed.
 * The function is safe to call offline and returns a Group-compatible shape
 * that the existing rigs Map can store.
 */

import { resolveBossLocos } from './boss-dna.js';

/**
 * @param {object} bossPlayer  minimal player-like object { id, dna, x, y, team }
 * @param {object} opts        { THREE, scene, S, mat, geo } — injected so this
 *                             module stays free of global THREE dependency
 * @returns {object} rig handle { root, body, locos, segments, dna, … }
 */
export function makeBossRig(bossPlayer, opts = {}) {
  const dna = bossPlayer.dna || bossPlayer;
  const locos = resolveBossLocos(dna);
  const scale = dna.scale || 1.8;

  // Minimal offline-safe group when THREE is not injected (tests / data path)
  if (!opts.THREE) {
    return {
      root: null,
      body: null,
      locos,
      hybrid: locos.length > 1,
      segments: [],
      dna,
      scale,
      stub: true,
      signature: dna.signature,
    };
  }

  const { THREE, scene, S = 0.1, mat, geo } = opts;
  const root = new THREE.Group();
  root.position.set((bossPlayer.x || 0) * S, 0, (bossPlayer.y || 0) * S);
  if (scene) scene.add(root);

  const body = new THREE.Group();
  root.add(body);

  const skin = mat ? mat(dna.cTop || '#888') : null;
  const torso = geo && skin ? new THREE.Mesh(geo.sphere, skin) : null;
  if (torso) {
    const bw = (dna.body && dna.body[0]) || 0.9;
    const bl = (dna.body && dna.body[1]) || 1.2;
    torso.scale.set(bw * scale, bl * scale * 0.7, bw * scale * 0.85);
    torso.position.y = 1.6 * scale;
    torso.castShadow = true;
    body.add(torso);
  }

  const segments = [];

  for (const loco of locos) {
    switch (loco) {
      case 'colossus':
        break;
      case 'swarm_host':
        for (let i = 0; i < (dna.segments || 0); i++) {
          segments.push({ type: 'drone', index: i, alive: true });
        }
        break;
      case 'phase':
        root.userData.phaseCapable = true;
        break;
      case 'orbital':
        for (let i = 0; i < (dna.segments || 0); i++) {
          segments.push({ type: 'ring', index: i, alive: true });
        }
        break;
      case 'anchor':
        root.userData.canRoot = true;
        break;
      case 'storm':
        root.userData.trailCapable = true;
        break;
      case 'mirror':
        root.userData.mirrorCapable = true;
        break;
      case 'helix_titan':
        root.userData.helix = true;
        if (!locos.includes('swarm_host') && dna.segments) {
          for (let i = 0; i < dna.segments; i++) {
            segments.push({ type: 'head', index: i, alive: true });
          }
        }
        break;
      default:
        break;
    }
  }

  // Hybrid: if both helix_titan and swarm_host, promote segment type to heads
  if (locos.includes('helix_titan') && locos.includes('swarm_host')) {
    for (const s of segments) {
      if (s.type === 'drone') s.type = 'head';
    }
  }

  return {
    root,
    body,
    torso,
    locos,
    hybrid: locos.length > 1,
    segments,
    dna,
    scale,
    stub: false,
    signature: dna.signature,
    topY: 2.8 * scale,
  };
}

/**
 * Lightweight update hook for the boss rig (breath / coil / segment orbit).
 * No-op for pure stubs.
 */
export function updateBossRig(rig, dt, now) {
  if (!rig || rig.stub || !rig.root) return;
  if (rig.root.userData.helix && rig.body) {
    rig.body.rotation.y += dt * 0.35;
  }
  if (rig.hybrid && Array.isArray(rig.segments)) {
    rig._segPhase = (rig._segPhase || 0) + dt;
  }
}

export default makeBossRig;
