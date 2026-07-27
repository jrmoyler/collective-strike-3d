#!/usr/bin/env node
/**
 * Deterministic multi-arena injector for COLLECTIVE_STRIKE_3D.html
 * Idempotent — safe to run multiple times.
 *
 * Usage: node scripts/apply-multi-arena.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const htmlPath = path.join(root, "COLLECTIVE_STRIKE_3D.html");
let html = fs.readFileSync(htmlPath, "utf8");
const before = html;

const CSS = `
#arenaRow{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:14px}
.arenaCard{padding:10px 12px;border-radius:8px;border:1px solid var(--line);background:linear-gradient(150deg,rgba(16,25,48,.88),rgba(6,10,22,.94));cursor:pointer;transition:transform .16s,border-color .16s,box-shadow .16s;min-height:72px;position:relative;overflow:hidden}
.arenaCard:before{content:"";position:absolute;inset:0;background:radial-gradient(180px 100px at 10% 0%,color-mix(in srgb,var(--ac) 22%,transparent),transparent 70%);opacity:.5;pointer-events:none}
.arenaCard:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--ac) 60%,transparent)}
.arenaCard.sel{border-color:var(--ac);box-shadow:0 0 0 1px color-mix(in srgb,var(--ac) 80%,transparent),0 12px 28px -12px var(--ac)}
.arenaCard .an{font-size:12px;font-weight:800;letter-spacing:.06em;position:relative}
.arenaCard .at{margin-top:3px;color:var(--muted);font-size:9px;letter-spacing:.14em;text-transform:uppercase;position:relative}
.arenaCard .ad{margin-top:6px;color:#d6deeb;font-size:9.5px;line-height:1.3;position:relative}
`;

const MARK_CSS = "/* multi-arena-css */";
const MARK_HTML = "<!-- multi-arena-html -->";
const MARK_SCRIPT = "<!-- multi-arena-script -->";
const MARK_INIT = "/* multi-arena-init */";
const MARK_SCENE = "/* multi-arena-scene */";
const MARK_INLINE = "/* multi-arena-inline */";

if (!html.includes(MARK_CSS)) {
  const anchor = ".teamBtn.sel{background:linear-gradient(180deg,rgba(212,168,67,.18),rgba(212,168,67,.06));color:var(--text)}";
  if (!html.includes(anchor)) throw new Error("CSS anchor missing");
  html = html.replace(anchor, anchor + "\n" + MARK_CSS + CSS);
  console.log("✓ injected arena CSS");
} else console.log("· arena CSS already present");

if (!html.includes(MARK_HTML)) {
  const anchor =
    `    <div id="teamRow">\n` +
    `      <button class="teamBtn sel" data-team="ATK"><b>Strike Unit</b>Plant pressure</button>\n` +
    `      <button class="teamBtn" data-team="DEF"><b>Sentinel Unit</b>Hold the grid</button>\n` +
    `    </div>\n` +
    `    <div class="secHead"><span>Select Division Operator</span><i></i></div>`;
  const replacement =
    `    <div id="teamRow">\n` +
    `      <button class="teamBtn sel" data-team="ATK"><b>Strike Unit</b>Plant pressure</button>\n` +
    `      <button class="teamBtn" data-team="DEF"><b>Sentinel Unit</b>Hold the grid</button>\n` +
    `    </div>\n` +
    `    ${MARK_HTML}\n` +
    `    <div class="secHead"><span>Select Arena</span><i></i></div>\n` +
    `    <div id="arenaRow"></div>\n` +
    `    <div class="secHead"><span>Select Division Operator</span><i></i></div>`;
  if (!html.includes(anchor)) throw new Error("HTML menu anchor missing");
  html = html.replace(anchor, replacement);
  console.log("✓ injected arena select markup");
} else console.log("· arena markup already present");

if (!html.includes(MARK_SCRIPT)) {
  const anchor = `<script src="vendor/cs3d-runtime.js"></script>`;
  if (!html.includes(anchor)) throw new Error("vendor script anchor missing");
  html = html.replace(
    anchor,
    anchor + `\n${MARK_SCRIPT}\n<script src="src/arena-runtime.js"></script>`
  );
  console.log("✓ injected arena-runtime script tag");
} else console.log("· arena-runtime script already present");

// Expose scene on window so arena-runtime can theme fog/background
if (!html.includes(MARK_SCENE)) {
  const anchor = "scene=new THREE.Scene();";
  if (!html.includes(anchor)) throw new Error("scene init anchor missing");
  html = html.replace(
    anchor,
    anchor + MARK_SCENE + "window.scene=scene;"
  );
  console.log("✓ exposed scene on window");
} else console.log("· scene already exposed");

// Inline ARENAS + selectedArenaId for verify contracts + local fallback
if (!html.includes(MARK_INLINE)) {
  const anchor =
    'const SITE_A={x:2,y:2,w:8,h:6,label:"A"},SITE_B={x:26,y:2,w:8,h:6,label:"B"},SPAWN_ATK={x:15,y:21,w:6,h:3},SPAWN_DEF={x:15,y:2,w:6,h:3};';
  if (!html.includes(anchor)) throw new Error("SITE anchor missing");
  const block =
    anchor +
    MARK_INLINE +
    "const ARENAS=window.CS3D_ARENAS||{};const ARENA_ORDER=window.CS3D_ARENA_ORDER||[\"forge\",\"neon\",\"cryo\",\"verdant\"];let selectedArenaId=window.CS3D_selectedArenaId||\"forge\";";
  html = html.replace(anchor, block);
  console.log("✓ inlined ARENAS registry hooks");
} else console.log("· ARENAS hooks already present");

if (!html.includes(MARK_INIT)) {
  const anchor = "function initMenu(){const grid=document.getElementById(\"divGrid\");";
  if (!html.includes(anchor)) throw new Error("initMenu anchor missing");
  html = html.replace(
    anchor,
    "function initMenu(){" + MARK_INIT + "if(window.initArenaSelect)window.initArenaSelect();const grid=document.getElementById(\"divGrid\");"
  );
  console.log("✓ wired initArenaSelect into initMenu");
} else console.log("· initArenaSelect already wired");

// Also theme on startMatch so deploy picks the selected arena
if (!html.includes("buildArenaFor(selectedArenaId)")) {
  const anchor = "function startMatch(){players=[];if(arenaGroup)arenaGroup.visible=true;";
  if (html.includes(anchor)) {
    html = html.replace(
      anchor,
      "function startMatch(){if(window.buildArenaFor)window.buildArenaFor(selectedArenaId||window.CS3D_selectedArenaId||\"forge\");players=[];if(arenaGroup)arenaGroup.visible=true;"
    );
    console.log("✓ wired buildArenaFor into startMatch");
  }
}

if (html === before) {
  console.log("No changes needed.");
  process.exit(0);
}

fs.writeFileSync(htmlPath, html);
console.log("\nWrote", path.relative(root, htmlPath), "(" + html.length + " bytes)");
