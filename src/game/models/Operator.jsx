import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Weapon, WeaponGripArms } from "./Weapon";
import { simulation } from "../simulation";

function ArmorPlate({ position, scale, color, rotation = [0, 0, 0] }) {
  return (
    <mesh castShadow position={position} scale={scale} rotation={rotation}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial color={color} metalness={0.72} roughness={0.23} clearcoat={0.62} clearcoatRoughness={0.18} />
    </mesh>
  );
}

export function Operator({ operator, menu = false }) {
  const root = useRef();
  const weapon = useRef();
  const stride = useRef(0);
  const firingRef = useRef(false);

  useFrame((state, delta) => {
    if (!root.current) return;
    if (menu) {
      root.current.rotation.y += delta * 0.24;
      root.current.position.y = Math.sin(state.clock.elapsedTime * 1.6) * 0.035;
      return;
    }
    const player = simulation.player;
    root.current.position.copy(player.position);
    root.current.rotation.y = player.angle;
    const speed = player.velocity.length();
    stride.current += delta * (3 + speed * 0.75);
    root.current.position.y = Math.abs(Math.sin(stride.current)) * Math.min(0.09, speed * 0.012);
    firingRef.current = player.firing && player.cooldown > 0.08;
    if (weapon.current) {
      weapon.current.position.z = 0.72 - (firingRef.current ? 0.11 : 0);
      weapon.current.rotation.x = Math.sin(state.clock.elapsedTime * 2.2) * 0.01;
    }
  });

  const dark = new THREE.Color(operator.color).multiplyScalar(0.38).getStyle();
  return (
    <group ref={root} name={`operator-${operator.id}`} scale={menu ? 1.28 : 1}>
      <mesh castShadow position={[0, 1.22, 0]}>
        <capsuleGeometry args={[0.44, 0.86, 8, 18]} />
        <meshPhysicalMaterial color={dark} metalness={0.55} roughness={0.34} clearcoat={0.45} />
      </mesh>
      <mesh castShadow position={[0, 2.12, 0.02]}>
        <sphereGeometry args={[0.38, 24, 16]} />
        <meshPhysicalMaterial color="#1a2233" metalness={0.8} roughness={0.2} clearcoat={0.74} />
      </mesh>
      <mesh position={[0, 2.15, 0.34]} scale={[0.8, 0.26, 0.22]}>
        <sphereGeometry args={[0.38, 24, 12]} />
        <meshPhysicalMaterial color={operator.accent} emissive={operator.color} emissiveIntensity={2.4} metalness={0.45} roughness={0.12} transmission={0.15} toneMapped={false} />
      </mesh>
      <ArmorPlate position={[0, 1.55, 0.07]} scale={[0.48, 0.52, 0.33]} color={operator.color} rotation={[0.06, 0, 0]} />
      <ArmorPlate position={[-0.53, 1.7, 0]} scale={[0.23, 0.18, 0.3]} color={operator.color} />
      <ArmorPlate position={[0.53, 1.7, 0]} scale={[0.23, 0.18, 0.3]} color={operator.color} />
      <ArmorPlate position={[-0.23, 0.6, 0]} scale={[0.23, 0.48, 0.23]} color={dark} />
      <ArmorPlate position={[0.23, 0.6, 0]} scale={[0.23, 0.48, 0.23]} color={dark} />
      <mesh position={[0, 1.54, -0.34]}>
        <boxGeometry args={[0.58, 0.72, 0.16]} />
        <meshStandardMaterial color="#080d18" metalness={0.82} roughness={0.25} />
      </mesh>
      <mesh position={[0, 1.62, -0.44]}>
        <torusGeometry args={[0.22, 0.055, 10, 24]} />
        <meshStandardMaterial color={operator.color} emissive={operator.color} emissiveIntensity={3} toneMapped={false} />
        <pointLight color={operator.color} intensity={2.1} distance={4.5} />
      </mesh>
      <WeaponGripArms armorColor={operator.color} />
      <Weapon ref={weapon} color={operator.accent} firing={firingRef.current} />
      <group position={[0, 0.04, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.72, 0.82, 48]} />
          <meshBasicMaterial color={operator.color} transparent opacity={0.46} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
        <pointLight position={[0, 0.2, 0]} color={operator.color} intensity={1.4} distance={3.5} />
      </group>
    </group>
  );
}
