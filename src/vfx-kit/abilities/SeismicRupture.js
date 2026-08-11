/**
 * Seismic Rupture — earth plates heave along the line.
 */
import * as THREE from 'three';
import { AbilityBase } from '../AbilityBase.js';
import { registerAbility } from '../AbilityManager.js';
import { settings } from '../settings.js';

class SeismicRupture extends AbilityBase {
  constructor(opts) {
    super(opts);
    this.plates = [];
  }

  createShaders() {
    const cfg = this.cfg;
    const count = Math.min(cfg.plates || 12, 16);
    for (let i = 0; i < count; i++) {
      const t = (i + 0.5) / count;
      const size = 0.7 + Math.random() * 1.1;
      const geo = new THREE.BoxGeometry(size, 0.25, size * 0.7);
      const mat = new THREE.MeshStandardMaterial({
        color: cfg.colorStone,
        roughness: 0.9,
        metalness: 0.05,
        emissive: cfg.colorHot,
        emissiveIntensity: 0.15,
      });
      const plate = new THREE.Mesh(geo, mat);
      plate.userData = { t, baseY: 0, heave: 0.4 + Math.random() * (cfg.heaveHeight || 1.6) };
      this.scene.add(plate);
      this.meshes.push(plate);
      this.plates.push(plate);
    }
  }

  onTravel() {
    for (const p of this.plates) {
      if (p.userData.t > this.travelT) {
        p.visible = false;
        continue;
      }
      p.visible = true;
      const pos = this.pointAt(p.userData.t);
      p.position.set(pos.x, p.userData.heave * Math.min(1, (this.travelT - p.userData.t) * 4), pos.z);
      p.rotation.y = p.userData.t * 2;
    }
  }

  onFade(dt) {
    for (const p of this.plates) {
      p.position.y = Math.max(0, p.position.y - dt * 1.8);
      p.material.opacity = (p.material.opacity ?? 1) - dt * 0.4;
      p.material.transparent = true;
    }
  }
}

registerAbility('seismic', SeismicRupture);
export { SeismicRupture };
