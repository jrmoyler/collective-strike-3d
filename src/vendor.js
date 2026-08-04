/*
 * Collective Strike 3D - runtime dependency bundle.
 *
 * Pins three@0.185.x and animejs@4.5.x, exposes them on window so the
 * single-file game never reaches for a CDN. Anime v4 is published both as
 * the modern named API and a thin v3-compatible shim so existing UI
 * animations keep working while new code can use animate()/stagger().
 */
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { animate, createSpring, createTimeline, engine, stagger, utils, waapi } from "animejs";
import { BOSS_DNA, BOSS_BY_ID, BOSS_LOCO_CLASSES, resolveBossLocos } from "./boss-dna.js";
import { BOSS_ABILITIES, runBossAbility } from "./boss-abilities.js";
import { makeBossRig, updateBossRig } from "./boss-rig.js";
import {
  PLAYLISTS,
  buildWavePlan,
  canOccupyCircle,
  cellsForCircle,
  chooseRandomBoss,
  findBossSpawn,
  normalizeSquad,
  shouldStartApexChallenge
} from "./boss-mode.js";
import {
  ARENA_DEFINITIONS,
  ARENA_ORDER,
  ARENA_SIZE,
  arenaElevationAt,
  createArenaGrid,
  createSeededRandom,
  pointInZone,
  topologySignature,
  validateArenaDefinition,
  validateArenaRegistry
} from "./arena-core.js";
import { ARENA_ASSET_VERSION, buildArenaLandmark, buildExclusionReadability } from "./arena-assets.js";
import {
  arenaActorHeight,
  arenaBlockHeight,
  arenaLineClear,
  arenaObstacleAt,
  traceArenaSegment
} from "./arena-ballistics.js";
import {
  GAME_STATES,
  GameScheduler,
  LifecycleRegistry,
  QUALITY_PROFILES,
  QualityController,
  createGameStateMachine,
  recoverNavigationPath
} from "./game-runtime.js";
import { ACTIONS, DEFAULT_KEY_BINDINGS, GAMEPAD_BINDINGS, createActionInput, normalizeAxis } from "./input-actions.js";
import {
  CAREER_KEY,
  DEFAULT_CAREER,
  DEFAULT_SETTINGS,
  SAVE_VERSION,
  SETTINGS_KEY,
  loadCareer,
  loadSettings,
  resetCareer,
  resetSettings,
  saveCareer,
  saveSettings
} from "./persistence.js";

/* v3-compatible surface used by the existing HUD/menu animations */
function animeCompat(params) {
  if (!params || !params.targets) return null;
  const { targets, delay, duration, easing, complete, update, ...rest } = params;
  const opts = {
    ...rest,
    duration: duration ?? 1000,
    ease: easing || "outQuad",
    delay: typeof delay === "function" ? delay : (delay ?? 0),
    onComplete: complete,
    onUpdate: update
  };
  return animate(targets, opts);
}
animeCompat.stagger = stagger;
animeCompat.remove = (targets) => utils.remove(targets);

window.THREE = Object.freeze({
  ...THREE,
  EffectComposer,
  RenderPass,
  ShaderPass,
  UnrealBloomPass
});
window.anime = animeCompat;
window.animejs = Object.freeze({ animate, createSpring, createTimeline, engine, stagger, utils, waapi });
window.CS3D_VENDOR = {
  three: THREE.REVISION,
  anime: "4.5.0"
};
window.CS3D_BOSS = Object.freeze({
  BOSS_DNA,
  BOSS_BY_ID,
  BOSS_LOCO_CLASSES,
  BOSS_ABILITIES,
  PLAYLISTS,
  resolveBossLocos,
  runBossAbility,
  makeBossRig,
  updateBossRig,
  buildWavePlan,
  canOccupyCircle,
  cellsForCircle,
  chooseRandomBoss,
  findBossSpawn,
  normalizeSquad,
  shouldStartApexChallenge
});
window.CS3D_ARENA_SYSTEM = Object.freeze({
  ARENA_DEFINITIONS,
  ARENA_ORDER,
  ARENA_SIZE,
  arenaActorHeight,
  arenaBlockHeight,
  arenaElevationAt,
  arenaLineClear,
  arenaObstacleAt,
  createArenaGrid,
  createSeededRandom,
  pointInZone,
  topologySignature,
  traceArenaSegment,
  validateArenaDefinition,
  validateArenaRegistry
});
window.CS3D_ARENA_ASSETS = Object.freeze({
  version: ARENA_ASSET_VERSION,
  buildArenaLandmark,
  buildExclusionReadability
});
window.CS3D_RUNTIME = Object.freeze({
  GAME_STATES,
  GameScheduler,
  LifecycleRegistry,
  QUALITY_PROFILES,
  QualityController,
  createGameStateMachine,
  recoverNavigationPath
});
window.CS3D_INPUT = Object.freeze({ ACTIONS, DEFAULT_KEY_BINDINGS, GAMEPAD_BINDINGS, createActionInput, normalizeAxis });
window.CS3D_PERSISTENCE = Object.freeze({
  CAREER_KEY,
  DEFAULT_CAREER,
  DEFAULT_SETTINGS,
  SAVE_VERSION,
  SETTINGS_KEY,
  loadCareer,
  loadSettings,
  resetCareer,
  resetSettings,
  saveCareer,
  saveSettings
});
