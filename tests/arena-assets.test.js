import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

import { ARENA_DEFINITIONS, ARENA_ORDER } from "../src/arena-core.js";
import { ARENA_ASSET_VERSION, buildArenaLandmark, buildExclusionReadability } from "../src/arena-assets.js";

const theme = Object.freeze({
  wall: 0x34445c,
  outer: 0x07101e,
  wallEmissive: 0x071626,
  accentHex: 0xff8a2a,
  secondaryHex: 0x38bdf8,
});

const disposeTree = root => root.traverse(object => {
  object.geometry?.dispose?.();
  const materials = Array.isArray(object.material) ? object.material : [object.material];
  for (const material of materials) material?.dispose?.();
});

test("every arena has a distinct action-ready img2threejs landmark", () => {
  const signatures = new Set();
  assert.equal(ARENA_ASSET_VERSION, "1.0.0");
  for (const id of ARENA_ORDER) {
    const result = buildArenaLandmark(ARENA_DEFINITIONS[id], theme);
    assert.ok(result?.root, `${id} landmark builds`);
    assert.equal(result.root.userData.assetPipeline, "img2threejs-procedural-v1");
    assert.ok(result.root.userData.componentCount >= 8, `${id} has a composed silhouette`);
    assert.ok(Object.keys(result.root.userData.sculptRuntime.nodes).every(Boolean), `${id} runtime nodes are named`);
    assert.ok(Object.keys(result.root.userData.sculptRuntime.destructionGroups).length >= 2, `${id} has semantic part groups`);
    assert.ok(result.root.userData.referenceConcept.endsWith(".webp"), `${id} records its concept source`);
    assert.ok(fs.existsSync(path.resolve(import.meta.dirname, "..", result.root.userData.referenceConcept)), `${id} concept source exists`);
    const signature = [...Object.keys(result.root.userData.sculptRuntime.nodes)].sort().join("|");
    assert.ok(!signatures.has(signature), `${id} component signature is unique`);
    signatures.add(signature);
    disposeTree(result.root);
  }
  assert.equal(signatures.size, 10);
});

test("exclusion rendering differentiates voids, perimeter, boundaries, and solid cover", () => {
  for (const id of ARENA_ORDER) {
    const { root } = buildExclusionReadability(ARENA_DEFINITIONS[id], theme);
    assert.equal(root.userData.navigationReadabilityVersion, "semantic-barriers-v1");
    assert.ok(root.userData.counts.boundaryEdges > 0, `${id} exposes walkable edges`);
    assert.equal(root.userData.counts.coverBlocks, ARENA_DEFINITIONS[id].topology.blocks.length);
    const classes = new Set();
    root.traverse(object => { if (object.userData.navigationClass) classes.add(object.userData.navigationClass); });
    assert.ok(classes.has("solid-boundary"), `${id} has solid boundary curbs`);
    assert.ok(classes.has("boundary-warning-light"), `${id} has warning strips`);
    assert.ok(classes.has("solid-cover"), `${id} has cover caps`);
    if (ARENA_DEFINITIONS[id].topology.voids?.length) {
      assert.ok(classes.has("void-do-not-enter"), `${id} voids are visibly depressed`);
      assert.ok(classes.has("void-warning-beacon"), `${id} voids have shape-coded beacons`);
    }
    disposeTree(root);
  }
});
