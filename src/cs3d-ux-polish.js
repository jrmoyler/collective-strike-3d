/*
 * Collective Strike 3D - UX / HUD / Game-Feel Polish
 * 
 * Features:
 * - Ability cooldown radials with anticipation pulse
 * - Animated objective markers (spike, plant/defuse progress)
 * - Weapon switch animations with deliberate feel
 * - Enhanced kill feed with elimination chains
 * - Deployment shield visualization
 * - Post-round cinematic orbit + results
 */

import * as THREE from "three";
import { animate, createSpring, createTimeline, stagger } from "animejs";

// ============================================================================
// ABILITY COOLDOWN RADIAL
// ============================================================================

export class AbilityCooldownRadial {
  constructor(container, options = {}) {
    this.container = container;
    this.size = options.size || 48;
    this.strokeWidth = options.strokeWidth || 4;
    this.colors = {
      bg: options.bgColor || 'rgba(20, 20, 25, 0.6)',
      stroke: options.strokeColor || 'rgba(100, 200, 255, 0.9)',
      fill: options.fillColor || 'rgba(100, 200, 255, 0.2)',
      ready: options.readyColor || 'rgba(100, 255, 150, 1.0)',
      disabled: options.disabledColor || 'rgba(100, 100, 100, 0.3)',
    };
    
    this.cooldown = 0;
    this.maxCooldown = options.maxCooldown || 15;
    this.isReady = false;
    this.isEnabled = true;
    
    this._createSVG();
  }
  
  _createSVG() {
    const ns = 'http://www.w3.org/2000/svg';
    const size = this.size;
    const center = size / 2;
    const radius = (size - this.strokeWidth * 2) / 2;
    const circumference = 2 * Math.PI * radius;
    
    this.svg = document.createElementNS(ns, 'svg');
    this.svg.setAttribute('width', size);
    this.svg.setAttribute('height', size);
    this.svg.style.cssText = `
      display: block;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    `;
    
    // Background circle
    this.bgCircle = document.createElementNS(ns, 'circle');
    this.bgCircle.setAttribute('cx', center);
    this.bgCircle.setAttribute('cy', center);
    this.bgCircle.setAttribute('r', radius);
    this.bgCircle.setAttribute('fill', this.colors.bg);
    this.bgCircle.setAttribute('stroke', this.colors.disabled);
    this.bgCircle.setAttribute('stroke-width', this.strokeWidth);
    
    // Progress arc (cooldown)
    this.progressArc = document.createElementNS(ns, 'circle');
    this.progressArc.setAttribute('cx', center);
    this.progressArc.setAttribute('cy', center);
    this.progressArc.setAttribute('r', radius);
    this.progressArc.setAttribute('fill', 'none');
    this.progressArc.setAttribute('stroke', this.colors.stroke);
    this.progressArc.setAttribute('stroke-width', this.strokeWidth);
    this.progressArc.setAttribute('stroke-dasharray', circumference);
    this.progressArc.setAttribute('stroke-dashoffset', 0);
    this.progressArc.setAttribute('stroke-linecap', 'round');
    this.progressArc.setAttribute('transform', `rotate(-90 ${center} ${center})`);
    this.progressArc.style.opacity = '0';
    
    // Ready indicator (pulsing ring)
    this.readyRing = document.createElementNS(ns, 'circle');
    this.readyRing.setAttribute('cx', center);
    this.readyRing.setAttribute('cy', center);
    this.readyRing.setAttribute('r', radius * 0.7);
    this.readyRing.setAttribute('fill', 'none');
    this.readyRing.setAttribute('stroke', this.colors.ready);
    this.readyRing.setAttribute('stroke-width', 2);
    this.readyRing.setAttribute('opacity', '0');
    
    // Icon/text placeholder
    this.iconGroup = document.createElementNS(ns, 'g');
    this.iconGroup.setAttribute('transform', `translate(${center}, ${center})`);
    
    this.svg.appendChild(this.bgCircle);
    this.svg.appendChild(this.progressArc);
    this.svg.appendChild(this.readyRing);
    this.svg.appendChild(this.iconGroup);
    
    this.container.appendChild(this.svg);
    
    // Cache values
    this.circumference = circumference;
    this.radius = radius;
  }
  
  setCooldown(current, max) {
    this.cooldown = current;
    this.maxCooldown = max;
    this.isReady = current <= 0;
    
    const progress = max > 0 ? current / max : 0;
    const offset = this.circumference * (1 - progress);
    
    this.progressArc.setAttribute('stroke-dashoffset', offset);
    this.progressArc.style.opacity = progress > 0.01 ? '1' : '0';
    
    // Update colors based on state
    if (this.isReady && this.isEnabled) {
      this._triggerReadyPulse();
    }
  }
  
  setEnabled(enabled) {
    this.isEnabled = enabled;
    const opacity = enabled ? '1' : '0.4';
    this.svg.style.opacity = opacity;
  }
  
  _triggerReadyPulse() {
    // Animate ready ring
    animate({
      targets: this.readyRing,
      opacity: [0, 1, 0],
      r: [this.radius * 0.7, this.radius * 0.9, this.radius * 0.7],
      duration: 600,
      easing: 'easeOutQuad',
    });
    
    // Subtle scale pulse on entire radial
    animate({
      targets: this.svg,
      scale: [1, 1.08, 1],
      duration: 400,
      easing: 'easeOutElastic(1, 0.5)',
    });
  }
  
  update(deltaTime) {
    if (this.cooldown > 0 && !this.isReady) {
      this.setCooldown(Math.max(0, this.cooldown - deltaTime), this.maxCooldown);
    }
  }
  
  dispose() {
    if (this.svg && this.svg.parentNode) {
      this.svg.parentNode.removeChild(this.svg);
    }
  }
}

// ============================================================================
// OBJECTIVE MARKER ANIMATOR
// ============================================================================

export class ObjectiveMarker {
  constructor(scene, camera, type = 'spike', options = {}) {
    this.scene = scene;
    this.camera = camera;
    this.type = type; // 'spike' | 'plant' | 'defuse' | 'capture'
    this.position = options.position || new THREE.Vector3();
    this.color = this._getColorForType(type, options.color);
    this.visible = true;
    
    // Create marker mesh
    this.mesh = this._createMarker();
    this.scene.add(this.mesh);
    
    // Animation state
    this.progress = 0;
    this.isComplete = false;
    this.pulsePhase = Math.random() * Math.PI * 2;
  }
  
  _getColorForType(type, custom) {
    const colors = {
      spike: 0xff4444,
      plant: 0x44ff44,
      defuse: 0x4444ff,
      capture: 0xffff44,
    };
    return custom !== undefined ? custom : colors[type] || 0xffffff;
  }
  
  _createMarker() {
    const group = new THREE.Group();
    
    // Base ring
    const ringGeo = new THREE.TorusGeometry(0.5, 0.04, 8, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: this.color,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);
    
    // Directional arrow / indicator
    const coneGeo = new THREE.ConeGeometry(0.15, 0.4, 8);
    const coneMat = new THREE.MeshBasicMaterial({
      color: this.color,
      transparent: true,
      opacity: 0.9,
    });
    const cone = new THREE.Mesh(coneGeo, coneMat);
    cone.position.y = 0.3;
    group.add(cone);
    
    // Progress ring (for plant/defuse)
    if (this.type === 'plant' || this.type === 'defuse') {
      const progressGeo = new THREE.TorusGeometry(0.55, 0.03, 8, 32);
      const progressMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
      });
      const progressRing = new THREE.Mesh(progressGeo, progressMat);
      progressRing.rotation.x = Math.PI / 2;
      progressRing.scale.set(0, 1, 1);
      progressRing.name = 'progressRing';
      group.add(progressRing);
    }
    
    // Floating particles
    const particleCount = 8;
    const particleGeo = new THREE.SphereGeometry(0.03, 4, 4);
    const particleMat = new THREE.MeshBasicMaterial({
      color: this.color,
      transparent: true,
      opacity: 0.7,
    });
    
    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(particleGeo, particleMat.clone());
      const angle = (i / particleCount) * Math.PI * 2;
      particle.position.set(
        Math.cos(angle) * 0.6,
        0.2 + Math.sin(angle * 3) * 0.1,
        Math.sin(angle) * 0.6
      );
      particle.userData.baseAngle = angle;
      particle.userData.orbitSpeed = 0.5 + Math.random() * 0.5;
      group.add(particle);
    }
    
    // Glow sprite
    const canvas = this._createGlowTexture();
    const texture = new THREE.CanvasTexture(canvas);
    const glowMat = new THREE.SpriteMaterial({
      map: texture,
      color: this.color,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });
    const glow = new THREE.Sprite(glowMat);
    glow.scale.set(2, 2, 1);
    glow.position.y = 0.1;
    group.add(glow);
    
    group.position.copy(this.position);
    return group;
  }
  
  _createGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    
    return canvas;
  }
  
  setPosition(position) {
    this.position.copy(position);
    this.mesh.position.copy(position);
  }
  
  setProgress(value) {
    this.progress = Math.max(0, Math.min(1, value));
    this.isComplete = this.progress >= 1;
    
    // Update progress ring scale
    const progressRing = this.mesh.getObjectByName('progressRing');
    if (progressRing) {
      progressRing.scale.setX(this.progress);
    }
    
    // Intensify pulse when complete
    if (this.isComplete) {
      this._triggerCompletionEffect();
    }
  }
  
  _triggerCompletionEffect() {
    // Flash and expand
    animate({
      targets: this.mesh.children,
      scale: [1, 1.5, 1],
      opacity: [0.8, 1, 0.8],
      duration: 400,
      easing: 'easeOutQuad',
    });
  }
  
  setVisible(visible) {
    this.visible = visible;
    this.mesh.visible = visible;
  }
  
  update(deltaTime, time) {
    if (!this.visible) return;
    
    // Face camera
    this.mesh.lookAt(this.camera.position);
    
    // Gentle float
    this.mesh.position.y = this.position.y + Math.sin(time * 2 + this.pulsePhase) * 0.05;
    
    // Rotate ring
    const ring = this.mesh.children[0];
    if (ring) {
      ring.rotation.z += deltaTime * 0.5;
    }
    
    // Orbit particles
    this.mesh.children.forEach(child => {
      if (child.userData.baseAngle !== undefined) {
        const angle = child.userData.baseAngle + time * child.userData.orbitSpeed;
        child.position.x = Math.cos(angle) * 0.6;
        child.position.z = Math.sin(angle) * 0.6;
        child.position.y = 0.2 + Math.sin(angle * 3 + time) * 0.1;
      }
    });
    
    // Pulse glow
    const glow = this.mesh.children.find(c => c instanceof THREE.Sprite);
    if (glow) {
      const pulse = 0.8 + Math.sin(time * 3 + this.pulsePhase) * 0.2;
      glow.material.opacity = 0.3 * pulse;
    }
  }
  
  dispose() {
    this.scene.remove(this.mesh);
    
    // Dispose geometries and materials
    this.mesh.traverse(child => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
  }
}

// ============================================================================
// WEAPON SWITCH ANIMATOR
// ============================================================================

export class WeaponSwitchAnimator {
  constructor(camera, weaponGroup, options = {}) {
    this.camera = camera;
    this.weaponGroup = weaponGroup;
    this.isSwitching = false;
    this.isReady = true;
    
    // Animation parameters
    this.lowerDuration = options.lowerDuration || 200;
    this.raiseDuration = options.raiseDuration || 300;
    this.readyDelay = options.readyDelay || 100;
    
    // Store original transform
    this.originalPosition = weaponGroup ? weaponGroup.position.clone() : new THREE.Vector3();
    this.originalRotation = weaponGroup ? weaponGroup.quaternion.clone() : new THREE.Quaternion();
    
    // Lower position (out of view)
    this.lowerPosition = new THREE.Vector3(
      this.originalPosition.x,
      this.originalPosition.y - 1.5,
      this.originalPosition.z + 0.5
    );
  }
  
  switch(callback) {
    if (this.isSwitching) return;
    
    this.isSwitching = false;
    this.isReady = false;
    
    const timeline = createTimeline({
      onComplete: () => {
        this.isReady = true;
        callback?.();
      }
    });
    
    // Quick lower
    timeline.add({
      targets: this.weaponGroup.position,
      x: this.lowerPosition.x,
      y: this.lowerPosition.y,
      z: this.lowerPosition.z,
      duration: this.lowerDuration,
      easing: 'easeInQuad',
    }, 0);
    
    // Rotate down slightly
    timeline.add({
      targets: this.weaponGroup.rotation,
      x: this.weaponGroup.rotation.x - 0.3,
      duration: this.lowerDuration,
      easing: 'easeInQuad',
    }, 0);
    
    // Raise with delay
    timeline.add({
      targets: this.weaponGroup.position,
      x: this.originalPosition.x,
      y: this.originalPosition.y,
      z: this.originalPosition.z,
      duration: this.raiseDuration,
      easing: 'easeOutCubic',
    }, this.lowerDuration + this.readyDelay);
    
    // Rotate back
    timeline.add({
      targets: this.weaponGroup.rotation,
      x: this.originalRotation.x,
      duration: this.raiseDuration,
      easing: 'easeOutCubic',
    }, this.lowerDuration + this.readyDelay);
    
    // Add subtle bounce at end
    timeline.add({
      targets: this.weaponGroup.position,
      y: this.originalPosition.y + 0.05,
      duration: 80,
      easing: 'easeOutQuad',
    }, this.lowerDuration + this.readyDelay + this.raiseDuration - 50);
    
    timeline.add({
      targets: this.weaponGroup.position,
      y: this.originalPosition.y,
      duration: 120,
      easing: 'easeInOutQuad',
    }, this.lowerDuration + this.readyDelay + this.raiseDuration + 30);
  }
  
  quickRaise() {
    if (!this.weaponGroup) return;
    
    animate({
      targets: this.weaponGroup.position,
      y: this.originalPosition.y,
      duration: 150,
      easing: 'easeOutCubic',
    });
  }
}

// ============================================================================
// KILL FEED MANAGER
// ============================================================================

export class KillFeedManager {
  constructor(container, options = {}) {
    this.container = container;
    this.maxEntries = options.maxEntries || 5;
    this.entries = [];
    this.killStreaks = new Map();
    
    // Styling
    this.styles = {
      bgColor: 'rgba(10, 10, 15, 0.85)',
      textColor: '#ffffff',
      accentColor: '#ff4444',
      streakColor: '#ffaa00',
      fontFamily: '"Space Grotesk", sans-serif',
    };
    
    this._initContainer();
  }
  
  _initContainer() {
    this.feedElement = document.createElement('div');
    this.feedElement.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: none;
      z-index: 1000;
    `;
    this.container.appendChild(this.feedElement);
  }
  
  addKill(killer, victim, weapon, isHeadshot = false, isMultiKill = false) {
    const entry = {
      id: Date.now() + Math.random(),
      killer,
      victim,
      weapon,
      isHeadshot,
      isMultiKill,
      timestamp: Date.now(),
      element: null,
    };
    
    // Track streaks
    const currentStreak = (this.killStreaks.get(killer) || 0) + 1;
    this.killStreaks.set(killer, currentStreak);
    entry.streak = currentStreak;
    
    // Create DOM element
    const el = this._createEntryElement(entry);
    entry.element = el;
    
    // Add to feed
    this.entries.unshift(entry);
    this.feedElement.insertBefore(el, this.feedElement.firstChild);
    
    // Trim old entries
    if (this.entries.length > this.maxEntries) {
      const old = this.entries.pop();
      this._removeEntry(old);
    }
    
    // Animate in
    this._animateEntryIn(el);
    
    // Check for multi-kill effects
    if (isMultiKill || currentStreak >= 3) {
      this._triggerMultiKillEffect(entry);
    }
    
    // Auto-remove after delay
    setTimeout(() => this._removeEntry(entry), 5000);
    
    return entry;
  }
  
  _createEntryElement(entry) {
    const el = document.createElement('div');
    el.style.cssText = `
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      background: ${this.styles.bgColor};
      border-radius: 4px;
      border-left: 3px solid ${entry.isHeadshot ? '#ff6666' : this.styles.accentColor};
      font-family: ${this.styles.fontFamily};
      font-size: 14px;
      color: ${this.styles.textColor};
      opacity: 0;
      transform: translateX(50px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    `;
    
    // Killer name
    const killerEl = document.createElement('span');
    killerEl.textContent = entry.killer;
    killerEl.style.fontWeight = '700';
    killerEl.style.color = '#44ff88';
    el.appendChild(killerEl);
    
    // Weapon icon/text
    const weaponEl = document.createElement('span');
    weaponEl.textContent = entry.weapon;
    weaponEl.style.opacity = '0.7';
    weaponEl.style.fontSize = '12px';
    el.appendChild(weaponEl);
    
    // Victim name
    const victimEl = document.createElement('span');
    victimEl.textContent = entry.victim;
    victimEl.style.fontWeight = '500';
    el.appendChild(victimEl);
    
    // Headshot indicator
    if (entry.isHeadshot) {
      const hsEl = document.createElement('span');
      hsEl.textContent = '💀';
      hsEl.style.fontSize = '12px';
      el.appendChild(hsEl);
    }
    
    // Streak counter
    if (entry.streak >= 3) {
      const streakEl = document.createElement('span');
      streakEl.textContent = `🔥${entry.streak}`;
      streakEl.style.color = this.styles.streakColor;
      streakEl.style.fontWeight = '700';
      streakEl.style.marginLeft = '8px';
      el.appendChild(streakEl);
    }
    
    return el;
  }
  
  _animateEntryIn(el) {
    animate({
      targets: el,
      opacity: [0, 1],
      translateX: ['50px', '0'],
      duration: 300,
      easing: 'easeOutCubic',
    });
  }
  
  _removeEntry(entry) {
    if (!entry.element || !entry.element.parentNode) return;
    
    animate({
      targets: entry.element,
      opacity: [1, 0],
      translateX: ['0', '50px'],
      duration: 200,
      easing: 'easeInQuad',
      complete: () => {
        if (entry.element.parentNode) {
          entry.element.parentNode.removeChild(entry.element);
        }
      }
    });
    
    const index = this.entries.indexOf(entry);
    if (index >= 0) this.entries.splice(index, 1);
  }
  
  _triggerMultiKillEffect(entry) {
    // Could trigger screen shake, slow-mo, or special VFX here
    // This integrates with the post-process manager
  }
  
  clear() {
    this.entries.forEach(entry => this._removeEntry(entry));
    this.killStreaks.clear();
  }
  
  dispose() {
    this.clear();
    if (this.feedElement && this.feedElement.parentNode) {
      this.feedElement.parentNode.removeChild(this.feedElement);
    }
  }
}

// ============================================================================
// DEPLOYMENT SHIELD VISUALIZER
// ============================================================================

export class DeploymentShield {
  constructor(scene, camera, playerObject, options = {}) {
    this.scene = scene;
    this.camera = camera;
    this.playerObject = playerObject;
    this.isActive = false;
    this.isFiring = false;
    
    // Shield properties
    this.radius = options.radius || 2.5;
    this.segments = options.segments || 32;
    this.color = options.color || 0x4488ff;
    this.opacity = options.opacity || 0.3;
    
    // Create shield mesh
    this.shield = this._createShield();
    this.scene.add(this.shield);
    this.shield.visible = false;
  }
  
  _createShield() {
    const group = new THREE.Group();
    
    // Hemisphere dome
    const domeGeo = new THREE.SphereGeometry(this.radius, this.segments, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(this.color) },
        opacity: { value: this.opacity },
        fresnelPower: { value: 2.0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        uniform float fresnelPower;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vec3 viewDir = normalize(cameraPosition - vPosition);
          float fresnel = pow(1.0 - dot(viewDir, vNormal), fresnelPower);
          float alpha = opacity * (0.3 + fresnel * 0.7);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    
    const dome = new THREE.Mesh(domeGeo, domeMat);
    dome.name = 'shieldDome';
    group.add(dome);
    
    // Energy ring at base
    const ringGeo = new THREE.TorusGeometry(this.radius, 0.05, 8, this.segments);
    const ringMat = new THREE.MeshBasicMaterial({
      color: this.color,
      transparent: true,
      opacity: 0.6,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.02;
    ring.name = 'shieldRing';
    group.add(ring);
    
    return group;
  }
  
  activate() {
    this.isActive = true;
    this.isFiring = false;
    this.shield.visible = true;
    
    // Animate activation
    const dome = this.shield.getObjectByName('shieldDome');
    if (dome) {
      dome.scale.set(0.8, 0.8, 0.8);
      dome.material.uniforms.opacity.value = 0;
      
      animate({
        targets: dome.scale,
        x: 1,
        y: 1,
        z: 1,
        duration: 400,
        easing: 'easeOutCubic',
      });
      
      animate({
        targets: dome.material.uniforms.opacity,
        value: this.opacity,
        duration: 300,
        easing: 'easeOutQuad',
      });
    }
  }
  
  deactivate() {
    this.isActive = false;
    this.isFiring = false;
    
    // Animate collapse
    const dome = this.shield.getObjectByName('shieldDome');
    if (dome) {
      animate({
        targets: [dome.scale, dome.material.uniforms.opacity],
        x: 0.5,
        y: 0.5,
        z: 0.5,
        value: 0,
        duration: 200,
        easing: 'easeInCubic',
        complete: () => {
          this.shield.visible = false;
        }
      });
    }
  }
  
  fire() {
    if (!this.isActive) return;
    
    this.isFiring = true;
    
    // Dramatic shield collapse effect
    const dome = this.shield.getObjectByName('shieldDome');
    const ring = this.shield.getObjectByName('shieldRing');
    
    // Quick flash
    dome.material.uniforms.opacity.value = 0.8;
    
    // Collapse animation
    animate({
      targets: dome.scale,
      x: 0.3,
      y: 0.3,
      z: 0.3,
      duration: 150,
      easing: 'easeInQuad',
    });
    
    animate({
      targets: dome.material.uniforms.opacity,
      value: 0,
      duration: 200,
      easing: 'easeInCubic',
    });
    
    // Ring implosion
    animate({
      targets: ring.scale,
      x: 0.2,
      y: 0.2,
      z: 0.2,
      duration: 150,
      easing: 'easeInQuad',
    });
    
    setTimeout(() => {
      this.isActive = false;
      this.shield.visible = false;
    }, 200);
  }
  
  update(deltaTime, time) {
    if (!this.isActive || !this.shield.visible) return;
    
    // Follow player
    this.shield.position.copy(this.playerObject.position);
    this.shield.position.y += 0.5;
    
    // Rotate slowly
    const ring = this.shield.getObjectByName('shieldRing');
    if (ring) {
      ring.rotation.z += deltaTime * 0.3;
    }
    
    // Update shader time
    const dome = this.shield.getObjectByName('shieldDome');
    if (dome) {
      dome.material.uniforms.time.value = time;
    }
    
    // Face camera slightly
    this.shield.lookAt(
      this.shield.position.x,
      this.shield.position.y,
      this.camera.position.z
    );
  }
  
  dispose() {
    this.scene.remove(this.shield);
    this.shield.traverse(child => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (child.material.uniforms) {
          Object.values(child.material.uniforms).forEach(u => {
            if (u.value && u.value.dispose) u.value.dispose();
          });
        }
        child.material.dispose();
      }
    });
  }
}

// ============================================================================
// POST-ROUND CINEMATIC ORBIT
// ============================================================================

export class PostRoundCinematic {
  constructor(scene, camera, renderer, options = {}) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.isActive = false;
    this.callbacks = { onComplete: null };
    
    // Orbit parameters
    this.center = options.center || new THREE.Vector3();
    this.radius = options.radius || 8;
    this.height = options.height || 3;
    this.duration = options.duration || 4000;
    this.startAngle = options.startAngle || 0;
    this.endAngle = options.endAngle || Math.PI;
  }
  
  start(center, callbacks = {}) {
    this.center.copy(center);
    this.callbacks = callbacks;
    this.isActive = true;
    
    const startTime = performance.now();
    const startPos = this.camera.position.clone();
    
    const animateOrbit = () => {
      if (!this.isActive) return;
      
      const elapsed = performance.now() - startTime;
      const t = Math.min(1, elapsed / this.duration);
      const eased = this._easeInOutCubic(t);
      
      // Calculate orbit position
      const angle = this.startAngle + (this.endAngle - this.startAngle) * eased;
      const targetPos = new THREE.Vector3(
        this.center.x + Math.cos(angle) * this.radius,
        this.center.y + this.height * Math.sin(eased * Math.PI),
        this.center.z + Math.sin(angle) * this.radius
      );
      
      // Smooth interpolate
      this.camera.position.lerp(targetPos, 0.05);
      this.camera.lookAt(this.center);
      
      if (t < 1) {
        requestAnimationFrame(animate_orbit);
      } else {
        this.isActive = false;
        this.callbacks.onComplete?.();
      }
    };
    
    animate_orbit();
  }
  
  _easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  
  stop() {
    this.isActive = false;
  }
}

// ============================================================================
// RESULTS PANEL ANIMATOR
// ============================================================================

export class ResultsPanelAnimator {
  constructor(container, options = {}) {
    this.container = container;
    this.panel = null;
  }
  
  show(results, options = {}) {
    const { victory, score, stats, rewards } = results;
    
    // Create panel
    this.panel = document.createElement('div');
    this.panel.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      background: linear-gradient(135deg, rgba(20, 20, 30, 0.95), rgba(10, 10, 15, 0.98));
      border: 2px solid ${victory ? '#44ff88' : '#ff4466'};
      border-radius: 12px;
      padding: 40px 60px;
      color: white;
      font-family: "Space Grotesk", sans-serif;
      text-align: center;
      opacity: 0;
      z-index: 2000;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    `;
    
    // Victory/Defeat title
    const title = document.createElement('h1');
    title.textContent = victory ? 'VICTORY' : 'DEFEAT';
    title.style.cssText = `
      font-size: 48px;
      font-weight: 900;
      margin: 0 0 20px 0;
      color: ${victory ? '#44ff88' : '#ff4466'};
      text-shadow: 0 0 20px ${victory ? 'rgba(68, 255, 136, 0.5)' : 'rgba(255, 68, 102, 0.5)'};
      letter-spacing: 4px;
    `;
    this.panel.appendChild(title);
    
    // Score
    const scoreEl = document.createElement('div');
    scoreEl.textContent = `Score: ${score.toLocaleString()}`;
    scoreEl.style.cssText = `
      font-size: 28px;
      font-weight: 700;
      margin: 0 0 30px 0;
      color: #ffffff;
    `;
    this.panel.appendChild(scoreEl);
    
    // Stats grid
    if (stats) {
      const statsGrid = document.createElement('div');
      statsGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 30px;
      `;
      
      Object.entries(stats).forEach(([key, value]) => {
        const statEl = document.createElement('div');
        statEl.style.cssText = `
          padding: 15px;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
        `;
        
        const label = document.createElement('div');
        label.textContent = this._formatStatKey(key);
        label.style.cssText = `
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        `;
        
        const valueEl = document.createElement('div');
        valueEl.textContent = value;
        valueEl.style.cssText = `
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin-top: 5px;
        `;
        
        statEl.appendChild(label);
        statEl.appendChild(valueEl);
        statsGrid.appendChild(statEl);
      });
      
      this.panel.appendChild(statsGrid);
    }
    
    // Rewards
    if (rewards && rewards.length > 0) {
      const rewardsEl = document.createElement('div');
      rewardsEl.style.cssText = `
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid rgba(255,255,255,0.1);
      `;
      
      rewards.forEach(reward => {
        const rewardEl = document.createElement('div');
        rewardEl.textContent = `+ ${reward}`;
        rewardEl.style.cssText = `
          font-size: 16px;
          color: #ffaa00;
          margin: 5px 0;
        `;
        rewardsEl.appendChild(rewardEl);
      });
      
      this.panel.appendChild(rewardsEl);
    }
    
    document.body.appendChild(this.panel);
    
    // Animate in
    animate({
      targets: this.panel,
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 500,
      easing: 'easeOutCubic',
      delay: 200,
    });
    
    // Stagger animate stats
    animate({
      targets: this.panel.querySelectorAll('[style*="grid"] > div'),
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 400,
      easing: 'easeOutCubic',
      delay: stagger(100, { start: 400 }),
    });
  }
  
  hide() {
    if (!this.panel) return;
    
    animate({
      targets: this.panel,
      opacity: [1, 0],
      scale: [1, 0.95],
      duration: 300,
      easing: 'easeInQuad',
      complete: () => {
        if (this.panel && this.panel.parentNode) {
          this.panel.parentNode.removeChild(this.panel);
        }
        this.panel = null;
      }
    });
  }
  
  _formatStatKey(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  }
}
