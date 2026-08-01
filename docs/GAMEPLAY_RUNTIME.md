# Gameplay runtime guide

Collective Strike 3D keeps its browser runtime offline-first and dependency-light. Three small ES modules are bundled with Three.js into `vendor/cs3d-runtime.js`:

- `src/game-runtime.js` owns legal game-state transitions, pausable scheduled work, listener lifecycle tracking, navigation recovery, and quality profiles.
- `src/input-actions.js` translates keyboard, mouse, touch, and standard gamepad input into named actions.
- `src/persistence.js` validates, migrates, and independently stores settings and career progression.

The HTML remains the integration point for match rules and rendering. New subsystems should use these modules instead of creating another global timer, listener, save key, or physical-key branch.

## Game states and transitions

`GAME_STATES` covers loading, menu, mode/operator/squad/arena selection, deployment, buy, live, plant/defuse, spectating, round end, boss introduction, wave transition, match end, results, pause, and WebGL context loss. Call `transitionState()` or `setGamePhase()` for normal movement. An illegal transition is rejected and logged without changing state. Use `gameState.recover()` only for an explicit recovery boundary such as restart, return to menu, or renderer loss.

Pause stores the exact prior state. The animation loop stops the game scheduler, AI, hazards, objective clocks, combat simulation, and rendering while paused or hidden. Do not use `setTimeout` for match work: use `scheduleGame(callback, delayMs, tag)` so pause freezes it and teardown can cancel it.

Restart reuses the deterministic `matchBlueprint`, rebuilds the selected arena once, restores the same roster and spawn sequence, and cancels match/UI jobs before reconstruction. Rematch intentionally creates a fresh blueprint while preserving the selected operator, squad, playlist, team, arena, and difficulty. Return to menu calls `teardownMatch({removeArena:true})`, leaving only the operator preview.

Every match-owned object must be released by `teardownMatch`, `teardownArena`, `clearBoss`, `clearSpikeMesh`, or `fx.clear`. Dispose non-shared geometries, materials, textures, render targets, and audio nodes; remove scene objects before dropping references.

## Input action mapping

Gameplay reads actions, never physical key codes. The default actions include four movement directions, aim, fire, reload, interact, ability, doctrine, six weapon slots, armory, pause, confirm, cancel, scoreboard, and spectator next/previous.

Keyboard bindings live in `DEFAULT_KEY_BINDINGS`; standard controller buttons live in `GAMEPAD_BINDINGS`; touch buttons declare `data-action`. Gamepads are tracked by index across connect/disconnect events. Axis deadzones are normalized in `normalizeAxis`. The most recently active device changes contextual labels without restarting the match.

To add an action safely:

1. Add its stable name to `ACTIONS`.
2. Add relevant keyboard/gamepad/touch bindings.
3. Handle the named action in `performAction` or simulation input consumption.
4. Add unit coverage in `tests/input-actions.test.js` and exercise the control in browser smoke when it changes gameplay.

## Tutorial and accessibility

The first-launch tutorial is shown until `tutorialCompleted` is saved. It can be skipped, completed, or replayed from pause. Contextual coaching observes demonstrated movement, fire, weapon switching, ability, and doctrine actions, then disappears. Control labels use the active input mode.

Persistent settings include master/music/effects volume, aim sensitivity, aim assist, screen-shake intensity, reduced motion, UI scale, colorblind indicator palette, left-handed touch layout, bloom, and quality preference. Critical team, objective, boss, and hazard information always includes text or shape in addition to color. Reduced motion disables interface animation, camera shake, and automatic menu/map orbit.

To add a setting, add a default and validation rule in `src/persistence.js`, bind the control in `initSettings`, apply it in `applyUserSettings`, and test migration/default/reset behavior.

## Quality and diagnostics

Low, medium, and high profiles cap pixel ratio and scale shadows, particles, fog, water tessellation, and bloom. Automatic mode starts conservatively from device memory/core hints, downgrades after sustained slow samples, and upgrades only after a longer stable window. `window.CS3D_runtimeMetrics()` reports the state, render-loop count, scheduled jobs, listeners, live objects, arena token, hazards, draw calls, triangles, GPU memory counts, audio media elements/timers, input mode, and active quality profile.

Do not add an effect without a bounded lifetime and quality-scaled density. Combat effects must use arena elevation and must not obscure enemies, projectiles, objectives, telegraphs, or exits.

## Bot and boss recovery rules

Bots route through the authored arena grid and height-aware visibility trace. An unreachable or hazard-crossing route returns no path; `recoverNavigationPath` selects a reachable alternate site/cell. A bot clears a failed goal, repaths quickly, and abandons a path after sustained lack of movement. Bots only fire valid, alive, visible targets and objective specialists plant/defuse when conditions allow.

Bosses spawn only in authored safe zones that pass circular collision and player-distance checks. There is no unsafe fallback spawn. Dashes require a valid multi-cell endpoint. Cover-sensitive area attacks use the height-aware line trace, and high-damage abilities provide a textual warning plus a visible telegraph before resolution. Boss rigs, zones, scheduled effects, and music are cleared on restart/menu/encounter teardown.

## Save versioning

Settings use `cs3d.settings.v2`; career data uses `cs3d.career.v2`. Legacy `cs3d_cfg` and `cs3d_career` values migrate on load. Invalid fields receive safe defaults. Malformed JSON is copied to a `.corrupt` key before recovery. Normal upgrades never reset progression, and settings/career reset operations are independent and confirmed in the UI.

When changing a schema, increment `SAVE_VERSION`, accept all previously shipped shapes in normalization, preserve unknown progression maps where safe, and add migration and corrupt-input tests before changing the runtime.

## Browser validation

Run `npm test`, `npm run build`, `npm run audio:check`, `npm run smoke`, `npm run check`, and `git diff --check`. Smoke requires Chromium through `CS3D_CHROMIUM` when no system browser is installed. It checks all arenas, every playlist, standard combat and objectives, wave/boss transitions, pause, gamepad hot-plugging, death/spectating, three restarts, rematch/menu teardown, WebGL recovery, responsive desktop sizes, touch-only mobile input, console errors, rejected promises, failed assets, remote requests, and runtime object budgets.

To add a state safely, add it to `GAME_STATES`, declare only its legal inbound/outbound edges, route the HTML phase adapter through it, define pause/restart/menu behavior, and add both accepted and rejected transition tests.
