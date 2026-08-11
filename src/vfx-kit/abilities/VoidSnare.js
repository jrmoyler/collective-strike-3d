/**
 * Void Snare — dark zone with absorbing tendrils.
 */
import * as THREE from 'three';
import { AbilityBase } from '../AbilityBase.js';
import { registerAbility } from '../AbilityManager.js';
import { settings } from '../settings.js';

class VoidSnare extends AbilityBase {
  constructor(opts) {
    super(opts);
    this.ring = null;
    this.core = null;
    this.tendrils = [];
  }

  createShaders() {
    const cfg = this.cfg;
    const centre = this.pointAt(1);
    const radius = cfg.zoneRadius || 5;

    // Dark ring
    const ringGeo = new THREE.TorusGeometry(radius, 0.1, 8, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: cfg.colorEdge,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.ring = new THREE.Mesh(ringGeo, ringMat);
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.position.copy(centre);
    this.ring.position.y = 0.04;
    this.scene.add(this.ring);
    this.meshes.push(this.ring);

    // Absorbing core
    const coreGeo = new THREE.SphereGeometry(0.6, 16, 12);
    const coreMat = new THREE.MeshBasicMaterial({
      color: cfg.colorCore,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.core = new THREE.Mesh(coreGeo, coreMat);
    this.core.position.copy(centre);
    this.core.position.y = 0.6;
    this.scene.add(this.core);
    this.meshes.push(this.core);

    // Tendrils
    const tMat = new THREE.LineBasicMaterial({
      color: cfg.colorAbsorb,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    for (let i = 0; i < (cfg.tendrils || 9); i++) {
      const angle = (i / cfg.tendrils) * Math.PI * 2;
      const points = [];
      for (let s = 0; s <= 5; s++) {
        const t = s / 5;
        points.push(new THREE.Vector3(
          centre.x + Math.cos(angle) * radius * t,
          0.2 + (1 - t) * 1.8,
          centre.z + Math.sin(angle) * radius * t
        ));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, tMat.clone());
      this.scene.add(line);
      this.meshes.push(line);
      this.tendrils.push(line);
    }
  }

  onHold(dt) {
    if (this.core) {
      const s = 0.9 + Math.sin(this.age * 4) * 0.15;
      this.core.scale.setScalar(s);
      this.core.material.opacity = 0.6 + Math.sin(this.age * 3) * 0.2;
    }
    if (this.ring) this.ring.rotation.z -= dt * 0.35;
  }

  onFade(dt) {
    for (const m of this.meshes) {
      if (m.material) m.material.opacity = Math.max(0, (m.material.opacity || 0.5) - dt * 0.8);
    }
  }
}

registerAbility('void', VoidSnare);
export { VoidSnare };
