/** Standalone reference-camera WebGL capture of the exact runtime factory. */
import fs from 'node:fs';
import http from 'node:http';
import { build } from 'esbuild';
import { chromium } from 'playwright-core';
import { resolveChromium, CHROMIUM_ARGS } from './browser.mjs';
const output=process.env.CS3D_REVIEW_OUT||'docs/arena-pipeline/forge';fs.mkdirSync(output,{recursive:true});
const source=`import * as THREE from 'three';import {ARENA_DEFINITIONS} from './src/arena-core.js';import {buildArenaLandmark} from './src/arena-assets.js';
const def=ARENA_DEFINITIONS.forge,v=def.visuals;const scene=new THREE.Scene();scene.background=new THREE.Color(0x666666);
const renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setSize(640,960);renderer.setPixelRatio(1);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;document.body.appendChild(renderer.domElement);
const camera=new THREE.OrthographicCamera(-4.68,4.68,7.02,-7.02,.1,150);const model=buildArenaLandmark(def,{id:'forge',...v,accentHex:v.accent,secondaryHex:v.secondary,wallEmissive:v.accent});scene.add(model.root);
scene.add(new THREE.HemisphereLight(0xe3eaff,0x33302c,2.4));for(const [p,intensity] of [[[7,16,10],4],[[-8,9,3],2],[[2,13,-8],3]]){const l=new THREE.DirectionalLight(0xffffff,intensity);l.position.set(...p);scene.add(l);}
window.captureAngle=i=>{camera.position.fromArray([[0,19,29],[-22,17,20],[20,18,-23]][i]);camera.lookAt(0,6,0);renderer.render(scene,camera);return {...renderer.info.render};};window.captureAngle(0);window.ready=true;`;
const result=await build({stdin:{contents:source,resolveDir:process.cwd(),loader:'js'},bundle:true,write:false,format:'iife'});
const server=http.createServer((req,res)=>{res.end(req.url==='/scene.js'?result.outputFiles[0].text:'<!doctype html><body><style>body{margin:0}</style><script src="/scene.js"></script>');});await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await chromium.launch({executablePath:resolveChromium(),args:CHROMIUM_ARGS});
try{const page=await browser.newPage({viewport:{width:640,height:960}});const errors=[];page.on('pageerror',e=>{errors.push(e.message);console.error(e.message)});page.on('console',m=>{if(m.type()==='error')console.error(m.text())});await page.goto(`http://127.0.0.1:${server.address().port}`);await page.waitForFunction(()=>window.ready,{},{timeout:90000});const metrics=[];for(let i=0;i<3;i++){metrics.push(await page.evaluate(i=>window.captureAngle(i),i));await page.screenshot({path:`${output}/webgl-angle-${i}.png`});}fs.writeFileSync(`${output}/webgl-metrics.json`,JSON.stringify({metrics,errors},null,2));if(errors.length)throw Error(errors.join('\n'));}finally{await browser.close();server.close();}
