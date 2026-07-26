import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { build } from "esbuild";

const root = path.resolve(import.meta.dirname, "..");
const entry = path.join(root, "src", "vendor.js");
const outfile = path.join(root, "vendor", "cs3d-runtime.js");

const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const BUNDLED = ["three", "animejs"];
const versions = BUNDLED.map(name => `${name}@${pkg.dependencies[name]}`).join(", ");

fs.mkdirSync(path.dirname(outfile), { recursive: true });

await build({
  entryPoints: [entry],
  outfile,
  bundle: true,
  format: "iife",
  platform: "browser",
  target: ["es2020"],
  minify: true,
  legalComments: "none",
  banner: { js: `/* Collective Strike 3D runtime bundle - ${versions} - regenerate with: npm run vendor */` }
});

const bytes = fs.statSync(outfile).size;
console.log(`Bundled ${versions} -> ${path.relative(root, outfile)} (${(bytes / 1024).toFixed(0)} kB)`);

if (bytes < 100_000) {
  console.error("Runtime bundle is suspiciously small; dependency resolution probably failed.");
  process.exit(1);
}
