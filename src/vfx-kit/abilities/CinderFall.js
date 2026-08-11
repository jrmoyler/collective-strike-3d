/**
 * Cinder Fall — arcing meteor with lava cracks on impact.
 */
import * as THREE from 'three';
import { AbilityBase } from '../AbilityBase.js';
import { registerAbility } from '../AbilityManager.js';
import { settings } from '../settings.js';

class CinderFall extends AbilityBase {
  constructor(opts) {
    super(opts);
    this.meteor = null;
    this.trail = null;
    this.cracks = [];
  }

  createShaders() {
    const cfg = this.cfg;
    // Meteor body
    const geo = new THREE.IcosahedronGeometry(0.45, 1);
    // roughen a few vertices for fracture feel
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(pos, i);
      v.multiplyScalar(0.85 + Math.random() * 0.3);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      color: cfg.colorCore,
      emissive: cfg.colorLava,
      emissiveIntensity: 1.4,
      roughness: 0.55,
      metalness: 0.2,
    });
    this.meteor = new THREE.Mesh(geo, mat);
    this.meteor.castShadow = true;
    this.scene.add(this.meteor);
    this.meshes.push(this.meteor);

    // Simple trail
    const trailGeo = new THREE.SphereGeometry(0.18, 6, 6);
    const trailMat = new THREE.MeshBasicMaterial({
      color: cfg.colorTrail,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.trail = new THREE.Mesh(trailGeo, trailMat);
    this.scene.add(this.trail);
    this.meshes.push(this.trail);
  }

  onTravel(dt) {
    const t = this.travelT;
    // Parabolic arc
    const pos = this.pointAt(t);
    pos.y = Math.sin(t * Math.PI) * (this.cfg.arcHeight || 4);
    this.meteor.position.copy(pos);
    this.meteor.rotation.x += dt * 4;
    this.meteor.rotation.z += dt * 2.5;

    this.trail.position.copy(pos);
    this.trail.position.y += 0.3;
    this.trail.scale.setScalar(0.7 + Math.sin(this.age * 12) * 0.2);
  }

  onImpact() {
    this.meteor.visible = false;
    this.trail.visible = false;
    // Simple crack discs on ground
    const impact = this.pointAt(1);
    for (let i = 0; i < 5; i++) {
      const crack = new THREE.Mesh(
        new THREE.CircleGeometry(0.4 + Math.random() * 1.2, 8),
        new THREE.MeshBasicMaterial({
          color: this.cfg.colorCrack,
          transparent: true,
          opacity: 0.7,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      crack.rotation.x = -Math.PI / 2;
      crack.position.copy(impact);
      crack.position.x += (Math.random() - 0.5) * 3;
      crack.position.z += (Math.random() - 0.5) * 3;
      crack.position.y = 0.02;
      this.scene.add(crack);
      this.meshes.push(crack);
      this.cracks.push(crack);
    }
  }

  onFade(dt) {
    for (const c of this.cracks) {
      c.material.opacity = Math.max(0, c.material.opacity - dt * 0.35);
    }
  }
}

registerAbility('cinder', CinderFall);
export { CinderFall };
