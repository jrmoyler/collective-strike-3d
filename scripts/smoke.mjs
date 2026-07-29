/*
 * Boots the built game in headless Chromium, walks it from the operator select
 * screen into a live round, and captures screenshots. Fails on any console
 * error, page error, or failed network request.
 *
 *   node scripts/smoke.mjs [--out <dir>] [--division <id>]
 */
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import process from "node:process";
import { chromium } from "playwright-core";

const root = path.resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const argOf = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i === -1 ? fallback : args[i + 1];
};
const outDir = path.resolve(root, argOf("--out", "screenshots"));
const divisionIndex = Number(argOf("--division", "0"));
const arenaId = argOf("--arena", "verdant");
const captureGameplay = process.env.CS3D_CAPTURE_GAMEPLAY !== "0";
const compactSmoke = process.env.CS3D_COMPACT_SMOKE === "1";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".woff2": "font/woff2",
  ".png": "image/png"
};

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "") || "index.html";
  const file = path.join(root, "dist", rel);
  if (!file.startsWith(path.join(root, "dist")) || !fs.existsSync(file)) {
    res.writeHead(404).end("not found");
    return;
  }
  res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

fs.mkdirSync(outDir, { recursive: true });
const problems = [];
/* playwright-core ships no browsers, so point it at an installed Chromium.
   Set CS3D_CHROMIUM, or PLAYWRIGHT_BROWSERS_PATH to a Playwright browser pool. */
const resolveChromium = () => {
  const explicit = process.env.CS3D_CHROMIUM;
  if (explicit) {
    if (!fs.existsSync(explicit)) throw new Error(`CS3D_CHROMIUM points at a missing binary: ${explicit}`);
    return explicit;
  }
  const pool = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (pool && fs.existsSync(pool)) {
    const build = fs.readdirSync(pool).filter(entry => /^chromium(_headless_shell)?-\d+$/.test(entry)).sort().pop();
    for (const candidate of build ? [
      path.join(pool, build, "chrome-linux", "chrome"),
      path.join(pool, build, "chrome-linux", "headless_shell")
    ] : []) if (fs.existsSync(candidate)) return candidate;
  }
  for (const candidate of ["/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome"]) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error("No Chromium found. Set CS3D_CHROMIUM to a Chrome/Chromium binary.");
};

const browser = await chromium.launch({
  executablePath: resolveChromium(),
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"]
});
const page = await browser.newPage({ viewport: { width: 800, height: 500 } });

page.on("console", msg => {
  if (msg.type() === "error") problems.push(`console: ${msg.text()}`);
});
page.on("pageerror", error => problems.push(`pageerror: ${error.message}`));
page.on("requestfailed", request => problems.push(`request failed: ${request.url()}`));

try {
  console.log("smoke: loading game");
  await page.goto(`${origin}/index.html`, { waitUntil: "load" });
  await page.waitForFunction(() => document.getElementById("menu")?.style.display === "grid", { timeout: 30_000 });
  await page.waitForTimeout(1200);

  console.log(`smoke: selecting ${arenaId}`);
  const arena = page.locator(`[data-arena="${arenaId}"]`);
  if (await arena.count() !== 1) throw new Error(`arena card not found: ${arenaId}`);
  await arena.click();

  const cards = page.locator(".divCard");
  await cards.nth(divisionIndex).click();
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(outDir, "01-operator-select.png") });

  console.log("smoke: deploying operator");
  // SwiftShader has a much tighter framebuffer budget than a player GPU.
  // Preserve composer construction for validation while using direct rendering
  // and a conservative pixel ratio for the automated combat capture.
  await page.evaluate(() => {
    CFG.bloom = 0;
    qualityScale = 0.8;
    renderer.setPixelRatio(qualityScale);
    if (composer) composer.setPixelRatio(qualityScale);
  });
  await page.getByRole("button", { name: /deploy/i }).click();
  await page.waitForFunction(() => document.getElementById("hud")?.style.display === "block", { timeout: 20_000 });
  await page.waitForTimeout(2500);
  if (compactSmoke) {
    await page.evaluate(() => {
      const keep = new Set([players[0], players[1], players[5], players[6]]);
      for (const p of players.filter(player => !keep.has(player))) {
        p.alive = false;
        const rig = rigs.get(p.id);
        if (rig) scene.remove(rig.root);
        rigs.delete(p.id);
      }
      players = players.filter(player => keep.has(player));
    });
  }
  console.log("smoke: round booted");
  if (captureGameplay) await page.screenshot({ path: path.join(outDir, "02-round-start.png") });

  // Software-rendered frames are slow, so burn the remaining buy timer rather
  // than waiting out eight seconds of clamped delta time.
  await page.evaluate(() => { phaseT = 0.05; });
  await page.waitForFunction(() => phase === "live", { timeout: 60_000 });
  await page.waitForTimeout(1500);
  console.log("smoke: live combat");

  await page.mouse.move(640, 220);
  await page.keyboard.press("6");
  await page.evaluate(() => useDoctrine(me));
  await page.waitForTimeout(350);
  await page.keyboard.down("w");
  await page.waitForTimeout(1600);
  await page.keyboard.up("w");
  await page.mouse.down();
  await page.waitForTimeout(1200);
  if (captureGameplay) await page.screenshot({ path: path.join(outDir, "03-firing.png") });
  await page.mouse.up();

  await page.keyboard.press("r");
  await page.waitForTimeout(500);
  if (captureGameplay) await page.screenshot({ path: path.join(outDir, "04-reload.png") });

  await page.waitForTimeout(captureGameplay ? 7000 : 3200);
  if (captureGameplay) await page.screenshot({ path: path.join(outDir, "05-combat.png") });
  console.log("smoke: combat capture complete");
  await page.evaluate(() => {
    const now = performance.now() / 1000;
    for (const player of players) {
      player.reloadT = 0;
      player.revealT = now + 3;
      if (player.alive) updateRig(player, 0.016);
    }
  });

  const stats = await page.evaluate(() => ({
    calls: renderer.info.render.calls,
    triangles: renderer.info.render.triangles,
    rigs: rigs.size,
    bloom: Boolean(composer && bloomPass),
    vendorThree: window.CS3D_VENDOR?.three,
    phase,
    liveRound: round,
    doctrineCount: Object.keys(SIGNATURES).length,
    series03Count: Object.keys(ADDITIONAL_WEAPONS).length,
    arsenalCount: Object.keys(ARSENAL_ROSTER).length,
    doctrineForms: new Set(Object.values(ARSENAL_ROSTER).map(w => w.form)).size,
    equippedSeries03: me.cur.startsWith("series03_"),
    doctrineTriggered: me.doctrineT > performance.now() / 1000,
    holdingWeapon: [...rigs.values()].every(r => r.arms && r.arms.length === 2),
    maxSocketError: Math.max(...[...rigs.values()].flatMap(r => {
      r.root.updateMatrixWorld(true);
      const profile = r.weapon.userData.profile;
      const grip = new THREE.Vector3(...profile.grip).applyMatrix4(r.weapon.matrix);
      const fore = new THREE.Vector3(...profile.fore).applyMatrix4(r.weapon.matrix);
      return [r.arms[0].hand.position.distanceTo(grip), r.arms[1].hand.position.distanceTo(fore)];
    })),
    selectedArena: window.CS3D_selectedArenaId,
    builtArena: arenaGroup?.userData?.theme,
    arenaArchitectureProfiles: [...document.querySelectorAll(".arenaCard")].length,
    difficultyProfiles: Object.keys(DIFFICULTIES).length,
    pathfinderReady: typeof findGridPath === "function" && findGridPath({x:80,y:880},{x:240,y:160}).length > 0,
    careerProgressionReady: typeof awardMatchXP === "function" && Number.isFinite(careerLevel())
  }));
  console.log("runtime:", JSON.stringify(stats));
  if (!stats.holdingWeapon) problems.push("some rigs are missing weapon arms");
  if (stats.doctrineCount !== 20) problems.push(`expected 20 doctrine weapons, found ${stats.doctrineCount}`);
  if (stats.series03Count !== 21) problems.push(`expected 21 Series 03 weapons, found ${stats.series03Count}`);
  if (stats.arsenalCount !== 41) problems.push(`expected 41 total arsenal weapons, found ${stats.arsenalCount}`);
  if (stats.doctrineForms < 15) problems.push(`expected at least 15 doctrine forms, found ${stats.doctrineForms}`);
  if (!stats.equippedSeries03) problems.push("slot 6 did not equip a Series 03 weapon");
  if (!stats.doctrineTriggered) problems.push("Series 03 special did not trigger");
  if (!(stats.maxSocketError < 0.04)) problems.push(`weapon hand socket error too high: ${stats.maxSocketError}`);
  if (stats.selectedArena !== arenaId || stats.builtArena !== arenaId) problems.push(`arena mismatch: selected ${stats.selectedArena}, built ${stats.builtArena}, expected ${arenaId}`);
  if (stats.arenaArchitectureProfiles !== 4) problems.push(`expected 4 arena cards, found ${stats.arenaArchitectureProfiles}`);
  if (stats.difficultyProfiles !== 3) problems.push(`expected 3 difficulty profiles, found ${stats.difficultyProfiles}`);
  if (!stats.pathfinderReady) problems.push("bot pathfinding did not produce a route");
  if (!stats.careerProgressionReady) problems.push("career progression contract is not callable");
} catch (error) {
  problems.push(`flow: ${error.message}`);
  await page.screenshot({ path: path.join(outDir, "99-failure.png") }).catch(() => {});
} finally {
  server.closeAllConnections?.();
  await new Promise(resolve => server.close(resolve));
  // Some minimal headless-shell builds do not acknowledge Browser.close after
  // SwiftShader teardown. Do not let a successful smoke run hang indefinitely.
  await Promise.race([
    browser.close().catch(() => {}),
    new Promise(resolve => setTimeout(resolve, 3000))
  ]);
}

if (problems.length) {
  console.error("\nSmoke run reported problems:");
  for (const problem of [...new Set(problems)]) console.error(`✗ ${problem}`);
  process.exit(1);
}
console.log(`\nSmoke run clean. Screenshots in ${path.relative(root, outDir)}/`);
process.exit(0);
