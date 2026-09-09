# Collective Strike 3D overhaul

## Purpose

Improve the original game without replacing its characters, weapons, arena layouts or progression. Based on main at `6f9e753` (PR #33 merged). Work split across operator/weapon art, arena reconstruction, combat logic, effects, browser QA and integration.

## Playable changes

- Original operator surfaces have smoother shading and attached detail. Existing facial attachments were being scaled twice and buried inside heads; their original authored placement is restored. No replacement character meshes or identities.
- Weapon hands follow the complete weapon transform during aiming, recoil, reload and swapping. Standard receiver hardware, metallic response and bounded heat afterglow improve the held weapons.
- Ten arenas gain layered atmospheric skies, corrected albedo encoding, mipmapped surface textures and controlled normal detail. Forge gains reference-guided industrial hardware, a ladder and molten reservoir. Collision topology is unchanged.
- A generated local reflection environment reveals material response without downloading an HDR image. It is recreated after context restoration and disposed at shutdown.
- Impact smoke, sparks and lit fragments use batched rendering. Effects respect quality reduction and clear on teardown. Particle birth times, tracer limits, decal orientation and resource cleanup are repaired.
- Remote shots pan toward their source, attenuate with distance and muffle behind cover. Completed audio voices disconnect their nodes.
- Camera movement uses frame-independent damping, bounded aim lead and actor elevation.
- Keyboard/touch/gamepad holds no longer cancel one another. Paused controller holds are cleared. Simultaneous due callbacks respect match cancellation. Recovered recoil restarts its burst pattern. Bots select reachable defusers and reassign blocked routes. Old spike blasts cannot damage a newly spawned Apex encounter.
- Operator selection uses a compact metal pedestal, closer camera, neutral key light and lower bloom. Existing Anime.js menu transitions and accessibility controls remain active.

## Preservation evidence

The operator, doctrine and Series 03 registry source blocks are byte-identical to main. Operator registry SHA-256: `216da229a8a5a3f1225ab30d313efa2386b47a475970d721a91804dac28d9421`.

Twenty operators, ten arenas, twelve bosses, three playlists and 65 total weapons remain: four base classes plus 20 doctrine, 21 Series 03 and 20 Ascendant weapons. Saves, soundtrack and progression formats are unchanged. Audio checks confirm all 24 shipped MP3s remain byte-identical.

## Dependencies and asset work

Three.js is pinned to 0.186.0 and Anime.js to 4.5.0. Migration was checked against the [official Three.js migration guide](https://github.com/mrdoob/three.js/wiki/Migration-Guide#185--186); menu animation uses the [Anime.js animation API](https://animejs.com/documentation/animation). No runtime CDN is introduced.

Blender 4.5.3 LTS was installed and executed for the Forge review/export pipeline. See [arena pipeline record](arena-pipeline/README.md) for reproducible commands, local img2threejs state, specification, comparison images, multi-angle WebGL/Blender renders, part coverage, editable `.blend` and exported `.glb`. The Three.js factories remain the live geometry source; exports are authoring/review artifacts, not a substitution for gameplay.

## Validation

`npm run test`: 173 tests passed plus static game integration verification. `npm run build` and `npm run audio:check` passed. Browser evidence and any isolated reruns are recorded with the QA artifacts.

All ten arenas passed the unchanged measured rendering ceilings. Arena share: 83–119 draw calls and 21,554–37,584 triangles. Measured complete live scenes: 458–580 calls and 255,006–321,066 triangles. These are scene-complexity measurements, not physical-device frame-rate claims.

Actual WebGL effect rendering compiled cleanly, using two active particle batches plus one instanced debris draw in the captured scenario. Quality reduction and cleanup were checked. Live hand socket error was approximately `1.4e-14` world units.

## Limits

This is a stylized procedural game, not a photoreal reconstruction. The asset record keeps exact-reference/legacy-generator acceptance gaps visible rather than manufacturing passing scores. Desktop and emulated mobile viewport/controller checks ran in Chromium with software WebGL; physical Android/iOS performance and store certification were not tested. No merge or production deployment is performed by this PR.
