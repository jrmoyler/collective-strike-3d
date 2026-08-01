(function registerCollectiveStrikeSoundtrack(root) {
  "use strict";

  const AUDIO_ROOT = "assets/audio/";
  const track = (filename, options = {}) => Object.freeze({
    filename,
    path: filename ? AUDIO_ROOT + filename : null,
    loop: options.loop !== false,
    persistent: options.persistent !== false,
    fallbackKey: options.fallbackKey || null,
    nextTrackKey: options.nextTrackKey || null,
    note: options.note || null
  });

  const TRACKS = Object.freeze({
    main_title: track("Main Title — Collective Strike.mp3", { loop: false, fallbackKey: "main_menu", nextTrackKey: "main_menu" }),
    main_menu: track("Main Menu Loop — Command Interface.mp3"),
    selection: track("Arena  Loadout Selection — Choose Your Strike.mp3", { fallbackKey: "main_menu" }),
    arena_combat_1: track("Arena Combat I — First Contact.mp3"),
    arena_combat_2: track("Arena Combat II — Pressure Field.mp3", { fallbackKey: "arena_combat_1" }),
    arena_combat_3: track("Arena Combat III — Fracture Line.mp3", { fallbackKey: "arena_combat_2" }),
    arena_combat_4: track("Arena Combat IV  Endgame — Terminal Vector.mp3", { fallbackKey: "arena_combat_3" }),
    standard_boss: track("Standard Boss Encounter — Hostile Intelligence.mp3", { fallbackKey: "arena_combat_1" }),
    // The supplied Drive folder contains 24 files, not the stated 25. Keep the
    // final-wave route live and deterministic; it resolves to standard_boss
    // until the missing Collective Override MP3 is added under this key.
    final_boss: track(null, {
      fallbackKey: "standard_boss",
      note: "Final Boss — Collective Override.mp3 was not present in the supplied Drive folder."
    }),
    boss_defeat: track("Boss Defeat  Arena Clear — Signal Broken.mp3", { loop: false, persistent: false }),
    player_defeat: track("Player Defeat — System Failure.mp3", { loop: false, persistent: false }),
    results: track("Results  Progression Screen — After Action.mp3", { fallbackKey: "main_menu" }),
    credits: track("Credits  Completion — Strike Complete.mp3", { fallbackKey: "main_menu" }),
    boss_overseer_prime: track("OVERSEER PRIME — Doctrine Nodes  Stomp Rings.mp3", { fallbackKey: "standard_boss" }),
    boss_synapse_swarm: track("SYNAPSE SWARM — Detach Drones.mp3", { fallbackKey: "standard_boss" }),
    boss_revenue_colossus: track("REVENUE COLOSSUS — Credit Siphon.mp3", { fallbackKey: "standard_boss" }),
    boss_tutor_wraith: track("TUTOR WRAITH — Phase Dash  Residual Fields.mp3", { fallbackKey: "standard_boss" }),
    boss_narrative_lens: track("NARRATIVE LENS — Narrative Frame.mp3", { fallbackKey: "standard_boss" }),
    boss_velocity_hound: track("VELOCITY HOUND — Wind Trails.mp3", { fallbackKey: "standard_boss" }),
    boss_ledger_orbital: track("LEDGER ORBITAL — Prediction Beams.mp3", { fallbackKey: "standard_boss" }),
    boss_owl_of_judgment: track("OWL OF JUDGMENT — Jurisdiction.mp3", { fallbackKey: "standard_boss" }),
    boss_cognara_mirror: track("COGNARA MIRROR — Mirror Last.mp3", { fallbackKey: "standard_boss" }),
    boss_terra_siege: track("TERRA SIEGE — Cover Factory.mp3", { fallbackKey: "standard_boss" }),
    boss_loom_hydra: track("LOOM HYDRA — Coil Strike  Hydra Heads.mp3", { fallbackKey: "standard_boss" }),
    boss_eon_anchor: track("EON ANCHOR — Time Dilation.mp3", { fallbackKey: "standard_boss" })
  });

  const BOSS_TRACKS = Object.freeze({
    overseer_prime: "boss_overseer_prime",
    synapse_swarm: "boss_synapse_swarm",
    revenue_colossus: "boss_revenue_colossus",
    tutor_wraith: "boss_tutor_wraith",
    narrative_lens: "boss_narrative_lens",
    velocity_hound: "boss_velocity_hound",
    ledger_orbital: "boss_ledger_orbital",
    owl_of_judgment: "boss_owl_of_judgment",
    cognara_mirror: "boss_cognara_mirror",
    terra_siege: "boss_terra_siege",
    loom_hydra: "boss_loom_hydra",
    eon_anchor: "boss_eon_anchor"
  });

  // The ten arenas have no explicit numeric threat field. Their canonical
  // ARENA_ORDER is the real progression signal, so the four combat records
  // advance across that order in 3 / 2 / 3 / 2 arena bands.
  const ARENA_TRACKS = Object.freeze({
    forge: "arena_combat_1",
    neon: "arena_combat_1",
    cryo: "arena_combat_1",
    verdant: "arena_combat_2",
    solar: "arena_combat_2",
    abyss: "arena_combat_3",
    tempest: "arena_combat_3",
    lunar: "arena_combat_3",
    caldera: "arena_combat_4",
    mirage: "arena_combat_4"
  });

  root.CS3D_SOUNDTRACK = Object.freeze({ AUDIO_ROOT, TRACKS, BOSS_TRACKS, ARENA_TRACKS });
})(typeof window !== "undefined" ? window : globalThis);
