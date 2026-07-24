import React, { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Bloom, ChromaticAberration, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { Dungeon } from "./Dungeon";
import { Operator } from "./models/Operator";
import { Enemy } from "./models/Enemy";
import { Effects } from "./VFX";
import { OPERATOR_BY_ID } from "../data/operators";
import { useGame } from "../store";
import { collides, moveWithCollision, simulation } from "./simulation";

const direction = new THREE.Vector3();
const moveDelta = new THREE.Vector3();
const cameraTarget = new THREE.Vector3();
const shake = new THREE.Vector3();
let effectId = 0;
let enemyId = 0;

function addEffect(effect) {
  useGame.getState().setEffects([...useGame.getState().effects, { ...effect, id: `fx-${effectId++}` }]);
}

function spawnEnemy(wave) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 23 + Math.random() * 3;
  const typeRoll = Math.random();
  const type = wave > 2 && typeRoll > 0.78 ? "wraith" : typeRoll > 0.48 ? "knight" : "hound";
  return {
    id: `corrupt-${enemyId++}`,
    type,
    seed: Math.random() * 100,
    hp: type === "knight" ? 130 + wave * 12 : type === "wraith" ? 92 + wave * 8 : 58 + wave * 7,
    maxHp: type === "knight" ? 130 + wave * 12 : type === "wraith" ? 92 + wave * 8 : 58 + wave * 7,
    position: [Math.sin(angle) * radius, 0, Math.cos(angle) * radius]
  };
}

function CombatDirector() {
  const phase = useGame(state => state.phase);
  const paused = useGame(state => state.paused);
  const enemies = useGame(state => state.enemies);
  const wave = useGame(state => state.wave);
  const spawnClock = useRef(0);

  useFrame((_, delta) => {
    if (phase !== "playing" || paused) return;
    simulation.elapsed += delta;
    spawnClock.current -= delta;
    const cap = Math.min(13, 4 + wave * 2);
    if (spawnClock.current <= 0 && enemies.length < cap) {
      spawnClock.current = Math.max(0.7, 2.15 - wave * 0.1);
      useGame.getState().setEnemies([...useGame.getState().enemies, spawnEnemy(wave)]);
    }
    if (simulation.elapsed > wave * 48) useGame.setState({ wave: wave + 1, message: `CORRUPTION WAVE ${wave + 1}` });
  });
  return null;
}

function PlayerController({ operator }) {
  const paused = useGame(state => state.paused);
  const phase = useGame(state => state.phase);
  const ammo = useGame(state => state.ammo);
  const consumeAmmo = useGame(state => state.consumeAmmo);
  const hitEnemy = useGame(state => state.hitEnemy);
  const hitAnchor = useGame(state => state.hitAnchor);
  const get = useGame.getState;
  const cooldown = useRef(0);
  const ability = useRef(0);

  useEffect(() => {
    const down = event => {
      simulation.keys.add(event.key.toLowerCase());
      if (event.key.toLowerCase() === "r") get().reload();
      if (event.key.toLowerCase() === "e") ability.current = 0;
      if (event.key === "Escape") get().togglePause();
    };
    const up = event => simulation.keys.delete(event.key.toLowerCase());
    const blur = () => {
      simulation.keys.clear();
      simulation.player.firing = false;
      if (get().phase === "playing" && !get().paused) get().togglePause();
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
    };
  }, [get]);

  const fire = () => {
    if (phase !== "playing" || paused || cooldown.current > 0) return;
    const state = get();
    if (state.ammo <= 0) {
      state.reload();
      return;
    }
    cooldown.current = operator.id === "signal" ? 0.075 : operator.id === "kinetic" ? 0.09 : 0.115;
    simulation.player.firing = true;
    consumeAmmo();
    const origin = simulation.player.position.clone().add(new THREE.Vector3(0, 1.42, 0.95).applyAxisAngle(new THREE.Vector3(0, 1, 0), simulation.player.angle));
    direction.copy(simulation.player.aimPoint).sub(simulation.player.position).setY(0).normalize();
    let distance = 34;
    let target = null;
    let targetKind = "";
    for (const unit of get().enemies) {
      const runtime = simulation.enemies.get(unit.id);
      if (!runtime) continue;
      const relative = runtime.position.clone().sub(simulation.player.position);
      const projection = relative.dot(direction);
      if (projection < 0 || projection > distance) continue;
      const miss = relative.clone().addScaledVector(direction, -projection).length();
      if (miss < (unit.type === "knight" ? 1.05 : 0.82)) {
        distance = projection;
        target = unit;
        targetKind = "enemy";
      }
    }
    for (const anchor of get().anchors) {
      if (anchor.hp <= 0) continue;
      const anchorPosition = new THREE.Vector3(...anchor.position);
      const relative = anchorPosition.sub(simulation.player.position);
      const projection = relative.dot(direction);
      if (projection < 0 || projection > distance) continue;
      const miss = relative.clone().addScaledVector(direction, -projection).length();
      if (miss < 1.7) {
        distance = projection;
        target = anchor;
        targetKind = "anchor";
      }
    }
    const end = origin.clone().addScaledVector(direction, distance);
    addEffect({ type: "tracer", from: origin.toArray(), to: end.toArray(), color: operator.accent, life: 0.2 });
    if (target) {
      addEffect({ type: "impact", position: end.toArray(), color: targetKind === "anchor" ? "#ff2f74" : operator.accent, life: 0.4 });
      if (targetKind === "enemy") hitEnemy(target.id, operator.id === "animus" ? 48 : operator.id === "nexus" ? 37 : 32);
      else hitAnchor(target.id, 18);
    }
    useGame.setState({ trauma: Math.min(1, get().trauma + 0.035) });
  };

  useFrame((state, delta) => {
    cooldown.current = Math.max(0, cooldown.current - delta);
    ability.current += delta;
    simulation.player.cooldown = cooldown.current;
    if (cooldown.current <= 0.02) simulation.player.firing = false;
    if (phase !== "playing" || paused) {
      simulation.player.velocity.set(0, 0, 0);
      return;
    }
    const x = (simulation.keys.has("d") ? 1 : 0) - (simulation.keys.has("a") ? 1 : 0);
    const z = (simulation.keys.has("s") ? 1 : 0) - (simulation.keys.has("w") ? 1 : 0);
    const gamepad = navigator.getGamepads?.()[0];
    const gx = Math.abs(gamepad?.axes[0] || 0) > 0.16 ? gamepad.axes[0] : 0;
    const gz = Math.abs(gamepad?.axes[1] || 0) > 0.16 ? gamepad.axes[1] : 0;
    direction.set(x + gx, 0, z + gz);
    if (direction.lengthSq() > 0) direction.normalize();
    const speedBoost = simulation.keys.has("shift") ? 1.28 : 1;
    const speed = 7.8 * operator.speed * speedBoost;
    simulation.player.velocity.lerp(direction.multiplyScalar(speed), 1 - Math.exp(-delta * 12));
    moveDelta.copy(simulation.player.velocity).multiplyScalar(delta);
    moveWithCollision(simulation.player.position, moveDelta);
    direction.copy(simulation.player.aimPoint).sub(simulation.player.position);
    simulation.player.angle = Math.atan2(direction.x, direction.z);
    if ((simulation.keys.has("e") || gamepad?.buttons[0]?.pressed) && ability.current > (operator.id === "zenflow" ? 5 : 8)) {
      ability.current = 0;
      if (operator.id === "vector" || operator.id === "nomad" || operator.id === "kinetic") {
        direction.set(Math.sin(simulation.player.angle), 0, Math.cos(simulation.player.angle)).multiplyScalar(5.5);
        for (let step = 0; step < 9; step++) {
          moveDelta.copy(direction).multiplyScalar(1 / 9);
          if (collides(simulation.player.position.x + moveDelta.x, simulation.player.position.z + moveDelta.z)) break;
          simulation.player.position.add(moveDelta);
        }
      } else {
        useGame.setState(stateValue => ({ hp: Math.min(100, stateValue.hp + 18), armor: Math.min(operator.armor, stateValue.armor + 18) }));
      }
      addEffect({ type: "ability", position: simulation.player.position.toArray(), color: operator.color, life: 0.8 });
      useGame.setState({ message: `${operator.ability.toUpperCase()} DEPLOYED`, trauma: Math.min(1, get().trauma + 0.2) });
    }
    if ((simulation.player.firing || gamepad?.buttons[7]?.pressed) && cooldown.current <= 0) fire();
  });

  return (
    <mesh
      position={[0, 0.03, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      onPointerMove={event => {
        event.stopPropagation();
        simulation.player.aimPoint.copy(event.point);
      }}
      onPointerDown={event => {
        event.stopPropagation();
        simulation.player.firing = true;
        fire();
      }}
      onPointerUp={() => {
        simulation.player.firing = false;
      }}
    >
      <planeGeometry args={[70, 70]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const trauma = useGame(state => state.trauma);
  const decay = useGame(state => state.decayTrauma);
  useFrame((state, delta) => {
    const player = simulation.player.position;
    cameraTarget.set(player.x, 19, player.z + 15);
    shake.set((Math.random() - 0.5) * trauma * trauma, (Math.random() - 0.5) * trauma * trauma * 0.5, (Math.random() - 0.5) * trauma * trauma);
    camera.position.lerp(cameraTarget.add(shake), 1 - Math.exp(-delta * 7));
    camera.lookAt(player.x, 0.2, player.z - 1.8);
    if (trauma > 0) decay(delta * 1.4);
    camera.fov = THREE.MathUtils.lerp(camera.fov, simulation.player.velocity.length() > 6 ? 53 : 49, 1 - Math.exp(-delta * 5));
    camera.updateProjectionMatrix();
  });
  return null;
}

function PhysicsDebris() {
  return (
    <Physics gravity={[0, -10, 0]}>
      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider args={[36, 0.1, 36]} position={[0, -0.1, 0]} />
      </RigidBody>
      {Array.from({ length: 10 }).map((_, index) => (
        <RigidBody key={index} colliders="hull" position={[(index % 5) * 0.45 - 1, 0.5 + Math.floor(index / 5) * 0.6, -18 + (index % 2) * 0.5]} mass={0.7}>
          <mesh castShadow>
            <dodecahedronGeometry args={[0.23 + (index % 3) * 0.05, 0]} />
            <meshStandardMaterial color="#283244" roughness={0.86} metalness={0.08} />
          </mesh>
        </RigidBody>
      ))}
    </Physics>
  );
}

export function GameWorld() {
  const selected = useGame(state => state.selected);
  const operator = OPERATOR_BY_ID[selected];
  const enemies = useGame(state => state.enemies);
  const quality = useGame(state => state.quality);
  const chromatic = useMemo(() => new THREE.Vector2(0.0007, 0.00045), []);
  return (
    <>
      <color attach="background" args={["#03050d"]} />
      <fogExp2 attach="fog" args={["#071021", 0.018]} />
      <ambientLight intensity={0.18} color="#829ed8" />
      <hemisphereLight intensity={0.34} color="#91b4ff" groundColor="#06040c" />
      <directionalLight castShadow position={[12, 24, 10]} intensity={2.4} color="#dce8ff" shadow-mapSize={[2048, 2048]} shadow-camera-far={70} shadow-camera-left={-34} shadow-camera-right={34} shadow-camera-top={34} shadow-camera-bottom={-34} />
      <Dungeon />
      <Operator operator={operator} />
      {enemies.map(unit => <Enemy key={unit.id} unit={unit} />)}
      <Effects />
      <PhysicsDebris />
      <PlayerController operator={operator} />
      <CombatDirector />
      <CameraRig />
      <Environment resolution={128}>
        <Lightformer intensity={2.2} color="#8b5cf6" position={[0, 8, -18]} scale={[18, 6, 1]} />
        <Lightformer intensity={1.6} color="#38bdf8" position={[18, 5, 10]} rotation={[0, -Math.PI / 2, 0]} scale={[12, 6, 1]} />
        <Lightformer intensity={1.2} color="#d4a843" position={[-18, 4, 8]} rotation={[0, Math.PI / 2, 0]} scale={[10, 4, 1]} />
      </Environment>
      {quality !== "low" && (
        <EffectComposer multisampling={quality === "ultra" ? 4 : 0}>
          <Bloom intensity={1.15} luminanceThreshold={0.72} luminanceSmoothing={0.18} mipmapBlur />
          <ChromaticAberration offset={chromatic} radialModulation modulationOffset={0.24} />
          <Noise opacity={0.022} blendFunction={BlendFunction.SOFT_LIGHT} />
          <Vignette darkness={0.48} offset={0.28} />
        </EffectComposer>
      )}
    </>
  );
}
