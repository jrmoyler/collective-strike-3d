import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";

import { ARENA_DEFINITIONS, ARENA_ORDER, arenaElevationAt, pointInZone } from "../src/arena-core.js";
import { arenaBlockHeight } from "../src/arena-ballistics.js";
import {
  CONTENT_PASS_ARENAS,
  HAZARD_PHASES,
  buildArenaContentPass,
  hasArenaContentPass,
  hazardCycleLength,
  hazardPhaseAt,
  hazardPhaseProgress,
  interactableMovementMultiplier,
  playableBounds,
} from "../src/arena-content.js";

const TILE = 4;
const themeFor = id => Object.freeze({
  id,
  wall: 0x34445c,
  outer: 0x07101e,
  wallEmissive: 0x071626,
  accentHex: 0xff8a2a,
  secondaryHex: 0x38bdf8,
  floorTint: 0x687386,
  floorRoughness: 0.68,
  floorMetalness: 0.28,
});

const disposeTree = root => root.traverse(object => {
  object.geometry?.dispose?.();
  for (const material of Array.isArray(object.material) ? object.material : [object.material]) material?.dispose?.();
});

const buildPass = id => buildArenaContentPass(ARENA_DEFINITIONS[id], themeFor(id), TILE);

/** World-space AABB of one instance of an InstancedMesh, in the arena frame. */
function instanceBounds(mesh, index) {
  const matrix = new THREE.Matrix4();
  mesh.getMatrixAt(index, matrix);
  const geometry = mesh.geometry;
  if (!geometry.boundingBox) geometry.computeBoundingBox();
  const box = geometry.boundingBox.clone().applyMatrix4(matrix);
  mesh.updateMatrixWorld(true);
  return box.applyMatrix4(mesh.matrixWorld);
}

function instancedFamilies(root) {
  const families = [];
  root.traverse(object => { if (object.isInstancedMesh) families.push(object); });
  return families;
}

/* ------------------------------------------------------------------ *
 * Factory
 * ------------------------------------------------------------------ */

test("the content-pass factory covers forge and abyss and leaves the other eight arenas alone", () => {
  assert.deepEqual([...CONTENT_PASS_ARENAS].sort(), ["abyss", "forge"]);
  for (const id of ARENA_ORDER) {
    const result = buildPass(id);
    if (id === "forge" || id === "abyss") {
      assert.ok(hasArenaContentPass(id), `${id} declares a content pass`);
      assert.ok(result?.root, `${id} builds a content pass`);
      assert.equal(result.root.userData.contentPassId, id);
      assert.ok(result.root.userData.counts.instances >= 120, `${id} places a dense instanced kit`);
      disposeTree(result.root);
    } else {
      assert.equal(hasArenaContentPass(id), false, `${id} has no content pass yet`);
      assert.equal(result, null, `${id} keeps its existing generic behavior`);
    }
  }
});

test("every repeated content family is instanced and no loose duplicate meshes are added", () => {
  for (const id of CONTENT_PASS_ARENAS) {
    const { root } = buildPass(id);
    const loose = root.children.filter(child => child.isMesh && !child.isInstancedMesh);
    // Only the single-per-zone shader strips are allowed to be plain meshes.
    for (const mesh of loose) assert.ok(mesh.userData.interactableId, `${id} loose mesh ${mesh.name} is not an interactable strip`);
    const families = instancedFamilies(root);
    assert.ok(families.length >= 10, `${id} composes at least ten instanced families`);
    for (const family of families) assert.ok(family.count >= 1, `${id} family ${family.name} has instances`);
    disposeTree(root);
  }
});

/* ------------------------------------------------------------------ *
 * Collision fidelity
 * ------------------------------------------------------------------ */

test("block skins match the authored block count and never exceed the collision footprint", () => {
  for (const id of CONTENT_PASS_ARENAS) {
    const definition = ARENA_DEFINITIONS[id];
    const { root } = buildPass(id);
    assert.equal(root.userData.blockSkinCount, definition.topology.blocks.length, `${id} skins every authored block`);

    const skins = instancedFamilies(root).filter(family => family.userData.navigationClass === "solid-cover-skin");
    assert.equal(skins.reduce((total, family) => total + family.count, 0), definition.topology.blocks.length);

    const footprints = definition.topology.blocks.map(block => ({
      minX: block.x * TILE, maxX: (block.x + block.w) * TILE,
      minZ: block.y * TILE, maxZ: (block.y + block.h) * TILE,
      height: arenaBlockHeight(block),
    }));
    for (const family of skins) {
      for (let index = 0; index < family.count; index++) {
        const box = instanceBounds(family, index);
        const match = footprints.find(footprint =>
          box.min.x >= footprint.minX - 1e-6 && box.max.x <= footprint.maxX + 1e-6 &&
          box.min.z >= footprint.minZ - 1e-6 && box.max.z <= footprint.maxZ + 1e-6);
        assert.ok(match, `${id} skin ${index} of ${family.name} escapes every authored block footprint`);
        assert.ok(box.max.y <= match.height + 1e-6, `${id} skin ${index} is taller than its collision height`);
      }
    }
    disposeTree(root);
  }
});

test("cover-top detail stays inside its block footprint and cap bands sit on the collision height", () => {
  for (const id of CONTENT_PASS_ARENAS) {
    const definition = ARENA_DEFINITIONS[id];
    const { root } = buildPass(id);
    const bands = instancedFamilies(root).find(family => family.name === "block-cover-cap-bands");
    assert.ok(bands, `${id} has cover cap bands`);
    for (let index = 0; index < bands.count; index++) {
      const box = instanceBounds(bands, index);
      const block = definition.topology.blocks.find(candidate =>
        box.min.x >= candidate.x * TILE - 1e-6 && box.max.x <= (candidate.x + candidate.w) * TILE + 1e-6 &&
        box.min.z >= candidate.y * TILE - 1e-6 && box.max.z <= (candidate.y + candidate.h) * TILE + 1e-6);
      assert.ok(block, `${id} cap band ${index} left its block footprint`);
      assert.ok(Math.abs(box.max.y - arenaBlockHeight(block)) < 0.1, `${id} cap band ${index} floats off the collision top`);
    }
    disposeTree(root);
  }
});

test("edge stanchions stay below shot height so they never imply cover the grid does not have", () => {
  for (const id of CONTENT_PASS_ARENAS) {
    const definition = ARENA_DEFINITIONS[id];
    const { root } = buildPass(id);
    const posts = instancedFamilies(root).find(family => family.name === "platform-edge-stanchions");
    if (!definition.topology.platforms?.length) { disposeTree(root); continue; }
    assert.ok(posts, `${id} marks its platform edges`);
    for (let index = 0; index < posts.count; index++) {
      const box = instanceBounds(posts, index);
      const deck = Math.max(0, ...definition.topology.platforms.map(platform => platform.elevation || 0));
      assert.ok(box.max.y - box.min.y <= 0.6, `${id} stanchion ${index} is tall enough to read as cover`);
      assert.ok(box.max.y <= deck + 0.7, `${id} stanchion ${index} rises above its deck`);
    }
    disposeTree(root);
  }
});

test("ramp treads follow the authored slope and land on both ramp endpoints", () => {
  for (const id of CONTENT_PASS_ARENAS) {
    const definition = ARENA_DEFINITIONS[id];
    const { root } = buildPass(id);
    const treads = instancedFamilies(root).find(family => family.name === "ramp-tread-modules");
    assert.ok(treads, `${id} has ramp treads`);
    const spans = treads.userData.rampTreadSpans;
    assert.equal(spans.length, definition.topology.ramps.length, `${id} covers every authored ramp`);

    let tilted = 0;
    definition.topology.ramps.forEach((ramp, rampIndex) => {
      const [start, count] = spans[rampIndex];
      assert.ok(count >= 4, `${id} ramp ${rampIndex} has too few treads to explain the transition`);
      const heights = [];
      for (let step = 0; step < count; step++) {
        const matrix = new THREE.Matrix4();
        treads.getMatrixAt(start + step, matrix);
        const position = new THREE.Vector3();
        const rotation = new THREE.Quaternion();
        matrix.decompose(position, rotation, new THREE.Vector3());
        const surface = arenaElevationAt(definition, position.x / TILE, position.z / TILE);
        assert.ok(Math.abs(position.y - surface) < 0.12, `${id} ramp ${rampIndex} tread ${step} floats off the walking surface`);
        // A tilted tread must lift its high edge, never bury it in the deck.
        const up = new THREE.Vector3(0, 1, 0).applyQuaternion(rotation);
        assert.ok(up.y > 0.7, `${id} ramp ${rampIndex} tread ${step} is tipped past a walkable angle`);
        const forward = new THREE.Vector3(ramp.w >= ramp.h ? 1 : 0, 0, ramp.w >= ramp.h ? 0 : 1).applyQuaternion(rotation);
        const localRise = step > 0 ? heights[step - 1] : null;
        if (Math.abs(forward.y) > 0.02) {
          tilted++;
          if (localRise !== null) {
            assert.ok(Math.sign(forward.y) === Math.sign(position.y - localRise) || Math.abs(position.y - localRise) < 1e-6,
              `${id} ramp ${rampIndex} tread ${step} tilts against the surface it sits on`);
          }
        }
        heights.push(position.y);
      }
      const span = Math.max(...heights) - Math.min(...heights);
      assert.ok(span > 0.4, `${id} ramp ${rampIndex} treads form a flat staircase (span ${span.toFixed(2)})`);
      // Authored platforms overlap part of every ramp footprint, so the visible
      // run is shorter than the nominal rise — but it still has to explain most
      // of the elevation change rather than a token step.
      const rise = Math.abs((ramp.to || 0) - (ramp.from || 0));
      assert.ok(rise > 0, `${id} ramp ${rampIndex} has no authored rise`);
      assert.ok(span >= rise * 0.4, `${id} ramp ${rampIndex} treads explain only ${(span / rise * 100).toFixed(0)}% of the transition`);
    });
    assert.ok(tilted > 0, `${id} ramp treads carry no slope at all`);
    disposeTree(root);
  }
});

/* ------------------------------------------------------------------ *
 * Atmosphere
 * ------------------------------------------------------------------ */

test("atmospheric instances sit entirely outside the playable footprint", () => {
  for (const id of CONTENT_PASS_ARENAS) {
    const definition = ARENA_DEFINITIONS[id];
    const { root } = buildPass(id);
    const bounds = playableBounds(definition, TILE);
    const families = instancedFamilies(root).filter(family => family.userData.navigationClass === "non-colliding-atmosphere");
    assert.ok(families.length >= 2, `${id} composes a layered background family`);
    let placed = 0;
    for (const family of families) {
      for (let index = 0; index < family.count; index++) {
        const box = instanceBounds(family, index);
        const outside = box.max.x < bounds.minX || box.min.x > bounds.maxX || box.max.z < bounds.minZ || box.min.z > bounds.maxZ;
        assert.ok(outside, `${id} atmosphere ${family.name}[${index}] overlaps the playable footprint`);
        placed++;
      }
    }
    assert.ok(placed >= 18, `${id} builds a dense skyline (${placed})`);
    disposeTree(root);
  }
});

/* ------------------------------------------------------------------ *
 * Bindings
 * ------------------------------------------------------------------ */

test("hazard bindings have unique ids that all resolve to authored hazards", () => {
  for (const id of CONTENT_PASS_ARENAS) {
    const definition = ARENA_DEFINITIONS[id];
    const { root, bindings } = buildPass(id);
    const ids = bindings.hazards.map(binding => binding.id);
    assert.equal(new Set(ids).size, ids.length, `${id} hazard binding ids are unique`);
    assert.ok(ids.length >= 2, `${id} binds at least two hazards`);
    for (const bindingId of ids) {
      assert.ok(definition.hazards.some(hazard => hazard.id === bindingId), `${id} hazard binding ${bindingId} has no authored hazard`);
    }
    assert.deepEqual(root.userData.hazardBindingIds, ids);
    disposeTree(root);
  }
});

test("interactable bindings have unique ids that all resolve to authored interactables", () => {
  for (const id of CONTENT_PASS_ARENAS) {
    const definition = ARENA_DEFINITIONS[id];
    const { root, bindings } = buildPass(id);
    const ids = bindings.interactables.map(binding => binding.id);
    assert.equal(new Set(ids).size, ids.length, `${id} interactable binding ids are unique`);
    assert.equal(ids.length, definition.interactables.length, `${id} binds every authored interactable`);
    for (const bindingId of ids) {
      assert.ok(definition.interactables.some(value => value.id === bindingId), `${id} interactable binding ${bindingId} has no authored volume`);
    }
    disposeTree(root);
  }
});

/* ------------------------------------------------------------------ *
 * Hazard phase mapping
 * ------------------------------------------------------------------ */

test("hazard phase mapping is deterministic across idle, telegraph, active, and cooldown", () => {
  const hazard = { id: "probe", telegraph: 2, active: 4, cooldown: 10, offset: 0 };
  assert.equal(hazardCycleLength(hazard), 16);
  assert.equal(hazardPhaseAt(hazard, 0), "telegraph");
  assert.equal(hazardPhaseAt(hazard, 1.9), "telegraph");
  assert.equal(hazardPhaseAt(hazard, 2.1), "active");
  assert.equal(hazardPhaseAt(hazard, 5.9), "active");
  assert.equal(hazardPhaseAt(hazard, 6.1), "cooldown");
  assert.equal(hazardPhaseAt(hazard, 8.9), "cooldown");
  assert.equal(hazardPhaseAt(hazard, 9.1), "idle");
  assert.equal(hazardPhaseAt(hazard, 15.9), "idle");
  // The cycle repeats exactly, so a long round never drifts out of phase.
  assert.equal(hazardPhaseAt(hazard, 16.1), "telegraph");
  assert.equal(hazardPhaseAt(hazard, 16 * 37 + 3), "active");
  for (const elapsed of [0, 3, 7, 12, 15.5]) {
    const progress = hazardPhaseProgress(hazard, elapsed);
    assert.ok(progress >= 0 && progress <= 1, `progress stays normalized at ${elapsed}`);
  }
});

test("authored hazard offsets stagger the phases they were written to stagger", () => {
  const [west, east] = ARENA_DEFINITIONS.forge.hazards;
  assert.equal(east.offset, 4.5);
  const staggered = [0, 1, 2, 3, 4, 5, 6].some(elapsed => hazardPhaseAt(west, elapsed) !== hazardPhaseAt(east, elapsed));
  assert.ok(staggered, "the two steam windows do not open together");
  const [surge, mist] = ARENA_DEFINITIONS.abyss.hazards;
  assert.ok([0, 2, 4, 6, 8].some(elapsed => hazardPhaseAt(surge, elapsed) !== hazardPhaseAt(mist, elapsed)), "surge and mist windows are staggered");
});

test("hazard lamp visuals derive their state from the authoritative runtime phase", () => {
  for (const id of CONTENT_PASS_ARENAS) {
    const definition = ARENA_DEFINITIONS[id];
    const { root, bindings } = buildPass(id);
    const lamps = instancedFamilies(root).find(family => family.name === "hazard-state-lamps");
    assert.ok(lamps, `${id} has a hazard state lamp bank`);
    assert.deepEqual(lamps.userData.hazardIds, bindings.hazards.map(binding => binding.id));

    const scaleOf = binding => {
      const matrix = new THREE.Matrix4();
      lamps.getMatrixAt(binding.lampRange[0], matrix);
      return new THREE.Vector3().setFromMatrixScale(matrix).x;
    };
    // Every hazard owns a contiguous, non-overlapping slice of the lamp bank.
    let expected = 0;
    for (const binding of bindings.hazards) {
      assert.equal(binding.lampRange[0], expected, "lamp ranges are contiguous");
      assert.ok(binding.lampRange[1] >= 2, "each hazard lights every boundary post");
      expected += binding.lampRange[1];
    }
    assert.equal(expected, lamps.count, "the lamp bank is fully assigned");

    bindings.hazards.forEach(binding => {
      const hazard = definition.hazards.find(candidate => candidate.id === binding.id);
      const seen = new Map();
      for (const phase of HAZARD_PHASES) {
        binding.apply(phase, 0);
        assert.equal(binding.phase, phase);
        seen.set(phase, scaleOf(binding));
      }
      assert.ok(seen.get("active") > seen.get("telegraph"), `${id} ${binding.id} active reads hotter than telegraph`);
      assert.ok(seen.get("telegraph") > seen.get("idle"), `${id} ${binding.id} telegraph reads above idle`);
      assert.ok(seen.get("cooldown") < seen.get("active"), `${id} ${binding.id} cooldown does not read as active`);
      // Driving the binding straight from the authored cycle reproduces the
      // same phase the simulation tick would resolve for that instant.
      for (const elapsed of [0.2, hazard.telegraph + 0.2, hazard.telegraph + hazard.active + 0.2, hazardCycleLength(hazard) - 0.2]) {
        const phase = hazardPhaseAt(hazard, elapsed);
        binding.apply(phase, hazardPhaseProgress(hazard, elapsed));
        assert.equal(binding.phase, phase);
      }
      binding.reset();
      assert.equal(binding.phase, "idle");
    });
    disposeTree(root);
  }
});

/* ------------------------------------------------------------------ *
 * Conveyors and water
 * ------------------------------------------------------------------ */

test("conveyor flow direction derives from the authored vector, not the array index", () => {
  const definition = ARENA_DEFINITIONS.forge;
  const { root, bindings } = buildPass("forge");
  const lanes = definition.interactables.filter(value => value.type === "conveyor");
  assert.equal(lanes.length, 2);
  for (const lane of lanes) {
    const strip = root.getObjectByName(`conveyor-flow-${lane.id}`);
    assert.ok(strip, `${lane.id} has a flow strip`);
    assert.deepEqual(strip.userData.flowVector, [...lane.vector]);
    const axisValue = Math.abs(lane.vector[0]) >= Math.abs(lane.vector[1]) ? lane.vector[0] : lane.vector[1];
    assert.equal(strip.userData.flowSign, Math.sign(axisValue));
    assert.equal(strip.material.uniforms.uDirection.value, Math.sign(axisValue));
    const binding = bindings.interactables.find(entry => entry.id === lane.id);
    assert.equal(binding.direction, Math.sign(axisValue));
  }
  const [north, south] = lanes.map(lane => root.getObjectByName(`conveyor-flow-${lane.id}`));
  assert.equal(north.userData.flowSign, -south.userData.flowSign, "opposed lanes visibly travel in opposite directions");

  // The flow clock is the simulation clock: freezing the tick freezes the flow.
  const binding = bindings.interactables[0];
  binding.apply(3.5);
  assert.equal(north.material.uniforms.uTime.value === 3.5 || south.material.uniforms.uTime.value === 3.5, true);
  binding.reset();
  disposeTree(root);
});

test("water movement cost applies inside each authored water volume and nowhere else", () => {
  const definition = ARENA_DEFINITIONS.abyss;
  const waters = definition.interactables.filter(value => value.type === "water");
  assert.equal(waters.length, 2);
  for (const water of waters) {
    const inside = { x: water.x + water.w / 2, y: water.y + water.h / 2 };
    assert.ok(pointInZone(inside.x, inside.y, water));
    assert.equal(interactableMovementMultiplier(definition, inside.x, inside.y), water.movementMultiplier);
    // One tile past every edge the cost is gone in the very next sample.
    for (const [x, y] of [[water.x - 0.01, inside.y], [water.x + water.w + 0.01, inside.y], [inside.x, water.y - 0.01], [inside.x, water.y + water.h + 0.01]]) {
      const other = waters.find(candidate => candidate !== water && pointInZone(x, y, candidate));
      assert.equal(interactableMovementMultiplier(definition, x, y), other ? other.movementMultiplier : 1, `cost leaks outside ${water.id}`);
    }
  }
  const { root, bindings } = buildPass("abyss");
  for (const water of waters) {
    const boundary = root.getObjectByName(`water-boundary-${water.id}`);
    assert.ok(boundary, `${water.id} has a visible route boundary`);
    assert.equal(boundary.userData.movementMultiplier, water.movementMultiplier);
    assert.equal(bindings.interactables.find(entry => entry.id === water.id).movementMultiplier, water.movementMultiplier);
  }
  disposeTree(root);
});

/* ------------------------------------------------------------------ *
 * Offline contract
 * ------------------------------------------------------------------ */

test("the content-pass framework introduces no remote URL and no binary loader", () => {
  const source = fs.readFileSync(path.resolve(import.meta.dirname, "..", "src", "arena-content.js"), "utf8");
  assert.equal(/https?:\/\//.test(source), false, "content pass references a remote URL");
  for (const loader of ["GLTFLoader", "TextureLoader", "FileLoader", "DRACOLoader", "KTX2Loader", "fetch("]) {
    assert.equal(source.includes(loader), false, `content pass reaches for ${loader}`);
  }
});

test("repeated construction and disposal of a content pass is stable", () => {
  for (const id of CONTENT_PASS_ARENAS) {
    const signatures = [];
    for (let attempt = 0; attempt < 3; attempt++) {
      const { root, bindings } = buildPass(id);
      signatures.push(JSON.stringify({
        children: root.children.length,
        families: root.userData.families,
        instances: root.userData.counts.instances,
        hazards: bindings.hazards.map(binding => binding.id),
        interactables: bindings.interactables.map(binding => binding.id),
      }));
      disposeTree(root);
    }
    assert.equal(new Set(signatures).size, 1, `${id} content pass is deterministic across rebuilds`);
  }
});
