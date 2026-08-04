import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

import { ARENA_DEFINITIONS, ARENA_ORDER } from "../src/arena-core.js";
import { ARENA_ASSET_VERSION, buildArenaLandmark, buildArenaLivingSet, buildArenaMaterialSet, buildExclusionReadability, buildForgeContentPass } from "../src/arena-assets.js";

const theme = Object.freeze({
  id: "forge",
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
  const materials = Array.isArray(object.material) ? object.material : [object.material];
  for (const material of materials) material?.dispose?.();
});

test("every arena has a distinct action-ready img2threejs landmark", () => {
  const signatures = new Set();
  assert.equal(ARENA_ASSET_VERSION, "2.1.0");
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

test("forge reference pass skins collision cover and stays instanced and bounded", () => {
  const definition = ARENA_DEFINITIONS.forge;
  const result = buildForgeContentPass(definition, theme);
  assert.equal(result.root.userData.assetPipeline, "forge-strategy-kit-v1");
  assert.equal(result.root.userData.blockSkinCount, definition.topology.blocks.length);
  assert.equal(result.root.userData.interactableStateCount, definition.interactables.length);
  assert.equal(result.root.userData.hazardStateCount, definition.hazards.length);
  assert.ok(result.root.userData.counts.instances >= 80, "forge has dense repeated content");
  assert.ok(result.root.userData.counts.drawCallCeiling <= 14, "forge kit draw-call ceiling is bounded");
  assert.ok(result.root.children.every(child => child.isInstancedMesh), "every repeated kit family is instanced");
  assert.equal(buildForgeContentPass(ARENA_DEFINITIONS.abyss, { ...theme, id: "abyss" }), null);
  disposeTree(result.root);
});

test("living arena kit connects each landmark to combat space with themed PBR assets", () => {
  for (const id of ARENA_ORDER) {
    const localTheme = { ...theme, id };
    const result = buildArenaLivingSet(ARENA_DEFINITIONS[id], localTheme);
    assert.equal(result.root.userData.assetPipeline, "img2threejs-living-arena-v2");
    assert.equal(result.root.userData.materialSystem, "independent-pbr-data-textures-v2");
    assert.ok(result.root.userData.assetCount >= 40, `${id} has a dense supporting prop ecology`);
    assert.equal(result.root.userData.connectionCount, 4, `${id} connects both sites and both spawns`);
    assert.ok(result.animations.length >= 10, `${id} includes ambient motion and practical light animation`);
    disposeTree(result.root);
  }
});

test("authored arena surfaces use independent color, roughness, and normal maps", () => {
  const materials = buildArenaMaterialSet(theme);
  for (const key of ["floor", "structure", "dark"]) {
    const material = materials[key];
    assert.ok(material.map && material.roughnessMap && material.normalMap, `${key} has a complete material signal`);
    assert.notEqual(material.map, material.roughnessMap);
    assert.notEqual(material.map, material.normalMap);
    assert.equal(material.map.colorSpace, "srgb");
  }
  Object.values(materials).forEach(material => material.dispose());
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
