/*
 * Measured arena budget gate.
 *
 * Boots the built game in headless Chromium, walks it into a live round, and
 * for each requested arena rebuilds the scene, waits for shader/material
 * compilation and a stable frame, then reads the real WebGLRenderer counters.
 * Declared `userData` estimates are reported alongside as diagnostics only —
 * the pass/fail gate is always the measured value.
 *
 *   node scripts/arena-budget.mjs [--arenas forge,abyss] [--shots <dir>] [--report <file>]
 */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { chromium } from "playwright-core";
import { CHROMIUM_ARGS, directoryBytes, repoRoot, resolveChromium, serveDist } from "./browser.mjs";

const args = process.argv.slice(2);
const argOf = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i === -1 ? fallback : args[i + 1];
};
const arenaIds = argOf("--arenas", "forge,abyss").split(",").map(id => id.trim()).filter(Boolean);
const shotDir = path.resolve(repoRoot, argOf("--shots", "docs/arena-shots"));
const reportPath = path.resolve(repoRoot, argOf("--report", "docs/arena-shots/budget.json"));
const captureShots = process.env.CS3D_BUDGET_SHOTS !== "0";

/* Documented ceilings. Draw calls and triangles are whole-scene live-round
   figures — the arena share is reported separately so a regression can be
   attributed. Geometry and texture ceilings apply to the arena tree, which is
   the only thing an arena content pass owns. */
export const ARENA_BUDGET_CEILINGS = Object.freeze({
  directChildren: 180,
  liveDrawCalls: 620,
  liveTriangles: 420_000,
  arenaGeometries: 140,
  arenaTextures: 40,
  modelBytes: 12 * 1024 * 1024,
});

const problems = [];
const server = await serveDist();
fs.mkdirSync(shotDir, { recursive: true });
fs.mkdirSync(path.dirname(reportPath), { recursive: true });

const browser = await chromium.launch({ executablePath: resolveChromium(), args: CHROMIUM_ARGS });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on("console", message => { if (message.type() === "error") problems.push(`console: ${message.text()}`); });
page.on("pageerror", error => problems.push(`pageerror: ${error.message}`));

const measurements = [];
const modelBytes = directoryBytes("assets/models");
const textureBytes = directoryBytes("assets/textures");

try {
  await page.addInitScript(() => localStorage.setItem("cs3d.settings.v2", JSON.stringify({ version: 2, tutorialCompleted: true })));
  await page.goto(`${server.origin}/index.html`, { waitUntil: "load" });
  await page.waitForFunction(() => document.getElementById("titleScreen")?.classList.contains("on"), { timeout: 60_000 });
  await page.locator("#titleEnterBtn").click();
  await page.waitForFunction(() => document.getElementById("menu")?.style.display === "grid", { timeout: 60_000 });
  await page.locator(".divCard").first().click();
  await page.waitForTimeout(600);
  await page.locator("#deployBtn").click();
  await page.waitForFunction(() => document.getElementById("arenaSelectScreen")?.classList.contains("open"), { timeout: 60_000 });
  await page.evaluate(() => { CFG.bloom = 0; qualityScale = 1; renderer.setPixelRatio(1); composer?.setPixelRatio?.(1); });
  await page.locator(`[data-arena="${arenaIds[0]}"]`).click();
  await page.locator("#arenaDeployBtn").click();
  await page.waitForFunction(() => document.getElementById("hud")?.style.display === "block", { timeout: 60_000 });
  await page.evaluate(() => { phaseT = 0.05; });
  await page.waitForFunction(() => phase === "live", { timeout: 60_000 });
  await page.waitForTimeout(1500);

  for (const arenaId of arenaIds) {
    console.log(`budget: measuring ${arenaId}`);
    await page.evaluate(id => {
      window.CS3D_rebuildArena(id);
      // Compile every program the new arena needs before anything is timed.
      renderer.compile(scene, camera);
    }, arenaId);
    // Let the live round settle: several simulated frames, then a real one.
    for (let frame = 0; frame < 12; frame++) {
      await page.evaluate(() => { updateSim(0.016); updateRender(0.016); });
      await page.waitForTimeout(40);
    }
    await page.waitForTimeout(600);
    const measured = await page.evaluate(() => window.CS3D_arenaBudget());
    measured.modelBytes = modelBytes;
    measurements.push(measured);
    console.log(`  ${arenaId}:`, JSON.stringify(measured));

    if (!captureShots) continue;
    const shot = name => page.screenshot({ path: path.join(shotDir, `${arenaId}-${name}.png`) });
    await shot("01-gameplay");
    // Elevated three-quarter review view with the HUD out of the way, so the
    // shots can be read for false collision cues and silhouette clarity.
    await page.evaluate(() => {
      paused = true;
      document.getElementById("hud").style.display = "none";
      camera.position.set(WORLD_W * S * 0.5 - 46, 72, WORLD_H * S * 0.5 + 64);
      camera.lookAt(WORLD_W * S * 0.5, 3, WORLD_H * S * 0.5);
      drawScene();
    });
    await shot("02-overview");
    for (const [name, fraction] of [["03-hazard-telegraph", 0.55], ["04-hazard-active", 0.5]]) {
      await page.evaluate(({ fraction, active }) => {
        const entry = arenaRuntimeState.hazards[0];
        const value = entry.value;
        const offset = value.offset || 0;
        const target = active ? value.telegraph + value.active * fraction : value.telegraph * fraction;
        const cycle = value.telegraph + value.active + value.cooldown;
        arenaRuntimeState.elapsed = (target - offset + cycle * 4);
        paused = false;
        applyArenaVolumes(0.016, performance.now() / 1000);
        paused = true;
        drawScene();
      }, { fraction, active: name.includes("active") });
      await shot(name);
    }
    await page.evaluate(() => { paused = false; document.getElementById("hud").style.display = "block"; });
    await page.waitForTimeout(200);
  }
} catch (error) {
  problems.push(`flow: ${error.message}`);
  await page.screenshot({ path: path.join(shotDir, "99-budget-failure.png") }).catch(() => {});
} finally {
  await page.evaluate(() => window.CS3D_AUDIO?.disposeAudio?.()).catch(() => {});
  await Promise.race([browser.close().catch(() => {}), new Promise(resolve => setTimeout(resolve, 3000))]);
  await server.close();
}

for (const measured of measurements) {
  if (!measured) { problems.push("an arena reported no budget measurement"); continue; }
  const checks = [
    ["directChildren", measured.directChildren, ARENA_BUDGET_CEILINGS.directChildren],
    ["liveDrawCalls", measured.liveDrawCalls, ARENA_BUDGET_CEILINGS.liveDrawCalls],
    ["liveTriangles", measured.liveTriangles, ARENA_BUDGET_CEILINGS.liveTriangles],
    ["arenaGeometries", measured.arenaGeometries, ARENA_BUDGET_CEILINGS.arenaGeometries],
    ["arenaTextures", measured.arenaTextures, ARENA_BUDGET_CEILINGS.arenaTextures],
    ["modelBytes", measured.modelBytes, ARENA_BUDGET_CEILINGS.modelBytes],
  ];
  for (const [label, value, ceiling] of checks) {
    if (!(Number.isFinite(value) && value <= ceiling)) problems.push(`${measured.arena}: ${label} ${value} exceeds ceiling ${ceiling}`);
  }
  if (measured.phase !== "live") problems.push(`${measured.arena}: budget was not sampled during a live round (phase ${measured.phase})`);
}
if (measurements.length !== arenaIds.length) problems.push(`expected ${arenaIds.length} measured arenas, found ${measurements.length}`);

const report = { generated: "measured-live-round", ceilings: ARENA_BUDGET_CEILINGS, modelBytes, textureBytes, arenas: measurements, problems };
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(`\nbudget report written to ${path.relative(repoRoot, reportPath)}`);

if (problems.length) {
  console.error("\nArena budget gate failed:");
  for (const problem of [...new Set(problems)]) console.error(`✗ ${problem}`);
  process.exit(1);
}
console.log("Arena budget gate clean.");
process.exit(0);
