# Overhaul validation — 2026-09-09

Test runtime: Chrome for Testing 151.0.7922.34, Linux headless, SwiftShader software WebGL. Built runtime: Three.js r186. Tests use real playable geometry and actual WebGL rendering.

## Results

- Baseline tests/build and complete baseline browser smoke passed before integration.
- Integrated broad smoke passed title/roster, all ten arena graph/lifecycle checks, firing/reloading, objectives, boss encounter, wave transition, pause, WebGL recovery, rematch and resource cleanup. Its controller-only section hit a 15-second timeout while multiple software-rendering browsers were active. It is **not reported as a complete broad-smoke pass**.
- The unchanged controller and mobile sections then passed in an isolated run against the final build: five operators selected by controller, Boss playlist, Tempest deployment, pause/resume, touch deployment/reload, left-handed controls, 44px minimum touch targets, no horizontal overflow or overlapping touch targets. `scripts/smoke.mjs --inputs-only` now exposes those sections without repeating the long arena/combat run.
- Final `overhaul-smoke.mjs` passed actual impact/detonation shader compilation and rendering: 51 particles and 14 debris pieces, two particle draws and one instanced debris draw. Clear returns counts and draws to zero. Low-quality transition works; PBR environment is present; no console/page errors.
- Targeted frozen regressions passed: releasing controller fire/interact while paused clears controller holds but preserves keyboard-held fire; expired spike triggers Apex at six attacker wins without damaging the newly spawned winning squad.
- The ten-arena budget run passed unchanged ceilings: arena share **83–119 draw calls / 21,554–37,584 triangles**; whole scene **458–580 calls / 255,006–321,066 triangles**. This run includes the environment/arena overhaul before the final mipmap and preview-only polish. Those last changes do not add gameplay geometry or draw calls.
- Live operator hand/weapon socket error: **1.4e-14**, versus baseline 0.0326. Ten rigs, twenty declared operators, twenty doctrine weapons, twenty-one Series 03 weapons, and twenty Ascendants were present; doctrine activation remained functional.

## Visual review

The final screenshots show the actual operator preview, actual effect rendering and actual touch gameplay. Operator faces and weapons remain recognizable. Smaller preview staging and environment lighting improve visibility; mipmapping removes the severe sparkling floor pattern observed in the first lighting pass. The game remains stylized, with plain cover tops and a substantial portrait HUD. These screenshots do not support a claim of photorealism or award-level finish.

- [Operator preview](operator.png)
- [WebGL effects](combat-effects.png)
- [Mobile gameplay](mobile-gameplay.png)
- [Effects and regression measurements](effects-report.json)
- [Arena measurements](arena-budget.json)
- [Runtime and input evidence](runtime-evidence.txt)

## Reproduction

```sh
npm test
npm run build
CS3D_CHROMIUM=/path/to/chromium npm run smoke
CS3D_CHROMIUM=/path/to/chromium npm run smoke -- --inputs-only
CS3D_CHROMIUM=/path/to/chromium node scripts/overhaul-smoke.mjs /tmp/cs3d-overhaul
CS3D_CHROMIUM=/path/to/chromium CS3D_BUDGET_SHOTS=0 npm run budget
```

SwiftShader frame timings are CPU/software-renderer diagnostics, not hardware GPU performance measurements. Mobile checks use touch-device emulation, not a physical phone. No physical-device performance or app-store certification is claimed. The effect screenshot freezes the simulation at a deterministic effect age to inspect the real shaders; the separate broad smoke exercises live simulation.
