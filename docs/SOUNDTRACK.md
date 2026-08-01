# Soundtrack integration

The browser soundtrack is defined in `src/soundtrack-manifest.js` and played by
`src/audio-manager.js`. All MP3s remain unconverted in `assets/audio/`; the
build copies that directory unchanged to `dist/assets/audio/`.

## Routing

| Game state or event | Track key |
|---|---|
| Initial title, after the first valid gesture | `main_title`, then `main_menu` |
| Operator / playlist menu | `main_menu` |
| Arena and loadout selection | `selection` |
| Forge, Neon, Cryo | `arena_combat_1` |
| Verdant, Solar | `arena_combat_2` |
| Abyss, Tempest, Lunar | `arena_combat_3` |
| Caldera, Mirage | `arena_combat_4` |
| Boss Mode or Apex Challenge | `BOSS_TRACKS[bossId]` |
| Wave Mode final boss | `final_boss` |
| Boss defeat or completed arena | `boss_defeat`, then `results` |
| Player defeat | `player_defeat`, then `results` |
| Results / career progression | `results` |
| Future credits view | `credits` via `window.CS3D_showCreditsMusic()` |

The arena registry does not expose a numeric threat tier. Combat records
therefore follow the canonical ten-arena progression order in 3 / 2 / 3 / 2
bands. Wave Mode's fifth stage is the repository's real final-boss encounter;
Boss Mode and Tactical Apex Challenge remain boss-ID-specific.

## Supplied-folder discrepancy

The supplied Google Drive folder contained 24 MP3 files. It did not contain
the listed `Final Boss — Collective Override.mp3`, and a Drive-wide title
search did not find it. The `final_boss` key is intentionally present with no
invented file path and falls back to `standard_boss`. When that MP3 is added,
only the `final_boss` manifest entry needs a local filename.
