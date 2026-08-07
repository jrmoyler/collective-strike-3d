# Collective Strike 3D — Commercial Polish Workbench

Last updated: 2026-08-07

This is the evidence ledger for the commercial-polish pass. “Valorant-level”
is treated as a direction for tactical clarity, feedback quality, and production
discipline—not as a claim that an offline browser project now has Riot's art,
animation, QA, or live-service budget. A row is only marked pass when a fresh
automated or captured-browser check supports it.

## Candidate

- Baseline: `main` at `20c6138` (merge PR #30)
- Upgrade branch: `codex/commercial-polish-production-pass`
- Runtime: Three.js 0.185.1 and Anime.js 4.5.0, vendored and offline-first
- Preserved content: 20 divisions, 61 doctrine weapons, 10 arenas, 12 bosses,
  the 5v5 spike plant/defuse loop, Boss and Wave playlists, local progression,
  and 24 local soundtrack files
- Artifact size: about 80 MiB; about 78 MiB is soundtrack audio
- Authored operator GLBs present: **0 / 20**. The new manifest and loader
  boundary report this truthfully and keep the existing procedural rigs live.

## Fresh verification ledger

| Gate | Result | Evidence |
|---|---:|---|
| Canonical pipeline | **pass** | `npm run check` completed end-to-end with exit code 0 on the final tree |
| Unit + static contracts | **pass** | `npm test`: 147 / 147 tests, then all static/offline checks |
| Production build | **pass** | `npm run build`; vendored runtime rebuilt and `dist/index.html` assembled |
| Audio byte contract | **pass** | 24 / 24 manifested MP3 files exist and parse through the audio checks |
| Integrated Chromium journey | **pass** | Clean compact smoke from title through objective, boss, results, rematch, recovery, controller-only deployment, and mobile touch |
| Controller-only deployment | **pass** | Standard-pad API only: title → Boss playlist → 5-operator squad → Tempest arena → deploy → pause → resume; the gate asserts the exact playlist and arena |
| Responsive layout | **pass** | No horizontal overflow at 360×800, 390×844, 768×1024, 1366×768, 1920×1080, or 2560×1080 |
| Ten-arena renderer budget | **pass** | All 10 sampled live at High; max arena-owned 117 calls / 37,056 triangles; limits 140 / 60,000 |
| Lifecycle stability | **pass** | Rebuilds and restarts hold one loop; geometry, texture, listener, scheduler, and temporary-mesh counts do not grow |
| Offline network contract | **pass** | Desktop, controller, mobile, and budget contexts reject failed requests and non-local runtime egress |
| Real-device frame-time target | **not proven** | SwiftShader timing is deliberately not used as player-GPU evidence; device lab remains required |
| Cross-browser release matrix | **not proven** | Automated browser coverage is Chromium-only |

## Independently judgeable areas

| Area | Baseline | Current | Status and evidence |
|---|---:|---:|---|
| Operator identity and grip | partial | improved | All 20 keep distinct DNA silhouettes; live rigs use two-hand IK, weapon sockets, kick, swap, reload pose, and source telemetry |
| Authored operator assets | missing | boundary complete; art missing | 20-entry GLB contract validates local paths, hierarchy, sockets, clips, LODs, integrity, and budgets; 0 authored binaries ship, so procedural fallback remains intentional |
| Arena readability | pass | pass | Ten unique validated layouts, elevation-aware ballistics, non-color surface legend, site/spawn markers, authored hazards/interactables, and stable collision |
| Arena atmosphere | partial | improved but partial | Ten strategy kits, PBR surface maps, landmarks, fog/water volumes, debris families, and arena-specific lighting are live; gameplay still lacks AAA authored room scale and bespoke prop density |
| Post-plant AI | missing | pass at deterministic contract | Site-pressure execute/fake choice, guaranteed blocked-fire/contact sell cue and timed rejoin, perception memory, spike recovery, five defender roles, distinct reachable rally cells, clutch, crossfire, and trade spacing are modular and tested |
| Combat feel | partial | pass at runtime contract | Shot-history bloom/recovery, recoil yaw, movement/control spread, per-form tracers, muzzle/impact/camera impulses, armor/critical/boss/elimination feedback, and 150-HP TTK analysis are live |
| Architecture | partial | improved but partial | Combat profiles, tactical planning, operator assets, arena definitions/content, input actions, persistence, audio, bosses, and operations are modules; the HTML still owns the orchestration loop and substantial mutable simulation state |
| Accessibility | partial | improved but partial | 3 px focus-visible cues, non-color faction/surface shapes, reduced-motion propagation, semantic dialogs, controller focus navigation, and 44 px mobile targets pass; an axe/200%-zoom audit and complete modal focus trapping remain |
| Mobile and gamepad | partial | improved | Full controller deployment and pause/resume pass. Touch boot/deploy/reload/layout pass in portrait; a real concurrent multi-touch objective-to-results run remains required |
| Performance and cleanup | partial | measured browser pass | Ten arenas stay inside renderer ceilings and repeated teardown is stable. Real desktop/mobile GPU p95 and 30-minute soak evidence remain required |
| Offline-first contract | pass | pass | No runtime CDN, 20/20 operator entries reject remote asset paths, and missing vendored files now fail verification |

## Before / after evidence

| Surface | Before | Current |
|---|---|---|
| Portrait combat HUD | [baseline mobile](commercial-polish-shots/before-mobile-gameplay.png) | [collapsed mobile HUD](commercial-polish-shots/09-mobile-gameplay.png) |
| Title | — | [final title](commercial-polish-shots/00-title.png) |
| Operator selection | — | [final operator select](commercial-polish-shots/01-operator-select.png) |
| Arena reconnaissance | — | [final arena select](commercial-polish-shots/02-arena-select.png) |
| Live combat | — | [firing](commercial-polish-shots/04-firing.png) · [combat](commercial-polish-shots/06-combat.png) |
| Results | — | [after-action report](commercial-polish-shots/07-results.png) |

## Blind critic loop

Three independent reviewers received the work without implementation context:

- Tactical critic: initially rejected live-schema mismatches, omniscient inputs,
  an unassigned fifth defender, shared Euclidean rally points, fake waypoints
  without a sell, aim assist bypassing spread, unused recoil yaw, and 100-vs-150
  HP TTK analysis. Its re-audit found two remaining P1s: navigation snapping
  collapsed rally cells and blocked/contact fire could skip the fake cue. The
  final resolver now passes all 10 arenas × 2 sites with five distinct reachable
  cells, and the browser observes approach → fallback cue → hold → rejoin.
- Visual critic: final scores were title 8.5/10, arena select 7.5/10, results
  6.5/10, operator select 5.5/10, and gameplay/mobile 4.5/10. It verified every
  desktop artifact at 1280×720 and the full operator/results layouts, but
  rejected literal Valorant parity because gameplay remains procedural, actors
  remain small, the HUD is dense, portrait play space is about 46%, and no
  authored operator GLBs ship.
- Production critic: accepted the technical ambition but rejected launch
  readiness because the browser is not pinned/provisioned from a clean clone,
  soundtrack commercial rights are undocumented, real-device/cross-browser
  evidence is absent, caching uses stable immutable URLs, and the core HTML is
  still too coupled. Controller-only deployment, offline guards, scheduler
  cleanup, and all-arena budget continuation were added in response.

Official comparison material used by the visual reviewer:
[Valorant interface preview](https://playvalorant.com/en-us/news/game-updates/preview-the-future-of-valorant-s-interface/),
[Valorant maps](https://playvalorant.com/en-us/maps/), and
[Valorant asset kit](https://playvalorant.com/en-us/news/game-updates/valorant-asset-kit/).

## Release blockers that code cannot honestly erase in this pass

1. Commission, license, optimize, and integrate 20 production-quality operator
   GLBs with the declared skeleton/socket/clip/LOD contract.
2. Document author, owner, source, commercial-use grant, and SHA-256 for every
   shipped soundtrack binary; owner or counsel must approve distribution.
3. Run Chromium, Firefox, and WebKit plus representative mobile/integrated/
   discrete GPUs. Record p95 frame time and a 30-minute soak.
4. Pin or provision the smoke browser in CI and publish repeatable reports tied
   to a clean commit. The current local pass uses `/tmp/chromium`.
5. Content-hash immutable runtime/audio URLs or remove `immutable`; set initial
   transfer and total-download budgets.
6. Continue extracting simulation/render/UI orchestration from the large HTML
   and enforce one-way snapshot/event boundaries.

The current candidate is a substantially stronger, test-backed internal alpha.
It is not labeled “commercially finished” while these blockers remain.

## Change log

- 2026-08-07: Baseline captured from `20c6138`.
- 2026-08-07: Modular combat, operator-asset, and tactical-AI contracts added.
- 2026-08-07: Live combat/AI integration, HUD/mobile polish, metrics, controller
  focus navigation, pause-safe gamepad polling, and hardened browser gates added.
- 2026-08-07: 145 tests, clean integrated smoke, and complete ten-arena High
  budget pass recorded; blind re-reviews requested.
- 2026-08-07: Final tactical P1s closed; 147 tests and a clean live browser
  state-machine journey pass. Desktop evidence verified at 1280×720.
- 2026-08-07: Final canonical `npm run check` passed with exit code 0; exact
  Boss/Tempest controller deployment and commit-site fake rejoin were proven.
