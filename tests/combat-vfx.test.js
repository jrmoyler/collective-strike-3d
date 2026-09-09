import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { ParticleManager, PARTICLE_BUDGETS } from '../src/cs3d-particles.js';
import { FilmGrainPass, MotionBlurPass, GodRaysPass } from '../src/cs3d-postprocess.js';

// Only CanvasTexture's source is stubbed; geometry, materials and instance buffers are real Three.js.
globalThis.document = {createElement() { return {width:0,height:0,getContext() { return {
  createRadialGradient() {return {addColorStop(){}};}, beginPath(){}, arc(){}, fill(){},
}; }}; }};

test('combat bursts remain batched under saturation and release all scene resources', () => {
  const scene = new THREE.Scene(), fx = new ParticleManager(scene, 'low');
  const geometry = [...fx.particleSystems.values()].map(p => p.geometry);
  for (let i=0; i<100; i++) fx.detonation(new THREE.Vector3(2,3,4), '#f59e0b');
  fx.update(.016);
  assert.ok(fx.stats.particles <= PARTICLE_BUDGETS.low.maxParticles);
  assert.ok(fx.stats.debris <= 26);
  assert.ok(fx.stats.particleDraws <= 4);
  assert.equal(scene.children.length, 5);
  assert.deepEqual([...fx.particleSystems.values()].map(p => p.geometry), geometry);
  fx.update(2);
  assert.equal(fx.stats.particles, 0);
  assert.equal(fx.stats.debris, 0);
  fx.dispose();
  assert.equal(scene.children.length, 0);
});

test('late particle births, pause and quality downgrade preserve lifetime and budgets', () => {
  const fx = new ParticleManager(new THREE.Scene(), 'ultra');
  fx.update(27);
  const p = fx.spawnParticle({position:new THREE.Vector3(1,2,3), type:'ice', life:1});
  fx.update(0);
  const attrs = fx.particleSystems.get('ice').geometry.attributes;
  assert.equal(attrs.birth.getX(0), 27);
  assert.equal(attrs.life.getX(0), 1);
  assert.equal(attrs.position.getY(0), 2);
  fx.update(.25);
  assert.ok(fx.activeParticles.includes(p));
  fx.spawnParticleBurst({count:700});
  fx.setQuality('low');
  assert.equal(fx.stats.particles, 150);
  fx.clear();
  assert.equal(fx.stats.particleDraws, 0);
  fx.dispose();
});

test('tracer budget is independent of particles and materials are released', () => {
  const fx = new ParticleManager(new THREE.Scene(), 'low');
  fx.spawnParticleBurst({count:30});
  fx.spawnTracer(new THREE.Vector3(),new THREE.Vector3(0,0,3));
  const tracer = fx.activeParticles.find(p => p.userData.isTracer);
  assert.ok(tracer);
  let disposed = 0;
  tracer.material.addEventListener('dispose', () => disposed++);
  fx.update(1);
  assert.equal(disposed, 1);
  fx.dispose();
});

test('decals face impact normals, select atlas frame and dispose materials', () => {
  const fx = new ParticleManager(new THREE.Scene());
  fx.spawnImpact(new THREE.Vector3(1,2,3), new THREE.Vector3(0,1,0), 'organic');
  const mesh=fx.decals[0].mesh;
  const forward = new THREE.Vector3(0,0,1).applyQuaternion(mesh.quaternion);
  assert.ok(forward.distanceTo(new THREE.Vector3(0,1,0))<1e-6);
  const uv=mesh.geometry.attributes.uv;
  for(let i=0;i<uv.count;i++) {assert.ok(uv.getX(i)<=.5);assert.ok(uv.getY(i)>=.5);}
  let disposed=0;mesh.material.addEventListener('dispose',()=>disposed++);
  fx.clear();assert.equal(disposed,1);fx.dispose();
});

test('postprocess imports work and light flicker does not cumulatively darken', () => {
  const grain = new FilmGrainPass();
  const rays = new GodRaysPass(undefined, {exposure:.6});
  rays.addLightSource(new THREE.Vector2(.5,.5),{flicker:true});
  for(let i=0;i<1000;i++) rays.update(.016,i*.016);
  assert.ok(rays.uniforms.exposure.value>=.54);
  rays.setSamples(0);assert.equal(rays.uniforms.samples.value,1);
  const blur=new MotionBlurPass();
  blur.capture({setRenderTarget(){assert.fail('capture redirected render target');}});
  grain.dispose();rays.dispose();blur.dispose();
});
