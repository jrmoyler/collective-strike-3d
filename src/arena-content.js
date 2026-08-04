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
  addFamily(ctx, "block-skin-hero", kit.blockGeometry.hero(), materials.hard, hero, "solid-cover-skin");
  addFamily(ctx, "block-skin-anchor", kit.blockGeometry.anchor(), materials.hard, anchors, "solid-cover-skin");
  addFamily(ctx, "block-skin-low", kit.blockGeometry.low(), materials.hard, low, "solid-cover-skin");

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

  /* Objective approach markers: a chevron shape, one per site edge. */
  const markers = definition.combat.sites.flatMap(site => {
    const cx = (site.x + site.w / 2) * tileSize;
    const cz = (site.y + site.h / 2) * tileSize;
    return [0, 1, 2, 3].map(corner => transform(
      [cx + (corner % 2 ? 1 : -1) * site.w * tileSize * 0.42, 0.2, cz + (corner < 2 ? -1 : 1) * site.h * tileSize * 0.42],
      [0.34, 0.4, 0.34],
      corner * Math.PI / 2
    ));
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

function conveyorVisual(ctx, value) {
  const { tileSize, materials, theme } = ctx;
  const along = Math.abs(value.vector[0]) >= Math.abs(value.vector[1]);
  const sign = Math.sign(along ? value.vector[0] : value.vector[1]) || 1;
  const width = value.w * tileSize;
  const depth = value.h * tileSize;
  const uniforms = {
    uTime: { value: 0 },
    uDirection: { value: sign },
    uStrength: { value: Math.max(0.25, (value.strength || 20) / 42) },
    uColor: { value: new THREE.Color(theme.accentHex) },
    uEdge: { value: new THREE.Color(theme.secondaryHex) },
    uOpacity: { value: 0.78 },
  };
  const strip = new THREE.Mesh(
    new THREE.PlaneGeometry(along ? width : depth, along ? depth * 0.72 : width * 0.72),
    new THREE.ShaderMaterial({ uniforms, vertexShader: FLOW_VERTEX, fragmentShader: FLOW_FRAGMENT, transparent: true, depthWrite: false })
  );
  strip.name = `conveyor-flow-${value.id}`;
  strip.rotation.x = -Math.PI / 2;
  if (!along) strip.rotation.z = Math.PI / 2;
  strip.position.set((value.x + value.w / 2) * tileSize, 0.1, (value.y + value.h / 2) * tileSize);
  strip.renderOrder = 3;
  strip.userData.interactableId = value.id;
  strip.userData.flowVector = [value.vector[0], value.vector[1]];
  strip.userData.flowSign = sign;
  strip.userData.flowAxis = along ? "x" : "z";
  ctx.root.add(strip);

  /* Rollers are oriented across the direction of travel; they never spin as a
     whole-family substitute for per-roller movement. */
  const count = 12;
  const rollers = Array.from({ length: count }, (_, index) => {
    const u = (index + 0.5) / count;
    return transform(
      [(value.x + (along ? value.w * u : value.w / 2)) * tileSize, 0.17, (value.y + (along ? value.h / 2 : value.h * u)) * tileSize],
      [0.16, Math.min(value.w, value.h) * tileSize * 0.44, 0.16],
      along ? Math.PI / 2 : 0
    );
  });
  const rollerMesh = addFamily(ctx, `conveyor-rollers-${value.id}`, new THREE.CylinderGeometry(1, 1, 1, 8), materials.hard, rollers, "timing-route");
  if (rollerMesh) {
    rollerMesh.rotation.x = along ? Math.PI / 2 : 0;
    rollerMesh.rotation.set(0, 0, 0);
    rollerMesh.userData.interactableId = value.id;
  }
  ctx.bindings.interactables.push({
    id: value.id,
    kind: "conveyor-flow",
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

const INTERACTABLE_VISUALS = Object.freeze({
  conveyor: conveyorVisual,
  water: waterVisual,
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
    /* Octagonal hero plinth restates the concept's sanctum dais; anchors and low
       pieces keep straight archive-stack silhouettes. */
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
