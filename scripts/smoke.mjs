/*
 * Boots the built game in headless Chromium, walks it from the title briefing
 * through operator select into a live round, and captures screenshots. Fails on
 * any console error, page error, or failed network request.
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
  ".png": "image/png",
  ".mp3": "audio/mpeg"
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
const requestedUrls = new Set();

await page.addInitScript(() => {
  window.addEventListener("unhandledrejection", event => console.error(`unhandled rejection: ${event.reason?.message || event.reason}`));
});

page.on("console", msg => {
  if (msg.type() === "error") problems.push(`console: ${msg.text()}`);
});
page.on("pageerror", error => problems.push(`pageerror: ${error.message}`));
page.on("requestfailed", request => {
  // Switching menu/selection/gameplay music intentionally aborts the previous
  // in-flight media request. Network/script/style failures remain fatal.
  if (request.resourceType() === "media" && /ERR_ABORTED/i.test(request.failure()?.errorText || "")) return;
  problems.push(`request failed: ${request.url()} (${request.failure()?.errorText || "unknown"})`);
});
page.on("request", request => requestedUrls.add(request.url()));

try {
  console.log("smoke: loading game");
  await page.goto(`${origin}/index.html`, { waitUntil: "load" });

  console.log("smoke: title screen and landing brief");
  await page.waitForFunction(() => document.getElementById("titleScreen")?.classList.contains("on"), { timeout: 30_000 });
  await page.waitForTimeout(900);
  const brief = await page.evaluate(() => ({
    state: gameState.state,
    menuHidden: document.getElementById("menu").style.display === "none",
    railSections: document.querySelectorAll(".tRailBtn").length,
    stats: document.querySelectorAll("#titleStats .tStat").length,
    spectrum: document.querySelectorAll("#titleSpectrum i").length,
    operators: document.querySelectorAll("#tOperatorCards .tCard").length,
    playlists: document.querySelectorAll("#tPlaylistCards .tCard").length,
    arenas: document.querySelectorAll("#tArenaCards .tCard").length,
    bosses: document.querySelectorAll("#tBossCards .tCard").length,
    difficulties: document.querySelectorAll("#tDifficultyCards .tCard").length,
    controls: document.querySelectorAll("#tControlKeys .tKey").length,
    doctrineRows: document.querySelectorAll("#tDoctrineTables .tTable tr").length - document.querySelectorAll("#tDoctrineTables .tTable").length,
    seriesRows: document.querySelectorAll("#tSeriesTables .tTable tr").length - document.querySelectorAll("#tSeriesTables .tTable").length,
    baseWeapons: document.querySelectorAll("#tWeaponCards .tCard").length,
    survivalPanels: document.querySelectorAll("#tSurvival .tStep").length,
    horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  }));
  console.log("title brief:", JSON.stringify(brief));
  if (brief.state !== "menu" || !brief.menuHidden) problems.push(`title screen did not hold the menu state: ${JSON.stringify(brief)}`);
  if (brief.railSections !== 9) problems.push(`expected 9 briefing sections, found ${brief.railSections}`);
  if (brief.stats !== 5 || brief.spectrum !== 20) problems.push(`title hero data is incomplete: ${JSON.stringify(brief)}`);
  if (brief.operators !== 20 || brief.arenas !== 10 || brief.bosses !== 12 || brief.playlists !== 3) problems.push(`landing roster panels are incomplete: ${JSON.stringify(brief)}`);
  if (brief.difficulties !== 3 || brief.controls < 10 || brief.doctrineRows !== 20) problems.push(`landing reference panels are incomplete: ${JSON.stringify(brief)}`);
  if (brief.seriesRows !== 41 || brief.baseWeapons !== 4 || brief.survivalPanels !== 4) problems.push(`landing arsenal or survivability panels are incomplete: ${JSON.stringify(brief)}`);
  if (brief.horizontalOverflow > 1) problems.push(`title screen has ${brief.horizontalOverflow}px horizontal overflow`);
  await page.screenshot({ path: path.join(outDir, "00-title.png") });

  for (const [width, height] of [[360, 800], [768, 1024], [1920, 1080]]) {
    await page.setViewportSize({ width, height });
    await page.waitForTimeout(90);
    const layout = await page.evaluate(height => {
      const cta = document.getElementById("titleEnterBtn").getBoundingClientRect();
      return {
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        ctaReachable: cta.width > 40 && cta.height >= 36 && cta.top >= -1 && cta.bottom <= height + 1,
      };
    }, height);
    if (layout.overflow > 1) problems.push(`${width}x${height} title has ${layout.overflow}px horizontal overflow`);
    if (!layout.ctaReachable) problems.push(`${width}x${height} title call to action is clipped`);
  }
  await page.setViewportSize({ width: 800, height: 500 });
  await page.waitForTimeout(90);

  await page.locator("#titleEnterBtn").click();
  await page.waitForFunction(() => document.getElementById("menu")?.style.display === "grid", { timeout: 30_000 });
  await page.waitForTimeout(1200);

  console.log("smoke: first-launch onboarding and responsive menu");
  const firstLaunch = await page.evaluate(() => ({
    open: document.getElementById("onboarding")?.classList.contains("on"),
    pages: TUTORIAL_PAGES.length,
    state: gameState.state,
    focus: document.activeElement?.id,
  }));
  if (!firstLaunch.open || firstLaunch.pages !== 4 || firstLaunch.state !== "operator-select") problems.push(`first-launch onboarding is incomplete: ${JSON.stringify(firstLaunch)}`);
  await page.keyboard.press("Tab");
  const focusedTag = await page.evaluate(() => document.activeElement?.tagName);
  if (focusedTag !== "BUTTON") problems.push(`keyboard navigation did not reach a button (focused ${focusedTag})`);
  await page.locator("#tutorialSkip").click();
  const tutorialSaved = await page.evaluate(() => JSON.parse(localStorage.getItem("cs3d.settings.v2") || "{}").tutorialCompleted === true);
  if (!tutorialSaved) problems.push("tutorial completion did not persist");

  const viewportProfiles = [];
  for (const [width, height] of [[360, 800], [390, 844], [768, 1024], [1366, 768], [1920, 1080], [2560, 1080]]) {
    await page.setViewportSize({ width, height });
    await page.waitForTimeout(80);
    viewportProfiles.push(await page.evaluate(({ width, height }) => {
      const deployButton = document.getElementById("deployBtn"), menu = document.getElementById("menu");
      deployButton?.scrollIntoView({ block: "center" });
      const deploy = deployButton?.getBoundingClientRect();
      const cards = [...document.querySelectorAll(".divCard")].map(card => card.getBoundingClientRect());
      const result = {
        width, height,
        horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        deployReachable: Boolean(deploy && deploy.width > 40 && deploy.height >= 36 && deploy.top >= -1 && deploy.bottom <= height + 1),
        minCardWidth: Math.min(...cards.map(card => card.width)),
        focusVisibleStyle: getComputedStyle(document.querySelector(".divCard")).outlineStyle,
      };
      menu.scrollTop = 0;
      return result;
    }, { width, height }));
  }
  console.log("responsive menu:", JSON.stringify(viewportProfiles));
  for (const profile of viewportProfiles) {
    if (profile.horizontalOverflow > 1) problems.push(`${profile.width}x${profile.height} menu has ${profile.horizontalOverflow}px horizontal overflow`);
    if (!profile.deployReachable || profile.minCardWidth < 120) problems.push(`${profile.width}x${profile.height} menu controls are clipped or unreadable`);
  }
  await page.setViewportSize({ width: 800, height: 500 });

  const cards = page.locator(".divCard");
  await cards.nth(divisionIndex).click();
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(outDir, "01-operator-select.png") });

  console.log("smoke: opening live arena selection");
  await page.locator("#deployBtn").click();
  await page.waitForFunction(() => document.getElementById("arenaSelectScreen")?.classList.contains("open") && phase === "mapselect", { timeout: 20_000 });
  const arenaCoverage = await page.evaluate((restoreId) => {
    const profiles = [];
    for (const id of window.CS3D_ARENA_ORDER) {
      const previousGroup = arenaGroup;
      window.selectArena(id);
      updateRender(0.016);
      let texturedMeshes = 0;
      let waterMeshes = 0;
      let fogVolumes = 0;
      const materialKinds = new Set();
      arenaGroup.traverse((object) => {
        if (object.userData?.waterSurface) waterMeshes++;
        if (object.userData?.fogVolume) fogVolumes++;
        if (!object.material) return;
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of materials) {
          materialKinds.add(material.type);
          if (material.map) texturedMeshes++;
        }
      });
      profiles.push({
        id,
        architecture: window.CS3D_ARENAS[id]?.architecture,
        identity: arenaGroup.userData.identity,
        silhouette: arenaGroup.userData.silhouette,
        topologySignature: arenaGroup.userData.topologySignature,
        landmarkType: arenaGroup.getObjectByName(`landmark-${window.CS3D_ARENA_DEFINITIONS[id].topology.landmark.type}`)?.userData.landmarkType,
        subspaces: arenaGroup.userData.subspaces,
        hazardCount: arenaGroup.userData.hazardCount,
        interactableCount: arenaGroup.userData.interactableCount,
        ballistics: arenaGroup.userData.ballistics,
        waterSurfaceCount: arenaGroup.userData.waterSurfaceCount,
        localFogVolumeCount: arenaGroup.userData.localFogVolumeCount,
        waterMeshes,
        fogVolumes,
        lifecycleReady: Boolean(arenaRuntimeState?.token && arenaRuntimeState.id === id),
        previousDetached: !previousGroup || previousGroup !== arenaGroup && previousGroup.parent === null,
        children: arenaGroup.children.length,
        animatedBits: worldBits.length,
        texturedMeshes,
        materialKinds: [...materialKinds]
      });
    }
    window.selectArena(restoreId);
    return profiles;
  }, arenaId);
  console.log("arena coverage:", JSON.stringify(arenaCoverage));
  if (arenaCoverage.length !== 10) problems.push(`expected 10 materialized arena profiles, found ${arenaCoverage.length}`);
  if (new Set(arenaCoverage.map(profile => profile.architecture)).size !== 10) problems.push("arena architecture profiles are not unique");
  if (new Set(arenaCoverage.map(profile => profile.topologySignature)).size !== 10) problems.push("arena collision footprints are not unique");
  if (new Set(arenaCoverage.map(profile => profile.landmarkType)).size !== 10) problems.push("arena landmarks are not unique");
  for (const profile of arenaCoverage) {
    if (!profile.identity || !profile.silhouette || profile.subspaces < 3) problems.push(`${profile.id} arena identity metadata is incomplete`);
    if (profile.hazardCount < 1 || profile.interactableCount < 1) problems.push(`${profile.id} arena lacks gameplay volumes`);
    if (profile.ballistics !== "height-field-v1") problems.push(`${profile.id} did not initialize height-field ballistics`);
    if (profile.waterSurfaceCount !== profile.waterMeshes) problems.push(`${profile.id} water simulation/render count diverged`);
    if (profile.localFogVolumeCount !== profile.fogVolumes) problems.push(`${profile.id} local fog simulation/render count diverged`);
    if (!profile.lifecycleReady || !profile.previousDetached) problems.push(`${profile.id} arena lifecycle did not replace and detach the previous scene`);
    if (profile.children < 28) problems.push(`${profile.id} arena scene is under-composed (${profile.children} root objects)`);
    if (profile.animatedBits < 7) problems.push(`${profile.id} arena has insufficient ambient motion (${profile.animatedBits} tracks)`);
    if (profile.materialKinds.length < 2) problems.push(`${profile.id} arena is missing material variety`);
  }
  const archiveProfile = arenaCoverage.find(profile => profile.id === "abyss");
  if (!archiveProfile || archiveProfile.waterMeshes < 2 || archiveProfile.fogVolumes < 1) problems.push("Sunken Archive is missing shader water or local mist volumes");

  console.log("smoke: arena content passes in the live scene graph");
  const contentPasses = await page.evaluate((restoreId) => {
    const passArenas = window.CS3D_ARENA_CONTENT.CONTENT_PASS_ARENAS;
    const report = { passes: [], generic: [] };
    for (const id of window.CS3D_ARENA_ORDER) {
      window.selectArena(id);
      const definition = window.CS3D_ARENA_DEFINITIONS[id];
      const proxies = [];
      const families = new Set();
      const atmosphere = [];
      let instancedFamilies = 0;
      arenaGroup.traverse(object => {
        if (object.userData?.collisionProxy) proxies.push({ visible: object.visible, height: object.userData.collisionHeight });
        if (object.userData?.contentFamily) families.add(object.userData.contentFamily);
        if (object.isInstancedMesh) instancedFamilies++;
        if (object.userData?.navigationClass === "non-colliding-atmosphere") atmosphere.push(object.count);
      });
      const bounds = window.CS3D_ARENA_CONTENT.playableBounds(definition, TILE * S);
      const entry = {
        id,
        hasPass: passArenas.includes(id),
        contentPass: arenaGroup.userData.contentPass || null,
        genericBackgroundCount: arenaGroup.userData.genericBackgroundCount,
        genericLivingSet: arenaGroup.userData.genericLivingSet,
        proxyCount: proxies.length,
        expectedProxies: definition.topology.blocks.length,
        proxiesInvisible: proxies.every(proxy => proxy.visible === false),
        proxiesVisible: proxies.every(proxy => proxy.visible === true),
        proxyHeights: proxies.every(proxy => Number.isFinite(proxy.height) && proxy.height > 0),
        families: [...families],
        instancedFamilies,
        atmosphereInstances: atmosphere.reduce((sum, count) => sum + count, 0),
        hazardBindings: arenaGroup.userData.hazardBindingIds || [],
        interactableBindings: arenaGroup.userData.interactableBindingIds || [],
        hazardIds: definition.hazards.map(hazard => hazard.id),
        interactableIds: definition.interactables.map(value => value.id),
        bounds,
      };
      (entry.hasPass ? report.passes : report.generic).push(entry);
    }
    window.selectArena(restoreId);
    return report;
  }, arenaId);
  console.log("content passes:", JSON.stringify(contentPasses.passes.map(entry => ({ id: entry.id, pass: entry.contentPass, families: entry.families.length, instanced: entry.instancedFamilies, atmosphere: entry.atmosphereInstances }))));
  if (contentPasses.passes.length !== 2) problems.push(`expected forge and abyss content passes, found ${contentPasses.passes.length}`);
  for (const entry of contentPasses.passes) {
    if (!entry.contentPass) problems.push(`${entry.id} did not integrate its content pass into the live arena`);
    if (entry.proxyCount !== entry.expectedProxies) problems.push(`${entry.id} lost collision proxies (${entry.proxyCount}/${entry.expectedProxies})`);
    if (!entry.proxiesInvisible) problems.push(`${entry.id} left an original block mesh visible under its replacement skin`);
    if (!entry.proxyHeights) problems.push(`${entry.id} dropped collisionHeight metadata from a skinned block`);
    if (entry.genericBackgroundCount !== 0) problems.push(`${entry.id} built a duplicate generic skyline alongside its authored one`);
    if (entry.genericLivingSet) problems.push(`${entry.id} built the generic living set alongside its content pass`);
    if (entry.instancedFamilies < 10) problems.push(`${entry.id} repeated kit families are not instanced (${entry.instancedFamilies})`);
    if (entry.atmosphereInstances < 18) problems.push(`${entry.id} background atmosphere is too sparse (${entry.atmosphereInstances})`);
    if (new Set(entry.hazardBindings).size !== entry.hazardBindings.length) problems.push(`${entry.id} hazard binding ids are not unique`);
    if (new Set(entry.interactableBindings).size !== entry.interactableBindings.length) problems.push(`${entry.id} interactable binding ids are not unique`);
    if (!entry.hazardBindings.every(id => entry.hazardIds.includes(id))) problems.push(`${entry.id} has a hazard binding with no authored hazard`);
    if (!entry.interactableBindings.every(id => entry.interactableIds.includes(id))) problems.push(`${entry.id} has an interactable binding with no authored volume`);
    if (entry.interactableBindings.length !== entry.interactableIds.length) problems.push(`${entry.id} did not bind every authored interactable`);
  }
  for (const entry of contentPasses.generic) {
    if (entry.contentPass) problems.push(`${entry.id} unexpectedly built a content pass`);
    if (entry.genericBackgroundCount !== 18 || !entry.genericLivingSet) problems.push(`${entry.id} lost its existing generic background or living set`);
    if (!entry.proxiesVisible) problems.push(`${entry.id} hid a collision block without a replacement skin`);
  }

  console.log("smoke: content-pass hazard and interactable state agreement");
  const stateAgreement = await page.evaluate((restoreId) => {
    const results = [];
    for (const id of window.CS3D_ARENA_CONTENT.CONTENT_PASS_ARENAS) {
      window.selectArena(id);
      gameState.recover(RUNTIME.GAME_STATES.LIVE, "smoke-content-state");
      phase = "live";
      const definition = window.CS3D_ARENA_DEFINITIONS[id];
      for (const hazard of definition.hazards) {
        for (const [label, at] of [["telegraph", hazard.telegraph * 0.5], ["active", hazard.telegraph + hazard.active * 0.5], ["cooldown", hazard.telegraph + hazard.active + 0.2]]) {
          const cycle = hazard.telegraph + hazard.active + hazard.cooldown;
          arenaRuntimeState.elapsed = at - (hazard.offset || 0) + cycle * 4;
          applyArenaVolumes(0.016, performance.now() / 1000);
          const entry = arenaRuntimeState.hazards.find(candidate => candidate.value.id === hazard.id);
          const expected = window.CS3D_ARENA_CONTENT.hazardPhaseAt(hazard, arenaRuntimeState.elapsed);
          results.push({
            id, hazard: hazard.id, label,
            simulation: entry.phase,
            expected,
            bindings: (entry.bindings || []).map(binding => binding.phase),
            planeOpacity: entry.view.mesh.material.opacity,
            fogOpacity: entry.view.volume ? entry.view.volume.material.uniforms.uOpacity.value : null,
          });
        }
      }
      // Conveyor / water flow is driven by the simulation clock only.
      const frozen = arenaRuntimeState.interactables.flatMap(entry => (entry.bindings || []).map(binding => binding.id));
      results.push({ id, hazard: null, label: "bindings", simulation: null, expected: null, bindings: frozen });
      gameState.recover(RUNTIME.GAME_STATES.ARENA_SELECT, "smoke-content-state-done");
      phase = "mapselect";
    }
    window.selectArena(restoreId);
    return results;
  }, arenaId);
  for (const entry of stateAgreement.filter(row => row.hazard)) {
    if (entry.simulation !== entry.expected) problems.push(`${entry.id}/${entry.hazard} simulation phase ${entry.simulation} disagrees with the authoritative ${entry.expected}`);
    if (entry.bindings.some(phase => phase !== entry.expected)) problems.push(`${entry.id}/${entry.hazard} visual binding did not follow the ${entry.expected} phase`);
    if (entry.label === "active" && !(entry.planeOpacity > 0.2)) problems.push(`${entry.id}/${entry.hazard} active plane did not brighten`);
    if (entry.label === "cooldown" && entry.planeOpacity > 0.2) problems.push(`${entry.id}/${entry.hazard} cooldown still reads as active`);
  }
  console.log("content state agreement:", JSON.stringify(stateAgreement.filter(row => row.hazard).map(row => `${row.id}/${row.hazard}:${row.label}=${row.simulation}`)));

  console.log("smoke: content-pass teardown stability");
  const teardownProfiles = await page.evaluate(() => {
    const samples = [];
    for (let attempt = 0; attempt < 4; attempt++) {
      for (const id of ["forge", "abyss"]) window.CS3D_rebuildArena(id);
      window.CS3D_rebuildArena("forge");
      updateRender(0.016);
      samples.push({
        geometries: renderer.info.memory.geometries,
        textures: renderer.info.memory.textures,
        listeners: appLifecycle.counts().listeners,
        schedulerJobs: gameScheduler.size,
        animations: worldBits.length,
        arenaChildren: arenaGroup.children.length,
      });
    }
    return samples;
  });
  console.log("teardown stability:", JSON.stringify(teardownProfiles));
  for (const field of ["listeners", "schedulerJobs", "animations", "arenaChildren"]) {
    if (new Set(teardownProfiles.map(sample => sample[field])).size !== 1) problems.push(`${field} drifted across repeated forge/abyss rebuilds: ${teardownProfiles.map(sample => sample[field]).join(", ")}`);
  }
  for (const field of ["geometries", "textures"]) {
    const values = teardownProfiles.slice(1).map(sample => sample[field]);
    if (Math.max(...values) - Math.min(...values) > 2) problems.push(`${field} grew across repeated forge/abyss rebuilds: ${values.join(", ")}`);
  }
  await page.evaluate((restoreId) => window.selectArena(restoreId), arenaId);
  const lifecycle = await page.evaluate((restoreId) => {
    window.selectArena("mirage");
    const barrier = window.CS3D_ARENA_DEFINITIONS.mirage.interactables.find(value => value.type === "phase-barrier");
    gameState.recover(RUNTIME.GAME_STATES.LIVE, "smoke-hazard");
    phase = "live";
    arenaRuntimeState.elapsed = barrier.telegraph + 0.05;
    applyArenaVolumes(0.016, performance.now() / 1000);
    const cell = { x: Math.floor(barrier.x), y: Math.floor(barrier.y) };
    const closesCollision = grid[cell.y][cell.x] === 1;
    const oldGroup = arenaGroup;
    const oldToken = arenaRuntimeState.token;
    window.CS3D_rebuildArena("mirage");
    const restartRestoresCollision = grid[cell.y][cell.x] === arenaBaseGrid[cell.y][cell.x] && grid[cell.y][cell.x] === 0;
    const sameMapReplaced = oldGroup !== arenaGroup && oldGroup.parent === null && oldToken !== arenaRuntimeState.token;
    gameState.recover(RUNTIME.GAME_STATES.ARENA_SELECT, "smoke-map-select");
    phase = "mapselect";
    window.selectArena(restoreId);
    return { closesCollision, restartRestoresCollision, sameMapReplaced, runtimeId: arenaRuntimeState.id };
  }, arenaId);
  console.log("arena lifecycle:", JSON.stringify(lifecycle));
  if (!lifecycle.closesCollision) problems.push("Null Cathedral phase barrier did not change collision");
  if (!lifecycle.restartRestoresCollision || !lifecycle.sameMapReplaced) problems.push("same-map restart left live arena artifacts");
  if (lifecycle.runtimeId !== arenaId) problems.push("arena runtime did not restore the selected identity after lifecycle validation");
  const arena = page.locator(`[data-arena="${arenaId}"]`);
  if (await arena.count() !== 1) throw new Error(`arena card not found: ${arenaId}`);
  await arena.click();
  await page.waitForFunction((id) => window.CS3D_selectedArenaId === id && arenaGroup?.userData?.theme === id, arenaId);
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("ArrowLeft");
  const deploymentStats = await page.evaluate(() => ({
    phase,
    selectedArena: window.CS3D_selectedArenaId,
    builtArena: arenaGroup?.userData?.theme,
    arenaCards: document.querySelectorAll(".arenaCard").length,
    markerCount: mapSelectMarkers?.children.length || 0,
    markersVisible: Boolean(mapSelectMarkers?.visible),
    arenaVisible: Boolean(arenaGroup?.visible),
    metadataReady: ["arenaName", "arenaBiome", "arenaMode", "arenaSummary"].every(id => document.getElementById(id)?.textContent.trim()),
    deployVisible: document.getElementById("arenaDeployBtn")?.offsetParent !== null
  }));
  console.log("deployment:", JSON.stringify(deploymentStats));
  if (deploymentStats.phase !== "mapselect") problems.push(`expected mapselect phase, found ${deploymentStats.phase}`);
  if (deploymentStats.selectedArena !== arenaId || deploymentStats.builtArena !== arenaId) problems.push(`diorama mismatch: selected ${deploymentStats.selectedArena}, built ${deploymentStats.builtArena}, expected ${arenaId}`);
  if (deploymentStats.arenaCards !== 10) problems.push(`expected 10 arena cards, found ${deploymentStats.arenaCards}`);
  if (deploymentStats.markerCount !== 4 || !deploymentStats.markersVisible) problems.push("live diorama is missing site/spawn markers");
  if (!deploymentStats.arenaVisible || !deploymentStats.metadataReady || !deploymentStats.deployVisible) problems.push("arena deployment screen is incomplete");
  await page.screenshot({ path: path.join(outDir, "02-arena-select.png") });

  console.log("smoke: confirming arena deployment");
  // SwiftShader has a much tighter framebuffer budget than a player GPU.
  // Preserve composer construction for validation while using direct rendering
  // and a conservative pixel ratio for the automated combat capture.
  await page.evaluate(() => {
    CFG.bloom = 0;
    qualityScale = 0.8;
    renderer.setPixelRatio(qualityScale);
    if (composer) composer.setPixelRatio(qualityScale);
  });
  await page.locator("#arenaDeployBtn").click();
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
  if (captureGameplay) await page.screenshot({ path: path.join(outDir, "03-round-start.png") });

  const buyGate = await page.evaluate(() => {
    const hostile = players.find(player => player.alive && player.team !== me.team);
    const bot = players.find(player => player.alive && !player.human);
    const before = { hp: hostile.hp, ammo: curW(me).ammo, kills: players.reduce((sum, player) => sum + player.kills, 0), ability: me.abilityT, doctrine: me.doctrineT };
    fireWeapon(me, hostile.x, hostile.y);
    useAbility(me, hostile);
    useDoctrine(me, hostile);
    botThink(bot, 0.5);
    return { phase, hpStable: hostile.hp === before.hp, ammoStable: curW(me).ammo === before.ammo, killsStable: players.reduce((sum, player) => sum + player.kills, 0) === before.kills, cooldownsStable: me.abilityT === before.ability && me.doctrineT === before.doctrine, botIdle: !bot.target && bot.vx === 0 && bot.vy === 0 };
  });
  if (buyGate.phase !== "buy" || !buyGate.hpStable || !buyGate.ammoStable || !buyGate.killsStable || !buyGate.cooldownsStable || !buyGate.botIdle) problems.push(`buy phase allowed combat: ${JSON.stringify(buyGate)}`);

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
  if (captureGameplay) await page.screenshot({ path: path.join(outDir, "04-firing.png") });
  await page.mouse.up();

  await page.keyboard.press("r");
  await page.waitForTimeout(500);
  if (captureGameplay) await page.screenshot({ path: path.join(outDir, "05-reload.png") });

  console.log("smoke: pause freeze, reduced motion, and gamepad hot-plug");
  const beforePause = await page.evaluate(() => ({ elapsed: arenaRuntimeState?.elapsed, phaseT, jobs: gameScheduler.size }));
  await page.keyboard.press("Escape");
  await page.waitForFunction(() => paused && gameState.state === "paused");
  await page.waitForTimeout(350);
  const duringPause = await page.evaluate(() => ({ elapsed: arenaRuntimeState?.elapsed, phaseT, jobs: gameScheduler.size, audioPaused: window.CS3D_AUDIO.getState().paused }));
  if (Math.abs(duringPause.elapsed - beforePause.elapsed) > 0.001 || Math.abs(duringPause.phaseT - beforePause.phaseT) > 0.001) problems.push("pause did not freeze hazards and objective timers");
  if (!duringPause.audioPaused) problems.push("pause did not suspend soundtrack playback");
  await page.keyboard.press("Escape");
  await page.waitForFunction(() => !paused && gameState.state === "live");

  const inputChecks = await page.evaluate(() => {
    SETTINGS.reducedMotion = true;
    shakeAmt = 0;
    addShake(1);
    const reducedMotionStopsShake = shakeAmt === 0;
    SETTINGS.reducedMotion = false;
    const buttons = Array.from({ length: 16 }, () => ({ pressed: false, value: 0 }));
    const gamepad = { index: 0, id: "Smoke Standard Gamepad", mapping: "standard", axes: [0, 0, 0.5, 0], buttons };
    Object.defineProperty(navigator, "getGamepads", { configurable: true, value: () => [gamepad] });
    const connected = new Event("gamepadconnected");
    Object.defineProperty(connected, "gamepad", { value: gamepad });
    window.dispatchEvent(connected);
    curW(me).ammo = Math.max(0, curW(me).mag - 2);
    me.reloadT = 0;
    buttons[3].pressed = true;
    pollGamepad(0.016);
    const reloadMapped = me.reloadT > 0;
    buttons[3].pressed = false;
    pollGamepad(0.016);
    const disconnected = new Event("gamepaddisconnected");
    Object.defineProperty(disconnected, "gamepad", { value: gamepad });
    window.dispatchEvent(disconnected);
    return { reducedMotionStopsShake, reloadMapped, trackedAfterDisconnect: actionInput.gamepads.length, mode: actionInput.mode };
  });
  console.log("input checks:", JSON.stringify(inputChecks));
  if (!inputChecks.reducedMotionStopsShake || !inputChecks.reloadMapped || inputChecks.trackedAfterDisconnect !== 0) problems.push(`input/accessibility validation failed: ${JSON.stringify(inputChecks)}`);

  await page.waitForTimeout(captureGameplay ? 7000 : 3200);
  if (captureGameplay) await page.screenshot({ path: path.join(outDir, "06-combat.png") });
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
    series03Count: Object.values(ADDITIONAL_WEAPONS).filter(w => w.series === "03").length,
    ascendantCount: Object.values(ADDITIONAL_WEAPONS).filter(w => w.series === "ASCENDANT").length,
    additionalCount: Object.keys(ADDITIONAL_WEAPONS).length,
    arsenalCount: Object.keys(ARSENAL_ROSTER).length,
    doctrineForms: new Set(Object.values(ARSENAL_ROSTER).map(w => w.form)).size,
    equippedSeries03: me.cur.startsWith("series03_"),
    doctrineTriggered: me.doctrineT > performance.now() / 1000,
    holdingWeapon: [...rigs.values()].every(r => r.arms && r.arms.length === 2),
    maxSocketError: Math.max(...players.filter(player => player.alive).map(player => rigs.get(player.id)).filter(Boolean).flatMap(r => {
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
  if (stats.ascendantCount !== 20 || stats.additionalCount !== 41) problems.push(`expected 20 Ascendant and 41 additional weapons, found ${stats.ascendantCount} and ${stats.additionalCount}`);
  if (stats.arsenalCount !== 61) problems.push(`expected 61 total doctrine weapons, found ${stats.arsenalCount}`);
  if (stats.doctrineForms < 15) problems.push(`expected at least 15 doctrine forms, found ${stats.doctrineForms}`);
  if (!stats.equippedSeries03) problems.push("slot 6 did not equip a Series 03 weapon");
  if (!stats.doctrineTriggered) problems.push("Series 03 special did not trigger");
  // Animated non-humanoid rigs have short arms and can resolve just under ten
  // centimeters off an unreachable secondary grip while still visibly holding
  // the weapon. Detached weapons miss by multiples of this tolerance.
  if (!(stats.maxSocketError < 0.1)) problems.push(`weapon hand socket error too high: ${stats.maxSocketError}`);
  if (stats.selectedArena !== arenaId || stats.builtArena !== arenaId) problems.push(`arena mismatch: selected ${stats.selectedArena}, built ${stats.builtArena}, expected ${arenaId}`);
  if (stats.arenaArchitectureProfiles !== 10) problems.push(`expected 10 arena cards, found ${stats.arenaArchitectureProfiles}`);
  if (stats.difficultyProfiles !== 3) problems.push(`expected 3 difficulty profiles, found ${stats.difficultyProfiles}`);
  if (!stats.pathfinderReady) problems.push("bot pathfinding did not produce a route");
  if (!stats.careerProgressionReady) problems.push("career progression contract is not callable");

  console.log("smoke: planting and defusing objective");
  const objectiveState = await page.evaluate(() => {
    // The live-combat sampling above may legitimately resolve a round. Rebuild
    // through the public restart path so this scenario always begins with the
    // full deterministic roster and exercises the real restart cleanup.
    window.CS3D_restartMatch();
    const attacker = me.team === "ATK" ? me : players.find(player => player.team === "ATK");
    const defender = players.find(player => player.team === "DEF");
    if (!attacker || !defender) return { planted: false, defused: false, missingRoster: true, state: gameState.state, phase };
    gameState.recover(RUNTIME.GAME_STATES.LIVE, "smoke-objective");
    phase = "live";
    attacker.alive = true;
    defender.alive = true;
    attacker.x = (SITE_A.x + SITE_A.w / 2) * TILE;
    attacker.y = (SITE_A.y + SITE_A.h / 2) * TILE;
    bomb = { state: "carried", carrier: attacker, x: 0, y: 0, timer: 0, beepT: 0 };
    updateChannel(attacker, chanTime(attacker, true) + 0.01, true);
    const planted = bomb.state === "planted" && Boolean(spikeMesh);
    defender.x = bomb.x;
    defender.y = bomb.y;
    updateChannel(defender, chanTime(defender, false) + 0.01, true);
    return { planted, defused: bomb.state === "defused", state: gameState.state, phase };
  });
  if (!objectiveState.planted || !objectiveState.defused || objectiveState.state !== "round-end") problems.push(`plant/defuse flow failed: ${JSON.stringify(objectiveState)}`);

  console.log("smoke: validating boss runtime");
  const bossStats = await page.evaluate(() => {
    const playlistButtons = document.querySelectorAll(".playlistBtn").length;
    if (typeof startBossEncounter !== "function") {
      return { playlistButtons, runtimeReady: false };
    }
    startBossEncounter(myTeam, { source: "smoke", bossId: "loom_hydra" });
    phaseT = 0;
    updateSim(0.016);
    phaseT = 30;
    updateSim(0.016);
    updateRender(0.016);
    renderHUD();
    drawMinimap();
    const hpBefore = activeBoss?.hp || 0;
    if (activeBoss) damageBoss(activeBoss, activeBoss.maxHp * 0.36, me, { doctrine: true });
    const bossRig = activeBoss ? bossRigs.get(activeBoss.id) : null;
    return {
      playlistButtons,
      runtimeReady: Boolean(window.CS3D_BOSS?.PLAYLISTS),
      bossAlive: Boolean(activeBoss?.alive),
      bossId: activeBoss?.bossId,
      fullRig: Boolean(bossRig && !bossRig.stub && bossRig.parts?.length >= 10),
      hybridSegments: bossRig?.segments?.length || 0,
      occupancyCells: activeBoss ? bossOccupancyCells(activeBoss).length : 0,
      hudVisible: document.getElementById("bossHud")?.classList.contains("on") || false,
      hudName: document.getElementById("bossName")?.textContent || "",
      spawnValid: Boolean(activeBoss && bossCanOccupy(activeBoss, activeBoss.x, activeBoss.y)),
      maxHp: activeBoss?.maxHp || 0,
      phaseIndex: activeBoss?.phaseIndex || 0,
      phaseDamageApplied: Boolean(activeBoss && activeBoss.hp < hpBefore),
      reinforcements: players.filter(player => player.alive && player.team !== myTeam).length,
    };
  });
  console.log("boss runtime:", JSON.stringify(bossStats));
  if (bossStats.playlistButtons !== 3) problems.push(`expected 3 playlist choices, found ${bossStats.playlistButtons}`);
  if (!bossStats.runtimeReady) problems.push("boss runtime bundle is unavailable");
  if (!bossStats.bossAlive || bossStats.bossId !== "loom_hydra") problems.push("live boss encounter did not spawn LOOM HYDRA");
  if (!bossStats.fullRig || bossStats.hybridSegments !== 3) problems.push("boss mesh locomotion rig is incomplete");
  if (!(bossStats.occupancyCells > 1)) problems.push("boss collision does not occupy multiple cells");
  if (!bossStats.hudVisible || !/LOOM HYDRA/i.test(bossStats.hudName)) problems.push("boss HUD did not render the live boss");
  if (!bossStats.spawnValid) problems.push("boss spawned at an invalid collision position");
  if (bossStats.maxHp < 6000 || bossStats.phaseIndex < 1 || !bossStats.phaseDamageApplied || bossStats.reinforcements < 2) problems.push(`boss escalation is incomplete: ${JSON.stringify(bossStats)}`);

  console.log("smoke: conveyor push and water cost agree with their visuals");
  const volumeAgreement = await page.evaluate((restoreId) => {
    const results = { conveyors: [], water: [] };
    window.CS3D_rebuildArena("forge");
    gameState.recover(RUNTIME.GAME_STATES.LIVE, "smoke-volume-agreement");
    phase = "live";
    const subject = players.find(player => player.alive) || players[0];
    const home = { x: subject.x, y: subject.y };
    for (const lane of window.CS3D_ARENA_DEFINITIONS.forge.interactables.filter(value => value.type === "conveyor")) {
      const strip = arenaGroup.getObjectByName(`conveyor-flow-${lane.id}`);
      subject.x = (lane.x + lane.w / 2) * TILE;
      subject.y = (lane.y + lane.h / 2) * TILE;
      const before = { x: subject.x, y: subject.y };
      applyArenaVolumes(0.05, performance.now() / 1000);
      const moved = [subject.x - before.x, subject.y - before.y];
      const axis = Math.abs(lane.vector[0]) >= Math.abs(lane.vector[1]) ? 0 : 1;
      results.conveyors.push({
        id: lane.id,
        vector: [...lane.vector],
        visualSign: strip?.userData.flowSign ?? null,
        pushSign: Math.sign(moved[axis]),
        moved: moved[axis],
      });
    }
    subject.x = home.x;
    subject.y = home.y;

    window.CS3D_rebuildArena("abyss");
    gameState.recover(RUNTIME.GAME_STATES.LIVE, "smoke-volume-agreement");
    phase = "live";
    const swimmer = players.find(player => player.alive) || players[0];
    for (const pool of window.CS3D_ARENA_DEFINITIONS.abyss.interactables.filter(value => value.type === "water")) {
      const boundary = arenaGroup.getObjectByName(`water-boundary-${pool.id}`);
      swimmer.x = (pool.x + pool.w / 2) * TILE;
      swimmer.y = (pool.y + pool.h / 2) * TILE;
      const inside = arenaMovementMultiplier(swimmer);
      swimmer.x = (pool.x - 0.4) * TILE;
      const outsideWest = arenaMovementMultiplier(swimmer);
      swimmer.x = (pool.x + pool.w / 2) * TILE;
      swimmer.y = (pool.y + pool.h + 0.4) * TILE;
      const outsideSouth = arenaMovementMultiplier(swimmer);
      results.water.push({
        id: pool.id,
        authored: pool.movementMultiplier,
        inside,
        outsideWest,
        outsideSouth,
        visual: boundary?.userData.movementMultiplier ?? null,
      });
    }
    gameState.recover(RUNTIME.GAME_STATES.ARENA_SELECT, "smoke-volume-agreement-done");
    phase = "mapselect";
    window.CS3D_rebuildArena(restoreId);
    return results;
  }, arenaId);
  console.log("volume agreement:", JSON.stringify(volumeAgreement));
  for (const lane of volumeAgreement.conveyors) {
    if (lane.visualSign === null) problems.push(`${lane.id} has no flow strip in the live arena`);
    if (!(Math.abs(lane.moved) > 0)) problems.push(`${lane.id} applied no conveyor force`);
    if (lane.pushSign !== lane.visualSign) problems.push(`${lane.id} visual direction ${lane.visualSign} disagrees with the applied push ${lane.pushSign}`);
  }
  if (new Set(volumeAgreement.conveyors.map(lane => lane.visualSign)).size !== 2) problems.push("opposed conveyor lanes do not show opposite directions");
  for (const pool of volumeAgreement.water) {
    if (pool.inside !== pool.authored) problems.push(`${pool.id} did not apply its authored movement multiplier inside the volume`);
    if (pool.outsideWest !== 1 || pool.outsideSouth !== 1) problems.push(`${pool.id} movement cost leaked outside the authored volume`);
    if (pool.visual !== pool.authored) problems.push(`${pool.id} boundary visual advertises the wrong movement cost`);
  }

  console.log("smoke: restart stability and WebGL recovery");
  // The first rebuild after the boss probe also clears boss-only visibility
  // and shader state. Warm that transition once so restart stability compares
  // equivalent normal-round frames instead of a boss frame to round frames.
  await page.evaluate(() => {
    window.CS3D_restartMatch();
    fx.clear();
    updateRender(0.016);
  });
  await page.waitForTimeout(80);
  const restartProfiles = [];
  for (let restart = 0; restart < 3; restart++) {
    restartProfiles.push(await page.evaluate(() => {
      window.CS3D_restartMatch();
      fx.clear();
      updateRender(0.016);
      return window.CS3D_runtimeMetrics();
    }));
    await page.waitForTimeout(80);
  }
  console.log("restart metrics:", JSON.stringify(restartProfiles));
  const stableFields = ["renderLoops", "schedulerJobs", "inputListeners", "players", "rigs", "bossRigs", "tempMeshes", "arenaChildren", "hazards", "audioMediaElements"];
  for (const field of stableFields) if (new Set(restartProfiles.map(profile => profile[field])).size !== 1) problems.push(`${field} changed across three restarts: ${restartProfiles.map(profile => profile[field]).join(", ")}`);
  for (const field of ["drawCalls", "triangles"]) {
    const values = restartProfiles.map(profile => profile[field]);
    const tolerance = Math.max(3, Math.ceil(values[0] * 0.02));
    if (Math.max(...values) - Math.min(...values) > tolerance) problems.push(`${field} exceeded the 2% culling tolerance across three restarts: ${values.join(", ")}`);
  }
  if (restartProfiles.some(profile => profile.renderLoops !== 1 || profile.tempMeshes !== 0)) problems.push("restart left duplicate loops or temporary meshes");
  if (new Set(restartProfiles.map(profile => profile.arenaToken)).size !== 3) problems.push("restart did not reconstruct the selected arena exactly once per attempt");
  const lateGeometry = restartProfiles.slice(1).map(profile => profile.geometries);
  const lateTextures = restartProfiles.slice(1).map(profile => profile.textures);
  if (Math.max(...lateGeometry) - Math.min(...lateGeometry) > 2 || Math.max(...lateTextures) - Math.min(...lateTextures) > 2) problems.push("GPU object counts grew after restart stabilization");

  const contextLost = await page.evaluate(() => {
    const event = new Event("webglcontextlost", { cancelable: true });
    renderer.domElement.dispatchEvent(event);
    renderer.domElement.dispatchEvent(new Event("webglcontextrestored"));
    return { prevented: event.defaultPrevented, state: gameState.state, open: document.getElementById("contextRecovery").classList.contains("on") };
  });
  if (!contextLost.prevented || contextLost.state !== "context-lost" || !contextLost.open) problems.push(`WebGL recovery path failed: ${JSON.stringify(contextLost)}`);
  await page.locator("#contextRestartBtn").click();
  await page.waitForFunction(() => document.getElementById("hud")?.style.display === "block" && gameState.state === "buy");

  console.log("smoke: death, spectating, results, rematch, and menu cleanup");
  console.log("smoke: survivability baseline");
  const survivability = await page.evaluate(() => {
    phaseT = 0;
    updateSim(0.016);
    const enemy = players.find(player => player.alive && player.team !== me.team);
    const guardActive = me.spawnGuardUntil > performance.now() / 1000;
    me.hp = maxHp(me);
    me.armor = 0;
    damage(me, 9999, enemy);
    const shielded = me.hp === maxHp(me) && me.alive;
    /* One real hit through damage() gives the true post-resilience figure; the shot
       counts are derived from it so the probe never actually kills the player. */
    me.spawnGuardUntil = 0;
    const before = me.hp;
    damage(me, WEAPONS.rifle.dmg, enemy);
    const perRifleShot = before - me.hp;
    me.hp = maxHp(me);
    const perRailgunShot = perRifleShot / WEAPONS.rifle.dmg * WEAPONS.sniper.dmg;
    return {
      guardActive, shielded, maxHp: maxHp(me), resilience: playerResilience(),
      rifleShots: Math.ceil(maxHp(me) / perRifleShot),
      railgunShots: Math.ceil(maxHp(me) / perRailgunShot),
    };
  });
  console.log("survivability:", JSON.stringify(survivability));
  if (!survivability.guardActive || !survivability.shielded) problems.push(`deployment shield did not cover the opening seconds: ${JSON.stringify(survivability)}`);
  if (survivability.rifleShots < 7) problems.push(`player still dies in ${survivability.rifleShots} rifle shots`);
  if (survivability.railgunShots < 2) problems.push("a single Railgun hit still eliminates the player");

  await page.evaluate(() => { me.alive = true; me.hp = 1; me.armor = 0; me.spawnGuardUntil = 0; const enemy = players.find(player => player.alive && player.team !== me.team); damage(me, 9999, enemy); updateRender(0.016); renderHUD(); });
  const deathState = await page.evaluate(() => ({ alive: me.alive, state: gameState.state, spectateVisible: document.getElementById("spectate").style.display === "block", selected: ui.spectateId }));
  if (deathState.alive || deathState.state !== "spectating" || !deathState.spectateVisible || !deathState.selected) problems.push(`death/spectating flow failed: ${JSON.stringify(deathState)}`);
  await page.evaluate(() => { window.CS3D_restartMatch(); phaseT = 0; updateSim(0.016); scoreATK = myTeam === "ATK" ? FIRST_TO : 0; scoreDEF = myTeam === "DEF" ? FIRST_TO : 0; endGame(); });
  await page.waitForFunction(() => document.getElementById("endScreen")?.style.display === "grid" && gameState.state === "results");
  const reportState = await page.evaluate(() => ({ stats: document.querySelectorAll("#endStats .resultStat").length, contracts: document.querySelectorAll("#endContracts .contract").length, rank: document.getElementById("operationSummary").textContent, next: document.getElementById("nextOperationBtn").offsetParent !== null, arena: document.getElementById("changeArenaBtn").offsetParent !== null }));
  if (reportState.stats !== 5 || reportState.contracts !== 3 || !/OPERATION RANK/.test(reportState.rank) || !reportState.next || !reportState.arena) problems.push(`after-action report is incomplete: ${JSON.stringify(reportState)}`);
  if (captureGameplay) await page.screenshot({ path: path.join(outDir, "07-results.png") });
  await page.locator("#rematchBtn").click();
  await page.waitForFunction(() => document.getElementById("hud")?.style.display === "block" && gameState.state === "buy");
  const rematchState = await page.evaluate(() => ({ arena: window.CS3D_selectedArenaId, playlist: selectedPlaylist, division: myDiv.id, scoreATK, scoreDEF, players: players.length }));
  if (rematchState.arena !== arenaId || rematchState.playlist !== "standard" || rematchState.scoreATK !== 0 || rematchState.scoreDEF !== 0 || rematchState.players !== 10) problems.push(`rematch did not preserve intended selections: ${JSON.stringify(rematchState)}`);
  await page.locator("#quitBtn").evaluate(button => button.click()).catch(() => page.evaluate(() => window.CS3D_returnToMenu()));
  const menuCleanup = await page.evaluate(() => { if (phase !== "menu") window.CS3D_returnToMenu(); return window.CS3D_runtimeMetrics(); });
  if (menuCleanup.players !== 0 || menuCleanup.rigs !== 1 || menuCleanup.tempMeshes !== 0 || menuCleanup.schedulerJobs !== 0 || menuCleanup.state !== "operator-select") problems.push(`return-to-menu cleanup failed: ${JSON.stringify(menuCleanup)}`);

  console.log("smoke: wave mode transition");
  const waveState = await page.evaluate(() => {
    setPlaylist("wave");
    selectedSquad = DIVS.slice(0, 5).map(division => division.id);
    myDiv = DIVS[0];
    gameState.recover(RUNTIME.GAME_STATES.DEPLOYMENT, "smoke-wave-deploy");
    phase = "deployment";
    startMatch();
    phaseT = 0;
    updateSim(0.016);
    const firstWave = waveIndex;
    for (const enemy of [...players.filter(player => player.alive && player.team !== myTeam)]) kill(enemy, me);
    const transitionState = gameState.state;
    phaseT = 0;
    updateSim(0.016);
    return { planLength: wavePlan.length, firstWave, nextWave: waveIndex, transitionState, phase, state: gameState.state };
  });
  console.log("wave transition:", JSON.stringify(waveState));
  if (waveState.planLength < 2 || waveState.firstWave !== 0 || waveState.nextWave !== 1 || waveState.transitionState !== "round-end" || waveState.state !== "buy") problems.push(`wave transition failed: ${JSON.stringify(waveState)}`);
  await page.evaluate(() => window.CS3D_returnToMenu());

  console.log("smoke: touch-only mobile gameplay");
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  mobilePage.on("console", msg => { if (msg.type() === "error") problems.push(`mobile console: ${msg.text()}`); });
  mobilePage.on("pageerror", error => problems.push(`mobile pageerror: ${error.message}`));
  await mobilePage.addInitScript(() => localStorage.setItem("cs3d.settings.v2", JSON.stringify({ version: 2, tutorialCompleted: true, quality: "low" })));
  await mobilePage.goto(`${origin}/index.html`, { waitUntil: "load" });
  await mobilePage.waitForFunction(() => document.getElementById("titleScreen")?.classList.contains("on"), { timeout: 30_000 });
  const mobileTitle = await mobilePage.evaluate(() => ({
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    railHidden: getComputedStyle(document.getElementById("titleRail")).display === "none",
    ctaHeight: document.getElementById("titleEnterBtn").getBoundingClientRect().height,
  }));
  if (mobileTitle.overflow > 1 || !mobileTitle.railHidden || mobileTitle.ctaHeight < 44) problems.push(`mobile title layout failed: ${JSON.stringify(mobileTitle)}`);
  await mobilePage.screenshot({ path: path.join(outDir, "07-mobile-title.png") });
  await mobilePage.locator("#titleEnterBtn").tap();
  await mobilePage.waitForFunction(() => document.getElementById("menu")?.style.display === "grid", { timeout: 30_000 });
  await mobilePage.locator(".divCard").first().tap();
  await mobilePage.locator("#deployBtn").tap();
  await mobilePage.waitForFunction(() => document.getElementById("arenaSelectScreen")?.classList.contains("open"), { timeout: 30_000 });
  const mobileArena = await mobilePage.evaluate(() => {
    const actions = document.getElementById("arenaActions").getBoundingClientRect();
    const keys = [...document.querySelectorAll("#arenaNavLegend .navKey")];
    return {
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      actionsReachable: actions.left >= 0 && actions.right <= innerWidth && actions.top >= 0 && actions.bottom <= innerHeight,
      navKeys: keys.length,
      shapeKeys: keys.filter(key => {
        const icon = key.querySelector("i")?.getBoundingClientRect();
        return icon && icon.width >= 10 && icon.height >= 4;
      }).length,
    };
  });
  if (mobileArena.overflow > 1 || !mobileArena.actionsReachable || mobileArena.navKeys !== 3 || mobileArena.shapeKeys !== 3) problems.push(`mobile arena selection failed: ${JSON.stringify(mobileArena)}`);
  await mobilePage.screenshot({ path: path.join(outDir, "08-mobile-arena-select.png") });
  await mobilePage.locator("#arenaDeployBtn").tap();
  await mobilePage.waitForFunction(() => document.getElementById("hud")?.style.display === "block", { timeout: 30_000 });
  await mobilePage.evaluate(() => { phaseT = 0; updateSim(0.016); curW(me).ammo = Math.max(0, curW(me).mag - 2); me.reloadT = 0; });
  await mobilePage.locator('[data-action="reload"]').tap();
  const touchState = await mobilePage.evaluate(() => {
    const move = document.getElementById("movePad").getBoundingClientRect(), aim = document.getElementById("aimPad").getBoundingClientRect();
    const buttons = [...document.querySelectorAll(".touchBtn")].map(button => button.getBoundingClientRect());
    const overlaps = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
    const visibleRect = id => {
      const element = document.getElementById(id);
      return element && getComputedStyle(element).display !== "none" ? element.getBoundingClientRect() : null;
    };
    const overlays = [visibleRect("spikeMsg"), visibleRect("coachPrompt")].filter(Boolean);
    SETTINGS.touchLeftHanded = true; applyUserSettings();
    return {
      mode: actionInput.mode,
      reloadStarted: me.reloadT > 0,
      controlsVisible: getComputedStyle(document.getElementById("touchControls")).display !== "none",
      horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      minTarget: Math.min(...buttons.map(button => Math.min(button.width, button.height))),
      overlapsPads: buttons.some(button => overlaps(button, move) || overlaps(button, aim)),
      overlaysTouchTargets: overlays.some(overlay => buttons.some(button => overlaps(overlay, button)) || overlaps(overlay, move) || overlaps(overlay, aim)),
      leftHanded: document.body.classList.contains("touch-left"),
      orientationVisible: getComputedStyle(document.getElementById("orientationGuide")).display !== "none",
    };
  });
  console.log("mobile touch:", JSON.stringify(touchState));
  if (touchState.mode !== "touch" || !touchState.reloadStarted || !touchState.controlsVisible || touchState.horizontalOverflow > 1 || touchState.minTarget < 44 || touchState.overlapsPads || touchState.overlaysTouchTargets || !touchState.leftHanded || !touchState.orientationVisible) problems.push(`touch-only layout/input failed: ${JSON.stringify(touchState)}`);
  await mobilePage.screenshot({ path: path.join(outDir, "09-mobile-gameplay.png") });
  await mobilePage.close();

  const remoteRequests = [...requestedUrls].filter(url => !url.startsWith(origin) && !url.startsWith("data:") && !url.startsWith("blob:"));
  if (remoteRequests.length) problems.push(`remote runtime requests detected: ${remoteRequests.join(", ")}`);
} catch (error) {
  problems.push(`flow: ${error.message}`);
  await page.screenshot({ path: path.join(outDir, "99-failure.png") }).catch(() => {});
} finally {
  await page.evaluate(() => window.CS3D_AUDIO?.disposeAudio?.()).catch(() => {});
  await page.waitForTimeout(100).catch(() => {});
  // Some minimal headless-shell builds do not acknowledge Browser.close after
  // SwiftShader teardown. Do not let a successful smoke run hang indefinitely.
  await Promise.race([
    browser.close().catch(() => {}),
    new Promise(resolve => setTimeout(resolve, 3000))
  ]);
  server.closeAllConnections?.();
  await new Promise(resolve => server.close(resolve));
}

if (problems.length) {
  console.error("\nSmoke run reported problems:");
  for (const problem of [...new Set(problems)]) console.error(`✗ ${problem}`);
  process.exit(1);
}
console.log(`\nSmoke run clean. Screenshots in ${path.relative(root, outDir)}/`);
process.exit(0);
