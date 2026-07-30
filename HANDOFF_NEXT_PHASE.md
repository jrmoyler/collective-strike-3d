# Collective Strike 3D - Next Phase Handoff

## July 30 modular environment pass

- Added a curated 18-model, 626 kB GLB subset from the official CC0 Kenney City
  Kit (Industrial), Modular Space Kit, and Modular Cave Kit.
- Added `src/environment-assets.js`, a loader and placement layer that derives
  exposed faces from the immutable 36 × 26 collision grid and snaps 4 m Kenney
  wall modules to them. Space pieces dress Forge/Neon; cave pieces dress
  Cryo/Verdant. Gate arches and theme props are art-only.
- Wall shells are instanced. Cached model geometry is shared; active arena
  materials/textures are disposed with the arena group. An async revision guard
  prevents late GLB parsing from attaching to an arena that was already
  replaced.
- Added a deterministic embedded catalog generator. Both embedded parse and
  local individual-GLB paths are supported, while direct local/offline play
  requires no runtime request.
- Added vendored `GLTFLoader` and `RoomEnvironment`; PMREM IBL is generated once
  and re-used with arena-specific intensity and exposure.
- The build copies `assets/environments/`, the generated catalog, and the
  environment loader to `dist/`. Verification now checks every curated model,
  the embedded catalog, instancing/IBL contracts, and runtime readiness.
- Gameplay numbers, bot AI, weapons, operator abilities, sites, spawns, and the
  shared collision/pathing data were not changed.

## July 23 production hardening pass

- Fixed Vector Shift dash tunneling by stepping movement through the collision grid.
- Fixed targeted bot abilities so they aim at the bot's combat target instead of the human cursor.
- Added mobile twin-stick controls, touch actions, and standard dual-stick gamepad support.
- Added objective guidance, reload progress, directional damage, and elimination-chain HUD feedback.
- Added adaptive pixel-ratio scaling, automatic focus pause, WebGL context recovery, and a graceful unsupported-GPU screen.
- Added deterministic `npm run check` verification, a reproducible `dist/index.html` build, Vercel configuration, and project documentation.
- Production: https://collective-strike-3d.vercel.app

## Current Pass (original operators with gripped weapons, arena polish, vendored runtime)

### Characters reverted

- The specimen creature engine (toon shader, gait systems, IK creature rig,
  ~600 lines) was **removed**. The original division blob anatomy - sphere
  torso, DNA-driven shells/plates/humps/helixes/tendrils, head with
  visor/lens/beak/brows/helmet/ears, cylinder legs with the walk cycle, wings,
  coin and hourglass rings - is once again the only rig in the file.
  `makeRig` / `updateRig` are now each defined exactly once (verified by
  `npm test`), so there is no dead-code override left behind.
- What is new is the grip: every operator carries a two-bone IK arm pair
  (shoulder pad, upper arm, forearm, gloved hand). The trigger hand lands on the
  weapon grip and the support hand on the foregrip, both solved per frame from
  the live weapon transform, so the pose follows weapon switches, recoil kick,
  and aim yaw automatically.
- The carry point is solved from arm reach at build time rather than hard-coded,
  so short-armed flyers and long-bodied quadrupeds both hold their weapon in
  front of the chest without the barrel intersecting the head. Quadrupeds and
  hexapods anchor their arms lower on the flanks and carry below the head.
- Reload plays on the rig: the support hand drops to the magazine, the weapon
  rolls and dips, then the hand returns to the foregrip.
- Menu preview: framing now derives from the rig's own silhouette bounds
  (`fitR` / `fitY`), so all 20 divisions are framed identically instead of by a
  hand-tuned constant. The key light is tinted to the division colour with a
  cool rim behind, and the camera snaps on first selection instead of flying in
  from the origin.
- The `d20` division id was renamed to `cognara` to match its display name,
  Cognara Mind.

### Arena polish (same layout, better presentation)

The map geometry, collision grid, sites, and spawns are untouched. Added on top:

- Emissive skirting along every wall base and a metal capping trim on top.
- Volumetric light shafts under the gantry lamps.
- Framed doorways with hazard strips on the six lane chokepoints.
- 1200 drifting dust motes through the play volume.
- Aimed spotlights over both plant sites with visible fixtures.
- Crates rebuilt as lidded, hazard-banded cover props.
- An outer floor plate so the world does not end in a void at the camera edge.
- Lighting rebalanced for contrast (hemi .62 -> .30, ambient .15 -> .09,
  sun 1.35 -> 1.18, exposure 1.02 -> .98), darker floor tint, thicker fog, and a
  CSS vignette plus faint scanline over the render surface.

### Rendering

- `EffectComposer` + `UnrealBloomPass` on a 4x-multisampled half-float target.
  Bloom strength is user-controllable from the pause menu (`CFG.bloom`,
  persisted) and the composer follows the adaptive pixel-ratio scaler. If
  post-processing fails to construct, the game silently falls back to a direct
  `renderer.render`.
- Weapons were remodelled: dark receiver, metal barrel, stock, magazine, pistol
  grip, top rail, accent core strip, sight bead, and two energy rings. The muzzle
  flash now has its own material, so the accent parts stay lit between shots
  instead of blinking off. The local player's weapon casts a real muzzle flash
  point light.

### Dependencies are now installed, not fetched

- `three@0.185.1`, `animejs@4.5.0`, `@fontsource/space-grotesk`,
  `@fontsource/jetbrains-mono` are real npm dependencies; `esbuild` and
  `playwright-core` are dev dependencies.
- `npm run vendor` bundles Three.js, EffectComposer, RenderPass, ShaderPass,
  UnrealBloomPass, and anime.js into `vendor/cs3d-runtime.js` (622 kB minified)
  and publishes them on `window`.
- `npm run fonts` inlines the six needed woff2 faces into
  `vendor/cs3d-fonts.css` (128 kB).
- Both are committed, so opening the HTML file directly still works with zero
  build step and zero network. `npm test` fails the build if any remote host
  reappears in the document.

### Test tooling

- `npm run smoke` drives headless Chromium from the operator select screen into
  a live round (movement, firing, reload), captures five screenshots, asserts
  every rig has its weapon arms, and fails on any console error, page error, or
  failed request.
- `npm run rigs` renders a close-up turntable frame of all 20 operators holding
  a chosen weapon class, for eyeballing rig changes without playing a match.
- `npm run check` is `test` + `build` + `smoke`.

## Previous Pass (specimen characters + map art) - reverted

- **three.js upgraded r128 → r149** (matches the specimen engine's inlined build; CapsuleGeometry required).
- **Specimen creature engine ported** from `collective-specimen-21-standalone.html`: toon shader with rim light + spec cap, per-division seamless skin gradients, analytic two-bone IK, planted-foot stepper (walks 2/4/6 legs), flyer flap/bob, hopper squash-and-stretch gait, spring-driven tails/ears/antennae/tendrils, blinking eyes and head-look. All 20 divisions build from the existing DNA table (same schema as the specimen file).
- **Weapons are held**: bipeds/flyers grip the gun with both hands via IK (right hand trigger, left hand foregrip, per-weapon grip offsets from WVIS); quads/hexes/hoppers carry a back-mounted weapon bracket. Recoil kick, muzzle glow, and weapon switching preserved. Weapon scale boosted for readability.
- **Menu preview fixed**: operator scaled to fit the plinth (1.55x vs old 3.15x), always faces the camera, flyer framing raised, greet wave with the free hand every ~6s, pop-in animation, eye-tracking toward camera. Preview materials disposed on switch.
- **Selection verified**: selected division === played division (tested zenflow + nexus).
- **Map art**: painted floor decal overlay (site A/B letters, hazard bands, spawn zone markings "STRIKE DEPLOY"/"SENTINEL HOLD", lane lines, grime/scuffs), riveted wall paneling with hazard-striped bases (per-wall texture repeat), overhead gantry trusses with hanging lamps, border pipe runs with valve rings, holo site arrows, supply barrels. Lighting rebalanced (exposure 1.32→1.02) to restore the dark facility mood.
- Legacy blob-rig functions remain in-file but are overridden by the later creature-based `makeRig`/`updateRig` declarations (JS hoisting; safe dead code, remove when modularizing).
- Perf after the pass: ~8ms/frame in full 10-creature combat, ~104 draw calls, console clean over 30s simulated combat.

## Previous Pass (production polish)

- **Procedural audio engine** (WebAudio, zero assets): per-weapon gunshots with distance attenuation, hit/kill confirms, hurt thuds, reload clacks, footsteps, dry-fire click, ability whooshes, UI hover/click, buy chime, banner swells, round win/lose stingers, victory/defeat jingle, spike beeps that accelerate with the timer, detonation blast, low-HP heartbeat, menu music (Am-F-C-G pad + arpeggio sequencer), and combat ambience. Volumes persist via localStorage (`cs3d_cfg`).
- **Spike objective is real now**: a random attacker carries the spike (drops on death, recoverable), hold-F plant on site with channel bar, 38s bomb timer with escalating beeps and pulsing world mesh, hold-F defuse, detonation with area damage/shake/FX. Round-end reasons: STRIKE ROUND, SENTINEL ROUND, SITE SECURED, SPIKE DETONATED, SPIKE DEFUSED, TIME EXPIRED. Bots plant and defuse.
- **Game feel**: camera trauma shake (fire/hurt/death/detonation, user-scalable), floating 3D damage numbers (gold on killing blow), crosshair kill-pop, low-HP vignette + heartbeat, death spectator camera with SPECTATING label.
- **New UI**: live canvas minimap (walls, sites, allies, revealed enemies, spike ping), Tab scoreboard (K/D/HP/credits by team), Esc pause menu with volume/music/sfx/shake sliders, controls hint bar, career stats line in menu (matches/wins/elims via localStorage `cs3d_career`).
- **Input**: 1-4 direct weapon select outside buy menu, Esc closes buy first, window-blur clears held keys.
- **Bug fixes**: Terra's Bulwark walls now actually expire (collision grid was permanently marked before); time-expiry now goes through the win-check path so a timeout can end the match.

## Verification Notes

- Syntax check: `node -e "const fs=require('fs');const h=fs.readFileSync('COLLECTIVE_STRIKE_3D.html','utf8');new Function(h.match(/<script>\s*\"use strict\";([\s\S]*?)<\/script>/)[1]);console.log('ok')"`
- Serve: `python -m http.server 4173 --bind 127.0.0.1` then open `http://127.0.0.1:4173/COLLECTIVE_STRIKE_3D.html` (or use `.claude/launch.json` config "cs3d").
- Verified live this pass: full bot spike loop (plant -> 38s -> detonation -> score -> next round), defender round win, scoreboard, pause, minimap, spectator cam, zero console errors across 3+ rounds.
- Backup of the pre-pass file: `COLLECTIVE_STRIKE_3D.backup.html`.

## Next Phase

1. Replace procedural character bodies with real GLB operator assets or a modular GLB kit.
2. Split the single HTML into modules: simulation, rendering, UI, and content data.
3. Extend the environment manifest with authored floor/ceiling modules, signage,
   and arena-specific decals while retaining the shared tactical grid.
4. Post-plant gameplay tuning: bot site retakes, defender rotations, plant-fake behavior.
5. Weapon feel: recoil bloom UI, per-weapon tracer profiles, reload animation on the rig.
6. Replace CDN runtime dependencies with a bundled, pinned production dependency graph.

## Caution

- Machine note: C: drive was at 0 bytes free during this pass (~100 MB reclaimed from temp/chrome-probe junk). Large asset work (GLB packs, textures) will fail until disk space is freed.
