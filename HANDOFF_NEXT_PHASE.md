# Collective Strike 3D - Next Phase Handoff

## Current Pass (specimen characters + map art)

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
3. Real map art pass: authored rooms, layered floors, doors, signage, decals, debris.
4. Post-plant gameplay tuning: bot site retakes, defender rotations, plant-fake behavior.
5. Weapon feel: recoil bloom UI, per-weapon tracer profiles, reload animation on the rig.
6. Mobile/touch controls (twin virtual sticks) — HUD already responsive.

## Caution

- Machine note: C: drive was at 0 bytes free during this pass (~100 MB reclaimed from temp/chrome-probe junk). Large asset work (GLB packs, textures) will fail until disk space is freed.
