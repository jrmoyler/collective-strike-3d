export const GAME_STATES = Object.freeze({
  LOADING: "loading",
  MENU: "menu",
  MODE_SELECT: "mode-select",
  OPERATOR_SELECT: "operator-select",
  SQUAD_SELECT: "squad-select",
  ARENA_SELECT: "arena-select",
  DEPLOYMENT: "deployment",
  BUY: "buy",
  LIVE: "live",
  PLANT: "plant-defuse",
  SPECTATING: "spectating",
  ROUND_END: "round-end",
  BOSS_INTRO: "boss-intro",
  WAVE_TRANSITION: "wave-transition",
  MATCH_END: "match-end",
  RESULTS: "results",
  PAUSED: "paused",
  CONTEXT_LOST: "context-lost",
});

const S = GAME_STATES;
const TRANSITIONS = Object.freeze({
  [S.LOADING]: [S.MENU, S.CONTEXT_LOST],
  [S.MENU]: [S.MODE_SELECT, S.OPERATOR_SELECT, S.CONTEXT_LOST],
  [S.MODE_SELECT]: [S.MENU, S.OPERATOR_SELECT, S.SQUAD_SELECT],
  [S.OPERATOR_SELECT]: [S.MENU, S.MODE_SELECT, S.SQUAD_SELECT, S.ARENA_SELECT],
  [S.SQUAD_SELECT]: [S.MODE_SELECT, S.OPERATOR_SELECT, S.ARENA_SELECT],
  [S.ARENA_SELECT]: [S.OPERATOR_SELECT, S.DEPLOYMENT, S.CONTEXT_LOST],
  [S.DEPLOYMENT]: [S.ARENA_SELECT, S.BUY, S.BOSS_INTRO, S.WAVE_TRANSITION, S.CONTEXT_LOST],
  [S.BUY]: [S.LIVE, S.PAUSED, S.MENU, S.CONTEXT_LOST],
  [S.LIVE]: [S.PLANT, S.SPECTATING, S.ROUND_END, S.BOSS_INTRO, S.WAVE_TRANSITION, S.MATCH_END, S.PAUSED, S.MENU, S.CONTEXT_LOST],
  [S.PLANT]: [S.LIVE, S.SPECTATING, S.ROUND_END, S.PAUSED, S.CONTEXT_LOST],
  [S.SPECTATING]: [S.LIVE, S.ROUND_END, S.MATCH_END, S.PAUSED, S.CONTEXT_LOST],
  [S.ROUND_END]: [S.BUY, S.BOSS_INTRO, S.WAVE_TRANSITION, S.MATCH_END, S.RESULTS, S.MENU, S.CONTEXT_LOST],
  [S.BOSS_INTRO]: [S.BUY, S.LIVE, S.MATCH_END, S.PAUSED, S.CONTEXT_LOST],
  [S.WAVE_TRANSITION]: [S.BUY, S.BOSS_INTRO, S.MATCH_END, S.PAUSED, S.CONTEXT_LOST],
  [S.MATCH_END]: [S.RESULTS, S.MENU, S.CONTEXT_LOST],
  [S.RESULTS]: [S.DEPLOYMENT, S.MENU, S.CONTEXT_LOST],
  [S.PAUSED]: [S.MENU, S.CONTEXT_LOST],
  [S.CONTEXT_LOST]: [S.MENU, S.DEPLOYMENT],
});

export function createGameStateMachine(initial = S.LOADING, onChange = null) {
  if (!Object.values(S).includes(initial)) throw new Error(`Unknown game state: ${initial}`);
  let state = initial;
  let resumeState = null;
  const history = [{ from: null, to: initial, reason: "initial" }];

  const commit = (to, reason = "runtime", force = false) => {
    const from = state;
    if (from === to) return { ok: true, from, to, reason: "unchanged" };
    if (!Object.values(S).includes(to)) return { ok: false, from, to, reason: "unknown-state" };
    if (!force && !(TRANSITIONS[from] || []).includes(to)) return { ok: false, from, to, reason: "illegal-transition" };
    state = to;
    history.push({ from, to, reason });
    onChange?.({ from, to, reason });
    return { ok: true, from, to, reason };
  };

  return {
    get state() { return state; },
    get history() { return history.slice(); },
    can(to) { return state === to || (TRANSITIONS[state] || []).includes(to); },
    transition(to, reason) { return commit(to, reason); },
    recover(to = S.MENU, reason = "recovery") { resumeState = null; return commit(to, reason, true); },
    pause() {
      if (![S.BUY, S.LIVE, S.PLANT, S.SPECTATING, S.BOSS_INTRO, S.WAVE_TRANSITION].includes(state))
        return { ok: false, from: state, to: S.PAUSED, reason: "not-pausable" };
      resumeState = state;
      return commit(S.PAUSED, "pause");
    },
    resume() {
      if (state !== S.PAUSED || !resumeState) return { ok: false, from: state, to: resumeState, reason: "not-paused" };
      const target = resumeState;
      resumeState = null;
      return commit(target, "resume", true);
    },
  };
}

export class GameScheduler {
  #elapsed = 0;
  #nextId = 1;
  #jobs = [];

  get size() { return this.#jobs.length; }
  schedule(callback, delaySeconds = 0, tag = "match") {
    if (typeof callback !== "function") throw new TypeError("Scheduled callback must be a function");
    const job = { id: this.#nextId++, at: this.#elapsed + Math.max(0, Number(delaySeconds) || 0), callback, tag };
    this.#jobs.push(job);
    this.#jobs.sort((a, b) => a.at - b.at || a.id - b.id);
    return job.id;
  }
  cancel(id) {
    const before = this.#jobs.length;
    this.#jobs = this.#jobs.filter(job => job.id !== id);
    return before !== this.#jobs.length;
  }
  cancelTag(tag) {
    const before = this.#jobs.length;
    this.#jobs = this.#jobs.filter(job => job.tag !== tag);
    return before - this.#jobs.length;
  }
  clear() { const count = this.#jobs.length; this.#jobs = []; return count; }
  tick(deltaSeconds) {
    this.#elapsed += Math.max(0, Number(deltaSeconds) || 0);
    const due = [];
    while (this.#jobs[0]?.at <= this.#elapsed) due.push(this.#jobs.shift());
    for (const job of due) job.callback();
    return due.length;
  }
}

export class LifecycleRegistry {
  #entries = [];
  add(dispose, type = "disposers") {
    if (typeof dispose !== "function") throw new TypeError("Lifecycle disposer must be a function");
    this.#entries.push({ dispose, type, active: true });
    return dispose;
  }
  listen(target, type, listener, options) {
    target.addEventListener(type, listener, options);
    this.add(() => target.removeEventListener(type, listener, options), "listeners");
    return listener;
  }
  counts() {
    return this.#entries.reduce((counts, entry) => {
      if (entry.active) counts[entry.type] = (counts[entry.type] || 0) + 1;
      return counts;
    }, { listeners: 0, disposers: 0 });
  }
  teardown() {
    let count = 0;
    for (const entry of this.#entries.splice(0).reverse()) {
      if (!entry.active) continue;
      entry.active = false;
      entry.dispose();
      count++;
    }
    return count;
  }
}

export const QUALITY_PROFILES = Object.freeze({
  low: Object.freeze({ id: "low", pixelRatio: 0.8, shadows: false, shadowSize: 512, particles: 0.38, bloom: false, fog: 0.72, waterSegments: 8 }),
  medium: Object.freeze({ id: "medium", pixelRatio: 1, shadows: true, shadowSize: 1024, particles: 0.65, bloom: false, fog: 0.86, waterSegments: 12 }),
  high: Object.freeze({ id: "high", pixelRatio: 1.5, shadows: true, shadowSize: 2048, particles: 1, bloom: true, fog: 1, waterSegments: 18 }),
});

export class QualityController {
  constructor({ initial = "high", downgradeSamples = 8, upgradeSamples = 28, slowFrameMs = 21, fastFrameMs = 15.5 } = {}) {
    this.order = ["low", "medium", "high"];
    this.profile = this.order.includes(initial) ? initial : "high";
    this.downgradeSamples = downgradeSamples;
    this.upgradeSamples = upgradeSamples;
    this.slowFrameMs = slowFrameMs;
    this.fastFrameMs = fastFrameMs;
    this.slow = 0;
    this.fast = 0;
  }
  sample(frameMs) {
    if (frameMs > this.slowFrameMs) { this.slow++; this.fast = 0; }
    else if (frameMs < this.fastFrameMs) { this.fast++; this.slow = 0; }
    else { this.slow = 0; this.fast = 0; }
    let index = this.order.indexOf(this.profile);
    if (this.slow >= this.downgradeSamples && index > 0) { this.profile = this.order[index - 1]; this.slow = this.fast = 0; }
    else if (this.fast >= this.upgradeSamples && index < this.order.length - 1) { this.profile = this.order[index + 1]; this.slow = this.fast = 0; }
    return this.profile;
  }
  set(profile) {
    if (!this.order.includes(profile)) throw new Error(`Unknown quality profile: ${profile}`);
    this.profile = profile;
    this.slow = this.fast = 0;
    return QUALITY_PROFILES[profile];
  }
}

export function recoverNavigationPath({ actor, goal, findPath, fallbackGoals = [] }) {
  const direct = findPath(goal, actor) || [];
  if (direct.length) return { path: direct, goal, recovered: false };
  const candidates = fallbackGoals
    .map(candidate => ({ goal: candidate, path: findPath(candidate, actor) || [], distance: Math.hypot(candidate.x - actor.x, candidate.y - actor.y) }))
    .filter(candidate => candidate.path.length)
    .sort((a, b) => a.distance - b.distance);
  if (!candidates.length) return { path: [], goal: null, recovered: true };
  return { path: candidates[0].path, goal: candidates[0].goal, recovered: true };
}
