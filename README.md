# Collective Strike 3D

A browser-native 5v5 tactical arena built with Three.js. Choose one of 20 Collective AI division operators, buy weapons, use operator abilities and team doctrines, plant or defuse the spike, and fight first-to-six matches against adaptive bot squads.

Ten fully realized combat spaces ship in the offline build: Neon Foundry,
Sunken Archive, Skygrave Bastion, Verdant Overrun, Cryo Rift, Null Cathedral,
Neon Canopy, Solar Bastion, Lunar Excavation, and Ember Caldera. Each arena has
its own footprint, spawn-and-site geometry, hazards, interactables, traversal
mechanics, procedural textures, PBR material response, architecture,
atmosphere, landmarks, lighting, and animated environmental effects.

Every layout is measured, not eyeballed. `ARENA_LAYOUT_RULES` in
`src/arena-core.js` defines what a playable plant/defuse map is — how far
attackers walk to each site, how far defenders rotate, how far apart the sites
and spawns sit — and the test suite walks the collision grid of all ten arenas
against it. No arena can ship with a site parked next to a spawn or a defender
hold that covers both sites at once.

All ten also ship a **strategy kit**: the art layer that turns authored gameplay
data into something a player can read at a glance, built from instanced prop
families rather than per-prop meshes. A kit's block skins are footprint-exact
against the collision grid, its props never stand over a void, and every
authored hazard and interactable resolves to a visual driven by the same
simulation clock the gameplay runs on — all four enforced by tests, and the
whole roster measured in a live round by `npm run budget`. See
[`docs/ARENA_STRATEGY_KITS.md`](docs/ARENA_STRATEGY_KITS.md).

## Reading a fight

Twenty divisions can appear on either side, so division colour never answers
"do I shoot this?". Faction is carried on its own redundant channel: a
footprint ring under every operator (calm closed ring for allies, barbed
pulsing ring for hostiles, white-gold ring with a heading wedge for you), an
overhead chevron or diamond, issued team livery on the rig itself, and a
floating callsign plate that names the faction and shows live health. The
minimap, scoreboard, kill feed and crosshair use the same palette and the same
glyphs, and the palette follows the colour-vision setting.

Landing a shot confirms four ways at once: a reticle hitmarker that changes
shape for armour, criticals and eliminations; a floating damage number coloured
to match; a camera-facing impact burst on the body you hit; and a distinct
audio tone per hit kind.

Every session opens on a branded title and briefing screen. The wordmark sits
over a live cinematic orbit of the arena rendered by the same Three.js scene the
match uses, and eight scroll sections break down the round loop, the three
playlists, all twenty operators, the full arsenal, the ten arenas, the twelve
Apex bosses, and the controls. Every panel is generated from the constants the
match actually runs on, so the briefing cannot drift out of sync. Picking an
operator, playlist, or combat intensity from the briefing carries the choice
straight into operator select through a band-wipe transition.

After choosing an operator or squad, deployment advances to a dedicated live
map-selection screen. The selected arena is rendered as an isometric tactical
miniature with Site A/B and team-spawn markers, biome and mode guidance,
keyboard/click navigation, and an explicit deployment confirmation.

Three difficulty profiles make the game welcoming for a first-time player and
still demanding for tactical-game veterans. A 200-rank Operations track,
rotating contracts, persistent career XP, operator and weapon mastery, arena
wins, best streak, contextual coaching, and after-action rewards give every
session a clear arc.

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
| `npm test` | Runtime unit tests plus static HTML/offline contracts |
| `npm run vendor` | Rebuild the pinned Three.js / anime.js runtime bundle |
| `npm run fonts` | Rebuild the inlined webfont stylesheet |
| `npm run build` | Vendor + fonts + `dist/` |
| `npm run audio:check` | Validate all local soundtrack files and manifest entries |
| `npm run smoke` | Headless Chromium playthrough into a live round, fails on any console, page, or network error |
| `npm run rigs` | Render a close-up sheet of all 20 operator rigs holding a weapon |
| `npm run check` | `test` + `build` + `audio:check` + full browser smoke |

`npm run smoke` and `npm run rigs` write into `screenshots/` (git-ignored).

## Controls

- `WASD`: move
- Mouse: aim and fire
- `E`: operator ability
- `Q`: team doctrine
- `F`: plant or defuse
- `B`: armory
- `R`: reload
- `1–5`: weapon select (slot 5 is the division's signature weapon)
- `6`: cycle the expanded Series 03 and Ascendant armory

The armory contains 20 division signatures, 21 Series 03 weapons, and 20 new
Ascendant weapons—one purpose-built for each division. Every weapon carries its
own silhouette — magazine rake, stock, carry handle, scope, bipod and muzzle
brake — plus its own livery tint, material finish, tracer colour, and tactical
effect.
Switching lowers and re-presents the rig's weapon, costs a short ready time,
moves the HUD weapon rail, and raises a card naming the weapon and its damage,
rate of fire and magazine.
- `Tab`: scoreboard
- `Esc`: pause

Touch and standard dual-stick gamepads are supported.

Runtime architecture, safe extension points, save migrations, teardown ownership,
quality budgets, and browser expectations are documented in
[`docs/GAMEPLAY_RUNTIME.md`](docs/GAMEPLAY_RUNTIME.md).

## Operators

Every operator is a procedural Specimen Series 21 lifeform: primitive geometry
assembled from a DNA entry and shaded by one seamless toon skin per creature, with
a planted-foot stepper, hopper and flyer cycles, two-bone IK, and spring-driven
tails, ears and antennae. There are no character meshes in the repository and
there will not be any. The system is documented in
[`docs/OPERATOR_RIGS.md`](docs/OPERATOR_RIGS.md).

## Survivability

Operators carry 150 health; Animus Prime runs 190 and Kinetic Edge trades down to
135 for speed. The player you control also absorbs part of the incoming damage,
scaled by combat intensity (50% at Rookie, 66% at Tactical, 82% at Elite), and a
3.2-second deployment shield covers the opening of every round. The shield drops
the moment you take your first shot, so it protects the walk out of spawn without
protecting an aggressive opening duel. At Tactical a Pulse Rifle needs eight
clean hits to drop you and a Railgun no longer one-shots.

## Progression and difficulty

- `Rookie`: forgiving aim, slower reactions, lighter ability pressure
- `Tactical`: the intended balanced experience
- `Elite`: faster flanks, sharper aim, aggressive ability and doctrine use

Career XP, operation rank, rotating contract progress, operator mastery, and
weapon mastery are stored locally in the browser. Nothing is uploaded, and
clearing browser storage resets progression.

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
