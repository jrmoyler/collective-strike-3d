/**
 * Presentation finish for operators, weapons and Apex bosses.
 *
 * This pass never touches identity: anatomy, DNA proportions, division colours,
 * weapon silhouettes, grip sockets, boss silhouettes and every gameplay number
 * stay exactly as authored. It only raises how those existing surfaces are
 * rendered and how they come alive:
 *
 *  Operators  grounded occlusion, hemispheric bounce, light bleed through thin
 *             forms, a lacquered clearcoat highlight and a key-side rim on the
 *             existing toon skin; eyes with a limbal ring, catchlight and blink;
 *             a scanning sweep on visors; machined joint guards on every knee
 *             and elbow (one instanced draw per operator); breathing emissive
 *             trim; a damage flash; a soft contact shadow; and an ember dissolve
 *             on elimination instead of a hard pop.
 *  Weapons    micro-roughness breakup and edge wear on metal, a silhouette rim,
 *             energy that flows along cores instead of sitting flat, and
 *             machined rail teeth and barrel fluting on the standard receivers.
 *  Bosses     silhouette rim in the boss accent, living energy veins across
 *             armour and chitin that surge on telegraphs, a damage flash, and a
 *             soft contact shadow.
 *
 * Everything shares programs through fixed program-cache keys, detail meshes
 * are instanced and shadow-free, and nothing allocates per frame.
 */

const TIME = { value: 0 };
let softShadowTexture = null;
let jointGeometry = null;
let railToothGeometry = null;
let fluteGeometry = null;

const NOISE_GLSL = `
float aaaHash(vec3 p){p=fract(p*0.3183099+0.1);p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float aaaNoise(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.0-2.0*f);
  return mix(mix(mix(aaaHash(i),aaaHash(i+vec3(1.0,0.0,0.0)),f.x),mix(aaaHash(i+vec3(0.0,1.0,0.0)),aaaHash(i+vec3(1.0,1.0,0.0)),f.x),f.y),
             mix(mix(aaaHash(i+vec3(0.0,0.0,1.0)),aaaHash(i+vec3(1.0,0.0,1.0)),f.x),mix(aaaHash(i+vec3(0.0,1.0,1.0)),aaaHash(i+vec3(1.0,1.0,1.0)),f.x),f.y),f.z);}
`;

/** Advance the shared shader clock once per rendered frame. */
export function tick(nowSeconds) {
  if (Number.isFinite(nowSeconds)) TIME.value = nowSeconds % 10000;
}

function sharedSoftShadow(THREE) {
  if (softShadowTexture || typeof document === 'undefined') return softShadowTexture;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const g = canvas.getContext('2d');
  if (!g) return null;
  // Two stacked falloffs: a tight occlusion core under the body and a wide penumbra.
  const outer = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  outer.addColorStop(0, 'rgba(0,0,0,0.62)');
  outer.addColorStop(0.35, 'rgba(0,0,0,0.42)');
  outer.addColorStop(0.72, 'rgba(0,0,0,0.12)');
  outer.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = outer;
  g.fillRect(0, 0, 128, 128);
  const core = g.createRadialGradient(64, 64, 0, 64, 64, 26);
  core.addColorStop(0, 'rgba(0,0,0,0.5)');
  core.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = core;
  g.fillRect(0, 0, 128, 128);
  softShadowTexture = new THREE.CanvasTexture(canvas);
  softShadowTexture.userData.shared = true;
  return softShadowTexture;
}

function softenShadowDisc(THREE, mesh, opacity) {
  if (!mesh?.material) return;
  const map = sharedSoftShadow(THREE);
  if (!map) return;
  mesh.material.map = map;
  mesh.material.color.setRGB(1, 1, 1);
  mesh.material.opacity = opacity;
  mesh.material.needsUpdate = true;
  mesh.scale.multiplyScalar(1.28);
}

/* ------------------------------------------------------------------ */
/* Operators                                                           */
/* ------------------------------------------------------------------ */

const SKIN_UNIFORMS = 'uniform float uSelect;';
const SKIN_BLOCK = `
    /* ---- finish: grounded, lacquered, alive ---- */
    float aaaAO=mix(0.6,1.0,smoothstep(0.0,0.42,g))*mix(0.84,1.0,n.y*0.5+0.5);
    lit*=aaaAO;
    lit+=base*mix(vec3(0.62,0.5,0.4),vec3(0.52,0.64,0.92),n.y*0.5+0.5)*0.13;
    float aaaSSS=pow(clamp(dot(vView,-uLightDir),0.0,1.0),3.0)*(1.0-abs(dot(n,vView)));
    lit+=mix(base,uAccent,0.45)*aaaSSS*0.42;
    vec3 aaaH=normalize(uLightDir+vView);
    lit+=vec3(1.0)*pow(max(dot(n,aaaH),0.0),240.0)*0.5;
    float aaaRim=pow(1.0-clamp(dot(n,vView),0.0,1.0),4.0)*smoothstep(0.15,0.75,dot(n,uLightDir)*0.5+0.5);
    lit+=mix(vec3(1.0),uAccent,0.4)*aaaRim*0.38;
    lit=mix(lit,vec3(1.0,0.97,0.93),uHit*0.42);
    if(uDissolve>0.0){
      float aaaD=aaaNoise(vSurface*4.2+vWorldPos*1.6);
      if(aaaD<uDissolve)discard;
      float aaaEdge=1.0-smoothstep(uDissolve,uDissolve+0.09,aaaD);
      lit=mix(lit,uAccent*3.0+vec3(0.35),aaaEdge);
    }
    gl_FragColor=vec4(lit,1.0);`;

function finishSkinMaterial(material, shared) {
  if (material.userData.aaaFinish) return;
  let vs = material.vertexShader;
  let fs = material.fragmentShader;
  if (!fs.includes('gl_FragColor=vec4(lit,1.0);') || !fs.includes(SKIN_UNIFORMS)) return;
  if (!vs.includes('vSurface')) {
    vs = vs.replace('varying vec3 vWorldPos;', 'varying vec3 vSurface; varying vec3 vWorldPos;')
      .replace('vWorldPos=wp.xyz;', 'vWorldPos=wp.xyz; vSurface=position;');
    fs = fs.replace('varying vec3 vWorldPos;', 'varying vec3 vSurface; varying vec3 vWorldPos;');
  }
  fs = fs.replace(SKIN_UNIFORMS, `${SKIN_UNIFORMS}\n  uniform float uHit; uniform float uDissolve;`)
    .replace('void main(){', `${NOISE_GLSL}\n  void main(){`)
    .replace('gl_FragColor=vec4(lit,1.0);', SKIN_BLOCK);
  material.vertexShader = vs;
  material.fragmentShader = fs;
  material.uniforms.uHit = shared.uHit;
  material.uniforms.uDissolve = shared.uDissolve;
  material.userData.aaaFinish = true;
  material.needsUpdate = true;
}

const EYE_VERT = `
  varying vec3 vN; varying vec3 vP;
  void main(){
    vN=normalize(normalMatrix*normal); vP=position;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
  }`;
const EYE_FRAG = `
  uniform vec3 uColor; uniform float uVisor; uniform float uTime; uniform float uHit;
  varying vec3 vN; varying vec3 vP;
  void main(){
    vec3 n=normalize(vN);
    float facing=clamp(n.z,0.0,1.0);
    vec3 c=uColor*(0.42+0.72*pow(facing,1.4));
    if(uVisor<0.5){
      float pupil=smoothstep(0.93,0.99,facing);
      c=mix(c,c*0.28,pupil*0.55);
    }else{
      float sweep=1.0-smoothstep(0.0,0.09,abs(fract(vP.x*0.45-uTime*0.32)-0.5));
      c+=uColor*sweep*0.55;
      c*=0.86+0.14*step(0.5,fract(vP.y*9.0));
    }
    float glint=smoothstep(0.955,0.99,dot(n,normalize(vec3(-0.38,0.46,0.8))));
    float glint2=smoothstep(0.985,0.998,dot(n,normalize(vec3(0.32,-0.22,0.92))));
    c+=vec3(1.0)*(glint*1.35+glint2*0.5);
    c=mix(c,vec3(1.0),uHit*0.25);
    gl_FragColor=vec4(c,1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

function eyeMaterial(THREE, color, visor, shared) {
  return new THREE.ShaderMaterial({
    vertexShader: EYE_VERT,
    fragmentShader: EYE_FRAG,
    uniforms: {
      uColor: { value: color.clone() },
      uVisor: { value: visor ? 1 : 0 },
      uTime: TIME,
      uHit: shared.uHit,
    },
  });
}

function isEye(mesh) {
  const m = mesh.material;
  return mesh.isMesh && m && !Array.isArray(m) && m.isMeshBasicMaterial && !m.transparent;
}

/**
 * Finish a procedural operator in place. Runs after polishProceduralOperator so
 * the corrected head-feature scale is already applied.
 */
export function finishOperatorRig(THREE, rig) {
  if (!rig?.body || !rig.shared || rig.aaa) return rig;
  const shared = rig.shared;
  shared.uHit = shared.uHit || { value: 0 };
  shared.uDissolve = shared.uDissolve || { value: 0 };

  const skins = new Set();
  const emissive = [];
  const eyes = [];
  const replacedEyeMaterials = new Map();
  const visit = mesh => {
    if (!mesh.isMesh) return;
    const material = mesh.material;
    if (material?.isShaderMaterial && material.uniforms?.uGradSpan) skins.add(material);
    else if (material && (material.isMeshPhysicalMaterial || material.isMeshStandardMaterial) && material.emissiveIntensity >= 1.5 && !emissive.some(e => e.material === material)) {
      emissive.push({ material, base: material.emissiveIntensity });
    } else if (isEye(mesh)) {
      const visor = mesh.geometry?.type === 'BoxGeometry';
      let finished = replacedEyeMaterials.get(material);
      if (!finished) {
        finished = eyeMaterial(THREE, material.color, visor, shared);
        replacedEyeMaterials.set(material, finished);
        material.dispose?.();
      }
      mesh.material = finished;
      if (!visor) eyes.push({ mesh, sy: mesh.scale.y });
    }
  };
  rig.body.traverse(visit);
  // Limbs, hands and feet hang off the root so they can be solved in world space.
  for (const child of rig.root.children) if (child.isMesh && child.material?.isShaderMaterial) skins.add(child.material);
  for (const material of skins) finishSkinMaterial(material, shared);

  // Machined guards over every knee and elbow: one instanced draw per operator.
  jointGeometry = jointGeometry || (() => { const g = new THREE.IcosahedronGeometry(1, 1); g.userData.shared = true; return g; })();
  const dna = rig.dna || {};
  const guardMaterial = new THREE.MeshStandardMaterial({
    color: dna.cBot || '#263344', metalness: 0.82, roughness: 0.3, flatShading: true,
    emissive: dna.accent || '#ffffff', emissiveIntensity: 0.06,
  });
  const jointCount = (rig.legs?.length || 0) + (rig.arms?.length || 0);
  let joints = null;
  if (jointCount) {
    joints = new THREE.InstancedMesh(jointGeometry, guardMaterial, jointCount);
    joints.name = 'operator_joint_guards';
    joints.frustumCulled = false;
    joints.castShadow = false;
    joints.receiveShadow = true;
    rig.root.add(joints);
  }

  softenShadowDisc(THREE, rig.shadowDisc, 0.58);

  rig.aaa = {
    skins: skins.size,
    eyes,
    emissive,
    joints,
    jointMatrix: new THREE.Matrix4(),
    jointPos: new THREE.Vector3(),
    jointQuat: new THREE.Quaternion(),
    jointScale: new THREE.Vector3(),
    blinkAt: 1.5 + Math.random() * 3,
    blink: 0,
    phase: Math.random() * 6.28,
    dissolving: false,
  };
  return rig;
}

/* A flash fires on the onset of a hit and decays in ~90ms, so sustained fire
   reads as distinct impacts instead of a body held at white. */
function onsetFlash(state, hit, dt) {
  const value = Math.max(0, Math.min(1, hit || 0));
  if (value > (state.lastHit || 0) + 0.05) state.flash = 1;
  state.lastHit = value;
  state.flash = Math.max(0, (state.flash || 0) - dt * 11);
  return state.flash * state.flash;
}

/** Per-frame life for a living operator. `hit` is the 0..1 damage pulse. */
export function updateOperatorFinish(rig, dt, now, hit = 0) {
  const f = rig?.aaa;
  if (!f) return;
  if (f.dissolving) {
    f.dissolving = false;
    rig.shared.uDissolve.value = 0;
    if (rig.weapon) rig.weapon.visible = true;
    if (f.joints) f.joints.visible = true;
    if (rig.shadowDisc) rig.shadowDisc.material.opacity = 0.58;
  }
  rig.shared.uHit.value = onsetFlash(f, hit, dt);

  // Blink: a quick close-open every few seconds, occasionally doubled.
  f.blinkAt -= dt;
  if (f.blinkAt <= 0) {
    f.blink = 0.14;
    f.blinkAt = (Math.random() < 0.18 ? 0.22 : 2.2 + Math.random() * 3.6);
  }
  const closing = f.blink > 0 ? Math.sin((1 - f.blink / 0.14) * Math.PI) : 0;
  f.blink = Math.max(0, f.blink - dt);
  for (const eye of f.eyes) eye.mesh.scale.y = eye.sy * (1 - closing * 0.9);

  const breathe = 0.86 + 0.14 * Math.sin(now * 1.7 + f.phase);
  for (const e of f.emissive) e.material.emissiveIntensity = e.base * breathe + hit * 1.4;

  if (f.joints) {
    const inv = 1 / (rig.root.scale.x || 1);
    const rp = rig.root.position;
    let index = 0;
    for (const leg of rig.legs || []) {
      f.jointPos.copy(leg.knee).sub(rp).multiplyScalar(inv);
      f.jointScale.setScalar((leg.r || 0.06) * 1.32);
      f.jointMatrix.compose(f.jointPos, f.jointQuat, f.jointScale);
      f.joints.setMatrixAt(index++, f.jointMatrix);
    }
    for (const arm of rig.arms || []) {
      f.jointPos.copy(arm.knee);
      f.jointScale.setScalar((arm.ru || 0.06) * 1.25);
      f.jointMatrix.compose(f.jointPos, f.jointQuat, f.jointScale);
      f.joints.setMatrixAt(index++, f.jointMatrix);
    }
    f.joints.instanceMatrix.needsUpdate = true;
  }
}

/** Elimination: the body burns away into its accent colour over ~1.7s. */
export function updateOperatorDeath(rig, secondsSinceDeath) {
  const f = rig?.aaa;
  if (!f) return;
  f.dissolving = true;
  rig.shared.uHit.value = 0;
  const t = Math.max(0, Math.min(1, (secondsSinceDeath - 0.45) / 1.7));
  rig.shared.uDissolve.value = t * 1.02;
  if (rig.weapon) rig.weapon.visible = t < 0.55;
  if (f.joints) f.joints.visible = t < 0.5;
  if (rig.shadowDisc) rig.shadowDisc.material.opacity = 0.58 * (1 - t);
}

/* ------------------------------------------------------------------ */
/* Weapons                                                             */
/* ------------------------------------------------------------------ */

function injectMetalFinish(material, rimColor) {
  const rim = rimColor.clone();
  material.onBeforeCompile = shader => {
    shader.uniforms.uAaaTime = TIME;
    shader.uniforms.uAaaRim = { value: rim };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vAaaObj;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvAaaObj=position;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec3 vAaaObj;\nuniform float uAaaTime;\nuniform vec3 uAaaRim;\n${NOISE_GLSL}`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        float aaaMicro=aaaNoise(vAaaObj*64.0)*0.55+aaaNoise(vAaaObj*180.0)*0.45;
        roughnessFactor=clamp(roughnessFactor*(0.86+0.28*aaaMicro),0.05,1.0);`)
      .replace('#include <opaque_fragment>', `
        float aaaFr=pow(1.0-clamp(dot(normalize(normal),normalize(vViewPosition)),0.0,1.0),3.2);
        outgoingLight+=uAaaRim*aaaFr*0.2;
        #include <opaque_fragment>`);
  };
  material.customProgramCacheKey = () => 'cs3d-aaa-metal';
  material.needsUpdate = true;
}

function injectEnergyFlow(material) {
  material.onBeforeCompile = shader => {
    shader.uniforms.uAaaTime = TIME;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vAaaObj;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvAaaObj=position;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vAaaObj;\nuniform float uAaaTime;')
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        float aaaFlow=0.5+0.5*sin(vAaaObj.z*9.0+vAaaObj.y*5.0+vAaaObj.x*3.0-uAaaTime*6.5);
        totalEmissiveRadiance*=0.72+0.62*pow(aaaFlow,3.0);`);
  };
  material.customProgramCacheKey = () => 'cs3d-aaa-energy';
  material.needsUpdate = true;
}

function instancedDetail(THREE, parent, geometry, material, transforms, name) {
  const mesh = new THREE.InstancedMesh(geometry, material, transforms.length);
  const o = new THREE.Object3D();
  transforms.forEach(([p, r, s], i) => {
    o.position.set(...p); o.rotation.set(...r); o.scale.set(...s); o.updateMatrix();
    mesh.setMatrixAt(i, o.matrix);
  });
  mesh.instanceMatrix.needsUpdate = true;
  mesh.name = name;
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

/** Finish a weapon assembly after polishWeaponAssembly. Grip and muzzle sockets are untouched. */
export function finishWeapon(THREE, weapon) {
  const data = weapon?.userData;
  if (!data?.body || data.aaa) return weapon;
  const seen = new Set();
  const rimColor = new THREE.Color(data.trim?.color || '#9fb0cc').lerp(new THREE.Color('#ffffff'), 0.45);
  weapon.traverse(mesh => {
    if (!mesh.isMesh) return;
    const material = mesh.material;
    if (!material || Array.isArray(material) || seen.has(material)) return;
    if (!(material.isMeshStandardMaterial || material.isMeshPhysicalMaterial)) return;
    seen.add(material);
    if (material.emissiveIntensity > 1) injectEnergyFlow(material);
    else injectMetalFinish(material, rimColor);
  });

  // Machined detail on the standard receivers, placed in each part's unit space so
  // it follows the pistol / SMG / rifle / sniper proportions automatically.
  railToothGeometry = railToothGeometry || (() => { const g = new THREE.BoxGeometry(1, 1, 1); g.userData.shared = true; return g; })();
  fluteGeometry = fluteGeometry || (() => { const g = new THREE.BoxGeometry(1, 1, 1); g.userData.shared = true; return g; })();
  const teeth = [];
  for (let i = 0; i < 9; i++) teeth.push([[0, 0.62, -0.44 + i * 0.11], [0, 0, 0], [1.04, 0.55, 0.045]]);
  const flutes = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    flutes.push([[Math.cos(a) * 0.96, 0.05, Math.sin(a) * 0.96], [0, -a, 0], [0.2, 0.62, 0.2]]);
  }
  if (data.rail) instancedDetail(THREE, data.rail, railToothGeometry, data.dark || data.rail.material, teeth, 'rail_teeth');
  if (data.barrel) instancedDetail(THREE, data.barrel, fluteGeometry, data.dark || data.barrel.material, flutes, 'barrel_fluting');
  data.aaa = { materials: seen.size };
  return weapon;
}

/* ------------------------------------------------------------------ */
/* Bosses                                                              */
/* ------------------------------------------------------------------ */

function injectBossSurface(material, finish, veins) {
  material.onBeforeCompile = shader => {
    shader.uniforms.uAaaTime = TIME;
    shader.uniforms.uAaaHit = finish.uHit;
    shader.uniforms.uAaaSurge = finish.uSurge;
    shader.uniforms.uAaaAccent = { value: finish.accent };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vAaaObj;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvAaaObj=position;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec3 vAaaObj;\nuniform float uAaaTime;\nuniform float uAaaHit;\nuniform float uAaaSurge;\nuniform vec3 uAaaAccent;\n${NOISE_GLSL}`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor=clamp(roughnessFactor*(0.75+0.5*aaaNoise(vAaaObj*24.0)),0.05,1.0);`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        ${veins ? `float aaaV=abs(aaaNoise(vAaaObj*2.6+vec3(0.0,uAaaTime*0.12,0.0))-0.5);
        float aaaVein=(1.0-smoothstep(0.0,0.032,aaaV))*smoothstep(0.32,0.62,aaaNoise(vAaaObj*1.15+vec3(3.1)));
        float aaaPulse=0.55+0.45*sin(uAaaTime*2.2-vAaaObj.y*3.0);
        totalEmissiveRadiance+=uAaaAccent*aaaVein*aaaPulse*(0.55+uAaaSurge*1.8);` : ''}`)
      .replace('#include <opaque_fragment>', `
        float aaaFr=pow(1.0-clamp(dot(normalize(normal),normalize(vViewPosition)),0.0,1.0),2.6);
        outgoingLight+=uAaaAccent*aaaFr*(0.3+uAaaSurge*0.45);
        outgoingLight=mix(outgoingLight,vec3(1.0,0.96,0.92),uAaaHit*0.22);
        #include <opaque_fragment>`);
  };
  material.customProgramCacheKey = () => `cs3d-aaa-boss-${veins ? 'vein' : 'plain'}`;
  material.needsUpdate = true;
}

/** Finish an Apex boss rig built by makeBossRig. Silhouette, segments and hit proxy are untouched. */
export function finishBossRig(THREE, rig) {
  if (!rig || rig.stub || !rig.materials || rig.aaa) return rig;
  const accent = new THREE.Color(rig.dna?.accent || '#ffffff');
  const finish = { uHit: { value: 0 }, uSurge: { value: 0 }, accent };
  const m = rig.materials;
  for (const [key, veins] of [['skin', true], ['armor', true], ['trim', false], ['accent', false]]) {
    if (m[key]?.isMeshStandardMaterial) injectBossSurface(m[key], finish, veins);
  }
  softenShadowDisc(THREE, rig.shadow, 0.66);
  rig.aaa = finish;
  return rig;
}

export function updateBossFinish(rig, dt, now, state = {}) {
  const f = rig?.aaa;
  if (!f) return;
  f.uHit.value = onsetFlash(f, state.hit, dt);
  const target = state.telegraph ? 1 : 0;
  f.uSurge.value += (target - f.uSurge.value) * Math.min(1, dt * 6);
}
