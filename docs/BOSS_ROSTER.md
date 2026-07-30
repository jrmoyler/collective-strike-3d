# Boss Roster — Apex Specimens

## Analysis: current state

Collective Strike 3D has **no bosses in the live 5v5 loop**.  
Gameplay is strictly 5v5 operator squads vs adaptive bot squads on a shared tactical lattice (spike plant/defuse, first-to-six). Operators are built from the same DNA table as Specimen Series 21 (sphere torso + DNA-driven shells/plates/humps/helixes/tendrils, locomotion classes biped / quad / hex / hopper / flyer).

The specimen engine (toon shader, analytic two-bone IK, planted-foot stepper, spring appendages) was ported then reverted; the live game uses the lighter blob rig with two-bone weapon grip arms.

This document introduces a **parallel boss layer** that re-uses the DNA vocabulary and visual language of the 21 specimens but invents completely different locomotion and combat identities. Bosses are not “big operators”. They are apex mutations / corrupted architectures that feel like they belong to the same universe while playing as unique encounter types.

## Design principles

1. **Thematic resonance, mechanical divergence** — each boss echoes one or more division roles (colour, motif, narrative) but introduces a locomotion class or combat role that no operator uses.
2. **Readable at competitive distance** — silhouette and attack telegraphs must read clearly on the existing 36×26 grid and minimap.
3. **Offline-first & low poly** — every boss is still procedural primitives + the shared toon/skin shader path. No external GLBs required for v1.
4. **Drop-in data** — bosses ship as DNA-style objects so `makeBossRig` can mirror `makeRig` without rewriting the whole character pipeline.
5. **Encounter, not roster filler** — intended for rare mid-match events, a future Boss Mode, or post-match “Apex Challenge”, not as ordinary bots.

## New locomotion / archetype classes (not used by any operator)

| Class | Description |
|-------|-------------|
| `colossus` | Multi-segment body, slow, high HP, area denial, foot-stomp shocks |
| `swarm_host` | Core + detachable drone segments that can be destroyed independently |
| `phase` | Short teleport / phase dashes, leaves residual damage fields |
| `orbital` | Semi-static battery with orbiting shield plates / weapons |
| `anchor` | Roots into the grid, pulls targets, time or gravity fields |
| `storm` | High-mobility aerial that generates weather zones (wind, rain, static) |
| `mirror` | Temporarily copies a player ability or weapon profile |
| `helix_titan` | Vertical spiral body that coils / uncoils for reach and cover |

Hybrid bosses declare `loco` (primary) plus `hybrid: [extra classes]`.  
`resolveBossLocos(dna)` returns the full set; `makeBossRig` instantiates every class.

## Cognara differentiation (verified against live HTML)

| Entity | Role | Mechanic |
|--------|------|----------|
| **Operator Cognitive Surge (E)** | Cognara Mind active | Borrows a **random** division active each use (`DIVS[Math.floor(Math.random()*(DIVS.length-1))]`) |
| **Operator Cognitive Brand (Q)** | Cognara Mind doctrine special | Redesigned mark: stacking cognitive brand that amplifies damage taken and briefly reflects a portion of damage. Formerly “EMPATHY MIRROR”. |
| **Boss COGNARA MIRROR** | Apex mirror loco | Copies **only the last player ability used** (`copy_last_player_ability`). Never random. |

These three must remain distinct. The boss ability runner refuses to fall back to random selection when no last-ability was recorded.

## The 12 Apex Bosses

### 1. OVERSEER PRIME  
**Echoes:** Collective AI (Parent)  
**Class:** `colossus`  
**Visual:** Massive dual-torso gold/navy architecture with floating diamond crown and concentric orbital rings.  
**Combat identity:** Arena controller. Plants temporary “doctrine nodes” that buff nearby bots and slow attackers. Stomp creates expanding shock rings on the grid.  
**Why different:** No operator is a multi-segment siege unit; Parent is a biped of normal scale.

### 2. SYNAPSE SWARM  
**Echoes:** Zenflow  
**Class:** `swarm_host`  
**Visual:** Violet core with 4–6 detachable tendril-drones that fly independently.  
**Combat identity:** Core is relatively fragile; drones act as mobile turrets / scouts. Destroying drones weakens the core’s shield.  
**Why different:** Operators never shed body parts that become independent combatants.

### 3. REVENUE COLOSSUS  
**Echoes:** The Collective  
**Class:** `colossus`  
**Visual:** Heavy green-gold quadruped chassis with belly vault and coin-ring armour plates.  
**Combat identity:** Credit siphon — kills or near-misses transfer temporary economy advantage to the enemy team. Slow but extremely high armour.  
**Why different:** Economy interaction is unique; no operator steals credits on contact.

### 4. TUTOR WRAITH  
**Echoes:** Hybrid Living  
**Class:** `phase`  
**Visual:** Soft cyan-yellow phase silhouette that flickers between solid and translucent.  
**Combat identity:** Short-range phase dashes that leave “lesson” residual fields (damage-over-time or accuracy debuff). Hard to track with conventional aim.  
**Why different:** No operator has true phase locomotion.

### 5. NARRATIVE LENS  
**Echoes:** Nexus Labs  
**Class:** `orbital`  
**Visual:** Red multi-camera head on a low mobile base; orbiting lens plates.  
**Combat identity:** Marks one player at a time for amplified damage taken by the whole enemy team. The mark is visible on minimap.  
**Why different:** Team-wide mark / reveal is not an operator ability pattern.

### 6. VELOCITY HOUND  
**Echoes:** Kinetic Edge + Signal Velocity  
**Class:** `storm`  
**Visual:** Elongated green-to-rose sprint form with multiple limb sets that blur when moving.  
**Combat identity:** Extreme speed, leaves wind trails that deflect projectiles and alter movement of anyone inside them.  
**Why different:** Trail-based projectile deflection is new; pure speed archetype beyond any operator.

### 7. LEDGER ORBITAL  
**Echoes:** Quantum Ledger  
**Class:** `orbital`  
**Visual:** Coin-disk body with floating ledger rings and antenna arrays.  
**Combat identity:** Semi-static high-ground battery. Fires prediction beams that land where the target *will be*. Destroying rings reduces accuracy.  
**Why different:** Predictive targeting + destructible orbiting components.

### 8. OWL OF JUDGMENT  
**Echoes:** Juris Guard  
**Class:** `anchor`  
**Visual:** Large golden owl with heavy brow plates and glowing legal-seal eyes; can root into the floor.  
**Combat identity:** Roots and creates a “jurisdiction” circle. Inside the circle, abilities have longer cooldowns or reduced effect for the opposing team.  
**Why different:** Zone that specifically taxes abilities rather than dealing damage.

### 9. COGNARA MIRROR  
**Echoes:** Cognara Mind  
**Class:** `mirror`  
**Visual:** Magenta brain-core with reflective shell and tendril array.  
**Combat identity:** For a short window, copies the **last ability the nearest player used** and turns it against the team.  
**Why different:** Ability theft of a recorded last ability is absent from the operator kit list. Operator Cognitive Surge is random; this is deterministic last-used.

### 10. TERRA SIEGE  
**Echoes:** Terra Axis  
**Class:** `colossus`  
**Visual:** Armoured red-brown siege beetle with dorsal plate stacks and reinforced limbs.  
**Combat identity:** Deploys temporary cover walls (grid-aware) and can “bulldoze” existing cover. Extremely high frontal armour, weak from behind.  
**Why different:** Dynamic cover creation/destruction on the shared lattice.

### 11. LOOM HYDRA  
**Echoes:** Binary Loom  
**Class:** `helix_titan` + `swarm_host` **hybrid**  
**Visual:** Lime spiral torso that can uncoil into multiple attack heads.  
**Combat identity:** Vertical reach attacks over cover; heads can be prioritised. When uncoiled it becomes vulnerable but covers more of the map.  
**Why different:** Vertical / over-cover pressure and multi-targetable body segments.  
**Data shape:** `loco: 'helix_titan', hybrid: ['swarm_host'], segments: 3`.  
`resolveBossLocos` returns both classes; `makeBossRig` instantiates coil + heads.

### 12. EON ANCHOR  
**Echoes:** Eon Core  
**Class:** `anchor`  
**Visual:** Pale hourglass titan that plants itself and rotates the two lobes.  
**Combat identity:** Local time dilation field — projectiles and movement slow inside the field, boss actions remain normal speed.  
**Why different:** Time-scale zone is unique; no operator manipulates global or local time.

## Live encounter hooks

- **Apex Challenge** — the winning squad from a completed Tactical match
  immediately battles a no-repeat random boss before the results screen.
- **Boss Mode** — a separate five-operator-vs-Apex playlist.
- **Wave Mode** — four escalating waves containing all 15 unselected operators,
  followed by a random boss in wave five.

## Implementation notes for the engine

- Boss DNA lives in `src/boss-dna.js` (exported array + lookup map + `resolveBossLocos`).
- Procedural abilities live in `src/boss-abilities.js` (full table and live
  runner for all 12).
- Visual construction lives in `src/boss-rig.js`: every locomotion class has a
  distinct full-mesh build and update path; hybrid rigs combine both paths.
- Encounter planning, squad selection, safe spawns, and circular multi-cell
  occupancy live in `src/boss-mode.js`.
- The browser build exposes these first-party modules through the vendored
  offline runtime as `window.CS3D_BOSS`.
- Keep the offline / vendored contract: no network asset loads.
- Performance budget: a single boss + its drones should stay under the cost of ~3–4 normal operators.

## Status

- Design + data: complete for all 12 bosses.
- Tactical Apex Challenge, Boss Mode, and five-stage Wave Mode: live.
- Safe spawn rules and multi-cell collision occupancy: live.
- Full-mesh locomotion, hybrid LOOM HYDRA animation, boss HUD, and minimap
  iconography: live.
- Cognara Mirror vs Cognitive Surge vs Cognitive Brand: differentiated.
