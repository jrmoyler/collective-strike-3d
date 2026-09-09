# Arena upgrade pipeline

This directory contains actual geometry and render evidence, not concept images
presented as playable assets. The game ships `src/arena-assets.js` procedural
Three.js factories. `forge-runtime.glb` and `forge-runtime.blend` are geometry
inspection/export artifacts of those same runtime factories; neither is fetched
by gameplay. Procedural runtime textures remain in source and are intentionally
not baked into the neutral Blender geometry study.

## Reproduce

1. `node scripts/export-arena-review.mjs` exports every actual named mesh,
   instanced transform, socket and destruction-group membership.
2. `blender --background -t 4 --python scripts/blender-arena-review.py` loads the
   actual triangle data, converts Y-up to Z-up, exports GLB, saves editable
   Blender, and renders three geometry inspection angles. Executed with official
   Blender 4.5.3 LTS, commit 67807e1800cc.
3. `CS3D_CHROMIUM=/path/to/chrome node scripts/capture-arena-landmark.mjs` bundles
   the actual Three.js factory and captures three WebGL orbit views plus renderer
   counters and console errors.
4. `node --test tests/arena-assets.test.js tests/arena-content.test.js` checks
   stable topology-independent factories, complete PBR channels, no transmission,
   normalized normals, sRGB encoding and the one-call sky budget.
5. `npm run build && npm run budget` measures integrated gameplay. The original
   draw/triangle ceilings remain the acceptance gate.

## Changes driven by evidence

The first WebGL inspection revealed crushed albedo and high-frequency checker
aliasing. A linear working color had been stored directly into a texture tagged
sRGB, causing a second decode; DataTexture defaults also lacked mipmaps. The
corrected source explicitly encodes sRGB and configures mipmapped linear sampling
with anisotropy four. Normal amplitudes are now restrained across landmark,
living-set, authored arena and content-kit surfaces. Forge uses ceramic and
oxidized steel from the source concept instead of painting every material orange.
The revised WebGL capture visibly resolves the checker/sparkle failure.

All ten arenas receive distinct authored surface finish profiles and a bounded
layered sky: one draw call, 528 triangles, no textures, no shadow pass and no
extra frame loop. Combat topology, collision cells, platforms, pickups, operators
and weapon identity are unchanged by this layer. Forge adds 48 instanced band
fasteners, a 14-instance service ladder, and a molten reservoir disk.

## Review boundaries

The source concept guides a stylized real-time upgrade. Exact photoreal likeness
is **not** accepted. The source has a wider buttressed base, denser grated decks,
more pipe joints, bevels and local wear than the runtime model. The top crucible
and rail remain simplified. A single concept cannot establish hidden geometry.

`.img2threejs/forge/` is the local state, intake, concrete runtime component spec,
reference material evidence, deterministic diagnostics, and continuation ledger.
This is a direct-authoring audit of an existing procedural model, not a claim
that historical generator passes happened. Strict upstream exact-reference
validation remains failed and is preserved; the orbit-volume check passes, while
unmatched camera/scale/silhouette and unbaked reference materials prevent strict
reference acceptance. The comparison is diagnostic evidence, not a fabricated
passing likeness score. The runtime upgrade's functional and material tests are
independent of that stricter claim.

The completed equivalent direct-route review is recorded in
`.img2threejs/forge/equivalent-review.json`. Part coverage verifies 114 specified
and 114 built meshes with zero errors. Isolated WebGL reports 54 calls and 6,100
triangles at each angle with no console errors. The structural and runtime
upgrade is accepted with the explicit source-reference limitations above.

Capture retention: the first rejected screenshot was overwritten by the capture
harness before archival. Its original diagnostic render hash and failure report
remain in review-01; no corrected screenshot is labeled as that original render.
