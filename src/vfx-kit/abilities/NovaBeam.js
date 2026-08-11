/**
 * Nova Beam — sustained energy column with coils.
 */
import * as THREE from 'three';
import { AbilityBase } from '../AbilityBase.js';
import { registerAbility } from '../AbilityManager.js';
import { settings } from '../settings.js';

class NovaBeam extends AbilityBase {
  constructor(opts) {
    super(opts);
    this.core = null;
    this.shell = null;
    this.coils = [];
  }

  createShaders() {
    const cfg = this.cfg;
    const path = new THREE.LineCurve3(this.origin.clone(), this.pointAt(1));

    // Core
    const coreGeo = new THREE.TubeGeometry(path, 48, cfg.coreRadius || 0.18, 8, false);
    const coreMat = new THREE.MeshBasicMaterial({
      color: cfg.colorCore,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.core = new THREE.Mesh(coreGeo, coreMat);
    this.scene.add(this.core);
    this.meshes.push(this.core);

    // Shell
    const shellGeo = new THREE.TubeGeometry(path, 48, cfg.shellRadius || 0.42, 10, false);
    const shellMat = new THREE.MeshBasicMaterial({
      color: cfg.colorOuter,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.shell = new THREE.Mesh(shellGeo, shellMat);
    this.scene.add(this.shell);
    this.meshes.push(this.shell);
  }

  onTravel() {
    // Charge then fire — for simplicity we appear at full power once travel ends
  }

  onImpact() {
    // Beam is already spanning; just ensure visibility
    if (this.core) this.core.material.opacity = 1.0;
    if (this.shell) this.shell.material.opacity = 0.45;
  }

  onHold(dt) {
    // Subtle pulse
    const pulse = 0.9 + Math.sin(this.age * 8) * 0.1;
    if (this.core) this.core.material.opacity = pulse;
  }

  onFade(dt) {
    if (this.core) this.core.material.opacity = Math.max(0, this.core.material.opacity - dt * 1.5);
    if (this.shell) this.shell.material.opacity = Math.max(0, this.shell.material.opacity - dt * 1.2);
  }
}

registerAbility('nova', NovaBeam);
export { NovaBeam };
