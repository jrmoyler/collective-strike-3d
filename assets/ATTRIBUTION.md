# Asset attribution and provenance

This manifest covers binary arena assets introduced by the arena content passes.

## Arena content passes

**No binary model or texture has been introduced by any arena content pass.**

| Arena | Pass | Models added | Textures added | Total bytes |
| --- | --- | --- | --- | --- |
| Neon Foundry (`forge`) | `forge-strategy-kit-v2` | none | none | 0 |
| Sunken Archive (`abyss`) | `abyss-strategy-kit-v1` | none | none | 0 |

Both passes are entirely procedural. Kit geometry is constructed locally from
Three.js primitives in `src/arena-content.js`, and every surface map is generated
deterministically in memory by `proceduralSurfaceSet()` in `src/arena-assets.js`.
Neither pass makes a runtime network request, and neither requires an external
decoder. `assets/models/` and `assets/textures/` do not exist because nothing has
needed to go in them.

`npm run budget` measures `assets/models/` and `assets/textures/` on every run and
records the byte totals in `docs/arena-shots/budget.json`; both currently read 0
against a 12 MB ceiling for all ten arenas combined.

## Requirement for any future binary

Every file added under `assets/models/` or `assets/textures/` must be recorded
here **before it is committed**, with all six fields:

| Field | Required |
| --- | --- |
| Asset name | yes |
| Original author | yes |
| Source URL | yes |
| License | yes |
| Local repository path | yes |
| SHA-256 | yes |

CC0 files are not exempt: a repository that cannot say where a binary came from
cannot be audited. Binaries must be loaded only by repository-relative path — no
CDN reference, no remote decoder, no runtime download. Download and optimisation
steps stay outside `npm run build`, which must keep working with zero network
access against already-committed files.

## Out of this manifest's scope

Existing soundtrack binaries under `assets/audio/` predate the arena content
passes. Their authorship and production provenance are documented in
`docs/SOUNDTRACK.md`.

The ten arena concept references under `docs/arena-concepts/` are design evidence
generated for this project, described in `docs/arena-concepts/README.md`. The
runtime never loads or textures from them.
