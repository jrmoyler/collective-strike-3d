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

function hashSeed(value) {
  let result = 2166136261;
  for (const char of String(value)) { result ^= char.charCodeAt(0); result = Math.imul(result, 16777619); }
  return result >>> 0;
}

function seededNoise(seed) {
  let state = hashSeed(seed);
  return () => {
    state += 0x6D2B79F5;
    let value = state;
    value = Math.imul(value ^ value >>> 15, value | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
}

function dataTexture(data, size, colorSpace) {
  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.UnsignedByteType);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 3);
  texture.colorSpace = colorSpace;
  texture.needsUpdate = true;
  return texture;
}

/** Independent albedo/roughness/normal signals; no PBR channel aliasing. */
function proceduralSurfaceSet(baseValue, accentValue, seed, finish = "worn-metal", size = 128) {
  const random = seededNoise(`${seed}:${finish}`), base = color(baseValue), accent = color(accentValue);
  const heights = new Float32Array(size * size), albedo = new Uint8Array(size * size * 4), roughness = new Uint8Array(size * size * 4), normal = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const index = y * size + x, u = x / size, v = y / size;
    const macro = Math.sin(u * Math.PI * 4 + seed.length) * 0.5 + Math.cos(v * Math.PI * 3) * 0.5;
    const seam = (x % 32 < 2 || y % 32 < 2) ? -0.45 : 0;
    const brush = finish === "brushed-steel" ? Math.sin(v * size * 2.8) * 0.12 : 0;
    const pits = random() < (finish === "stone" ? 0.09 : 0.035) ? -0.65 : 0;
    const height = macro * 0.16 + seam + brush + pits + (random() - 0.5) * 0.22;
    heights[index] = height;
    const wear = Math.max(0, macro * 0.18 + random() * 0.16), tint = base.clone().lerp(accent, Math.min(0.22, wear));
    const cavity = Math.max(0, -height) * 0.24, ai = index * 4;
    albedo[ai] = Math.round(THREE.MathUtils.clamp(tint.r * (1 - cavity), 0, 1) * 255);
    albedo[ai + 1] = Math.round(THREE.MathUtils.clamp(tint.g * (1 - cavity), 0, 1) * 255);
    albedo[ai + 2] = Math.round(THREE.MathUtils.clamp(tint.b * (1 - cavity), 0, 1) * 255);
    albedo[ai + 3] = 255;
    const rough = THREE.MathUtils.clamp((finish === "painted" ? 0.56 : finish === "stone" ? 0.82 : 0.42) + (random() - 0.5) * 0.26 + cavity * 0.35 - wear * 0.25, 0.12, 0.96);
    roughness[ai] = roughness[ai + 1] = roughness[ai + 2] = Math.round(rough * 255); roughness[ai + 3] = 255;
  }
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const index = y * size + x, left = heights[y * size + (x + size - 1) % size], right = heights[y * size + (x + 1) % size], down = heights[((y + size - 1) % size) * size + x], up = heights[((y + 1) % size) * size + x];
    const nx = THREE.MathUtils.clamp((left - right) * 0.7, -1, 1), ny = THREE.MathUtils.clamp((down - up) * 0.7, -1, 1), ni = index * 4;
    normal[ni] = Math.round((nx * 0.5 + 0.5) * 255); normal[ni + 1] = Math.round((ny * 0.5 + 0.5) * 255); normal[ni + 2] = 255; normal[ni + 3] = 255;
  }
  return {
    map: dataTexture(albedo, size, THREE.SRGBColorSpace),
    roughnessMap: dataTexture(roughness, size, THREE.NoColorSpace),
    normalMap: dataTexture(normal, size, THREE.NoColorSpace),
  };
}
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
  const steelMaps = proceduralSurfaceSet(theme.accentHex, theme.secondaryHex, `${theme.id || theme.architecture}:steel`, "brushed-steel");
  const darkMaps = proceduralSurfaceSet(theme.outer, theme.accentHex, `${theme.id || theme.architecture}:dark`, "worn-metal");
  const paintedMaps = proceduralSurfaceSet(theme.wall, theme.accentHex, `${theme.id || theme.architecture}:paint`, "painted");
  return {
    shell: new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.48,
      metalness: 0.56,
      clearcoat: 0.18,
      clearcoatRoughness: 0.52,
      emissive: theme.wallEmissive,
      emissiveIntensity: 0.08,
      ...paintedMaps,
      normalScale: new THREE.Vector2(0.38, 0.38),
    }),
    dark: new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.72,
      metalness: 0.34,
      clearcoat: 0.08,
      emissive: theme.wallEmissive,
      emissiveIntensity: 0.04,
      ...darkMaps,
      normalScale: new THREE.Vector2(0.48, 0.48),
    }),
    accent: new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.24,
      metalness: 0.42,
      clearcoat: 0.46,
      clearcoatRoughness: 0.26,
      emissive: theme.accentHex,
      emissiveIntensity: 1.42,
      ...steelMaps,
      normalScale: new THREE.Vector2(0.28, 0.28),
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
  part(ctx, "reactor-deck", new THREE.CylinderGeometry(4.05, 4.28, 0.42, 8), mats.dark, { position: [0, 0.18, 0], group: "foundation" });
  part(ctx, "reactor-deck-trim", new THREE.TorusGeometry(3.94, 0.16, 8, 32), mats.shell, { position: [0, 0.42, 0], rotation: [Math.PI / 2, 0, 0], group: "foundation" });
  part(ctx, "furnace-body", new THREE.CylinderGeometry(2.35, 2.85, 7.6, 16), mats.dark, { position: [0, 4.1, 0], collider: { type: "cylinder", radius: 2.85, height: 7.6 }, group: "reactor" });
  part(ctx, "ceramic-jacket", new THREE.CylinderGeometry(2.42, 2.58, 3.8, 16, 1, true), mats.shell, { position: [0, 4.8, 0], group: "reactor" });
  radialParts(ctx, 8, 2.57, (i, a, r) => {
    if (i === 2) return;
    part(ctx, `ceramic-panel-${i}`, new THREE.BoxGeometry(1.18, 2.65, 0.14), mats.shell, {
      position: [Math.cos(a) * r, 5.05, Math.sin(a) * r], rotation: [0, Math.PI / 2 - a, 0], group: "reactor"
    });
  });
  part(ctx, "molten-window", new THREE.BoxGeometry(1.05, 3.8, 0.22), mats.accent, { position: [0, 4.7, 2.55], group: "reactor" });
  for (const [id, size, position] of [
    ["window-frame-left", [0.18, 4.18, 0.34], [-0.68, 4.7, 2.62]],
    ["window-frame-right", [0.18, 4.18, 0.34], [0.68, 4.7, 2.62]],
    ["window-frame-top", [1.52, 0.18, 0.34], [0, 6.7, 2.62]],
    ["window-frame-bottom", [1.52, 0.18, 0.34], [0, 2.7, 2.62]],
  ]) part(ctx, id, new THREE.BoxGeometry(...size), mats.shell, { position, group: "reactor" });
  for (let i = 0; i < 3; i++) part(ctx, `furnace-band-${i}`, new THREE.TorusGeometry(2.62 - i * 0.08, 0.13, 8, 32), mats.shell, { position: [0, 2.25 + i * 1.82, 0], rotation: [Math.PI / 2, 0, 0], group: "reactor" });
  part(ctx, "lower-molten-port", new THREE.BoxGeometry(0.82, 1.3, 0.26), mats.accent, { position: [0, 1.18, 2.72], group: "reactor" });
  for (const [id, size, position] of [
    ["lower-port-left", [0.16, 1.58, 0.34], [-0.53, 1.18, 2.78]],
    ["lower-port-right", [0.16, 1.58, 0.34], [0.53, 1.18, 2.78]],
    ["lower-port-top", [1.22, 0.16, 0.34], [0, 1.93, 2.78]],
  ]) part(ctx, id, new THREE.BoxGeometry(...size), mats.shell, { position, group: "reactor" });
  const crucible = part(ctx, "crucible", new THREE.CylinderGeometry(1.28, 0.88, 1.65, 18), mats.shell, { position: [0, 8.25, 0], group: "pour-system" });
  socket(ctx, crucible, "pour-socket", [0, -0.7, 1.05]);
  part(ctx, "pour-stream", new THREE.CylinderGeometry(0.16, 0.27, 2.4, 10), mats.accent, { position: [0, 7.15, 1.25], group: "pour-system" });
  radialParts(ctx, 6, 3.35, (i, a, r) => {
    const foot = [Math.cos(a) * r, 0.25, Math.sin(a) * r];
    const shoulder = [Math.cos(a) * 2.55, 6.7, Math.sin(a) * 2.55];
    strut(ctx, `furnace-leg-${i}`, foot, shoulder, 0.34, i % 2 ? mats.shell : mats.dark, { taper: 0.72, group: "frame" });
    part(ctx, `furnace-foot-${i}`, new THREE.BoxGeometry(0.9, 0.55, 1.15), i % 2 ? mats.dark : mats.shell, { position: [foot[0], 0.62, foot[2]], rotation: [0, -a, 0], group: "frame" });
    part(ctx, `service-pod-${i}`, new THREE.CylinderGeometry(0.5, 0.58, 2.6, 10), mats.dark, { position: [Math.cos(a) * 3.65, 1.55, Math.sin(a) * 3.65], group: "services" });
  });
  radialParts(ctx, 4, 3.15, (i, a, r) => {
    const lower = [Math.cos(a) * 2.72, 7.0, Math.sin(a) * 2.72];
    const upper = [Math.cos(a) * r, 11.85, Math.sin(a) * r];
    strut(ctx, `gantry-pillar-${i}`, lower, upper, 0.22, i % 2 ? mats.dark : mats.shell, { taper: 0.82, group: "frame" });
  });
  const crown = part(ctx, "overhead-pour-ring", new THREE.TorusGeometry(3.15, 0.28, 10, 48), mats.shell, { position: [0, 12, 0], rotation: [Math.PI / 2, 0, 0], group: "frame" });
  part(ctx, "overhead-carriage", new THREE.BoxGeometry(1.2, 0.48, 1.05), mats.dark, { position: [0, 11.76, 0], group: "pour-system" });
  part(ctx, "carriage-heat-core", new THREE.CylinderGeometry(0.22, 0.3, 0.82, 10), mats.accent, { position: [0, 11.1, 0], group: "pour-system" });
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

const LIVING_PROFILES = Object.freeze({
  forge: { label: "refinery", shape: "canister", motion: "spinY", metal: 0.78 },
  abyss: { label: "reliquary", shape: "reliquary", motion: "bob", metal: 0.28 },
  tempest: { label: "storm-vane", shape: "mast", motion: "spinY", metal: 0.72 },
  verdant: { label: "bio-pod", shape: "pod", motion: "scalePulse", metal: 0.05 },
  cryo: { label: "crystal-bank", shape: "crystal", motion: "bob", metal: 0.18 },
  mirage: { label: "null-shard", shape: "obelisk", motion: "spinY", metal: 0.52 },
  neon: { label: "transit-node", shape: "holo", motion: "spinY", metal: 0.64 },
  solar: { label: "heliostat", shape: "mirror", motion: "spinY", metal: 0.82 },
  lunar: { label: "survey-rig", shape: "survey", motion: "spinY", metal: 0.7 },
  caldera: { label: "thermal-vent", shape: "vent", motion: "light", metal: 0.26 },
});

function livingMaterials(theme, id) {
  const hard = proceduralSurfaceSet(theme.wall, theme.secondaryHex, `${id}:living-hard`, id === "lunar" || id === "caldera" ? "stone" : "brushed-steel");
  const ground = proceduralSurfaceSet(theme.outer, theme.accentHex, `${id}:living-ground`, id === "verdant" ? "painted" : "stone");
  return {
    hard: new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: LIVING_PROFILES[id].metal, roughness: 0.46, clearcoat: 0.14, clearcoatRoughness: 0.52, emissive: theme.wallEmissive, emissiveIntensity: 0.08, ...hard, normalScale: new THREE.Vector2(0.42, 0.42) }),
    ground: new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.12, roughness: 0.82, emissive: theme.wallEmissive, emissiveIntensity: 0.035, ...ground, normalScale: new THREE.Vector2(0.56, 0.56) }),
    energy: new THREE.MeshPhysicalMaterial({ color: theme.secondaryHex, metalness: 0.18, roughness: 0.16, clearcoat: 0.74, clearcoatRoughness: 0.12, emissive: theme.accentHex, emissiveIntensity: 2.15 }),
    glass: new THREE.MeshPhysicalMaterial({ color: theme.secondaryHex, metalness: 0, roughness: 0.08, transmission: 0.42, transparent: true, opacity: 0.72, thickness: 0.18, emissive: theme.secondaryHex, emissiveIntensity: 0.46 }),
  };
}

function themedModule(profile, materials, index) {
  const group = new THREE.Group();
  group.name = `${profile.label}-${index}`;
  const mesh = (name, geometry, material, position, scale = [1, 1, 1], rotation = [0, 0, 0]) => {
    const object = new THREE.Mesh(geometry, material); object.name = name; object.position.set(...position); object.scale.set(...scale); object.rotation.set(...rotation); object.castShadow = true; object.receiveShadow = true; group.add(object); return object;
  };
  mesh("service-plinth", new THREE.CylinderGeometry(0.62, 0.78, 0.28, 8), materials.ground, [0, 0.14, 0]);
  let moving;
  if (profile.shape === "canister") {
    mesh("pressure-vessel", new THREE.CylinderGeometry(0.36, 0.46, 1.55, 12), materials.hard, [0, 0.98, 0]);
    moving = mesh("valve-wheel", new THREE.TorusGeometry(0.34, 0.07, 7, 22), materials.energy, [0, 1.45, 0.38], [1, 1, 1], [0, 0, Math.PI / 2]);
  } else if (profile.shape === "reliquary") {
    mesh("reliquary-body", new THREE.CylinderGeometry(0.32, 0.54, 1.25, 8), materials.hard, [0, 0.78, 0]);
    moving = mesh("memory-shard", new THREE.OctahedronGeometry(0.34), materials.glass, [0, 1.72, 0], [0.7, 1.5, 0.7]);
  } else if (profile.shape === "mast") {
    mesh("mast", new THREE.CylinderGeometry(0.09, 0.22, 2.6, 8), materials.hard, [0, 1.35, 0]);
    moving = mesh("wind-vane", new THREE.BoxGeometry(1.15, 0.11, 0.26), materials.energy, [0, 2.35, 0]);
  } else if (profile.shape === "pod") {
    moving = mesh("living-pod", new THREE.IcosahedronGeometry(0.58, 1), materials.hard, [0, 0.92, 0], [1, 1.35, 1]);
    for (let arm = 0; arm < 3; arm++) { const angle = arm / 3 * Math.PI * 2; mesh(`root-${arm}`, new THREE.CylinderGeometry(0.07, 0.11, 1.1, 7), materials.ground, [Math.cos(angle) * 0.48, 0.35, Math.sin(angle) * 0.48], [1, 1, 1], [Math.sin(angle) * 0.35, 0, -Math.cos(angle) * 0.35]); }
  } else if (profile.shape === "crystal") {
    for (let crystal = 0; crystal < 4; crystal++) mesh(`crystal-${crystal}`, new THREE.ConeGeometry(0.18 + crystal * 0.035, 1.1 + crystal * 0.22, 6), crystal === 3 ? materials.energy : materials.glass, [(crystal - 1.5) * 0.24, 0.64 + crystal * 0.1, (crystal % 2 - 0.5) * 0.22], [1, 1, 1], [0, 0, (crystal - 1.5) * 0.11]);
    moving = group.children[group.children.length - 1];
  } else if (profile.shape === "obelisk") {
    moving = mesh("null-obelisk", new THREE.OctahedronGeometry(0.52), materials.hard, [0, 1.05, 0], [0.72, 2.2, 0.72]);
    mesh("orbit", new THREE.TorusGeometry(0.62, 0.045, 7, 28), materials.energy, [0, 1.0, 0], [1, 1, 1], [Math.PI / 2, 0, 0]);
  } else if (profile.shape === "holo") {
    mesh("terminal", new THREE.BoxGeometry(0.85, 1.35, 0.32), materials.hard, [0, 0.82, 0]);
    moving = mesh("route-hologram", new THREE.TorusGeometry(0.48, 0.045, 7, 30), materials.energy, [0, 1.72, 0], [1, 1, 1], [Math.PI / 2, 0, 0]);
  } else if (profile.shape === "mirror") {
    mesh("collector-neck", new THREE.CylinderGeometry(0.12, 0.22, 1.3, 8), materials.hard, [0, 0.76, 0]);
    moving = mesh("mirror", new THREE.CylinderGeometry(0.62, 0.62, 0.08, 6), materials.glass, [0, 1.42, 0], [1, 1, 0.72], [Math.PI / 2.7, 0, 0]);
  } else if (profile.shape === "survey") {
    mesh("survey-crate", new THREE.BoxGeometry(1.2, 0.58, 0.8), materials.hard, [0, 0.42, 0]);
    mesh("antenna", new THREE.CylinderGeometry(0.035, 0.06, 1.6, 7), materials.hard, [0.25, 1.28, 0]);
    moving = mesh("dish", new THREE.CylinderGeometry(0.34, 0.34, 0.06, 16), materials.energy, [0.25, 2.02, 0], [1, 1, 0.45], [Math.PI / 2.6, 0, 0]);
  } else {
    mesh("basalt-vent", new THREE.ConeGeometry(0.56, 1.55, 7, 1, true), materials.ground, [0, 0.78, 0]);
    moving = mesh("thermal-throat", new THREE.CylinderGeometry(0.22, 0.34, 0.9, 10), materials.energy, [0, 0.98, 0]);
  }
  group.userData.movingPart = moving;
  group.userData.assetClass = profile.label;
  return group;
}

/**
 * Adds non-colliding cover-top props, elevated conduits, skyline fixtures,
 * practical lights, and ambient movers without touching authored gameplay geometry.
 */
export function buildArenaLivingSet(definition, theme, tileSize = ARENA_SIZE.tile * 0.1) {
  const id = definition.identity.id, profile = LIVING_PROFILES[id], materials = livingMaterials(theme, id), root = new THREE.Group(), animations = [];
  root.name = `living-arena-${id}`;
  const landmark = definition.topology.landmark, origin = [landmark.x * tileSize, landmark.y * tileSize];
  let assetCount = 0;
  for (const [index, block] of definition.topology.blocks.entries()) {
    const module = themedModule(profile, materials, index), height = arenaBlockHeight(block);
    module.position.set((block.x + block.w / 2) * tileSize, height + 0.12, (block.y + block.h / 2) * tileSize);
    module.rotation.y = (index * 2.399963) % (Math.PI * 2);
    const footprint = Math.min(block.w * tileSize, block.h * tileSize), scale = THREE.MathUtils.clamp(footprint / 3.6, 0.48, 1.08);
    module.scale.setScalar(scale); root.add(module); assetCount += module.children.length;
    const moving = module.userData.movingPart;
    if (moving) {
      if (profile.motion === "spinY") animations.push({ type: "spinY", o: moving, speed: 0.18 + index * 0.015 });
      else if (profile.motion === "bob") animations.push({ type: "bob", o: moving, baseY: moving.position.y, phase: index * 0.7 });
      else if (profile.motion === "scalePulse") animations.push({ type: "scalePulse", o: moving, baseScale: moving.scale.clone(), amp: 0.035, phase: index * 0.5 });
    }
  }
  const targets = [...definition.combat.sites, ...Object.values(definition.combat.spawns)];
  for (const [index, zone] of targets.entries()) {
    const end = [(zone.x + zone.w / 2) * tileSize, (zone.y + zone.h / 2) * tileSize], lift = 5.4 + index * 0.35;
    const curve = new THREE.CatmullRomCurve3([v3(origin[0], lift + 1.2, origin[1]), v3((origin[0] + end[0]) / 2, lift + (index % 2 ? 1.4 : -0.4), (origin[1] + end[1]) / 2), v3(end[0], lift, end[1])]);
    const conduit = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 0.13, 7, false), materials.hard); conduit.name = `elevated-service-conduit-${index}`; conduit.castShadow = true; root.add(conduit);
    const signal = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 0.028, 5, false), materials.energy); signal.name = `live-signal-line-${index}`; root.add(signal); assetCount += 2;
  }
  for (let index = 0; index < 8; index++) {
    const angle = index / 8 * Math.PI * 2, radiusX = ARENA_SIZE.width * tileSize * 0.58, radiusZ = ARENA_SIZE.height * tileSize * 0.64;
    const fixture = themedModule(profile, materials, 100 + index); fixture.name = `perimeter-${profile.label}-${index}`; fixture.scale.setScalar(0.72); fixture.position.set(ARENA_SIZE.width * tileSize / 2 + Math.cos(angle) * radiusX, -0.05, ARENA_SIZE.height * tileSize / 2 + Math.sin(angle) * radiusZ); fixture.rotation.y = -angle; root.add(fixture); assetCount += fixture.children.length;
  }
  for (const [index, site] of definition.combat.sites.entries()) {
    const light = new THREE.PointLight(index ? theme.secondaryHex : theme.accentHex, 1.1, 28, 1.9); light.name = `site-practical-${site.id}`; light.position.set((site.x + site.w / 2) * tileSize, 4.8, (site.y + site.h / 2) * tileSize); root.add(light); animations.push({ type: "light", o: light, base: 0.72, amp: 0.52, phase: index * 1.8 }); assetCount++;
  }
  for (let index = 0; index < 4; index++) {
    const drone = new THREE.Group(); drone.name = `ambient-service-drone-${index}`;
    const body = new THREE.Mesh(new THREE.OctahedronGeometry(0.22), materials.hard), halo = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.035, 6, 20), materials.energy); halo.rotation.x = Math.PI / 2; drone.add(body, halo);
    drone.position.set(origin[0] + Math.cos(index * Math.PI / 2) * (7 + index), 7.5 + index * 0.6, origin[1] + Math.sin(index * Math.PI / 2) * (7 + index)); root.add(drone);
    animations.push({ type: "spinY", o: halo, speed: index % 2 ? -0.75 : 0.75 }, { type: "bob", o: drone, baseY: drone.position.y, phase: index * 1.3 }); assetCount += 2;
  }
  root.userData.assetPipeline = "img2threejs-living-arena-v2";
  root.userData.assetCount = assetCount;
  root.userData.connectionCount = targets.length;
  root.userData.themeProfile = profile.label;
  root.userData.materialSystem = "independent-pbr-data-textures-v2";
  return { root, animations };
}

/** Cohesive large-scale materials used by the authored floor, ramps, and cover. */
export function buildArenaMaterialSet(theme) {
  const id = theme.id || theme.architecture || "arena";
  const floorMaps = proceduralSurfaceSet(theme.floorTint, theme.accentHex, `${id}:floor`, id === "lunar" || id === "caldera" ? "stone" : "painted");
  const structureMaps = proceduralSurfaceSet(theme.wall, theme.secondaryHex, `${id}:structure`, "brushed-steel");
  const darkMaps = proceduralSurfaceSet(theme.outer, theme.accentHex, `${id}:outer`, id === "verdant" ? "painted" : "worn-metal");
  return {
    floor: new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: theme.floorRoughness, metalness: theme.floorMetalness, clearcoat: 0.08, clearcoatRoughness: 0.7, emissive: theme.wallEmissive, emissiveIntensity: 0.04, ...floorMaps, normalScale: new THREE.Vector2(0.52, 0.52) }),
    structure: new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.48, clearcoat: 0.16, clearcoatRoughness: 0.48, emissive: theme.wallEmissive, emissiveIntensity: 0.08, ...structureMaps, normalScale: new THREE.Vector2(0.42, 0.42) }),
    dark: new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.74, metalness: 0.24, clearcoat: 0.06, emissive: theme.wallEmissive, emissiveIntensity: 0.035, ...darkMaps, normalScale: new THREE.Vector2(0.58, 0.58) }),
    accent: new THREE.MeshPhysicalMaterial({ color: theme.accentHex, roughness: 0.22, metalness: 0.38, clearcoat: 0.5, emissive: theme.accentHex, emissiveIntensity: 1.1 }),
    secondary: new THREE.MeshPhysicalMaterial({ color: theme.secondaryHex, roughness: 0.2, metalness: 0.32, clearcoat: 0.55, emissive: theme.secondaryHex, emissiveIntensity: 0.92 }),
  };
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

export const ARENA_ASSET_VERSION = "2.0.0";
