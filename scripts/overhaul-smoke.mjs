/** Actual WebGL compilation, quality and cleanup check for the combat overhaul. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright-core';
import {serveDist, resolveChromium, CHROMIUM_ARGS} from './browser.mjs';

const out = path.resolve(process.argv[2] || '/tmp/cs3d-overhaul');
fs.mkdirSync(out, {recursive: true});
const server = await serveDist();
const browser = await chromium.launch({executablePath: resolveChromium(), args: CHROMIUM_ARGS});
const page = await browser.newPage({viewport: {width: 1280, height: 720}});
const errors = [];
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => {if (message.type() === 'error') errors.push(message.text());});
try {
  await page.addInitScript(() => localStorage.setItem('cs3d.settings.v2', JSON.stringify({version: 2, tutorialCompleted: true, quality: 'high'})));
  await page.goto(server.origin, {waitUntil: 'load'});
  await page.waitForFunction(() => document.getElementById('titleScreen')?.classList.contains('on'));
  await page.locator('#titleEnterBtn').click();
  await page.locator('.divCard').first().click();
  await page.screenshot({path: path.join(out, 'operator.png'), timeout: 120000});
  await page.locator('#deployBtn').click();
  await page.locator('#arenaDeployBtn').click();
  await page.waitForFunction(() => document.getElementById('hud').style.display === 'block');
  // Freeze the simulation, then render actual meshes and shader effects at a
  // deterministic effect age. This does not replace the full live-match smoke.
  const evidence = await page.evaluate(() => {
    cancelAnimationFrame(loopHandle); loopStarted = false;
    CFG.bloom = 0; renderer.setPixelRatio(1); composer?.setPixelRatio(1);
    fx.clear();
    fx.impactWorld(new THREE.Vector3(me.x*S+1, arenaElevationWorld(me.x,me.y)+1,me.y*S),'#f59e0b',2);
    fx.detonation(me.x+22,me.y+12,'#ff9c45');
    fx.step(.08);
    updateRender(.016);
    renderer.compile(scene,camera);
    return {three: THREE.REVISION, effects: fx.stats, environment: !!scene.environment, operators: DIVS.length,
      arena: window.CS3D_selectedArenaId, frame: {calls: renderer.info.render.calls, triangles: renderer.info.render.triangles}};
  });
  await page.screenshot({path: path.join(out, 'combat-effects.png'), timeout: 120000});
  assert.equal(evidence.operators, 20);
  assert.ok(evidence.effects.particles > 0 && evidence.effects.debris > 0, 'impact/detonation must spawn actual particles and debris');
  assert.ok(evidence.effects.particleDraws <= 4 && evidence.effects.debrisDraws === 1, 'effects batching regression');
  assert.ok(evidence.environment, 'PBR environment lighting must be live');
  const cleanup = await page.evaluate(() => {
    fx.setQuality('low'); fx.step(.016); updateRender(.016);
    const low = fx.stats;
    fx.clear(); fx.step(.016); updateRender(.016);
    return {low, cleared: fx.stats};
  });
  assert.equal(cleanup.cleared.particles, 0);
  assert.equal(cleanup.cleared.debris, 0);
  assert.equal(cleanup.cleared.particleDraws, 0);
  assert.equal(cleanup.cleared.debrisDraws, 0);
  const regressions = await page.evaluate(() => {
    phaseT = 0; updateSim(.016);
    const buttons = Array.from({length: 16}, () => ({pressed: false, value: 0}));
    const pad = {index: 0, id: 'Overhaul QA', mapping: 'standard', axes: [0,0,0,0], buttons};
    Object.defineProperty(navigator, 'getGamepads', {configurable: true, value: () => [pad]});
    actionInput.setAction('fire', true, 'gamepad');
    actionInput.setAction('interact', true, 'gamepad');
    actionInput.setAction('fire', true, 'keyboard');
    togglePause(); pollGamepad(.016);
    const keyboardPreserved = actionInput.isDown('fire');
    actionInput.setAction('fire', false, 'keyboard');
    const pausedPadReleased = !actionInput.isDown('fire') && !actionInput.isDown('interact');
    togglePause();
    scoreATK = FIRST_TO - 1; scoreDEF = 0; selectedPlaylist = 'standard'; apexComplete = false;
    bomb = {state: 'planted', carrier: null, x: me.x, y: me.y, timer: .001, beepT: 1};
    updateSim(.016);
    const apex = {phase, encounterKind, scoreATK, bossAlive: !!activeBoss?.alive,
      winnersUnharmed: players.filter(p => p.team === 'ATK').every(p => p.alive && p.hp === maxHp(p))};
    return {pausedPadReleased, keyboardPreserved, apex};
  });
  assert.ok(regressions.keyboardPreserved, 'controller UI polling must preserve keyboard-held fire');
  assert.ok(regressions.pausedPadReleased, 'paused controller release must clear held fire/interact');
  assert.equal(regressions.apex.encounterKind, 'apex');
  assert.ok(regressions.apex.bossAlive && regressions.apex.winnersUnharmed, 'expired spike must not damage the newly spawned Apex squad');
  assert.deepEqual(errors, [], 'WebGL/runtime errors');
  fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify({evidence, cleanup, regressions, errors}, null, 2));
  console.log(JSON.stringify({evidence, cleanup, regressions, errors}));
} finally {
  await browser.close();
  await server.close();
}
