/**
 * Plasma Arc — high-frequency energy arcs.
 */
import * as THREE from 'three';
import { AbilityBase } from '../AbilityBase.js';
import { registerAbility } from '../AbilityManager.js';
import { settings } from '../settings.js';

class PlasmaArc extends AbilityBase {
  constructor(opts) {
    super(opts);
    this.arcs = [];
  }

  createShaders() {
    const cfg = this.cfg;
    const mat = new THREE.LineBasicMaterial({
      color: cfg.colorArc,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      linewidth: 2,
    });

    for (let i = 0; i < (cfg.arcs || 6); i++) {
      const points = [];
      for (let s = 0; s <= 12; s++) {
        const t = s / 12;
        const p = this.pointAt(t);
        p.x += (Math.random() - 0.5) * 0.9;
        p.y += 0.2 + Math.random() * 0.8;
        p.z += (Math.random() - 0.5) * 0.9;
        points.push(p);
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, mat.clone());
      this.scene.add(line);
      this.meshes.push(line);
      this.arcs.push(line);
    }
  }

  onTravel() {
    // arcs already drawn full length; intensity follows front
    const vis = 0.2 + this.travelT * 0.8;
    for (const a of this.arcs) a.material.opacity = vis * (0.7 + Math.random() * 0.3);
  }

  onFade(dt) {
    for (const a of this.arcs) {
      a.material.opacity = Math.max(0, a.material.opacity - dt * 3);
    }
  }
}

registerAbility('plasma', PlasmaArc);
export { PlasmaArc };
