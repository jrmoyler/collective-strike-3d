export const OPERATORS = [
  { id: "zenflow", name: "ZenFlow", role: "Rift Intel", color: "#8b5cf6", accent: "#38bdf8", ability: "Lattice Nova", passive: "Cooldown lattice", weapon: "ARC-9 Pulse Carbine", speed: 1.04, armor: 100 },
  { id: "collective", name: "The Collective", role: "Vanguard", color: "#d4a843", accent: "#fef3c7", ability: "Golden Retainer", passive: "Bonus essence", weapon: "REGENT Battle Rifle", speed: 0.96, armor: 120 },
  { id: "hybrid", name: "Hybrid Living", role: "Combat Medic", color: "#f59e0b", accent: "#22c55e", ability: "Living Patch", passive: "Rapid recovery", weapon: "HELIX-12 Repeater", speed: 1, armor: 105 },
  { id: "nexus", name: "Nexus Labs", role: "Rift Hunter", color: "#ef4444", accent: "#fb7185", ability: "Flash Reel", passive: "Marked prey", weapon: "FRAMECUTTER SMG", speed: 1.08, armor: 90 },
  { id: "terra", name: "Terra Axis", role: "Bulwark", color: "#2563eb", accent: "#93c5fd", ability: "Stone Protocol", passive: "Fortified plating", weapon: "FAULTLINE LMG", speed: 0.88, armor: 145 },
  { id: "vital", name: "Vital Helix", role: "Biomancer", color: "#14b8a6", accent: "#86efac", ability: "Stim Bloom", passive: "Vital regeneration", weapon: "SYNAPSE Carbine", speed: 1.02, armor: 100 },
  { id: "binary", name: "Binary Loom", role: "Infiltrator", color: "#00d9b5", accent: "#a7f3d0", ability: "Exploit Cascade", passive: "Instant reload", weapon: "THREADRIPPER", speed: 1.08, armor: 92 },
  { id: "gaia", name: "Gaia Synthesis", role: "Warden", color: "#22c55e", accent: "#bef264", ability: "Spore Cathedral", passive: "Toxin immunity", weapon: "VERDANT Cannon", speed: 0.94, armor: 125 },
  { id: "vector", name: "Vector Shift", role: "Skirmisher", color: "#cbd5e1", accent: "#ffffff", ability: "Phase Dash", passive: "Kinetic acceleration", weapon: "VECTOR-6 PDW", speed: 1.18, armor: 84 },
  { id: "animus", name: "Animus Prime", role: "Juggernaut", color: "#22d3ee", accent: "#a5f3fc", ability: "Prime Plating", passive: "Heavy frame", weapon: "TITAN Coilgun", speed: 0.86, armor: 160 },
  { id: "aether", name: "Aether Link", role: "Seer", color: "#34d399", accent: "#d1fae5", ability: "Astral Ping", passive: "Rift sight", weapon: "AETHER Lance", speed: 1.02, armor: 98 },
  { id: "obsidian", name: "Obsidian Arc", role: "Controller", color: "#ea580c", accent: "#fdba74", ability: "Stun Monolith", passive: "Arc resistance", weapon: "BLACKGLASS Rifle", speed: 0.98, armor: 112 },
  { id: "kinetic", name: "Kinetic Edge", role: "Raider", color: "#16a34a", accent: "#86efac", ability: "Adrenal Surge", passive: "Momentum", weapon: "EDGE-45 SMG", speed: 1.2, armor: 82 },
  { id: "civic", name: "Civic Core", role: "Field Captain", color: "#7dd3fc", accent: "#e0f2fe", ability: "Rally Field", passive: "Squad restoration", weapon: "COVENANT Rifle", speed: 1, armor: 110 },
  { id: "quantum", name: "Quantum Ledger", role: "Probability Gunner", color: "#8b5cf6", accent: "#fde047", ability: "Alpha Signal", passive: "Critical economy", weapon: "Q-BIT Repeater", speed: 1.03, armor: 96 },
  { id: "juris", name: "Juris Guard", role: "Sentinel", color: "#6366f1", accent: "#c7d2fe", ability: "Injunction Field", passive: "Control immunity", weapon: "VERDICT Carbine", speed: 0.95, armor: 130 },
  { id: "signal", name: "Signal Velocity", role: "Assault", color: "#f43f5e", accent: "#fecdd3", ability: "Redline", passive: "Fire cadence", weapon: "SIGNAL-7 Rifle", speed: 1.1, armor: 94 },
  { id: "nomad", name: "Nomad Nexus", role: "Riftwalker", color: "#fbbf24", accent: "#fef3c7", ability: "Blink Gate", passive: "No movement penalty", weapon: "WAYFARER Carbine", speed: 1.12, armor: 90 },
  { id: "eon", name: "Eon Core", role: "Chronoguard", color: "#06b6d4", accent: "#cffafe", ability: "Second Wind", passive: "Temporal revival", weapon: "EPOCH Rifle", speed: 0.98, armor: 116 },
  { id: "cognara", name: "Cognara Mind", role: "Wildmind", color: "#e0267e", accent: "#f9a8d4", ability: "Cognitive Surge", passive: "Adaptive kit", weapon: "THOUGHTSPIKE", speed: 1.05, armor: 100 }
];

export const OPERATOR_BY_ID = Object.fromEntries(OPERATORS.map(operator => [operator.id, operator]));
