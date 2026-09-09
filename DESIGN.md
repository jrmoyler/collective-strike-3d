# Collective Strike 3D — preserved-identity overhaul

The game is a browser tactical squad shooter. The primary selection action is choosing an existing division operator and then an arena; success means the player can compare the original kit, recognize the character, deploy, and play all three existing modes.

## Locked content

Preserve the twenty operator identities, authored anatomy, palettes, signatures, abilities, saves, ten arena topologies and twelve boss identities. Existing arena concept images guide real geometry. No image panels replace playable assets. Repairing obscured facial attachments or detached hands restores the existing design intent.

## Selection presentation

Retain the existing DOM grid, card structure and responsive reflow. The center showcase should emphasize the operator and held weapon. Use a compact opaque charcoal metal pedestal with a fine gold rim, neutral key light and restrained colored rim light. Remove the oversized translucent concentric pedestal. Frame the model closer and nearer eye level; maintain full appendage visibility. Reduce selection bloom without reducing gameplay feedback.

Keep Space Grotesk for existing headings/body and JetBrains Mono for labels/stats, with system sans-serif/monospace fallbacks. Retain existing responsive sizes and weights: bold headings, regular body, tracked uppercase compact labels. Existing colors remain: navy #050A18, charcoal #0D1326, white #F5F5F5, silver #8B9BAE, gold #D4A843. Division colors identify the operator, not a full-screen lighting wash.

Existing controls retain default, hover, selected, pressed, disabled and visible keyboard focus states. Primary deployment remains prominent. Keep existing spacing, widths and touch targets; no framework or external component library is introduced for this focused correction. Replace implementation-facing preview copy with player-facing kit guidance.

## Motion and gameplay

Use the existing bundled Anime.js transitions. Preview orbit stops for reduced motion. Pedestal is static. Camera following uses time-based damping, bounded aim lead and actor elevation. Existing shake preference remains respected. Real weapon sockets drive hands through pitch, yaw, recoil and reload. Effects have explicit quality budgets and teardown.

## Validation

Review actual WebGL operator, arena and gameplay captures. Check desktop and 360–390px mobile menus for clipping, overflow, reachable deployment and visible focus. Run tactical, boss and wave flows plus controller/touch/pause/restart checks. Enforce existing measured arena draw/triangle ceilings. Automated mobile viewport checks do not represent physical-device performance testing.
