/**
 * Frost Lance — line cast.
 * Fracture front + procedural ice crystal field (dense near caster, wall at impact).
 * Follows the exact design rules of the original LinearAbilityCastingThreeJS IceAbility.
 */

import * as THREE from 'three';
import { AbilityBase, Phase } from '../AbilityBase.js';
import { registerAbility } from '../AbilityManager.js';
import { settings } from '../settings.js';

// Simple procedural crystal geometry (6-sided tapered spike)
function makeCrystalGeometry(facets = 6, taper = 0.72, radius = 0.22, height = 1.4) {
  const geo = new THREE.CylinderGeometry(radius * taper, radius, height, facets, 1, false);
  geo.translate(0, height * 0.5, 0);
  // slight random lean baked into instances later
  return geo;
}

class FrostLance extends AbilityBase {
  constructor(opts) {
    super(opts);
    this.crystals = null;
    this.shockRing = null;
    this.mistEmitter = null;
    this._records = []; // fractional records only
  }

  onSpawn() {
    this._records.length = 0;
    const cfg = this.cfg;
    const q = settings.global.qualityScale;
    const count = Math.floor(48 * q);

    // Build fractional records (never store metres)
    for (let i = 0; i < count; i++) {
      const t = Math.pow(Math.random(), 0.7); // denser near origin
      const lateral = (Math.random() - 0.5) * 2.2 * (0.4 + t * 0.8);
      const heightJitter = 0.6 + Math.random() * 1.4;
      const lean = (Math.random() - 0.5) * cfg.lean;
      const scale = 0.55 + Math.random() * 0.9;
      this._records.push({ t, lateral, heightJitter, lean, scale, born: this.age });
    }
  }

  createShaders() {
    const cfg = this.cfg;
    const geo = makeCrystalGeometry(cfg.facets, cfg.taper);
    const mat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(cfg.colorFrost),
      emissive: new THREE.Color(cfg.colorCore),
      emissiveIntensity: 0.25,
      roughness: cfg.roughness,
      metalness: 0.05,
      transmission: 0.55,
      thickness: 0.4,
      transparent: true,
      opacity: cfg.opacity,
      side: THREE.DoubleSide,
      depthWrite: true,
    });

    this.crystals = new THREE.InstancedMesh(geo, mat, this._records.length);
    this.crystals.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.crystals.frustumCulled = false;
    this.scene.add(this.crystals);
    this.meshes.push(this.crystals);

    // Shock ring (simple torus for now)
    const ringGeo = new THREE.TorusGeometry(1, 0.06, 8, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: cfg.colorShockA,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.shockRing = new THREE.Mesh(ringGeo, ringMat);
    this.shockRing.visible = false;
    this.scene.add(this.shockRing);
    this.meshes.push(this.shockRing);
  }

  onTravel(dt) {
    this._syncInstances();
  }

  onImpact() {
    // Place shock ring at impact point
    const impact = this.pointAt(1);
    this.shockRing.position.copy(impact);
    this.shockRing.position.y = 0.05;
    this.shockRing.scale.setScalar(0.2);
    this.shockRing.material.opacity = 0.85;
    this.shockRing.visible = true;
  }

  onHold(dt) {
    this._syncInstances();
    // Expand & fade shock
    if (this.shockRing.visible) {
      const s = this.shockRing.scale.x + dt * 4.5;
      this.shockRing.scale.setScalar(s);
      this.shockRing.material.opacity = Math.max(0, 0.85 - (s - 0.2) * 0.25);
      if (this.shockRing.material.opacity <= 0) this.shockRing.visible = false;
    }
  }

  onFade(dt) {
    this._syncInstances();
    if (this.crystals) {
      this.crystals.material.opacity = Math.max(0, this.crystals.material.opacity - dt * 0.6);
    }
  }

  _syncInstances() {
    if (!this.crystals) return;
    const cfg = this.cfg;
    const dummy = new THREE.Object3D();
    const up = new THREE.Vector3(0, 1, 0);

    for (let i = 0; i < this._records.length; i++) {
      const r = this._records[i];
      // Only reveal crystals that the front has reached
      if (r.t > this.travelT + 0.02) {
        dummy.scale.setScalar(0);
        dummy.updateMatrix();
        this.crystals.setMatrixAt(i, dummy.matrix);
        continue;
      }

      // Resolve all dimensions live from settings
      const pos = this.pointAt(r.t);
      const right = new THREE.Vector3().crossVectors(this.dir, up).normalize();
      pos.addScaledVector(right, r.lateral * (0.8 + r.t * 1.4));

      const h = THREE.MathUtils.lerp(cfg.heightMin, cfg.heightMax, r.heightJitter) * r.scale;
      pos.y = 0;

      dummy.position.copy(pos);
      dummy.scale.set(r.scale * 0.7, h / 1.4, r.scale * 0.7);
      dummy.rotation.set(r.lean, Math.random() * 0.1, r.lean * 0.6);
      dummy.updateMatrix();
      this.crystals.setMatrixAt(i, dummy.matrix);
    }
    this.crystals.instanceMatrix.needsUpdate = true;
  }

  onDispose() {
    this._records.length = 0;
  }
}

registerAbility('frost', FrostLance);
export { FrostLance };
