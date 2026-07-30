/**
 * Collective Strike 3D — Procedural Boss Abilities
 *
 * Data-driven ability definitions for every apex boss. Parameters are derived
 * from DNA (scale, segments, accent, hpMult) so a future ability runner can
 * spawn zones / segments / trails without per-boss hard-coding.
 *
 * Differentiation note (Cognara):
 *   Operator Cognitive Surge (E)  → borrows a *random* division active each use.
 *   Operator Cognitive Brand (Q)  → redesigned mark (see SIGNATURES.cognara).
 *   Boss COGNARA MIRROR           → copies *only the last player ability used*
 *                                   (signature: copy_last_player_ability).
 *   These three must never collapse into the same mechanic.
 *
 * Schema:
 *   tags      — rough categories for UI / telegraph colouring
 *   telegraph — short readable cue shown before the ability resolves
 *   params    — DNA-derived numeric knobs (radius, duration, count, …)
 *   onHit     — declarative effect list the runner interprets
 *   cooldown  — base seconds (runner may scale by hpMult)
 */

import { BOSS_DNA, BOSS_BY_ID } from './boss-dna.js';

/** Shared primitives the ability runner understands */
export const ABILITY_PRIMITIVES = {
  zone: 'ground or volumetric area that applies onHit while active',
  segment: 'destroyable sub-entity (drone, head, ring, plate)',
  phase: 'short teleport / intangibility window',
  trail: 'moving corridor that deflects or slows',
  copy: 'mirror a recorded player ability',
  mark: 'amplify damage taken / reveal / tax abilities',
  stomp: 'expanding shock rings on the collision grid',
  pull: 'radial or directed displacement of targets',
  time_scale: 'local time dilation for projectiles / movement',
};

/**
 * Build params from DNA so values stay proportional to boss size / power.
 */
function dnaParams(dna, overrides = {}) {
  const scale = dna.scale || 1.5;
  const segs = dna.segments || 0;
  return {
    radius: Math.round(80 + scale * 40),
    duration: +(2.4 + scale * 0.6).toFixed(1),
    count: segs || Math.max(1, Math.round(scale)),
    damage: Math.round(18 + (dna.hpMult || 4) * 3),
    telegraphMs: 900,
    ...overrides,
  };
}

/** Full ability table keyed by boss id — one primary + optional secondary */
export const BOSS_ABILITIES = {
  overseer_prime: {
    primary: {
      id: 'doctrine_nodes',
      name: 'DOCTRINE NODES',
      tags: ['zone', 'buff'],
      telegraph: 'Gold rings plant on the lattice',
      params: dnaParams(BOSS_BY_ID.overseer_prime, { radius: 120, duration: 8, count: 3 }),
      onHit: [
        { type: 'zone', effect: 'bot_buff', amount: 0.15 },
        { type: 'zone', effect: 'slow', amount: 0.25 },
      ],
      cooldown: 14,
    },
    secondary: {
      id: 'stomp_rings',
      name: 'STOMP RINGS',
      tags: ['stomp', 'aoe'],
      telegraph: 'Colossus raises a foot',
      params: dnaParams(BOSS_BY_ID.overseer_prime, { radius: 160, count: 3 }),
      onHit: [{ type: 'stomp', effect: 'damage', rings: 3 }],
      cooldown: 9,
    },
  },

  synapse_swarm: {
    primary: {
      id: 'detach_drones',
      name: 'DETACH DRONES',
      tags: ['segment', 'swarm'],
      telegraph: 'Tendrils split into independent turrets',
      params: dnaParams(BOSS_BY_ID.synapse_swarm, { count: 6, duration: 12 }),
      onHit: [{ type: 'segment', effect: 'spawn_turret', hpFrac: 0.12 }],
      cooldown: 16,
    },
  },

  revenue_colossus: {
    primary: {
      id: 'credit_siphon',
      name: 'CREDIT SIPHON',
      tags: ['zone', 'economy'],
      telegraph: 'Coin-ring aura expands',
      params: dnaParams(BOSS_BY_ID.revenue_colossus, { radius: 100, duration: 5 }),
      onHit: [{ type: 'zone', effect: 'credit_steal', amount: 80 }],
      cooldown: 12,
    },
  },

  tutor_wraith: {
    primary: {
      id: 'phase_dash',
      name: 'PHASE DASH',
      tags: ['phase', 'trail'],
      telegraph: 'Silhouette flickers translucent',
      params: dnaParams(BOSS_BY_ID.tutor_wraith, { duration: 1.2, radius: 70 }),
      onHit: [
        { type: 'phase', effect: 'intangible' },
        { type: 'trail', effect: 'residual_dot', duration: 3 },
      ],
      cooldown: 7,
    },
  },

  narrative_lens: {
    primary: {
      id: 'team_mark',
      name: 'NARRATIVE FRAME',
      tags: ['mark', 'team'],
      telegraph: 'Lens plates lock onto one target',
      params: dnaParams(BOSS_BY_ID.narrative_lens, { duration: 6 }),
      onHit: [
        { type: 'mark', effect: 'team_damage_amp', amount: 0.3 },
        { type: 'mark', effect: 'reveal' },
      ],
      cooldown: 11,
    },
  },

  velocity_hound: {
    primary: {
      id: 'wind_trails',
      name: 'WIND TRAILS',
      tags: ['trail', 'storm'],
      telegraph: 'Sprint form blurs into corridors',
      params: dnaParams(BOSS_BY_ID.velocity_hound, { duration: 4, count: 3 }),
      onHit: [
        { type: 'trail', effect: 'deflect_projectiles' },
        { type: 'trail', effect: 'speed_alter', amount: -0.2 },
      ],
      cooldown: 10,
    },
  },

  ledger_orbital: {
    primary: {
      id: 'prediction_beams',
      name: 'PREDICTION BEAMS',
      tags: ['orbital', 'predict'],
      telegraph: 'Ledger rings align to future positions',
      params: dnaParams(BOSS_BY_ID.ledger_orbital, { count: 5, damage: 28 }),
      onHit: [{ type: 'zone', effect: 'predictive_hit', leadMs: 400 }],
      cooldown: 8,
    },
  },

  owl_of_judgment: {
    primary: {
      id: 'jurisdiction',
      name: 'JURISDICTION',
      tags: ['zone', 'tax'],
      telegraph: 'Owl roots; legal-seal eyes flare',
      params: dnaParams(BOSS_BY_ID.owl_of_judgment, { radius: 140, duration: 7 }),
      onHit: [{ type: 'zone', effect: 'ability_tax', cooldownMul: 1.5 }],
      cooldown: 15,
    },
  },

  /**
   * COGNARA MIRROR — ability thief of the *last* player ability only.
   * Explicitly NOT random (that is operator Cognitive Surge).
   */
  cognara_mirror: {
    primary: {
      id: 'mirror_last',
      name: 'MIRROR LAST',
      tags: ['copy', 'mirror'],
      telegraph: 'Reflective shell records the last ability used',
      params: dnaParams(BOSS_BY_ID.cognara_mirror, { duration: 5 }),
      onHit: [
        {
          type: 'copy',
          effect: 'last_player_ability',
          // Runner must read a shared lastAbilityId recorded on player ability use.
          // Never fall back to random division selection.
          source: 'last_player_ability',
        },
      ],
      cooldown: 13,
    },
  },

  terra_siege: {
    primary: {
      id: 'cover_factory',
      name: 'COVER FACTORY',
      tags: ['zone', 'cover'],
      telegraph: 'Siege beetle deploys plate stacks',
      params: dnaParams(BOSS_BY_ID.terra_siege, { count: 2, duration: 10 }),
      onHit: [
        { type: 'zone', effect: 'deploy_cover', cells: 3 },
        { type: 'zone', effect: 'bulldoze', chance: 0.4 },
      ],
      cooldown: 14,
    },
  },

  /**
   * LOOM HYDRA — hybrid helix_titan + swarm_host.
   * Coil (vertical reach) + detachable heads (segments).
   */
  loom_hydra: {
    primary: {
      id: 'coil_strike',
      name: 'COIL STRIKE',
      tags: ['helix', 'reach'],
      telegraph: 'Spiral torso uncoils over cover',
      params: dnaParams(BOSS_BY_ID.loom_hydra, { radius: 180, duration: 2 }),
      onHit: [{ type: 'zone', effect: 'over_cover_damage' }],
      cooldown: 9,
    },
    secondary: {
      id: 'hydra_heads',
      name: 'HYDRA HEADS',
      tags: ['segment', 'swarm'],
      telegraph: 'Three attack heads detach from the coil',
      params: dnaParams(BOSS_BY_ID.loom_hydra, { count: 3, duration: 8 }),
      onHit: [{ type: 'segment', effect: 'spawn_head', hpFrac: 0.18 }],
      cooldown: 18,
    },
  },

  eon_anchor: {
    primary: {
      id: 'time_dilation',
      name: 'TIME DILATION',
      tags: ['zone', 'time_scale'],
      telegraph: 'Hourglass lobes rotate; local time stretches',
      params: dnaParams(BOSS_BY_ID.eon_anchor, { radius: 130, duration: 6 }),
      onHit: [
        { type: 'time_scale', effect: 'slow_projectiles', amount: 0.45 },
        { type: 'time_scale', effect: 'slow_movement', amount: 0.35 },
      ],
      cooldown: 16,
    },
  },
};

/** Ensure every BOSS_DNA entry has at least one ability definition */
export function assertAllBossesHaveAbilities() {
  const missing = BOSS_DNA.filter((b) => !BOSS_ABILITIES[b.id]).map((b) => b.id);
  if (missing.length) {
    throw new Error(`Boss abilities missing for: ${missing.join(', ')}`);
  }
  return true;
}

/**
 * Skeleton ability runner. Call from game loop when a boss is live.
 * Does not touch the 5v5 operator loop; only mutates boss state + FX hooks.
 *
 * @param {object} boss   live boss instance { id, dna, x, y, … }
 * @param {object} ctx    { players, now, fx, grid, lastPlayerAbilityId }
 * @param {string} slot   'primary' | 'secondary'
 */
export function runBossAbility(boss, ctx, slot = 'primary') {
  const table = BOSS_ABILITIES[boss.id];
  if (!table) return null;
  const ability = table[slot];
  if (!ability) return null;

  const now = ctx.now || performance.now() / 1000;
  if (boss.abilityCd && boss.abilityCd[slot] > now) return null;

  const result = {
    id: ability.id,
    name: ability.name,
    telegraph: ability.telegraph,
    params: ability.params,
    onHit: ability.onHit,
    tags: ability.tags,
  };

  boss.abilityCd = boss.abilityCd || {};
  boss.abilityCd[slot] = now + (ability.cooldown || 10);

  // Special case: Cognara Mirror must never randomise
  if (boss.id === 'cognara_mirror' && ability.id === 'mirror_last') {
    result.copiedAbilityId = ctx.lastPlayerAbilityId || null;
    if (!result.copiedAbilityId) {
      result.skipped = true;
      result.reason = 'no_player_ability_recorded';
    }
  }

  return result;
}

export default BOSS_ABILITIES;
