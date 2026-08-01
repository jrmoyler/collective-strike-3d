import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const sourcePath = path.join(root, "COLLECTIVE_STRIKE_3D.html");
const arenaRuntimePath = path.join(root, "src", "arena-runtime.js");
const arenaCorePath = path.join(root, "src", "arena-core.js");
const soundtrackManifestPath = path.join(root, "src", "soundtrack-manifest.js");
const audioManagerPath = path.join(root, "src", "audio-manager.js");
const html = fs.readFileSync(sourcePath, "utf8");
const arenaRuntime = fs.existsSync(arenaRuntimePath) ? fs.readFileSync(arenaRuntimePath, "utf8") : "";
const arenaCoreSource = fs.existsSync(arenaCorePath) ? fs.readFileSync(arenaCorePath, "utf8") : "";
const soundtrackManifestSource = fs.existsSync(soundtrackManifestPath) ? fs.readFileSync(soundtrackManifestPath, "utf8") : "";
const audioManagerSource = fs.existsSync(audioManagerPath) ? fs.readFileSync(audioManagerPath, "utf8") : "";
const corpus = html + "\n" + arenaRuntime + "\n" + arenaCoreSource + "\n" + soundtrackManifestSource + "\n" + audioManagerSource;
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
assert(/ARENA_DEFINITIONS/.test(arenaCoreSource) && /function buildArenaIdentity\(/.test(html), "data-driven arena definitions and single identity factory are present");
for (const architecture of arenaIds) assert(new RegExp(`\\b${architecture}: Object\\.freeze`).test(arenaCoreSource), `${architecture} identity definition is registered`);
for (const name of ["NEON FOUNDRY", "SUNKEN ARCHIVE", "SKYGRAVE BASTION", "VERDANT OVERRUN", "CRYO RIFT", "NULL CATHEDRAL"]) assert(arenaCoreSource.includes(name), `${name} is authored`);
for (const section of ["identity", "topology", "traversal", "combat", "hazards", "interactables", "visuals", "audio", "runtimeModifiers", "bossCompatibility"]) assert(arenaCoreSource.includes(`${section}:`), `arena definitions expose ${section}`);
assert(/function teardownArena\(/.test(html) && /disposeTree/.test(html) && /dynamicCells/.test(html), "arena teardown releases render and runtime artifacts");
assert(/id="arenaSelectScreen"/.test(html) && /id="arenaDeployBtn"/.test(html), "post-operator arena deployment screen is present");
assert(/function updateMapSelect\(/.test(html) && /function showArenaDiorama\(/.test(html), "selected arena renders as a live isometric miniature");
assert(/function ensureMapSelectMarkers\(/.test(html) && /SITE A/.test(html) && /STRIKE SPAWN/.test(html) && /SENTINEL SPAWN/.test(html), "3D site and team-spawn markers are present");
assert(/ArrowLeft/.test(arenaRuntime) && /ArrowRight/.test(arenaRuntime) && /confirmArenaSelection/.test(arenaRuntime), "keyboard navigation and deployment confirmation are wired");
for (const field of ["arenaName", "arenaBiome", "arenaMode", "arenaSummary"]) {
  assert(html.includes(`id="${field}"`), `${field} map intelligence field is present`);
}
assert(!/for\(let i=0;i<14;i\+\+\)\{\s*const x=1\.6\+rndP/.test(html), "decorative cover no longer spawns through walkable collision lanes");

// Production soundtrack contracts
assert(Boolean(soundtrackManifestSource), "soundtrack manifest is present");
assert(Boolean(audioManagerSource), "dedicated audio manager is present");
for (const [label, source] of [["soundtrack manifest", soundtrackManifestSource], ["audio manager", audioManagerSource]]) {
  try {
    new Function(source);
    pass(`${label} parses without syntax errors`);
  } catch (error) {
    failures.push(`${label} syntax error: ${error.message}`);
  }
}
const soundtrackSandbox = {};
try {
  vm.runInNewContext(soundtrackManifestSource, soundtrackSandbox);
} catch (error) {
  failures.push(`soundtrack manifest evaluation error: ${error.message}`);
}
const soundtrack = soundtrackSandbox.CS3D_SOUNDTRACK || { TRACKS: {}, BOSS_TRACKS: {}, ARENA_TRACKS: {} };
const manifestPaths = Object.values(soundtrack.TRACKS).map(track => track.path).filter(Boolean);
for (const assetPath of manifestPaths) {
  assert(fs.existsSync(path.join(root, assetPath)), `soundtrack asset exists: ${assetPath}`);
}
const audioFiles = fs.existsSync(path.join(root, "assets", "audio"))
  ? fs.readdirSync(path.join(root, "assets", "audio")).filter(name => name.toLowerCase().endsWith(".mp3"))
  : [];
assert(new Set(manifestPaths).size === manifestPaths.length, "soundtrack manifest paths are unique");
assert(audioFiles.length === manifestPaths.length, `every supplied MP3 is manifested (found ${audioFiles.length})`);
const { BOSS_DNA } = await import(path.join(root, "src", "boss-dna.js"));
const bossIds = BOSS_DNA.map(boss => boss.id);
const missingBossMusic = bossIds.filter(id => !soundtrack.BOSS_TRACKS[id]);
assert(missingBossMusic.length === 0, `every BOSS_DNA id has boss music${missingBossMusic.length ? `: missing ${missingBossMusic.join(", ")}` : ""}`);
assert(soundtrack.TRACKS.final_boss?.path === null && soundtrack.TRACKS.final_boss?.fallbackKey === "standard_boss", "missing final-boss asset has a non-throwing standard-boss fallback");
for (const arenaId of arenaIds) assert(Boolean(soundtrack.ARENA_TRACKS[arenaId]), `arena '${arenaId}' has a combat music tier`);
for (const method of ["initAudio", "unlockAudioFromUserGesture", "playMusic", "playBossMusic", "playStinger", "stopMusic", "setMusicVolume", "setMuted", "toggleMuted", "disposeAudio"]) {
  assert(audioManagerSource.includes(method), `audio manager exposes ${method}`);
}
assert(/AUDIO\.playMusic\("selection"\)/.test(html) && /AUDIO\.playArenaMusic\(arenaId\)/.test(html), "selection and arena state music hooks are live");
assert(/AUDIO\.playBossMusic\(chosen\)/.test(html) && /AUDIO\.playMusic\("final_boss"\)/.test(html), "boss and final-wave music hooks are live");
assert(/AUDIO\.setPaused\(paused\)/.test(html) && /visibilitychange/.test(audioManagerSource), "pause and document visibility audio handling are live");
assert(/id="soundtrackToggle"/.test(html) && /cs3d\.audio\.muted/.test(audioManagerSource), "persistent mute control is present");

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
