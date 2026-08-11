/**
 * Tidal Surge — forward-moving water wave with foam.
 */
import * as THREE from 'three';
import { AbilityBase } from '../AbilityBase.js';
import { registerAbility } from '../AbilityManager.js';
import { settings } from '../settings.js';

class TidalSurge extends AbilityBase {
  constructor(opts) {
    super(opts);
    this.wave = null;
  }

  createShaders() {
    const cfg = this.cfg;
    // Simple curved plane as wave front
    const geo = new THREE.PlaneGeometry(6, 2.2, 12, 4);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      pos.setZ(i, Math.sin((pos.getX(i) + 3) * 0.6) * 0.4 + y * 0.3);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    const mat = new THREE.MeshPhysicalMaterial({
      color: cfg.colorSurface,
      emissive: cfg.colorDeep,
      emissiveIntensity: 0.2,
      roughness: 0.15,
      metalness: 0.05,
      transmission: 0.4,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide,
    });
    this.wave = new THREE.Mesh(geo, mat);
    this.wave.rotation.x = -Math.PI / 2.4;
    this.scene.add(this.wave);
    this.meshes.push(this.wave);
  }

  onTravel() {
    const pos = this.pointAt(this.travelT);
    this.wave.position.copy(pos);
    this.wave.position.y = 0.3 + Math.sin(this.age * 6) * 0.15;
    this.wave.lookAt(this.pointAt(Math.min(1, this.travelT + 0.1)));
  }

  onFade(dt) {
    if (this.wave) {
      this.wave.material.opacity = Math.max(0, this.wave.material.opacity - dt * 0.8);
      this.wave.position.y -= dt * 0.6;
    }
  }
}

registerAbility('tidal', TidalSurge);
export { TidalSurge };
