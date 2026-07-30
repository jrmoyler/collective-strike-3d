/* Collective Strike 3D v1.1 — Multi-Arena runtime (offline, no CDN)
 * Exposes window.CS3D_ARENAS + select helpers. Loaded before the main game script.
 */
(function () {
  "use strict";
  const ARENAS = {
    forge: {
      id: "forge",
      name: "FORGE LATTICE",
      tag: "Industrial combat facility",
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
      environmentIntensity: 0.82,
      lighting: {
        hemi: [0x6f9bff, 0x02060f, 0.34],
        ambient: [0x4f6a9e, 0.1],
        sun: [0xffe8cc, 1.14],
        rim: [0x4f74ff, 0.38],
        exposure: 1.03
      },
      particle: 0x9fc4ff,
      description: "A working heavy-industry foundry with heat stacks, service gantries, and pressure-lit A/B sites."
    },
    neon: {
      id: "neon",
      name: "NEON CANOPY",
      tag: "Cyber rooftop lattice",
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
      environmentIntensity: 0.72,
      lighting: {
        hemi: [0xff6bcb, 0x0a0418, 0.3],
        ambient: [0x3b1d6e, 0.13],
        sun: [0xffb4e2, 0.88],
        rim: [0x22d3ee, 0.62],
        exposure: 1.08
      },
      particle: 0xf9a8d4,
      description: "A rain-swept megacity rooftop with holographic signage, skyline depth, and luminous transit rails."
    },
    cryo: {
      id: "cryo",
      name: "CRYO RELAY",
      tag: "Frozen research outpost",
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
      environmentIntensity: 1.02,
      lighting: {
        hemi: [0xa5d8ff, 0x02060f, 0.42],
        ambient: [0x6ba3c7, 0.15],
        sun: [0xdbeafe, 1.02],
        rim: [0x38bdf8, 0.54],
        exposure: 1.07
      },
      particle: 0xe0f2fe,
      description: "A sub-zero relay station with coolant vessels, ice accretion, frost haze, and crystalline machinery."
    },
    verdant: {
      id: "verdant",
      name: "VERDANT CORE",
      tag: "Overgrown bio-lab",
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
      environmentIntensity: 0.7,
      lighting: {
        hemi: [0x86efac, 0x03120a, 0.36],
        ambient: [0x3f6b4a, 0.12],
        sun: [0xd9f99d, 1.04],
        rim: [0xfbbf24, 0.44],
        exposure: 1.0
      },
      particle: 0x86efac,
      description: "A reclaimed bio-lab where root systems, luminous flora, and drifting spores have consumed the facility."
    }
  };
  const ARENA_ORDER = ["forge", "neon", "cryo", "verdant"];
  let selectedArenaId = "forge";

  function selectArena(id) {
    if (!ARENAS[id]) return;
    selectedArenaId = id;
    window.CS3D_selectedArenaId = id;
    document.querySelectorAll(".arenaCard").forEach((c) =>
      c.classList.toggle("sel", c.dataset.arena === id)
    );
    const t = ARENAS[id];
    if (window.scene && window.THREE) {
      window.scene.background = new window.THREE.Color(t.bg);
      if (window.scene.fog) {
        window.scene.fog.color.setHex(t.fog);
        window.scene.fog.density = t.fogDensity;
      }
    }
    document.documentElement.style.setProperty("--gold", t.accent);
    document.documentElement.style.setProperty("--arena-secondary", t.secondary);
    if (typeof window.CS3D_onArenaSelected === "function") {
      window.CS3D_onArenaSelected(id, t);
    }
    if (window.SND && window.SND.uiClick) window.SND.uiClick();
  }

  function buildArenaFor(id) {
    selectArena(id || selectedArenaId || "forge");
    if (typeof window.CS3D_rebuildArena === "function") {
      window.CS3D_rebuildArena(selectedArenaId);
    }
  }

  function initArenaSelect() {
    const row = document.getElementById("arenaRow");
    if (!row) return;
    row.innerHTML = "";
    ARENA_ORDER.forEach((id) => {
      const t = ARENAS[id];
      const c = document.createElement("div");
      c.className = "arenaCard" + (id === selectedArenaId ? " sel" : "");
      c.dataset.arena = id;
      c.style.setProperty("--ac", t.accent);
      c.innerHTML =
        '<div class="an">' +
        t.name +
        '</div><div class="at">' +
        t.tag +
        '</div><div class="ad">' +
        t.description +
        "</div>";
      c.onclick = () => selectArena(id);
      c.onmouseenter = () => {
        if (window.SND && window.SND.uiClick) window.SND.uiClick(true);
      };
      row.appendChild(c);
    });
  }

  window.CS3D_ARENAS = ARENAS;
  window.CS3D_ARENA_ORDER = ARENA_ORDER;
  window.CS3D_selectedArenaId = selectedArenaId;
  window.selectArena = selectArena;
  window.buildArenaFor = buildArenaFor;
  window.initArenaSelect = initArenaSelect;
})();
