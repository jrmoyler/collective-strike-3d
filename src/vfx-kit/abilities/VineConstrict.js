/**
 * Vine Constrict — growing tendrils that constrict along the line.
 */
import * as THREE from 'three';
import { AbilityBase } from '../AbilityBase.js';
import { registerAbility } from '../AbilityManager.js';
import { settings } from '../settings.js';

class VineConstrict extends AbilityBase {
  constructor(opts) {
    super(opts);
    this.vines = [];
  }

  createShaders() {
    const cfg = this.cfg;
    const mat = new THREE.MeshStandardMaterial({
      color: cfg.colorBark,
      emissive: cfg.colorVein,
      emissiveIntensity: 0.15,
      roughness: 0.85,
    });

    for (let i = 0; i < (cfg.tendrils || 7); i++) {
      const curve = new THREE.CatmullRomCurve3([
        this.origin.clone().add(new THREE.Vector3((Math.random()-0.5)*0.6, 0.1, (Math.random()-0.5)*0.6)),
        this.pointAt(0.4).add(new THREE.Vector3((Math.random()-0.5)*1.2, 0.6 + Math.random(), (Math.random()-0.5)*1.2)),
        this.pointAt(0.8).add(new THREE.Vector3((Math.random()-0.5)*1.5, 0.3, (Math.random()-0.5)*1.5)),
        this.pointAt(1).add(new THREE.Vector3((Math.random()-0.5)*0.8, 0.15, (Math.random()-0.5)*0.8)),
      ]);
      const geo = new THREE.TubeGeometry(curve, 32, 0.07, 5, false);
      const mesh = new THREE.Mesh(geo, mat.clone());
      mesh.scale.setScalar(0.01);
      this.scene.add(mesh);
      this.meshes.push(mesh);
      this.vines.push(mesh);
    }
  }

  onTravel() {
    const grow = Math.min(1, this.travelT * 1.6);
    for (const v of this.vines) {
      v.scale.setScalar(grow);
    }
  }

  onFade(dt) {
    for (const v of this.vines) {
      v.scale.multiplyScalar(Math.max(0.01, 1 - dt * 1.5));
      v.material.opacity = (v.material.opacity ?? 1) - dt * 0.6;
      v.material.transparent = true;
    }
  }
}

registerAbility('vine', VineConstrict);
export { VineConstrict };
