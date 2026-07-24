import { create } from "zustand";
import { OPERATORS } from "./data/operators.js";
import { simulation } from "./game/simulation.js";

const initialAnchors = [
  { id: "alpha", position: [-20, 0, -18], hp: 180 },
  { id: "beta", position: [20, 0, -16], hp: 180 },
  { id: "omega", position: [0, 0, 20], hp: 240 }
];

export const useGame = create((set, get) => ({
  phase: "menu",
  selected: OPERATORS[0].id,
  hp: 100,
  armor: OPERATORS[0].armor,
  ammo: 36,
  reserve: 180,
  score: 0,
  credits: 800,
  wave: 1,
  kills: 0,
  combo: 0,
  message: "Choose your division operator",
  objective: "Enter the Riftfall dungeon",
  anchors: initialAnchors,
  enemies: [],
  effects: [],
  trauma: 0,
  paused: false,
  quality: "ultra",
  difficulty: "standard",
  sound: true,
  tutorial: true,
  reloading: false,
  abilityCooldown: 0,
  abilityMax: 8,
  lastHit: 0,
  bossSpawned: false,
  select: selected => set({
    selected,
    armor: OPERATORS.find(operator => operator.id === selected)?.armor ?? 100
  }),
  deploy: () => {
    simulation.reset();
    set({
      phase: "playing",
      hp: 100,
      armor: OPERATORS.find(operator => operator.id === get().selected)?.armor ?? 100,
      ammo: 36,
      reserve: 180,
      score: 0,
      credits: 800,
      wave: 1,
      kills: 0,
      combo: 0,
      message: "Rift breach detected",
      objective: "Destroy the three corruption anchors",
      anchors: initialAnchors.map(anchor => ({ ...anchor })),
      enemies: [],
      effects: [],
      trauma: 0,
      paused: false,
      tutorial: true,
      reloading: false,
      abilityCooldown: 0,
      abilityMax: get().selected === "zenflow" ? 5.5 : 8,
      lastHit: 0,
      bossSpawned: false
    });
  },
  returnToMenu: () => {
    simulation.reset();
    set({
      phase: "menu",
      paused: false,
      enemies: [],
      effects: [],
      reloading: false,
      message: "Choose your division operator"
    });
  },
  togglePause: () => set(state => state.phase === "playing" ? { paused: !state.paused } : {}),
  damagePlayer: amount => set(state => {
    if (state.phase !== "playing" || state.paused) return {};
    const armorDamage = Math.min(state.armor, amount * 0.55);
    const hpDamage = amount - armorDamage * 0.65;
    const hp = Math.max(0, state.hp - hpDamage);
    return {
      hp,
      armor: Math.max(0, state.armor - armorDamage),
      trauma: Math.min(1, state.trauma + 0.3),
      message: hp <= 0 ? "Lattice signal lost" : state.message,
      phase: hp <= 0 ? "defeat" : state.phase
    };
  }),
  consumeAmmo: () => set(state => state.ammo > 0 ? { ammo: state.ammo - 1 } : {}),
  reload: () => {
    const state = get();
    if (state.reloading || state.ammo >= 36 || state.reserve <= 0 || state.phase !== "playing") return false;
    set({ reloading: true, message: "Cycling weapon lattice…" });
    window.setTimeout(() => {
      const current = get();
      if (!current.reloading || current.phase !== "playing") return;
      const need = 36 - current.ammo;
      const take = Math.min(need, current.reserve);
      set({
        ammo: current.ammo + take,
        reserve: current.reserve - take,
        reloading: false,
        message: "Weapon lattice reloaded"
      });
    }, 880);
    return true;
  },
  setEnemies: enemies => set({ enemies }),
  setEffects: effects => set({ effects }),
  hitEnemy: (id, damage) => set(state => {
    const enemy = state.enemies.find(unit => unit.id === id);
    if (!enemy) return {};
    const hp = enemy.hp - damage;
    if (hp > 0) return {
      enemies: state.enemies.map(unit => unit.id === id ? { ...unit, hp, hit: performance.now() } : unit),
      lastHit: performance.now()
    };
    const bossKill = enemy.type === "monarch";
    const enemies = bossKill ? [] : state.enemies.filter(unit => unit.id !== id);
    const allAnchorsSealed = state.anchors.every(anchor => anchor.hp <= 0);
    return {
      enemies,
      kills: state.kills + 1,
      combo: Math.min(9, state.combo + 1),
      score: state.score + (bossKill ? 10000 : 125 * Math.max(1, state.combo)),
      credits: state.credits + (bossKill ? 2500 : 150),
      trauma: Math.min(1, state.trauma + (bossKill ? 0.8 : 0.08)),
      lastHit: performance.now(),
      message: bossKill ? "RIFT MONARCH ANNIHILATED" : `${enemy.type.toUpperCase()} PURGED`,
      objective: bossKill ? "The Riftfall lattice is secure" : state.objective,
      phase: bossKill || (allAnchorsSealed && state.bossSpawned && enemies.length === 0) ? "victory" : state.phase
    };
  }),
  hitAnchor: (id, damage) => set(state => {
    const target = state.anchors.find(anchor => anchor.id === id);
    if (!target || target.hp <= 0) return {};
    const hp = Math.max(0, target.hp - damage);
    const anchors = state.anchors.map(anchor => anchor.id === id ? { ...anchor, hp } : anchor);
    const remaining = anchors.filter(anchor => anchor.hp > 0).length;
    return {
      anchors,
      score: state.score + (hp <= 0 ? 1000 : 10),
      credits: state.credits + (hp <= 0 ? 500 : 0),
      trauma: Math.min(1, state.trauma + (hp <= 0 ? 0.55 : 0.04)),
      message: hp <= 0 ? `ANCHOR ${id.toUpperCase()} SEALED` : state.message,
      lastHit: performance.now(),
      objective: remaining ? `Seal ${remaining} remaining corruption anchor${remaining === 1 ? "" : "s"}` : "Brace for the Rift Monarch"
    };
  }),
  decayTrauma: amount => set(state => ({ trauma: Math.max(0, state.trauma - amount) })),
  setQuality: quality => set({ quality }),
  setDifficulty: difficulty => set({ difficulty }),
  setSound: sound => set({ sound }),
  dismissTutorial: () => set({ tutorial: false }),
  setAbilityCooldown: (abilityCooldown, abilityMax) => set({ abilityCooldown, abilityMax })
}));
