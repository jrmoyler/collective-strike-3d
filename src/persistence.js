export const SAVE_VERSION = 2;
export const SETTINGS_KEY = "cs3d.settings.v2";
export const CAREER_KEY = "cs3d.career.v2";

export const DEFAULT_SETTINGS = Object.freeze({
  version: SAVE_VERSION,
  master: 0.8,
  music: 0.42,
  effects: 1,
  shake: 1,
  bloom: true,
  aimAssist: 0.45,
  sensitivity: 1,
  touchLeftHanded: false,
  colorblind: "symbols",
  uiScale: 1,
  reducedMotion: false,
  quality: "auto",
  tutorialCompleted: false,
  inputPreference: "auto",
});

export const DEFAULT_CAREER = Object.freeze({
  version: SAVE_VERSION,
  matches: 0,
  wins: 0,
  kills: 0,
  deaths: 0,
  xp: 0,
  bestStreak: 0,
  mastery: {},
  arenaWins: {},
});

const clone = value => structuredClone(value);
const finite = (value, fallback, min = 0, max = 1) => Number.isFinite(Number(value)) ? Math.max(min, Math.min(max, Number(value))) : fallback;
const integer = (value, fallback = 0) => Number.isFinite(Number(value)) ? Math.max(0, Math.floor(Number(value))) : fallback;

function parse(storage, key, fallback) {
  const raw = storage?.getItem?.(key);
  if (raw == null) return fallback;
  try { return JSON.parse(raw); }
  catch {
    try { storage.setItem(`${key}.corrupt`, raw); } catch {}
    return fallback;
  }
}

function normalizeSettings(value = {}, environment = {}) {
  const next = { ...DEFAULT_SETTINGS, ...value, version: SAVE_VERSION };
  next.master = finite(next.master, DEFAULT_SETTINGS.master);
  next.music = finite(next.music, DEFAULT_SETTINGS.music);
  next.effects = finite(value.effects ?? value.sfx, DEFAULT_SETTINGS.effects);
  next.shake = finite(next.shake, DEFAULT_SETTINGS.shake);
  next.aimAssist = finite(next.aimAssist, DEFAULT_SETTINGS.aimAssist);
  next.sensitivity = finite(next.sensitivity, DEFAULT_SETTINGS.sensitivity, 0.25, 2.5);
  next.uiScale = finite(next.uiScale, DEFAULT_SETTINGS.uiScale, 0.8, 1.35);
  next.bloom = typeof next.bloom === "number" ? next.bloom > 0 : Boolean(next.bloom);
  next.touchLeftHanded = Boolean(next.touchLeftHanded);
  next.tutorialCompleted = Boolean(next.tutorialCompleted);
  next.reducedMotion = Boolean(value.reducedMotion ?? environment.reducedMotion ?? DEFAULT_SETTINGS.reducedMotion);
  if (!["auto", "low", "medium", "high"].includes(next.quality)) next.quality = "auto";
  if (!["auto", "keyboard", "touch", "gamepad"].includes(next.inputPreference)) next.inputPreference = "auto";
  if (!["symbols", "deuteranopia", "protanopia", "tritanopia"].includes(next.colorblind)) next.colorblind = "symbols";
  delete next.sfx;
  return next;
}

function normalizeCareer(value = {}) {
  return {
    ...DEFAULT_CAREER,
    ...value,
    version: SAVE_VERSION,
    matches: integer(value.matches), wins: integer(value.wins), kills: integer(value.kills), deaths: integer(value.deaths),
    xp: integer(value.xp), bestStreak: integer(value.bestStreak), mastery: { ...(value.mastery || {}) }, arenaWins: { ...(value.arenaWins || {}) },
  };
}

export function saveSettings(storage, value) {
  const normalized = normalizeSettings(value);
  storage?.setItem?.(SETTINGS_KEY, JSON.stringify(normalized));
  return normalized;
}

export function saveCareer(storage, value) {
  const normalized = normalizeCareer(value);
  storage?.setItem?.(CAREER_KEY, JSON.stringify(normalized));
  return normalized;
}

export function loadSettings(storage = globalThis.localStorage, environment = {}) {
  let value = parse(storage, SETTINGS_KEY, null);
  if (!value) value = parse(storage, "cs3d_cfg", {});
  return saveSettings(storage, normalizeSettings(value, environment));
}

export function loadCareer(storage = globalThis.localStorage) {
  let value = parse(storage, CAREER_KEY, null);
  if (!value) value = parse(storage, "cs3d_career", {});
  return saveCareer(storage, value);
}

export function resetSettings(storage = globalThis.localStorage) {
  storage?.removeItem?.(SETTINGS_KEY);
  storage?.removeItem?.("cs3d_cfg");
  storage?.removeItem?.("cs3d_difficulty");
  return saveSettings(storage, clone(DEFAULT_SETTINGS));
}

export function resetCareer(storage = globalThis.localStorage) {
  storage?.removeItem?.(CAREER_KEY);
  storage?.removeItem?.("cs3d_career");
  return saveCareer(storage, clone(DEFAULT_CAREER));
}

export function createMemoryStorage(seed = {}) {
  const values = new Map(Object.entries(seed));
  return {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
    clear() { values.clear(); },
  };
}
