/**
 * Per-match weapon usage ledger.
 *
 * Career weapon mastery used to land entirely on whatever weapon happened to be
 * equipped when the results screen opened. The ledger records what each weapon
 * actually did during the match — damage dealt and time carried — so match XP is
 * split across the weapons that earned it. XP awarded while a weapon is in hand
 * (eliminations, objectives, round wins) stays with that weapon; whatever is left
 * over at the end (the match completion bonus) is shared by engagement.
 */

export const DAMAGE_WEIGHT = 1;
export const SECOND_WEIGHT = 10;

const finite = value => (Number.isFinite(Number(value)) ? Number(value) : 0);
const makeEntry = () => ({ damage: 0, time: 0, xp: 0 });

function slot(ledger, key) {
  if (!ledger || !key) return null;
  if (!ledger.weapons[key]) ledger.weapons[key] = makeEntry();
  return ledger.weapons[key];
}

export function createWeaponLedger(weaponKey = null) {
  const ledger = { weapons: {}, active: null };
  if (weaponKey) setActiveWeapon(ledger, weaponKey);
  return ledger;
}

export function setActiveWeapon(ledger, weaponKey) {
  if (!ledger) return ledger;
  ledger.active = weaponKey || null;
  slot(ledger, weaponKey);
  return ledger;
}

export function recordWeaponDamage(ledger, amount, weaponKey = ledger?.active) {
  const entry = slot(ledger, weaponKey);
  if (entry) entry.damage += Math.max(0, finite(amount));
  return ledger;
}

export function recordWeaponTime(ledger, seconds, weaponKey = ledger?.active) {
  const entry = slot(ledger, weaponKey);
  if (entry) entry.time += Math.max(0, finite(seconds));
  return ledger;
}

export function recordWeaponXp(ledger, amount, weaponKey = ledger?.active) {
  const entry = slot(ledger, weaponKey);
  if (entry) entry.xp += Math.max(0, finite(amount));
  return ledger;
}

export function weaponEngagement(ledger) {
  const engagement = {};
  for (const [key, entry] of Object.entries(ledger?.weapons || {})) {
    engagement[key] = entry.damage * DAMAGE_WEIGHT + entry.time * SECOND_WEIGHT;
  }
  return engagement;
}

/** Split `total` across `weights` with largest-remainder rounding so the parts sum exactly. */
function shareOut(total, weights) {
  const keys = Object.keys(weights).filter(key => weights[key] > 0);
  if (total <= 0 || !keys.length) return {};
  const sum = keys.reduce((acc, key) => acc + weights[key], 0);
  const awards = {};
  const remainders = [];
  let assigned = 0;
  for (const key of keys) {
    const exact = total * weights[key] / sum;
    const floor = Math.floor(exact);
    awards[key] = floor;
    assigned += floor;
    remainders.push({ key, remainder: exact - floor });
  }
  remainders.sort((a, b) => b.remainder - a.remainder || (a.key < b.key ? -1 : 1));
  for (let i = 0; assigned < total; i++, assigned++) awards[remainders[i % remainders.length].key]++;
  return awards;
}

/**
 * Resolve the match into integer mastery awards per weapon that sum to `totalXp`.
 * Directly attributed XP keeps its weapon; the remainder follows engagement.
 */
export function weaponMasteryAwards(ledger, totalXp, fallbackKey = ledger?.active || null) {
  const total = Math.max(0, Math.round(finite(totalXp)));
  if (!total) return {};
  const entries = Object.entries(ledger?.weapons || {});
  if (!entries.length) return fallbackKey ? { [fallbackKey]: total } : {};

  const direct = {};
  let directTotal = 0;
  for (const [key, entry] of entries) {
    const xp = Math.max(0, Math.round(entry.xp));
    if (!xp) continue;
    direct[key] = xp;
    directTotal += xp;
  }
  if (directTotal >= total) return shareOut(total, direct);

  let weights = weaponEngagement(ledger);
  if (!Object.values(weights).some(weight => weight > 0)) weights = direct;
  if (!Object.values(weights).some(weight => weight > 0)) {
    const key = fallbackKey || entries[0][0];
    weights = { [key]: 1 };
  }
  const awards = { ...direct };
  for (const [key, xp] of Object.entries(shareOut(total - directTotal, weights))) {
    awards[key] = (awards[key] || 0) + xp;
  }
  return awards;
}

export function applyWeaponMastery(mastery, awards) {
  const next = { ...(mastery || {}) };
  for (const [key, xp] of Object.entries(awards || {})) {
    if (!key || !Number.isFinite(Number(xp))) continue;
    next[key] = (Number(next[key]) || 0) + Number(xp);
  }
  return next;
}
