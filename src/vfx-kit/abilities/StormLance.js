/**
 * Storm Lance — lightning bolt with filament ribbon.
 * Lightweight port of the original ThunderAbility concept.
 */
import * as THREE from 'three';
import { AbilityBase } from '../AbilityBase.js';
import { registerAbility } from '../AbilityManager.js';
import { settings } from '../settings.js';

class StormLance extends AbilityBase {
  constructor(opts) {
    super(opts);
    this.bolt = null;
    this.sparks = [];
  }

  createShaders() {
    const cfg = this.cfg;
    // Simple tube for the core bolt
    const path = new THREE.LineCurve3(
      this.origin.clone(),
      this.pointAt(1)
    );
    const geo = new THREE.TubeGeometry(path, 32, 0.08, 6, false);
    const mat = new THREE.MeshBasicMaterial({
      color: cfg.colorBolt,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.bolt = new THREE.Mesh(geo, mat);
    this.scene.add(this.bolt);
    this.meshes.push(this.bolt);

    // Filament group (thin lines)
    const filamentMat = new THREE.LineBasicMaterial({
      color: cfg.colorSpark,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    for (let i = 0; i < Math.min(cfg.filaments || 12, 16); i++) {
      const points = [];
      for (let s = 0; s <= 8; s++) {
        const t = s / 8;
        const p = this.pointAt(t);
        p.x += (Math.random() - 0.5) * 0.6 * cfg.kink;
        p.y += 0.1 + Math.random() * 0.4;
        p.z += (Math.random() - 0.5) * 0.6 * cfg.kink;
        points.push(p);
      }
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeo, filamentMat.clone());
      this.scene.add(line);
      this.meshes.push(line);
      this.sparks.push(line);
    }
  }

  onTravel() {
    // Bolt already spans the full line; fade in with travel
    if (this.bolt) {
      this.bolt.material.opacity = 0.3 + this.travelT * 0.65;
    }
  }

  onImpact() {
    // Brief intensity spike
    if (this.bolt) this.bolt.material.opacity = 1.0;
  }

  onFade(dt) {
    for (const m of this.meshes) {
      if (m.material) {
        m.material.opacity = Math.max(0, (m.material.opacity || 0.5) - dt * 2.2);
      }
    }
  }
}

registerAbility('storm', StormLance);
export { StormLance };
