# Collective Strike 3D

A browser-native 5v5 tactical arena built with Three.js. Choose one of 20 Collective AI division operators, buy weapons, use operator abilities and team doctrines, plant or defuse the spike, and fight first-to-six matches against adaptive bot squads.

Four fully realized combat spaces ship in the offline build: the molten Iron
Forge, rain-soaked Neon District, frozen Cryo Lab, and bioluminescent Verdant
Ruins. Each arena has its own architecture, materials, atmosphere, landmarks,
lighting, and ambient effects while preserving the same learnable competitive
layout.

Three difficulty profiles make the game welcoming for a first-time player and
still demanding for tactical-game veterans. Persistent career XP, operator
mastery, arena wins, best streak, contextual coaching, and match rewards give
every session a clear arc.

Every runtime dependency is vendored into the repository, so the game runs with
no network access at all — no CDN, no webfont request.

## Install

```bash
npm install
npm run build
```

`npm run build` regenerates `vendor/cs3d-runtime.js` (Three.js + post-processing
+ anime.js, bundled by esbuild) and `vendor/cs3d-fonts.css` (Space Grotesk and
JetBrains Mono inlined as woff2), then writes `dist/index.html`.

## Run locally

```bash
npm run build
python3 -m http.server 4173 --directory dist
```

Open `http://localhost:4173/`. Serving the repository root and opening
`COLLECTIVE_STRIKE_3D.html` works too — it loads the same `vendor/` assets.

## Scripts

| Script | What it does |
| --- | --- |
| `npm test` | Static contract checks on the HTML source |
| `npm run vendor` | Rebuild the pinned Three.js / anime.js runtime bundle |
| `npm run fonts` | Rebuild the inlined webfont stylesheet |
| `npm run build` | Vendor + fonts + `dist/` |
| `npm run smoke` | Headless Chromium playthrough into a live round, fails on any console, page, or network error |
| `npm run rigs` | Render a close-up sheet of all 20 operator rigs holding a weapon |
| `npm run check` | `test` + `build` + `smoke` |

`npm run smoke` and `npm run rigs` write into `screenshots/` (git-ignored).

## Controls

- `WASD`: move
- Mouse: aim and fire
- `E`: operator ability
- `Q`: team doctrine
- `F`: plant or defuse
- `B`: armory
- `R`: reload
- `1–4`: weapon select
- `Tab`: scoreboard
- `Esc`: pause

Touch and standard dual-stick gamepads are supported.

## Progression and difficulty

- `Rookie`: forgiving aim, slower reactions, lighter ability pressure
- `Tactical`: the intended balanced experience
- `Elite`: faster flanks, sharper aim, aggressive ability and doctrine use

Career XP and mastery are stored locally in the browser. Nothing is uploaded,
and clearing browser storage resets progression.

## Playlists

- **Tactical** keeps the first-to-six spike match. When the match is decided,
  the winning five-operator squad enters a post-match Apex Challenge against a
  random boss from the 12-boss roster.
- **Boss Mode** lets you choose a full five-operator squad and deploy directly
  into a live Apex hunt.
- **Wave Mode** lets you choose five operators, then distributes all 15
  unselected divisions across four escalating waves. A random Apex boss is the
  fifth and final wave.

Bosses use arena-safe spawn checks, circular multi-cell collision occupancy,
distinct procedural locomotion rigs, telegraphed roster abilities, persistent
boss health/ability HUD, and a dedicated pulsing minimap icon. The playlist,
boss AI, mesh, and ability runtime are bundled into `vendor/cs3d-runtime.js`, so
all three modes preserve the offline-first contract.

## Deployment

Vercel uses the checked-in `vercel.json`: `npm run build` into `dist/`, with
long-lived immutable caching on `/vendor/*`.
