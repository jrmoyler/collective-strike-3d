/**
 * Procedural Apex boss mesh and locomotion system.
 *
 * Bosses are assembled entirely from offline-safe Three.js primitives, but
 * layered like authored studio rigs: segmented armor plating over a chitin
 * core, a pulsing additive power-core under-glow, seeded greeble bands,
 * articulated limbs with joint spheres / pistons / taloned feet, and a
 * per-locomotion identity kit (shoulder pylons, engine tails, ring
 * filaments, counter-rotating shells, feathered vanes, crystal shards,
 * glowing helix spines, root veins).
 *
 * Every locomotion class keeps a distinct silhouette and animation path,
 * and destroyable segment records retain their own mesh and health
 * fraction. All variation is seeded from dna.seed (mulberry32) so builds
 * are deterministic. Geometry is shared across rigs through a module-level
 * cache and marked userData.shared so disposeTree leaves it alone.
 */

import { resolveBossLocos } from './boss-dna.js';

const TAU = Math.PI * 2;

/* ------------------------------------------------------------------ */
/* Deterministic PRNG (mulberry32) seeded from dna.seed                 */
/* ------------------------------------------------------------------ */

function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ------------------------------------------------------------------ */
/* Shared unit-geometry cache (scaled per mesh, never disposed per rig) */
/* ------------------------------------------------------------------ */

const GEO_CACHE = new Map();

const GEO_FACTORIES = {
  sphere: T => new T.SphereGeometry(1, 22, 16),
  sphereLow: T => new T.SphereGeometry(1, 14, 10),
  sphereTiny: T => new T.SphereGeometry(1, 10, 8),
  ico: T => new T.IcosahedronGeometry(1, 1),
  box: T => new T.BoxGeometry(1, 1, 1),
  cone6: T => new T.ConeGeometry(1, 1, 6),
  cone7: T => new T.ConeGeometry(1, 1, 7),
  cone8: T => new T.ConeGeometry(1, 1, 8),
  cyl: T => new T.CylinderGeometry(1, 1, 1, 10),
  capsuleLimb: T => new T.CapsuleGeometry(0.12, 0.46, 5, 8),
  octa1: T => new T.OctahedronGeometry(1, 1),
  octa0: T => new T.OctahedronGeometry(1, 0),
  dodeca: T => new T.DodecahedronGeometry(1, 0),
  plateHigh: T => new T.SphereGeometry(1, 12, 5, 0, 0.92, 0.46, 0.55),
  plateLow: T => new T.SphereGeometry(1, 12, 5, 0, 0.78, 1.06, 0.5),
  torusRing: T => new T.TorusGeometry(1, 0.048, 8, 36),
  torusSeg: T => new T.TorusGeometry(1, 0.235, 8, 24),
  torusCoin: T => new T.TorusGeometry(1, 0.16, 10, 32),
  torusFil: T => new T.TorusGeometry(1, 0.05, 6, 28),
  torusKnot: T => new T.TorusKnotGeometry(1, 0.19, 32, 6, 2, 3),
  circle: T => new T.CircleGeometry(1, 32),
};

function geo(THREE, key) {
  let g = GEO_CACHE.get(key);
  if (!g) {
    g = GEO_FACTORIES[key](THREE);
    g.userData.shared = true;
    GEO_CACHE.set(key, g);
  }
  return g;
}

/* Module-level scratch objects so updateBossRig never allocates. */
let _vA = null;
let _UP = null;
function ensureScratch(THREE) {
  if (!_vA) {
    _vA = new THREE.Vector3();
    _UP = new THREE.Vector3(0, 1, 0);
  }
}

/* ------------------------------------------------------------------ */
/* Materials                                                           */
/* ------------------------------------------------------------------ */

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

/** Translucent additive energy material for cores / filaments / spines. */
function makeGlowMaterial(THREE, color, opacity = 0.5) {
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  if ('toneMapped' in material) material.toneMapped = false;
  return material;
}

function makeBossMaterials(THREE, dna) {
  const top = dna.cTop || '#888888';
  const bot = dna.cBot || '#151923';
  const accent = dna.accent || '#ffffff';
  return {
    /* chitin skin — matte organic under-layer */
    skin: makeMaterial(THREE, top, { emissiveIntensity: 0.1, metalness: 0.2, roughness: 0.55 }),
    /* heavy armor metal */
    armor: makeMaterial(THREE, bot, { emissive: top, emissiveIntensity: 0.06, metalness: 0.85, roughness: 0.3 }),
    /* darker machined trim for greebles / pistons / claws */
    trim: makeMaterial(THREE, bot, { emissive: bot, emissiveIntensity: 0.04, metalness: 0.9, roughness: 0.42 }),
    /* polished accent panels */
    accent: makeMaterial(THREE, accent, { emissiveIntensity: 0.5, metalness: 0.62, roughness: 0.24 }),
    /* bloom-hot energy surfaces (static) */
    energy: makeMaterial(THREE, accent, { emissiveIntensity: 2.2, metalness: 0.2, roughness: 0.16 }),
    /* engine / thruster material — intensity animated per frame */
    engine: makeMaterial(THREE, accent, { emissiveIntensity: 1.9, metalness: 0.1, roughness: 0.2 }),
    /* stomp telegraph — intensity animated per frame, kept isolated */
    telegraph: makeMaterial(THREE, accent, { emissiveIntensity: 0.9, metalness: 0.2, roughness: 0.16 }),
    /* pulsing power core */
    core: makeMaterial(THREE, accent, { emissiveIntensity: 2.4, metalness: 0.05, roughness: 0.3 }),
    /* additive halo around the power core — opacity animated per frame */
    glow: makeGlowMaterial(THREE, accent, 0.42),
    /* additive filaments / helix spine (static opacity) */
    filament: makeGlowMaterial(THREE, accent, 0.62),
    eye: makeMaterial(THREE, dna.eye || '#ffffff', { emissiveIntensity: 2.4, metalness: 0.05, roughness: 0.12 }),
  };
}

/* ------------------------------------------------------------------ */
/* Mesh helpers                                                        */
/* ------------------------------------------------------------------ */

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

/**
 * Articulated leg: joint sphere at the hip, capsule upper, piston rod with
 * an emissive collar, and a taloned foot (boot + three claws in a uniform
 * group so nothing shears under animation).
 */
function addLimb(THREE, rig, materials, {
  x,
  z,
  upperY,
  lowerY,
  scale,
  phase,
}) {
  const { parts, limbs } = rig;
  const pivot = new THREE.Group();
  pivot.position.set(x, upperY, z);
  rig.body.add(pivot);

  addMesh(THREE, pivot, geo(THREE, 'sphereTiny'), materials.armor, parts, {
    scale: [0.18 * scale, 0.18 * scale, 0.18 * scale],
    name: 'limb-joint',
  });

  const upper = addMesh(THREE, pivot, geo(THREE, 'capsuleLimb'), materials.armor, parts, {
    position: [0, -0.28 * scale, 0],
    scale: [scale, scale, scale],
    rotation: [0, 0, x < 0 ? -0.08 : 0.08],
  });

  const piston = addMesh(THREE, pivot, geo(THREE, 'cyl'), materials.trim, parts, {
    position: [0, -0.3 * scale, 0.16 * scale],
    scale: [0.045 * scale, 0.36 * scale, 0.045 * scale],
    name: 'limb-piston',
  });
  addMesh(THREE, pivot, geo(THREE, 'cyl'), materials.energy, parts, {
    position: [0, -0.14 * scale, 0.16 * scale],
    scale: [0.062 * scale, 0.07 * scale, 0.062 * scale],
    name: 'limb-piston-collar',
  });

  const foot = new THREE.Group();
  foot.position.set(0, lowerY - upperY, 0.12 * scale);
  pivot.add(foot);
  addMesh(THREE, foot, geo(THREE, 'box'), materials.armor, parts, {
    scale: [0.3 * scale, 0.17 * scale, 0.52 * scale],
    name: 'limb-boot',
  });
  for (let c = -1; c <= 1; c++) {
    addMesh(THREE, foot, geo(THREE, 'cone6'), materials.trim, parts, {
      position: [c * 0.1 * scale, -0.02 * scale, 0.31 * scale],
      scale: [0.045 * scale, 0.17 * scale, 0.045 * scale],
      rotation: [Math.PI / 2 + 0.16, 0, 0],
      name: 'limb-claw',
    });
  }

  limbs.push({
    pivot,
    upper,
    foot,
    phase,
    restY: foot.position.y,
    piston,
    pistonRestY: piston.position.y,
  });
}

/* ------------------------------------------------------------------ */
/* Core: torso, power core, armor plating, greeble band, head          */
/* ------------------------------------------------------------------ */

function buildCore(THREE, rig, materials) {
  const { body, dna, scale, parts, rnd } = rig;
  const width = (dna.body?.[0] || 0.9) * scale;
  const length = (dna.body?.[1] || 1.1) * scale;

  const torso = addMesh(THREE, body, geo(THREE, 'sphere'), materials.skin, parts, {
    position: [0, 1.28 * scale, 0],
    scale: [width, length * 0.72, width * 0.88],
    name: 'apex-core',
  });
  torso.userData.bx = width;
  torso.userData.by = length * 0.72;
  torso.userData.bz = width * 0.88;

  /* pulsing power core + additive under-glow halo */
  const core = addMesh(THREE, body, geo(THREE, 'sphereLow'), materials.core, parts, {
    position: [0, 1.06 * scale, 0.1 * scale],
    scale: [0.34 * width, 0.34 * width, 0.34 * width],
    name: 'power-core',
  });
  core.userData.baseR = 0.34 * width;
  const coreGlow = addMesh(THREE, body, geo(THREE, 'sphereLow'), materials.glow, parts, {
    position: [0, 1.02 * scale, 0.1 * scale],
    scale: [0.62 * width, 0.3 * width, 0.58 * width],
    name: 'power-core-glow',
  });
  coreGlow.castShadow = false;
  coreGlow.receiveShadow = false;
  coreGlow.userData.bx = 0.62 * width;
  coreGlow.userData.by = 0.3 * width;
  coreGlow.userData.bz = 0.58 * width;
  rig.powerCore = core;
  rig.coreGlow = coreGlow;

  const armor = addMesh(THREE, body, geo(THREE, 'ico'), materials.armor, parts, {
    position: [0, 1.38 * scale, -0.08 * scale],
    scale: [width * 1.04, length * 0.34, width * 0.94],
    name: 'apex-carapace',
  });

  /* segmented armor plating — two staggered partial-sphere shell rings */
  for (let index = 0; index < 5; index++) {
    const jitter = (rnd() - 0.5) * 0.14;
    addMesh(THREE, body, geo(THREE, 'plateHigh'), materials.armor, parts, {
      position: [0, 1.28 * scale, 0],
      scale: [width * 1.14, length * 0.79, width * 1.0],
      rotation: [0, index / 5 * TAU + jitter, 0],
      name: `armor-plate-hi-${index + 1}`,
    });
  }
  for (let index = 0; index < 5; index++) {
    const jitter = (rnd() - 0.5) * 0.14;
    addMesh(THREE, body, geo(THREE, 'plateLow'), materials.trim, parts, {
      position: [0, 1.28 * scale, 0],
      scale: [width * 1.12, length * 0.77, width * 0.99],
      rotation: [0, (index + 0.5) / 5 * TAU + jitter, 0],
      name: `armor-plate-lo-${index + 1}`,
    });
  }

  /* seeded greeble / rib band around the carapace waistline */
  const greebles = 8;
  for (let index = 0; index < greebles; index++) {
    const angle = index / greebles * TAU + (rnd() - 0.5) * 0.32;
    const height = (0.1 + rnd() * 0.14) * scale;
    const depth = (0.05 + rnd() * 0.05) * scale;
    const wide = (0.1 + rnd() * 0.12) * scale;
    const hot = index % 3 === 0;
    addMesh(THREE, body, geo(THREE, 'box'), hot ? materials.energy : materials.trim, parts, {
      position: [
        Math.cos(angle) * width * 1.04,
        (1.24 + (rnd() - 0.5) * 0.24) * scale,
        Math.sin(angle) * width * 0.92,
      ],
      scale: [wide, height, depth],
      rotation: [0, -angle, 0],
      name: `greeble-${index + 1}`,
    });
  }

  let head = null;
  if ((dna.head || 0) > 0) {
    head = addMesh(THREE, body, geo(THREE, 'sphereLow'), materials.skin, parts, {
      position: [0, 2.18 * scale, 0.12 * scale],
      scale: [dna.head * scale, dna.head * scale * 0.82, dna.head * scale],
      name: 'apex-head',
    });
    addMesh(THREE, head, geo(THREE, 'box'), materials.eye, parts, {
      position: [0, 0.04, 0.9],
      scale: [0.72, 0.16, 0.12],
      name: 'apex-visor',
    });
    addMesh(THREE, head, geo(THREE, 'box'), materials.armor, parts, {
      position: [0, 0.42, 0.52],
      scale: [0.84, 0.2, 0.34],
      rotation: [0.5, 0, 0],
      name: 'apex-brow',
    });
  }
  return { torso, armor, head };
}

/* ------------------------------------------------------------------ */
/* Per-locomotion builders                                             */
/* ------------------------------------------------------------------ */

function buildColossus(THREE, rig, materials) {
  const { body, scale, parts } = rig;
  for (const side of [-1, 1]) {
    addLimb(THREE, rig, materials, {
      x: side * 0.62 * scale,
      z: -0.38 * scale,
      upperY: 0.96 * scale,
      lowerY: 0.13 * scale,
      scale: 1.15 * scale,
      phase: side < 0 ? 0 : Math.PI,
    });
    addLimb(THREE, rig, materials, {
      x: side * 0.62 * scale,
      z: 0.4 * scale,
      upperY: 0.92 * scale,
      lowerY: 0.13 * scale,
      scale: scale,
      phase: side < 0 ? Math.PI : 0,
    });

    /* heavy shoulder pylons with hot vents */
    const pylon = new THREE.Group();
    pylon.position.set(side * 0.8 * scale, 1.92 * scale, -0.06 * scale);
    pylon.rotation.z = side * -0.12;
    body.add(pylon);
    addMesh(THREE, pylon, geo(THREE, 'box'), materials.armor, parts, {
      scale: [0.4 * scale, 0.36 * scale, 0.52 * scale],
      name: `shoulder-pylon-${side < 0 ? 'l' : 'r'}`,
    });
    addMesh(THREE, pylon, geo(THREE, 'box'), materials.trim, parts, {
      position: [0, 0.22 * scale, 0],
      scale: [0.46 * scale, 0.09 * scale, 0.58 * scale],
      name: 'shoulder-cap',
    });
    addMesh(THREE, pylon, geo(THREE, 'box'), materials.energy, parts, {
      position: [side * 0.05 * scale, 0.02 * scale, 0.27 * scale],
      scale: [0.26 * scale, 0.1 * scale, 0.05 * scale],
      name: 'shoulder-vent',
    });
  }

  rig.stompRing = addMesh(THREE, body, geo(THREE, 'torusRing'), materials.telegraph, parts, {
    position: [0, 0.12, 0],
    scale: [1.15 * scale, 1.15 * scale, 1.15 * scale],
    rotation: [Math.PI / 2, 0, 0],
    name: 'stomp-telegraph',
  });
  rig.stompRing.userData.baseS = 1.15 * scale;
  rig.stompFilament = addMesh(THREE, body, geo(THREE, 'torusFil'), materials.filament, parts, {
    position: [0, 0.1, 0],
    scale: [0.88 * scale, 0.88 * scale, 0.88 * scale],
    rotation: [Math.PI / 2, 0, 0],
    name: 'stomp-filament',
  });
  rig.stompFilament.castShadow = false;
  rig.stompFilament.receiveShadow = false;
  rig.stompFilament.userData.baseS = 0.88 * scale;
}

function buildSwarmHost(THREE, rig, materials, headMode = false) {
  const count = rig.dna.segments || 4;
  for (let index = 0; index < count; index++) {
    const anchor = new THREE.Group();
    rig.body.add(anchor);
    /* body, eye and engine sit side by side under the (uniform) anchor
       group so shared unit geometry never shears. */
    const mesh = headMode
      ? addMesh(THREE, anchor, geo(THREE, 'cone8'), index % 2 ? materials.accent : materials.energy, rig.parts, {
        scale: [0.24 * rig.scale, 0.72 * rig.scale, 0.24 * rig.scale],
        rotation: [Math.PI / 2, 0, 0],
        name: `hydra-head-${index + 1}`,
      })
      : addMesh(THREE, anchor, geo(THREE, 'octa1'), index % 2 ? materials.accent : materials.energy, rig.parts, {
        scale: [0.34 * rig.scale, 0.34 * rig.scale, 0.34 * rig.scale],
        name: `swarm-drone-${index + 1}`,
      });
    const eye = addMesh(THREE, anchor, geo(THREE, 'sphereTiny'), materials.eye, rig.parts, {
      position: [0, headMode ? 0.2 * rig.scale : 0.08 * rig.scale, headMode ? 0.4 * rig.scale : 0.3 * rig.scale],
      scale: [0.09 * rig.scale, 0.09 * rig.scale, 0.09 * rig.scale],
    });
    /* engine-glow tail */
    const engine = addMesh(THREE, anchor, geo(THREE, 'cone6'), materials.engine, rig.parts, {
      position: [0, headMode ? -0.06 * rig.scale : 0, headMode ? -0.48 * rig.scale : -0.4 * rig.scale],
      scale: [0.09 * rig.scale, 0.3 * rig.scale, 0.09 * rig.scale],
      rotation: [-Math.PI / 2, 0, 0],
      name: headMode ? `hydra-engine-${index + 1}` : `drone-engine-${index + 1}`,
    });
    engine.castShadow = false;
    rig.segments.push({
      type: headMode ? 'head' : 'drone',
      index,
      alive: true,
      hpFraction: headMode ? 0.18 : 0.12,
      anchor,
      mesh,
      eye,
      engine,
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
      geo(THREE, index % 2 ? 'dodeca' : 'ico'),
      makeMaterial(THREE, rig.dna.accent, {
        transparent: true,
        opacity: 0.13,
        metalness: 0.15,
        roughness: 0.2,
        emissiveIntensity: 1.1,
      }),
      rig.parts,
      {
        position: [0, 1.36 * rig.scale, 0],
        scale: [1.05 + index * 0.13, 1.25 + index * 0.16, 0.82 + index * 0.12].map(v => v * rig.scale),
        name: `phase-echo-${index + 1}`,
      },
    );
    shell.castShadow = false;
    shell.userData.bx = (1.05 + index * 0.13) * rig.scale;
    shell.userData.by = (1.25 + index * 0.16) * rig.scale;
    shell.userData.bz = (0.82 + index * 0.12) * rig.scale;
    /* counter-rotating layered shells */
    shell.userData.spin = (index % 2 ? -1 : 1) * (0.35 + index * 0.22);
    rig.phaseShells.push(shell);
  }
}

function buildOrbital(THREE, rig, materials) {
  const count = rig.dna.segments || 4;
  for (let index = 0; index < count; index++) {
    const anchor = new THREE.Group();
    rig.body.add(anchor);
    const mesh = addMesh(THREE, anchor, geo(THREE, 'torusSeg'), index % 2 ? materials.accent : materials.energy, rig.parts, {
      scale: [0.34 * rig.scale, 0.34 * rig.scale, 0.34 * rig.scale],
      rotation: [Math.PI / 2, index * 0.37, 0],
      name: `orbital-segment-${index + 1}`,
    });
    /* inner energy filament nested in every ring (uniform parent scale) */
    const filament = addMesh(THREE, mesh, geo(THREE, 'torusFil'), materials.filament, rig.parts, {
      scale: [0.68, 0.68, 0.68],
      name: `orbital-filament-${index + 1}`,
    });
    filament.castShadow = false;
    filament.receiveShadow = false;
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
  /* central gyro ring spinning against the segments */
  rig.gyro = addMesh(THREE, rig.body, geo(THREE, 'torusFil'), materials.energy, rig.parts, {
    position: [0, 1.36 * rig.scale, 0],
    scale: [0.62 * rig.scale, 0.62 * rig.scale, 0.62 * rig.scale],
    name: 'orbital-gyro',
  });
}

function buildAnchor(THREE, rig, materials) {
  rig.roots = [];
  for (let index = 0; index < 8; index++) {
    const angle = index / 8 * TAU;
    const root = addMesh(THREE, rig.body, geo(THREE, 'cone7'), index % 2 ? materials.armor : materials.accent, rig.parts, {
      position: [
        Math.cos(angle) * 0.54 * rig.scale,
        0.34 * rig.scale,
        Math.sin(angle) * 0.54 * rig.scale,
      ],
      scale: [0.13 * rig.scale, 1.08 * rig.scale, 0.13 * rig.scale],
      rotation: [0, 0, Math.PI * 0.43],
      name: `anchor-root-${index + 1}`,
    });
    root.rotation.y = -angle;
    root.userData.baseSY = 1.08 * rig.scale;
    root.userData.idx = index;
    rig.roots.push(root);

    /* root-vein emissive strip running beside each root */
    const vein = addMesh(THREE, rig.body, geo(THREE, 'box'), materials.energy, rig.parts, {
      position: [
        Math.cos(angle) * 0.66 * rig.scale,
        0.3 * rig.scale,
        Math.sin(angle) * 0.66 * rig.scale,
      ],
      scale: [0.035 * rig.scale, 0.62 * rig.scale, 0.035 * rig.scale],
      rotation: [0, -angle, Math.PI * 0.43],
      name: `root-vein-${index + 1}`,
    });
    vein.userData.baseSY = 0.62 * rig.scale;
    vein.userData.idx = index;
    rig.roots.push(vein);
  }
  /* grounded plinth ring for visual weight */
  addMesh(THREE, rig.body, geo(THREE, 'torusFil'), materials.trim, rig.parts, {
    position: [0, 0.09, 0],
    scale: [0.86 * rig.scale, 0.86 * rig.scale, 0.86 * rig.scale],
    rotation: [Math.PI / 2, 0, 0],
    name: 'anchor-plinth',
  });
}

function buildStorm(THREE, rig, materials) {
  rig.wings = [];
  for (const side of [-1, 1]) {
    const wing = new THREE.Group();
    wing.position.set(side * 0.54 * rig.scale, 1.55 * rig.scale, -0.12 * rig.scale);
    rig.body.add(wing);
    /* layered vane feathers, each a uniform feather group so the emissive
       tip sits exactly on the vane without shearing */
    for (let index = 0; index < 4; index++) {
      const feather = new THREE.Group();
      feather.position.set(side * index * 0.15 * rig.scale, -index * 0.03 * rig.scale, -index * 0.2 * rig.scale);
      feather.rotation.set(Math.PI / 2, 0, side * (Math.PI / 2 + 0.22 + index * 0.09));
      wing.add(feather);
      const span = (0.9 - index * 0.13) * rig.scale;
      addMesh(THREE, feather, geo(THREE, 'cone6'), index % 2 ? materials.energy : materials.accent, rig.parts, {
        scale: [0.13 * rig.scale, span, 0.045 * rig.scale],
        name: `storm-vane-${side}-${index}`,
      });
      const tip = addMesh(THREE, feather, geo(THREE, 'sphereTiny'), materials.energy, rig.parts, {
        position: [0, span * 0.54, 0],
        scale: [0.055 * rig.scale, 0.055 * rig.scale, 0.055 * rig.scale],
        name: `storm-vane-tip-${side}-${index}`,
      });
      tip.castShadow = false;
    }
    rig.wings.push({ wing, side });
  }
}

function buildMirror(THREE, rig, materials) {
  rig.mirrorShell = addMesh(
    THREE,
    rig.body,
    geo(THREE, 'dodeca'),
    makeMaterial(THREE, rig.dna.accent, {
      transparent: true,
      opacity: 0.34,
      metalness: 0.95,
      roughness: 0.08,
      emissiveIntensity: 0.34,
    }),
    rig.parts,
    {
      position: [0, 1.38 * rig.scale, 0],
      scale: [1.15 * rig.scale, 0.99 * rig.scale, 1.15 * rig.scale],
      name: 'mirror-shell',
    },
  );

  /* faceted outer crystal shard halo, seeded, on its own rotating ring */
  rig.shardRing = new THREE.Group();
  rig.shardRing.position.y = 1.38 * rig.scale;
  rig.body.add(rig.shardRing);
  const shardCount = 7;
  for (let index = 0; index < shardCount; index++) {
    const angle = index / shardCount * TAU + rig.rnd() * 0.4;
    const radius = (1.35 + rig.rnd() * 0.35) * rig.scale;
    const sx = (0.09 + rig.rnd() * 0.09) * rig.scale;
    addMesh(THREE, rig.shardRing, geo(THREE, 'octa0'), index % 2 ? materials.accent : materials.energy, rig.parts, {
      position: [Math.cos(angle) * radius, (rig.rnd() - 0.5) * 0.5 * rig.scale, Math.sin(angle) * radius],
      scale: [sx, sx * (2 + rig.rnd() * 1.2), sx],
      rotation: [rig.rnd() * 0.5, -angle, rig.rnd() * 0.5],
      name: `mirror-shard-${index + 1}`,
    });
  }

  rig.tendrils = [];
  for (let index = 0; index < (rig.dna.tendrils || 5); index++) {
    const tendril = addMesh(THREE, rig.body, geo(THREE, 'torusKnot'), index % 2 ? materials.accent : materials.energy, rig.parts, {
      position: [
        Math.cos(index / 5 * TAU) * 0.68 * rig.scale,
        0.72 * rig.scale,
        Math.sin(index / 5 * TAU) * 0.68 * rig.scale,
      ],
      scale: [0.126 * rig.scale, 0.126 * rig.scale, 0.126 * rig.scale],
      name: `mirror-tendril-${index + 1}`,
    });
    rig.tendrils.push(tendril);
  }
}

function buildHelix(THREE, rig, materials) {
  rig.coil = [];
  rig.spine = [];
  const count = 12;
  for (let index = 0; index < count; index++) {
    const t = index / (count - 1);
    const phase = t * TAU * 1.75;
    const radius = (0.31 - t * 0.09) * rig.scale;
    const bead = addMesh(THREE, rig.body, geo(THREE, 'sphereLow'), index % 2 ? materials.accent : materials.skin, rig.parts, {
      position: [
        Math.cos(phase) * 0.42 * rig.scale,
        (0.44 + t * 2.5) * rig.scale,
        Math.sin(phase) * 0.42 * rig.scale,
      ],
      scale: [radius, radius, radius],
      name: `helix-bead-${index + 1}`,
    });
    bead.userData.helixT = t;
    bead.userData.helixPhase = phase;
    rig.coil.push(bead);
  }
  /* glowing spine linking consecutive beads — re-threaded every frame */
  for (let index = 0; index < count - 1; index++) {
    const link = addMesh(THREE, rig.body, geo(THREE, 'cyl'), materials.filament, rig.parts, {
      scale: [0.055 * rig.scale, 1, 0.055 * rig.scale],
      name: `helix-spine-${index + 1}`,
    });
    link.castShadow = false;
    link.receiveShadow = false;
    const a = rig.coil[index];
    const b = rig.coil[index + 1];
    _vA.copy(b.position).sub(a.position);
    const len = _vA.length() || 1e-6;
    link.position.copy(a.position).addScaledVector(_vA, 0.5);
    link.scale.y = len;
    link.quaternion.setFromUnitVectors(_UP, _vA.multiplyScalar(1 / len));
    rig.spine.push(link);
  }
}

function addCrownAndMotifs(THREE, rig, materials) {
  if (rig.dna.crown) {
    rig.crown = new THREE.Group();
    rig.crown.position.y = 2.82 * rig.scale;
    rig.body.add(rig.crown);
    for (let index = 0; index < 5; index++) {
      addMesh(THREE, rig.crown, geo(THREE, 'cone6'), materials.energy, rig.parts, {
        position: [(index - 2) * 0.22 * rig.scale, 0, Math.abs(index - 2) * 0.06],
        scale: [0.11 * rig.scale, 0.5 * rig.scale, 0.11 * rig.scale],
        name: `crown-spire-${index + 1}`,
      });
    }
  }
  if (rig.dna.coin || rig.dna.hourglass) {
    rig.motif = addMesh(
      THREE,
      rig.body,
      geo(THREE, rig.dna.coin ? 'torusCoin' : 'octa0'),
      materials.energy,
      rig.parts,
      {
        position: [0, 1.48 * rig.scale, 0.84 * rig.scale],
        scale: [0.62 * rig.scale, 0.62 * rig.scale, 0.62 * rig.scale],
        rotation: [Math.PI / 2, 0, 0],
        name: rig.dna.coin ? 'ledger-motif' : 'hourglass-motif',
      },
    );
    /* additive halo tracking the motif spin */
    const halo = addMesh(THREE, rig.motif, geo(THREE, 'torusFil'), materials.filament, rig.parts, {
      scale: [1.32, 1.32, 1.32],
      name: 'motif-halo',
    });
    halo.castShadow = false;
    halo.receiveShadow = false;
  }
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

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
  ensureScratch(THREE);
  const root = new THREE.Group();
  root.name = `boss-${dna.id || 'apex'}`;
  root.position.set((bossPlayer.x || 0) * S, 0, (bossPlayer.y || 0) * S);
  if (scene) scene.add(root);

  const body = new THREE.Group();
  root.add(body);
  const materials = makeBossMaterials(THREE, dna);
  const rnd = mulberry32(dna.seed || 7);

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
    rnd,
  };

  /* precomputed, seeded animation parameters — read-only in update */
  rig.anim = {
    breatheRate: 1.5 + rnd() * 0.9,
    breatheAmp: 0.018 + rnd() * 0.014,
    rollAmp: 0.035 + rnd() * 0.03,
    pulseRate: 2.1 + rnd() * 1.5,
    glowRate: 3.1 + rnd() * 1.8,
  };

  Object.assign(rig, buildCore(THREE, rig, materials));
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
    geo(THREE, 'circle'),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.38, depthWrite: false }),
    rig.parts,
    {
      position: [0, 0.025, 0],
      scale: [rig.hitProxy.radius * S, rig.hitProxy.radius * S, 1],
      rotation: [-Math.PI / 2, 0, 0],
      name: 'boss-shadow',
    },
  );
  shadow.castShadow = false;
  shadow.receiveShadow = false;
  rig.shadow = shadow;
  return rig;
}

/**
 * Drive full-mesh locomotion. State may include speed, angle, phase, hit,
 * rooted, telegraph, x, and y. Positions use gameplay units when S is given.
 * Allocation-free: only module-level scratch objects and precomputed
 * userData are touched.
 */
export function updateBossRig(rig, dt, now, state = {}) {
  if (!rig || rig.stub || !rig.root) return;
  rig.phase += dt * (0.8 + Math.min(2.4, (state.speed || 0) / 90));
  const speedMix = Math.min(1, (state.speed || 0) / 160);
  const gait = rig.phase * (2.2 + speedMix * 3.8);
  const hit = Math.max(0, state.hit || 0);
  const telegraph = state.telegraph ? 1 : 0;
  const anim = rig.anim;

  if (Number.isFinite(state.angle)) rig.root.rotation.y = Math.PI / 2 - state.angle;
  rig.body.position.y = Math.sin(gait * 0.5) * 0.035 * rig.scale * (0.35 + speedMix);
  rig.body.scale.setScalar(1 + hit * 0.06);
  /* gait-synced body roll */
  rig.body.rotation.z = Math.sin(gait * 0.5) * anim.rollAmp * (0.3 + speedMix);

  /* breathing torso */
  if (rig.torso) {
    const ud = rig.torso.userData;
    const breathe = 1 + Math.sin(now * anim.breatheRate) * anim.breatheAmp;
    rig.torso.scale.set(ud.bx * breathe, ud.by * (2 - breathe), ud.bz * breathe);
  }

  /* pulsing power core + additive under-glow */
  if (rig.powerCore) {
    const pulse = 1 + Math.sin(now * anim.pulseRate) * 0.1 + hit * 0.3 + telegraph * 0.18;
    rig.powerCore.scale.setScalar(rig.powerCore.userData.baseR * pulse);
    rig.materials.core.emissiveIntensity = 2.0 + Math.sin(now * anim.pulseRate) * 0.5 + telegraph * 0.6;
  }
  if (rig.coreGlow) {
    const ud = rig.coreGlow.userData;
    const swell = 1 + Math.sin(now * anim.glowRate) * 0.12 + telegraph * 0.25;
    rig.coreGlow.scale.set(ud.bx * swell, ud.by * swell, ud.bz * swell);
    rig.coreGlow.material.opacity = 0.3 + 0.14 * (0.5 + 0.5 * Math.sin(now * anim.glowRate)) + telegraph * 0.22;
  }

  for (let i = 0; i < rig.limbs.length; i++) {
    const limb = rig.limbs[i];
    const stride = Math.sin(gait + limb.phase) * (0.2 + speedMix * 0.48);
    limb.pivot.rotation.x = stride;
    limb.foot.position.y = limb.restY + Math.max(0, -Math.sin(gait + limb.phase)) * 0.16 * rig.scale;
    /* piston bob synced against the stride */
    if (limb.piston) {
      limb.piston.position.y = limb.pistonRestY + Math.max(0, Math.sin(gait + limb.phase)) * 0.1 * rig.scale;
    }
  }

  /* engine flicker shared by drones / hydra heads */
  rig.materials.engine.emissiveIntensity = 1.9 + Math.sin(now * 17) * 0.45 + speedMix * 0.6;

  for (let i = 0; i < rig.segments.length; i++) {
    const segment = rig.segments[i];
    if (!segment.alive) {
      segment.anchor.visible = false;
      continue;
    }
    segment.anchor.visible = true;
    const wobble = 1 + (segment.index % 3) * 0.09;
    const phase = now * (segment.type === 'head' ? 0.85 : 1.25) * wobble + segment.phase;
    segment.anchor.position.set(
      Math.cos(phase) * segment.orbit,
      (segment.type === 'head' ? 2.25 : 1.75) * rig.scale
        + Math.sin(phase * (1.7 + (segment.index % 2) * 0.35)) * 0.22 * rig.scale,
      Math.sin(phase) * segment.orbit,
    );
    segment.anchor.rotation.y = -phase + Math.PI / 2;
    segment.mesh.rotation.z += dt * (segment.type === 'ring' ? 2.2 : 0.9);
  }

  if (rig.gyro) {
    rig.gyro.rotation.x += dt * 1.4;
    rig.gyro.rotation.y += dt * 0.9;
  }

  if (rig.phaseShells) {
    for (let index = 0; index < rig.phaseShells.length; index++) {
      const shell = rig.phaseShells[index];
      const ud = shell.userData;
      const pulse = 1 + Math.sin(now * 5 + index * 1.8) * 0.07;
      shell.scale.set(ud.bx * pulse, ud.by * pulse, ud.bz * pulse);
      shell.material.opacity = 0.08 + 0.12 * (0.5 + 0.5 * Math.sin(now * 8 + index));
      shell.rotation.y += dt * ud.spin;
    }
  }

  if (rig.roots) {
    for (let index = 0; index < rig.roots.length; index++) {
      const root = rig.roots[index];
      const ud = root.userData;
      root.scale.y = ud.baseSY * (0.86 + Math.sin(now * 2.3 + ud.idx) * 0.14);
    }
  }
  if (rig.wings) {
    for (let index = 0; index < rig.wings.length; index++) {
      const entry = rig.wings[index];
      entry.wing.rotation.z = entry.side * (0.2 + Math.sin(now * 8.5) * 0.42);
      entry.wing.rotation.x = Math.sin(now * 4.2 + entry.side) * 0.12;
    }
  }
  if (rig.mirrorShell) {
    rig.mirrorShell.rotation.y += dt * 0.7;
    rig.mirrorShell.rotation.x = Math.sin(now * 0.9) * 0.18;
  }
  if (rig.shardRing) {
    rig.shardRing.rotation.y -= dt * 0.55;
    rig.shardRing.rotation.x = Math.sin(now * 0.7) * 0.08;
  }
  if (rig.tendrils) {
    for (let index = 0; index < rig.tendrils.length; index++) {
      const tendril = rig.tendrils[index];
      tendril.rotation.y = now * (index % 2 ? -0.8 : 0.8);
      tendril.rotation.z = Math.sin(now * 2.2 + index) * 0.28;
    }
  }
  if (rig.coil) {
    const uncoil = state.telegraph ? 0.72 : 0.18 + speedMix * 0.12;
    for (let index = 0; index < rig.coil.length; index++) {
      const bead = rig.coil[index];
      const t = bead.userData.helixT;
      const phase = bead.userData.helixPhase + now * 0.85;
      const radius = (0.38 + uncoil * t) * rig.scale;
      bead.position.set(
        Math.cos(phase) * radius,
        (0.44 + t * (2.45 + uncoil)) * rig.scale,
        Math.sin(phase) * radius,
      );
    }
    /* re-thread the glowing spine through the beads (scratch vectors only) */
    if (rig.spine) {
      for (let index = 0; index < rig.spine.length; index++) {
        const a = rig.coil[index];
        const b = rig.coil[index + 1];
        const link = rig.spine[index];
        _vA.copy(b.position).sub(a.position);
        const len = _vA.length() || 1e-6;
        link.position.copy(a.position).addScaledVector(_vA, 0.5);
        link.scale.y = len;
        _vA.multiplyScalar(1 / len);
        link.quaternion.setFromUnitVectors(_UP, _vA);
      }
    }
  }
  if (rig.crown) rig.crown.rotation.y += dt * 0.28;
  if (rig.motif) rig.motif.rotation.z += dt * 0.7;
  if (rig.stompRing) {
    rig.stompRing.material.emissiveIntensity = 0.9 + telegraph * (1.7 + 0.6 * Math.sin(now * 16));
    rig.stompRing.scale.setScalar(
      rig.stompRing.userData.baseS * (1 + telegraph * (0.22 + 0.12 * Math.sin(now * 14))),
    );
    if (rig.stompFilament) {
      rig.stompFilament.material.opacity = 0.28 + telegraph * (0.4 + 0.25 * Math.sin(now * 18));
      rig.stompFilament.scale.setScalar(
        rig.stompFilament.userData.baseS * (1 + telegraph * (0.3 + 0.16 * Math.sin(now * 14 + 1.2))),
      );
      rig.stompFilament.rotation.z += dt * (0.6 + telegraph * 3);
    }
  }
}

export default makeBossRig;
