import React, { forwardRef, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createMetalTexture } from "../materials";
import { simulation } from "../simulation";

const barrelMaterial = new THREE.MeshStandardMaterial({
  color: "#111827",
  metalness: 0.92,
  roughness: 0.2
});

export const Weapon = forwardRef(function Weapon({ color = "#8b5cf6", firing = false }, ref) {
  const metal = useMemo(() => createMetalTexture(), []);
  const muzzle = useRef();
  useFrame(() => {
    if (!muzzle.current) return;
    muzzle.current.visible = firing || (simulation.player.firing && simulation.player.cooldown > 0.055);
    if (muzzle.current.visible) muzzle.current.rotation.z += 0.6;
  });
  return (
    <group ref={ref} name="held-weapon-assembly" position={[0, 1.42, 0.72]} rotation={[0, 0, 0]}>
      <mesh castShadow position={[0, 0, 0.12]}>
        <boxGeometry args={[0.34, 0.3, 1.28]} />
        <meshStandardMaterial map={metal} metalness={0.82} roughness={0.24} color="#536277" />
      </mesh>
      <mesh castShadow position={[0, 0.02, 0.95]} material={barrelMaterial}>
        <cylinderGeometry args={[0.08, 0.11, 0.9, 16]} />
        <group rotation={[Math.PI / 2, 0, 0]} />
      </mesh>
      <mesh castShadow position={[0, 0.02, 1.02]} rotation={[Math.PI / 2, 0, 0]} material={barrelMaterial}>
        <cylinderGeometry args={[0.075, 0.11, 0.92, 18]} />
      </mesh>
      <mesh castShadow position={[0, -0.28, 0.1]} rotation={[0.22, 0, 0]}>
        <boxGeometry args={[0.18, 0.5, 0.26]} />
        <meshStandardMaterial color="#0b1120" metalness={0.55} roughness={0.42} />
      </mesh>
      <mesh castShadow position={[0, -0.2, 0.55]}>
        <boxGeometry args={[0.17, 0.42, 0.26]} />
        <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[0, 0.08, -0.72]}>
        <boxGeometry args={[0.27, 0.26, 0.55]} />
        <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.19, 0.2]}>
        <boxGeometry args={[0.1, 0.06, 0.76]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.2} toneMapped={false} />
      </mesh>
      {[[-0.2, 0.05], [0.2, 0.05]].map(([x, y], index) => (
        <mesh key={index} position={[x, y, 0.62]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.12, 0.025, 8, 18]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} toneMapped={false} />
        </mesh>
      ))}
      <mesh ref={muzzle} position={[0, 0.02, 1.48]} visible={firing}>
        <octahedronGeometry args={[0.22, 0]} />
        <meshBasicMaterial color="#fff7c2" toneMapped={false} />
        <pointLight color={color} intensity={firing ? 7 : 0} distance={5} />
      </mesh>
    </group>
  );
});

function Bone({ from, to, radius = 0.11, color, metalness = 0.32 }) {
  const { position, quaternion, length } = useMemo(() => {
    const a = new THREE.Vector3(...from);
    const b = new THREE.Vector3(...to);
    const direction = b.clone().sub(a);
    return {
      position: a.clone().add(b).multiplyScalar(0.5),
      quaternion: new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize()),
      length: direction.length()
    };
  }, [from, to]);
  return (
    <mesh castShadow position={position} quaternion={quaternion}>
      <cylinderGeometry args={[radius, radius * 1.12, length, 12]} />
      <meshStandardMaterial color={color} metalness={metalness} roughness={0.4} />
    </mesh>
  );
}

export function WeaponGripArms({ armorColor, skinColor = "#754f3d" }) {
  return (
    <group name="two-hand-weapon-grip">
      <Bone from={[-0.52, 1.68, 0.02]} to={[-0.28, 1.43, 0.63]} color={armorColor} radius={0.12} />
      <Bone from={[-0.28, 1.43, 0.63]} to={[-0.08, 1.22, 0.66]} color={skinColor} radius={0.095} metalness={0.04} />
      <Bone from={[0.52, 1.68, 0.02]} to={[0.35, 1.52, 0.76]} color={armorColor} radius={0.12} />
      <Bone from={[0.35, 1.52, 0.76]} to={[0.06, 1.18, 0.79]} color={skinColor} radius={0.095} metalness={0.04} />
      <mesh castShadow position={[-0.08, 1.18, 0.68]} rotation={[0.2, 0, 0]}>
        <sphereGeometry args={[0.13, 12, 8]} />
        <meshStandardMaterial color={skinColor} roughness={0.62} />
      </mesh>
      <mesh castShadow position={[0.06, 1.17, 0.8]} rotation={[0.2, 0, 0]}>
        <sphereGeometry args={[0.13, 12, 8]} />
        <meshStandardMaterial color={skinColor} roughness={0.62} />
      </mesh>
    </group>
  );
}
