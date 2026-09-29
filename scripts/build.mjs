import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "dist");
const vendor = path.join(root, "vendor", "cs3d-runtime.js");
const fonts = path.join(root, "vendor", "cs3d-fonts.css");
const browserSources = ["arena-runtime.js", "soundtrack-manifest.js", "audio-manager.js", "app-shell.js"];
const audioAssets = path.join(root, "assets", "audio");

for (const [file, script] of [[vendor, "npm run vendor"], [fonts, "npm run fonts"]]) {
  if (!fs.existsSync(file)) {
    console.error(`Missing ${path.relative(root, file)} - run \`${script}\` first.`);
    process.exit(1);
  }
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, "vendor"), { recursive: true });
fs.mkdirSync(path.join(out, "src"), { recursive: true });
fs.mkdirSync(path.join(out, "assets"), { recursive: true });
fs.copyFileSync(path.join(root, "COLLECTIVE_STRIKE_3D.html"), path.join(out, "index.html"));
fs.copyFileSync(vendor, path.join(out, "vendor", "cs3d-runtime.js"));
fs.copyFileSync(fonts, path.join(out, "vendor", "cs3d-fonts.css"));
for (const filename of browserSources) {
  const source = path.join(root, "src", filename);
  if (fs.existsSync(source)) fs.copyFileSync(source, path.join(out, "src", filename));
}
if (fs.existsSync(audioAssets)) {
  fs.cpSync(audioAssets, path.join(out, "assets", "audio"), { recursive: true });
}

// Installable app shell: manifest, icons, and a service worker stamped with
// this build's content id so an update replaces the previous offline cache.
fs.copyFileSync(path.join(root, "manifest.webmanifest"), path.join(out, "manifest.webmanifest"));
fs.cpSync(path.join(root, "assets", "icons"), path.join(out, "assets", "icons"), { recursive: true });
const shellFiles = fs.readdirSync(out, { recursive: true })
  .map(entry => entry.split(path.sep).join("/"))
  .filter(entry => fs.statSync(path.join(out, entry)).isFile() && !entry.startsWith("assets/audio/"))
  .sort();
const shellHash = createHash("sha256");
for (const file of shellFiles) { shellHash.update(file); shellHash.update("\0"); shellHash.update(fs.readFileSync(path.join(out, file))); }
const buildId = shellHash.digest("hex").slice(0, 12);
const indexPath = path.join(out, "index.html");
fs.writeFileSync(indexPath, fs.readFileSync(indexPath, "utf8").replace('<meta name="cs3d-build" content="source">', `<meta name="cs3d-build" content="${buildId}">`));
const precache = ["./", ...shellFiles];
const worker = fs.readFileSync(path.join(root, "sw.js"), "utf8")
  .replace('const BUILD_ID = "source";', `const BUILD_ID = ${JSON.stringify(buildId)};`)
  .replace('const PRECACHE = ["./", "index.html"];', `const PRECACHE = ${JSON.stringify(precache)};`);
if (!worker.includes(buildId)) { console.error("Service worker template markers changed; cannot stamp build id."); process.exit(1); }
fs.writeFileSync(path.join(out, "sw.js"), worker);

const bytes = fs.readdirSync(out, { recursive: true })
  .map(entry => path.join(out, entry))
  .filter(entry => fs.statSync(entry).isFile())
  .reduce((total, entry) => total + fs.statSync(entry).size, 0);

// Hash the actual shipped files so phone evidence can be bound to this build,
// including local authoring builds whose HEAD alone does not describe the files.
const hash=createHash('sha256');
for(const file of fs.readdirSync(out,{recursive:true}).sort()) {
  const full=path.join(out,file);if(!fs.statSync(full).isFile())continue;
  hash.update(file);hash.update('\0');hash.update(fs.readFileSync(full));
}
let commit=null;try{commit=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();}catch{}
fs.writeFileSync(path.join(out,'build-info.json'),JSON.stringify({commit,contentSha256:hash.digest('hex')},null,2));
console.log(`Built ${path.join(out, "index.html")} (${(bytes / 1024).toFixed(0)} kB total)`);
