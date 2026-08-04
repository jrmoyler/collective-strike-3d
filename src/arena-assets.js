/*
 * Procedural arena asset kit reconstructed from the generated concept sheets in
 * docs/arena-concepts/. Visual geometry is deliberately independent from the
 * authored collision/ballistics grid in arena-core.js.
 */
import * as THREE from "three";
import { ARENA_SIZE, createArenaGrid, pointInZone } from "./arena-core.js";
import { arenaBlockHeight } from "./arena-ballistics.js";

const v3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const color = value => new THREE.Color(value);
const CONCEPT_FILES = Object.freeze({
  forge: "forge-furnace-core.webp",
  abyss: "abyss-memory-sanctum.webp",
  tempest: "tempest-signal-tower.webp",
  verdant: "verdant-biomech-heart.webp",
  cryo: "cryo-rift-stabilizer.webp",
  mirage: "mirage-null-monolith.webp",
  neon: "neon-transit-hologram.webp",
  solar: "solar-heliostat-crown.webp",
  lunar: "lunar-excavation-drill.webp",
  caldera: "caldera-lava-throat.webp",
});

function assetMaterials(theme) {
  return {
    shell: new THREE.MeshPhysicalMaterial({
      color: theme.wall,
      roughness: 0.48,
      metalness: 0.56,
      clearcoat: 0.18,
      clearcoatRoughness: 0.52,
      emissive: theme.wallEmissive,
      emissiveIntensity: 0.08,
    }),
    dark: new THREE.MeshPhysicalMaterial({
      color: theme.outer,
      roughness: 0.72,
      metalness: 0.34,
      clearcoat: 0.08,
      emissive: theme.wallEmissive,
      emissiveIntensity: 0.04,
    }),
    accent: new THREE.MeshPhysicalMaterial({
      color: theme.accentHex,
      roughness: 0.24,
      metalness: 0.42,
      clearcoat: 0.46,
      clearcoatRoughness: 0.26,
      emissive: theme.accentHex,
      emissiveIntensity: 1.42,
    }),
    secondary: new THREE.MeshPhysicalMaterial({
      color: theme.secondaryHex,
      roughness: 0.22,
      metalness: 0.32,
      clearcoat: 0.5,
      clearcoatRoughness: 0.22,
      emissive: theme.secondaryHex,
      emissiveIntensity: 1.16,
    }),
    glass: new THREE.MeshPhysicalMaterial({
      color: theme.secondaryHex,
      roughness: 0.12,
      metalness: 0,
      transmission: 0.38,
      transparent: true,
      opacity: 0.72,
      thickness: 0.38,
      emissive: theme.secondaryHex,
      emissiveIntensity: 0.34,
    }),
    organic: new THREE.MeshPhysicalMaterial({
      color: 0x163d2d,
      roughness: 0.68,
      metalness: 0.04,
      clearcoat: 0.34,
      clearcoatRoughness: 0.42,
      emissive: theme.accentHex,
      emissiveIntensity: 0.34,
    }),
    hazard: new THREE.MeshBasicMaterial({
      color: theme.accentHex,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  };
}

function createContext(definition, theme) {
  const root = new THREE.Group();
  root.name = `procedural-${definition.topology.landmark.type}`;
  const runtime = { nodes: {}, sockets: {}, colliders: {}, destructionGroups: {} };
  root.userData.sculptRuntime = runtime;
  root.userData.referenceConcept = `docs/arena-concepts/${CONCEPT_FILES[definition.identity.id]}`;
  return { root, runtime, mats: assetMaterials(theme), animations: [] };
}

function part(ctx, id, geometry, material, options = {}) {
  const pivot = new THREE.Group();
  pivot.name = id;
  if (options.position) pivot.position.set(...options.position);
  if (options.rotation) pivot.rotation.set(...options.rotation);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = `${id}-visual`;
  if (options.scale) mesh.scale.set(...options.scale);
  if (options.meshPosition) mesh.position.set(...options.meshPosition);
  if (options.meshRotation) mesh.rotation.set(...options.meshRotation);
  mesh.castShadow = options.castShadow !== false;
  mesh.receiveShadow = options.receiveShadow !== false;
  if (options.relief) mesh.userData.explodeWithParent = true;
  pivot.add(mesh);
  (options.parent || ctx.root).add(pivot);
  ctx.runtime.nodes[id] = pivot;
  if (options.collider) ctx.runtime.colliders[id] = options.collider;
  if (options.group) {
    ctx.runtime.destructionGroups[options.group] ||= [];
    ctx.runtime.destructionGroups[options.group].push(id);
  }
  return pivot;
}

function socket(ctx, parent, id, position) {
  const node = new THREE.Object3D();
  node.name = id;
  node.position.set(...position);
  parent.add(node);
  ctx.runtime.sockets[id] = node;
  return node;
}

function strut(ctx, id, start, end, radius, material, options = {}) {
  const a = v3(...start), b = v3(...end), direction = b.clone().sub(a);
  const geometry = new THREE.CylinderGeometry(radius, radius * (options.taper ?? 1), direction.length(), options.sides || 10);
  const pivot = part(ctx, id, geometry, material, {
    ...options,
    position: a.clone().add(b).multiplyScalar(0.5).toArray(),
    collider: options.collider || { type: "capsule", radius, start, end },
  });
  pivot.quaternion.setFromUnitVectors(v3(0, 1, 0), direction.normalize());
  return pivot;
}

function pipe(ctx, id, points, radius, material, options = {}) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => v3(...p)));
  return part(ctx, id, new THREE.TubeGeometry(curve, Math.max(12, points.length * 8), radius, 7, false), material, options);
}

function radialParts(ctx, count, radius, callback) {
  for (let i = 0; i < count; i++) callback(i, i / count * Math.PI * 2, radius);
}

function buildFurnace(ctx) {
  const { mats } = ctx;
  part(ctx, "furnace-body", new THREE.CylinderGeometry(2.35, 2.85, 7.6, 16), mats.dark, { position: [0, 4.1, 0], collider: { type: "cylinder", radius: 2.85, height: 7.6 }, group: "reactor" });
  part(ctx, "ceramic-jacket", new THREE.CylinderGeometry(2.42, 2.58, 3.8, 16, 1, true), mats.shell, { position: [0, 4.8, 0], group: "reactor" });
  part(ctx, "molten-window", new THREE.BoxGeometry(1.05, 3.8, 0.22), mats.accent, { position: [0, 4.7, 2.55], group: "reactor" });
  const crucible = part(ctx, "crucible", new THREE.CylinderGeometry(1.28, 0.88, 1.65, 18), mats.shell, { position: [0, 8.25, 0], group: "pour-system" });
  socket(ctx, crucible, "pour-socket", [0, -0.7, 1.05]);
  part(ctx, "pour-stream", new THREE.CylinderGeometry(0.16, 0.27, 2.4, 10), mats.accent, { position: [0, 7.15, 1.25], rotation: [Math.PI / 2, 0, 0], group: "pour-system" });
  radialParts(ctx, 6, 3.35, (i, a, r) => {
    const foot = [Math.cos(a) * r, 0.25, Math.sin(a) * r];
    const shoulder = [Math.cos(a) * 2.55, 6.7, Math.sin(a) * 2.55];
    strut(ctx, `furnace-leg-${i}`, foot, shoulder, 0.34, i % 2 ? mats.shell : mats.dark, { taper: 0.72, group: "frame" });
    part(ctx, `service-pod-${i}`, new THREE.CylinderGeometry(0.5, 0.58, 2.6, 10), mats.dark, { position: [Math.cos(a) * 3.65, 1.55, Math.sin(a) * 3.65], group: "services" });
  });
  const crown = part(ctx, "overhead-pour-ring", new THREE.TorusGeometry(3.15, 0.28, 10, 48), mats.shell, { position: [0, 10.6, 0], rotation: [Math.PI / 2, 0, 0], group: "frame" });
  ctx.animations.push({ type: "spinY", o: crown, speed: 0.035 });
  pipe(ctx, "coolant-loop", [[2.4, 5.5, 0], [4, 5.3, 0], [4, 2.1, 1.2], [3, 1.2, 2.4]], 0.18, mats.shell, { group: "services" });
  const glow = new THREE.PointLight(0xff7a18, 4.6, 50, 1.8); glow.position.y = 7.6; ctx.root.add(glow);
  ctx.animations.push({ type: "light", o: glow, base: 3.4, amp: 1.3, phase: 0.8 });
}

function buildSanctum(ctx) {
  const { mats } = ctx;
  part(ctx, "sanctum-dais", new THREE.CylinderGeometry(4.5, 5.1, 1.1, 8), mats.shell, { position: [0, 0.55, 0], collider: { type: "cylinder", radius: 5.1, height: 1.1 }, group: "foundation" });
  part(ctx, "sanctum-inlay", new THREE.CylinderGeometry(3.65, 3.65, 0.12, 16), mats.dark, { position: [0, 1.16, 0], group: "foundation" });
  radialParts(ctx, 8, 3.45, (i, a, r) => {
    part(ctx, `reliquary-${i}`, new THREE.CylinderGeometry(0.42, 0.56, 2.1, 8), i % 2 ? mats.dark : mats.shell, { position: [Math.cos(a) * r, 2.05, Math.sin(a) * r], group: "reliquaries" });
    part(ctx, `reliquary-cap-${i}`, new THREE.SphereGeometry(0.52, 10, 8), mats.secondary, { position: [Math.cos(a) * r, 3.15, Math.sin(a) * r], scale: [1, 0.38, 1], relief: true, group: "reliquaries" });
  });
  const prism = part(ctx, "memory-prism", new THREE.OctahedronGeometry(1.28, 0), mats.glass, { position: [0, 4.2, 0], scale: [0.72, 2.2, 0.72], group: "memory-core" });
  ctx.animations.push({ type: "spinY", o: prism, speed: 0.16 }, { type: "bob", o: prism, baseY: 4.2, phase: 0.3 });
  for (let i = 0; i < 4; i++) strut(ctx, `sanctum-pylon-${i}`, [Math.cos(i * Math.PI / 2) * 4.25, 0.8, Math.sin(i * Math.PI / 2) * 4.25], [Math.cos(i * Math.PI / 2) * 3.7, 5.8, Math.sin(i * Math.PI / 2) * 3.7], 0.25, mats.dark, { taper: 0.62, group: "crown" });
  const ring = part(ctx, "memory-orbit", new THREE.TorusGeometry(2.2, 0.11, 8, 48), mats.secondary, { position: [0, 3.55, 0], rotation: [Math.PI / 2, 0, 0], group: "memory-core" });
  ctx.animations.push({ type: "spinY", o: ring, speed: -0.11 });
}

function buildSignalTower(ctx) {
  const { mats } = ctx;
  part(ctx, "tower-base", new THREE.CylinderGeometry(3.25, 4.1, 2.1, 8), mats.dark, { position: [0, 1.05, 0], collider: { type: "cylinder", radius: 4.1, height: 2.1 }, group: "foundation" });
  part(ctx, "tower-shaft", new THREE.CylinderGeometry(1.65, 2.7, 10.4, 8), mats.shell, { position: [0, 7.0, 0], group: "shaft" });
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2;
    strut(ctx, `tower-buttress-${i}`, [Math.cos(a) * 3.6, 0.3, Math.sin(a) * 3.6], [Math.cos(a) * 1.9, 7.2, Math.sin(a) * 1.9], 0.25, mats.dark, { taper: 0.65, group: "foundation" });
  }
  for (let i = 0; i < 3; i++) part(ctx, `tower-platform-${i}`, new THREE.CylinderGeometry(2.15 - i * 0.22, 2.15 - i * 0.22, 0.22, 12), mats.dark, { position: [0, 4.5 + i * 3.2, 0], group: "shaft" });
  const mast = strut(ctx, "signal-mast", [0, 11.5, 0], [0, 17.2, 0], 0.16, mats.secondary, { taper: 0.45, group: "signal-crown" });
  socket(ctx, mast, "lightning-socket", [0, 2.75, 0]);
  for (let i = 0; i < 3; i++) strut(ctx, `capture-fork-${i}`, [0, 14.4, 0], [Math.cos(i * Math.PI * 2 / 3) * 1.7, 17.0, Math.sin(i * Math.PI * 2 / 3) * 1.7], 0.11, mats.secondary, { taper: 0.35, group: "signal-crown" });
  const beacon = new THREE.PointLight(ctx.mats.secondary.color, 2.8, 44, 1.8); beacon.position.y = 16; ctx.root.add(beacon);
  ctx.animations.push({ type: "light", o: beacon, base: 1.6, amp: 1.6, phase: 1.2 });
}

function buildHeart(ctx) {
  const { mats } = ctx;
  const frame = new THREE.Group(); frame.name = "containment-frame"; ctx.root.add(frame); ctx.runtime.nodes[frame.name] = frame;
  const framePoints = [[-4, 0, 0], [-4, 7.5, 0], [-2.4, 10.2, 0], [2.4, 10.2, 0], [4, 7.5, 0], [4, 0, 0]];
  framePoints.slice(0, -1).forEach((point, i) => strut(ctx, `frame-segment-${i}`, point, framePoints[i + 1], 0.28, mats.dark, { parent: frame, group: "containment" }));
  const left = part(ctx, "heart-left-lobe", new THREE.IcosahedronGeometry(1.9, 2), mats.organic, { position: [-1.25, 6.25, 0], scale: [1.1, 1.35, 0.9], group: "heart" });
  const right = part(ctx, "heart-right-lobe", new THREE.IcosahedronGeometry(1.9, 2), mats.organic, { position: [1.25, 6.25, 0], scale: [1.1, 1.35, 0.9], group: "heart" });
  const ventricle = part(ctx, "heart-ventricle", new THREE.ConeGeometry(2.25, 4.7, 12), mats.organic, { position: [0, 3.65, 0], rotation: [0, 0, Math.PI], scale: [1, 1, 0.84], group: "heart" });
  [left, right, ventricle].forEach((o, i) => ctx.animations.push({ type: "scalePulse", o, baseScale: o.scale.clone(), amp: 0.045 + i * 0.01, phase: i * 0.4 }));
  radialParts(ctx, 6, 4.05, (i, a, r) => {
    part(ctx, `nutrient-canister-${i}`, new THREE.CylinderGeometry(0.38, 0.42, 2.4, 12), mats.glass, { position: [Math.cos(a) * r, 7.8 + (i % 2) * 1.2, Math.sin(a) * r * 0.38], rotation: [0, 0, Math.cos(a) * 0.18], group: "life-support" });
    pipe(ctx, `root-cable-${i}`, [[0, 3.2, 0], [Math.cos(a) * 2.2, 1.8, Math.sin(a) * 1.8], [Math.cos(a) * 4.8, 0.1, Math.sin(a) * 4.8]], 0.1 + (i % 2) * 0.04, i % 2 ? mats.dark : mats.organic, { group: "roots" });
  });
  const glow = new THREE.PointLight(mats.secondary.color, 2.8, 38, 1.9); glow.position.y = 6; ctx.root.add(glow);
  ctx.animations.push({ type: "light", o: glow, base: 1.8, amp: 1.2, phase: 0 });
}

function buildRift(ctx) {
  const { mats } = ctx;
  for (const side of [-1, 1]) {
    part(ctx, `rift-pylon-${side < 0 ? "west" : "east"}`, new THREE.CylinderGeometry(1.35, 2.2, 8.4, 8), mats.shell, { position: [side * 4.8, 4.2, 0], group: "pylons" });
    radialParts(ctx, 7, 1.75, (i, a) => part(ctx, `ice-spire-${side}-${i}`, new THREE.ConeGeometry(0.28 + (i % 3) * 0.1, 2.2 + (i % 4) * 0.6, 6), mats.glass, { position: [side * 4.8 + Math.cos(a) * 1.65, 8.2 + (i % 2), Math.sin(a) * 1.65], rotation: [Math.sin(a) * 0.2, 0, Math.cos(a) * 0.2], group: "ice-crowns" }));
  }
  const bridge = strut(ctx, "stabilizer-bridge", [-4.6, 6.0, 0], [4.6, 6.0, 0], 0.42, mats.dark, { sides: 8, group: "stabilizer" });
  const clamp = part(ctx, "rift-clamp", new THREE.TorusGeometry(1.35, 0.3, 10, 32), mats.secondary, { position: [0, 6, 0], rotation: [0, Math.PI / 2, 0], group: "stabilizer" });
  ctx.animations.push({ type: "spinY", o: clamp, speed: 0.22 });
  socket(ctx, bridge, "rift-energy-socket", [0, 0, 0]);
  pipe(ctx, "cryo-feed-west", [[-4.8, 2, 1], [-3.8, 4.1, 1.2], [-1.2, 5.6, 0.8]], 0.15, mats.secondary, { group: "stabilizer" });
  pipe(ctx, "cryo-feed-east", [[4.8, 2, -1], [3.8, 4.1, -1.2], [1.2, 5.6, -0.8]], 0.15, mats.secondary, { group: "stabilizer" });
}

function buildMonolith(ctx) {
  const { mats } = ctx;
  part(ctx, "monolith-dais", new THREE.CylinderGeometry(4.5, 5.1, 1.2, 10), mats.dark, { position: [0, 0.6, 0], collider: { type: "cylinder", radius: 5.1, height: 1.2 }, group: "foundation" });
  const stone = part(ctx, "null-monolith", new THREE.OctahedronGeometry(2.5, 1), mats.dark, { position: [0, 7.5, 0], scale: [0.86, 3.35, 0.78], group: "monolith" });
  for (let i = 0; i < 3; i++) {
    const orbit = part(ctx, `ritual-ring-${i}`, new THREE.TorusGeometry(3.45 + i * 0.7, 0.13, 9, 56), i % 2 ? mats.secondary : mats.accent, { position: [0, 4.8 + i * 2.7, 0], rotation: [i === 1 ? Math.PI / 2 : 0.42, i * 0.5, i === 2 ? Math.PI / 2 : 0], group: "orbits" });
    ctx.animations.push({ type: "spinY", o: orbit, speed: (i % 2 ? -1 : 1) * (0.08 + i * 0.03) });
  }
  radialParts(ctx, 8, 4.1, (i, a, r) => part(ctx, `reliquary-spire-${i}`, new THREE.ConeGeometry(0.34, 2.3 + (i % 2) * 0.7, 5), mats.dark, { position: [Math.cos(a) * r, 2.0, Math.sin(a) * r], group: "reliquaries" }));
  ctx.animations.push({ type: "scalePulse", o: stone, baseScale: stone.scale.clone(), amp: 0.018, phase: 2.2 });
}

function buildTransit(ctx) {
  const { mats } = ctx;
  part(ctx, "transit-pad", new THREE.CylinderGeometry(3.25, 3.65, 0.75, 12), mats.dark, { position: [0, 0.38, 0], collider: { type: "cylinder", radius: 3.65, height: 0.75 }, group: "foundation" });
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + i * Math.PI / 2;
    part(ctx, `transit-pylon-${i}`, new THREE.BoxGeometry(0.75, 7.6, 0.9), mats.shell, { position: [Math.cos(a) * 3.6, 3.8, Math.sin(a) * 3.6], rotation: [0, -a, 0], group: "pylons" });
  }
  const train = part(ctx, "suspended-maglev", new THREE.BoxGeometry(5.8, 1.35, 1.6, 3, 2, 2), mats.shell, { position: [0, 7.0, 0], rotation: [0, 0.28, 0], group: "maglev" });
  part(ctx, "maglev-window-band", new THREE.BoxGeometry(5.2, 0.42, 1.64), mats.secondary, { position: [0, 7.05, 0], rotation: [0, 0.28, 0], relief: true, group: "maglev" });
  ctx.animations.push({ type: "bob", o: train, baseY: 7, phase: 1.1 });
  for (let i = 0; i < 4; i++) {
    const holo = part(ctx, `route-orbit-${i}`, new THREE.TorusGeometry(1.4 + i * 0.46, 0.07, 8, 44), i % 2 ? mats.accent : mats.secondary, { position: [0, 2.3 + i * 0.62, 0], rotation: [Math.PI / 2, 0, 0], group: "hologram" });
    ctx.animations.push({ type: "spinY", o: holo, speed: (i % 2 ? -1 : 1) * (0.18 + i * 0.04) });
  }
  socket(ctx, train, "train-drive-socket", [0, -0.7, 0]);
}

function buildSolar(ctx) {
  const { mats } = ctx;
  part(ctx, "solar-foundation", new THREE.CylinderGeometry(4.3, 5.1, 1.25, 12), mats.shell, { position: [0, 0.62, 0], collider: { type: "cylinder", radius: 5.1, height: 1.25 }, group: "foundation" });
  part(ctx, "receiver-tower", new THREE.CylinderGeometry(1.25, 1.8, 8.5, 14), mats.dark, { position: [0, 5.15, 0], group: "receiver" });
  const chamber = part(ctx, "receiver-chamber", new THREE.CylinderGeometry(1.55, 1.55, 2.5, 16), mats.accent, { position: [0, 9.2, 0], group: "receiver" });
  socket(ctx, chamber, "solar-beam-socket", [0, 1.25, 0]);
  radialParts(ctx, 8, 3.85, (i, a, r) => {
    const panel = part(ctx, `heliostat-petal-${i}`, new THREE.BoxGeometry(1.45, 0.12, 3.2), i % 2 ? mats.shell : mats.secondary, { position: [Math.cos(a) * r, 4.1 + (i % 2) * 0.4, Math.sin(a) * r], rotation: [0.58, -a, 0], group: "heliostat-crown" });
    panel.rotateY(Math.PI / 2);
    strut(ctx, `petal-arm-${i}`, [Math.cos(a) * 2.0, 1.1, Math.sin(a) * 2.0], [Math.cos(a) * r, 3.3, Math.sin(a) * r], 0.16, mats.dark, { taper: 0.7, group: "heliostat-crown" });
  });
  const glow = new THREE.PointLight(0xfbbf24, 3.7, 46, 1.7); glow.position.y = 9.3; ctx.root.add(glow);
  ctx.animations.push({ type: "light", o: glow, base: 2.4, amp: 1.2, phase: 0.6 });
}

function buildExcavator(ctx) {
  const { mats } = ctx;
  for (const side of [-1, 1]) part(ctx, `crawler-track-${side}`, new THREE.BoxGeometry(2.15, 1.25, 6.2), mats.dark, { position: [side * 1.8, 0.85, 0], group: "crawler" });
  part(ctx, "excavator-chassis", new THREE.BoxGeometry(4.2, 1.2, 4.1), mats.shell, { position: [0, 1.8, 0], collider: { type: "box", size: [4.2, 1.2, 4.1] }, group: "crawler" });
  for (const side of [-1, 1]) part(ctx, `regolith-hopper-${side}`, new THREE.BoxGeometry(2.0, 1.55, 2.3), mats.shell, { position: [side * 2.7, 3.4, 1.15], rotation: [0.12, 0, side * 0.12], group: "processing" });
  const boom = strut(ctx, "drill-boom", [0, 2.5, -0.8], [-1.8, 7.2, -1.4], 0.38, mats.shell, { taper: 0.7, sides: 10, group: "drill" });
  socket(ctx, boom, "drill-hinge", [0, 2.35, 0]);
  const bore = part(ctx, "rotary-bore", new THREE.TorusGeometry(2.1, 0.42, 12, 36), mats.dark, { position: [-2.25, 7.7, -1.6], rotation: [0, Math.PI / 2, 0], group: "drill" });
  radialParts(ctx, 14, 2.1, (i, a, r) => part(ctx, `bore-tooth-${i}`, new THREE.BoxGeometry(0.32, 0.5, 0.26), i % 3 ? mats.shell : mats.secondary, { position: [-2.25, 7.7 + Math.cos(a) * r, -1.6 + Math.sin(a) * r], rotation: [a, 0, 0], relief: true, group: "drill" }));
  ctx.animations.push({ type: "spinY", o: bore, speed: 0.22 });
  strut(ctx, "antenna-mast", [1.5, 3, 0.8], [1.5, 8.2, 0.8], 0.08, mats.secondary, { taper: 0.45, group: "telemetry" });
}

function buildCaldera(ctx) {
  const { mats } = ctx;
  part(ctx, "lava-throat-rim", new THREE.TorusGeometry(4.25, 1.05, 12, 48, Math.PI * 1.72), mats.dark, { position: [0, 0.85, 0], rotation: [Math.PI / 2, 0, -Math.PI * 0.14], collider: { type: "ring", radius: 4.25, thickness: 1.05 }, group: "foundation" });
  part(ctx, "lava-surface", new THREE.CylinderGeometry(3.4, 3.6, 0.22, 32), mats.accent, { position: [0, 0.05, 0], group: "throat" });
  radialParts(ctx, 3, 4.1, (i, a, r) => {
    const tower = part(ctx, `thermal-tower-${i}`, new THREE.CylinderGeometry(0.72, 1.05, 5.8, 8), mats.dark, { position: [Math.cos(a) * r, 3.65, Math.sin(a) * r], group: "thermal-towers" });
    part(ctx, `tower-vent-${i}`, new THREE.TorusGeometry(0.78, 0.16, 8, 24), mats.accent, { position: [Math.cos(a) * r, 6.6, Math.sin(a) * r], rotation: [Math.PI / 2, 0, 0], group: "thermal-towers" });
    socket(ctx, tower, `steam-socket-${i}`, [0, 2.9, 0]);
  });
  for (let i = 0; i < 7; i++) {
    const a = -Math.PI * 0.7 + i / 6 * Math.PI * 1.4;
    part(ctx, `basalt-fin-${i}`, new THREE.ConeGeometry(0.52, 3.8 + (i % 3) * 0.7, 5), mats.dark, { position: [Math.cos(a) * 5.15, 2.0, Math.sin(a) * 5.15], rotation: [Math.sin(a) * 0.18, 0, -Math.cos(a) * 0.18], group: "basalt-crown" });
  }
  const crucible = part(ctx, "suspended-crucible", new THREE.TorusGeometry(1.45, 0.32, 10, 32), mats.shell, { position: [0, 4.9, 0], rotation: [Math.PI / 2, 0, 0], group: "throat" });
  ctx.animations.push({ type: "spinY", o: crucible, speed: 0.08 });
  const glow = new THREE.PointLight(0xff5a14, 4.8, 48, 1.65); glow.position.y = 2.2; ctx.root.add(glow);
  ctx.animations.push({ type: "light", o: glow, base: 3.2, amp: 1.6, phase: 1.4 });
}

const LANDMARK_BUILDERS = Object.freeze({
  "furnace-reactor": buildFurnace,
  "archive-sanctum": buildSanctum,
  "grave-tower": buildSignalTower,
  "biomech-heart": buildHeart,
  "rift-chasm": buildRift,
  "null-monolith": buildMonolith,
  "transit-holo": buildTransit,
  "solar-crown": buildSolar,
  "quarry-crater": buildExcavator,
  "lava-throat": buildCaldera,
});

export function buildArenaLandmark(definition, theme) {
  const ctx = createContext(definition, theme);
  const build = LANDMARK_BUILDERS[definition.topology.landmark.type];
  if (!build) return null;
  build(ctx);
  ctx.root.userData.assetPipeline = "img2threejs-procedural-v1";
  ctx.root.userData.componentCount = Object.keys(ctx.runtime.nodes).length;
  ctx.root.userData.socketCount = Object.keys(ctx.runtime.sockets).length;
  return { root: ctx.root, animations: ctx.animations };
}

function setInstance(mesh, index, position, scale, rotationY = 0) {
  const matrix = new THREE.Matrix4();
  matrix.compose(v3(...position), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rotationY, 0)), v3(...scale));
  mesh.setMatrixAt(index, matrix);
}

function zoneClass(definition, x, y) {
  if ((definition.topology.voids || []).some(zone => pointInZone(x + 0.5, y + 0.5, zone))) return "void";
  if ((definition.topology.blocks || []).some(zone => pointInZone(x + 0.5, y + 0.5, zone))) return "cover";
  return "perimeter";
}

export function buildExclusionReadability(definition, theme, tileSize = ARENA_SIZE.tile * 0.1) {
  const grid = createArenaGrid(definition);
  const root = new THREE.Group();
  root.name = `navigation-readability-${definition.identity.id}`;
  root.userData.navigationReadabilityVersion = "semantic-barriers-v1";
  const plates = { void: [], perimeter: [] };
  const edges = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 0) continue;
      const kind = zoneClass(definition, x, y);
      if (kind !== "cover") plates[kind].push({ x, y });
      for (const [dx, dy, orientation] of [[1, 0, Math.PI / 2], [-1, 0, Math.PI / 2], [0, 1, 0], [0, -1, 0]]) {
        if (grid[y + dy]?.[x + dx] === 0) edges.push({ x, y, dx, dy, orientation, kind });
      }
    }
  }
  const plateGeometry = new THREE.BoxGeometry(1, 1, 1);
  const perimeterMaterial = new THREE.MeshStandardMaterial({ color: theme.outer, roughness: 0.95, metalness: 0.04, emissive: theme.wallEmissive, emissiveIntensity: 0.035 });
  const voidMaterial = new THREE.MeshBasicMaterial({ color: color(theme.outer).multiplyScalar(0.32), transparent: true, opacity: 0.98 });
  for (const [kind, cells] of Object.entries(plates)) {
    if (!cells.length) continue;
    const mesh = new THREE.InstancedMesh(plateGeometry, kind === "void" ? voidMaterial : perimeterMaterial, cells.length);
    mesh.name = `${kind}-exclusion-field`;
    mesh.userData.navigationClass = kind === "void" ? "void-do-not-enter" : "outside-combat-footprint";
    cells.forEach((cell, i) => setInstance(mesh, i, [(cell.x + 0.5) * tileSize, kind === "void" ? -0.86 : -0.56, (cell.y + 0.5) * tileSize], [tileSize * 0.96, kind === "void" ? 0.16 : 0.12, tileSize * 0.96]));
    mesh.instanceMatrix.needsUpdate = true;
    mesh.receiveShadow = true;
    root.add(mesh);
  }
  if (edges.length) {
    const curbGeometry = new THREE.BoxGeometry(1, 1, 1);
    const curbMaterial = new THREE.MeshPhysicalMaterial({ color: theme.wall, roughness: 0.62, metalness: 0.38, clearcoat: 0.12, emissive: theme.wallEmissive, emissiveIntensity: 0.1 });
    const stripMaterial = new THREE.MeshBasicMaterial({ color: theme.secondaryHex, transparent: true, opacity: 0.58, blending: THREE.AdditiveBlending, depthWrite: false });
    const curbs = new THREE.InstancedMesh(curbGeometry, curbMaterial, edges.length);
    const strips = new THREE.InstancedMesh(curbGeometry, stripMaterial, edges.length);
    curbs.name = "walkable-edge-curbs"; strips.name = "walkable-edge-safety-strips";
    curbs.userData.navigationClass = "solid-boundary"; strips.userData.navigationClass = "boundary-warning-light";
    edges.forEach((edge, i) => {
      const x = (edge.x + 0.5 - edge.dx * 0.5) * tileSize;
      const z = (edge.y + 0.5 - edge.dy * 0.5) * tileSize;
      setInstance(curbs, i, [x, 0.33, z], [tileSize, 0.66, 0.22], edge.orientation);
      setInstance(strips, i, [x, 0.7, z], [tileSize * 0.88, 0.055, 0.08], edge.orientation);
    });
    curbs.instanceMatrix.needsUpdate = true; strips.instanceMatrix.needsUpdate = true;
    curbs.castShadow = true; curbs.receiveShadow = true;
    root.add(curbs, strips);
  }
  const coverMaterial = new THREE.MeshPhysicalMaterial({ color: theme.wall, roughness: 0.48, metalness: 0.52, clearcoat: 0.18, emissive: theme.wallEmissive, emissiveIntensity: 0.1 });
  for (const [index, block] of (definition.topology.blocks || []).entries()) {
    const coverHeight = arenaBlockHeight(block);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(block.w * tileSize * 0.92, 0.16, block.h * tileSize * 0.92), coverMaterial);
    cap.name = `cover-cap-${index}`;
    cap.position.set((block.x + block.w / 2) * tileSize, coverHeight + 0.09, (block.y + block.h / 2) * tileSize);
    cap.userData.navigationClass = "solid-cover";
    cap.castShadow = true; cap.receiveShadow = true;
    root.add(cap);
  }
  for (const [index, zone] of (definition.topology.voids || []).entries()) {
    const markerMaterial = new THREE.MeshBasicMaterial({ color: theme.accentHex, transparent: true, opacity: 0.72, blending: THREE.AdditiveBlending, depthWrite: false });
    for (const [cx, cy] of [[zone.x, zone.y], [zone.x + zone.w, zone.y], [zone.x, zone.y + zone.h], [zone.x + zone.w, zone.y + zone.h]]) {
      const beacon = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.8, 5), markerMaterial);
      beacon.name = `void-beacon-${index}`;
      beacon.position.set(cx * tileSize, 0.82, cy * tileSize);
      beacon.userData.navigationClass = "void-warning-beacon";
      root.add(beacon);
    }
  }
  root.userData.counts = { perimeterCells: plates.perimeter.length, voidCells: plates.void.length, boundaryEdges: edges.length, coverBlocks: definition.topology.blocks.length };
  return { root, animations: [] };
}

export const ARENA_ASSET_VERSION = "1.0.0";
