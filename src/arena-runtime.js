/* Collective Strike 3D — Arena Identity selection adapter.
 * Canonical content lives in arena-core.js and is bundled into CS3D_ARENA_SYSTEM.
 * This file only adapts definitions to the existing DOM/menu contract.
 */
(function () {
  "use strict";

  const SYSTEM = window.CS3D_ARENA_SYSTEM;
  if (!SYSTEM) throw new Error("Arena Identity System missing from the offline runtime bundle");

  const { ARENA_DEFINITIONS, ARENA_ORDER } = SYSTEM;
  const colorString = value => `#${Number(value).toString(16).padStart(6, "0")}`;
  const flatten = definition => {
    const { identity, visuals } = definition;
    return Object.freeze({
      id: identity.id,
      name: identity.name,
      tag: identity.silhouette,
      biome: identity.biome,
      recommendedMode: identity.recommendedMode,
      tacticalSummary: identity.tacticalSummary,
      description: identity.tacticalSummary,
      architecture: identity.id,
      accent: colorString(visuals.accent),
      secondary: colorString(visuals.secondary),
      accentHex: visuals.accent,
      secondaryHex: visuals.secondary,
      fog: visuals.fog,
      fogDensity: visuals.fogDensity,
      bg: colorString(visuals.background),
      floor: [colorString(visuals.floorTint), `${colorString(visuals.accent)}22`],
      floorTint: visuals.floorTint,
      floorRoughness: visuals.floorRoughness,
      floorMetalness: visuals.floorMetalness,
      wall: visuals.wall,
      wallEmissive: visuals.accent,
      outer: visuals.outer,
      trim: visuals.trim,
      particle: visuals.particle,
      definition,
    });
  };
  const ARENAS = Object.freeze(Object.fromEntries(
    ARENA_ORDER.map(id => [id, flatten(ARENA_DEFINITIONS[id])])
  ));
  let selectedArenaId = ARENA_ORDER[0];
  let initialized = false;

  const screenOpen = () => document.getElementById("arenaSelectScreen")?.classList.contains("open");
  const setText = (id, value) => { const node = document.getElementById(id); if (node) node.textContent = value; };

  function updateArenaDetails(theme) {
    setText("arenaName", theme.name);
    setText("arenaBiome", theme.biome);
    setText("arenaMode", theme.recommendedMode);
    setText("arenaSummary", theme.tacticalSummary);
    setText("arenaTag", theme.tag);
    setText("arenaIndex", `${String(ARENA_ORDER.indexOf(theme.id) + 1).padStart(2, "0")} / ${String(ARENA_ORDER.length).padStart(2, "0")}`);
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
    document.querySelectorAll(".arenaCard").forEach(card => {
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
    window.CS3D_onArenaSelected?.(id, theme);
    if (changed) window.CS3D_playUIClick?.(true);
  }

  function navigateArena(direction) {
    const current = Math.max(0, ARENA_ORDER.indexOf(selectedArenaId));
    selectArena(ARENA_ORDER[(current + direction + ARENA_ORDER.length) % ARENA_ORDER.length], { focus: true });
  }

  function buildArenaFor(id) {
    selectArena(id || selectedArenaId);
    window.CS3D_rebuildArena?.(selectedArenaId);
  }

  function openArenaSelect() {
    const screen = document.getElementById("arenaSelectScreen");
    if (!screen) return;
    screen.classList.add("open");
    screen.setAttribute("aria-hidden", "false");
    selectArena(selectedArenaId);
    window.CS3D_enterMapSelect?.(ARENAS[selectedArenaId]);
  }

  function closeArenaSelect() {
    const screen = document.getElementById("arenaSelectScreen");
    if (!screen) return;
    screen.classList.remove("open");
    screen.setAttribute("aria-hidden", "true");
    window.CS3D_exitMapSelect?.();
  }

  function confirmArenaSelection() {
    if (screenOpen()) window.CS3D_confirmArenaSelection?.(selectedArenaId, ARENAS[selectedArenaId]);
  }

  function handleKeydown(event) {
    if (!screenOpen()) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      navigateArena(event.key === "ArrowLeft" ? -1 : 1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      confirmArenaSelection();
    } else if (event.key === "Escape") {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeArenaSelect();
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
      card.className = `arenaCard${id === selectedArenaId ? " sel" : ""}`;
      card.dataset.arena = id;
      card.style.setProperty("--ac", theme.accent);
      card.setAttribute("role", "option");
      card.setAttribute("aria-selected", String(id === selectedArenaId));
      card.innerHTML = `<span class="arenaOrdinal">${String(index + 1).padStart(2, "0")}</span><span class="an">${theme.name}</span><span class="at">${theme.biome}</span><span class="arenaRec">${theme.recommendedMode}</span>`;
      card.onclick = () => selectArena(id);
      row.appendChild(card);
    });
    if (!initialized) {
      document.getElementById("arenaPrev")?.addEventListener("click", () => navigateArena(-1));
      document.getElementById("arenaNext")?.addEventListener("click", () => navigateArena(1));
      document.getElementById("arenaBackBtn")?.addEventListener("click", closeArenaSelect);
      document.getElementById("arenaDeployBtn")?.addEventListener("click", confirmArenaSelection);
      addEventListener("keydown", handleKeydown, true);
      initialized = true;
    }
    updateArenaDetails(ARENAS[selectedArenaId]);
  }

  window.CS3D_ARENAS = ARENAS;
  window.CS3D_ARENA_DEFINITIONS = ARENA_DEFINITIONS;
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
