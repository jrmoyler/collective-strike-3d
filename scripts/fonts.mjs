/*
 * Emits vendor/cs3d-fonts.css with the two game typefaces inlined as base64
 * woff2, so the shipped page renders its real typography with no request to
 * Google Fonts (or anywhere else).
 */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = path.resolve(import.meta.dirname, "..");
const outfile = path.join(root, "vendor", "cs3d-fonts.css");

const FACES = [
  { pkg: "@fontsource/space-grotesk", family: "Space Grotesk", slug: "space-grotesk", weights: [400, 500, 600, 700] },
  { pkg: "@fontsource/jetbrains-mono", family: "JetBrains Mono", slug: "jetbrains-mono", weights: [500, 700] }
];

const blocks = [];
for (const face of FACES) {
  for (const weight of face.weights) {
    const file = path.join(root, "node_modules", face.pkg, "files", `${face.slug}-latin-${weight}-normal.woff2`);
    if (!fs.existsSync(file)) {
      console.error(`Missing ${path.relative(root, file)} - run npm install.`);
      process.exit(1);
    }
    const data = fs.readFileSync(file).toString("base64");
    blocks.push(
      `@font-face{font-family:"${face.family}";font-style:normal;font-weight:${weight};font-display:swap;` +
      `src:url(data:font/woff2;base64,${data}) format("woff2");` +
      `unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}`
    );
  }
}

fs.mkdirSync(path.dirname(outfile), { recursive: true });
fs.writeFileSync(outfile, `/* Collective Strike 3D typography - regenerate with: npm run fonts */\n${blocks.join("\n")}\n`);
console.log(`Wrote ${path.relative(root, outfile)} (${blocks.length} faces, ${(fs.statSync(outfile).size / 1024).toFixed(0)} kB)`);
