# Asset attribution and provenance

This manifest covers binary arena assets introduced by the arena content pass.

## Arena content pass

No binary model or texture was introduced by the Neon Foundry reference pass.
Its kit geometry is constructed locally with Three.js primitives and its surface
maps are deterministically generated in memory by `src/arena-assets.js`. It makes
no runtime network request and requires no external decoder.

Future files under `assets/models/` and `assets/textures/` must record the asset
name, original author, source URL, license, local path, and SHA-256 here before
they are committed. CC0 files are not exempt from this provenance requirement.

Existing soundtrack binaries predate this arena pass and are outside its scope;
their authorship and production provenance are documented in `docs/SOUNDTRACK.md`.
