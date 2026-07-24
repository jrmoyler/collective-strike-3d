import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { COVER } from "./simulation";
import { createMetalTexture, createStoneTextures, mistFragmentShader, mistVertexShader, runeFragmentShader, runeVertexShader } from "./materials";
import { useGame } from "../store";

function RuneSeal({ position, color = "#8b5cf6", scale = 1 }) {
  const material = useRef();
  useFrame(({ clock }) => {
    if (material.current) material.current.uniforms.uTime.value = clock.elapsedTime;
  });
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} scale={scale}>
      <planeGeometry args={[12, 12, 1, 1]} />
      <shaderMaterial
        ref={material}
        vertexShader={runeVertexShader}
        fragmentShader={runeFragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uColor: { value: new THREE.Color(color) },
          uIntensity: { value: 1 }
        }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function GroundMist() {
  const material = useRef();
  useFrame(({ clock }) => {
    if (material.current) material.current.uniforms.uTime.value = clock.elapsedTime;
  });
  return (
    <mesh position={[0, 0.26, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[68, 68, 48, 48]} />
      <shaderMaterial
        ref={material}
        vertexShader={mistVertexShader}
        fragmentShader={mistFragmentShader}
        uniforms={{ uTime: { value: 0 }, uColor: { value: new THREE.Color("#4c1d95") } }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function Torch({ position, color = "#ff6b35" }) {
  const flame = useRef();
  useFrame(({ clock }) => {
    if (!flame.current) return;
    const pulse = 1 + Math.sin(clock.elapsedTime * 9 + position[0]) * 0.13;
    flame.current.scale.set(0.72 * pulse, 1.22 / pulse, 0.72 * pulse);
  });
  return (
    <group position={position}>
      <mesh castShadow position={[0, -0.56, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1.2, 10]} />
        <meshStandardMaterial color="#1c2432" metalness={0.9} roughness={0.28} />
      </mesh>
      <mesh ref={flame}>
        <octahedronGeometry args={[0.23, 1]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
      <pointLight color={color} intensity={5.5} distance={11} decay={2} castShadow={false} />
    </group>
  );
}

function Pillar({ position, metal }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow position={[0, 2.3, 0]}>
        <cylinderGeometry args={[0.72, 0.92, 4.6, 8]} />
        <meshStandardMaterial map={metal} color="#283246" metalness={0.72} roughness={0.32} />
      </mesh>
      {[0.25, 2.25, 4.35].map(y => (
        <mesh key={y} castShadow position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.82, 0.09, 8, 16]} />
          <meshStandardMaterial color="#d4a843" metalness={0.88} roughness={0.24} />
        </mesh>
      ))}
      <mesh position={[0, 3.3, 0.73]}>
        <planeGeometry args={[0.42, 1.2]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={1.4} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Arch({ position, rotation = [0, 0, 0], metal }) {
  return (
    <group position={position} rotation={rotation}>
      <Pillar position={[-2.2, 0, 0]} metal={metal} />
      <Pillar position={[2.2, 0, 0]} metal={metal} />
      <mesh castShadow position={[0, 4.4, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[2.2, 0.46, 10, 28, Math.PI]} />
        <meshStandardMaterial map={metal} color="#303b50" metalness={0.66} roughness={0.35} />
      </mesh>
    </group>
  );
}

function CoverBlock({ item, stone }) {
  const y = item.d > 5 || item.w > 5 ? 1.8 : 2.5;
  return (
    <group position={[item.x, 0, item.z]}>
      <mesh castShadow receiveShadow position={[0, y / 2, 0]}>
        <boxGeometry args={[item.w, y, item.d]} />
        <meshStandardMaterial map={stone.color} roughnessMap={stone.roughness} color="#2b3446" roughness={0.84} metalness={0.08} />
      </mesh>
      <mesh position={[0, y + 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[Math.max(1, item.w - 0.3), Math.max(1, item.d - 0.3)]} />
        <meshStandardMaterial color="#1f2e43" metalness={0.42} roughness={0.38} />
      </mesh>
      <RuneSeal position={[0, y + 0.05, 0]} color={item.x > 0 ? "#38bdf8" : "#8b5cf6"} scale={Math.min(item.w, item.d) / 8} />
    </group>
  );
}

function CorruptionAnchor({ anchor }) {
  const root = useRef();
  const active = anchor.hp > 0;
  useFrame(({ clock }, delta) => {
    if (!root.current) return;
    root.current.rotation.y += delta * (active ? 0.55 : 0.08);
    root.current.position.y = 1.55 + Math.sin(clock.elapsedTime * 2.4 + anchor.position[0]) * (active ? 0.18 : 0.02);
  });
  return (
    <group position={[anchor.position[0], 0, anchor.position[2]]}>
      <RuneSeal position={[0, 0.04, 0]} color={active ? "#ff165d" : "#22d3ee"} scale={0.72} />
      <group ref={root} position={[0, 1.55, 0]} scale={active ? 1 : 0.35}>
        <mesh castShadow>
          <octahedronGeometry args={[1.15, 1]} />
          <meshPhysicalMaterial
            color={active ? "#4a102f" : "#0e7490"}
            emissive={active ? "#ff165d" : "#22d3ee"}
            emissiveIntensity={active ? 3 : 0.5}
            metalness={0.42}
            roughness={0.16}
            transmission={0.2}
            thickness={0.8}
          />
        </mesh>
        {active && <pointLight color="#ff165d" intensity={6} distance={13} />}
      </group>
      <mesh castShadow receiveShadow position={[0, 0.35, 0]}>
        <cylinderGeometry args={[1.45, 1.8, 0.7, 8]} />
        <meshStandardMaterial color="#131927" metalness={0.72} roughness={0.32} />
      </mesh>
      {active && <Sparkles count={34} scale={[4, 4, 4]} size={2.5} speed={0.42} color="#ff2f74" />}
    </group>
  );
}

function HangingChain({ position, length = 6 }) {
  return (
    <group position={position}>
      {Array.from({ length }).map((_, index) => (
        <mesh key={index} position={[0, -index * 0.34, 0]} rotation={[Math.PI / 2, index % 2 ? Math.PI / 2 : 0, 0]}>
          <torusGeometry args={[0.12, 0.026, 6, 12]} />
          <meshStandardMaterial color="#364152" metalness={0.92} roughness={0.28} />
        </mesh>
      ))}
    </group>
  );
}

export function Dungeon() {
  const stone = useMemo(() => createStoneTextures(), []);
  const metal = useMemo(() => createMetalTexture(), []);
  const anchors = useGame(state => state.anchors);
  const perimeter = useMemo(() => {
    const pieces = [];
    for (let i = -28; i <= 28; i += 4) {
      pieces.push([i, 2.5, -29, 4, 5, 1.2], [i, 2.5, 29, 4, 5, 1.2]);
      pieces.push([-29, 2.5, i, 1.2, 5, 4], [29, 2.5, i, 1.2, 5, 4]);
    }
    return pieces;
  }, []);

  return (
    <group name="riftfall-dungeon">
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[72, 72]} />
        <meshStandardMaterial map={stone.color} roughnessMap={stone.roughness} color="#2a3346" roughness={0.9} metalness={0.06} />
      </mesh>
      <mesh position={[0, -0.24, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[74, 74]} />
        <meshStandardMaterial color="#050812" roughness={1} />
      </mesh>
      <GroundMist />
      <RuneSeal position={[0, 0.035, 0]} color="#d4a843" scale={1.2} />
      {COVER.map((item, index) => <CoverBlock key={index} item={item} stone={stone} />)}
      {perimeter.map((piece, index) => (
        <mesh key={index} castShadow receiveShadow position={piece.slice(0, 3)}>
          <boxGeometry args={piece.slice(3)} />
          <meshStandardMaterial map={stone.color} roughnessMap={stone.roughness} color="#252e3e" roughness={0.82} metalness={0.1} />
        </mesh>
      ))}
      {[
        [-22, 0, -22], [22, 0, -22], [-22, 0, 22], [22, 0, 22],
        [-4, 0, -22], [4, 0, -22], [-4, 0, 22], [4, 0, 22]
      ].map((position, index) => <Pillar key={index} position={position} metal={metal} />)}
      <Arch position={[0, 0, -25]} metal={metal} />
      <Arch position={[0, 0, 25]} rotation={[0, Math.PI, 0]} metal={metal} />
      {[
        [-24, 3.2, -14], [24, 3.2, -14], [-24, 3.2, 12], [24, 3.2, 12],
        [-7, 4.8, -25], [7, 4.8, -25], [-7, 4.8, 25], [7, 4.8, 25]
      ].map((position, index) => <Torch key={index} position={position} color={index % 2 ? "#38bdf8" : "#ff6b35"} />)}
      {[
        [-18, 5.4, -28], [-8, 5.4, -28], [8, 5.4, -28], [18, 5.4, -28],
        [-18, 5.4, 28], [18, 5.4, 28]
      ].map((position, index) => <HangingChain key={index} position={position} length={5 + index % 3} />)}
      {anchors.map(anchor => <CorruptionAnchor key={anchor.id} anchor={anchor} />)}
      <Float speed={1.2} floatIntensity={0.35} rotationIntensity={0.18}>
        <mesh position={[0, 6.8, 0]}>
          <dodecahedronGeometry args={[1.4, 0]} />
          <meshPhysicalMaterial color="#17102a" emissive="#8b5cf6" emissiveIntensity={1.8} metalness={0.55} roughness={0.16} transmission={0.12} />
          <pointLight color="#8b5cf6" intensity={5} distance={18} />
        </mesh>
      </Float>
      <Sparkles count={150} scale={[60, 9, 60]} size={1.2} speed={0.08} color="#9fb7e8" opacity={0.45} />
    </group>
  );
}
