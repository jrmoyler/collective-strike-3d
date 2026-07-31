/* Collective Strike 3D v1.3 — live arena-selection runtime (offline, no CDN).
 * Owns the ten-arena registry and the DOM controller for the post-operator
 * isometric deployment screen. The game runtime supplies the Three.js hooks.
 */
(function () {
  "use strict";

  const ARENAS = {
    forge: {
      id: "forge",
      name: "FORGE LATTICE",
      tag: "Heavy-industry combat facility",
      biome: "Molten industrial basin",
      recommendedMode: "TACTICAL",
      tacticalSummary: "Long central pressure lanes reward disciplined utility. Split through the service corridors before collapsing onto either elevated plant site.",
      accent: "#d4a843",
      secondary: "#38bdf8",
      accentHex: 0xd4a843,
      secondaryHex: 0x38bdf8,
      fog: 0x060d1c,
      fogDensity: 0.0052,
      bg: "#030712",
      floor: ["#111827", "rgba(212,168,67,.18)"],
      floorTint: 0xa8b4c8,
      floorRoughness: 0.68,
      floorMetalness: 0.28,
      wall: 0x778399,
      wallEmissive: 0x101827,
      outer: 0x050912,
      trim: 0xd4a843,
      architecture: "forge",
      particle: 0x9fc4ff,
      description: "A working foundry with heat stacks, service gantries, pressure pipes, and hazard-lit A/B sites."
    },
    neon: {
      id: "neon",
      name: "NEON CANOPY",
      tag: "Rain-swept cyber rooftops",
      biome: "Megacity cloud layer",
      recommendedMode: "WAVE MODE",
      tacticalSummary: "Bright sightline edges make movement readable, but rain and holograms conceal flanks. Hold the center bridge to rotate cleanly between sites.",
      accent: "#f472b6",
      secondary: "#22d3ee",
      accentHex: 0xf472b6,
      secondaryHex: 0x22d3ee,
      fog: 0x0a0618,
      fogDensity: 0.0044,
      bg: "#05010f",
      floor: ["#130a21", "rgba(34,211,238,.2)"],
      floorTint: 0x8b7bb7,
      floorRoughness: 0.4,
      floorMetalness: 0.52,
      wall: 0x49386f,
      wallEmissive: 0x190d2d,
      outer: 0x03010a,
      trim: 0xf472b6,
      architecture: "neon",
      particle: 0xf9a8d4,
      description: "A luminous rooftop lattice surrounded by animated towers, transit rails, rain, and holographic signage."
    },
    cryo: {
      id: "cryo",
      name: "CRYO RELAY",
      tag: "Sub-zero research outpost",
      biome: "Polar ice shelf",
      recommendedMode: "TACTICAL",
      tacticalSummary: "Reflective floors expose rushed pushes while dense frost softens distance reads. Clear crystalline corners before committing to a site.",
      accent: "#7dd3fc",
      secondary: "#e0f2fe",
      accentHex: 0x7dd3fc,
      secondaryHex: 0xe0f2fe,
      fog: 0x0a1524,
      fogDensity: 0.0068,
      bg: "#020810",
      floor: ["#102236", "rgba(224,242,254,.22)"],
      floorTint: 0xc5d9ea,
      floorRoughness: 0.32,
      floorMetalness: 0.18,
      wall: 0x7390a8,
      wallEmissive: 0x0b2237,
      outer: 0x02070d,
      trim: 0x7dd3fc,
      architecture: "cryo",
      particle: 0xe0f2fe,
      description: "A frozen relay station with coolant vessels, translucent ice accretion, cold haze, and crystalline machinery."
    },
    verdant: {
      id: "verdant",
      name: "VERDANT CORE",
      tag: "Reclaimed bioluminescent lab",
      biome: "Post-human rainforest",
      recommendedMode: "BOSS MODE",
      tacticalSummary: "Organic silhouettes break up hard cover reads. Use the amber lane lighting to anchor rotations and reserve the broad center for coordinated pushes.",
      accent: "#4ade80",
      secondary: "#fbbf24",
      accentHex: 0x4ade80,
      secondaryHex: 0xfbbf24,
      fog: 0x06140c,
      fogDensity: 0.0058,
      bg: "#020a06",
      floor: ["#0b1d12", "rgba(74,222,128,.17)"],
      floorTint: 0x7fa78a,
      floorRoughness: 0.82,
      floorMetalness: 0.08,
      wall: 0x496957,
      wallEmissive: 0x0b2414,
      outer: 0x020805,
      trim: 0xfbbf24,
      architecture: "verdant",
      particle: 0x86efac,
      description: "A living bio-lab consumed by root systems, luminous flora, wet stone, vines, and drifting spores."
    },
    solar: {
      id: "solar",
      name: "SOLAR BASTION",
      tag: "Heliostat desert fortress",
      biome: "Sunscorched mesa",
      recommendedMode: "TACTICAL",
      tacticalSummary: "Hard sunlight makes exposed rotations dangerous. Move under reflector shadows, then use the narrow cooling corridors to isolate defenders.",
      accent: "#fbbf24",
      secondary: "#fb7185",
      accentHex: 0xfbbf24,
      secondaryHex: 0xfb7185,
      fog: 0x2a1608,
      fogDensity: 0.0037,
      bg: "#160b04",
      floor: ["#3b2617", "rgba(251,191,36,.2)"],
      floorTint: 0xc79a63,
      floorRoughness: 0.78,
      floorMetalness: 0.16,
      wall: 0x9b7046,
      wallEmissive: 0x3a1807,
      outer: 0x120904,
      trim: 0xfbbf24,
      architecture: "solar",
      particle: 0xffd98a,
      description: "A sandstone-and-brass solar fortress with animated heliostats, heat shimmer, turbine pylons, and blazing collectors."
    },
    abyss: {
      id: "abyss",
      name: "ABYSSAL VAULT",
      tag: "Submerged pressure station",
      biome: "Hadopelagic trench",
      recommendedMode: "BOSS MODE",
      tacticalSummary: "Blue pressure fog compresses visibility while sonar pulses reveal major lanes. Defend from the reinforced bulkheads and rotate through the dry central spine.",
      accent: "#2dd4bf",
      secondary: "#818cf8",
      accentHex: 0x2dd4bf,
      secondaryHex: 0x818cf8,
      fog: 0x02151e,
      fogDensity: 0.0074,
      bg: "#01090f",
      floor: ["#07202a", "rgba(45,212,191,.18)"],
      floorTint: 0x376b75,
      floorRoughness: 0.38,
      floorMetalness: 0.56,
      wall: 0x315766,
      wallEmissive: 0x042c38,
      outer: 0x01070b,
      trim: 0x2dd4bf,
      architecture: "abyss",
      particle: 0x99f6e4,
      description: "A deep-ocean vault with ribbed bulkheads, pressure windows, sonar beacons, suspended bubbles, and bioluminescent life."
    },
    tempest: {
      id: "tempest",
      name: "TEMPEST SPIRE",
      tag: "Storm-bound sky citadel",
      biome: "Thunderhead archipelago",
      recommendedMode: "WAVE MODE",
      tacticalSummary: "Lightning telegraphs briefly illuminate every crossing. Time rotations between strikes and hold the central conductor to control both approaches.",
      accent: "#a78bfa",
      secondary: "#60a5fa",
      accentHex: 0xa78bfa,
      secondaryHex: 0x60a5fa,
      fog: 0x0b1028,
      fogDensity: 0.0061,
      bg: "#050817",
      floor: ["#171b38", "rgba(96,165,250,.2)"],
      floorTint: 0x6b7298,
      floorRoughness: 0.5,
      floorMetalness: 0.44,
      wall: 0x565d87,
      wallEmissive: 0x171337,
      outer: 0x030511,
      trim: 0xa78bfa,
      architecture: "tempest",
      particle: 0xc4b5fd,
      description: "A levitating fortress of storm conductors, rotating vanes, cloud vapor, and periodic electrical arcs."
    },
    lunar: {
      id: "lunar",
      name: "LUNAR EXCAVATION",
      tag: "Low-gravity moon quarry",
      biome: "Lunar terminator",
      recommendedMode: "TACTICAL",
      tacticalSummary: "Monochrome regolith makes emissive lanes the fastest navigation cue. Keep cover between your squad and the open central excavation.",
      accent: "#e2e8f0",
      secondary: "#22d3ee",
      accentHex: 0xe2e8f0,
      secondaryHex: 0x22d3ee,
      fog: 0x090b12,
      fogDensity: 0.0028,
      bg: "#010205",
      floor: ["#242831", "rgba(226,232,240,.13)"],
      floorTint: 0x9aa1ad,
      floorRoughness: 0.9,
      floorMetalness: 0.08,
      wall: 0x727986,
      wallEmissive: 0x0d2730,
      outer: 0x030407,
      trim: 0xe2e8f0,
      architecture: "lunar",
      particle: 0xdbeafe,
      description: "A lunar mining lattice with regolith berms, drilling towers, satellite dishes, crawler lights, and drifting moon dust."
    },
    caldera: {
      id: "caldera",
      name: "EMBER CALDERA",
      tag: "Volcanic geothermal shrine",
      biome: "Basalt caldera",
      recommendedMode: "BOSS MODE",
      tacticalSummary: "Lava light silhouettes operators across the map. Avoid lingering on the hot center seam and use the black-stone flanks for concealed site entries.",
      accent: "#f97316",
      secondary: "#ef4444",
      accentHex: 0xf97316,
      secondaryHex: 0xef4444,
      fog: 0x210706,
      fogDensity: 0.0064,
      bg: "#0d0202",
      floor: ["#221314", "rgba(249,115,22,.2)"],
      floorTint: 0x5f4545,
      floorRoughness: 0.86,
      floorMetalness: 0.12,
      wall: 0x594145,
      wallEmissive: 0x3a0905,
      outer: 0x0c0202,
      trim: 0xf97316,
      architecture: "caldera",
      particle: 0xfdba74,
      description: "A basalt combat shrine cut through an active caldera, with magma channels, obsidian arches, vents, embers, and heat haze."
    },
    mirage: {
      id: "mirage",
      name: "MIRAGE TERMINAL",
      tag: "Holographic desert bazaar",
      biome: "Glass-dune trade route",
      recommendedMode: "WAVE MODE",
      tacticalSummary: "Layered fabric and holograms create deceptive depth. Trust the site beacons, clear the market stalls methodically, and rotate through the shaded center.",
      accent: "#f0abfc",
      secondary: "#facc15",
      accentHex: 0xf0abfc,
      secondaryHex: 0xfacc15,
      fog: 0x251125,
      fogDensity: 0.0049,
      bg: "#100611",
      floor: ["#3b2338", "rgba(250,204,21,.17)"],
      floorTint: 0xb27c95,
      floorRoughness: 0.7,
      floorMetalness: 0.14,
      wall: 0x815a79,
      wallEmissive: 0x30102f,
      outer: 0x0d040d,
      trim: 0xf0abfc,
      architecture: "mirage",
      particle: 0xf5d0fe,
      description: "A night bazaar of patterned stone, textile canopies, prism towers, holographic stalls, floating lanterns, and windblown sand."
    }
  };

  const ARENA_ORDER = [
    "forge",
    "neon",
    "cryo",
    "verdant",
    "solar",
    "abyss",
    "tempest",
    "lunar",
    "caldera",
    "mirage"
  ];
  let selectedArenaId = "forge";

  const screenOpen = () =>
    document.getElementById("arenaSelectScreen")?.classList.contains("open");

  function updateArenaDetails(theme) {
    const text = (id, value) => {
      const node = document.getElementById(id);
      if (node) node.textContent = value;
    };
    text("arenaName", theme.name);
    text("arenaBiome", theme.biome);
    text("arenaMode", theme.recommendedMode);
    text("arenaSummary", theme.tacticalSummary);
    text("arenaTag", theme.tag);
    text("arenaIndex", `${String(ARENA_ORDER.indexOf(theme.id) + 1).padStart(2, "0")} / ${String(ARENA_ORDER.length).padStart(2, "0")}`);
    const screen = document.getElementById("arenaSelectScreen");
    if (screen) {
      screen.style.setProperty("--arena-accent", theme.accent);
      screen.style.setProperty("--arena-secondary-local", theme.secondary);
    }
  }

  function selectArena(id, options = {}) {
    if (!ARENAS[id]) return;
    const changed = selectedArenaId !== id;
    selectedArenaId = id;
    window.CS3D_selectedArenaId = id;
    document.querySelectorAll(".arenaCard").forEach((card) => {
      const selected = card.dataset.arena === id;
      card.classList.toggle("sel", selected);
      card.setAttribute("aria-selected", String(selected));
      if (selected && options.focus) card.focus({ preventScroll: true });
    });
    const theme = ARENAS[id];
    updateArenaDetails(theme);
    if (window.scene && window.THREE) {
      window.scene.background = new window.THREE.Color(theme.bg);
      if (window.scene.fog) {
        window.scene.fog.color.setHex(theme.fog);
        window.scene.fog.density = theme.fogDensity;
      }
    }
    document.documentElement.style.setProperty("--gold", theme.accent);
    document.documentElement.style.setProperty("--arena-secondary", theme.secondary);
    if (typeof window.CS3D_onArenaSelected === "function") {
      window.CS3D_onArenaSelected(id, theme);
    }
    if (changed && typeof window.CS3D_playUIClick === "function") {
      window.CS3D_playUIClick(true);
    }
  }

  function navigateArena(direction) {
    const current = Math.max(0, ARENA_ORDER.indexOf(selectedArenaId));
    const next = (current + direction + ARENA_ORDER.length) % ARENA_ORDER.length;
    selectArena(ARENA_ORDER[next], { focus: true });
  }

  function buildArenaFor(id) {
    selectArena(id || selectedArenaId || "forge");
    if (typeof window.CS3D_rebuildArena === "function") {
      window.CS3D_rebuildArena(selectedArenaId);
    }
  }

  function openArenaSelect() {
    const screen = document.getElementById("arenaSelectScreen");
    if (!screen) return;
    screen.classList.add("open");
    screen.setAttribute("aria-hidden", "false");
    selectArena(selectedArenaId);
    if (typeof window.CS3D_enterMapSelect === "function") {
      window.CS3D_enterMapSelect(ARENAS[selectedArenaId]);
    }
  }

  function closeArenaSelect() {
    const screen = document.getElementById("arenaSelectScreen");
    if (!screen) return;
    screen.classList.remove("open");
    screen.setAttribute("aria-hidden", "true");
    if (typeof window.CS3D_exitMapSelect === "function") {
      window.CS3D_exitMapSelect();
    }
  }

  function confirmArenaSelection() {
    if (!screenOpen()) return;
    if (typeof window.CS3D_confirmArenaSelection === "function") {
      window.CS3D_confirmArenaSelection(selectedArenaId, ARENAS[selectedArenaId]);
    }
  }

  function initArenaSelect() {
    const row = document.getElementById("arenaRow");
    if (!row) return;
    row.innerHTML = "";
    ARENA_ORDER.forEach((id, index) => {
      const theme = ARENAS[id];
      const card = document.createElement("button");
      card.type = "button";
      card.className = "arenaCard" + (id === selectedArenaId ? " sel" : "");
      card.dataset.arena = id;
      card.style.setProperty("--ac", theme.accent);
      card.setAttribute("role", "option");
      card.setAttribute("aria-selected", String(id === selectedArenaId));
      card.innerHTML =
        `<span class="arenaOrdinal">${String(index + 1).padStart(2, "0")}</span>` +
        `<span class="an">${theme.name}</span>` +
        `<span class="at">${theme.biome}</span>` +
        `<span class="arenaRec">${theme.recommendedMode}</span>`;
      card.onclick = () => selectArena(id);
      row.appendChild(card);
    });
    document.getElementById("arenaPrev")?.addEventListener("click", () => navigateArena(-1));
    document.getElementById("arenaNext")?.addEventListener("click", () => navigateArena(1));
    document.getElementById("arenaBackBtn")?.addEventListener("click", closeArenaSelect);
    document.getElementById("arenaDeployBtn")?.addEventListener("click", confirmArenaSelection);
    updateArenaDetails(ARENAS[selectedArenaId]);
  }

  addEventListener("keydown", (event) => {
    if (!screenOpen()) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      navigateArena(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      navigateArena(1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      confirmArenaSelection();
    } else if (event.key === "Escape") {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeArenaSelect();
    }
  }, true);

  window.CS3D_ARENAS = ARENAS;
  window.CS3D_ARENA_ORDER = ARENA_ORDER;
  window.CS3D_selectedArenaId = selectedArenaId;
  window.selectArena = selectArena;
  window.navigateArena = navigateArena;
  window.buildArenaFor = buildArenaFor;
  window.openArenaSelect = openArenaSelect;
  window.closeArenaSelect = closeArenaSelect;
  window.confirmArenaSelection = confirmArenaSelection;
  window.initArenaSelect = initArenaSelect;
})();
