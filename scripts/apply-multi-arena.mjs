#!/usr/bin/env node
/**
 * Validates and completes the offline ten-arena integration.
 *
 * The v1.3 deployment UI is authored in COLLECTIVE_STRIKE_3D.html because it
 * owns a complete screen rather than a small injected card row. This script
 * keeps the runtime/scene hooks deterministic and fails the build if the
 * authored deployment surface is accidentally removed.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const htmlPath = path.join(root, "COLLECTIVE_STRIKE_3D.html");
let html = fs.readFileSync(htmlPath, "utf8");
const before = html;

const required = [
  ["/* multi-arena-css */", "arena deployment CSS"],
  ["<!-- multi-arena-html -->", "arena deployment HTML marker"],
  ['id="arenaSelectScreen"', "post-operator arena screen"],
  ['id="arenaRow"', "ten-arena roster"],
  ['id="arenaDeployBtn"', "deployment confirmation"],
  ["function updateMapSelect(", "live isometric renderer"],
  ["function ensureMapSelectMarkers(", "site and spawn marker renderer"]
];
for (const [needle, label] of required) {
  if (!html.includes(needle)) throw new Error(`Missing ${label}: ${needle}`);
}

const SCRIPT_MARK = "<!-- multi-arena-script -->";
if (!html.includes(SCRIPT_MARK)) {
  const anchor = '<script src="vendor/cs3d-runtime.js"></script>';
  if (!html.includes(anchor)) throw new Error("Vendor script anchor missing");
  html = html.replace(anchor, `${anchor}\n${SCRIPT_MARK}\n<script src="src/arena-runtime.js"></script>`);
}

const SCENE_MARK = "/* multi-arena-scene */";
if (!html.includes(SCENE_MARK)) {
  const anchor = "scene=new THREE.Scene();";
  if (!html.includes(anchor)) throw new Error("Scene initialization anchor missing");
  html = html.replace(anchor, `${anchor}${SCENE_MARK}window.scene=scene;`);
}

const INLINE_MARK = "/* multi-arena-inline */";
if (!html.includes(INLINE_MARK)) {
  const anchor = 'const SITE_A={x:2,y:2,w:8,h:6,label:"A"},SITE_B={x:26,y:2,w:8,h:6,label:"B"},SPAWN_ATK={x:15,y:21,w:6,h:3},SPAWN_DEF={x:15,y:2,w:6,h:3};';
  if (!html.includes(anchor)) throw new Error("Site/spawn registry anchor missing");
  const ids = '["forge","neon","cryo","verdant","solar","abyss","tempest","lunar","caldera","mirage"]';
  html = html.replace(anchor, `${anchor}${INLINE_MARK}const ARENAS=window.CS3D_ARENAS||{};const ARENA_ORDER=window.CS3D_ARENA_ORDER||${ids};let selectedArenaId=window.CS3D_selectedArenaId||"forge";`);
}

const INIT_MARK = "/* multi-arena-init */";
if (!html.includes(INIT_MARK)) {
  const anchor = 'function initMenu(){const grid=document.getElementById("divGrid");';
  if (!html.includes(anchor)) throw new Error("Menu initialization anchor missing");
  html = html.replace(anchor, `function initMenu(){${INIT_MARK}if(window.initArenaSelect)window.initArenaSelect();const grid=document.getElementById("divGrid");`);
}

if (html !== before) {
  fs.writeFileSync(htmlPath, html);
  console.log(`Completed arena hooks in ${path.relative(root, htmlPath)}.`);
} else {
  console.log("Ten-arena deployment integration verified.");
}
