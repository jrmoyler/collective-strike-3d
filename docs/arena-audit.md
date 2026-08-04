# Arena gameplay, VFX, UI, and UX audit

Audit target: `agent/img2threejs-arena-assets-audit`

## Coverage

- Responsive title and operator screens at 360×800, 390×844, 768×1024, 1366×768, 1920×1080, and 2560×1080.
- Desktop gameplay journey in local headless Chromium with software WebGL: title, onboarding, operator selection, all ten arena dioramas, deployment, buy phase, combat, weapon VFX, pause/resume, plant/defuse, boss encounter, restart, context loss/recovery, spectating, results, rematch, cleanup, and wave transition.
- Touch-only mobile journey at 390×844: title, operator selection, arena selection, deployment, reload, left-handed controls, 44-pixel targets, portrait orientation guidance, and overlap/overflow checks.
- Automated contract checks for unique landmark composition, generated concept provenance, semantic runtime nodes, non-walkable surface classes, collision-independent geometry, and reduced-motion behavior.

## Findings and fixes

| Area | Finding | Resolution |
| --- | --- | --- |
| Arena identity | The former landmark switch produced small, generic primitives with little part semantics. | Added ten concept-led procedural landmarks with distinct silhouettes, named parts, destruction groups, sockets/colliders, and bounded animation tracks. |
| Navigation | Perimeter cells, voids, and solid cover were visually easy to conflate, especially under arena color grading. | Added instanced depressed exclusion plates, physical edge curbs, luminous boundary strips, raised cover caps, void beacons, and a shape-coded legend that does not rely on color alone. |
| Mobile arena UI | The fixed deployment footer did not reserve safe-area-aware scroll space. | Added bottom scroll padding and safe-area insets; browser checks confirm the footer stays inside the viewport with no horizontal overflow. |
| Motion | UI effects only exposed the compatibility `animate()` surface. | Bundled anime.js 4.5.0's `createTimeline`, `createSpring`, `stagger`, `engine`, and `waapi`; added spring diorama entry and sequenced detail transitions with reduced-motion guards. |
| VFX animation | A shared pulse path overwrote intentionally non-uniform concept-asset proportions. | Added base-scale-preserving `scalePulse` animation for reconstructed assets. |
| Resource lifecycle | Legacy fallback materials were allocated before the procedural landmark path returned. | Deferred fallback allocation so the normal path creates no unattached materials. |
| Audit stability | The restart probe compared a boss-cleanup frame with normal-round frames, producing a false draw-call regression. | Added one explicit transition warm-up, then measured three equivalent normal-round restarts; all remained stable at 484 calls and 266,040 triangles in the full ten-rig scene. |

## Result

The final browser smoke completed without console errors, page errors, failed runtime requests, input overlap, layout overflow, lifecycle growth, or remote runtime dependencies. The compact four-rig live-combat sample rendered 189 calls / 75,898 triangles; three full ten-rig restart samples were identical at 484 calls / 266,040 triangles, 106 geometries, and 16 textures.
