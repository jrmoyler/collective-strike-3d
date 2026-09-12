// Opt-in QA only. Samples the shipping render loop; never substitutes a scene.
export const DEVICE_PROTOCOL = Object.freeze({version:1,warmupMs:15000,durationMs:120000,
  targetFps:30,p95Ms:50,p99Ms:100,maxStallRate:.01});

export function summarizeFrames(frames) {
  if (!frames.length) return null;
  const sorted=frames.map(f=>f.ms).sort((a,b)=>a-b);
  const total=sorted.reduce((a,b)=>a+b,0), at=q=>sorted[Math.ceil(sorted.length*q)-1];
  return {samples:frames.length,activeMs:total,averageFps:1000*frames.length/total,
    p50Ms:at(.5),p95Ms:at(.95),p99Ms:at(.99),maxMs:sorted.at(-1),
    over100Ms:sorted.filter(n=>n>100).length,stallRate:sorted.filter(n=>n>100).length/frames.length,
    maxCalls:Math.max(...frames.map(f=>f.calls||0)),maxTriangles:Math.max(...frames.map(f=>f.triangles||0))};
}

export class DeviceCapture {
  constructor(protocol=DEVICE_PROTOCOL) { this.protocol=protocol;this.run=null; }
  start(meta={}) {this.run={meta:{...meta},warmupMs:0,frames:[],interruptions:[],elapsedMs:0,status:'warming'};return this.run;}
  interrupt(reason) {
    if(this.run&&['warming','recording'].includes(this.run.status)) {
      this.run.interruptions.push({reason,activeMs:this.run.elapsedMs});this.run.status='interrupted';
    }
  }
  sample(frame) {
    const r=this.run;if(!r||!['warming','recording'].includes(r.status))return;
    if(!Number.isFinite(frame.ms)||frame.ms<=0){this.interrupt('invalid-frame-time');return;}
    if(frame.arena!==r.meta.arena||frame.playlist!==r.meta.playlist){this.interrupt('scenario-changed');return;}
    if(r.status==='warming') {r.warmupMs+=frame.ms;if(r.warmupMs>=this.protocol.warmupMs)r.status='recording';return;}
    r.frames.push({...frame});r.elapsedMs+=frame.ms;
    if(r.elapsedMs>=this.protocol.durationMs)r.status='complete';
    if(r.frames.length>=60000&&r.status!=='complete')this.interrupt('sample-cap');
  }
  report() {
    if(!this.run)return null;
    const r=this.run,summary=summarizeFrames(r.frames),p=this.protocol;
    return {...r,summary,protocol:p,
      timingPass:r.status==='complete'&&!!summary&&summary.averageFps>=p.targetFps&&summary.p95Ms<=p.p95Ms&&summary.p99Ms<=p.p99Ms&&summary.stallRate<=p.maxStallRate};
  }
}

export function installDeviceBenchmark(getState) {
  if(new URLSearchParams(location.search).get('benchmark')!=='1')return null;
  const capture=new DeviceCapture(),runs=[],events=[];
  let manifest=null,previousActive=false,lastUI=0,archived=false;
  fetch('build-info.json').then(r=>{if(!r.ok)throw Error('Build identity unavailable');return r.json();})
    .then(m=>manifest=m).catch(e=>events.push({type:'build-error',message:e.message}));
  const strip=document.createElement('button');strip.id='deviceBenchmark';strip.textContent='DEVICE TEST';
  strip.style.cssText='position:fixed;top:env(safe-area-inset-top,0px);left:50%;transform:translateX(-50%);z-index:110;min-height:44px;padding:6px 12px;background:#050a18;color:#f5f5f5;border:1px solid #8b9bae;font:12px system-ui;';
  const dialog=document.createElement('dialog');dialog.id='deviceBenchmarkDialog';
  dialog.style.cssText='box-sizing:border-box;width:min(460px,94vw);max-height:88dvh;overflow:auto;background:#0d1326;color:#f5f5f5;border:1px solid #8b9bae;padding:20px;font:15px/1.5 system-ui;';
  dialog.innerHTML=`<style>#deviceBenchmarkDialog button,#deviceBenchmarkDialog input{min-height:44px;box-sizing:border-box;padding:8px;margin:6px 0;font:inherit}#deviceBenchmarkDialog button{background:#d4a843;color:#050a18;border:0}#deviceBenchmarkDialog button:disabled{opacity:.5}#deviceBenchmarkDialog :focus-visible,#deviceBenchmark:focus-visible{outline:3px solid #d4a843;outline-offset:3px}#deviceBenchmarkDialog label{display:block}#deviceBenchmarkDialog input[type=text]{width:100%}</style>
    <h2 style="font-size:20px;margin-top:0">Galaxy A15 device test</h2>
    <p>Deploy first. Record 15 seconds of warmup and 2 minutes of active combat across rounds. Keep this tab visible; pausing or opening a menu interrupts the run. Buy phases and spectating are excluded. Repeat all 10 arenas, plus Boss and Wave. Use Low quality first.</p>
    <label>Device model / Android / browser version<input id="deviceModel" type="text" placeholder="Galaxy A15 · Android … · Chrome …"></label>
    <label><input id="physicalDevice" type="checkbox"> I am playing on this physical phone</label>
    <label><input id="deviceControls" type="checkbox"> I checked move, aim, fire, reload, abilities, audio and pause/resume on this phone</label>
    <p id="deviceStatus" role="status"></p>
    <button id="deviceStart">Record combat</button> <button id="deviceDownload">Download results</button>
    <button id="deviceClose">Close</button>
    <p>Frame delivery timings are not GPU timer measurements. Results require review; this page cannot prove hardware identity. Export includes no career/save data.</p>`;
  document.body.append(strip,dialog);
  // UI interaction must not fire the player's weapon through global mouse events.
  for(const node of [strip,dialog])for(const type of ['mousedown','mouseup','pointerdown','pointerup','touchstart','touchend','keydown','keyup'])node.addEventListener(type,e=>e.stopPropagation());
  const status=dialog.querySelector('#deviceStatus');
  const archive=()=>{if(!archived&&capture.run&&['complete','interrupted'].includes(capture.run.status)){runs.push(capture.report());archived=true;}};
  strip.onclick=()=>{capture.interrupt('benchmark-dialog');archive();const s=getState();if(s.active)s.pause();dialog.showModal();
    status.textContent=`${runs.length} captured runs. ${capture.run?.status||'Ready'}. Close this panel, resume and deploy before recording.`;};
  dialog.querySelector('#deviceClose').onclick=()=>dialog.close();
  dialog.querySelector('#deviceStart').onclick=()=>{
    const s=getState();
    if(!s.combat){status.textContent='Deploy into a match first, then open Device Test.';return;}
    if(!manifest){status.textContent='Build identity has not loaded. Reload this preview and try again.';return;}
    if(s.paused)s.pause();
    archive();capture.start({arena:s.arena,playlist:s.playlist,operator:s.operator,startedAt:new Date().toISOString(),
      settingsQuality:s.settingsQuality,viewport:[innerWidth,innerHeight],devicePixelRatio});archived=false;previousActive=false;dialog.close();
  };
  const interruption=reason=>{capture.interrupt(reason);archive();previousActive=false;};
  document.addEventListener('visibilitychange',()=>{if(document.hidden)interruption('backgrounded');});
  window.addEventListener('blur',()=>interruption('window-blur'));
  window.addEventListener('resize',()=>interruption('viewport-changed'));
  document.addEventListener('webglcontextlost',()=>interruption('webgl-context-lost'),true);
  window.addEventListener('error',e=>{events.push({type:'runtime-error',message:e.message});interruption('runtime-error');});
  window.addEventListener('unhandledrejection',e=>{events.push({type:'unhandled-rejection',message:String(e.reason)});interruption('unhandled-rejection');});
  dialog.querySelector('#deviceDownload').onclick=()=>{
    archive();const s=getState(),gl=s.renderer?.getContext(),ext=gl?.getExtension('WEBGL_debug_renderer_info');
    const gpu=ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):null;
    const report={schema:'cs3d-device-evidence-v1',build:manifest,exportedAt:new Date().toISOString(),
      device:{userAgent:navigator.userAgent,reportedModel:dialog.querySelector('#deviceModel').value,
        physicalDeviceAttested:dialog.querySelector('#physicalDevice').checked,
        controlsAndAudioAttested:dialog.querySelector('#deviceControls').checked,
        gpu,softwareRenderer:gpu?/swiftshader|llvmpipe|software/i.test(gpu):null,
        hardwareConcurrency:navigator.hardwareConcurrency,deviceMemory:navigator.deviceMemory??null},
      events,runs,acceptance:'pending-review'};
    const url=URL.createObjectURL(new Blob([JSON.stringify(report,null,2)],{type:'application/json'}));
    const a=document.createElement('a');a.href=url;a.download='collective-strike-device-results.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);
    status.textContent='Results downloaded. Send the JSON file back for review.';
  };
  return {capture, tick(ms,cpuMs){
    const s=getState();
    if(!s.active){if(s.invalid)interruption('combat-paused-or-ended');previousActive=false;return;}
    // First frame after entering combat/resuming is a boundary, not gameplay timing.
    if(previousActive)capture.sample({ms,cpuMs,arena:s.arena,playlist:s.playlist,quality:s.quality,
      pixelRatio:s.renderer.getPixelRatio(),calls:s.renderer.info.render.calls,triangles:s.renderer.info.render.triangles,
      geometries:s.renderer.info.memory.geometries,textures:s.renderer.info.memory.textures});
    previousActive=true;archive();
    if(performance.now()-lastUI>500){lastUI=performance.now();const r=capture.run;
      strip.textContent=r?`${r.status.toUpperCase()} ${Math.floor((r.status==='warming'?r.warmupMs:r.elapsedMs)/1000)}s`:'DEVICE TEST';}
  }};
}
