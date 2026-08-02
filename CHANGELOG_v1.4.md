# Collective Strike 3D v1.4 — Title Screen + Survivability Pass

## A real front door

The game used to drop you straight into a grid of twenty operator cards with no
explanation of what any of it meant. There is now a title and briefing screen in
front of it.

- New `#titleScreen` boots first and holds the game in `GAME_STATES.MENU` until
  you choose to move on. Operator select is one click, one Enter, or one Space
  away.
- The lockup sits over a live cinematic orbit of the arena rendered by the same
  Three.js scene the match uses — no video, no image, no extra asset. A twenty
  segment spectrum bar across the top is the actual division color roster.
- A band wipe transitions into operator select, and a `BACK TO TITLE` control on
  the command panel returns to the briefing.
- The `Main Title — Collective Strike` track already in the soundtrack manifest
  now has the screen it was written for, and hands off to the menu loop on the
  way into selection.

## The briefing breaks down the whole game

Eight scroll sections with a scroll-spy rail, reveal-on-enter panels, and a
scroll backstop so nothing can be left invisible. Every panel is generated from
the constants the match actually runs on, so the briefing cannot drift away from
the game:

- **01 The round** — buy, contest, spike, round end, with the real `BUY_TIME`,
  `ROUND_TIME`, `SPIKE_PLANT`, `SPIKE_DEFUSE`, and `SPIKE_TIMER` values, plus a
  `STAYING ALIVE` panel that explains the health model below.
- **02 Playlists** — Tactical, Boss Mode, and Wave Mode from `PLAYLISTS`. Click
  one and the choice carries into selection.
- **03 Operators** — all twenty divisions with role, E ability, passive, doctrine
  weapon, and Q special, filterable by role. Click one to enter selection with
  that operator already picked.
- **04 Arsenal** — the four buyable weapons with damage, magazine, price, and how
  many clean hits each needs to drop you, then the full twenty doctrine weapons
  and all twenty-one Series 03 entries.
- **05 Arenas** — all ten with biome, recommended mode, and tactical summary.
- **06 Apex bosses** — all twelve with locomotion class, signature, and bulk.
- **07 Controls and intensity** — the keycap map plus the three difficulty
  profiles with their real bot spread, reaction time, and XP multiplier. Picking
  one here sets it everywhere.
- **08 Deploy** — final call to action and the local-save note.

## You no longer die in four shots

A Pulse Rifle does 31 and a Railgun does 118, so a 100 HP pool meant a four-shot
or a one-shot death, often before you had crossed your own spawn.

- Base operator health 100 → **150**. Animus Prime 125 → **190**, Kinetic Edge
  90 → **135**.
- The human player now takes reduced incoming damage on top of that, scaled by
  combat intensity: **50%** at Rookie, **66%** at Tactical, **82%** at Elite.
- New **deployment shield**: 3.2 seconds of full immunity when a round goes live
  and 2.4 seconds on a wave respawn. It drops the instant you take your first
  shot, so it covers the walk out of spawn and nothing else. A HUD chip counts it
  down.
- Net effect at Tactical: a Pulse Rifle needs **8** clean hits instead of 4, and a
  Railgun no longer one-shots.
- Animus Prime's card copy was updated from `125 max HP` to match the new pool.

## Verification

- `npm run smoke` now walks the title screen first, asserts every briefing panel
  is populated from live data, checks title layout at 360, 768, and 1920 wide
  plus a mobile profile, and measures the survivability baseline through the real
  `damage()` path.
- `npm test` and `npm run check` pass unchanged otherwise.
