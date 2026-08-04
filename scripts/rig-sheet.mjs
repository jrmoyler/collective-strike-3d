/*
 * Renders a close-up turntable frame of every division operator holding each
 * weapon class, so rig changes can be eyeballed without playing a match.
 *
 *   node scripts/rig-sheet.mjs [--out <dir>] [--weapon signature|series03|ascendant]
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
const outDir = path.resolve(root, argOf("--out", "screenshots/rigs"));
const weapon = argOf("--weapon", "signature");

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "") || "index.html";
  const file = path.join(root, "dist", rel);
  if (!file.startsWith(path.join(root, "dist")) || !fs.existsSync(file)) return res.writeHead(404).end();
  const type = rel.endsWith(".js") ? "text/javascript" : rel.endsWith(".css") ? "text/css" : "text/html";
  res.writeHead(200, { "content-type": type });
  fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

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

fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({
  executablePath: resolveChromium(),
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"]
});
const page = await browser.newPage({ viewport: { width: 1200, height: 760 } });
const errors = [];
page.on("pageerror", error => errors.push(error.message));

await page.addInitScript(() => localStorage.setItem("cs3d.settings.v2", JSON.stringify({ version: 2, tutorialCompleted: true })));
await page.goto(`${origin}/index.html`, { waitUntil: "load" });
// The game boots into the title briefing; step through it to reach operator select.
await page.waitForFunction(() => document.getElementById("titleScreen")?.classList.contains("on"), { timeout: 30_000 });
await page.click("#titleEnterBtn");
await page.waitForFunction(() => document.getElementById("menu")?.style.display === "grid", { timeout: 30_000 });

const ids = await page.evaluate(() => DIVS.map(d => d.id));
for (const id of ids) {
  await page.evaluate(([divId, wid]) => {
    window.__sheet = window.__sheet || {};
    const d = DIV_BY_ID[divId];
    if (preview) {
      const old = rigs.get(preview.id);
      if (old) { old.root.traverse(o => o.material?.dispose?.()); scene.remove(old.root); rigs.delete(preview.id); }
    }
    const addition = wid === "series03"
      ? availableAdditions(divId).find(w => w.series === "03" && w.owner === divId)
      : wid === "ascendant" ? ASCENDANT_WEAPONS[divId] : null;
    const key = addition?.id || wid;
    const equipped = wid === "signature" ? doctrineWeapon(divId) : addition ? additionalWeapon(addition.id) : { ...WEAPONS[wid], ammo: WEAPONS[wid].mag, reserve: 90 };
    preview = {
      id: "sheet_" + divId, team: myTeam, div: d, x: WORLD_W * .82, y: WORLD_H * .24,
      angle: 0, alive: true, cur: key,
      weapons: { [key]: equipped }, fireKick: 0
    };
    makeRig(preview, true);
    paused = false;
  }, [id, weapon]);
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    paused = true;
    // Face the capture camera (placed at +x*3.4,+z*1.7 from the pad) and settle one pose frame.
    preview.angle = Math.atan2(1.7, 3.4);
    updateRig(preview, 0.016);
    const r = rigs.get(preview.id);
    const fit = Math.max(.45, Math.min(2.4, 1.55 / Math.max(.5, r.fitR)));
    r.root.scale.setScalar(fit);
    r.mark.visible = false;
    const eye = r.fitR * fit, mid = r.fitY * fit;
    const target = new THREE.Vector3(WORLD_W * S * .82, mid, WORLD_H * S * .24);
    camera.position.set(target.x + eye * 3.4, mid + eye * 1.5, target.z + eye * 1.7);
    camera.lookAt(target);
    if (typeof composer !== "undefined" && composer) composer.render(); else renderer.render(scene, camera);
  });
  await page.screenshot({ path: path.join(outDir, `${id}-${weapon}.png`), clip: { x: 280, y: 30, width: 700, height: 700 } });
}

await browser.close();
server.close();
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Rendered ${ids.length} operator rigs with the ${weapon} into ${path.relative(root, outDir)}/`);
