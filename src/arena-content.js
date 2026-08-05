/*
 * Arena content-pass framework.
 *
 * A content pass is the strategic art layer for one arena: atmosphere outside
 * the playable footprint, footprint-exact block skins, platform/ramp modules,
 * navigation skirting, a landmark support family, and semantic visual bindings
 * for the authored hazards and interactables.
 *
 * Three rules hold the whole thing together:
 *
 *  1. Simulation data never enters this file's outputs. Authored zones are read
 *     only for placement; the returned bindings are keyed by the authored id and
 *     are driven by the arena's existing simulation tick.
 *  2. Repeated kit pieces are `InstancedMesh` families, so a dense arena still
 *     costs a bounded number of draw calls.
 *  3. Live integration is data-driven. `buildArenaContentPass` resolves the kit
 *     from `CONTENT_PASS_KITS`; adding an arena is a data entry plus an optional
 *     `families` hook, never another optional call site in the runtime.
 */
import * as THREE from "three";
import { ARENA_SIZE, arenaElevationAt, createSeededRandom, pointInZone } from "./arena-core.js";
import { arenaBlockHeight } from "./arena-ballistics.js";
import { proceduralSurfaceSet } from "./arena-assets.js";

export const ARENA_CONTENT_VERSION = "content-pass-framework-v1";

/* ------------------------------------------------------------------ *
 * Authoritative hazard phase mapping (pure, no Three.js)
 * ------------------------------------------------------------------ */

export const HAZARD_PHASES = Object.freeze(["idle", "telegraph", "active", "cooldown"]);

export function hazardCycleLength(hazard) {
  return (hazard?.telegraph || 0) + (hazard?.active || 0) + (hazard?.cooldown || 0);
}

/** Visible recovery window: long enough to read as exhausted, never as armed. */
export function hazardRecoveryWindow(hazard) {
  const cooldown = hazard?.cooldown || 0;
  return Math.min(cooldown, Math.max(1.2, cooldown * 0.3));
}

/** Position inside the hazard cycle, in seconds, for a simulation elapsed time. */
export function hazardCycleTime(hazard, elapsed) {
  const cycle = hazardCycleLength(hazard);
  if (!(cycle > 0)) return 0;
  return (((elapsed || 0) + (hazard.offset || 0)) % cycle + cycle) % cycle;
}

/**
 * The single source of truth for which phase a hazard is in. The runtime tick,
 * the hazard plane, the fog volume, the UI warning and every content-pass
 * binding all read this, so they cannot disagree inside one frame.
 */
export function hazardPhaseAt(hazard, elapsed) {
  const cycle = hazardCycleLength(hazard);
  if (!(cycle > 0)) return "idle";
  const t = hazardCycleTime(hazard, elapsed);
  const telegraph = hazard.telegraph || 0;
  const active = hazard.active || 0;
  if (t < telegraph) return "telegraph";
  if (t < telegraph + active) return "active";
  return t < telegraph + active + hazardRecoveryWindow(hazard) ? "cooldown" : "idle";
}

/** 0..1 progress through the current phase; drives ramps rather than a clock. */
export function hazardPhaseProgress(hazard, elapsed) {
  const cycle = hazardCycleLength(hazard);
  if (!(cycle > 0)) return 0;
  const t = hazardCycleTime(hazard, elapsed);
  const telegraph = hazard.telegraph || 0;
  const active = hazard.active || 0;
  const recovery = hazardRecoveryWindow(hazard);
  const idle = Math.max(1e-6, cycle - telegraph - active - recovery);
  if (t < telegraph) return telegraph > 0 ? t / telegraph : 1;
  if (t < telegraph + active) return active > 0 ? (t - telegraph) / active : 1;
  if (t < telegraph + active + recovery) return recovery > 0 ? (t - telegraph - active) / recovery : 1;
  return (t - telegraph - active - recovery) / idle;
}

/**
 * Authoritative movement cost for a tile. Water and covered routes declare a
 * multiplier on the authored interactable; the visual layer only illustrates it,
 * so this stays the one place the cost is decided.
 */
export function interactableMovementMultiplier(definition, tileX, tileY) {
  let multiplier = 1;
  for (const value of definition.interactables || []) {
    if (value.movementMultiplier && pointInZone(tileX, tileY, value)) multiplier *= value.movementMultiplier;
  }
  return multiplier;
}

/* ------------------------------------------------------------------ *
 * Shared geometry / placement helpers
 * ------------------------------------------------------------------ */

const transform = (position, scale, rotation = 0) => ({ position, scale, rotation });
const clamp01 = value => Math.max(0, Math.min(1, value));

function setInstance(mesh, index, { position, scale, rotation = 0 }) {
  const matrix = new THREE.Matrix4();
  matrix.compose(
    new THREE.Vector3(...position),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rotation, 0)),
    new THREE.Vector3(...scale)
  );
  mesh.setMatrixAt(index, matrix);
}

/** World-space bounds of every authored floor zone: the reachable footprint. */
export function playableBounds(definition, tileSize = ARENA_SIZE.tile * 0.1) {
  const zones = definition.topology.floorZones || [];
  if (!zones.length) return { minX: 0, maxX: 0, minZ: 0, maxZ: 0 };
  return {
    minX: Math.min(...zones.map(zone => zone.x)) * tileSize,
    maxX: Math.max(...zones.map(zone => zone.x + zone.w)) * tileSize,
    minZ: Math.min(...zones.map(zone => zone.y)) * tileSize,
    maxZ: Math.max(...zones.map(zone => zone.y + zone.h)) * tileSize,
  };
}

/**
 * Deterministic silhouettes pushed clear of the playable footprint on every
 * side. `clearance` is measured in tiles so the result never reads as cover a
 * player could rotate through.
 */
export function atmosphereTransforms(definition, tileSize, options = {}) {
  const { count = 18, seed = definition.identity.id, clearance = 3, spread = 6, minHeight = 5, maxHeight = 14, minWidth = 1.1, maxWidth = 3.2 } = options;
  const bounds = playableBounds(definition, tileSize);
  const random = createSeededRandom(seed.length * 977 + count * 31);
  const gap = clearance * tileSize;
  const band = spread * tileSize;
  const centerX = (bounds.minX + bounds.maxX) / 2;
  const centerZ = (bounds.minZ + bounds.maxZ) / 2;
  return Array.from({ length: count }, (_, index) => {
    const side = index % 4;
    const along = random();
    const depth = gap + random() * band;
    const height = minHeight + random() * (maxHeight - minHeight);
    const width = minWidth + random() * (maxWidth - minWidth);
    let x = centerX;
    let z = centerZ;
    if (side === 0) { x = bounds.minX - depth; z = bounds.minZ - band * 0.4 + along * (bounds.maxZ - bounds.minZ + band * 0.8); }
    else if (side === 1) { x = bounds.maxX + depth; z = bounds.minZ - band * 0.4 + along * (bounds.maxZ - bounds.minZ + band * 0.8); }
    else if (side === 2) { z = bounds.minZ - depth; x = bounds.minX - band * 0.4 + along * (bounds.maxX - bounds.minX + band * 0.8); }
    else { z = bounds.maxZ + depth; x = bounds.minX - band * 0.4 + along * (bounds.maxX - bounds.minX + band * 0.8); }
    return transform([x, height / 2 - 0.4, z], [width, height, width * (0.7 + random() * 0.6)], random() * Math.PI);
  });
}

/** Footprint-exact skin for one authored block. Never rotated: a non-square
 *  footprint rotated by a quarter turn stops matching its collision proxy. */
export function blockSkinTransform(block, tileSize, inset = 0.94) {
  const height = arenaBlockHeight(block);
  return transform(
    [(block.x + block.w / 2) * tileSize, height / 2, (block.y + block.h / 2) * tileSize],
    [block.w * tileSize * inset, height, block.h * tileSize * inset]
  );
}

/**
 * Treads that sit on the authored walking surface and carry its slope.
 *
 * `arenaElevationAt` is the height field ballistics and movement already use,
 * so reading it here is what stops treads from floating. Where an authored
 * platform overlaps the ramp footprint the platform *is* the walking surface,
 * so those samples are dropped rather than stacked on top of the deck.
 */
export function rampTreadTransforms(definition, ramp, tileSize, count = 6, thickness = 0.1) {
  const along = ramp.w >= ramp.h;
  const rise = (ramp.to || 0) - (ramp.from || 0);
  const runLength = (along ? ramp.w : ramp.h) * tileSize;
  const pitch = Math.atan2(rise, runLength);
  const step = runLength / count;
  const samples = Array.from({ length: count }, (_, index) => {
    const u = (index + 0.5) / count;
    const tileX = ramp.x + (along ? ramp.w * u : ramp.w / 2);
    const tileY = ramp.y + (along ? ramp.h / 2 : ramp.h * u);
    return { tileX, tileY, surface: arenaElevationAt(definition, tileX, tileY) };
  });
  return samples.map((sample, index) => {
    /* Local slope, not the nominal ramp slope: where an authored platform takes
       over the footprint the surface is flat, and a tread tilted anyway would
       float at one edge. Clamped so a one-sample step cannot spin a tread. */
    const before = samples[Math.max(0, index - 1)];
    const after = samples[Math.min(count - 1, index + 1)];
    const run = Math.max(step, (Math.min(count - 1, index + 1) - Math.max(0, index - 1)) * step);
    const limit = Math.abs(pitch) * 1.5;
    const localPitch = Math.max(-limit, Math.min(limit, Math.atan2(after.surface - before.surface, run)));
    return {
      position: [sample.tileX * tileSize, sample.surface + thickness / 2, sample.tileY * tileSize],
      scale: along
        ? [ramp.w * tileSize / (count + 0.6), thickness, ramp.h * tileSize * 0.86]
        : [ramp.w * tileSize * 0.86, thickness, ramp.h * tileSize / (count + 0.6)],
      pitch: localPitch,
      along,
      surface: sample.surface,
      tile: [sample.tileX, sample.tileY],
    };
  });
}

/**
 * Fit a geometry into the unit box.
 *
 * A block skin is scaled by its authored footprint, so a geometry whose local
 * radius exceeds 0.5 draws cover the collision grid does not own — an
 * octahedron at radius 0.58 overhangs the proxy on all four sides, and a torus
 * at 0.68 overhangs it by a third of a tile. Normalising here is what lets a kit
 * pick any silhouette it likes and still be footprint-exact.
 */
export function unitBounded(geometry) {
  geometry.computeBoundingBox();
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  geometry.boundingBox.getSize(size);
  geometry.boundingBox.getCenter(center);
  geometry.translate(-center.x, -center.y, -center.z);
  geometry.scale(1 / Math.max(1e-6, size.x), 1 / Math.max(1e-6, size.y), 1 / Math.max(1e-6, size.z));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

/* ------------------------------------------------------------------ *
 * Shared kit placement families
 *
 * Every arena kit composes its supporting props from the same five placement
 * rules. Keeping them here rather than in ten near-identical family functions
 * is what stops one arena from quietly drifting into placing decoration on
 * walkable ground while another does not.
 * ------------------------------------------------------------------ */

/** Collision height of whatever block covers a point, 0 on open ground. Kits
 *  read it so a landmark family can stand on the massif it belongs to instead
 *  of hard-coding a height that drifts the moment the block moves. */
function coverHeightAt(definition, tileX, tileY) {
  let height = 0;
  for (const block of definition.topology.blocks || []) {
    if (pointInZone(tileX, tileY, block)) height = Math.max(height, arenaBlockHeight(block));
  }
  return height;
}

/**
 * A deterministic ring of supporting props around the arena landmark.
 *
 * `elevation` defaults to the walking surface under the landmark rather than
 * zero, so a family around a landmark that stands on a deck does not sink into
 * it — and a kit only passes the value explicitly when it wants the ring on top
 * of the massif instead of on the floor beside it.
 */
function landmarkRing(definition, tileSize, { count, radius, radiusStep = 0, height, heightStep = 0, width, elevation, phase = 0 }) {
  const landmark = definition.topology.landmark;
  const origin = [landmark.x * tileSize, landmark.y * tileSize];
  const base = elevation ?? arenaElevationAt(definition, landmark.x, landmark.y);
  return Array.from({ length: count }, (_, index) => {
    const angle = (index + phase) / count * Math.PI * 2;
    const spread = radius + (index % 3) * radiusStep;
    const tall = height + (index % 3) * heightStep;
    return transform(
      [origin[0] + Math.cos(angle) * spread, base + tall / 2, origin[1] + Math.sin(angle) * spread],
      [width, tall, width],
      angle
    );
  });
}

/**
 * Capping props on the top face of each qualifying block. `count` above one
 * lays a run of them along the block's long axis — the difference between a
 * lid on a wall and a row of teeth on a battlement.
 */
function blockTops(definition, tileSize, { minHeight = 0, includeHero = false, lift = 0, size = 0.6, height = 0.7, count = 1 }) {
  return (definition.topology.blocks || [])
    .filter(block => (includeHero || !block.kind) && arenaBlockHeight(block) >= minHeight)
    .flatMap(block => {
      const top = arenaBlockHeight(block);
      const long = block.w >= block.h;
      const span = Math.min(block.w, block.h) * tileSize;
      return Array.from({ length: count }, (_, index) => {
        const u = (index + 0.5) / count;
        return transform(
          [
            (block.x + (long ? block.w * u : block.w / 2)) * tileSize,
            top + lift + height / 2,
            (block.y + (long ? block.h / 2 : block.h * u)) * tileSize,
          ],
          count > 1
            ? [(long ? block.w / count : block.w) * tileSize * size, height, (long ? block.h : block.h / count) * tileSize * size]
            : [span * size, height, span * size]
        );
      });
    });
}

/**
 * Low mass banked against the long sides of each block. Never rotated and
 * always inside the authored footprint, so a fillet at the base of cover can
 * never widen the cover itself.
 */
function blockSkirts(definition, tileSize, { height = 0.5, depth = 1.1, inset = 0.88 }) {
  const skirts = [];
  for (const block of definition.topology.blocks || []) {
    if (block.kind) continue;
    const long = block.w >= block.h;
    const w = block.w * tileSize;
    const h = block.h * tileSize;
    const cx = (block.x + block.w / 2) * tileSize;
    const cz = (block.y + block.h / 2) * tileSize;
    const band = Math.min(depth, (long ? block.h : block.w) * 0.4) * tileSize;
    for (const side of [-1, 1]) {
      skirts.push(long
        ? transform([cx, height / 2, cz + side * (h - band) / 2], [w * inset, height, band])
        : transform([cx + side * (w - band) / 2, height / 2, cz], [band, height, h * inset]));
    }
  }
  return skirts;
}

/** Props spaced around the perimeter of an authored zone — a void lip, a
 *  hazard boundary or a lane edge. `outward` pushes them clear of the volume. */
function zonePerimeter(value, tileSize, { perSide = 3, height = 1, width = 0.4, elevation = 0, outward = 0 }) {
  const props = [];
  const cx = (value.x + value.w / 2) * tileSize;
  const cz = (value.y + value.h / 2) * tileSize;
  const halfW = value.w * tileSize / 2 + outward;
  const halfH = value.h * tileSize / 2 + outward;
  for (let index = 0; index < perSide; index++) {
    const u = (index + 0.5) / perSide;
    const x = (value.x + value.w * u) * tileSize;
    const z = (value.y + value.h * u) * tileSize;
    const y = elevation + height / 2;
    props.push(transform([x, y, cz - halfH], [width, height, width], 0));
    props.push(transform([x, y, cz + halfH], [width, height, width], Math.PI / 4));
    props.push(transform([cx - halfW, y, z], [width, height, width], Math.PI / 6));
    props.push(transform([cx + halfW, y, z], [width, height, width], Math.PI / 3));
  }
  return props;
}

/**
 * Overhead dressing above the playable footprint. `minY` is deliberately kept
 * well above shot height, so this family reads as scale and ceiling depth and
 * can never be mistaken for cover.
 */
function overheadField(definition, tileSize, { count = 8, minY = 7, maxY = 10, size = 1.2, seed = "overhead" }) {
  const bounds = playableBounds(definition, tileSize);
  const random = createSeededRandom(seed.length * 613 + count * 17);
  return Array.from({ length: count }, () => {
    const scale = size * (0.7 + random() * 0.7);
    return transform(
      [bounds.minX + random() * (bounds.maxX - bounds.minX), minY + random() * (maxY - minY), bounds.minZ + random() * (bounds.maxZ - bounds.minZ)],
      [scale, scale * (0.6 + random() * 0.8), scale],
      random() * Math.PI
    );
  });
}

/* ------------------------------------------------------------------ *
 * Content-pass build context
 * ------------------------------------------------------------------ */

function contentMaterials(theme, kit) {
  const id = kit.id;
  const hard = proceduralSurfaceSet(theme.wall, theme.secondaryHex, `${id}:content-hard`, kit.surfaces.hard);
  const deck = proceduralSurfaceSet(theme.floorTint, theme.accentHex, `${id}:content-deck`, kit.surfaces.deck);
  const ground = proceduralSurfaceSet(theme.outer, theme.accentHex, `${id}:content-ground`, kit.surfaces.ground);
  return {
    /* Structural cover and anchors: the 60% mass. */
    hard: new THREE.MeshPhysicalMaterial({
      color: 0xffffff, metalness: kit.metalness ?? 0.52, roughness: kit.roughness ?? 0.54,
      clearcoat: 0.12, clearcoatRoughness: 0.56, emissive: theme.wallEmissive, emissiveIntensity: 0.06,
      ...hard, normalScale: new THREE.Vector2(0.44, 0.44),
    }),
    /* Walkable decks and treads: the 30% describing routes. */
    deck: new THREE.MeshStandardMaterial({
      color: 0xffffff, metalness: kit.deckMetalness ?? 0.24, roughness: kit.deckRoughness ?? 0.68,
      emissive: theme.wallEmissive, emissiveIntensity: 0.04,
      ...deck, normalScale: new THREE.Vector2(0.5, 0.5),
    }),
    /* Atmosphere and non-colliding mass: deliberately matte and unlit-looking. */
    ground: new THREE.MeshStandardMaterial({
      color: 0xffffff, metalness: 0.08, roughness: 0.9,
      emissive: theme.wallEmissive, emissiveIntensity: 0.025,
      ...ground, normalScale: new THREE.Vector2(0.62, 0.62),
    }),
    /* Wet/reflective family: restrained specular, no transmission pass. */
    wet: new THREE.MeshPhysicalMaterial({
      color: kit.wetColor ?? theme.floorTint, metalness: 0.1, roughness: kit.wetRoughness ?? 0.16,
      clearcoat: 0.86, clearcoatRoughness: 0.12, emissive: theme.wallEmissive, emissiveIntensity: 0.03,
    }),
    /* The 10%: reserved for heat, hazard state, direction and objectives. */
    accent: new THREE.MeshBasicMaterial({ color: theme.accentHex, transparent: true, opacity: 0.74, depthWrite: false }),
    cool: new THREE.MeshBasicMaterial({ color: theme.secondaryHex, transparent: true, opacity: 0.6, depthWrite: false }),
    energy: new THREE.MeshPhysicalMaterial({
      color: theme.secondaryHex, metalness: 0.16, roughness: 0.2, clearcoat: 0.7,
      emissive: theme.accentHex, emissiveIntensity: 1.35, transparent: true, opacity: 0.9,
    }),
  };
}

function createPassContext(definition, theme, tileSize, kit) {
  const root = new THREE.Group();
  root.name = `arena-content-${kit.id}`;
  root.userData.contentPassId = kit.id;
  root.userData.assetPipeline = kit.pipeline;
  root.userData.strategyIdentity = kit.identity;
  return {
    definition, theme, tileSize, kit,
    root,
    materials: contentMaterials(theme, kit),
    animations: [],
    bindings: { hazards: [], interactables: [] },
    families: [],
    geometries: [],
  };
}

function addFamily(ctx, name, geometry, material, transforms, navigationClass) {
  if (!transforms.length) return null;
  const mesh = new THREE.InstancedMesh(geometry, material, transforms.length);
  mesh.name = name;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.contentFamily = name;
  if (navigationClass) mesh.userData.navigationClass = navigationClass;
  transforms.forEach((entry, index) => setInstance(mesh, index, entry));
  mesh.instanceMatrix.needsUpdate = true;
  mesh.computeBoundingSphere();
  ctx.root.add(mesh);
  ctx.families.push({ name, instances: transforms.length });
  return mesh;
}

/* ------------------------------------------------------------------ *
 * Shared layers
 * ------------------------------------------------------------------ */

function layerAtmosphere(ctx) {
  const { kit, definition, tileSize, materials } = ctx;
  const spec = kit.atmosphere;
  for (const family of spec.families) {
    const transforms = atmosphereTransforms(definition, tileSize, { ...spec, ...family, seed: `${kit.id}:${family.name}` });
    addFamily(ctx, `atmosphere-${family.name}`, family.geometry(), materials[family.material || "ground"], transforms, "non-colliding-atmosphere");
  }
}

/**
 * Block skins split by authored collision height: tall anchors read as
 * deliberate ranged holds, low pieces read as close-quarters cover. Both stay
 * inside the authored footprint so the skin can never imply cover the collision
 * grid does not have.
 */
function layerBlockSkins(ctx) {
  const { kit, definition, tileSize, materials } = ctx;
  const blocks = definition.topology.blocks || [];
  const anchors = [];
  const low = [];
  const hero = [];
  for (const block of blocks) {
    const height = arenaBlockHeight(block);
    const target = block.kind ? hero : height >= kit.anchorHeight ? anchors : low;
    target.push(blockSkinTransform(block, tileSize, block.kind ? kit.heroInset : kit.skinInset));
  }
  /* Normalised on the way in: a kit declares a silhouette, and the footprint
     stays exact no matter which primitive family it reached for. */
  addFamily(ctx, "block-skin-hero", unitBounded(kit.blockGeometry.hero()), materials.hard, hero, "solid-cover-skin");
  addFamily(ctx, "block-skin-anchor", unitBounded(kit.blockGeometry.anchor()), materials.hard, anchors, "solid-cover-skin");
  addFamily(ctx, "block-skin-low", unitBounded(kit.blockGeometry.low()), materials.hard, low, "solid-cover-skin");

  /* Cap band: a shape cue on the exact collision top edge, never a protrusion. */
  const caps = blocks.map(block => {
    const height = arenaBlockHeight(block);
    return transform(
      [(block.x + block.w / 2) * tileSize, height - 0.06, (block.y + block.h / 2) * tileSize],
      [block.w * tileSize * kit.skinInset * 0.98, 0.12, block.h * tileSize * kit.skinInset * 0.98]
    );
  });
  addFamily(ctx, "block-cover-cap-bands", new THREE.BoxGeometry(1, 1, 1), materials.deck, caps, "cover-height-cue");
  ctx.blockSkinCount = blocks.length;
}

function layerPlatformsAndRamps(ctx) {
  const { definition, tileSize, materials, kit } = ctx;
  const platforms = definition.topology.platforms || [];
  const decks = platforms.map(platform => transform(
    [(platform.x + platform.w / 2) * tileSize, (platform.elevation || 0) + 0.07, (platform.y + platform.h / 2) * tileSize],
    [platform.w * tileSize * 0.97, 0.14, platform.h * tileSize * 0.97]
  ));
  addFamily(ctx, "platform-deck-modules", new THREE.BoxGeometry(1, 1, 1), materials.deck, decks, "elevated-hold");

  /* Edge stanchions mark the drop without reading as chest-high cover: they stop
     well below shot height, so nothing implies collision the grid does not own. */
  const stanchionHeight = 0.42;
  const stanchions = platforms.flatMap(platform => {
    const elevation = platform.elevation || 0;
    const steps = [];
    const along = Math.max(2, Math.round(platform.w));
    for (let index = 0; index < along; index++) {
      const u = (index + 0.5) / along;
      const x = (platform.x + platform.w * u) * tileSize;
      for (const z of [platform.y * tileSize + 0.16, (platform.y + platform.h) * tileSize - 0.16]) {
        steps.push(transform([x, elevation + stanchionHeight / 2, z], [0.13, stanchionHeight, 0.13]));
      }
    }
    return steps;
  });
  const posts = addFamily(ctx, "platform-edge-stanchions", new THREE.CylinderGeometry(1, 1, 1, 6), materials.hard, stanchions, "edge-marker-no-cover");
  if (posts) posts.userData.maxHeightAboveDeck = stanchionHeight;

  const treads = [];
  const rails = [];
  const spans = [];
  for (const ramp of definition.topology.ramps || []) {
    const start = treads.length;
    for (const tread of rampTreadTransforms(ctx.definition, ramp, tileSize, kit.rampTreads)) {
      treads.push(tread);
      rails.push({
        position: [tread.position[0], tread.position[1] + 0.09, tread.position[2]],
        scale: [tread.scale[0] * 0.32, 0.05, tread.scale[2] * 0.9],
        rotation: 0,
      });
    }
    spans.push([start, treads.length - start]);
  }
  const treadMesh = addFamilyWithPitch(ctx, "ramp-tread-modules", new THREE.BoxGeometry(1, 1, 1), materials.deck, treads, "vertical-route");
  if (treadMesh) treadMesh.userData.rampTreadSpans = spans;
  addFamilyWithPitch(ctx, "ramp-tread-grip-strips", new THREE.BoxGeometry(1, 1, 1), materials.accent, rails.map((rail, index) => ({ ...rail, pitch: treads[index]?.pitch || 0, along: treads[index]?.along })), "vertical-route");
}

/** Ramp pieces need the slope baked in, so they get their own matrix builder. */
function addFamilyWithPitch(ctx, name, geometry, material, entries, navigationClass) {
  if (!entries.length) return null;
  const mesh = new THREE.InstancedMesh(geometry, material, entries.length);
  mesh.name = name;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.contentFamily = name;
  if (navigationClass) mesh.userData.navigationClass = navigationClass;
  entries.forEach((entry, index) => {
    /* Rz(+p) raises the +X end; Rx(-p) raises the +Z end. Getting these two
       signs backwards is what makes a "ramp" slab tilt away from its slope. */
    const euler = entry.along === false
      ? new THREE.Euler(-(entry.pitch || 0), 0, 0)
      : new THREE.Euler(0, 0, entry.pitch || 0);
    const matrix = new THREE.Matrix4().compose(
      new THREE.Vector3(...entry.position),
      new THREE.Quaternion().setFromEuler(euler),
      new THREE.Vector3(...entry.scale)
    );
    mesh.setMatrixAt(index, matrix);
  });
  mesh.instanceMatrix.needsUpdate = true;
  mesh.computeBoundingSphere();
  ctx.root.add(mesh);
  ctx.families.push({ name, instances: entries.length });
  return mesh;
}

/**
 * Skirting and shape-coded route markers. Walkable deck, hazard boundary and
 * objective approach each get a distinct silhouette, so the read survives
 * without colour.
 */
function layerSkirtingAndDecals(ctx) {
  const { definition, tileSize, materials, kit } = ctx;
  const skirts = [];
  for (const zone of definition.topology.floorZones || []) {
    const w = zone.w * tileSize;
    const h = zone.h * tileSize;
    const cx = (zone.x + zone.w / 2) * tileSize;
    const cz = (zone.y + zone.h / 2) * tileSize;
    for (const [x, z, sx, sz] of [[cx, cz - h / 2, w, 0.3], [cx, cz + h / 2, w, 0.3], [cx - w / 2, cz, 0.3, h], [cx + w / 2, cz, 0.3, h]]) {
      skirts.push(transform([x, 0.11, z], [sx, 0.22, sz]));
    }
  }
  addFamily(ctx, "deck-edge-skirting", new THREE.BoxGeometry(1, 1, 1), materials.hard, skirts, "walkable-deck-edge");

  /* Objective approach markers: a chevron shape, one per site corner.
     Several sites are authored across a corner pit, so a corner that lands in a
     void is dropped rather than left hanging over the drop — a marker has to
     point at ground a player can actually plant on. */
  const blocked = (tileX, tileY) => (definition.topology.voids || []).some(value => pointInZone(tileX, tileY, value));
  const markers = definition.combat.sites.flatMap(site => {
    const cx = (site.x + site.w / 2) * tileSize;
    const cz = (site.y + site.h / 2) * tileSize;
    return [0, 1, 2, 3].map(corner => transform(
      [cx + (corner % 2 ? 1 : -1) * site.w * tileSize * 0.42, 0.2, cz + (corner < 2 ? -1 : 1) * site.h * tileSize * 0.42],
      [0.34, 0.4, 0.34],
      corner * Math.PI / 2
    )).filter(marker => !blocked(marker.position[0] / tileSize, marker.position[2] / tileSize));
  });
  addFamily(ctx, "objective-approach-markers", new THREE.ConeGeometry(1, 1, kit.markerSides || 4), materials.accent, markers, "objective-approach");
}

/* ------------------------------------------------------------------ *
 * Hazard visual bindings
 * ------------------------------------------------------------------ */

const PHASE_STYLE = Object.freeze({
  /* Cold and small: unmistakably inactive. */
  idle: { color: 0x22303f, scale: 0.55 },
  /* Amber ramp with a countable beat. */
  telegraph: { color: 0xffa42b, scale: 1.3 },
  /* Hot and large, matching the red the hazard plane switches to. */
  active: { color: 0xff3b1f, scale: 1.95 },
  /* Dim ember: spent, never armed. */
  cooldown: { color: 0x5a3a2c, scale: 0.72 },
});

/**
 * Physical emitters at every hazard boundary plus a single instanced lamp bank
 * that carries per-hazard colour. The bindings are keyed by the authored hazard
 * id and are applied from the arena simulation tick, so the lamp, the plane, the
 * rim, the fog volume and the UI warning always describe the same frame.
 */
function layerHazardVisuals(ctx) {
  const { definition, tileSize, materials, kit } = ctx;
  const hazards = (definition.hazards || []).filter(hazard => kit.hazardTypes.includes(hazard.type));
  if (!hazards.length) return;

  /* One emitter stack per hazard corner, each capped by a state lamp. Putting a
     lamp on every boundary post means the phase is readable from inside the
     volume and from every approach lane, not only from the centre. */
  const emitters = [];
  const lampSlots = [];
  for (const hazard of hazards) {
    const corners = kit.hazardEmitterCorners(hazard);
    const slots = [];
    for (const [x, y] of corners) {
      emitters.push(transform([x * tileSize, kit.emitterHeight / 2, y * tileSize], [kit.emitterRadius, kit.emitterHeight, kit.emitterRadius]));
      slots.push([x * tileSize, kit.emitterHeight + kit.lampRadius * 1.6, y * tileSize]);
    }
    lampSlots.push(slots);
  }
  addFamily(ctx, "hazard-emitter-stacks", new THREE.CylinderGeometry(0.5, 0.62, 1, 8), materials.hard, emitters, "hazard-boundary");

  const positions = lampSlots.flat();
  const lamps = new THREE.InstancedMesh(
    new THREE.SphereGeometry(1, 10, 7),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95, depthWrite: false }),
    positions.length
  );
  lamps.name = "hazard-state-lamps";
  lamps.userData.contentFamily = "hazard-state-lamps";
  lamps.userData.navigationClass = "hazard-state";
  lamps.userData.hazardIds = hazards.map(hazard => hazard.id);
  lamps.userData.lampsPerHazard = lampSlots.map(slots => slots.length);
  lamps.frustumCulled = false;
  ctx.root.add(lamps);
  ctx.families.push({ name: "hazard-state-lamps", instances: positions.length });

  let cursor = 0;
  hazards.forEach((hazard, index) => {
    const slots = lampSlots[index];
    const base = cursor;
    cursor += slots.length;
    const write = (phase, progress) => {
      const style = PHASE_STYLE[phase] || PHASE_STYLE.idle;
      /* Telegraph reads as a cadence, not a fade: the ramp restarts every beat
         so a player can count the pre-activation window. */
      const beat = phase === "telegraph" ? 0.5 + 0.5 * Math.abs(Math.sin(clamp01(progress) * Math.PI * 3)) : 1;
      const radius = kit.lampRadius * style.scale * beat;
      const color = new THREE.Color(style.color);
      slots.forEach((position, slot) => {
        setInstance(lamps, base + slot, transform(position, [radius, radius, radius]));
        lamps.setColorAt(base + slot, color);
      });
      lamps.instanceMatrix.needsUpdate = true;
      if (lamps.instanceColor) lamps.instanceColor.needsUpdate = true;
    };
    write("idle", 0);
    ctx.bindings.hazards.push({
      id: hazard.id,
      kind: `${hazard.type}-state-lamp`,
      phase: "idle",
      lampRange: [base, slots.length],
      apply(phase, progress) { this.phase = phase; write(phase, progress); },
      reset() { this.phase = "idle"; write("idle", 0); },
    });
  });
}

/* ------------------------------------------------------------------ *
 * Interactable visual bindings
 * ------------------------------------------------------------------ */

const FLOW_VERTEX = `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

/* One shared strip shader carries the direction. `uDirection` is +1/-1 taken
   from the authored interactable vector, never from an array index, so opposed
   lanes visibly move in opposite directions. */
const FLOW_FRAGMENT = `
uniform float uTime; uniform float uDirection; uniform float uStrength;
uniform vec3 uColor; uniform vec3 uEdge; uniform float uOpacity;
varying vec2 vUv;
void main(){
  float travel = vUv.x * 6.0 - uTime * uDirection * uStrength;
  float chevron = abs(fract(travel) - 0.5) * 2.0;
  float band = smoothstep(0.62, 0.06, chevron);
  float rail = smoothstep(0.5, 0.34, abs(vUv.y - 0.5));
  vec3 color = mix(uEdge, uColor, band);
  gl_FragColor = vec4(color, uOpacity * (0.24 + band * 0.72) * rail);
}`;

/**
 * The travelling-chevron strip shared by every directional lane. The strip is
 * named after the authored type, so a conveyor and an ice slide are separable
 * in the scene graph even though they read from the same shader.
 */
function flowStrip(ctx, value, { opacity = 0.78, strengthScale = 42, color = "accentHex", edge = "secondaryHex" } = {}) {
  const { tileSize, theme } = ctx;
  const along = Math.abs(value.vector[0]) >= Math.abs(value.vector[1]);
  const sign = Math.sign(along ? value.vector[0] : value.vector[1]) || 1;
  const width = value.w * tileSize;
  const depth = value.h * tileSize;
  const uniforms = {
    uTime: { value: 0 },
    uDirection: { value: sign },
    uStrength: { value: Math.max(0.25, (value.strength || 20) / strengthScale) },
    uColor: { value: new THREE.Color(theme[color]) },
    uEdge: { value: new THREE.Color(theme[edge]) },
    uOpacity: { value: opacity },
  };
  const strip = new THREE.Mesh(
    new THREE.PlaneGeometry(along ? width : depth, along ? depth * 0.72 : width * 0.72),
    new THREE.ShaderMaterial({ uniforms, vertexShader: FLOW_VERTEX, fragmentShader: FLOW_FRAGMENT, transparent: true, depthWrite: false })
  );
  strip.name = `${value.type}-flow-${value.id}`;
  strip.rotation.x = -Math.PI / 2;
  if (!along) strip.rotation.z = Math.PI / 2;
  strip.position.set((value.x + value.w / 2) * tileSize, 0.1, (value.y + value.h / 2) * tileSize);
  strip.renderOrder = 3;
  strip.userData.interactableId = value.id;
  strip.userData.flowVector = [value.vector[0], value.vector[1]];
  strip.userData.flowSign = sign;
  strip.userData.flowAxis = along ? "x" : "z";
  ctx.root.add(strip);
  return { along, sign, uniforms };
}

/** Props laid out along a lane's direction of travel. */
function laneSteps(value, tileSize, count, build) {
  const along = Math.abs(value.vector?.[0] ?? value.w) >= Math.abs(value.vector?.[1] ?? value.h);
  return Array.from({ length: count }, (_, index) => {
    const u = (index + 0.5) / count;
    return build({
      x: (value.x + (along ? value.w * u : value.w / 2)) * tileSize,
      z: (value.y + (along ? value.h / 2 : value.h * u)) * tileSize,
      along, index, u,
    });
  });
}

function conveyorVisual(ctx, value) {
  const { tileSize, materials } = ctx;
  const { along, sign, uniforms } = flowStrip(ctx, value);

  /* Rollers are oriented across the direction of travel; they never spin as a
     whole-family substitute for per-roller movement. */
  const rollers = laneSteps(value, tileSize, 12, ({ x, z }) => transform(
    [x, 0.17, z],
    [0.16, Math.min(value.w, value.h) * tileSize * 0.44, 0.16],
    along ? Math.PI / 2 : 0
  ));
  const rollerMesh = addFamily(ctx, `conveyor-rollers-${value.id}`, new THREE.CylinderGeometry(1, 1, 1, 8), materials.hard, rollers, "timing-route");
  if (rollerMesh) rollerMesh.userData.interactableId = value.id;

  ctx.bindings.interactables.push({
    id: value.id,
    kind: "conveyor-flow",
    vector: [value.vector[0], value.vector[1]],
    direction: sign,
    apply(elapsed) { uniforms.uTime.value = elapsed; },
    reset() { uniforms.uTime.value = 0; },
  });
}

/**
 * An ice slide carries the player the same way a conveyor does, so it reuses
 * the same directional strip — but the props are grooves cut *along* travel
 * rather than rollers across it, because nothing here is driving anything.
 */
function iceSlideVisual(ctx, value) {
  const { tileSize, materials } = ctx;
  const { along, sign, uniforms } = flowStrip(ctx, value, { opacity: 0.62, strengthScale: 26, color: "secondaryHex", edge: "accentHex" });

  const grooves = laneSteps(value, tileSize, 8, ({ x, z, index }) => transform(
    [x, 0.13, z],
    along
      ? [value.w * tileSize / 9, 0.09, Math.max(0.14, value.h * tileSize * 0.1)]
      : [Math.max(0.14, value.w * tileSize * 0.1), 0.09, value.h * tileSize / 9],
    index % 2 ? 0.02 : -0.02
  ));
  const grooveMesh = addFamily(ctx, `slide-groove-cuts-${value.id}`, new THREE.BoxGeometry(1, 1, 1), materials.wet, grooves, "timing-route");
  if (grooveMesh) grooveMesh.userData.interactableId = value.id;

  /* Frost kerbs on the long edges: the slide's boundary read, kept low enough
     that a player never mistakes the lane wall for cover. */
  const kerbs = laneSteps(value, tileSize, 6, ({ x, z }) => [x, z]).flatMap(([x, z]) => {
    const halfW = value.w * tileSize / 2;
    const halfH = value.h * tileSize / 2;
    const cx = (value.x + value.w / 2) * tileSize;
    const cz = (value.y + value.h / 2) * tileSize;
    return along
      ? [transform([x, 0.19, cz - halfH], [0.3, 0.38, 0.3]), transform([x, 0.19, cz + halfH], [0.3, 0.38, 0.3])]
      : [transform([cx - halfW, 0.19, z], [0.3, 0.38, 0.3]), transform([cx + halfW, 0.19, z], [0.3, 0.38, 0.3])];
  });
  const kerbMesh = addFamily(ctx, `slide-frost-kerbs-${value.id}`, new THREE.OctahedronGeometry(0.5, 0), materials.energy, kerbs, "timing-route-edge");
  if (kerbMesh) kerbMesh.userData.interactableId = value.id;

  ctx.bindings.interactables.push({
    id: value.id,
    kind: "ice-slide-flow",
    vector: [value.vector[0], value.vector[1]],
    direction: sign,
    apply(elapsed) { uniforms.uTime.value = elapsed; },
    reset() { uniforms.uTime.value = 0; },
  });
}

const WATER_EDGE_FRAGMENT = `
uniform float uTime; uniform float uCost; uniform vec3 uColor; uniform vec3 uWarn; uniform float uOpacity;
varying vec2 vUv;
void main(){
  float pulse = 0.5 + 0.5 * sin(vUv.x * 14.0 - uTime * 1.4);
  float edge = smoothstep(0.5, 0.12, abs(vUv.y - 0.5));
  vec3 color = mix(uColor, uWarn, uCost * pulse);
  gl_FragColor = vec4(color, uOpacity * edge * (0.42 + pulse * 0.42));
}`;

/**
 * Water reads as a route boundary with a movement cost. The multiplier itself
 * stays authoritative in `arena-core`; this only makes the cost, the entry
 * points and the depth change legible.
 */
function waterVisual(ctx, value) {
  const { tileSize, materials, theme } = ctx;
  const cost = clamp01(1 - (value.movementMultiplier ?? 1));
  const uniforms = {
    uTime: { value: 0 },
    uCost: { value: Math.min(1, cost * 5) },
    uColor: { value: new THREE.Color(theme.secondaryHex) },
    uWarn: { value: new THREE.Color(theme.accentHex) },
    uOpacity: { value: 0.72 },
  };
  const w = value.w * tileSize;
  const h = value.h * tileSize;
  const cx = (value.x + value.w / 2) * tileSize;
  const cz = (value.y + value.h / 2) * tileSize;
  const boundary = new THREE.Group();
  boundary.name = `water-boundary-${value.id}`;
  boundary.userData.interactableId = value.id;
  boundary.userData.movementMultiplier = value.movementMultiplier ?? 1;
  const material = new THREE.ShaderMaterial({ uniforms, vertexShader: FLOW_VERTEX, fragmentShader: WATER_EDGE_FRAGMENT, transparent: true, depthWrite: false, side: THREE.DoubleSide });
  for (const [x, z, length, rotation] of [[cx, cz - h / 2, w, 0], [cx, cz + h / 2, w, 0], [cx - w / 2, cz, h, Math.PI / 2], [cx + w / 2, cz, h, Math.PI / 2]]) {
    const edge = new THREE.Mesh(new THREE.PlaneGeometry(length, 1.7), material);
    edge.position.set(x, 0.85, z);
    edge.rotation.y = rotation;
    boundary.add(edge);
  }
  ctx.root.add(boundary);

  /* Waterline stain: a flat band on the deck at the exact zone edge, so the
     boundary survives when the shader strips are edge-on to the camera. */
  const stains = [];
  for (const [x, z, sx, sz] of [[cx, cz - h / 2, w, 0.5], [cx, cz + h / 2, w, 0.5], [cx - w / 2, cz, 0.5, h], [cx + w / 2, cz, 0.5, h]]) {
    stains.push(transform([x, 0.14, z], [sx, 0.06, sz]));
  }
  const stainMesh = addFamily(ctx, `waterline-stains-${value.id}`, new THREE.BoxGeometry(1, 1, 1), materials.cool, stains, "flooded-route-boundary");
  if (stainMesh) stainMesh.userData.interactableId = value.id;

  /* Depth gauges: taller in the middle of the route, shorter at the edges, so
     the shape alone says "this is deeper and slower the further you commit". */
  const stakes = [];
  const columns = Math.max(3, Math.round(value.w / 1.6));
  const rows = Math.max(3, Math.round(value.h / 1.6));
  for (let column = 0; column < columns; column++) {
    for (let row = 0; row < rows; row++) {
      const u = (column + 0.5) / columns;
      const v = (row + 0.5) / rows;
      const x = (value.x + u * value.w) * tileSize;
      const z = (value.y + v * value.h) * tileSize;
      const depth = Math.min(1 - Math.abs(u - 0.5) * 2, 1 - Math.abs(v - 0.5) * 2);
      const height = 0.42 + depth * 0.9;
      stakes.push(transform([x, height / 2, z], [0.11, height, 0.11]));
    }
  }
  const stakeMesh = addFamily(ctx, `water-depth-gauges-${value.id}`, new THREE.CylinderGeometry(0.5, 0.5, 1, 5), materials.wet, stakes, "flooded-slow-route");
  if (stakeMesh) stakeMesh.userData.interactableId = value.id;

  /* Entry and exit markers on the mid-point of each edge: where the route can
     actually be joined without swimming the full length. */
  const gates = [[cx, cz - h / 2], [cx, cz + h / 2], [cx - w / 2, cz], [cx + w / 2, cz]]
    .map(([x, z], index) => transform([x, 0.62, z], [0.5, 1.24, 0.5], index * Math.PI / 4));
  const gateMesh = addFamily(ctx, `water-entry-markers-${value.id}`, new THREE.ConeGeometry(0.5, 1, 4), materials.energy, gates, "flooded-route-entry");
  if (gateMesh) gateMesh.userData.interactableId = value.id;

  ctx.bindings.interactables.push({
    id: value.id,
    kind: "water-route",
    movementMultiplier: value.movementMultiplier ?? 1,
    apply(elapsed) { uniforms.uTime.value = elapsed; },
    reset() { uniforms.uTime.value = 0; },
  });
}

/* A covered route has no direction and no timing — its whole value is that you
   cannot be seen crossing it. The sweep says "corridor", the rails say "this is
   where the cover starts and stops". */
const CANOPY_FRAGMENT = `
uniform float uTime; uniform vec3 uColor; uniform vec3 uEdge; uniform float uOpacity; uniform float uGain;
varying vec2 vUv;
void main(){
  float sweep = 0.5 + 0.5 * sin(vUv.x * 3.0 - uTime * 0.8);
  float rail = smoothstep(0.5, 0.3, abs(vUv.y - 0.5));
  float lip = smoothstep(0.4, 0.5, abs(vUv.y - 0.5));
  vec3 color = mix(uColor, uEdge, sweep * uGain);
  gl_FragColor = vec4(color, uOpacity * (rail * (0.18 + sweep * 0.26) + lip * 0.52));
}`;

/* One radial field shader for both of the untimed area volumes. `uRings`
   separates them: a recovery field breathes once, reactive flora fires three
   expanding fronts, so the two never read as the same thing. */
const FIELD_FRAGMENT = `
uniform float uTime; uniform vec3 uColor; uniform vec3 uEdge; uniform float uOpacity;
uniform float uRings; uniform float uRate;
varying vec2 vUv;
void main(){
  float radius = length(vUv - 0.5) * 2.0;
  float front = fract(radius * uRings - uTime * uRate);
  float ring = smoothstep(0.22, 0.0, front) * smoothstep(1.05, 0.35, radius);
  float disc = smoothstep(1.0, 0.2, radius);
  vec3 color = mix(uColor, uEdge, ring);
  gl_FragColor = vec4(color, uOpacity * (disc * 0.2 + ring * 0.66));
}`;

/**
 * Covered route: overhead ribs plus a lit floor corridor. Nothing here touches
 * shot height, because the route's value is concealment rather than cover — a
 * player has to be able to read "I am hidden crossing this" without also
 * reading "I can hold an angle from behind this".
 */
function coveredRouteVisual(ctx, value) {
  const { tileSize, materials, theme } = ctx;
  const along = value.w >= value.h;
  const uniforms = {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(theme.secondaryHex) },
    uEdge: { value: new THREE.Color(theme.accentHex) },
    uOpacity: { value: 0.6 },
    uGain: { value: clamp01(((value.movementMultiplier ?? 1) - 1) * 12) },
  };
  const corridor = new THREE.Mesh(
    new THREE.PlaneGeometry(along ? value.w * tileSize : value.h * tileSize, along ? value.h * tileSize * 0.9 : value.w * tileSize * 0.9),
    new THREE.ShaderMaterial({ uniforms, vertexShader: FLOW_VERTEX, fragmentShader: CANOPY_FRAGMENT, transparent: true, depthWrite: false })
  );
  corridor.name = `covered-route-${value.id}`;
  corridor.rotation.x = -Math.PI / 2;
  if (!along) corridor.rotation.z = Math.PI / 2;
  corridor.position.set((value.x + value.w / 2) * tileSize, 0.09, (value.y + value.h / 2) * tileSize);
  corridor.renderOrder = 3;
  corridor.userData.interactableId = value.id;
  corridor.userData.movementMultiplier = value.movementMultiplier ?? 1;
  ctx.root.add(corridor);

  /* Ribs span the short axis at head-clearance height. Capped at eight so a
     sixteen-tile trench costs the same as a five-tile one. */
  const span = Math.min(8, Math.max(4, Math.round(along ? value.w / 2 : value.h / 2)));
  const ribs = laneSteps({ ...value, vector: along ? [1, 0] : [0, 1] }, tileSize, span, ({ x, z }) => transform(
    [x, 3.3, z],
    along ? [0.34, 0.3, value.h * tileSize * 1.02] : [value.w * tileSize * 1.02, 0.3, 0.34]
  ));
  const ribMesh = addFamily(ctx, `covered-route-ribs-${value.id}`, new THREE.BoxGeometry(1, 1, 1), materials.hard, ribs, "overhead-non-interactive");
  if (ribMesh) ribMesh.userData.interactableId = value.id;

  /* Mouth markers on the two open ends: where the concealment starts. */
  const halfW = value.w * tileSize / 2;
  const halfH = value.h * tileSize / 2;
  const cx = (value.x + value.w / 2) * tileSize;
  const cz = (value.y + value.h / 2) * tileSize;
  const mouths = (along ? [[cx - halfW, cz], [cx + halfW, cz]] : [[cx, cz - halfH], [cx, cz + halfH]])
    .map(([x, z], index) => transform([x, 0.24, z], [0.44, 0.48, 0.44], index * Math.PI / 3));
  const mouthMesh = addFamily(ctx, `covered-route-mouths-${value.id}`, new THREE.ConeGeometry(0.5, 1, 5), materials.energy, mouths, "covered-route-entry");
  if (mouthMesh) mouthMesh.userData.interactableId = value.id;

  ctx.bindings.interactables.push({
    id: value.id,
    kind: "covered-route",
    movementMultiplier: value.movementMultiplier ?? 1,
    apply(elapsed) { uniforms.uTime.value = elapsed; },
    reset() { uniforms.uTime.value = 0; },
  });
}

/** Shared builder for the two untimed radial volumes. */
function fieldVolumeVisual(ctx, value, { kind, rings, rate, opacity, color, edge, postHeight, postGeometry, postMaterial, postClass }) {
  const { tileSize, materials, theme } = ctx;
  const uniforms = {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(theme[color]) },
    uEdge: { value: new THREE.Color(theme[edge]) },
    uOpacity: { value: opacity },
    uRings: { value: rings },
    uRate: { value: rate },
  };
  const field = new THREE.Mesh(
    new THREE.PlaneGeometry(value.w * tileSize, value.h * tileSize),
    new THREE.ShaderMaterial({ uniforms, vertexShader: FLOW_VERTEX, fragmentShader: FIELD_FRAGMENT, transparent: true, depthWrite: false })
  );
  field.name = `${kind}-${value.id}`;
  field.rotation.x = -Math.PI / 2;
  field.position.set((value.x + value.w / 2) * tileSize, 0.08, (value.y + value.h / 2) * tileSize);
  field.renderOrder = 3;
  field.userData.interactableId = value.id;
  ctx.root.add(field);

  /* Emitters stay under half a metre: the volume has to be readable from
     inside it without the emitters becoming a cover ring around it. */
  const posts = zonePerimeter(value, tileSize, { perSide: 2, height: postHeight, width: 0.34 });
  const postMesh = addFamily(ctx, `${kind}-emitters-${value.id}`, postGeometry(), materials[postMaterial], posts, postClass);
  if (postMesh) postMesh.userData.interactableId = value.id;

  ctx.bindings.interactables.push({
    id: value.id,
    kind,
    apply(elapsed) { uniforms.uTime.value = elapsed; },
    reset() { uniforms.uTime.value = 0; },
  });
}

/** Recovery field: one slow inward breath, cool, unmistakably friendly. */
function recoveryFieldVisual(ctx, value) {
  fieldVolumeVisual(ctx, value, {
    kind: "recovery-field", rings: 1, rate: 0.45, opacity: 0.58,
    color: "secondaryHex", edge: "accentHex",
    postHeight: 0.46, postGeometry: () => new THREE.CylinderGeometry(0.5, 0.62, 1, 6),
    postMaterial: "energy", postClass: "recovery-volume",
  });
}

/** Reactive flora: three outward fronts, fast, unmistakably a warning. */
function proximityPulseVisual(ctx, value) {
  fieldVolumeVisual(ctx, value, {
    kind: "proximity-pulse", rings: 3, rate: 1.1, opacity: 0.5,
    color: "accentHex", edge: "secondaryHex",
    postHeight: 0.42, postGeometry: () => new THREE.IcosahedronGeometry(0.5, 0),
    postMaterial: "energy", postClass: "reactive-volume",
  });
}

/**
 * Barrier state for one instant.
 *
 * Exported because the runtime opens and closes real collision cells on this
 * schedule. The gate frame reads the same function, so the lamp above a gate
 * can never say "open" in a frame where the grid says "closed".
 */
export function phaseBarrierStateAt(value, elapsed) {
  const telegraph = value?.telegraph || 0;
  const active = value?.active || 0;
  const cycle = telegraph + active + (value?.cooldown || 0);
  if (!(cycle > 0)) return "open";
  const t = (((elapsed || 0) + (value.offset || 0)) % cycle + cycle) % cycle;
  if (t < telegraph) return "telegraph";
  return t < telegraph + active ? "closed" : "open";
}

const BARRIER_STYLE = Object.freeze({
  open: { color: 0x22303f, scale: 0.6 },
  telegraph: { color: 0xffa42b, scale: 1.25 },
  closed: { color: 0xff3b1f, scale: 1.85 },
});

/**
 * Phase barrier: the runtime already draws the barrier plane and owns the
 * collision. What was missing is the thing that makes it a *gate* — a frame you
 * can recognise from down the nave, with a lamp on each pillar.
 */
function phaseBarrierVisual(ctx, value) {
  const { tileSize, materials } = ctx;
  const along = value.w >= value.h;
  const cx = (value.x + value.w / 2) * tileSize;
  const cz = (value.y + value.h / 2) * tileSize;
  const halfW = value.w * tileSize / 2;
  const halfH = value.h * tileSize / 2;
  const height = 3.9;
  const jambs = along ? [[cx - halfW, cz], [cx + halfW, cz]] : [[cx, cz - halfH], [cx, cz + halfH]];

  const pillars = jambs.map(([x, z]) => transform([x, height / 2, z], [0.42, height, 0.42]));
  const pillarMesh = addFamily(ctx, `phase-gate-jambs-${value.id}`, new THREE.CylinderGeometry(0.5, 0.56, 1, 6), materials.hard, pillars, "gate-frame");
  if (pillarMesh) pillarMesh.userData.interactableId = value.id;

  const lintel = [transform([cx, height + 0.18, cz], along ? [value.w * tileSize + 0.6, 0.36, 0.5] : [0.5, 0.36, value.h * tileSize + 0.6])];
  const lintelMesh = addFamily(ctx, `phase-gate-lintel-${value.id}`, new THREE.BoxGeometry(1, 1, 1), materials.hard, lintel, "gate-frame");
  if (lintelMesh) lintelMesh.userData.interactableId = value.id;

  const lamps = new THREE.InstancedMesh(
    new THREE.SphereGeometry(1, 10, 7),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95, depthWrite: false }),
    jambs.length
  );
  lamps.name = `phase-gate-lamps-${value.id}`;
  lamps.userData.contentFamily = `phase-gate-lamps-${value.id}`;
  lamps.userData.navigationClass = "gate-state";
  lamps.userData.interactableId = value.id;
  lamps.frustumCulled = false;
  ctx.root.add(lamps);
  ctx.families.push({ name: `phase-gate-lamps-${value.id}`, instances: jambs.length });

  const write = state => {
    const style = BARRIER_STYLE[state] || BARRIER_STYLE.open;
    const radius = 0.34 * style.scale;
    const color = new THREE.Color(style.color);
    jambs.forEach(([x, z], slot) => {
      setInstance(lamps, slot, transform([x, height + 0.62, z], [radius, radius, radius]));
      lamps.setColorAt(slot, color);
    });
    lamps.instanceMatrix.needsUpdate = true;
    if (lamps.instanceColor) lamps.instanceColor.needsUpdate = true;
  };
  write("open");

  ctx.bindings.interactables.push({
    id: value.id,
    kind: "phase-gate-frame",
    state: "open",
    apply(elapsed) { this.state = phaseBarrierStateAt(value, elapsed); write(this.state); },
    reset() { this.state = "open"; write("open"); },
  });
}

const INTERACTABLE_VISUALS = Object.freeze({
  conveyor: conveyorVisual,
  water: waterVisual,
  "ice-slide": iceSlideVisual,
  "covered-route": coveredRouteVisual,
  "recovery-field": recoveryFieldVisual,
  "proximity-pulse": proximityPulseVisual,
  "phase-barrier": phaseBarrierVisual,
});

function layerInteractableVisuals(ctx) {
  for (const value of ctx.definition.interactables || []) {
    INTERACTABLE_VISUALS[value.type]?.(ctx, value);
  }
}

/* ------------------------------------------------------------------ *
 * Arena kits
 * ------------------------------------------------------------------ */

const boxGeometry = () => new THREE.BoxGeometry(1, 1, 1);

/** Neon Foundry: industrial mass, gantry decks, heat-facing accents. */
function forgeFamilies(ctx) {
  const { definition, tileSize, materials } = ctx;
  const landmark = definition.topology.landmark;
  const origin = [landmark.x * tileSize, landmark.y * tileSize];

  /* Furnace support family: coolant drums ringing the hero, never over it. */
  const drums = Array.from({ length: 10 }, (_, index) => {
    const angle = index / 10 * Math.PI * 2;
    const radius = 7.4 + (index % 3) * 0.8;
    return transform([origin[0] + Math.cos(angle) * radius, 0.72, origin[1] + Math.sin(angle) * radius], [0.62, 1.44, 0.62], angle);
  });
  addFamily(ctx, "furnace-coolant-drums", new THREE.CylinderGeometry(1, 1.06, 1, 8), materials.hard, drums, "landmark-family");

  /* Refinery cowls on the tall anchors: extra silhouette for rifle holds. */
  const cowls = (definition.topology.blocks || [])
    .filter(block => !block.kind && arenaBlockHeight(block) >= 3)
    .map(block => transform(
      [(block.x + block.w / 2) * tileSize, arenaBlockHeight(block) + 0.34, (block.y + block.h / 2) * tileSize],
      [Math.min(block.w, block.h) * tileSize * 0.62, 0.68, Math.min(block.w, block.h) * tileSize * 0.62]
    ));
  addFamily(ctx, "refinery-vent-cowls", new THREE.CylinderGeometry(0.36, 0.5, 1, 7), materials.hard, cowls, "cover-top-detail");
}

/** Sunken Archive: drowned stacks, reliquary walls, sanctum machinery. */
function abyssFamilies(ctx) {
  const { definition, tileSize, materials } = ctx;
  const landmark = definition.topology.landmark;
  const origin = [landmark.x * tileSize, landmark.y * tileSize];
  const platform = (definition.topology.platforms || [])[0];

  /* Memory conduits: the sanctum's supporting family, kept below hero height. */
  const conduits = Array.from({ length: 12 }, (_, index) => {
    const angle = index / 12 * Math.PI * 2;
    const radius = 8.2 + (index % 4) * 0.7;
    const height = 1.5 + (index % 3) * 0.55;
    return transform(
      [origin[0] + Math.cos(angle) * radius, (platform?.elevation || 0) + height / 2, origin[1] + Math.sin(angle) * radius],
      [0.34, height, 0.34],
      angle
    );
  });
  addFamily(ctx, "sanctum-memory-conduits", new THREE.CylinderGeometry(1, 1.14, 1, 6), materials.hard, conduits, "landmark-family");

  /* Reliquary nodes: low emissive markers reading as archive index points. */
  const nodes = Array.from({ length: 8 }, (_, index) => {
    const angle = (index + 0.5) / 8 * Math.PI * 2;
    const radius = 6.1;
    return transform(
      [origin[0] + Math.cos(angle) * radius, (platform?.elevation || 0) + 0.42, origin[1] + Math.sin(angle) * radius],
      [0.3, 0.42, 0.3],
      angle
    );
  });
  addFamily(ctx, "sanctum-reliquary-nodes", new THREE.OctahedronGeometry(1, 0), materials.energy, nodes, "landmark-family");

  /* Suspended archive cages: overhead, non-interactive, clear of shot height. */
  const cages = Array.from({ length: 6 }, (_, index) => {
    const angle = index / 6 * Math.PI * 2 + 0.4;
    const radius = 11 + (index % 2) * 2.4;
    return transform([origin[0] + Math.cos(angle) * radius, 7.4 + (index % 3) * 0.7, origin[1] + Math.sin(angle) * radius], [1.1, 1.5, 1.1], angle);
  });
  addFamily(ctx, "suspended-archive-cages", new THREE.BoxGeometry(1, 1, 1), materials.hard, cages, "overhead-non-interactive");

  /* Broken index rings: the archive's identity motif, laid flat over the deck. */
  const rings = Array.from({ length: 4 }, (_, index) => transform(
    [origin[0], (platform?.elevation || 0) + 0.16 + index * 0.04, origin[1]],
    [3.1 + index * 1.35, 1, 3.1 + index * 1.35],
    index * 0.6
  ));
  const ringMesh = addFamily(ctx, "broken-index-rings", new THREE.TorusGeometry(1, 0.035, 6, 40, Math.PI * (1.1 + 0.25)), materials.energy, rings, "landmark-family");
  if (ringMesh) for (let index = 0; index < rings.length; index++) {
    const matrix = new THREE.Matrix4().compose(
      new THREE.Vector3(...rings[index].position),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, rings[index].rotation)),
      new THREE.Vector3(rings[index].scale[0], rings[index].scale[2], 1)
    );
    ringMesh.setMatrixAt(index, matrix);
  }
  if (ringMesh) { ringMesh.instanceMatrix.needsUpdate = true; ringMesh.computeBoundingSphere(); }

  /* Reliquary-wall pilasters and archive ledges give the tall blocks a vertical
     rhythm a rifle player can range against. Everything stays inside the
     authored footprint, so nothing reads as cover the grid does not own. */
  const pilasters = [];
  const ledges = [];
  const brokenCaps = [];
  for (const block of definition.topology.blocks || []) {
    if (block.kind) continue;
    const height = arenaBlockHeight(block);
    const long = block.w >= block.h;
    const steps = Math.max(2, Math.round((long ? block.w : block.h) * 1.2));
    const tall = height >= 3.1;
    for (let index = 0; index < steps; index++) {
      const u = (index + 0.5) / steps;
      const x = (block.x + (long ? block.w * u : block.w / 2)) * tileSize;
      const z = (block.y + (long ? block.h / 2 : block.h * u)) * tileSize;
      if (tall) {
        const depth = block.h * tileSize * 0.9;
        const width = block.w * tileSize * 0.9;
        pilasters.push(transform([x, height * 0.5, z], long ? [0.22, height * 0.94, depth] : [width, height * 0.94, 0.22]));
      } else {
        brokenCaps.push(transform([x, height - 0.18 + (index % 2) * 0.14, z],
          long ? [block.w * tileSize / steps * 0.7, 0.34, block.h * tileSize * 0.7] : [block.w * tileSize * 0.7, 0.34, block.h * tileSize / steps * 0.7],
          (index % 2 ? 0.06 : -0.06)));
      }
    }
    if (tall) for (const level of [0.42, 0.74]) {
      ledges.push(transform([(block.x + block.w / 2) * tileSize, height * level, (block.y + block.h / 2) * tileSize],
        [block.w * tileSize * 0.95, 0.14, block.h * tileSize * 0.95]));
    }
  }
  addFamily(ctx, "reliquary-wall-pilasters", new THREE.BoxGeometry(1, 1, 1), materials.hard, pilasters, "solid-cover-detail");
  addFamily(ctx, "archive-shelf-ledges", new THREE.BoxGeometry(1, 1, 1), materials.deck, ledges, "solid-cover-detail");
  addFamily(ctx, "collapsed-stack-caps", new THREE.BoxGeometry(1, 1, 1), materials.wet, brokenCaps, "low-cover-detail");

  /* Collapsed shelf banks along the flooded routes: low, broken, close-range. */
  const shelves = (definition.interactables || [])
    .filter(value => value.type === "water")
    .flatMap(value => Array.from({ length: 5 }, (_, index) => {
      const u = (index + 0.5) / 5;
      const edge = index % 2 ? value.x + value.w : value.x;
      return transform(
        [edge * tileSize, 0.55, (value.y + value.h * u) * tileSize],
        [0.7, 1.1, 1.5 + (index % 3) * 0.4],
        (index % 2 ? 0.18 : -0.18)
      );
    }));
  addFamily(ctx, "collapsed-shelf-banks", new THREE.BoxGeometry(1, 1, 1), materials.wet, shelves, "flooded-route-cover");
}

/** Skygrave Bastion: quarried mass hung in open sky, everything crosses the spine. */
function tempestFamilies(ctx) {
  const { definition, tileSize, materials } = ctx;
  const spine = (definition.topology.platforms || [])[0];
  const deck = spine?.elevation || 0;

  /* Banner masts ring the tower on the spine deck: the vertical reference a
     rifle player ranges the stair against. Slim enough never to read as cover. */
  addFamily(ctx, "bastion-banner-masts", new THREE.CylinderGeometry(1, 1, 1, 6), materials.hard,
    landmarkRing(definition, tileSize, { count: 8, radius: 5.6, radiusStep: 1.1, height: 4.6, heightStep: 0.7, width: 0.22, elevation: deck, phase: 0.3 }),
    "landmark-family");

  /* Merlons on the cover tops: the crenellation motif that names the arena,
     and a shape cue for which blocks are tall enough to hold from. */
  addFamily(ctx, "crenellation-merlons", new THREE.BoxGeometry(1, 1, 1), materials.hard,
    blockTops(definition, tileSize, { minHeight: 2.4, size: 0.56, height: 0.66, count: 4 }), "cover-top-detail");

  /* Corbels under the wing decks explain why a battlement is hanging in air. */
  addFamily(ctx, "bastion-buttress-corbels", new THREE.ConeGeometry(0.5, 1, 4), materials.hard,
    (definition.topology.platforms || []).flatMap(platform =>
      zonePerimeter(platform, tileSize, { perSide: 2, height: 1.5, width: 0.7, elevation: (platform.elevation || 0) - 1.6 })),
    "structural-underside");

  addFamily(ctx, "storm-lantern-chains", new THREE.OctahedronGeometry(0.5, 0), materials.energy,
    overheadField(definition, tileSize, { count: 10, minY: 7.5, maxY: 11, size: 0.7, seed: "tempest-lanterns" }),
    "overhead-non-interactive");
}

/** Verdant Overrun: nothing here was manufactured, so nothing gets a straight edge. */
function verdantFamilies(ctx) {
  const { definition, tileSize, materials } = ctx;

  /* Low and wide, banked against the ruin rather than standing beside it: a
     root mass reads from the floor, and never from shot height. */
  addFamily(ctx, "heart-arterial-roots", new THREE.CylinderGeometry(0.32, 0.5, 1, 6), materials.hard,
    landmarkRing(definition, tileSize, { count: 11, radius: 14, radiusStep: 2.2, height: 0.85, heightStep: 0.3, width: 1.3 }),
    "landmark-family");

  /* Root buttresses bank against cover instead of capping it: overgrowth
     climbs a wall, it does not sit neatly on top of one. */
  addFamily(ctx, "root-buttress-wedges", new THREE.IcosahedronGeometry(0.5, 0), materials.ground,
    blockSkirts(definition, tileSize, { height: 0.72, depth: 1.2, inset: 0.86 }), "low-cover-detail");

  /* Pods cluster on the spore hazard's own boundary, so the thing that fires
     is visibly the thing that grew there. */
  addFamily(ctx, "nursery-pod-clusters", new THREE.IcosahedronGeometry(0.5, 1), materials.energy,
    (definition.hazards || []).filter(hazard => hazard.type === "spores")
      .flatMap(hazard => zonePerimeter(hazard, tileSize, { perSide: 2, height: 0.9, width: 0.6, outward: 0.4 })),
    "hazard-boundary-detail");

  addFamily(ctx, "canopy-frond-cover", new THREE.ConeGeometry(0.5, 0.3, 6), materials.ground,
    overheadField(definition, tileSize, { count: 12, minY: 7, maxY: 9.5, size: 3.4, seed: "verdant-canopy" }),
    "overhead-non-interactive");
}

/** Cryo Rift: the rift is the map, so every family points at an edge of it. */
function cryoFamilies(ctx) {
  const { definition, tileSize, materials } = ctx;

  /* Crystals grow out of the void lips. Voids are already non-walkable, so a
     dense family on them costs nothing in false cover. */
  addFamily(ctx, "rift-edge-crystals", new THREE.ConeGeometry(0.5, 1, 6), materials.energy,
    (definition.topology.voids || []).flatMap(value =>
      zonePerimeter(value, tileSize, { perSide: 2, height: 1.9, width: 0.55 })),
    "void-lip-detail");

  /* Fracture veins trace the cracking routes on the deck itself, so the shape
     of the hazard is legible before the telegraph ever fires. */
  addFamily(ctx, "shelf-fracture-veins", new THREE.BoxGeometry(1, 1, 1), materials.accent,
    (definition.hazards || []).filter(hazard => hazard.type === "cracking-ice")
      .flatMap(hazard => laneSteps({ ...hazard, vector: hazard.w >= hazard.h ? [1, 0] : [0, 1] }, tileSize, 7, ({ x, z, index }) => transform(
        [x, 0.1, z],
        hazard.w >= hazard.h ? [hazard.w * tileSize / 9, 0.08, hazard.h * tileSize * 0.7] : [hazard.w * tileSize * 0.7, 0.08, hazard.h * tileSize / 9],
        index % 2 ? 0.05 : -0.05))),
    "hazard-footprint-decal");

  addFamily(ctx, "pylon-stabilizer-caps", new THREE.OctahedronGeometry(0.5, 0), materials.wet,
    blockTops(definition, tileSize, { size: 0.66, height: 0.86 }), "cover-top-detail");

  addFamily(ctx, "frost-drift-banks", new THREE.CylinderGeometry(0.34, 0.5, 1, 7), materials.deck,
    blockSkirts(definition, tileSize, { height: 0.46, depth: 1, inset: 0.84 }), "low-cover-detail");
}

/** Null Cathedral: monumental, off-axis, and deliberately not built by humans. */
function mirageFamilies(ctx) {
  const { definition, tileSize, materials } = ctx;
  const landmark = definition.topology.landmark;
  const origin = [landmark.x * tileSize, landmark.y * tileSize];

  /* Orbit rings laid flat over the nave floor: the ritual motif, and a
     distance scale on the one lane that decides the round. */
  const rings = Array.from({ length: 4 }, (_, index) => transform(
    [origin[0], 0.18 + index * 0.05, origin[1]],
    [15 + index * 2.6, 1, 15 + index * 2.6],
    index * 0.55
  ));
  const ringMesh = addFamily(ctx, "ritual-orbit-rings", new THREE.TorusGeometry(1, 0.016, 6, 44, Math.PI * 1.45), materials.energy, rings, "landmark-family");
  if (ringMesh) {
    rings.forEach((ring, index) => ringMesh.setMatrixAt(index, new THREE.Matrix4().compose(
      new THREE.Vector3(...ring.position),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, ring.rotation)),
      new THREE.Vector3(ring.scale[0], ring.scale[2], 1)
    )));
    ringMesh.instanceMatrix.needsUpdate = true;
    ringMesh.computeBoundingSphere();
  }

  /* Piers give the nave walls a countable vertical rhythm. */
  addFamily(ctx, "nave-pier-columns", new THREE.BoxGeometry(1, 1, 1), materials.hard,
    blockTops(definition, tileSize, { minHeight: 3, size: 0.4, height: 1.5 }), "cover-top-detail");

  addFamily(ctx, "gallery-votive-lamps", new THREE.OctahedronGeometry(0.5, 0), materials.energy,
    (definition.topology.platforms || []).flatMap(platform =>
      zonePerimeter(platform, tileSize, { perSide: 3, height: 0.44, width: 0.3, elevation: platform.elevation || 0 })),
    "elevated-hold-detail");

  addFamily(ctx, "suspended-censers", new THREE.CylinderGeometry(0.5, 0.2, 1, 6), materials.hard,
    overheadField(definition, tileSize, { count: 11, minY: 8, maxY: 12, size: 1.1, seed: "mirage-censers" }),
    "overhead-non-interactive");
}

/** Neon Canopy: a closed rooftop ring, so the family work is roof plant and signage. */
function neonFamilies(ctx) {
  const { definition, tileSize, materials } = ctx;

  addFamily(ctx, "core-holo-gantries", new THREE.BoxGeometry(1, 1, 1), materials.energy,
    landmarkRing(definition, tileSize, { count: 10, radius: 6.4, radiusStep: 0.9, height: 0.5, heightStep: 0.2, width: 1.5, elevation: 5.4 }),
    "landmark-family");

  /* Roof plant on the cover tops: the reason a rooftop has cover at all. */
  addFamily(ctx, "rooftop-plant-units", new THREE.BoxGeometry(1, 1, 1), materials.hard,
    blockTops(definition, tileSize, { size: 0.7, height: 0.8 }), "cover-top-detail");

  /* Signage fins are vertical, thin and lit — they cut a long roof-to-roof
     lane into readable segments without blocking it. */
  addFamily(ctx, "signage-fins", new THREE.BoxGeometry(1, 1, 1), materials.accent,
    blockTops(definition, tileSize, { minHeight: 2.8, lift: 0.9, size: 0.16, height: 2.2 }), "cover-top-detail");

  addFamily(ctx, "parapet-drone-beacons", new THREE.OctahedronGeometry(0.5, 0), materials.energy,
    overheadField(definition, tileSize, { count: 12, minY: 7, maxY: 10.5, size: 0.5, seed: "neon-drones" }),
    "overhead-non-interactive");
}

/** Solar Bastion: exposed courts, so the family work is what casts the shade. */
function solarFamilies(ctx) {
  const { definition, tileSize, materials } = ctx;

  addFamily(ctx, "crown-collector-arms", new THREE.CylinderGeometry(0.22, 0.4, 1, 6), materials.hard,
    landmarkRing(definition, tileSize, { count: 12, radius: 6.2, radiusStep: 1.2, height: 3.4, heightStep: 0.9, width: 0.34,
      elevation: coverHeightAt(definition, definition.topology.landmark.x, definition.topology.landmark.y) }),
    "landmark-family");

  /* Mirror ranks stand on the cover tops facing the crown. Nearly flat, so
     they add silhouette to a hold without adding height to the shot line. */
  addFamily(ctx, "heliostat-mirror-ranks", new THREE.BoxGeometry(1, 0.08, 1), materials.deck,
    blockTops(definition, tileSize, { size: 0.86, lift: 0.5, height: 0.9 }), "cover-top-detail");

  /* Manifolds run beside the coolant lane, not on it — the lane itself has to
     stay clean for the direction read. */
  addFamily(ctx, "coolant-manifold-runs", new THREE.CylinderGeometry(0.5, 0.5, 1, 6), materials.wet,
    (definition.interactables || []).filter(value => value.type === "conveyor")
      .flatMap(value => zonePerimeter(value, tileSize, { perSide: 3, height: 0.5, width: 0.42, outward: 0.5 })),
    "lane-edge-detail");

  addFamily(ctx, "sand-drift-ridges", new THREE.CylinderGeometry(0.3, 0.5, 1, 6), materials.ground,
    blockSkirts(definition, tileSize, { height: 0.44, depth: 1.1, inset: 0.86 }), "low-cover-detail");
}

/** Lunar Excavation: an industrial dig, so the family work is spoil and beacons. */
function lunarFamilies(ctx) {
  const { definition, tileSize, materials } = ctx;

  /* The crater void is the arena's centre of gravity: berm its whole lip. */
  addFamily(ctx, "crater-rim-berms", new THREE.CylinderGeometry(0.28, 0.5, 1, 7), materials.ground,
    (definition.topology.voids || []).flatMap(value =>
      zonePerimeter(value, tileSize, { perSide: 3, height: 1.1, width: 1.4 })),
    "void-lip-detail");

  addFamily(ctx, "beacon-mast-array", new THREE.CylinderGeometry(1, 1, 1, 5), materials.hard,
    landmarkRing(definition, tileSize, { count: 9, radius: 19, radiusStep: 1.5, height: 4.2, heightStep: 1.1, width: 0.2 }),
    "landmark-family");

  /* Sleepers under the crawler tracks: the lane reads as rail, not as paint. */
  addFamily(ctx, "crawler-track-sleepers", new THREE.BoxGeometry(1, 1, 1), materials.deck,
    (definition.interactables || []).filter(value => value.type === "conveyor")
      .flatMap(value => laneSteps(value, tileSize, 9, ({ x, z, along }) => transform(
        [x, 0.09, z],
        along ? [value.w * tileSize / 11, 0.14, value.h * tileSize * 0.92] : [value.w * tileSize * 0.92, 0.14, value.h * tileSize / 11]))),
    "timing-route");

  addFamily(ctx, "excavator-spoil-heaps", new THREE.ConeGeometry(0.5, 1, 6), materials.ground,
    blockSkirts(definition, tileSize, { height: 0.68, depth: 1.2, inset: 0.82 }), "low-cover-detail");
}

/** Ember Caldera: a horseshoe around a denied centre, so everything faces inward. */
function calderaFamilies(ctx) {
  const { definition, tileSize, materials } = ctx;
  const throat = (definition.topology.voids || [])
    .reduce((widest, value) => (value.w * value.h > (widest?.w || 0) * (widest?.h || 0) ? value : widest), null);

  /* Columnar fins along the throat lip: the arena's identity motif, and the
     thing that says "the centre is denied" from any approach. */
  addFamily(ctx, "throat-obsidian-fins", new THREE.ConeGeometry(0.5, 1, 5), materials.hard,
    throat ? zonePerimeter(throat, tileSize, { perSide: 4, height: 2.2, width: 0.8 }) : [],
    "void-lip-detail");

  addFamily(ctx, "terrace-offering-braziers", new THREE.CylinderGeometry(0.5, 0.34, 1, 8), materials.energy,
    (definition.topology.platforms || []).flatMap(platform =>
      zonePerimeter(platform, tileSize, { perSide: 2, height: 1.2, width: 0.62, elevation: platform.elevation || 0 })),
    "elevated-hold-detail");

  addFamily(ctx, "terrace-basalt-columns", new THREE.CylinderGeometry(0.5, 0.5, 1, 6), materials.hard,
    blockTops(definition, tileSize, { size: 0.52, height: 1.1 }), "cover-top-detail");

  addFamily(ctx, "ash-drift-banks", new THREE.CylinderGeometry(0.3, 0.5, 1, 6), materials.ground,
    blockSkirts(definition, tileSize, { height: 0.42, depth: 1, inset: 0.86 }), "low-cover-detail");
}

export const CONTENT_PASS_KITS = Object.freeze({
  forge: Object.freeze({
    id: "forge",
    pipeline: "forge-strategy-kit-v2",
    identity: "mid-vertical / rifle gantries / shotgun under-route / utility versus steam",
    surfaces: { hard: "brushed-steel", deck: "painted", ground: "worn-metal" },
    metalness: 0.64, roughness: 0.46, deckMetalness: 0.3, deckRoughness: 0.6,
    wetColor: 0x6d493a, wetRoughness: 0.34,
    anchorHeight: 3.1, skinInset: 0.93, heroInset: 0.97, rampTreads: 7, markerSides: 4,
    blockGeometry: { hero: () => new THREE.CylinderGeometry(0.46, 0.5, 1, 8), anchor: boxGeometry, low: () => new THREE.BoxGeometry(1, 1, 1, 1, 2, 1) },
    atmosphere: {
      clearance: 3, spread: 7,
      families: [
        { name: "refinery-stacks", count: 12, minHeight: 7, maxHeight: 16, minWidth: 1.1, maxWidth: 2.4, geometry: () => new THREE.CylinderGeometry(0.42, 0.5, 1, 8) },
        { name: "cracking-towers", count: 8, minHeight: 4, maxHeight: 9, minWidth: 1.6, maxWidth: 3.4, geometry: boxGeometry },
      ],
    },
    hazardTypes: ["steam", "heat"],
    hazardEmitterCorners: hazard => [[hazard.x, hazard.y], [hazard.x + hazard.w, hazard.y + hazard.h]],
    emitterHeight: 3.1, emitterRadius: 0.46, lampRadius: 0.44,
    families: forgeFamilies,
  }),

  abyss: Object.freeze({
    id: "abyss",
    pipeline: "abyss-strategy-kit-v1",
    identity: "split-range / raised sanctum for rifles / flooded stacks for shotguns / mist and surge windows",
    surfaces: { hard: "stone", deck: "painted", ground: "stone" },
    metalness: 0.16, roughness: 0.74, deckMetalness: 0.1, deckRoughness: 0.7,
    wetColor: 0x33505f, wetRoughness: 0.12,
    anchorHeight: 3.1, skinInset: 0.94, heroInset: 0.98, rampTreads: 6, markerSides: 3,
    blockGeometry: { hero: () => new THREE.CylinderGeometry(0.5, 0.5, 1, 8), anchor: () => new THREE.BoxGeometry(1, 1, 1, 1, 3, 1), low: () => new THREE.BoxGeometry(1, 1, 1, 2, 1, 2) },
    atmosphere: {
      clearance: 3, spread: 8,
      families: [
        { name: "broken-stacks", count: 10, minHeight: 6, maxHeight: 15, minWidth: 1.2, maxWidth: 2.8, geometry: boxGeometry },
        { name: "collapsed-arches", count: 8, minHeight: 4, maxHeight: 9, minWidth: 1.8, maxWidth: 3.6, geometry: () => new THREE.TorusGeometry(0.5, 0.14, 5, 14, Math.PI) },
        { name: "distant-columns", count: 10, minHeight: 5, maxHeight: 12, minWidth: 0.8, maxWidth: 1.6, geometry: () => new THREE.CylinderGeometry(0.5, 0.58, 1, 7) },
      ],
    },
    hazardTypes: ["surge", "mist"],
    hazardEmitterCorners: hazard => [[hazard.x, hazard.y], [hazard.x + hazard.w, hazard.y], [hazard.x, hazard.y + hazard.h], [hazard.x + hazard.w, hazard.y + hazard.h]],
    emitterHeight: 2.9, emitterRadius: 0.42, lampRadius: 0.42,
    families: abyssFamilies,
  }),

  tempest: Object.freeze({
    id: "tempest",
    pipeline: "tempest-strategy-kit-v1",
    identity: "aerial fortress / storm battlements / wind lanes / tower stair control",
    surfaces: { hard: "stone", deck: "worn-metal", ground: "weathered-stone" },
    metalness: 0.28, roughness: 0.82, deckMetalness: 0.18, deckRoughness: 0.86,
    wetColor: 0x5a6b7c, wetRoughness: 0.24,
    anchorHeight: 3.4, skinInset: 0.91, heroInset: 0.96, rampTreads: 8, markerSides: 6,
    blockGeometry: { hero: () => new THREE.CylinderGeometry(0.52, 0.56, 1, 10), anchor: () => new THREE.BoxGeometry(1, 1, 1, 1, 4, 1), low: () => new THREE.BoxGeometry(1, 1, 1, 2, 1, 3) },
    atmosphere: {
      clearance: 4, spread: 9,
      families: [
        { name: "storm-battlements", count: 14, minHeight: 5, maxHeight: 12, minWidth: 1.4, maxWidth: 3.2, geometry: () => new THREE.BoxGeometry(1, 1, 1) },
        { name: "wind-vanes", count: 10, minHeight: 3, maxHeight: 7, minWidth: 0.6, maxWidth: 1.8, geometry: () => new THREE.ConeGeometry(0.4, 1, 5) },
        { name: "hanging-masonry", count: 8, minHeight: 2, maxHeight: 5, minWidth: 1.2, maxWidth: 2.6, geometry: () => new THREE.TorusGeometry(0.4, 0.12, 5, 12, Math.PI * 0.7) },
      ],
    },
    hazardTypes: ["wind"],
    hazardEmitterCorners: hazard => [[hazard.x, hazard.y], [hazard.x + hazard.w, hazard.y + hazard.h]],
    emitterHeight: 3.6, emitterRadius: 0.52, lampRadius: 0.48,
    families: tempestFamilies,
  }),

  verdant: Object.freeze({
    id: "verdant",
    pipeline: "verdant-strategy-kit-v1",
    identity: "biomech overgrowth / root tunnels / spore nursery / glass spine lanes",
    surfaces: { hard: "organic", deck: "overgrown", ground: "biomech-soil" },
    metalness: 0.08, roughness: 0.88, deckMetalness: 0.04, deckRoughness: 0.92,
    wetColor: 0x2d4a38, wetRoughness: 0.18,
    anchorHeight: 2.8, skinInset: 0.96, heroInset: 0.99, rampTreads: 5, markerSides: 5,
    blockGeometry: { hero: () => new THREE.IcosahedronGeometry(0.55, 1), anchor: () => new THREE.CylinderGeometry(0.4, 0.48, 1, 7), low: () => new THREE.BoxGeometry(1, 1, 1, 2, 1, 2) },
    atmosphere: {
      clearance: 2.5, spread: 6,
      families: [
        { name: "root-formations", count: 16, minHeight: 3, maxHeight: 8, minWidth: 1.1, maxWidth: 2.8, geometry: () => new THREE.CylinderGeometry(0.35, 0.5, 1, 7) },
        { name: "spore-pods", count: 12, minHeight: 1.5, maxHeight: 4, minWidth: 0.8, maxWidth: 2.2, geometry: () => new THREE.IcosahedronGeometry(0.45, 1) },
        { name: "glass-fragments", count: 10, minHeight: 2, maxHeight: 6, minWidth: 0.6, maxWidth: 1.8, geometry: () => new THREE.ConeGeometry(0.3, 1.2, 5) },
      ],
    },
    hazardTypes: ["bramble", "spores"],
    hazardEmitterCorners: hazard => [[hazard.x, hazard.y], [hazard.x + hazard.w, hazard.y], [hazard.x, hazard.y + hazard.h], [hazard.x + hazard.w, hazard.y + hazard.h]],
    emitterHeight: 2.6, emitterRadius: 0.38, lampRadius: 0.36,
    families: verdantFamilies,
  }),

  cryo: Object.freeze({
    id: "cryo",
    pipeline: "cryo-strategy-kit-v1",
    identity: "fractured ice shelf / rift chasm / crystal pylons / machinery bridge",
    surfaces: { hard: "ice-crystal", deck: "snow-packed", ground: "glacial-stone" },
    metalness: 0.14, roughness: 0.32, deckMetalness: 0.08, deckRoughness: 0.42,
    wetColor: 0x6b8fa3, wetRoughness: 0.14,
    anchorHeight: 3.2, skinInset: 0.92, heroInset: 0.97, rampTreads: 6, markerSides: 6,
    blockGeometry: { hero: () => new THREE.OctahedronGeometry(0.52, 0), anchor: () => new THREE.CylinderGeometry(0.44, 0.52, 1, 8), low: () => new THREE.BoxGeometry(1, 1, 1, 1, 2, 2) },
    atmosphere: {
      clearance: 3.5, spread: 8,
      families: [
        { name: "ice-spires", count: 14, minHeight: 4, maxHeight: 11, minWidth: 0.9, maxWidth: 2.4, geometry: () => new THREE.ConeGeometry(0.35, 1, 6) },
        { name: "crystal-formations", count: 10, minHeight: 2, maxHeight: 6, minWidth: 0.7, maxWidth: 2.1, geometry: () => new THREE.OctahedronGeometry(0.42, 0) },
        { name: "frozen-conduits", count: 8, minHeight: 1.5, maxHeight: 4, minWidth: 0.5, maxWidth: 1.6, geometry: () => new THREE.CylinderGeometry(0.25, 0.32, 1, 7) },
      ],
    },
    hazardTypes: ["cracking-ice"],
    hazardEmitterCorners: hazard => [[hazard.x, hazard.y], [hazard.x + hazard.w, hazard.y + hazard.h]],
    emitterHeight: 3.0, emitterRadius: 0.44, lampRadius: 0.42,
    families: cryoFamilies,
  }),

  mirage: Object.freeze({
    id: "mirage",
    pipeline: "mirage-strategy-kit-v1",
    identity: "alien cathedral / null monolith / ritual orbits / phase barriers",
    surfaces: { hard: "void-stone", deck: "ritual-inlay", ground: "dark-matter" },
    metalness: 0.42, roughness: 0.58, deckMetalness: 0.22, deckRoughness: 0.64,
    wetColor: 0x3a2842, wetRoughness: 0.22,
    anchorHeight: 3.6, skinInset: 0.89, heroInset: 0.95, rampTreads: 9, markerSides: 5,
    blockGeometry: { hero: () => new THREE.OctahedronGeometry(0.58, 1), anchor: () => new THREE.CylinderGeometry(0.48, 0.56, 1, 10), low: () => new THREE.BoxGeometry(1, 1, 1, 2, 1, 3) },
    atmosphere: {
      clearance: 4, spread: 10,
      families: [
        { name: "ritual-spires", count: 12, minHeight: 6, maxHeight: 14, minWidth: 1.2, maxWidth: 3.0, geometry: () => new THREE.ConeGeometry(0.4, 1.2, 5) },
        { name: "orbit-rings", count: 9, minHeight: 2, maxHeight: 5, minWidth: 1.8, maxWidth: 4.2, geometry: () => new THREE.TorusGeometry(0.6, 0.08, 7, 24, Math.PI * 0.6) },
        { name: "void-shards", count: 11, minHeight: 3, maxHeight: 8, minWidth: 0.6, maxWidth: 1.9, geometry: () => new THREE.OctahedronGeometry(0.38, 0) },
      ],
    },
    hazardTypes: ["null-pulse", "mist"],
    hazardEmitterCorners: hazard => [[hazard.x, hazard.y], [hazard.x + hazard.w, hazard.y], [hazard.x, hazard.y + hazard.h], [hazard.x + hazard.w, hazard.y + hazard.h]],
    emitterHeight: 3.4, emitterRadius: 0.5, lampRadius: 0.46,
    families: mirageFamilies,
  }),

  neon: Object.freeze({
    id: "neon",
    pipeline: "neon-strategy-kit-v1",
    identity: "rooftop transit / holographic rings / maglev carriage / city canopy",
    surfaces: { hard: "painted-metal", deck: "composite-roof", ground: "city-deep" },
    metalness: 0.58, roughness: 0.42, deckMetalness: 0.34, deckRoughness: 0.52,
    wetColor: 0x4a3862, wetRoughness: 0.28,
    anchorHeight: 3.0, skinInset: 0.94, heroInset: 0.98, rampTreads: 6, markerSides: 4,
    blockGeometry: { hero: () => new THREE.BoxGeometry(1, 1, 1), anchor: () => new THREE.CylinderGeometry(0.42, 0.5, 1, 8), low: () => new THREE.BoxGeometry(1, 1, 1, 1, 2, 2) },
    atmosphere: {
      clearance: 3, spread: 7,
      families: [
        { name: "transit-pylons", count: 12, minHeight: 5, maxHeight: 12, minWidth: 1.0, maxWidth: 2.6, geometry: () => new THREE.BoxGeometry(0.8, 1, 0.8) },
        { name: "holo-billboards", count: 10, minHeight: 2, maxHeight: 5, minWidth: 1.4, maxWidth: 3.2, geometry: () => new THREE.BoxGeometry(1, 1, 0.06) },
        { name: "maglev-conduits", count: 8, minHeight: 1.5, maxHeight: 4, minWidth: 0.6, maxWidth: 1.8, geometry: () => new THREE.CylinderGeometry(0.3, 0.38, 1, 8) },
      ],
    },
    hazardTypes: ["transit-wake", "wind", "dust"],
    hazardEmitterCorners: hazard => [[hazard.x, hazard.y], [hazard.x + hazard.w, hazard.y + hazard.h]],
    emitterHeight: 2.8, emitterRadius: 0.42, lampRadius: 0.4,
    families: neonFamilies,
  }),

  solar: Object.freeze({
    id: "solar",
    pipeline: "solar-strategy-kit-v1",
    identity: "heliostat crown / desert courts / cooling trench / reflector arrays",
    surfaces: { hard: "sandstone", deck: "solar-panel", ground: "desert-rock" },
    metalness: 0.22, roughness: 0.76, deckMetalness: 0.48, deckRoughness: 0.38,
    wetColor: 0x6b5238, wetRoughness: 0.32,
    anchorHeight: 3.1, skinInset: 0.93, heroInset: 0.97, rampTreads: 7, markerSides: 6,
    blockGeometry: { hero: () => new THREE.CylinderGeometry(0.5, 0.54, 1, 10), anchor: () => new THREE.BoxGeometry(1, 1, 1, 1, 3, 1), low: () => new THREE.CylinderGeometry(0.4, 0.48, 1, 7) },
    atmosphere: {
      clearance: 3.5, spread: 8,
      families: [
        { name: "heliostat-petals", count: 14, minHeight: 4, maxHeight: 10, minWidth: 1.2, maxWidth: 3.4, geometry: () => new THREE.BoxGeometry(1.2, 0.1, 2.8) },
        { name: "collector-arms", count: 10, minHeight: 2, maxHeight: 6, minWidth: 0.7, maxWidth: 2.2, geometry: () => new THREE.CylinderGeometry(0.25, 0.32, 1, 7) },
        { name: "cooling-vents", count: 8, minHeight: 1.5, maxHeight: 4, minWidth: 0.9, maxWidth: 2.4, geometry: () => new THREE.ConeGeometry(0.35, 1, 6) },
      ],
    },
    hazardTypes: ["heat", "dust"],
    hazardEmitterCorners: hazard => [[hazard.x, hazard.y], [hazard.x + hazard.w, hazard.y + hazard.h]],
    emitterHeight: 3.0, emitterRadius: 0.46, lampRadius: 0.44,
    families: solarFamilies,
  }),

  lunar: Object.freeze({
    id: "lunar",
    pipeline: "lunar-strategy-kit-v1",
    identity: "excavation quarry / regolith berms / crawler tracks / drill rig",
    surfaces: { hard: "lunar-regolith", deck: "crawler-plate", ground: "bedrock" },
    metalness: 0.12, roughness: 0.92, deckMetalness: 0.38, deckRoughness: 0.68,
    wetColor: 0x525862, wetRoughness: 0.42,
    anchorHeight: 3.3, skinInset: 0.9, heroInset: 0.96, rampTreads: 8, markerSides: 6,
    blockGeometry: { hero: () => new THREE.CylinderGeometry(0.54, 0.58, 1, 9), anchor: () => new THREE.BoxGeometry(1, 1, 1, 1, 4, 1), low: () => new THREE.CylinderGeometry(0.42, 0.5, 1, 8) },
    atmosphere: {
      clearance: 4, spread: 9,
      families: [
        { name: "regolith-mounds", count: 16, minHeight: 2, maxHeight: 6, minWidth: 1.4, maxWidth: 3.8, geometry: () => new THREE.ConeGeometry(0.5, 0.8, 7) },
        { name: "beacon-poles", count: 10, minHeight: 4, maxHeight: 9, minWidth: 0.4, maxWidth: 1.2, geometry: () => new THREE.CylinderGeometry(0.18, 0.24, 1, 7) },
        { name: "excavator-parts", count: 8, minHeight: 1.5, maxHeight: 4, minWidth: 1.0, maxWidth: 2.8, geometry: () => new THREE.TorusGeometry(0.4, 0.14, 6, 14, Math.PI * 0.8) },
      ],
    },
    hazardTypes: ["dust"],
    hazardEmitterCorners: hazard => [[hazard.x, hazard.y], [hazard.x + hazard.w, hazard.y], [hazard.x, hazard.y + hazard.h], [hazard.x + hazard.w, hazard.y + hazard.h]],
    emitterHeight: 3.1, emitterRadius: 0.48, lampRadius: 0.46,
    families: lunarFamilies,
  }),

  caldera: Object.freeze({
    id: "caldera",
    pipeline: "caldera-strategy-kit-v1",
    identity: "lava throat shrine / basalt terraces / thermal towers / obsidian rim",
    surfaces: { hard: "basalt-rock", deck: "thermal-plate", ground: "magma-deep" },
    metalness: 0.18, roughness: 0.84, deckMetalness: 0.12, deckRoughness: 0.88,
    wetColor: 0x4a3238, wetRoughness: 0.28,
    anchorHeight: 3.4, skinInset: 0.91, heroInset: 0.96, rampTreads: 7, markerSides: 5,
    blockGeometry: { hero: () => new THREE.TorusGeometry(0.5, 0.18, 10, 24, Math.PI * 0.6), anchor: () => new THREE.CylinderGeometry(0.46, 0.54, 1, 8), low: () => new THREE.BoxGeometry(1, 1, 1, 2, 1, 2) },
    atmosphere: {
      clearance: 3.5, spread: 8,
      families: [
        { name: "thermal-towers", count: 12, minHeight: 5, maxHeight: 12, minWidth: 1.1, maxWidth: 2.9, geometry: () => new THREE.CylinderGeometry(0.4, 0.52, 1, 8) },
        { name: "basalt-fins", count: 14, minHeight: 2, maxHeight: 6, minWidth: 0.8, maxWidth: 2.4, geometry: () => new THREE.ConeGeometry(0.35, 1.1, 5) },
        { name: "obsidian-shards", count: 10, minHeight: 1.5, maxHeight: 4, minWidth: 0.6, maxWidth: 1.9, geometry: () => new THREE.OctahedronGeometry(0.36, 0) },
      ],
    },
    hazardTypes: ["heat", "dust"],
    hazardEmitterCorners: hazard => [[hazard.x, hazard.y], [hazard.x + hazard.w, hazard.y + hazard.h]],
    emitterHeight: 3.2, emitterRadius: 0.48, lampRadius: 0.46,
    families: calderaFamilies,
  }),
});

export const CONTENT_PASS_ARENAS = Object.freeze(Object.keys(CONTENT_PASS_KITS));

export function hasArenaContentPass(id) {
  return Object.prototype.hasOwnProperty.call(CONTENT_PASS_KITS, id);
}

const SHARED_LAYERS = Object.freeze([
  layerAtmosphere,
  layerBlockSkins,
  layerPlatformsAndRamps,
  layerSkirtingAndDecals,
  layerHazardVisuals,
  layerInteractableVisuals,
]);

/**
 * Build the content pass for one arena, or `null` when the arena has no kit yet.
 * The returned bindings are plain objects keyed by authored ids; the caller
 * attaches them to its existing runtime entries.
 */
export function buildArenaContentPass(definition, theme, tileSize = ARENA_SIZE.tile * 0.1) {
  const kit = CONTENT_PASS_KITS[definition?.identity?.id];
  if (!kit) return null;
  const ctx = createPassContext(definition, theme, tileSize, kit);
  for (const layer of SHARED_LAYERS) layer(ctx);
  kit.families?.(ctx);

  const instances = ctx.families.reduce((total, family) => total + family.instances, 0);
  ctx.root.userData.blockSkinCount = ctx.blockSkinCount || 0;
  ctx.root.userData.families = ctx.families.map(family => family.name);
  ctx.root.userData.hazardBindingIds = ctx.bindings.hazards.map(binding => binding.id);
  ctx.root.userData.interactableBindingIds = ctx.bindings.interactables.map(binding => binding.id);
  /* Diagnostics only. The gate is the measured browser budget, never this. */
  ctx.root.userData.counts = { directChildren: ctx.root.children.length, families: ctx.families.length, instances };
  return { root: ctx.root, animations: ctx.animations, bindings: ctx.bindings };
}
