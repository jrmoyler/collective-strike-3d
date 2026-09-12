/** Export the actual runtime hierarchy for Blender inspection, never a parallel model. */
import fs from 'node:fs';
import * as THREE from 'three';
import { ARENA_DEFINITIONS } from '../src/arena-core.js';
import { buildArenaLandmark } from '../src/arena-assets.js';
const def = ARENA_DEFINITIONS.forge, v = def.visuals;
const result = buildArenaLandmark(def, {id:'forge', ...v, accentHex:v.accent, secondaryHex:v.secondary, wallEmissive:v.accent});
result.root.updateMatrixWorld(true);
const meshes = [], matrix = new THREE.Matrix4();
result.root.traverse(o => {
  if (!o.isMesh) return;
  const g=o.geometry, m=o.material;
  for(let i=0;i<(o.isInstancedMesh?o.count:1);i++) {
    if(o.isInstancedMesh){o.getMatrixAt(i,matrix); matrix.premultiply(o.matrixWorld);} else matrix.copy(o.matrixWorld);
    meshes.push({name:o.name+(o.isInstancedMesh?`-${i}`:''),position:Array.from(g.attributes.position.array),indices:g.index?Array.from(g.index.array):null,matrix:matrix.toArray(),material:{color:m.map?[0.23,0.27,0.32]:m.color.toArray(),metalness:m.metalness||0,roughness:m.roughness??0.6,emissive:m.emissive?.toArray()||[0,0,0],emissiveIntensity:m.emissiveIntensity||0}});
  }
});
const output=process.env.CS3D_MESH_OUT||'.img2threejs/forge/runtime-meshes.json';
fs.mkdirSync(output.slice(0,output.lastIndexOf('/')),{recursive:true});
fs.writeFileSync(output,JSON.stringify({meshes,sockets:Object.keys(result.root.userData.sculptRuntime.sockets),groups:result.root.userData.sculptRuntime.destructionGroups}));
console.log(`Exported ${meshes.length} actual runtime meshes for Blender inspection`);
