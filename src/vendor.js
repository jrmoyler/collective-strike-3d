/*
 * Collective Strike 3D - runtime dependency bundle.
 *
 * The game ships as a single self-contained HTML document that expects the
 * renderer and the animation helper on `window`. This entry point pins those
 * dependencies to the versions in package.json, bundles them with esbuild, and
 * publishes them as globals so the game never reaches for a CDN at runtime.
 */
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import anime from "animejs";

window.THREE = Object.freeze({
  ...THREE,
  EffectComposer,
  RenderPass,
  ShaderPass,
  UnrealBloomPass
});
window.anime = anime;
window.CS3D_VENDOR = { three: THREE.REVISION };
