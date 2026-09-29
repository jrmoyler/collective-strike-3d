# Collective Strike 3D v1.6 — App Store Pass

## Installable, offline app (PWA)
- Web app manifest (`manifest.webmanifest`) with 192/512/maskable/SVG icons,
  full-screen display, landscape orientation, and theme colours.
- Service worker (`sw.js`) precaches the app shell per build (the build stamps
  a content id and the precache list), serves pages network-first so deploys
  arrive, and caches each soundtrack on first play with byte-range support
  for media elements.
- Install surfaces: an **Install app** chip that fires the native install
  prompt on Chromium, and an Add to Home Screen sheet on iOS Safari.
- In-app **Update** toast when a new build is waiting.
- iOS/Android meta tags (status bar, home-screen title, apple-touch-icon).

## Native feel
- Branded boot splash with the new app icon.
- Haptic feedback for hits, eliminations, damage taken, round wins/losses,
  and cooldowns coming back (toggle in Pause).
- Deploying on a phone enters fullscreen and locks landscape.
- Press states on every menu button; tap highlight, long-press menus, pinch
  and double-tap zoom are suppressed during play.

## Mobile + desktop layout
- Arena select rebuilt for phones: the live miniature is re-framed into the
  visible area, the roster becomes a swipeable card rail, the brief is a
  compact sheet, and the actions sit in a thumb-reach dock (portrait and
  landscape layouts).
- Phone-landscape combat HUD: status cards move to the top corners, a compact
  minimap sits under health, action buttons arc around each thumb stick, and
  toasts are capped so they never pile over the fight. Left-handed mirroring
  is preserved. A new smoke assertion fails the build if any landscape touch
  control overlaps a stick, another control, or a HUD card.
- Touch aim stick auto-fires past ~62% deflection; E/Q buttons show their
  cooldown seconds.
- Title screen fits phone landscape above the fold.

## Fixes
- **Arena washed out to flat grey on LOW quality.** Toggling shadows at
  runtime never recompiled materials; the automatic quality scaler hit this on
  slower phones. Materials now recompile when shadow support changes.
- Strike/Sentinel team tabs were clipped on desktop operator select.
- Desktop key legend wrapped into the coach prompt; it is now one line and
  hides below 1200px.
- Arena-select header collided with the music toggle on phones.
