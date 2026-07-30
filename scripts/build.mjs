import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "dist");
const vendor = path.join(root, "vendor", "cs3d-runtime.js");
const fonts = path.join(root, "vendor", "cs3d-fonts.css");
const arenaRuntime = path.join(root, "src", "arena-runtime.js");
const environmentCatalog = path.join(root, "src", "environment-catalog.js");
const environmentRuntime = path.join(root, "src", "environment-assets.js");
const environmentAssets = path.join(root, "assets", "environments");

for (const [file, script] of [
  [vendor, "npm run vendor"],
  [fonts, "npm run fonts"],
  [environmentCatalog, "npm run assets"]
]) {
  if (!fs.existsSync(file)) {
    console.error(`Missing ${path.relative(root, file)} - run \`${script}\` first.`);
    process.exit(1);
  }
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, "vendor"), { recursive: true });
fs.mkdirSync(path.join(out, "src"), { recursive: true });
fs.copyFileSync(path.join(root, "COLLECTIVE_STRIKE_3D.html"), path.join(out, "index.html"));
fs.copyFileSync(vendor, path.join(out, "vendor", "cs3d-runtime.js"));
fs.copyFileSync(fonts, path.join(out, "vendor", "cs3d-fonts.css"));
if (fs.existsSync(arenaRuntime)) {
  fs.copyFileSync(arenaRuntime, path.join(out, "src", "arena-runtime.js"));
}
fs.copyFileSync(environmentCatalog, path.join(out, "src", "environment-catalog.js"));
fs.copyFileSync(environmentRuntime, path.join(out, "src", "environment-assets.js"));
if (fs.existsSync(environmentAssets)) {
  fs.cpSync(environmentAssets, path.join(out, "assets", "environments"), {
    recursive: true
  });
}

const bytes = fs.readdirSync(out, { recursive: true })
  .map(entry => path.join(out, entry))
  .filter(entry => fs.statSync(entry).isFile())
  .reduce((total, entry) => total + fs.statSync(entry).size, 0);

console.log(`Built ${path.join(out, "index.html")} (${(bytes / 1024).toFixed(0)} kB total)`);
