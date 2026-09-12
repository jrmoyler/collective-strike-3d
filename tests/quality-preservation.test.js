import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {buildArenaLandmark} from '../src/arena-assets.js';
import {ARENA_DEFINITIONS} from '../src/arena-core.js';
const digest=x=>createHash('sha256').update(x).digest('hex');
const baseline=JSON.parse(fs.readFileSync(new URL('../docs/quality-gates/preservation-baseline.json',import.meta.url)));
test('quality pass preserves merged content and save compatibility authorities byte-for-byte',()=>{
 const html=fs.readFileSync(new URL('../COLLECTIVE_STRIKE_3D.html',import.meta.url),'utf8');
 for(const [name,{pattern,sha256}] of Object.entries(baseline.blocks)) {
  const block=html.match(new RegExp(pattern));assert.ok(block,name);assert.equal(digest(block[0]),sha256,name);
 }
 for(const [file,sha256] of Object.entries(baseline.files))assert.equal(digest(fs.readFileSync(new URL('../'+file,import.meta.url))),sha256,file);
});
test('reference detail retains legacy sockets, collider volumes and named mechanical groups',()=>{
 const d=ARENA_DEFINITIONS.forge,v=d.visuals;
 const model=buildArenaLandmark(d,{id:'forge',...v,accentHex:v.accent,secondaryHex:v.secondary,wallEmissive:v.accent});
 const r=model.root.userData.sculptRuntime;
 assert.deepEqual(r.sockets['pour-socket'].position.toArray(),[0,-.7,1.05]);
 assert.deepEqual(r.colliders['furnace-body'],{type:'cylinder',radius:2.85,height:7.6});
 for(let i=0;i<6;i++)assert.equal(r.colliders[`furnace-leg-${i}`].radius,.34);
 assert.equal(r.nodes['service-deck-grating'].count,76);
 assert.equal(r.nodes['rail-saddles'].count,16);
 model.root.traverse(o=>{if(o.isMesh){assert.ok(o.name);assert.ok([...o.geometry.attributes.position.array].every(Number.isFinite));}});
 for(const name of ['service-deck-grating','rail-saddles','cup-suspension','buttress-joint-clamps']) {
  assert.ok(Object.values(r.destructionGroups).some(ids=>ids.includes(name)),name);
 }
});
