# Collective Strike 3D v1.2 — Arena Ascendant

## Four arenas that feel like places

- Rebuilt Iron Forge with foundry stacks, turbines, heat haze, sparks, molten
  channels, industrial materials, and layered warm lighting.
- Rebuilt Neon District with a city skyline, animated holographic billboards,
  wet surfaces, luminous conduits, rainfall, and cyan-magenta ambience.
- Rebuilt Cryo Lab with transmissive ice formations, coolant machinery, cold
  vapor, suspended frost, clinical lighting, and frozen material treatment.
- Rebuilt Verdant Ruins with overgrown trunks, canopy foliage, vines, spores,
  luminous flora, weathered structures, and organic green-gold light.
- Arena selection now rebuilds the actual 3D scene instead of changing only the
  menu treatment and fog color.
- Removed random walkable-lane clutter and moved cover dressing onto known
  collision cells so every sightline remains readable and fair.

## Smarter, more expressive matches

- Added grid-aware bot pathfinding around walls and cover.
- Bots now play preferred weapon ranges, strafe, flank, regroup, recover a
  dropped spike, select a defuser, and support the objective.
- Difficulty changes reaction time, spread, aggression, ability usage,
  doctrine usage, and XP rewards.
- AI operators use their abilities and team doctrines instead of behaving like
  identical moving targets.

## A reason to play another round

- Added persistent career XP, levels, operator mastery, best streak, and
  per-arena wins.
- Added match reward presentation and visible level progress.
- Awarded progression for eliminations, plants, defuses, round wins, and match
  completion.
- Added contextual first-match coaching for movement, firing, abilities, and
  doctrines.
- Added Rookie, Tactical, and Elite profiles so the same build works for new
  players and returning tactical-game fans.

## Presentation and feel

- Upgraded rendering to ACES filmic tone mapping, sRGB output, soft shadows,
  theme-aware bloom, and richer physical materials.
- Added arena-specific particles, environmental motion, hazard lighting,
  skirting, conduits, light shafts, and landmarks.
- Refined all operator rigs with denser silhouettes, layered exoshell armor,
  division-colored trim, emissive chest cores, and higher-resolution geometry.
- Preserved two-bone weapon-hand inverse kinematics and verified socket
  alignment during live play.
- Expanded the operator select, difficulty select, coach prompt, career meter,
  and post-match reward experience without introducing runtime network access.

## Engineering

- Repaired the dependency lockfile so clean installs reproduce Three.js r185
  and anime.js 4.5.
- Added contracts for arena reconstruction, theme-specific architecture,
  collision-safe dressing, pathfinding, difficulty, progression, and operator
  exoshells.
- Added arena-selectable headless gameplay checks and runtime assertions for
  render composition, operator count, pathfinding, progression, and rig socket
  integrity.
- Protected shared geometry from arena teardown and made vendored output
  deterministic and whitespace-clean.
