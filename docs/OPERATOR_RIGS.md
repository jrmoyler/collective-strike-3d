# Operator rigs — Specimen Series 21

The twenty division operators are procedural, DNA-driven lifeforms. There are no
character meshes in this repository and there will not be any: every operator is
assembled at runtime from primitive geometry (spheres, capsules, cones, boxes,
tori) and shaded by a single seamless toon skin. This is the permanent operator
art direction. Do not replace it with humanoid GLBs, modular character kits, or
imported rigs.

## Source of truth

`DNA` in `COLLECTIVE_STRIKE_3D.html` is the only description of what an operator
is. Each entry carries its name, locomotion class, seed, `cBot` / `cTop` /
`accent` / `eye` colours, scale, body proportions, and feature flags (`ears`,
`tail`, `wing`, `tendrils`, `visor`, `beak`, `brows`, `helmet`, `plates`,
`shell`, `hump`, `helix`, `hourglass`, `coin`, `lens`, `brain`, `mech`,
`sprint`, `dove`, `belly`). `makeRig()` reads the entry and builds the body;
nothing about an operator's anatomy is authored anywhere else.

Division accent colours are exclusive — one per division, no hue collisions.
Amber Gold (`#D4A843`) belongs to the parent specimen and to the single most
important element on a screen, never scattered across division lockups.

## The seamless toon skin

`skinMaterial()` returns a `THREE.ShaderMaterial` built from `TOON_VERT` /
`TOON_FRAG`. One material instance carries the entire anatomy of one creature —
torso, exoshell, head, limbs, feet, tail, ears, antennae — which is what makes a
pile of primitives read as a single body.

| Uniform | Purpose |
| --- | --- |
| `uColorBot` / `uColorTop` | ends of the creature-space vertical ramp |
| `uGradSpan` | `(bottomWorldY, 1/height)`, refreshed every frame from the live silhouette |
| `uAccent` | fresnel rim colour and the selection pulse |
| `uSelect` | selection pulse strength |
| `uLightDir` / `uTime` | shared across every creature in the scene |

Shading is quantised into three bands, the silhouette is closed with a fresnel
rim over a dark contour, and a specular step adds a single hard highlight.

Two integration details differ from the standalone Specimen reference, both
because this scene renders differently:

- The fragment shader ends with `#include <tonemapping_fragment>` and
  `#include <colorspace_fragment>`. The scene tone maps through ACES into an
  sRGB target, and a hand-written shader gets neither for free. Without them the
  operators read several shades brighter than everything they stand on.
- `uSelect` peaks at `0.35` on the menu podium rather than `1.0`. This scene runs
  `UnrealBloomPass` on top of tone mapping, and full strength turns the accent
  rim into a white-out that eats the contour.

Everything that is deliberately *not* creature skin keeps its own material: the
eyes and visor, the emissive division accent strips, and the issued faction
livery. The livery, footprint ring, overhead glyph and callsign plate are the
faction readability channel and are independent of division colour by design.

## Locomotion

`d.loco` selects one of five systems. All of them are driven from the two values
the simulation already produces — world position and velocity — so animation
cannot desync from gameplay.

**Planted-foot stepper** (`biped` 2 legs, `quad` 4, `hex` 6). Feet are solved in
world space and stay planted while the body travels over them. A leg steps only
when the body has outrun it by more than a stride, and opposing gait groups never
lift together unless a leg is badly stranded — that constraint is what produces
the alternating walk, the diagonal trot and the tripod crawl without a single
authored keyframe. Stride length and cadence both track speed, so the foot always
lands ahead of the body. Each foot samples arena elevation at its own landing
spot, so legs follow ramps and platforms.

**Hopper.** Crouch, air and land. The body compresses on contact, stretches
through the arc, and drops a ground ring on touchdown.

**Flyer.** Wing pivots beat as one group with the vanes trailing the leading edge
by a fixed phase, the body bobs on the flap, and pitch leans into forward speed.

**Bank and pitch** apply to every class: bank comes from how fast the heading is
turning, pitch from ground speed.

**Two-bone IK** (`twoBoneIK` + `limbFit`) solves both legs and arms. Stand height
is derived from DNA leg length so the stepper can actually reach the ground.

**Secondary motion** runs on `Spring` instances so tails, ears, antennae and
tendrils lag the body instead of tracking it rigidly.

## Weapon grip

Arms are a separate two-bone IK pair that solves to the live weapon transform —
trigger hand on the grip socket, support hand on the foregrip — and follows
weapon switches, recoil kick, reload, and aim yaw. The smoke run asserts the
socket error stays near zero for every living operator, so any rig change has to
keep the hands on the gun.

The shoulder carries a dangle spring fed by the same gait signal as the legs, so
the carry breathes with the stride without moving the grip point.

## Framing

`fitR` / `fitY` are computed once at build time from the body bounds. That box is
in rig-local space and does not contain the legs, because legs are solved in
world space every frame — `makeRig` folds their reach in by hand. Menu framing
and the rig sheet both read these values.

## Checking a change

`npm run rigs` renders all twenty operators holding their signature weapon into
`screenshots/rigs/`. `npm run check` runs the browser smoke, which asserts rig
count, weapon socket accuracy, draw calls and triangle budget.
