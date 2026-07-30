/**
 * Procedural Apex boss mesh and locomotion system.
 *
 * Bosses are intentionally assembled from offline-safe Three.js primitives.
 * Every locomotion class has a distinct silhouette and animation path, and
 * destroyable segment records retain their own mesh and health fraction.
 */

import { resolveBossLocos } from './boss-dna.js';

const TAU = Math.PI * 2;

function makeMaterial(THREE, color, {
  emissive = color,
  emissiveIntensity = 0.16,
  metalness = 0.45,
  roughness = 0.38,
  transparent = false,
  opacity = 1,
} = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    emissive,
    emissiveIntensity,
    metalness,
    roughness,
    transparent,
    opacity,
  });
}

function addMesh(THREE, parent, geometry, material, parts, {
  position = [0, 0, 0],
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
  name = '',
} = {}) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  mesh.rotation.set(...rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  parts.push(mesh);
  return mesh;
}

function addLimb(THREE, parent, material, parts, limbs, {
  x,
  z,
  upperY,
  lowerY,
  scale,
  phase,
}) {
  const pivot = new THREE.Group();
  pivot.position.set(x, upperY, z);
  parent.add(pivot);
  const upper = addMesh(
    THREE,
    pivot,
    new THREE.CapsuleGeometry(0.12 * scale, 0.46 * scale, 5, 8),
    material,
    parts,
    { position: [0, -0.28 * scale, 0], rotation: [0, 0, x < 0 ? -0.08 : 0.08] },
  );
  const foot = addMesh(
    THREE,
    pivot,
    new THREE.BoxGeometry(0.28 * scale, 0.16 * scale, 0.5 * scale),
    material,
    parts,
    { position: [0, lowerY - upperY, 0.12 * scale] },
  );
  limbs.push({ pivot, upper, foot, phase, restY: foot.position.y });
}

function buildCore(THREE, body, dna, scale, materials, parts) {
  const width = (dna.body?.[0] || 0.9) * scale;
  const length = (dna.body?.[1] || 1.1) * scale;
  const torso = addMesh(
    THREE,
    body,
    new THREE.SphereGeometry(1, 22, 16),
    materials.skin,
    parts,
    {
      position: [0, 1.28 * scale, 0],
      scale: [width, length * 0.72, width * 0.88],
      name: 'apex-core',
    },
  );

  const armor = addMesh(
    THREE,
    body,
    new THREE.IcosahedronGeometry(1, 1),
    materials.armor,
    parts,
    {
      position: [0, 1.38 * scale, -0.08 * scale],
      scale: [width * 1.04, length * 0.34, width * 0.94],
      name: 'apex-carapace',
    },
  );

  let head = null;
  if ((dna.head || 0) > 0) {
    head = addMesh(
      THREE,
      body,
      new THREE.SphereGeometry(1, 18, 12),
      materials.skin,
      parts,
      {
        position: [0, 2.18 * scale, 0.12 * scale],
        scale: [dna.head * scale, dna.head * scale * 0.82, dna.head * scale],
        name: 'apex-head',
      },
    );
    addMesh(
      THREE,
      head,
      new THREE.BoxGeometry(0.72, 0.16, 0.12),
      materials.eye,
      parts,
      { position: [0, 0.04, 0.9], name: 'apex-visor' },
    );
  }
  return { torso, armor, head };
}

function buildColossus(THREE, rig, materials) {
  const { body, scale, parts, limbs } = rig;
  for (const side of [-1, 1]) {
    addLimb(THREE, body, materials.armor, parts, limbs, {
      x: side * 0.62 * scale,
      z: -0.38 * scale,
      upperY: 0.96 * scale,
      lowerY: 0.13 * scale,
      scale: 1.15 * scale,
      phase: side < 0 ? 0 : Math.PI,
    });
    addLimb(THREE, body, materials.armor, parts, limbs, {
      x: side * 0.62 * scale,
      z: 0.4 * scale,
      upperY: 0.92 * scale,
      lowerY: 0.13 * scale,
      scale: scale,
      phase: side < 0 ? Math.PI : 0,
    });
  }
  rig.stompRing = addMesh(
    THREE,
    body,
    new THREE.TorusGeometry(1.15 * scale, 0.055 * scale, 8, 36),
    materials.energy,
    parts,
    { position: [0, 0.12, 0], rotation: [Math.PI / 2, 0, 0], name: 'stomp-telegraph' },
  );
}

function buildSwarmHost(THREE, rig, materials, headMode = false) {
  const count = rig.dna.segments || 4;
  for (let index = 0; index < count; index++) {
    const anchor = new THREE.Group();
    rig.body.add(anchor);
    const mesh = addMesh(
      THREE,
      anchor,
      headMode ? new THREE.ConeGeometry(0.24 * rig.scale, 0.72 * rig.scale, 8) : new THREE.OctahedronGeometry(0.34 * rig.scale, 1),
      index % 2 ? materials.accent : materials.energy,
      rig.parts,
      {
        rotation: headMode ? [Math.PI / 2, 0, 0] : [0, 0, 0],
        name: headMode ? `hydra-head-${index + 1}` : `swarm-drone-${index + 1}`,
      },
    );
    const eye = addMesh(
      THREE,
      mesh,
      new THREE.SphereGeometry(0.09 * rig.scale, 10, 8),
      materials.eye,
      rig.parts,
      { position: [0, headMode ? 0.22 * rig.scale : 0.08 * rig.scale, headMode ? 0.34 * rig.scale : 0.3 * rig.scale] },
    );
    rig.segments.push({
      type: headMode ? 'head' : 'drone',
      index,
      alive: true,
      hpFraction: headMode ? 0.18 : 0.12,
      anchor,
      mesh,
      eye,
      orbit: 0.86 * rig.scale + index * 0.07,
      phase: index / count * TAU,
    });
  }
}

function buildPhase(THREE, rig, materials) {
  rig.phaseShells = [];
  for (let index = 0; index < 3; index++) {
    const shell = addMesh(
      THREE,
      rig.body,
      new THREE.IcosahedronGeometry(1, 1),
      makeMaterial(THREE, rig.dna.accent, {
        transparent: true,
        opacity: 0.13,
        metalness: 0.15,
        roughness: 0.2,
        emissiveIntensity: 0.8,
      }),
      rig.parts,
      {
        position: [0, 1.36 * rig.scale, 0],
        scale: [1.05 + index * 0.13, 1.25 + index * 0.16, 0.82 + index * 0.12].map(v => v * rig.scale),
        name: `phase-echo-${index + 1}`,
      },
    );
    rig.phaseShells.push(shell);
  }
}

function buildOrbital(THREE, rig, materials) {
  const count = rig.dna.segments || 4;
  for (let index = 0; index < count; index++) {
    const anchor = new THREE.Group();
    rig.body.add(anchor);
    const mesh = addMesh(
      THREE,
      anchor,
      new THREE.TorusGeometry(0.34 * rig.scale, 0.08 * rig.scale, 8, 24),
      index % 2 ? materials.accent : materials.energy,
      rig.parts,
      { rotation: [Math.PI / 2, index * 0.37, 0], name: `orbital-segment-${index + 1}` },
    );
    rig.segments.push({
      type: 'ring',
      index,
      alive: true,
      hpFraction: 0.14,
      anchor,
      mesh,
      orbit: 0.75 * rig.scale + (index % 2) * 0.32 * rig.scale,
      phase: index / count * TAU,
    });
  }
}

function buildAnchor(THREE, rig, materials) {
  rig.roots = [];
  for (let index = 0; index < 8; index++) {
    const root = addMesh(
      THREE,
      rig.body,
      new THREE.ConeGeometry(0.13 * rig.scale, 1.08 * rig.scale, 7),
      index % 2 ? materials.armor : materials.accent,
      rig.parts,
      {
        position: [
          Math.cos(index / 8 * TAU) * 0.54 * rig.scale,
          0.34 * rig.scale,
          Math.sin(index / 8 * TAU) * 0.54 * rig.scale,
        ],
        rotation: [0, 0, Math.PI * 0.43],
        name: `anchor-root-${index + 1}`,
      },
    );
    root.rotation.y = -index / 8 * TAU;
    rig.roots.push(root);
  }
}

function buildStorm(THREE, rig, materials) {
  rig.wings = [];
  for (const side of [-1, 1]) {
    const wing = new THREE.Group();
    wing.position.set(side * 0.54 * rig.scale, 1.55 * rig.scale, -0.12 * rig.scale);
    rig.body.add(wing);
    for (let index = 0; index < 3; index++) {
      addMesh(
        THREE,
        wing,
        new THREE.ConeGeometry(0.16 * rig.scale, (0.86 - index * 0.12) * rig.scale, 6),
        index % 2 ? materials.energy : materials.accent,
        rig.parts,
        {
          position: [side * index * 0.16 * rig.scale, 0, -index * 0.22 * rig.scale],
          rotation: [Math.PI / 2, 0, side * (Math.PI / 2 + 0.25)],
          name: `storm-vane-${side}-${index}`,
        },
      );
    }
    rig.wings.push({ wing, side });
  }
}

function buildMirror(THREE, rig, materials) {
  rig.mirrorShell = addMesh(
    THREE,
    rig.body,
    new THREE.DodecahedronGeometry(1.15 * rig.scale, 0),
    makeMaterial(THREE, rig.dna.accent, {
      transparent: true,
      opacity: 0.34,
      metalness: 0.95,
      roughness: 0.08,
      emissiveIntensity: 0.34,
    }),
    rig.parts,
    { position: [0, 1.38 * rig.scale, 0], scale: [1, 0.86, 1], name: 'mirror-shell' },
  );
  rig.tendrils = [];
  for (let index = 0; index < (rig.dna.tendrils || 5); index++) {
    const tendril = addMesh(
      THREE,
      rig.body,
      new THREE.TorusKnotGeometry(0.18 * rig.scale, 0.035 * rig.scale, 32, 6, 2, 3),
      index % 2 ? materials.accent : materials.energy,
      rig.parts,
      {
        position: [
          Math.cos(index / 5 * TAU) * 0.68 * rig.scale,
          0.72 * rig.scale,
          Math.sin(index / 5 * TAU) * 0.68 * rig.scale,
        ],
        scale: [0.7, 0.7, 0.7],
        name: `mirror-tendril-${index + 1}`,
      },
    );
    rig.tendrils.push(tendril);
  }
}

function buildHelix(THREE, rig, materials) {
  rig.coil = [];
  const count = 12;
  for (let index = 0; index < count; index++) {
    const t = index / (count - 1);
    const phase = t * TAU * 1.75;
    const bead = addMesh(
      THREE,
      rig.body,
      new THREE.SphereGeometry((0.31 - t * 0.09) * rig.scale, 14, 10),
      index % 2 ? materials.accent : materials.skin,
      rig.parts,
      {
        position: [
          Math.cos(phase) * 0.42 * rig.scale,
          (0.44 + t * 2.5) * rig.scale,
          Math.sin(phase) * 0.42 * rig.scale,
        ],
        name: `helix-bead-${index + 1}`,
      },
    );
    bead.userData.helixT = t;
    bead.userData.helixPhase = phase;
    rig.coil.push(bead);
  }
}

function addCrownAndMotifs(THREE, rig, materials) {
  if (rig.dna.crown) {
    rig.crown = new THREE.Group();
    rig.crown.position.y = 2.82 * rig.scale;
    rig.body.add(rig.crown);
    for (let index = 0; index < 5; index++) {
      addMesh(
        THREE,
        rig.crown,
        new THREE.ConeGeometry(0.11 * rig.scale, 0.5 * rig.scale, 6),
        materials.energy,
        rig.parts,
        {
          position: [(index - 2) * 0.22 * rig.scale, 0, Math.abs(index - 2) * 0.06],
          name: `crown-spire-${index + 1}`,
        },
      );
    }
  }
  if (rig.dna.coin || rig.dna.hourglass) {
    rig.motif = addMesh(
      THREE,
      rig.body,
      rig.dna.coin
        ? new THREE.TorusGeometry(0.62 * rig.scale, 0.1 * rig.scale, 10, 32)
        : new THREE.OctahedronGeometry(0.62 * rig.scale, 0),
      materials.energy,
      rig.parts,
      {
        position: [0, 1.48 * rig.scale, 0.84 * rig.scale],
        rotation: [Math.PI / 2, 0, 0],
        name: rig.dna.coin ? 'ledger-motif' : 'hourglass-motif',
      },
    );
  }
}

/**
 * @param {object} bossPlayer player-like object with { id, dna, x, y, angle }
 * @param {object} opts { THREE, scene, S }
 */
export function makeBossRig(bossPlayer, opts = {}) {
  const dna = bossPlayer.dna || bossPlayer;
  const locos = resolveBossLocos(dna);
  const scale = dna.scale || 1.8;

  if (!opts.THREE) {
    return {
      root: null,
      body: null,
      locos,
      hybrid: locos.length > 1,
      segments: [],
      parts: [],
      limbs: [],
      dna,
      scale,
      stub: true,
      signature: dna.signature,
      hitProxy: { radius: Math.round(22 + scale * 18) },
    };
  }

  const { THREE, scene, S = 0.1 } = opts;
  const root = new THREE.Group();
  root.name = `boss-${dna.id || 'apex'}`;
  root.position.set((bossPlayer.x || 0) * S, 0, (bossPlayer.y || 0) * S);
  if (scene) scene.add(root);

  const body = new THREE.Group();
  root.add(body);
  const materials = {
    skin: makeMaterial(THREE, dna.cTop || '#888888', { emissiveIntensity: 0.12, roughness: 0.5 }),
    armor: makeMaterial(THREE, dna.cBot || '#151923', { emissive: dna.cTop || '#333333', emissiveIntensity: 0.08, metalness: 0.72 }),
    accent: makeMaterial(THREE, dna.accent || '#ffffff', { emissiveIntensity: 0.38, metalness: 0.62, roughness: 0.24 }),
    energy: makeMaterial(THREE, dna.accent || '#ffffff', { emissiveIntensity: 1.25, metalness: 0.2, roughness: 0.16 }),
    eye: makeMaterial(THREE, dna.eye || '#ffffff', { emissiveIntensity: 1.8, metalness: 0.05, roughness: 0.12 }),
  };

  const rig = {
    root,
    body,
    locos,
    hybrid: locos.length > 1,
    segments: [],
    parts: [],
    limbs: [],
    dna,
    scale,
    stub: false,
    signature: dna.signature,
    topY: 3.2 * scale,
    hitProxy: { radius: Math.round(22 + scale * 18) },
    phase: 0,
    materials,
  };

  Object.assign(rig, buildCore(THREE, body, dna, scale, materials, rig.parts));
  if (locos.includes('colossus')) buildColossus(THREE, rig, materials);
  if (locos.includes('phase')) buildPhase(THREE, rig, materials);
  if (locos.includes('orbital')) buildOrbital(THREE, rig, materials);
  if (locos.includes('anchor')) buildAnchor(THREE, rig, materials);
  if (locos.includes('storm')) buildStorm(THREE, rig, materials);
  if (locos.includes('mirror')) buildMirror(THREE, rig, materials);
  if (locos.includes('helix_titan')) buildHelix(THREE, rig, materials);
  if (locos.includes('swarm_host')) buildSwarmHost(THREE, rig, materials, locos.includes('helix_titan'));
  addCrownAndMotifs(THREE, rig, materials);

  const shadow = addMesh(
    THREE,
    root,
    new THREE.CircleGeometry(rig.hitProxy.radius * S, 32),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.38, depthWrite: false }),
    rig.parts,
    { position: [0, 0.025, 0], rotation: [-Math.PI / 2, 0, 0], name: 'boss-shadow' },
  );
  rig.shadow = shadow;
  return rig;
}

/**
 * Drive full-mesh locomotion. State may include speed, angle, phase, hit,
 * rooted, telegraph, x, and y. Positions use gameplay units when S is given.
 */
export function updateBossRig(rig, dt, now, state = {}) {
  if (!rig || rig.stub || !rig.root) return;
  rig.phase += dt * (0.8 + Math.min(2.4, (state.speed || 0) / 90));
  const speedMix = Math.min(1, (state.speed || 0) / 160);
  const gait = rig.phase * (2.2 + speedMix * 3.8);
  const hit = Math.max(0, state.hit || 0);

  if (Number.isFinite(state.angle)) rig.root.rotation.y = Math.PI / 2 - state.angle;
  rig.body.position.y = Math.sin(gait * 0.5) * 0.035 * rig.scale * (0.35 + speedMix);
  rig.body.scale.setScalar(1 + hit * 0.06);

  for (const limb of rig.limbs) {
    const stride = Math.sin(gait + limb.phase) * (0.2 + speedMix * 0.48);
    limb.pivot.rotation.x = stride;
    limb.foot.position.y = limb.restY + Math.max(0, -Math.sin(gait + limb.phase)) * 0.16 * rig.scale;
  }

  for (const segment of rig.segments) {
    if (!segment.alive) {
      segment.anchor.visible = false;
      continue;
    }
    segment.anchor.visible = true;
    const phase = now * (segment.type === 'head' ? 0.85 : 1.25) + segment.phase;
    segment.anchor.position.set(
      Math.cos(phase) * segment.orbit,
      (segment.type === 'head' ? 2.25 : 1.75) * rig.scale + Math.sin(phase * 1.7) * 0.22 * rig.scale,
      Math.sin(phase) * segment.orbit,
    );
    segment.anchor.rotation.y = -phase + Math.PI / 2;
    segment.mesh.rotation.z += dt * (segment.type === 'ring' ? 2.2 : 0.9);
  }

  if (rig.phaseShells) {
    rig.phaseShells.forEach((shell, index) => {
      const pulse = 1 + Math.sin(now * 5 + index * 1.8) * 0.07;
      shell.scale.multiplyScalar(pulse / (shell.userData.lastPulse || 1));
      shell.userData.lastPulse = pulse;
      shell.material.opacity = 0.08 + 0.12 * (0.5 + 0.5 * Math.sin(now * 8 + index));
      shell.rotation.y += dt * (0.3 + index * 0.17);
    });
  }

  if (rig.roots) {
    rig.roots.forEach((root, index) => {
      root.scale.y = 0.86 + Math.sin(now * 2.3 + index) * 0.14;
    });
  }
  if (rig.wings) {
    rig.wings.forEach(({ wing, side }) => {
      wing.rotation.z = side * (0.2 + Math.sin(now * 8.5) * 0.42);
      wing.rotation.x = Math.sin(now * 4.2 + side) * 0.12;
    });
  }
  if (rig.mirrorShell) {
    rig.mirrorShell.rotation.y += dt * 0.7;
    rig.mirrorShell.rotation.x = Math.sin(now * 0.9) * 0.18;
  }
  if (rig.tendrils) {
    rig.tendrils.forEach((tendril, index) => {
      tendril.rotation.y = now * (index % 2 ? -0.8 : 0.8);
      tendril.rotation.z = Math.sin(now * 2.2 + index) * 0.28;
    });
  }
  if (rig.coil) {
    const uncoil = state.telegraph ? 0.72 : 0.18 + speedMix * 0.12;
    for (const bead of rig.coil) {
      const t = bead.userData.helixT;
      const phase = bead.userData.helixPhase + now * 0.85;
      const radius = (0.38 + uncoil * t) * rig.scale;
      bead.position.set(
        Math.cos(phase) * radius,
        (0.44 + t * (2.45 + uncoil)) * rig.scale,
        Math.sin(phase) * radius,
      );
    }
  }
  if (rig.crown) rig.crown.rotation.y += dt * 0.28;
  if (rig.motif) rig.motif.rotation.z += dt * 0.7;
  if (rig.stompRing) {
    const telegraph = state.telegraph ? 1 : 0;
    rig.stompRing.material.emissiveIntensity = 0.6 + telegraph * 1.8;
    rig.stompRing.scale.setScalar(1 + telegraph * (0.15 + 0.1 * Math.sin(now * 14)));
  }
}

export default makeBossRig;
