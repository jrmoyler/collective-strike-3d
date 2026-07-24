import React, { lazy, Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lightformer, Sparkles } from "@react-three/drei";
import { animate, stagger } from "animejs";
import * as THREE from "three";
import { Operator } from "./game/models/Operator";
import { OPERATOR_BY_ID, OPERATORS } from "./data/operators";
import { useGame } from "./store";

const GameWorld = lazy(() => import("./game/GameWorld").then(module => ({ default: module.GameWorld })));

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2", { powerPreference: "high-performance" }) || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function MenuScene({ operator }) {
  return (
    <>
      <color attach="background" args={["#03050d"]} />
      <fog attach="fog" args={["#070b18", 8, 22]} />
      <ambientLight intensity={0.32} color="#9db7e8" />
      <spotLight castShadow position={[4, 8, 6]} intensity={7} angle={0.48} penumbra={0.8} color={operator.accent} />
      <spotLight position={[-5, 5, -2]} intensity={5} angle={0.7} color={operator.color} />
      <group position={[2.8, -1.05, 0]} rotation={[0, -0.25, 0]}>
        <Float speed={1.4} floatIntensity={0.1} rotationIntensity={0.02}>
          <Operator operator={operator} menu />
        </Float>
        <mesh position={[0, -0.02, 0]}>
          <cylinderGeometry args={[2.2, 2.6, 0.28, 64]} />
          <meshPhysicalMaterial color="#111827" metalness={0.78} roughness={0.24} clearcoat={0.62} />
        </mesh>
        {[0.65, 1.25, 1.85].map((radius, index) => (
          <mesh key={radius} position={[0, 0.15 + index * 0.015, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius - 0.025, radius + 0.025, 64]} />
            <meshBasicMaterial color={index === 1 ? operator.color : operator.accent} transparent opacity={0.58} toneMapped={false} />
          </mesh>
        ))}
        <ContactShadows position={[0, -0.14, 0]} scale={7} opacity={0.6} blur={2.8} far={5} color="#000000" />
      </group>
      <mesh position={[0, -1.24, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#080d19" roughness={0.68} metalness={0.26} />
      </mesh>
      <Sparkles count={86} scale={[13, 8, 8]} size={1.4} speed={0.08} color={operator.accent} opacity={0.5} />
      <Environment resolution={96}>
        <Lightformer intensity={2} color={operator.color} position={[4, 5, -4]} scale={[8, 4, 1]} />
        <Lightformer intensity={1.5} color="#d4a843" position={[-5, 2, 2]} rotation={[0, Math.PI / 2, 0]} scale={[6, 3, 1]} />
      </Environment>
    </>
  );
}

function GameCanvas() {
  const phase = useGame(state => state.phase);
  const selected = useGame(state => state.selected);
  const quality = useGame(state => state.quality);
  const operator = OPERATOR_BY_ID[selected];
  const camera = phase === "menu" ? { position: [0, 1.8, 8.8], fov: 42 } : { position: [0, 19, 24], fov: 49 };
  return (
    <Canvas
      key={phase === "menu" ? "menu" : "game"}
      shadows={quality !== "low"}
      camera={camera}
      dpr={quality === "ultra" ? [1, 2] : quality === "high" ? [1, 1.5] : [0.75, 1]}
      gl={{ antialias: quality !== "low", powerPreference: "high-performance", alpha: false, stencil: false }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
        gl.outputColorSpace = THREE.SRGBColorSpace;
      }}
    >
      <Suspense fallback={null}>
        {phase === "menu" ? <MenuScene operator={operator} /> : <GameWorld />}
      </Suspense>
    </Canvas>
  );
}

function OperatorMenu() {
  const selected = useGame(state => state.selected);
  const select = useGame(state => state.select);
  const deploy = useGame(state => state.deploy);
  const operator = OPERATOR_BY_ID[selected];
  const panel = useRef();

  useEffect(() => {
    animate(".operator-card", {
      opacity: [0, 1],
      translateY: [18, 0],
      delay: stagger(22),
      duration: 560,
      ease: "outExpo"
    });
  }, []);

  useEffect(() => {
    if (!panel.current) return;
    animate(panel.current, { opacity: [0.45, 1], translateX: [12, 0], duration: 380, ease: "outExpo" });
  }, [selected]);

  return (
    <main className="menu-shell">
      <section className="menu-copy">
        <div className="eyebrow">COLLECTIVE AI INC. // ZENFLOW COMBAT LATTICE</div>
        <h1>COLLECTIVE<br /><span>STRIKE 3D</span></h1>
        <div className="edition">RIFTFALL // DUNGEON PROTOCOL</div>
        <div className="menu-rule" />
        <div className="operator-grid" aria-label="Division operators">
          {OPERATORS.map(item => (
            <button
              key={item.id}
              type="button"
              className={`operator-card ${item.id === selected ? "selected" : ""}`}
              style={{ "--operator": item.color, "--accent": item.accent }}
              onClick={() => select(item.id)}
            >
              <i>{item.name.split(" ").map(word => word[0]).join("").slice(0, 2)}</i>
              <span><b>{item.name}</b><small>{item.role}</small></span>
            </button>
          ))}
        </div>
      </section>
      <aside ref={panel} className="operator-dossier" style={{ "--operator": operator.color }}>
        <div className="dossier-label">ACTIVE OPERATOR</div>
        <h2>{operator.name}</h2>
        <div className="role">{operator.role}</div>
        <dl>
          <div><dt>WEAPON</dt><dd>{operator.weapon}</dd></div>
          <div><dt>ABILITY</dt><dd>{operator.ability}</dd></div>
          <div><dt>PASSIVE</dt><dd>{operator.passive}</dd></div>
          <div><dt>ARMOR</dt><dd>{operator.armor}</dd></div>
        </dl>
        <button type="button" className="deploy" onClick={deploy}>ENTER RIFTFALL</button>
        <p>WASD move · Mouse aim/fire · E ability · R reload · Shift sprint · Esc pause</p>
      </aside>
    </main>
  );
}

function HUD() {
  const hp = useGame(state => state.hp);
  const armor = useGame(state => state.armor);
  const ammo = useGame(state => state.ammo);
  const reserve = useGame(state => state.reserve);
  const score = useGame(state => state.score);
  const credits = useGame(state => state.credits);
  const combo = useGame(state => state.combo);
  const wave = useGame(state => state.wave);
  const selected = useGame(state => state.selected);
  const objective = useGame(state => state.objective);
  const message = useGame(state => state.message);
  const operator = OPERATOR_BY_ID[selected];
  return (
    <div className="hud" style={{ "--operator": operator.color, "--accent": operator.accent }}>
      <div className="objective"><span>RIFTFALL // WAVE {wave}</span><b>{objective}</b></div>
      <div className="vitals">
        <div className="operator-tag"><i />{operator.name.toUpperCase()}</div>
        <strong>{Math.ceil(hp)}</strong><small>HP</small>
        <div className="health-track"><i style={{ width: `${hp}%` }} /></div>
        <div className="armor-line">{Math.ceil(armor)} ARMOR · E {operator.ability.toUpperCase()}</div>
      </div>
      <div className="weapon-hud">
        <div className="ammo"><strong>{ammo}</strong><span>/ {reserve}</span></div>
        <b>{operator.weapon}</b>
        <small>{credits.toLocaleString()} ESSENCE</small>
      </div>
      <div className="score-hud"><span>SCORE</span><b>{score.toLocaleString()}</b>{combo > 1 && <em>{combo}X CHAIN</em>}</div>
      <div className="combat-message">{message}</div>
      <div className="crosshair"><i /><i /><i /><i /><b /></div>
    </div>
  );
}

function Pause() {
  const paused = useGame(state => state.paused);
  const togglePause = useGame(state => state.togglePause);
  const quality = useGame(state => state.quality);
  const setQuality = useGame(state => state.setQuality);
  if (!paused) return null;
  return (
    <div className="modal-backdrop">
      <section className="pause-panel">
        <div className="eyebrow">COMBAT LATTICE SUSPENDED</div>
        <h2>PAUSED</h2>
        <label>RENDER QUALITY
          <select value={quality} onChange={event => setQuality(event.target.value)}>
            <option value="ultra">Ultra</option>
            <option value="high">High</option>
            <option value="low">Performance</option>
          </select>
        </label>
        <button type="button" className="deploy" onClick={togglePause}>RESUME</button>
      </section>
    </div>
  );
}

function EndState({ phase }) {
  const deploy = useGame(state => state.deploy);
  const score = useGame(state => state.score);
  const kills = useGame(state => state.kills);
  return (
    <div className="modal-backdrop">
      <section className="end-panel">
        <div className="eyebrow">{phase === "victory" ? "RIFT SEALED" : "LATTICE COLLAPSED"}</div>
        <h2>{phase === "victory" ? "ASCENDANT" : "FALLEN"}</h2>
        <p>{score.toLocaleString()} score · {kills} corruption forms purged</p>
        <button type="button" className="deploy" onClick={deploy}>RUN THE DUNGEON AGAIN</button>
      </section>
    </div>
  );
}

export default function App() {
  const phase = useGame(state => state.phase);
  const webgl = useMemo(() => supportsWebGL(), []);
  if (!webgl) {
    return (
      <div className="gpu-fallback">
        <div className="eyebrow">RENDERING LATTICE OFFLINE</div>
        <h1>WEBGL REQUIRED</h1>
        <p>Enable hardware acceleration or open Collective Strike 3D in a current Chrome, Edge, Firefox, or Safari build.</p>
        <button type="button" className="deploy" onClick={() => location.reload()}>RETRY INITIALIZATION</button>
      </div>
    );
  }
  return (
    <div className="app">
      <GameCanvas />
      {phase === "menu" ? <OperatorMenu /> : <HUD />}
      <Pause />
      {(phase === "victory" || phase === "defeat") && <EndState phase={phase} />}
      <div className="grain" />
    </div>
  );
}
