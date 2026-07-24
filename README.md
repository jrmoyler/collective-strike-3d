# Collective Strike 3D

A browser-native 5v5 tactical arena built with Three.js. Choose one of 20 Collective AI division operators, buy weapons, use operator abilities, plant or defuse the spike, and fight first-to-six matches against adaptive bot squads.

## Run locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/COLLECTIVE_STRIKE_3D.html`.

## Verify and build

```bash
npm run check
```

The production build is written to `dist/index.html`. Vercel uses the checked-in `vercel.json` configuration.

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
