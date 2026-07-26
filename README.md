# Collective Strike 3D

A browser-native 5v5 tactical arena built with Three.js. Choose one of 20 Collective AI division operators, buy weapons, use operator abilities, plant or defuse the spike, and fight first-to-six matches against adaptive bot squads.

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
- `F`: plant or defuse
- `B`: armory
- `R`: reload
- `1–4`: weapon select
- `Tab`: scoreboard
- `Esc`: pause

Touch and standard dual-stick gamepads are supported.

## Deployment

Vercel uses the checked-in `vercel.json`: `npm run build` into `dist/`, with
long-lived immutable caching on `/vendor/*`.
