/*
 * Rasterises assets/icons/icon.svg into the PNG sizes the web app manifest and
 * iOS home-screen install need. The PNGs are committed, so this only has to run
 * when the SVG changes:  node scripts/icons.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright-core";
import { resolveChromium } from "./browser.mjs";

const root = path.resolve(import.meta.dirname, "..");
const dir = path.join(root, "assets", "icons");
const svg = fs.readFileSync(path.join(dir, "icon.svg"), "utf8");
const TARGETS = [
  ["icon-192.png", 192, 0],
  ["icon-512.png", 512, 0],
  ["icon-maskable-512.png", 512, 0.12],
  ["apple-touch-icon.png", 180, 0],
  ["favicon-32.png", 32, 0],
];

const browser = await chromium.launch({ executablePath: resolveChromium() });
const page = await browser.newPage();
for (const [name, size, inset] of TARGETS) {
  await page.setViewportSize({ width: size, height: size });
  const pad = Math.round(size * inset);
  await page.setContent(`<html><body style="margin:0;background:#03060e;width:${size}px;height:${size}px;overflow:hidden">
    <div style="position:absolute;inset:${pad}px">${svg.replace("<svg ", `<svg width="${size - pad * 2}" height="${size - pad * 2}" `)}</div></body></html>`);
  await page.screenshot({ path: path.join(dir, name), omitBackground: false });
  console.log(`wrote assets/icons/${name}`);
}
await browser.close();
