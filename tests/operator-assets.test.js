import test from "node:test";
import assert from "node:assert/strict";

import {
  OPERATOR_ANIMATION_CONTRACT,
  OPERATOR_ASSET_BUDGETS,
  OPERATOR_ASSET_BY_ID,
  OPERATOR_ASSET_MANIFEST,
  OPERATOR_DIVISION_IDS,
  OPERATOR_LOAD_STATES,
  createOperatorAssetLoader,
  isLocalOperatorAssetPath,
  selectOperatorSource,
  validateOperatorAnimations,
  validateOperatorBudget,
  validateOperatorDefinition,
  validateOperatorHierarchy,
  validateOperatorManifest,
} from "../src/operator-assets.js";

const EXPECTED_DIVISIONS = [
  "zenflow", "collective", "hybrid", "nexus", "terra", "vital", "binary", "gaia", "vector", "animus",
  "aether", "obsidian", "kinetic", "civic", "quantum", "signal", "juris", "nomad", "eon", "cognara",
];

const node = (name, children = []) => ({ name, children });

function zenflowHierarchy({ omit = [], handAtRoot = false } = {}) {
  const keep = name => !omit.includes(name);
  const anatomy = ["head", "hand_l", "hand_r", "flight_root"]
    .filter(name => keep(name) && !(handAtRoot && name === "hand_r"))
    .map(name => node(name));
  const weapon = ["grip", "foregrip", "reload", "muzzle", "magazine"]
    .filter(keep)
    .map(name => node(name));
  const children = [node("body_root", anatomy), node("weapon_root", weapon)];
  if (handAtRoot) children.push(node("hand_r"));
  return node("operator_root", children);
}

const boundaryMetrics = () => ({
  glbBytes: 4 * 1024 * 1024,
  bones: 96,
  textures: [{ width: 2048, height: 2048, decodedBytes: 24 * 1024 * 1024 }],
  lods: [
    { level: 0, triangles: 48_000, drawCalls: 14, materials: 8 },
    { level: 1, triangles: 24_000, drawCalls: 10, materials: 6 },
    { level: 2, triangles: 8_000, drawCalls: 6, materials: 4 },
  ],
  collision: { triangles: 256, primitives: 8 },
});

function availableZenflow(overrides = {}) {
  const base = OPERATOR_ASSET_BY_ID.zenflow;
  return {
    ...base,
    ...overrides,
    asset: {
      ...base.asset,
      available: true,
      bytes: 1_024,
      sha256: "a".repeat(64),
      ...(overrides.asset || {}),
    },
  };
}

test("the authored-operator manifest covers the exact 20 live division ids", () => {
  assert.deepEqual(OPERATOR_DIVISION_IDS, EXPECTED_DIVISIONS);
  assert.deepEqual(OPERATOR_ASSET_MANIFEST.map(entry => entry.id), EXPECTED_DIVISIONS);
  assert.equal(Object.keys(OPERATOR_ASSET_BY_ID).length, 20);
  assert.deepEqual(validateOperatorManifest(OPERATOR_ASSET_MANIFEST), { valid: true, errors: [], warnings: [] });
});

test("every operator owns unique silhouette, archetype, material, and livery identities", () => {
  for (const key of ["silhouetteId", "archetypeId", "materialId", "liveryId"]) {
    const values = OPERATOR_ASSET_MANIFEST.map(entry => entry.identity[key]);
    assert.equal(values.length, 20);
    assert.equal(new Set(values).size, 20, `${key} collides across divisions`);
    assert.equal(values.every(Boolean), true, `${key} is blank`);
  }
  assert.equal(new Set(OPERATOR_ASSET_MANIFEST.map(entry => entry.dna.seed)).size, 20);
  assert.deepEqual(new Set(OPERATOR_ASSET_MANIFEST.map(entry => entry.dna.loco)), new Set(["biped", "quad", "hex", "hopper", "flyer"]));
});

test("declared GLB candidates are local, unique, and truthfully unavailable before files ship", () => {
  const paths = OPERATOR_ASSET_MANIFEST.map(entry => entry.asset.path);
  assert.equal(new Set(paths).size, 20);
  for (const entry of OPERATOR_ASSET_MANIFEST) {
    assert.equal(entry.asset.format, "glb");
    assert.equal(entry.asset.available, false, `${entry.id} claims a nonexistent authored asset`);
    assert.equal(entry.asset.bytes, null);
    assert.equal(entry.asset.sha256, null);
    assert.equal(isLocalOperatorAssetPath(entry.asset.path), true, entry.asset.path);
  }
});

test("local asset path validation rejects remote, absolute, traversal, encoded traversal, and non-GLB inputs", () => {
  const rejected = [
    "https://cdn.example/operators/zenflow.glb",
    "http://cdn.example/operators/zenflow.glb",
    "//cdn.example/operators/zenflow.glb",
    "/assets/models/operators/zenflow.glb",
    "C:/assets/models/operators/zenflow.glb",
    "assets/models/operators/../secrets.glb",
    "assets/models/operators/%2e%2e/secrets.glb",
    "assets/models/operators/%252e%252e/secrets.glb",
    "assets\\models\\operators\\zenflow.glb",
    "assets/models/operators/zenflow.gltf",
    "assets/models/operators/zenflow.glb?cache=1",
  ];
  for (const candidate of rejected) assert.equal(isLocalOperatorAssetPath(candidate), false, candidate);
  assert.equal(isLocalOperatorAssetPath("assets/models/operators/zenflow/zenflow.glb"), true);
});

test("manifest validation catches identity collisions and unsafe declared paths", () => {
  const duplicate = {
    ...OPERATOR_ASSET_BY_ID.collective,
    identity: { ...OPERATOR_ASSET_BY_ID.collective.identity, silhouetteId: OPERATOR_ASSET_BY_ID.zenflow.identity.silhouetteId },
    asset: { ...OPERATOR_ASSET_BY_ID.collective.asset, path: "https://example.invalid/collective.glb" },
  };
  const result = validateOperatorManifest(OPERATOR_ASSET_MANIFEST.map(entry => entry.id === "collective" ? duplicate : entry));
  assert.equal(result.valid, false);
  assert.ok(result.errors.some(error => error.includes("silhouetteId")));
  assert.ok(result.errors.some(error => error.includes("local .glb")));
});

test("definition validation rejects an available asset without integrity and byte metadata", () => {
  const entry = {
    ...OPERATOR_ASSET_BY_ID.zenflow,
    asset: { ...OPERATOR_ASSET_BY_ID.zenflow.asset, available: true },
  };
  const result = validateOperatorDefinition(entry);
  assert.equal(result.valid, false);
  assert.ok(result.errors.some(error => error.includes("sha256")));
  assert.ok(result.errors.some(error => error.includes("bytes")));
});

test("definition validation ties head and contact equivalents to locomotion DNA", () => {
  const entry = {
    ...OPERATOR_ASSET_BY_ID.vital,
    rig: {
      ...OPERATOR_ASSET_BY_ID.vital.rig,
      headAnchor: "head",
      groundAnchors: ["foot_l", "foot_r"],
    },
  };
  const result = validateOperatorDefinition(entry);
  assert.equal(result.valid, false);
  assert.ok(result.errors.some(error => error.includes("sensor_core")));
  assert.ok(result.errors.some(error => error.includes("hopper") && error.includes("ground_contact")));
});

test("hierarchy validation binds IK hands, weapon sockets, head, and locomotion equivalent", () => {
  const result = validateOperatorHierarchy(zenflowHierarchy(), OPERATOR_ASSET_BY_ID.zenflow);
  assert.equal(result.valid, true, result.errors.join("\n"));
  assert.equal(result.bindings.hand_r.name, "hand_r");
  assert.equal(result.bindings.foregrip.name, "foregrip");
  assert.equal(result.bindings.reload.name, "reload");
  assert.equal(result.bindings.muzzle.name, "muzzle");
  assert.equal(result.bindings.magazine.name, "magazine");
  assert.equal(result.bindings.head.name, "head");
  assert.equal(result.bindings.flight_root.name, "flight_root");
});

test("hierarchy validation rejects missing sockets and anchors outside their required parent", () => {
  const result = validateOperatorHierarchy(zenflowHierarchy({ omit: ["muzzle"], handAtRoot: true }), OPERATOR_ASSET_BY_ID.zenflow);
  assert.equal(result.valid, false);
  assert.ok(result.errors.some(error => error.includes("muzzle")));
  assert.ok(result.errors.some(error => error.includes("hand_r") && error.includes("body_root")));
});

test("hierarchy validation accepts head and foot equivalents declared by non-humanoid DNA", () => {
  const vital = node("operator_root", [
    node("body_root", [node("sensor_core"), node("hand_l"), node("hand_r"), node("ground_contact")]),
    node("weapon_root", [node("grip"), node("foregrip"), node("reload"), node("muzzle"), node("magazine")]),
  ]);
  const result = validateOperatorHierarchy(vital, OPERATOR_ASSET_BY_ID.vital);
  assert.equal(result.valid, true, result.errors.join("\n"));
  assert.equal(result.bindings.sensor_core.name, "sensor_core");
  assert.equal(result.bindings.ground_contact.name, "ground_contact");
});

test("optional action clips warn but do not invalidate idle and DNA locomotion", () => {
  assert.deepEqual(Object.keys(OPERATOR_ANIMATION_CONTRACT), ["idle", "locomotion", "fire", "reload", "death"]);
  const partial = validateOperatorAnimations(["idle", "locomotion_flyer"], OPERATOR_ASSET_BY_ID.zenflow);
  assert.equal(partial.valid, true, partial.errors.join("\n"));
  assert.equal(partial.warnings.length, 3);
  assert.ok(partial.warnings.some(warning => warning.includes("fire")));

  const missingRequired = validateOperatorAnimations(["fire", "reload", "death"], OPERATOR_ASSET_BY_ID.zenflow);
  assert.equal(missingRequired.valid, false);
  assert.ok(missingRequired.errors.some(error => error.includes("idle")));
  assert.ok(missingRequired.errors.some(error => error.includes("locomotion_flyer")));
});

test("LOD, collision, skeleton, file, and texture budgets pass at the boundary", () => {
  assert.equal(OPERATOR_ASSET_BUDGETS.lods.length, 3);
  const result = validateOperatorBudget(boundaryMetrics());
  assert.equal(result.valid, true, result.errors.join("\n"));
});

test("budget validation reports each over-budget resource and missing LOD", () => {
  const metrics = boundaryMetrics();
  metrics.glbBytes += 1;
  metrics.bones += 1;
  metrics.textures[0].width += 1;
  metrics.textures[0].decodedBytes += 1;
  metrics.lods[0].triangles += 1;
  metrics.lods[1].drawCalls += 1;
  metrics.lods = metrics.lods.filter(lod => lod.level !== 2);
  metrics.collision.triangles += 1;
  metrics.collision.primitives += 1;
  const result = validateOperatorBudget(metrics);
  assert.equal(result.valid, false);
  for (const fragment of ["GLB bytes", "bones", "texture 0 dimension", "decoded texture bytes", "LOD0 triangles", "LOD1 draw calls", "missing LOD2", "collision triangles", "collision primitives"]) {
    assert.ok(result.errors.some(error => error.includes(fragment)), `missing error for ${fragment}`);
  }
});

test("source selection is deterministic and keeps the requested division procedural while unavailable", () => {
  const first = selectOperatorSource("cognara");
  const second = selectOperatorSource("cognara");
  assert.deepEqual(first, second);
  assert.equal(first.source, "procedural");
  assert.equal(first.definition.id, "cognara");
  assert.equal(first.reason, "asset-unavailable");

  const unknown = selectOperatorSource("does-not-exist");
  assert.equal(unknown.source, "procedural");
  assert.equal(unknown.definition.id, "zenflow");
  assert.equal(unknown.reason, "unknown-division");
});

test("a missing local asset cleanly transitions to the procedural rig without invoking the GLB loader", async () => {
  const states = [];
  let glbCalls = 0;
  const definition = availableZenflow();
  const loader = createOperatorAssetLoader({
    registry: { ...OPERATOR_ASSET_BY_ID, zenflow: definition },
    assetExists: async () => false,
    loadLocalGLB: async () => { glbCalls += 1; throw new Error("must not load"); },
    createProceduralRig: entry => ({ proceduralId: entry.id }),
    onStateChange: snapshot => states.push(snapshot.state),
  });
  const result = await loader.load("zenflow");
  assert.equal(result.source, "procedural");
  assert.equal(result.reason, "asset-missing");
  assert.deepEqual(result.rig, { proceduralId: "zenflow" });
  assert.equal(glbCalls, 0);
  assert.deepEqual(states, [OPERATOR_LOAD_STATES.CHECKING, OPERATOR_LOAD_STATES.FALLBACK]);
});

test("malformed loaded hierarchy fails closed to procedural after local loading", async () => {
  const states = [];
  const definition = availableZenflow();
  const loader = createOperatorAssetLoader({
    registry: { ...OPERATOR_ASSET_BY_ID, zenflow: definition },
    assetExists: async () => true,
    loadLocalGLB: async () => ({
      scene: zenflowHierarchy({ omit: ["foregrip"] }),
      animations: ["idle", "locomotion_flyer"],
      metrics: boundaryMetrics(),
    }),
    createProceduralRig: entry => ({ proceduralId: entry.id }),
    onStateChange: snapshot => states.push(snapshot.state),
  });
  const result = await loader.load("zenflow");
  assert.equal(result.source, "procedural");
  assert.equal(result.reason, "invalid-authored-asset");
  assert.ok(result.validation.hierarchy.errors.some(error => error.includes("foregrip")));
  assert.deepEqual(states, [
    OPERATOR_LOAD_STATES.CHECKING,
    OPERATOR_LOAD_STATES.LOADING,
    OPERATOR_LOAD_STATES.VALIDATING,
    OPERATOR_LOAD_STATES.FALLBACK,
  ]);
});

test("a valid local GLB reaches ready with socket bindings and optional procedural clip fallbacks", async () => {
  const definition = availableZenflow();
  const loader = createOperatorAssetLoader({
    registry: { ...OPERATOR_ASSET_BY_ID, zenflow: definition },
    assetExists: async path => path === "assets/models/operators/zenflow/zenflow.glb",
    loadLocalGLB: async path => {
      assert.equal(path, "assets/models/operators/zenflow/zenflow.glb");
      return { scene: zenflowHierarchy(), animations: ["idle", "locomotion_flyer"], metrics: boundaryMetrics() };
    },
    createProceduralRig: () => { throw new Error("valid authored asset must not fall back"); },
  });
  const result = await loader.load("zenflow", { previewMode: true });
  assert.equal(result.source, "authored");
  assert.equal(result.state, OPERATOR_LOAD_STATES.READY);
  assert.equal(result.bindings.grip.name, "grip");
  assert.equal(result.bindings.hand_l.name, "hand_l");
  assert.equal(result.animationBindings.fire.fallback, "procedural-recoil");
  assert.equal(result.animationBindings.reload.fallback, "procedural-socket-reload");
  assert.equal(result.validation.animations.warnings.length, 3);
});

test("an unsafe custom registry path can never reach asset probing or loading", async () => {
  let touched = false;
  const definition = availableZenflow({ asset: { path: "https://cdn.invalid/zenflow.glb" } });
  const loader = createOperatorAssetLoader({
    registry: { ...OPERATOR_ASSET_BY_ID, zenflow: definition },
    assetExists: async () => { touched = true; return true; },
    loadLocalGLB: async () => { touched = true; return null; },
    createProceduralRig: entry => ({ proceduralId: entry.id }),
  });
  const result = await loader.load("zenflow");
  assert.equal(result.source, "procedural");
  assert.equal(result.reason, "unsafe-asset-path");
  assert.equal(touched, false);
});
