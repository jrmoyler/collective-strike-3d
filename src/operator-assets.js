/*
 * Offline-first authored operator contract.
 *
 * The shipped operators remain the procedural rigs in COLLECTIVE_STRIKE_3D.html.
 * This module is the gate through which a vendored GLB may replace one of them:
 * local path, DNA identity, hierarchy, clips and measured budgets must all pass
 * before an authored scene is returned. No asset in this registry exists yet,
 * so every entry is deliberately and truthfully marked unavailable.
 */

export const OPERATOR_ASSET_VERSION = "1.0.0";

export const OPERATOR_DIVISION_IDS = Object.freeze([
  "zenflow", "collective", "hybrid", "nexus", "terra", "vital", "binary", "gaia", "vector", "animus",
  "aether", "obsidian", "kinetic", "civic", "quantum", "signal", "juris", "nomad", "eon", "cognara",
]);

export const OPERATOR_ANIMATION_CONTRACT = Object.freeze({
  idle: Object.freeze({ required: true, fallback: null }),
  locomotion: Object.freeze({ required: true, fallback: null }),
  fire: Object.freeze({ required: false, fallback: "procedural-recoil" }),
  reload: Object.freeze({ required: false, fallback: "procedural-socket-reload" }),
  death: Object.freeze({ required: false, fallback: "procedural-rig-fall" }),
});

export const OPERATOR_ASSET_BUDGETS = Object.freeze({
  glbBytes: 4 * 1024 * 1024,
  bones: 96,
  textureCount: 6,
  textureDimension: 2048,
  decodedTextureBytes: 24 * 1024 * 1024,
  lods: Object.freeze([
    Object.freeze({ level: 0, triangles: 48_000, drawCalls: 14, materials: 8 }),
    Object.freeze({ level: 1, triangles: 24_000, drawCalls: 10, materials: 6 }),
    Object.freeze({ level: 2, triangles: 8_000, drawCalls: 6, materials: 4 }),
  ]),
  collision: Object.freeze({ triangles: 256, primitives: 8 }),
});

export const OPERATOR_LOAD_STATES = Object.freeze({
  IDLE: "idle",
  CHECKING: "checking",
  LOADING: "loading",
  VALIDATING: "validating",
  READY: "ready",
  FALLBACK: "fallback",
});

const LOCOMOTION_ANCHORS = Object.freeze({
  biped: Object.freeze(["foot_l", "foot_r"]),
  quad: Object.freeze(["foot_fl", "foot_fr", "foot_bl", "foot_br"]),
  hex: Object.freeze(["foot_fl", "foot_fr", "foot_ml", "foot_mr", "foot_bl", "foot_br"]),
  hopper: Object.freeze(["ground_contact"]),
  flyer: Object.freeze(["flight_root"]),
});

const deepFreeze = (value, seen = new WeakSet()) => {
  if (!value || typeof value !== "object" || seen.has(value)) return value;
  seen.add(value);
  for (const child of Object.values(value)) deepFreeze(child, seen);
  return Object.freeze(value);
};

const animationMap = loco => ({
  idle: { clip: "idle", ...OPERATOR_ANIMATION_CONTRACT.idle },
  locomotion: { clip: `locomotion_${loco}`, ...OPERATOR_ANIMATION_CONTRACT.locomotion },
  fire: { clip: "fire", ...OPERATOR_ANIMATION_CONTRACT.fire },
  reload: { clip: "reload", ...OPERATOR_ANIMATION_CONTRACT.reload },
  death: { clip: "death", ...OPERATOR_ANIMATION_CONTRACT.death },
});

const definition = ({ id, identity, dna }) => ({
  id,
  identity,
  dna,
  asset: {
    format: "glb",
    path: `assets/models/operators/${id}/${id}.glb`,
    available: false,
    unavailableReason: "not-vendored",
    bytes: null,
    sha256: null,
  },
  assembly: {
    mode: "modular-glb",
    slots: ["body", "division_material", "team_livery", "weapon_mount"],
    divisionMaterial: identity.materialId,
    teamLivery: identity.liveryId,
  },
  rig: {
    root: "operator_root",
    bodyRoot: "body_root",
    weaponRoot: "weapon_root",
    hands: ["hand_r", "hand_l"],
    weaponSockets: ["grip", "foregrip", "reload", "muzzle", "magazine"],
    headAnchor: dna.head > 0 ? "head" : "sensor_core",
    groundAnchors: [...LOCOMOTION_ANCHORS[dna.loco]],
  },
  animations: animationMap(dna.loco),
  budgets: OPERATOR_ASSET_BUDGETS,
  fallback: { source: "procedural", divisionId: id },
});

const manifest = [
  definition({
    id: "zenflow",
    identity: { silhouetteId: "levitating-tendril-manta", archetypeId: "neural-oracle", materialId: "violet-synapse-chitin", liveryId: "zenflow-lattice-violet" },
    dna: { loco: "flyer", seed: 2, cBot: "#2A1458", cTop: "#7C3AED", accent: "#3B82F6", eye: "#F5F5F5", scale: 1, body: [.66, .62], head: .44, arms: .7, tendrils: 4, wing: .9 },
  }),
  definition({
    id: "collective",
    identity: { silhouetteId: "upright-springtail-envoy", archetypeId: "mandate-broker", materialId: "emerald-amber-hide", liveryId: "collective-gilded-mandate" },
    dna: { loco: "biped", seed: 3, cBot: "#032A21", cTop: "#067A56", accent: "#FEF3C7", eye: "#FEF3C7", scale: 1.06, body: [.55, .78], head: .42, legs: .92, arms: .8, neck: .16, ears: "point", tail: "spring", belly: "#B45309" },
  }),
  definition({
    id: "hybrid",
    identity: { silhouetteId: "compact-round-eared-mentor", archetypeId: "field-tutor", materialId: "azure-lesson-shell", liveryId: "hybrid-lesson-amber" },
    dna: { loco: "biped", seed: 4, cBot: "#075985", cTop: "#0EA5E9", accent: "#FDE047", eye: "#050A18", scale: .82, body: [.52, .6], head: .55, legs: .68, arms: .62, neck: .1, ears: "round", tail: "none" },
  }),
  definition({
    id: "nexus",
    identity: { silhouetteId: "tall-mono-lens-director", archetypeId: "frame-duelist", materialId: "crimson-cinematic-carapace", liveryId: "nexus-reel-red" },
    dna: { loco: "biped", seed: 5, cBot: "#5B0F0F", cTop: "#DC2626", accent: "#F87171", eye: "#F5F5F5", scale: 1, body: [.5, .72], head: .58, legs: .9, arms: .78, neck: .18, ears: "none", tail: "none", lens: true },
  }),
  definition({
    id: "terra",
    identity: { silhouetteId: "broad-plated-quadruped", archetypeId: "foundation-bulwark", materialId: "terra-oxide-plate", liveryId: "terra-axis-blue" },
    dna: { loco: "quad", seed: 11, cBot: "#450A0A", cTop: "#8C2B2B", accent: "#DC8484", eye: "#F5F5F5", scale: 1.22, body: [.72, 1.15], head: .46, legs: .7, neck: .2, ears: "round", tail: "none", plates: true },
  }),
  definition({
    id: "vital",
    identity: { silhouetteId: "headless-helix-hopper", archetypeId: "bio-medic", materialId: "teal-serum-membrane", liveryId: "vital-helix-teal" },
    dna: { loco: "hopper", seed: 18, cBot: "#0F766E", cTop: "#14B8A6", accent: "#F97316", eye: "#F5F5F5", scale: .9, body: [.6, .78], head: 0, ears: "antenna", helix: true },
  }),
  definition({
    id: "binary",
    identity: { silhouetteId: "six-leg-loom-crawler", archetypeId: "compiler-weaver", materialId: "lime-code-carapace", liveryId: "binary-loom-mint" },
    dna: { loco: "hex", seed: 12, cBot: "#3F6212", cTop: "#A3E635", accent: "#F8FAFC", eye: "#050505", scale: .9, body: [.62, .9], head: .4, legs: .72, neck: .1, ears: "antenna", tail: "none" },
  }),
  definition({
    id: "gaia",
    identity: { silhouetteId: "shellback-growth-beast", archetypeId: "spore-warden", materialId: "verdant-harvest-shell", liveryId: "gaia-synthesis-green" },
    dna: { loco: "quad", seed: 19, cBot: "#14361F", cTop: "#2F7D4B", accent: "#C9A84C", eye: "#050A18", scale: 1, body: [.66, .9], head: .38, legs: .6, neck: .26, ears: "round", tail: "none", shell: true },
  }),
  definition({
    id: "vector",
    identity: { silhouetteId: "wide-wing-beaked-courier", archetypeId: "route-skirmisher", materialId: "silver-vector-feather", liveryId: "vector-shift-silver" },
    dna: { loco: "flyer", seed: 13, cBot: "#475569", cTop: "#CBD5E1", accent: "#F8FAFC", eye: "#D4A843", scale: 1.05, body: [.55, .78], head: .42, arms: .45, wing: 1.3, beak: true },
  }),
  definition({
    id: "animus",
    identity: { silhouetteId: "heavy-mech-biped", archetypeId: "plasma-vanguard", materialId: "cyan-kineton-armor", liveryId: "animus-prime-cyan" },
    dna: { loco: "biped", seed: 21, cBot: "#0E7490", cTop: "#22D3EE", accent: "#A5F3FC", eye: "#A5F3FC", scale: 1.18, body: [.58, .88], head: .46, legs: 1.05, arms: .92, neck: .2, ears: "antenna", tail: "none", visor: true, mech: true },
  }),
  definition({
    id: "aether",
    identity: { silhouetteId: "helmeted-signal-flier", archetypeId: "relay-scout", materialId: "copper-aether-membrane", liveryId: "aether-link-mint" },
    dna: { loco: "flyer", seed: 14, cBot: "#5C2410", cTop: "#B5451B", accent: "#F0E6D3", eye: "#F0E6D3", scale: .9, body: [.6, .62], head: .6, arms: .68, wing: .62, helmet: true },
  }),
  definition({
    id: "obsidian",
    identity: { silhouetteId: "tall-visored-sentinel", archetypeId: "ward-enforcer", materialId: "obsidian-silver-plate", liveryId: "obsidian-arc-orange" },
    dna: { loco: "biped", seed: 15, cBot: "#334155", cTop: "#E2E8F0", accent: "#EF4444", eye: "#EF4444", scale: 1.14, body: [.6, .86], head: .44, legs: 1, arms: .9, neck: .14, ears: "none", tail: "none", visor: true },
  }),
  definition({
    id: "kinetic",
    identity: { silhouetteId: "long-springtail-runner", archetypeId: "velocity-lancer", materialId: "green-kinetic-hide", liveryId: "kinetic-edge-green" },
    dna: { loco: "quad", seed: 6, cBot: "#14532D", cTop: "#16A34A", accent: "#86EFAC", eye: "#050A18", scale: 1, body: [.5, 1.05], head: .4, legs: .85, neck: .3, ears: "point", tail: "spring" },
  }),
  definition({
    id: "civic",
    identity: { silhouetteId: "pastel-dove-flier", archetypeId: "sanctuary-bearer", materialId: "pastel-civic-feather", liveryId: "civic-core-sky" },
    dna: { loco: "flyer", seed: 16, cBot: "#E9D5FF", cTop: "#F7CFCF", accent: "#BBF0C8", eye: "#1B2A4A", scale: .85, body: [.55, .6], head: .45, arms: .4, wing: 1.15, beak: true, dove: true },
  }),
  definition({
    id: "quantum",
    identity: { silhouetteId: "coin-body-hopper", archetypeId: "ledger-oracle", materialId: "violet-ledger-alloy", liveryId: "quantum-ledger-purple" },
    dna: { loco: "hopper", seed: 7, cBot: "#4C1D95", cTop: "#8B5CF6", accent: "#C4B5FD", eye: "#FDE047", scale: .96, body: [.72, .7], head: 0, ears: "antenna", coin: true },
  }),
  definition({
    id: "signal",
    identity: { silhouetteId: "razor-sprint-quadruped", archetypeId: "conversion-raider", materialId: "rose-signal-hide", liveryId: "signal-velocity-rose" },
    dna: { loco: "quad", seed: 9, cBot: "#7A1B33", cTop: "#F43F5E", accent: "#FDA4AF", eye: "#F5F5F5", scale: .92, body: [.4, 1.1], head: .36, legs: .95, neck: .34, ears: "point", tail: "spring", sprint: true },
  }),
  definition({
    id: "juris",
    identity: { silhouetteId: "browed-judgment-flier", archetypeId: "verdict-warden", materialId: "gilded-juris-feather", liveryId: "juris-guard-indigo" },
    dna: { loco: "flyer", seed: 8, cBot: "#4A3A16", cTop: "#C9A84C", accent: "#E8D9A8", eye: "#E8D9A8", scale: .95, body: [.6, .66], head: .5, arms: .5, wing: 1.05, beak: true, brows: true },
  }),
  definition({
    id: "nomad",
    identity: { silhouetteId: "humped-caravan-quadruped", archetypeId: "waypoint-navigator", materialId: "sand-nomad-hide", liveryId: "nomad-nexus-gold" },
    dna: { loco: "quad", seed: 17, cBot: "#713F12", cTop: "#D4A574", accent: "#F5DEB3", eye: "#050A18", scale: 1.08, body: [.56, 1], head: .42, legs: 1.05, neck: .5, ears: "round", tail: "spring", hump: true },
  }),
  definition({
    id: "eon",
    identity: { silhouetteId: "headless-hourglass-hopper", archetypeId: "temporal-survivor", materialId: "ivory-eon-ceramic", liveryId: "eon-core-cyan" },
    dna: { loco: "hopper", seed: 20, cBot: "#C8BCA4", cTop: "#FFFBEB", accent: "#E8DCC8", eye: "#070C14", scale: .94, body: [.62, .82], head: 0, ears: "none", hourglass: true },
  }),
  definition({
    id: "cognara",
    identity: { silhouetteId: "brain-tendril-flier", archetypeId: "mirror-empath", materialId: "magenta-cognitive-membrane", liveryId: "cognara-mind-pink" },
    dna: { loco: "flyer", seed: 10, cBot: "#6D1145", cTop: "#E0267E", accent: "#FF85C2", eye: "#F5F5F5", scale: .94, body: [.7, .6], head: .46, arms: .65, tendrils: 5, wing: .7, brain: true },
  }),
];

export const OPERATOR_ASSET_MANIFEST = deepFreeze(manifest);
export const OPERATOR_ASSET_BY_ID = deepFreeze(Object.fromEntries(OPERATOR_ASSET_MANIFEST.map(entry => [entry.id, entry])));

const result = (errors, warnings = [], extra = {}) => ({ valid: errors.length === 0, errors, warnings, ...extra });

/**
 * Accept only repository-relative, lower-case GLBs under the operator asset
 * root. Repeated decoding catches both ordinary and double-encoded traversal.
 */
export function isLocalOperatorAssetPath(candidate) {
  if (typeof candidate !== "string" || !candidate || candidate.trim() !== candidate) return false;
  let value = candidate;
  try {
    for (let index = 0; index < 4; index++) {
      const decoded = decodeURIComponent(value);
      if (decoded === value) break;
      value = decoded;
    }
  } catch {
    return false;
  }
  if (/\\|[?#\0-\x1f]/.test(value)) return false;
  if (/^[a-z][a-z\d+.-]*:/i.test(value) || value.startsWith("/") || value.startsWith("//")) return false;
  if (!value.startsWith("assets/models/operators/") || !value.endsWith(".glb")) return false;
  if (!/^[a-z0-9/_-]+\.glb$/.test(value)) return false;
  const segments = value.split("/");
  return segments.every(segment => segment && segment !== "." && segment !== "..");
}

export function validateOperatorDefinition(entry) {
  const errors = [], warnings = [];
  if (!entry || typeof entry !== "object") return result(["operator definition must be an object"]);
  if (!OPERATOR_DIVISION_IDS.includes(entry.id)) errors.push(`unknown operator id: ${entry.id || "<missing>"}`);

  for (const key of ["silhouetteId", "archetypeId", "materialId", "liveryId"]) {
    if (typeof entry.identity?.[key] !== "string" || !entry.identity[key]) errors.push(`${entry.id || "operator"} identity.${key} is required`);
  }
  if (!LOCOMOTION_ANCHORS[entry.dna?.loco]) errors.push(`${entry.id || "operator"} has unsupported DNA locomotion`);
  if (!Number.isInteger(entry.dna?.seed) || entry.dna.seed < 1) errors.push(`${entry.id || "operator"} DNA seed must be a positive integer`);
  if (!Array.isArray(entry.dna?.body) || entry.dna.body.length !== 2) errors.push(`${entry.id || "operator"} DNA body proportions are required`);

  if (entry.asset?.format !== "glb" || !isLocalOperatorAssetPath(entry.asset?.path)) {
    errors.push(`${entry.id || "operator"} asset must use a local .glb path under assets/models/operators/`);
  }
  if (typeof entry.asset?.available !== "boolean") errors.push(`${entry.id || "operator"} asset.available must be boolean`);
  if (entry.asset?.available) {
    if (!Number.isInteger(entry.asset.bytes) || entry.asset.bytes <= 0) errors.push(`${entry.id} available asset bytes must be a positive integer`);
    if (!/^[a-f\d]{64}$/i.test(entry.asset.sha256 || "")) errors.push(`${entry.id} available asset sha256 must be a 64-character digest`);
  } else if (!entry.asset?.unavailableReason) {
    warnings.push(`${entry.id} unavailable asset has no reason`);
  }

  const rig = entry.rig || {};
  for (const [key, expected] of [["root", "operator_root"], ["bodyRoot", "body_root"], ["weaponRoot", "weapon_root"]]) {
    if (rig[key] !== expected) errors.push(`${entry.id || "operator"} rig.${key} must be ${expected}`);
  }
  for (const name of ["hand_r", "hand_l"]) if (!rig.hands?.includes(name)) errors.push(`${entry.id || "operator"} rig is missing ${name}`);
  for (const name of ["grip", "foregrip", "reload", "muzzle", "magazine"]) if (!rig.weaponSockets?.includes(name)) errors.push(`${entry.id || "operator"} rig is missing ${name}`);
  const expectedHead = entry.dna?.head > 0 ? "head" : "sensor_core";
  if (rig.headAnchor !== expectedHead) errors.push(`${entry.id || "operator"} DNA requires ${expectedHead} as its head equivalent`);
  const expectedGround = LOCOMOTION_ANCHORS[entry.dna?.loco] || [];
  if (!Array.isArray(rig.groundAnchors)
    || rig.groundAnchors.length !== expectedGround.length
    || expectedGround.some((name, index) => rig.groundAnchors[index] !== name)) {
    errors.push(`${entry.id || "operator"} ${entry.dna?.loco || "unknown"} DNA requires ground anchors ${expectedGround.join(", ")}`);
  }

  for (const capability of Object.keys(OPERATOR_ANIMATION_CONTRACT)) {
    const clip = entry.animations?.[capability];
    if (!clip || typeof clip.clip !== "string") errors.push(`${entry.id || "operator"} animation contract is missing ${capability}`);
  }
  return result(errors, warnings);
}

export function validateOperatorManifest(entries) {
  const errors = [], warnings = [];
  if (!Array.isArray(entries)) return result(["operator manifest must be an array"]);
  if (entries.length !== 20) errors.push(`operator manifest must contain exactly 20 entries (found ${entries.length})`);

  const ids = entries.map(entry => entry?.id);
  for (const id of OPERATOR_DIVISION_IDS) {
    const count = ids.filter(candidate => candidate === id).length;
    if (count !== 1) errors.push(`operator id ${id} must appear exactly once (found ${count})`);
  }
  for (const id of ids) if (id && !OPERATOR_DIVISION_IDS.includes(id)) errors.push(`unexpected operator id: ${id}`);

  for (const entry of entries) {
    const validation = validateOperatorDefinition(entry);
    errors.push(...validation.errors);
    warnings.push(...validation.warnings);
  }
  for (const key of ["silhouetteId", "archetypeId", "materialId", "liveryId"]) {
    const seen = new Map();
    for (const entry of entries) {
      const value = entry?.identity?.[key];
      if (!value) continue;
      if (seen.has(value)) errors.push(`${key} must be unique: ${value} is shared by ${seen.get(value)} and ${entry.id}`);
      else seen.set(value, entry.id);
    }
  }
  const seenPaths = new Map();
  for (const entry of entries) {
    const assetPath = entry?.asset?.path;
    if (!assetPath) continue;
    if (seenPaths.has(assetPath)) errors.push(`operator asset path must be unique: ${assetPath}`);
    else seenPaths.set(assetPath, entry.id);
  }
  return result(errors, warnings);
}

function hierarchyIndex(root) {
  const errors = [], nodes = Object.create(null), parentByName = Object.create(null);
  if (!root || typeof root !== "object") return { errors: ["loaded operator scene is missing"], nodes, parentByName };
  const stack = [{ current: root, parent: null }], visited = new WeakSet();
  while (stack.length) {
    const { current, parent } = stack.pop();
    if (!current || typeof current !== "object") continue;
    if (visited.has(current)) { errors.push("operator hierarchy contains a cycle or shared node"); continue; }
    visited.add(current);
    const name = typeof current.name === "string" ? current.name.trim() : "";
    if (name) {
      if (nodes[name]) errors.push(`operator hierarchy contains duplicate node ${name}`);
      else {
        nodes[name] = current;
        parentByName[name] = parent;
      }
    }
    const children = Array.isArray(current.children) ? current.children : [];
    for (let index = children.length - 1; index >= 0; index--) stack.push({ current: children[index], parent: name || parent });
  }
  return { errors, nodes, parentByName };
}

export function validateOperatorHierarchy(root, entryOrId) {
  const entry = typeof entryOrId === "string" ? OPERATOR_ASSET_BY_ID[entryOrId] : entryOrId;
  const indexed = hierarchyIndex(root), errors = [...indexed.errors], warnings = [];
  if (!entry) return result([...errors, "operator definition is missing"], warnings, { bindings: indexed.nodes });
  const { nodes, parentByName } = indexed, rig = entry.rig;
  const required = [rig.root, rig.bodyRoot, rig.weaponRoot, ...rig.hands, ...rig.weaponSockets, rig.headAnchor, ...rig.groundAnchors];
  for (const name of required) if (!nodes[name]) errors.push(`${entry.id} hierarchy is missing ${name}`);

  const isUnder = (name, ancestor) => {
    let parent = parentByName[name], guard = 0;
    while (parent && guard++ < 256) {
      if (parent === ancestor) return true;
      parent = parentByName[parent];
    }
    return false;
  };
  for (const name of [rig.bodyRoot, rig.weaponRoot]) {
    if (nodes[name] && nodes[rig.root] && !isUnder(name, rig.root)) errors.push(`${name} must be under ${rig.root}`);
  }
  for (const name of [...rig.hands, rig.headAnchor, ...rig.groundAnchors]) {
    if (nodes[name] && nodes[rig.bodyRoot] && !isUnder(name, rig.bodyRoot)) errors.push(`${name} must be under ${rig.bodyRoot}`);
  }
  for (const name of rig.weaponSockets) {
    if (nodes[name] && nodes[rig.weaponRoot] && !isUnder(name, rig.weaponRoot)) errors.push(`${name} must be under ${rig.weaponRoot}`);
  }
  return result(errors, warnings, { bindings: nodes });
}

export function validateOperatorAnimations(clips, entryOrId) {
  const entry = typeof entryOrId === "string" ? OPERATOR_ASSET_BY_ID[entryOrId] : entryOrId;
  const errors = [], warnings = [], clipByName = Object.create(null), bindings = Object.create(null);
  if (!entry) return result(["operator definition is missing"], warnings, { bindings });
  if (!Array.isArray(clips)) clips = [];
  for (const clip of clips) {
    const name = typeof clip === "string" ? clip : clip?.name;
    if (!name) { errors.push(`${entry.id} contains an unnamed animation clip`); continue; }
    if (clipByName[name]) errors.push(`${entry.id} contains duplicate animation clip ${name}`);
    else clipByName[name] = clip;
  }
  for (const [capability, contract] of Object.entries(entry.animations)) {
    const authored = clipByName[contract.clip] ?? null;
    bindings[capability] = { clip: authored, clipName: contract.clip, required: contract.required, fallback: contract.fallback };
    if (!authored && contract.required) errors.push(`${entry.id} is missing required ${capability} clip ${contract.clip}`);
    else if (!authored) warnings.push(`${entry.id} optional ${capability} clip ${contract.clip} is absent; using ${contract.fallback}`);
  }
  return result(errors, warnings, { bindings });
}

const exceeds = (value, limit) => !Number.isFinite(value) || value < 0 || value > limit;

export function validateOperatorBudget(metrics, budgets = OPERATOR_ASSET_BUDGETS) {
  const errors = [], warnings = [];
  if (!metrics || typeof metrics !== "object") return result(["operator metrics report is missing"]);
  if (exceeds(metrics.glbBytes, budgets.glbBytes)) errors.push(`GLB bytes exceed ${budgets.glbBytes}`);
  if (exceeds(metrics.bones, budgets.bones)) errors.push(`bones exceed ${budgets.bones}`);

  const textures = Array.isArray(metrics.textures) ? metrics.textures : [];
  if (!textures.length) errors.push("texture metrics are missing");
  if (textures.length > budgets.textureCount) errors.push(`texture count exceeds ${budgets.textureCount}`);
  let decodedBytes = 0;
  textures.forEach((texture, index) => {
    if (exceeds(texture?.width, budgets.textureDimension) || exceeds(texture?.height, budgets.textureDimension)) {
      errors.push(`texture ${index} dimension exceeds ${budgets.textureDimension}`);
    }
    if (!Number.isFinite(texture?.decodedBytes) || texture.decodedBytes < 0) errors.push(`texture ${index} decoded bytes are invalid`);
    else decodedBytes += texture.decodedBytes;
  });
  if (decodedBytes > budgets.decodedTextureBytes) errors.push(`decoded texture bytes exceed ${budgets.decodedTextureBytes}`);

  const lods = Array.isArray(metrics.lods) ? metrics.lods : [];
  for (const budget of budgets.lods) {
    const lod = lods.find(candidate => candidate?.level === budget.level);
    if (!lod) { errors.push(`missing LOD${budget.level}`); continue; }
    if (exceeds(lod.triangles, budget.triangles)) errors.push(`LOD${budget.level} triangles exceed ${budget.triangles}`);
    if (exceeds(lod.drawCalls, budget.drawCalls)) errors.push(`LOD${budget.level} draw calls exceed ${budget.drawCalls}`);
    if (exceeds(lod.materials, budget.materials)) errors.push(`LOD${budget.level} materials exceed ${budget.materials}`);
  }
  const levelSet = new Set(lods.map(lod => lod?.level));
  if (levelSet.size !== lods.length) errors.push("LOD levels must be unique");

  if (!metrics.collision || typeof metrics.collision !== "object") errors.push("collision metrics are missing");
  else {
    if (exceeds(metrics.collision.triangles, budgets.collision.triangles)) errors.push(`collision triangles exceed ${budgets.collision.triangles}`);
    if (exceeds(metrics.collision.primitives, budgets.collision.primitives)) errors.push(`collision primitives exceed ${budgets.collision.primitives}`);
  }
  return result(errors, warnings);
}

const registryEntry = (registry, id) => registry instanceof Map ? registry.get(id) : registry?.[id];

export function selectOperatorSource(divisionId, options = {}) {
  const registry = options.registry || OPERATOR_ASSET_BY_ID;
  const fallbackId = registryEntry(registry, options.fallbackDivisionId || "zenflow")
    ? options.fallbackDivisionId || "zenflow"
    : OPERATOR_DIVISION_IDS.find(id => registryEntry(registry, id));
  const requested = registryEntry(registry, divisionId);
  const entry = requested || registryEntry(registry, fallbackId);
  if (!entry) return { source: "procedural", definition: null, reason: "manifest-empty" };
  if (!requested) return { source: "procedural", definition: entry, reason: "unknown-division" };
  if (options.preferAuthored === false) return { source: "procedural", definition: entry, reason: "procedural-preferred" };
  if (!entry.asset?.available) return { source: "procedural", definition: entry, reason: "asset-unavailable" };
  if (!isLocalOperatorAssetPath(entry.asset.path)) return { source: "procedural", definition: entry, reason: "unsafe-asset-path" };
  const validation = validateOperatorDefinition(entry);
  if (!validation.valid) return { source: "procedural", definition: entry, reason: "invalid-definition", validation };
  return { source: "authored", definition: entry, path: entry.asset.path, reason: "declared-available" };
}

/**
 * Dependency-injected state machine. It contains no network primitive: the
 * integration owns a same-origin GLTFLoader adapter and an optional local file
 * probe. Every failure ends in the existing makeRig path supplied as
 * createProceduralRig.
 */
export function createOperatorAssetLoader(options = {}) {
  const registry = options.registry || OPERATOR_ASSET_BY_ID;
  let current = Object.freeze({ state: OPERATOR_LOAD_STATES.IDLE, divisionId: null });
  const transition = (state, divisionId, details = {}) => {
    current = Object.freeze({ state, divisionId, ...details });
    try { options.onStateChange?.(current); } catch { /* observers cannot break loading */ }
    return current;
  };

  const procedural = async (definition, divisionId, context, reason, details = {}) => {
    transition(OPERATOR_LOAD_STATES.FALLBACK, definition?.id || divisionId, { reason });
    let rig = null, fallbackError = null;
    try { rig = await options.createProceduralRig?.(definition, context, reason); }
    catch (error) { fallbackError = error; }
    return {
      source: "procedural",
      state: OPERATOR_LOAD_STATES.FALLBACK,
      divisionId: definition?.id || divisionId,
      definition,
      reason,
      rig,
      fallbackError,
      ...details,
    };
  };

  return Object.freeze({
    get state() { return current.state; },
    getState() { return current; },
    async load(divisionId, context = {}) {
      transition(OPERATOR_LOAD_STATES.CHECKING, divisionId);
      const selection = selectOperatorSource(divisionId, {
        registry,
        preferAuthored: context.preferAuthored ?? options.preferAuthored,
        fallbackDivisionId: options.fallbackDivisionId,
      });
      if (selection.source !== "authored") {
        return procedural(selection.definition, divisionId, context, selection.reason, selection.validation ? { validation: selection.validation } : {});
      }

      const { definition, path } = selection;
      if (typeof options.assetExists === "function") {
        let exists;
        try { exists = await options.assetExists(path, definition, context); }
        catch (error) { return procedural(definition, divisionId, context, "asset-probe-failed", { error }); }
        if (!exists) return procedural(definition, divisionId, context, "asset-missing");
      }
      if (typeof options.loadLocalGLB !== "function") return procedural(definition, divisionId, context, "loader-unconfigured");

      transition(OPERATOR_LOAD_STATES.LOADING, definition.id, { path });
      let loaded;
      try { loaded = await options.loadLocalGLB(path, definition, context); }
      catch (error) { return procedural(definition, divisionId, context, "asset-load-failed", { error }); }

      transition(OPERATOR_LOAD_STATES.VALIDATING, definition.id, { path });
      const hierarchy = validateOperatorHierarchy(loaded?.scene, definition);
      const animations = validateOperatorAnimations(loaded?.animations, definition);
      const budget = validateOperatorBudget(loaded?.metrics, definition.budgets || OPERATOR_ASSET_BUDGETS);
      const validation = { hierarchy, animations, budget };
      if (!hierarchy.valid || !animations.valid || !budget.valid) {
        try { await options.disposeAuthoredAsset?.(loaded, definition); } catch { /* fallback remains authoritative */ }
        return procedural(definition, divisionId, context, "invalid-authored-asset", { validation });
      }

      transition(OPERATOR_LOAD_STATES.READY, definition.id, { path });
      return {
        source: "authored",
        state: OPERATOR_LOAD_STATES.READY,
        divisionId: definition.id,
        definition,
        scene: loaded.scene,
        animations: loaded.animations,
        metrics: loaded.metrics,
        bindings: hierarchy.bindings,
        animationBindings: animations.bindings,
        validation,
      };
    },
  });
}
