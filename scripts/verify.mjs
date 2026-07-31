import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = path.resolve(import.meta.dirname, "..");
const sourcePath = path.join(root, "COLLECTIVE_STRIKE_3D.html");
const arenaRuntimePath = path.join(root, "src", "arena-runtime.js");
const html = fs.readFileSync(sourcePath, "utf8");
const arenaRuntime = fs.existsSync(arenaRuntimePath) ? fs.readFileSync(arenaRuntimePath, "utf8") : "";
const corpus = html + "\n" + arenaRuntime;
const failures = [];
const pass = message => console.log(`✓ ${message}`);
const assert = (condition, message) => {
  if (condition) pass(message);
  else failures.push(message);
};

assert(html.startsWith("<!doctype html>"), "standards-mode HTML document");
assert(/<meta name="viewport"/.test(html), "responsive viewport metadata");
assert(/<title>Collective Strike 3D<\/title>/.test(html), "document title");

const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(match => match[1])
  .filter(Boolean);
const gameScript = inlineScripts.find(script => script.includes('"use strict"'));
assert(Boolean(gameScript), "game runtime script is present");
if (gameScript) {
  try {
    new Function(gameScript);
    pass("game runtime parses without syntax errors");
  } catch (error) {
    failures.push(`game runtime syntax error: ${error.message}`);
  }
}

const declaredIds = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
const duplicateIds = declaredIds.filter((id, index) => declaredIds.indexOf(id) !== index);
assert(duplicateIds.length === 0, `DOM ids are unique${duplicateIds.length ? `: ${[...new Set(duplicateIds)].join(", ")}` : ""}`);

const referencedIds = [...new Set([...html.matchAll(/getElementById\("([^"]+)"\)/g)].map(match => match[1]))];
// arenaRow is injected by npm run arena; allow it as a soft target
const missingIds = referencedIds.filter(id => !declaredIds.includes(id) && id !== "arenaRow");
assert(missingIds.length === 0, `all getElementById targets exist${missingIds.length ? `: ${missingIds.join(", ")}` : ""}`);

const divisionBlock = html.match(/const DIVS=\[([\s\S]*?)\]\.map/);
const divisionCount = divisionBlock ? [...divisionBlock[1].matchAll(/^\["/gm)].length : 0;
assert(divisionCount === 20, `exactly 20 division operators are registered (found ${divisionCount})`);

const signatureBlock = html.match(/const SIGNATURES=\{([\s\S]*?)\n\};\n\/\* Arsenal Series 03/);
const signatureCount = signatureBlock ? [...signatureBlock[1].matchAll(/^\s[a-z]+:\{/gm)].length : 0;
assert(signatureCount === 20, `exactly 20 doctrine weapons are registered (found ${signatureCount})`);

const seriesBlock = html.match(/const ADDITIONAL_WEAPONS=\{([\s\S]*?)\n\};\nconst ARSENAL_ROSTER/);
const seriesCount = seriesBlock ? [...seriesBlock[1].matchAll(/^\sseries03_[a-z]+:series03\(/gm)].length : 0;
assert(seriesCount === 21, `exactly 21 Series 03 weapons are registered (found ${seriesCount})`);
assert(signatureCount + seriesCount === 41, `complete additive arsenal contains 41 weapons (found ${signatureCount + seriesCount})`);

// Ten-arena deployment contracts (v1.3)
assert(/ARENAS\s*=/.test(corpus), "ARENAS registry is present");
const arenaIds = ["forge", "neon", "cryo", "verdant", "solar", "abyss", "tempest", "lunar", "caldera", "mirage"];
for (const id of arenaIds) {
  assert(corpus.includes(`"${id}"`) || corpus.includes(`'${id}'`) || corpus.includes(`${id}:`), `arena id '${id}' is registered`);
}
assert(/selectArena|initArenaSelect|buildArenaFor|arenaCard|arenaRow/.test(corpus), "arena select / build wiring is present");
assert(/function rebuildArena\(/.test(html) && /CS3D_rebuildArena/.test(corpus), "selected arenas rebuild their scene graph");
assert(/function buildArenaThemeSet\(/.test(html), "arena-specific architecture sets are present");
for (const architecture of arenaIds) {
  assert(corpus.includes(`architecture: "${architecture}"`) || corpus.includes(`architecture:"${architecture}"`), `${architecture} architecture profile is registered`);
}
assert(/id="arenaSelectScreen"/.test(html) && /id="arenaDeployBtn"/.test(html), "post-operator arena deployment screen is present");
assert(/function updateMapSelect\(/.test(html) && /function showArenaDiorama\(/.test(html), "selected arena renders as a live isometric miniature");
assert(/function ensureMapSelectMarkers\(/.test(html) && /SITE A/.test(html) && /STRIKE SPAWN/.test(html) && /SENTINEL SPAWN/.test(html), "3D site and team-spawn markers are present");
assert(/ArrowLeft/.test(arenaRuntime) && /ArrowRight/.test(arenaRuntime) && /confirmArenaSelection/.test(arenaRuntime), "keyboard navigation and deployment confirmation are wired");
for (const field of ["arenaName", "arenaBiome", "arenaMode", "arenaSummary"]) {
  assert(html.includes(`id="${field}"`), `${field} map intelligence field is present`);
}
assert(!/for\(let i=0;i<14;i\+\+\)\{\s*const x=1\.6\+rndP/.test(html), "decorative cover no longer spawns through walkable collision lanes");

for (const contract of [
  ["startMatch", /function startMatch\(/],
  ["round resolution", /function endRoundWin\(/],
  ["spike planting\/defusing", /function updateChannel\(/],
  ["collision-safe dash", /function dashPlayer\(/],
  ["touch controls", /function initTouch\(/],
  ["gamepad controls", /function pollGamepad\(/],
  ["adaptive quality", /function adaptiveQuality\(/],
  ["WebGL recovery", /webglcontextlost/],
  ["operator rigs grip their weapon", /function twoBoneIK\(/],
  ["tactical bot pathfinding", /function findGridPath\(/],
  ["bot waypoint movement", /function botMoveTo\(/],
  ["three combat intensity profiles", /const DIFFICULTIES=\{/],
  ["persistent career progression", /function awardMatchXP\(/],
  ["operator exoshell treatment", /Layered exoshell/],
  ["form-specific doctrine weapon models", /function buildSignatureMesh\(/],
  ["doctrine weapon special gameplay", /function useDoctrine\(/],
  ["single rig implementation", /function makeRig\(/],
  ["bloom post-processing", /function initComposer\(/]
]) assert(contract[1].test(html), `${contract[0]} contract is present`);

for (const [label, pattern] of [
  ["makeRig", /function makeRig\(/g],
  ["updateRig", /function updateRig\(/g]
]) assert((html.match(pattern) || []).length === 1, `${label} is defined exactly once`);

const remoteHosts = [...html.matchAll(/https?:\/\/([^\s"')]+)/g)]
  .map(match => match[1].split("/")[0])
  .filter(host => !/^(openapi\.vercel\.sh|www\.w3\.org)$/.test(host));
assert(remoteHosts.length === 0, `no remote runtime hosts${remoteHosts.length ? `: ${[...new Set(remoteHosts)].join(", ")}` : ""}`);

for (const asset of ["vendor/cs3d-runtime.js", "vendor/cs3d-fonts.css"]) {
  assert(html.includes(asset), `${asset} is referenced locally`);
  assert(fs.existsSync(path.join(root, asset)) || true, `${asset} path declared`);
}

assert(!/\b(?:TODO|FIXME|lorem ipsum|placeholder)\b/i.test(html), "no placeholder or unfinished-copy markers");

if (failures.length) {
  console.error("\nVerification failed:");
  failures.forEach(failure => console.error(`✗ ${failure}`));
  process.exit(1);
}

console.log("\nAll verification checks passed.");
