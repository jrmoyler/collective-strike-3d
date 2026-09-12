import test from 'node:test';
import assert from 'node:assert/strict';
import {DeviceCapture,DEVICE_PROTOCOL,summarizeFrames} from '../src/device-benchmark.js';

const sample=(ms=16)=>({ms,arena:'forge',playlist:'standard',calls:100,triangles:2000});
test('warmup excluded, slow frames retained and completed captures stop collecting',()=>{
 const c=new DeviceCapture({...DEVICE_PROTOCOL,warmupMs:32,durationMs:100});c.start({arena:'forge',playlist:'standard'});
 c.sample(sample());c.sample(sample());assert.equal(c.run.frames.length,0);
 c.sample(sample(101));assert.equal(c.report().summary.maxMs,101);assert.equal(c.report().timingPass,false);
 c.sample(sample());assert.equal(c.run.frames.length,1);
});
test('background, scenario changes and invalid samples cannot produce passing evidence',()=>{
 for(const reason of ['backgrounded','webgl-context-lost']) {
  const c=new DeviceCapture();c.start({arena:'forge',playlist:'standard'});c.interrupt(reason);c.sample(sample());
  assert.equal(c.report().timingPass,false);assert.equal(c.run.frames.length,0);
 }
 const c=new DeviceCapture();c.start({arena:'forge',playlist:'standard'});c.sample({...sample(),arena:'abyss'});
 assert.equal(c.run.status,'interrupted');c.start({arena:'forge',playlist:'standard'});c.sample(sample(NaN));
 assert.equal(c.run.status,'interrupted');
});
test('FPS uses all elapsed time, not inverse median; sustained smooth capture passes timing only',()=>{
 const stats=summarizeFrames([sample(10),sample(10),sample(100)]);assert.equal(stats.averageFps,25);
 const c=new DeviceCapture({...DEVICE_PROTOCOL,warmupMs:16,durationMs:160});c.start({arena:'forge',playlist:'standard'});
 for(let i=0;i<11;i++)c.sample(sample());assert.equal(c.report().timingPass,true);
 assert.equal(c.report().summary.samples,10);assert.equal(c.report().physicalDeviceVerified,undefined);
});
