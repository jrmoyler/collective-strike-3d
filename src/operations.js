/** Persistent long-form Operations progression, independent of rendering. */

export const OPERATIONS_VERSION = 1;
export const LATTICE_RANK_COUNT = 200;
export const XP_PER_LATTICE_RANK = 300;

const CONTRACTS = Object.freeze([
  { key: "kills", label: "ELIMINATION DOCTRINE", base: 18, reward: 110 },
  { key: "damage", label: "PRESSURE CAMPAIGN", base: 2800, reward: 130 },
  { key: "objectives", label: "SITE AUTHORITY", base: 3, reward: 150 },
  { key: "roundWins", label: "ROUND CONTROL", base: 5, reward: 120 },
  { key: "doctrines", label: "DOCTRINE MASTERY", base: 6, reward: 125 },
  { key: "bossDamage", label: "APEX HUNTER", base: 1800, reward: 160 },
  { key: "bossKills", label: "APEX EXECUTION", base: 1, reward: 190 },
]);

const hash = value => {
  let result = 2166136261;
  for (const char of String(value)) { result ^= char.charCodeAt(0); result = Math.imul(result, 16777619); }
  return result >>> 0;
};

const rngFor = seed => {
  let state = hash(seed);
  return () => {
    state += 0x6D2B79F5;
    let value = state;
    value = Math.imul(value ^ value >>> 15, value | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
};

const integer = value => Math.max(0, Math.floor(Number(value) || 0));

export function latticeRank(xp = 0) {
  return Math.min(LATTICE_RANK_COUNT, Math.floor(integer(xp) / XP_PER_LATTICE_RANK) + 1);
}

export function latticeRankProgress(xp = 0) {
  const safe = integer(xp);
  const rank = latticeRank(safe);
  if (rank >= LATTICE_RANK_COUNT) return { rank, current: XP_PER_LATTICE_RANK, required: XP_PER_LATTICE_RANK, ratio: 1 };
  const current = safe % XP_PER_LATTICE_RANK;
  return { rank, current, required: XP_PER_LATTICE_RANK, ratio: current / XP_PER_LATTICE_RANK };
}

export function createOperationBoard({ seed = "collective-strike", cycle = 0, rank = 1 } = {}) {
  const random = rngFor(`${seed}:${cycle}:${rank}`);
  const pool = [...CONTRACTS];
  const contracts = [];
  while (contracts.length < 3 && pool.length) {
    const index = Math.floor(random() * pool.length);
    const template = pool.splice(index, 1)[0];
    const scale = 1 + Math.min(1.5, (rank - 1) * 0.008);
    contracts.push({
      id: `${cycle}-${template.key}`,
      key: template.key,
      label: template.label,
      target: Math.max(1, Math.round(template.base * scale)),
      progress: 0,
      reward: template.reward + Math.floor(rank / 10) * 5,
      complete: false,
    });
  }
  return contracts;
}

export function normalizeOperations(value = {}, options = {}) {
  const cycle = integer(value.cycle);
  const xp = integer(value.xp);
  const rank = latticeRank(xp);
  const contracts = Array.isArray(value.contracts) && value.contracts.length
    ? value.contracts.slice(0, 3).map(contract => ({
      ...contract,
      target: Math.max(1, integer(contract.target)),
      progress: integer(contract.progress),
      reward: integer(contract.reward),
      complete: Boolean(contract.complete),
    }))
    : createOperationBoard({ seed: options.seed, cycle, rank });
  return {
    version: OPERATIONS_VERSION,
    xp,
    cycle,
    completedContracts: integer(value.completedContracts),
    completedBosses: integer(value.completedBosses),
    contracts,
  };
}

export function applyOperationReport(value, report = {}, options = {}) {
  const state = normalizeOperations(value, options);
  const before = latticeRank(state.xp);
  const completed = [];
  let contractXp = 0;
  for (const contract of state.contracts) {
    if (contract.complete) continue;
    contract.progress = Math.min(contract.target, contract.progress + integer(report[contract.key]));
    if (contract.progress >= contract.target) {
      contract.complete = true;
      completed.push(contract.id);
      contractXp += contract.reward;
      state.completedContracts++;
    }
  }
  state.completedBosses += integer(report.bossKills);
  const matchXp = Math.max(45, Math.round(
    55 + integer(report.kills) * 4 + integer(report.objectives) * 18
    + integer(report.roundWins) * 7 + integer(report.bossKills) * 55
    + (report.won ? 45 : 0),
  ));
  state.xp += matchXp + contractXp;
  if (state.contracts.every(contract => contract.complete)) {
    state.cycle++;
    state.contracts = createOperationBoard({ seed: options.seed, cycle: state.cycle, rank: latticeRank(state.xp) });
  }
  return {
    state,
    matchXp,
    contractXp,
    completed,
    rankBefore: before,
    rankAfter: latticeRank(state.xp),
    progress: latticeRankProgress(state.xp),
  };
}
