import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = path.resolve(import.meta.dirname, "..");
const failures = [];
let checks = 0;
const assert = (condition, message) => {
  checks++;
  if (condition) console.log(`✓ ${message}`);
  else failures.push(message);
};
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const packageJson = JSON.parse(read("package.json"));
const app = read("src/App.jsx");
const game = read("src/game/GameWorld.jsx");
const operator = read("src/game/models/Operator.jsx");
const weapon = read("src/game/models/Weapon.jsx");
const dungeon = read("src/game/Dungeon.jsx");
const materials = read("src/game/materials.js");
const store = read("src/store.js");
const data = read("src/data/operators.js");

for (const dependency of [
  "three",
  "@react-three/fiber",
  "@react-three/drei",
  "@react-three/postprocessing",
  "@react-three/rapier",
  "animejs",
  "zustand"
]) assert(Boolean(packageJson.dependencies[dependency]), `${dependency} is pinned`);

assert(/<Canvas/.test(app), "React Three Fiber Canvas is mounted");
assert(/ACESFilmicToneMapping/.test(app), "ACES tone mapping is configured");
assert(/<EffectComposer/.test(game) && /<Bloom/.test(game), "post-processing pipeline is active");
assert(/<Physics/.test(game) && /<RigidBody/.test(game), "Rapier physics assets are active");
assert(/WeaponGripArms/.test(operator), "operator uses a two-hand weapon grip");
assert(/name="held-weapon-assembly"/.test(weapon), "weapon is a separate scene assembly");
assert(/trigger|foregrip|two-hand-weapon-grip/.test(weapon), "hands visibly meet weapon grip points");
assert(/createStoneTextures/.test(dungeon) && /roughnessMap/.test(dungeon), "dungeon uses generated PBR texture maps");
assert(/shaderMaterial/.test(dungeon), "dungeon uses custom shader surfaces");
assert(/runeFragmentShader/.test(materials) && /mistFragmentShader/.test(materials), "rune and volumetric mist shaders exist");
assert(/hitEnemy/.test(store) && /hitAnchor/.test(store) && /damagePlayer/.test(store), "combat simulation contracts exist");
assert(/const OPERATORS = \[/.test(data), "operator roster exists");
const operatorCount = [...data.matchAll(/\{ id:/g)].length;
assert(operatorCount === 20, `20 division operators are present (found ${operatorCount})`);
assert(/spawnEnemy/.test(game) && /CombatDirector/.test(game), "enemy wave director is active");
assert(/moveWithCollision/.test(game), "collision-aware movement is active");
assert(/gpu-fallback/.test(read("src/styles.css")), "unsupported-GPU recovery UI is styled");

for (const file of [
  "src/App.jsx",
  "src/game/GameWorld.jsx",
  "src/game/Dungeon.jsx",
  "src/game/VFX.jsx",
  "src/game/models/Operator.jsx",
  "src/game/models/Weapon.jsx",
  "src/game/models/Enemy.jsx"
]) {
  const source = read(file);
  assert(!/\b(?:TODO|FIXME|lorem ipsum|placeholder)\b/i.test(source), `${file} has no unfinished markers`);
}

if (failures.length) {
  console.error("\nVerification failed:");
  failures.forEach(failure => console.error(`✗ ${failure}`));
  process.exit(1);
}

console.log(`\n${checks} R3F production contracts passed.`);
