/**
 * Voltaic Snare — far-cast zone with violet ring, tendrils and pillar.
 */
import * as THREE from 'three';
import { AbilityBase } from '../AbilityBase.js';
import { registerAbility } from '../AbilityManager.js';
import { settings } from '../settings.js';

class VoltaicSnare extends AbilityBase {
  constructor(opts) {
    super(opts);
    this.ring = null;
    this.pillar = null;
    this.tendrils = [];
  }

  createShaders() {
    const cfg = this.cfg;
    const centre = this.pointAt(1);
    const radius = cfg.zoneRadius || 5.5;

    // Ground ring
    const ringGeo = new THREE.TorusGeometry(radius, 0.12, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: cfg.colorRim,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.ring = new THREE.Mesh(ringGeo, ringMat);
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.position.copy(centre);
    this.ring.position.y = 0.05;
    this.scene.add(this.ring);
    this.meshes.push(this.ring);

    // Central pillar
    const pillarGeo = new THREE.CylinderGeometry(0.15, 0.35, cfg.pillarHeight || 3.2, 8);
    const pillarMat = new THREE.MeshBasicMaterial({
      color: cfg.colorPillar,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.pillar = new THREE.Mesh(pillarGeo, pillarMat);
    this.pillar.position.copy(centre);
    this.pillar.position.y = (cfg.pillarHeight || 3.2) * 0.5;
    this.scene.add(this.pillar);
    this.meshes.push(this.pillar);

    // Tendrils
    const tendrilMat = new THREE.LineBasicMaterial({
      color: cfg.colorArc,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    for (let i = 0; i < (cfg.tendrils || 10); i++) {
      const angle = (i / cfg.tendrils) * Math.PI * 2;
      const points = [];
      for (let s = 0; s <= 6; s++) {
        const t = s / 6;
        const r = radius * t;
        points.push(new THREE.Vector3(
          centre.x + Math.cos(angle + t * 1.2) * r,
          0.1 + Math.sin(t * Math.PI) * 1.4,
          centre.z + Math.sin(angle + t * 1.2) * r
        ));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, tendrilMat.clone());
      this.scene.add(line);
      this.meshes.push(line);
      this.tendrils.push(line);
    }
  }

  onHold(dt) {
    // Slow rotation of ring
    if (this.ring) this.ring.rotation.z += dt * 0.4;
    if (this.pillar) {
      this.pillar.material.opacity = 0.45 + Math.sin(this.age * 5) * 0.2;
    }
  }

  onFade(dt) {
    for (const m of this.meshes) {
      if (m.material) m.material.opacity = Math.max(0, (m.material.opacity || 0.5) - dt * 0.7);
    }
  }
}

registerAbility('voltaic', VoltaicSnare);
export { VoltaicSnare };
