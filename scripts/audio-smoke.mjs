import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const manifestSource = fs.readFileSync(path.join(root, "src", "soundtrack-manifest.js"), "utf8");
const sandbox = {};
vm.runInNewContext(manifestSource, sandbox);

const soundtrack = sandbox.CS3D_SOUNDTRACK;
const failures = [];
let checked = 0;

for (const [trackKey, track] of Object.entries(soundtrack.TRACKS)) {
  if (!track.path) continue;
  const sourcePath = path.join(root, track.path);
  const builtPath = path.join(dist, track.path);
  if (!fs.existsSync(sourcePath) || !fs.existsSync(builtPath)) {
    failures.push(`${trackKey}: source or built MP3 is missing`);
    continue;
  }
  const sourceSize = fs.statSync(sourcePath).size;
  const builtSize = fs.statSync(builtPath).size;
  const headerBuffer = Buffer.alloc(3);
  const handle = fs.openSync(builtPath, "r");
  fs.readSync(handle, headerBuffer, 0, 3, 0);
  fs.closeSync(handle);
  const header = headerBuffer.toString("latin1");
  if (sourceSize !== builtSize) failures.push(`${trackKey}: build changed the MP3 byte length`);
  if (header !== "ID3" && !(header.charCodeAt(0) === 0xff && (header.charCodeAt(1) & 0xe0) === 0xe0)) {
    failures.push(`${trackKey}: built asset does not have an MP3 signature`);
  }
  checked++;
}

for (const browserFile of ["src/soundtrack-manifest.js", "src/audio-manager.js"]) {
  if (!fs.existsSync(path.join(dist, browserFile))) failures.push(`built ${browserFile} is missing`);
}

if (failures.length) {
  console.error("Audio smoke failed:");
  for (const failure of failures) console.error(`✗ ${failure}`);
  process.exit(1);
}

console.log(`Audio smoke passed: ${checked} byte-identical local MP3 assets are deployment-ready.`);
