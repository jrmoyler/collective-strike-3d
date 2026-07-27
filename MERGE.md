# Merge checklist — feature/multi-arena-vfx-upgrade

## One-command apply (required once before merge / first build)

```bash
npm install
npm run arena    # injects arena CSS/HTML/JS hooks into COLLECTIVE_STRIKE_3D.html (idempotent)
npm run build    # vendor + fonts + arena + dist
npm run check    # verify + build + smoke
```

`npm run arena` is also part of `npm run build`, so a normal build applies the multi-arena injection automatically.

## What lands on main

- **three@0.185.1** + **animejs@4.5.0** (v3-compat shim in `src/vendor.js`)
- Four connected arenas: Forge Lattice · Neon Canopy · Cryo Relay · Verdant Core
- Arena select cards in the command panel
- Shared 36×26 tactical grid (same collision / sites / spawns)
- Theme swap for fog, background, and gold accent on select + deploy
- Offline vendor bundle preserved

## After merge

Redeploy Vercel from `main`. No env changes required.

## Follow-up (not blocking)

- Per-arena prop / particle style rebuild inside `buildArena`
- Ambient audio beds per map
- R3F modular extraction (see HANDOFF_NEXT_PHASE.md)
