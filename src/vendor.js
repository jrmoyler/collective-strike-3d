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
import { animate, stagger, utils } from "animejs";

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
window.animejs = { animate, stagger, utils };
window.CS3D_VENDOR = {
  three: THREE.REVISION,
  anime: "4.5.0"
};
