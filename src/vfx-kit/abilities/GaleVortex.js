/**
 * Gale Vortex — zone of silk ribbons and wind.
 */
import * as THREE from 'three';
import { AbilityBase } from '../AbilityBase.js';
import { registerAbility } from '../AbilityManager.js';
import { settings } from '../settings.js';

class GaleVortex extends AbilityBase {
  constructor(opts) {
    super(opts);
    this.ribbons = [];
  }

  createShaders() {
    const cfg = this.cfg;
    const centre = this.pointAt(1);
    const radius = cfg.zoneRadius || 6;

    const mat = new THREE.MeshBasicMaterial({
      color: cfg.colorSilk,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    for (let i = 0; i < (cfg.ribbons || 8); i++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(centre.x, 0.2, centre.z),
        new THREE.Vector3(centre.x + Math.cos(i) * radius * 0.6, 1.5 + Math.random(), centre.z + Math.sin(i) * radius * 0.6),
        new THREE.Vector3(centre.x + Math.cos(i + 1.5) * radius, 0.8, centre.z + Math.sin(i + 1.5) * radius),
      ]);
      const geo = new THREE.TubeGeometry(curve, 24, 0.04, 4, false);
      const mesh = new THREE.Mesh(geo, mat.clone());
      mesh.userData.phase = Math.random() * Math.PI * 2;
      this.scene.add(mesh);
      this.meshes.push(mesh);
      this.ribbons.push(mesh);
    }
  }

  onHold(dt) {
    for (const r of this.ribbons) {
      r.rotation.y += dt * 1.1 * (settings.gale?.vortexStrength || 1);
      r.material.opacity = 0.3 + Math.sin(this.age * 3 + r.userData.phase) * 0.2;
    }
  }

  onFade(dt) {
    for (const r of this.ribbons) {
      r.material.opacity = Math.max(0, r.material.opacity - dt * 0.9);
    }
  }
}

registerAbility('gale', GaleVortex);
export { GaleVortex };
