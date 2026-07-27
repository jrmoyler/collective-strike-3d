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
      fog: 0x060d1c,
      fogDensity: 0.0052,
      bg: "#030712",
      particle: 0x9fc4ff,
      description: "The original Collective lattice. Hazard-banded corridors and classic A/B sites."
    },
    neon: {
      id: "neon",
      name: "NEON CANOPY",
      tag: "Cyber rooftop lattice",
      accent: "#f472b6",
      secondary: "#22d3ee",
      fog: 0x0a0618,
      fogDensity: 0.0044,
      bg: "#05010f",
      particle: 0xf9a8d4,
      description: "Vertical sky-bridges and neon arteries. High-contrast sightlines and holographic rails."
    },
    cryo: {
      id: "cryo",
      name: "CRYO RELAY",
      tag: "Frozen research outpost",
      accent: "#7dd3fc",
      secondary: "#e0f2fe",
      fog: 0x0a1524,
      fogDensity: 0.0068,
      bg: "#020810",
      particle: 0xe0f2fe,
      description: "Ice-laced corridors and crystalline cover. Dense cold fog punishes over-commitment."
    },
    verdant: {
      id: "verdant",
      name: "VERDANT CORE",
      tag: "Overgrown bio-lab",
      accent: "#4ade80",
      secondary: "#fbbf24",
      fog: 0x06140c,
      fogDensity: 0.0058,
      bg: "#020a06",
      particle: 0x86efac,
      description: "Living walls and spore volumes. Soft organic cover replaces cold metal."
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
    if (window.SND && window.SND.uiClick) window.SND.uiClick();
  }

  function buildArenaFor(id) {
    selectArena(id || selectedArenaId || "forge");
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
