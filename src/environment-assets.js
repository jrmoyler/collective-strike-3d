/*
 * Collective Strike 3D modular environment layer.
 *
 * Kenney GLBs are loaded through GLTFLoader from an embedded offline catalog.
 * The same manifest keeps relative paths available for a normal hosted build.
 * This module only dresses the immutable tactical grid; it never mutates
 * collision, sites, spawns, pathfinding, or gameplay state.
 */
(function () {
  "use strict";

  const THREE = window.THREE;
  const catalog = window.CS3D_ENV_CATALOG?.models || {};
  const textures = window.CS3D_ENV_CATALOG?.textures || {};
  const modelCache = new Map();
  let requestRevision = 0;
  let environmentTexture = null;

  const PROFILE = {
    forge: {
      pack: "space",
      wall: 0x596575,
      emissive: 0x160c04,
      roughness: 0.38,
      metalness: 0.76,
      gate: "space/gate",
      detail: "space/template-wall-detail-a"
    },
    neon: {
      pack: "space",
      wall: 0x47385f,
      emissive: 0x290d35,
      roughness: 0.27,
      metalness: 0.64,
      gate: "space/gate",
      detail: "space/template-wall-detail-a"
    },
    cryo: {
      pack: "cave",
      wall: 0x9bb7c9,
      emissive: 0x123e57,
      roughness: 0.24,
      metalness: 0.18,
      gate: "cave/gate-rock",
      detail: "cave/template-wall-detail-a"
    },
    verdant: {
      pack: "cave",
      wall: 0x4a654c,
      emissive: 0x0c2e17,
      roughness: 0.84,
      metalness: 0.04,
      gate: "cave/gate-rock",
      detail: "cave/template-wall-detail-a"
    }
  };

  function decodeBase64(value) {
    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
  }

  function disposeParsedScene(root) {
    root.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of materials) material?.dispose?.();
    });
  }

  function normalizeModel(scene) {
    scene.updateMatrixWorld(true);
    let source = null;
    scene.traverse((object) => {
      if (!source && object.isMesh) source = object;
    });
    if (!source) throw new Error("GLB contains no mesh");

    const geometry = source.geometry.clone();
    geometry.applyMatrix4(source.matrixWorld);
    // Kenney exports can retain many source-material groups even when the
    // runtime intentionally uses one arena material. Collapse them so each
    // InstancedMesh remains one draw call instead of one call per source group.
    geometry.clearGroups();
    const indexCount = geometry.index?.count || geometry.attributes.position.count;
    geometry.addGroup(0, indexCount, 0);
    if (!geometry.attributes.normal) geometry.computeVertexNormals();
    geometry.computeBoundingBox();
    geometry.userData.shared = true;

    const sourceMaterial = Array.isArray(source.material) ? source.material[0] : source.material;
    const material = sourceMaterial?.clone?.() || new THREE.MeshStandardMaterial();
    disposeParsedScene(scene);
    return { geometry, material };
  }

  function loadModel(id) {
    if (modelCache.has(id)) return modelCache.get(id);
    const entry = catalog[id];
    if (!entry) return Promise.reject(new Error(`Unknown environment asset: ${id}`));

    const promise = new Promise((resolve, reject) => {
      const pack = id.split("/")[0];
      const manager = new THREE.LoadingManager();
      manager.setURLModifier((url) =>
        /Textures\/colormap\.png(?:$|\?)/.test(url) && textures[pack]?.data
          ? textures[pack].data
          : url
      );
      const loader = new THREE.GLTFLoader(manager);
      const done = (gltf) => {
        try {
          resolve(normalizeModel(gltf.scene));
        } catch (error) {
          reject(error);
        }
      };
      if (entry.data) {
        loader.parse(
          decodeBase64(entry.data),
          `assets/environments/kenney/${pack}/`,
          done,
          reject
        );
      } else {
        loader.load(entry.path, done, undefined, reject);
      }
    });
    modelCache.set(id, promise);
    return promise;
  }

  function cloneTexture(texture) {
    if (!texture) return null;
    const clone = texture.clone();
    clone.needsUpdate = true;
    return clone;
  }

  function themedMaterial(base, profile, theme, role = "wall") {
    const material = base?.clone?.() || new THREE.MeshStandardMaterial();
    for (const key of [
      "map",
      "normalMap",
      "roughnessMap",
      "metalnessMap",
      "emissiveMap",
      "alphaMap"
    ]) {
      if (material[key]) material[key] = cloneTexture(material[key]);
    }
    material.color?.setHex(role === "accent" ? theme.accentHex : profile.wall);
    if ("roughness" in material) material.roughness = profile.roughness;
    if ("metalness" in material) material.metalness = profile.metalness;
    if (material.emissive) {
      material.emissive.setHex(role === "accent" ? theme.secondaryHex : profile.emissive);
      material.emissiveIntensity = role === "accent" ? 0.32 : 0.18;
    }
    material.envMapIntensity = role === "accent" ? 1.1 : 0.82;
    material.needsUpdate = true;
    return material;
  }

  function exposedFaces(grid, mapWidth, mapHeight, tileScale) {
    const faces = [];
    const isSolid = (x, z) =>
      x < 0 || z < 0 || x >= mapWidth || z >= mapHeight || grid[z][x] === 1;
    for (let z = 0; z < mapHeight; z++) {
      for (let x = 0; x < mapWidth; x++) {
        if (!isSolid(x, z)) continue;
        if (!isSolid(x, z - 1)) {
          faces.push({ x: (x + 0.5) * tileScale, z: z * tileScale, rotation: 0 });
        }
        if (!isSolid(x, z + 1)) {
          faces.push({
            x: (x + 0.5) * tileScale,
            z: (z + 1) * tileScale,
            rotation: Math.PI
          });
        }
        if (!isSolid(x - 1, z)) {
          faces.push({
            x: x * tileScale,
            z: (z + 0.5) * tileScale,
            rotation: Math.PI / 2
          });
        }
        if (!isSolid(x + 1, z)) {
          faces.push({
            x: (x + 1) * tileScale,
            z: (z + 0.5) * tileScale,
            rotation: -Math.PI / 2
          });
        }
      }
    }
    return faces;
  }

  function addInstances(group, name, model, material, transforms) {
    if (!transforms.length) return null;
    const instances = new THREE.InstancedMesh(model.geometry, material, transforms.length);
    instances.name = name;
    instances.castShadow = true;
    instances.receiveShadow = true;
    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3(1, 1, 1);
    const euler = new THREE.Euler();
    transforms.forEach((transform, index) => {
      position.set(transform.x, transform.y || 0, transform.z);
      euler.set(0, transform.rotation || 0, 0);
      quaternion.setFromEuler(euler);
      scale.setScalar(transform.scale || 1);
      matrix.compose(position, quaternion, scale);
      instances.setMatrixAt(index, matrix);
    });
    instances.instanceMatrix.needsUpdate = true;
    group.add(instances);
    return instances;
  }

  function cloneProp(model, material, transform, name) {
    const mesh = new THREE.Mesh(model.geometry, material.clone());
    mesh.name = name;
    mesh.position.set(transform.x, transform.y || 0, transform.z);
    mesh.rotation.y = transform.rotation || 0;
    mesh.scale.setScalar(transform.scale || 1);
    mesh.castShadow = mesh.receiveShadow = true;
    return mesh;
  }

  function addGates(group, model, material, tileScale) {
    const gates = [
      [12, 9.5, 0],
      [24, 9.5, 0],
      [12, 20, 0],
      [24, 20, 0],
      [18, 10, Math.PI / 2],
      [18, 17, Math.PI / 2]
    ].map(([x, z, rotation]) => ({
      x: x * tileScale,
      z: z * tileScale,
      rotation
    }));
    addInstances(group, "kenney-gate-arches", model, material, gates);
  }

  function addIndustrialProps(group, theme, loaded, tileScale, mapWidth, mapHeight) {
    const chimney = loaded.get("industrial/chimney-large");
    const tank = loaded.get("industrial/detail-tank");
    const buildingH = loaded.get("industrial/building-h");
    const buildingK = loaded.get("industrial/building-k");
    const accentProfile = PROFILE[theme.architecture];
    const metal = themedMaterial(chimney.material, accentProfile, theme);
    const stacks = [
      [-2.2, 4, 3.2],
      [mapWidth + 2.2, 5, 3.5],
      [-2.3, mapHeight - 5, 3.4],
      [mapWidth + 2.5, mapHeight - 6, 3.1]
    ].map(([x, z, scale]) => ({ x: x * tileScale, z: z * tileScale, scale }));
    addInstances(group, "kenney-industrial-stacks", chimney, metal, stacks);

    const tankMaterial = themedMaterial(tank.material, accentProfile, theme, "accent");
    addInstances(
      group,
      "kenney-industrial-tanks",
      tank,
      tankMaterial,
      [
        [3, 3],
        [mapWidth - 3, 3],
        [3, mapHeight - 3],
        [mapWidth - 3, mapHeight - 3]
      ].map(([x, z]) => ({ x: x * tileScale, z: z * tileScale, scale: 2.4 }))
    );

    const skyline = [
      [-7, 3, 0, 10, buildingH],
      [mapWidth + 7, 5, Math.PI, 11, buildingK],
      [-8, mapHeight - 4, 0.4, 12, buildingK],
      [mapWidth + 8, mapHeight - 3, -0.3, 10, buildingH]
    ];
    skyline.forEach(([x, z, rotation, scale, model], index) => {
      const material = themedMaterial(model.material, accentProfile, theme);
      group.add(
        cloneProp(
          model,
          material,
          { x: x * tileScale, z: z * tileScale, rotation, scale },
          `kenney-industrial-building-${index}`
        )
      );
      material.dispose();
    });
  }

  function addCaveProps(group, theme, loaded, tileScale, mapWidth, mapHeight) {
    const detail = loaded.get("cave/template-detail");
    const floor = loaded.get("cave/template-floor-layer");
    const profile = PROFILE[theme.architecture];
    const detailMaterial = themedMaterial(detail.material, profile, theme, "accent");
    const details = [
      [1.5, 2, 0],
      [mapWidth - 1.5, 2, Math.PI],
      [1.5, mapHeight - 2, 0],
      [mapWidth - 1.5, mapHeight - 2, Math.PI]
    ].map(([x, z, rotation]) => ({ x: x * tileScale, z: z * tileScale, rotation }));
    addInstances(group, "kenney-cave-columns", detail, detailMaterial, details);

    const skirtMaterial = themedMaterial(floor.material, profile, theme);
    const skirt = [
      [-1.5, 2],
      [mapWidth + 1.5, 2],
      [-1.5, mapHeight - 2],
      [mapWidth + 1.5, mapHeight - 2]
    ].map(([x, z]) => ({ x: x * tileScale, y: -0.12, z: z * tileScale, scale: 1.7 }));
    addInstances(group, "kenney-cave-skirt", floor, skirtMaterial, skirt);
  }

  async function apply(options) {
    if (!THREE?.GLTFLoader) return false;
    const {
      group,
      theme,
      grid,
      mapWidth,
      mapHeight,
      tileScale
    } = options;
    const revision = ++requestRevision;
    group.userData.modularAssets = "loading";
    const profile = PROFILE[theme.architecture] || PROFILE.forge;
    const required = new Set([
      `${profile.pack}/template-wall`,
      profile.detail,
      profile.gate
    ]);
    if (profile.pack === "space") {
      [
        "industrial/chimney-large",
        "industrial/detail-tank",
        "industrial/building-h",
        "industrial/building-k"
      ].forEach((id) => required.add(id));
    } else {
      ["cave/template-detail", "cave/template-floor-layer"].forEach((id) => required.add(id));
    }

    try {
      const entries = await Promise.all(
        [...required].map(async (id) => [id, await loadModel(id)])
      );
      if (revision !== requestRevision || group.userData.envCancelled || !group.parent) {
        return false;
      }
      const loaded = new Map(entries);
      const shell = new THREE.Group();
      shell.name = `kenney-${theme.architecture}-environment`;
      shell.userData.source = "Kenney CC0 modular GLBs";
      const faces = exposedFaces(grid, mapWidth, mapHeight, tileScale);
      const standardFaces = faces.filter((_, index) => index % 7 !== 0);
      const detailFaces = faces.filter((_, index) => index % 7 === 0);
      const wall = loaded.get(`${profile.pack}/template-wall`);
      const detail = loaded.get(profile.detail);
      addInstances(
        shell,
        "kenney-grid-wall-shell",
        wall,
        themedMaterial(wall.material, profile, theme),
        standardFaces
      );
      addInstances(
        shell,
        "kenney-grid-wall-details",
        detail,
        themedMaterial(detail.material, profile, theme, "accent"),
        detailFaces
      );
      const gate = loaded.get(profile.gate);
      addGates(shell, gate, themedMaterial(gate.material, profile, theme, "accent"), tileScale);
      if (profile.pack === "space") {
        addIndustrialProps(shell, theme, loaded, tileScale, mapWidth, mapHeight);
      } else {
        addCaveProps(shell, theme, loaded, tileScale, mapWidth, mapHeight);
      }
      group.add(shell);
      group.userData.modularAssets = "ready";
      group.userData.modularInstanceCount = faces.length + 14;
      return true;
    } catch (error) {
      group.userData.modularAssets = "fallback";
      group.userData.modularAssetError = error.message;
      return false;
    }
  }

  function configureEnvironment(renderer, scene) {
    if (!THREE?.RoomEnvironment || environmentTexture) return environmentTexture;
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new THREE.RoomEnvironment();
    environmentTexture = pmrem.fromScene(room, 0.04).texture;
    environmentTexture.name = "CS3D neutral room IBL";
    room.dispose();
    pmrem.dispose();
    scene.environment = environmentTexture;
    return environmentTexture;
  }

  function applyEnvironmentTheme(scene, theme) {
    if (environmentTexture) scene.environment = environmentTexture;
    scene.environmentIntensity = theme.environmentIntensity ?? 0.8;
  }

  function release(group) {
    requestRevision++;
    if (group) group.userData.envCancelled = true;
  }

  window.CS3D_ENV = {
    apply,
    applyEnvironmentTheme,
    configureEnvironment,
    release,
    catalogSize: Object.keys(catalog).length
  };
})();
