import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGame } from "../store";

export function Tracer({ effect }) {
  const root = useRef();
  const remove = useGame(state => state.setEffects);
  const direction = new THREE.Vector3(...effect.to).sub(new THREE.Vector3(...effect.from));
  const midpoint = new THREE.Vector3(...effect.from).add(new THREE.Vector3(...effect.to)).multiplyScalar(0.5);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
  useFrame((_, delta) => {
    effect.life -= delta;
    if (root.current) {
      root.current.scale.x = root.current.scale.z = Math.max(0.1, effect.life * 8);
      root.current.traverse(child => {
        if (child.material) child.material.opacity = Math.max(0, effect.life * 6);
      });
    }
    if (effect.life <= 0) {
      remove(useGame.getState().effects.filter(item => item.id !== effect.id));
    }
  });
  return (
    <group ref={root}>
      <mesh position={midpoint} quaternion={quaternion}>
        <cylinderGeometry args={[0.035, 0.08, direction.length(), 8]} />
        <meshBasicMaterial color={effect.color} transparent opacity={0.9} blending={THREE.AdditiveBlending} toneMapped={false} />
      </mesh>
      <pointLight position={effect.to} color={effect.color} intensity={3} distance={4} />
    </group>
  );
}

export function Impact({ effect }) {
  const root = useRef();
  const remove = useGame(state => state.setEffects);
  useFrame((_, delta) => {
    effect.life -= delta;
    if (root.current) {
      root.current.rotation.y += delta * 4;
      root.current.scale.setScalar(1 + (0.4 - effect.life) * 4);
      root.current.traverse(child => {
        if (child.material) child.material.opacity = Math.max(0, effect.life * 3);
      });
    }
    if (effect.life <= 0) remove(useGame.getState().effects.filter(item => item.id !== effect.id));
  });
  return (
    <group ref={root} position={effect.position}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.1, 0.24, 24]} />
        <meshBasicMaterial color={effect.color} transparent opacity={0.9} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      {Array.from({ length: 8 }).map((_, index) => {
        const angle = index / 8 * Math.PI * 2;
        return (
          <mesh key={index} position={[Math.cos(angle) * 0.22, 0.12, Math.sin(angle) * 0.22]} rotation={[angle, 0, angle]}>
            <tetrahedronGeometry args={[0.07, 0]} />
            <meshBasicMaterial color={effect.color} transparent opacity={0.78} toneMapped={false} />
          </mesh>
        );
      })}
    </group>
  );
}

export function AbilityBurst({ effect }) {
  const root = useRef();
  const remove = useGame(state => state.setEffects);
  useFrame((_, delta) => {
    effect.life -= delta;
    if (root.current) {
      const scale = 1 + (0.8 - effect.life) * 10;
      root.current.scale.setScalar(scale);
      root.current.rotation.z += delta;
      root.current.traverse(child => {
        if (child.material) child.material.opacity = Math.max(0, effect.life * 1.25);
      });
    }
    if (effect.life <= 0) remove(useGame.getState().effects.filter(item => item.id !== effect.id));
  });
  return (
    <group ref={root} position={effect.position}>
      {[0, 1, 2].map(index => (
        <mesh key={index} rotation={[-Math.PI / 2, 0, index * Math.PI / 3]}>
          <torusGeometry args={[0.28 + index * 0.18, 0.028, 8, 42]} />
          <meshBasicMaterial color={effect.color} transparent opacity={0.8 - index * 0.12} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

export function Effects() {
  const effects = useGame(state => state.effects);
  return effects.map(effect => {
    if (effect.type === "tracer") return <Tracer key={effect.id} effect={effect} />;
    if (effect.type === "impact") return <Impact key={effect.id} effect={effect} />;
    return <AbilityBurst key={effect.id} effect={effect} />;
  });
}
