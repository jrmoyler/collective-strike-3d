import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGame } from "../../store";
import { simulation, moveWithCollision } from "../simulation";
import { riftAudio } from "../audio";

const temp = new THREE.Vector3();

export function Enemy({ unit }) {
  const root = useRef();
  const core = useRef();
  const lastAttack = useRef(0);
  const hitAt = unit.hit || 0;
  const damagePlayer = useGame(state => state.damagePlayer);
  const paused = useGame(state => state.paused);
  const phase = useGame(state => state.phase);
  const difficulty = useGame(state => state.difficulty);
  const geometry = useMemo(() => unit.type === "hound" ? "hound" : unit.type === "wraith" ? "wraith" : unit.type === "monarch" ? "monarch" : "knight", [unit.type]);

  React.useEffect(() => () => simulation.enemies.delete(unit.id), [unit.id]);

  useFrame((state, delta) => {
    if (!root.current || paused || phase !== "playing") return;
    let enemy = simulation.enemies.get(unit.id);
    if (!enemy) {
      enemy = {
        position: new THREE.Vector3(...unit.position),
        velocity: new THREE.Vector3(),
        angle: 0
      };
      simulation.enemies.set(unit.id, enemy);
    }
    temp.copy(simulation.player.position).sub(enemy.position);
    const distance = temp.length();
    temp.normalize();
    const flank = Math.sin(state.clock.elapsedTime * 0.7 + unit.seed) * 0.22;
    enemy.velocity.set(temp.x + temp.z * flank, 0, temp.z - temp.x * flank).normalize().multiplyScalar((unit.type === "hound" ? 5.3 : unit.type === "wraith" ? 3.8 : unit.type === "monarch" ? 2.15 : 2.8) * delta);
    if (distance > (unit.type === "wraith" ? 7 : unit.type === "monarch" ? 3.4 : 2.2)) moveWithCollision(enemy.position, enemy.velocity, unit.type === "monarch" ? 1.4 : 0.7);
    enemy.angle = Math.atan2(temp.x, temp.z);
    root.current.position.copy(enemy.position);
    root.current.rotation.y = enemy.angle;
    root.current.position.y = geometry === "wraith" ? 1.1 + Math.sin(state.clock.elapsedTime * 2 + unit.seed) * 0.22 : Math.abs(Math.sin(state.clock.elapsedTime * 5 + unit.seed)) * 0.06;
    if (core.current) {
      core.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 4 + unit.seed) * 0.08);
      core.current.material.emissiveIntensity = performance.now() - hitAt < 140 ? 8 : 2.8;
    }
    if (distance < (unit.type === "wraith" ? 8 : unit.type === "monarch" ? 4 : 2.4) && state.clock.elapsedTime - lastAttack.current > (unit.type === "wraith" ? 1.6 : unit.type === "monarch" ? 1.15 : 0.8)) {
      lastAttack.current = state.clock.elapsedTime;
      const baseDamage = unit.type === "monarch" ? 28 : unit.type === "knight" ? 18 : unit.type === "wraith" ? 13 : 10;
      damagePlayer(baseDamage * (difficulty === "ascendant" ? 1.32 : difficulty === "story" ? 0.68 : 1));
      riftAudio.hurt();
    }
  });

  return (
    <group ref={root} name={`enemy-${unit.type}`} scale={geometry === "monarch" ? 1.58 : 1}>
      {geometry === "hound" && (
        <>
          <mesh castShadow position={[0, 0.72, 0]} scale={[0.62, 0.48, 1.05]}>
            <dodecahedronGeometry args={[0.8, 0]} />
            <meshPhysicalMaterial color="#1d1019" metalness={0.48} roughness={0.38} clearcoat={0.32} />
          </mesh>
          {[-0.42, 0.42].flatMap((x, side) => [-0.48, 0.52].map((z, index) => (
            <mesh key={`${side}-${index}`} castShadow position={[x, 0.28, z]} rotation={[0, 0, x < 0 ? -0.18 : 0.18]}>
              <capsuleGeometry args={[0.11, 0.58, 5, 8]} />
              <meshStandardMaterial color="#2f1723" metalness={0.55} roughness={0.42} />
            </mesh>
          )))}
          <mesh castShadow position={[0, 0.78, 0.92]} scale={[0.42, 0.36, 0.62]}>
            <coneGeometry args={[0.72, 1.2, 5]} />
            <meshStandardMaterial color="#0d101c" metalness={0.68} roughness={0.32} />
          </mesh>
        </>
      )}
      {(geometry === "knight" || geometry === "monarch") && (
        <>
          <mesh castShadow position={[0, 1.1, 0]}>
            <capsuleGeometry args={[0.52, 1.15, 7, 12]} />
            <meshPhysicalMaterial color="#17111d" metalness={0.72} roughness={0.25} clearcoat={0.4} />
          </mesh>
          <mesh castShadow position={[0, 2.02, 0]}>
            <icosahedronGeometry args={[0.46, 1]} />
            <meshStandardMaterial color="#080b12" metalness={0.88} roughness={0.2} />
          </mesh>
          <mesh castShadow position={[-0.55, 1.55, 0]} scale={[0.4, 0.25, 0.6]}>
            <octahedronGeometry args={[0.7, 0]} />
            <meshStandardMaterial color="#3f1528" metalness={0.65} roughness={0.28} />
          </mesh>
          <mesh castShadow position={[0.55, 1.55, 0]} scale={[0.4, 0.25, 0.6]}>
            <octahedronGeometry args={[0.7, 0]} />
            <meshStandardMaterial color="#3f1528" metalness={0.65} roughness={0.28} />
          </mesh>
          {geometry === "monarch" && (
            <>
              <mesh position={[0, 2.54, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.56, 0.07, 10, 32]} />
                <meshStandardMaterial color="#ff2f74" emissive="#ff165d" emissiveIntensity={5} toneMapped={false} />
              </mesh>
              {[0, 1, 2].map(index => (
                <mesh key={index} position={[0, 2.52 + index * 0.22, 0]} rotation={[Math.PI / 2, 0, index * 0.7]}>
                  <torusGeometry args={[0.48 - index * 0.1, 0.025, 8, 28]} />
                  <meshBasicMaterial color={index === 1 ? "#fbbf24" : "#ff2f74"} transparent opacity={0.8} toneMapped={false} />
                </mesh>
              ))}
            </>
          )}
        </>
      )}
      {geometry === "wraith" && (
        <>
          <mesh position={[0, 0.45, 0]} scale={[0.7, 1.4, 0.7]}>
            <coneGeometry args={[0.72, 2.8, 12, 1, true]} />
            <meshPhysicalMaterial color="#1a0b25" emissive="#5b103e" emissiveIntensity={0.42} transparent opacity={0.78} side={THREE.DoubleSide} depthWrite={false} />
          </mesh>
          <mesh position={[0, 1.65, 0]}>
            <icosahedronGeometry args={[0.46, 2]} />
            <meshPhysicalMaterial color="#311044" transmission={0.18} thickness={0.4} roughness={0.14} metalness={0.35} />
          </mesh>
        </>
      )}
      <mesh ref={core} position={[0, geometry === "hound" ? 0.9 : 1.62, geometry === "hound" ? 0.62 : 0.38]}>
        <octahedronGeometry args={[geometry === "hound" ? 0.16 : geometry === "monarch" ? 0.3 : 0.22, 0]} />
        <meshStandardMaterial color="#ff2f74" emissive="#ff165d" emissiveIntensity={3} toneMapped={false} />
        <pointLight color="#ff165d" intensity={2.8} distance={5} />
      </mesh>
    </group>
  );
}
