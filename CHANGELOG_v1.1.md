# Collective Strike 3D v1.1 — Multi-Arena + Library Upgrade

## Summary

- **three.js** upgraded 0.149.0 → **0.185.1** (r185)
- **anime.js** upgraded 3.2.2 → **4.5.0** with v3 compatibility shim + modern `window.animejs` API
- **Four connected arenas** selectable from the command panel before deploy:
  1. **Forge Lattice** — industrial facility (original, polished)
  2. **Neon Canopy** — cyber rooftops / neon arteries
  3. **Cryo Relay** — frozen research outpost
  4. **Verdant Core** — overgrown bio-lab
- All arenas share the same 36×26 tactical grid, Site A/B, spawns, and collision so bots, spike, and round logic stay identical. Only lighting, fog, particles, floor/wall materials, and accent language change.
- Arena select cards, themed objective flavour, stronger particle fields, and anime.js 4 menu transitions.
- Vendor bundle remains fully offline; smoke/verify contracts extended for the new arena registry.

## Architecture note

A full rewrite onto `@react-three/fiber` is the correct long-term step (already listed in HANDOFF_NEXT_PHASE). This release deliberately preserves the single-file + vendored production path so the live Vercel deploy and `npm run check` stay green while the content and dependency surface jump forward.

## How to try

```bash
npm install
npm run build
python3 -m http.server 4173 --directory dist
```

Open the menu → pick Strike/Sentinel → choose an arena card → select operator → DEPLOY.
