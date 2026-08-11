/**
 * VFX Kit — Elemental Ability Settings
 * Single source of truth for every tweakable value.
 * Shaders, particles, and geometry systems read these objects every frame.
 * This is what enables live editing and quality scaling without rebuilds.
 *
 * Adapted for Collective Strike 3D quality budgets and offline-first runtime.
 */

export const CastShape = Object.freeze({
  LINE: 'line',
  ZONE: 'zone',
});

export const ELEMENT_META = {
  frost:   { id: 'frost',   name: 'Frost Lance',    cast: CastShape.LINE,  key: 'Q' },
  storm:   { id: 'storm',   name: 'Storm Lance',    cast: CastShape.LINE,  key: 'E' },
  cinder:  { id: 'cinder',  name: 'Cinder Fall',    cast: CastShape.LINE,  key: 'R' },
  nova:    { id: 'nova',    name: 'Nova Beam',      cast: CastShape.LINE,  key: 'F' },
  voltaic: { id: 'voltaic', name: 'Voltaic Snare',  cast: CastShape.ZONE,  key: 'V' },
  seismic: { id: 'seismic', name: 'Seismic Rupture',cast: CastShape.LINE,  key: '1' },
  tidal:   { id: 'tidal',   name: 'Tidal Surge',    cast: CastShape.LINE,  key: '2' },
  gale:    { id: 'gale',    name: 'Gale Vortex',    cast: CastShape.ZONE,  key: '3' },
  plasma:  { id: 'plasma',  name: 'Plasma Arc',     cast: CastShape.LINE,  key: '4' },
  vine:    { id: 'vine',    name: 'Vine Constrict', cast: CastShape.LINE,  key: '5' },
  void:    { id: 'void',    name: 'Void Snare',     cast: CastShape.ZONE,  key: '6' },
};

export const ELEMENTS = Object.keys(ELEMENT_META);

export const settings = {
  global: {
    timeScale: 1.0,
    qualityScale: 1.0, // 0.4–1.2 driven by CS3D quality profile
  },

  // ------------------------------------------------------------------
  // Original 5
  // ------------------------------------------------------------------
  frost: {
    range: 22.0,
    minRange: 2.5,
    speed: 48.0,
    cooldown: 8.0,
    lifetime: 4.2,
    // crystal field
    densityNear: 0.85,
    densityFar: 0.35,
    heightMin: 0.6,
    heightMax: 2.8,
    lean: 0.18,
    clumping: 0.55,
    facets: 6,
    taper: 0.72,
    roughness: 0.35,
    bend: 0.12,
    opacity: 0.92,
    colorCore: '#e8f7ff',
    colorFrost: '#7ec8e8',
    colorEdge: '#3a8fbe',
    colorShockA: '#5fd0ff',
    colorShockB: '#f2feff',
    shockRadius: 4.8,
  },

  storm: {
    range: 24.0,
    minRange: 2.0,
    speed: 105.0,
    cooldown: 7.5,
    lifetime: 0.55,
    filaments: 18,
    filamentSamples: 64,
    kink: 0.22,
    flicker: 1.4,
    colorCore: '#f0f8ff',
    colorBolt: '#7eb6ff',
    colorSpark: '#c4e4ff',
    colorBurn: '#1a2a4a',
  },

  cinder: {
    range: 20.0,
    minRange: 3.0,
    speed: 28.0,
    cooldown: 10.0,
    lifetime: 3.8,
    arcHeight: 4.5,
    heat: 1.0,
    fracturePlanes: 5,
    colorCore: '#ff6b1a',
    colorLava: '#ff2a00',
    colorTrail: '#ffaa33',
    colorCrack: '#ff4400',
  },

  nova: {
    range: 26.0,
    minRange: 3.5,
    speed: 0, // sustained
    cooldown: 12.0,
    lifetime: 2.8,
    chargeTime: 0.65,
    coreRadius: 0.18,
    shellRadius: 0.42,
    coils: 4,
    coilTurns: 1.45,
    rings: 8,
    colorCore: '#ffffff',
    colorInner: '#d3f4ff',
    colorOuter: '#3ec6ff',
    colorHalo: '#0d3ce0',
    colorCoil: '#ffd56a',
  },

  voltaic: {
    range: 16.0,
    minRange: 4.0,
    zoneRadius: 5.5,
    speed: 0,
    cooldown: 11.0,
    lifetime: 5.5,
    tendrils: 12,
    pillarHeight: 3.2,
    colorCore: '#c084fc',
    colorArc: '#a855f7',
    colorRim: '#7c3aed',
    colorPillar: '#e9d5ff',
  },

  // ------------------------------------------------------------------
  // New 6
  // ------------------------------------------------------------------
  seismic: {
    range: 18.0,
    minRange: 2.5,
    speed: 32.0,
    cooldown: 9.0,
    lifetime: 4.5,
    plates: 14,
    heaveHeight: 1.8,
    colorStone: '#78716c',
    colorMoss: '#4d7c0f',
    colorHot: '#b45309',
  },

  tidal: {
    range: 20.0,
    minRange: 3.0,
    speed: 22.0,
    cooldown: 9.5,
    lifetime: 3.6,
    waveHeight: 2.4,
    foam: 0.7,
    colorDeep: '#0e4d6b',
    colorSurface: '#38bdf8',
    colorFoam: '#e0f2fe',
  },

  gale: {
    range: 14.0,
    minRange: 3.5,
    zoneRadius: 6.0,
    speed: 0,
    cooldown: 10.5,
    lifetime: 4.0,
    ribbons: 9,
    vortexStrength: 1.3,
    colorSilk: '#cbd5e1',
    colorCore: '#94a3b8',
    colorEdge: '#64748b',
  },

  plasma: {
    range: 23.0,
    minRange: 2.0,
    speed: 90.0,
    cooldown: 8.0,
    lifetime: 0.7,
    arcs: 7,
    intensity: 1.15,
    colorCore: '#f0abfc',
    colorArc: '#e879f9',
    colorGlow: '#c026d3',
  },

  vine: {
    range: 17.0,
    minRange: 2.5,
    speed: 18.0,
    cooldown: 8.5,
    lifetime: 5.0,
    tendrils: 8,
    growthSpeed: 1.4,
    colorBark: '#3f6212',
    colorLeaf: '#65a30d',
    colorVein: '#a3e635',
  },

  void: {
    range: 15.0,
    minRange: 4.0,
    zoneRadius: 5.0,
    speed: 0,
    cooldown: 12.0,
    lifetime: 6.0,
    tendrils: 10,
    absorb: 0.85,
    colorCore: '#1e1b4b',
    colorEdge: '#312e81',
    colorAbsorb: '#4c1d95',
  },
};
