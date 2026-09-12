import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright-core';
import {serveDist,resolveChromium,CHROMIUM_ARGS} from './browser.mjs';
const out=process.argv[2]||'quality-evidence/device';fs.mkdirSync(out,{recursive:true});
const server=await serveDist(),browser=await chromium.launch({executablePath:resolveChromium(),args:CHROMIUM_ARGS});
try {
 const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true,acceptDownloads:true});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(server.origin+'/?benchmark=1');
 await page.waitForFunction(()=>document.getElementById('titleScreen')?.classList.contains('on'));
 await page.locator('#deviceBenchmark').click();
 await page.locator('#deviceDownload').click();
 await page.locator('#deviceClose').click();
 await page.locator('#titleEnterBtn').click();
 if(await page.locator('#tutorialSkip').isVisible())await page.locator('#tutorialSkip').click();
 // Use the real deployment controls. Onboarding is dismissed via its normal UI.
 await page.locator('.divCard').first().click();
 await page.locator('#deployBtn').click();
 await page.locator('#arenaDeployBtn').click();
 await page.waitForFunction(()=>document.getElementById('hud').style.display==='block');
 // Accelerate only the automated harness, explicitly not physical evidence.
 await page.evaluate(()=>{phaseT=0;deviceBenchmark.capture.protocol={...deviceBenchmark.capture.protocol,warmupMs:16,durationMs:100};});
 await page.waitForFunction(()=>phase==='live');
 await page.locator('#deviceBenchmark').click();
 await page.locator('#deviceStart').click();
 await page.waitForFunction(()=>deviceBenchmark.capture.run?.status==='complete',{},{timeout:30000});
 await page.locator('#deviceBenchmark').click();
 const [download]=await Promise.all([page.waitForEvent('download'),page.locator('#deviceDownload').click()]);
 await download.saveAs(path.join(out,'automated-harness-only.json'));
 const data=JSON.parse(fs.readFileSync(path.join(out,'automated-harness-only.json')));
 assert.equal(data.schema,'cs3d-device-evidence-v1');
 assert.equal(data.acceptance,'pending-review');
 assert.equal(data.device.physicalDeviceAttested,false);
 assert.equal(data.runs.length,1);assert.equal(data.runs[0].status,'complete');
 assert.ok(data.runs[0].frames.length>0);assert.ok(data.build.contentSha256);
 await page.screenshot({path:path.join(out,'capture-dialog.png')});
 assert.deepEqual(errors,[]);
 fs.writeFileSync(path.join(out,'README.txt'),'Automated Chromium touch-emulation integration test; shortened capture protocol. NOT physical-device performance evidence.\n');
}finally{await browser.close();await server.close();}
