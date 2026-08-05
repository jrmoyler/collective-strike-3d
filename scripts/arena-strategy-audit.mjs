#!/usr/bin/env node
/**
 * Arena Strategy Audit Script
 * 
 * Measures each arena against its strategy identity:
 * 1. Cover height distribution vs intended range
 * 2. Sightline lengths from common hold positions
 * 3. Weapon optimality analysis
 */

import { ARENA_DEFINITIONS, ARENA_ORDER } from '../src/arena-core.js';
import { arenaBlockHeight } from '../src/arena-ballistics.js';

const TILE_SIZE = 40;

// Strategy identity expectations from ARENA_STRATEGY_KITS.md
const STRATEGY_EXPECTATIONS = {
  forge: {
    identity: 'Mid-vertical furnace: rifle gantries, shotgun under-route',
    expectedCoverDistribution: { low: 0.25, mid: 0.45, high: 0.30 },
    sightlineProfile: 'vertical crossfire with protected under-routes',
    optimalWeapons: ['rifle', 'shotgun'], // mixed ranges
  },
  abyss: {
    identity: 'Split-range: raised sanctum for rifles, flooded stacks for shotguns',
    expectedCoverDistribution: { low: 0.30, mid: 0.35, high: 0.35 },
    sightlineProfile: 'broken mid-range lanes with reflective low routes',
    optimalWeapons: ['rifle', 'shotgun'],
  },
  tempest: {
    identity: 'Aerial fortress: everything crosses the spine, tower stair decides',
    expectedCoverDistribution: { low: 0.20, mid: 0.40, high: 0.40 },
    sightlineProfile: 'long exposed lanes broken by crenellations',
    optimalWeapons: ['rifle', 'sniper'],
  },
  verdant: {
    identity: 'Ambush pockets separated by two clean lanes',
    expectedCoverDistribution: { low: 0.40, mid: 0.35, high: 0.25 },
    sightlineProfile: 'ambush pockets separated by crisp traversal lanes',
    optimalWeapons: ['shotgun', 'smg'],
  },
  cryo: {
    identity: 'Fractured shelf: read the telegraph, rotate through the caves',
    expectedCoverDistribution: { low: 0.30, mid: 0.45, high: 0.25 },
    sightlineProfile: 'exposed shelves contrasted with tight ice corridors',
    optimalWeapons: ['rifle', 'smg'],
  },
  mirage: {
    identity: 'One commanding axial lane with off-axis counterplay',
    expectedCoverDistribution: { low: 0.20, mid: 0.35, high: 0.45 },
    sightlineProfile: 'one commanding axial lane with off-axis counterplay',
    optimalWeapons: ['rifle', 'sniper'],
  },
  neon: {
    identity: 'Closed rooftop ring: two bridges, two spines, one transit core',
    expectedCoverDistribution: { low: 0.25, mid: 0.50, high: 0.25 },
    sightlineProfile: 'roof-to-roof long lanes with billboard cuts',
    optimalWeapons: ['rifle', 'smg'],
  },
  solar: {
    identity: 'Exposed reflector courts against a shaded diagonal',
    expectedCoverDistribution: { low: 0.35, mid: 0.35, high: 0.30 },
    sightlineProfile: 'hard long-range courts and shaded close trench',
    optimalWeapons: ['rifle', 'sniper', 'shotgun'],
  },
  lunar: {
    identity: 'Rim long-range against bowl close-range',
    expectedCoverDistribution: { low: 0.30, mid: 0.40, high: 0.30 },
    sightlineProfile: 'rim long-range / bowl close-range',
    optimalWeapons: ['rifle', 'sniper', 'shotgun'],
  },
  caldera: {
    identity: 'Curved rim lanes around a denied centre',
    expectedCoverDistribution: { low: 0.25, mid: 0.45, high: 0.30 },
    sightlineProfile: 'curved rim lanes around a denied center',
    optimalWeapons: ['rifle', 'shotgun'],
  },
};

// Cover height tiers (in world units)
const COVER_TIERS = {
  LOW: { min: 0, max: 1.5, label: 'low' },      // ankle to knee - crawl/crouch behind
  MID: { min: 1.5, max: 2.8, label: 'mid' },    // waist to chest - crouch cover
  HIGH: { min: 2.8, max: Infinity, label: 'high' }, // full standing cover
};

function categorizeCoverHeight(height) {
  if (height < COVER_TIERS.LOW.max) return 'LOW';
  if (height < COVER_TIERS.MID.max) return 'MID';
  return 'HIGH';
}

function measureCoverHeights(definition) {
  const blocks = definition.topology.blocks || [];
  const heights = blocks.map(b => ({
    block: b,
    height: arenaBlockHeight(b),
  }));
  
  const distribution = { LOW: 0, MID: 0, HIGH: 0 };
  heights.forEach(h => {
    distribution[categorizeCoverHeight(h.height)]++;
  });
  
  const total = heights.length || 1;
  return {
    heights,
    distribution: {
      low: distribution.LOW / total,
      mid: distribution.MID / total,
      high: distribution.HIGH / total,
    },
    averageHeight: heights.reduce((sum, h) => sum + h.height, 0) / total,
    blockCount: blocks.length,
  };
}

function calculateSightlineLength(from, to) {
  const dx = to.x - from.x;
  const dy = to.y - to.y;
  return Math.sqrt(dx * dx + dy * dy) * TILE_SIZE;
}

function measureSightlines(definition) {
  const sites = definition.combat?.sites || [];
  const spawns = definition.combat?.spawns || {};
  const sightlines = [];
  
  // Measure spawn-to-site distances
  if (spawns.ATK && sites[0]) {
    const atkSpawn = { x: spawns.ATK.x + spawns.ATK.w / 2, y: spawns.ATK.y + spawns.ATK.h / 2 };
    const siteA = { x: sites[0].x + sites[0].w / 2, y: sites[0].y + sites[0].h / 2 };
    sightlines.push({
      from: 'ATK spawn',
      to: 'Site A',
      length: calculateSightlineLength(atkSpawn, siteA),
    });
  }
  
  if (spawns.DEF && sites[0]) {
    const defSpawn = { x: spawns.DEF.x + spawns.DEF.w / 2, y: spawns.DEF.y + spawns.DEF.h / 2 };
    const siteA = { x: sites[0].x + sites[0].w / 2, y: sites[0].y + sites[0].h / 2 };
    sightlines.push({
      from: 'DEF spawn',
      to: 'Site A',
      length: calculateSightlineLength(defSpawn, siteA),
    });
  }
  
  // Site-to-site distance (cross-arena sightline)
  if (sites.length >= 2) {
    const siteA = { x: sites[0].x + sites[0].w / 2, y: sites[0].y + sites[0].h / 2 };
    const siteB = { x: sites[1].x + sites[1].w / 2, y: sites[1].y + sites[1].h / 2 };
    sightlines.push({
      from: 'Site A',
      to: 'Site B',
      length: calculateSightlineLength(siteA, siteB),
    });
  }
  
  return sightlines;
}

function analyzeWeaponOptimality(coverDistribution, sightlines) {
  const avgSightline = sightlines.reduce((sum, s) => sum + s.length, 0) / (sightlines.length || 1);
  
  // Weapon effectiveness based on sightline length and cover
  const effectiveness = {
    sniper: 0,
    rifle: 0,
    shotgun: 0,
    smg: 0,
  };
  
  // Sniper: excels at long range (>1500), needs high cover
  if (avgSightline > 1200) effectiveness.sniper += 0.4;
  if (coverDistribution.high > 0.3) effectiveness.sniper += 0.3;
  if (coverDistribution.low < 0.3) effectiveness.sniper += 0.2;
  
  // Rifle: versatile, works at mid range (600-1500)
  if (avgSightline > 600 && avgSightline < 1800) effectiveness.rifle += 0.4;
  if (coverDistribution.mid > 0.3) effectiveness.rifle += 0.3;
  effectiveness.rifle += 0.2; // baseline versatility
  
  // Shotgun: excels at short range (<600), low cover OK
  if (avgSightline < 800) effectiveness.shotgun += 0.4;
  if (coverDistribution.low > 0.25) effectiveness.shotgun += 0.3;
  if (coverDistribution.high < 0.35) effectiveness.shotgun += 0.2;
  
  // SMG: close-mid range, mobile
  if (avgSightline < 1000) effectiveness.smg += 0.3;
  if (coverDistribution.mid > 0.35) effectiveness.smg += 0.2;
  effectiveness.smg += 0.15; // baseline mobility
  
  const best = Object.entries(effectiveness).sort((a, b) => b[1] - a[1]);
  return { effectiveness, optimal: best[0][0], variety: best[1][0] };
}

console.log('='.repeat(80));
console.log('ARENA STRATEGY AUDIT');
console.log('='.repeat(80));
console.log();

const results = [];

for (const arenaId of ARENA_ORDER) {
  const definition = ARENA_DEFINITIONS[arenaId];
  const expectations = STRATEGY_EXPECTATIONS[arenaId];
  
  if (!definition) {
    console.warn(`⚠️  No definition found for arena: ${arenaId}`);
    continue;
  }
  
  console.log(`\n${'─'.repeat(80)}`);
  console.log(`${arenaId.toUpperCase()}: ${definition.identity.name}`);
  console.log(`${'─'.repeat(80)}`);
  console.log(`Strategy: ${expectations?.identity || definition.identity.silhouette}`);
  console.log();
  
  // 1. Cover height distribution
  const coverAnalysis = measureCoverHeights(definition);
  console.log('COVER HEIGHT DISTRIBUTION:');
  console.log(`  Block count: ${coverAnalysis.blockCount}`);
  console.log(`  Average height: ${coverAnalysis.averageHeight.toFixed(2)}m`);
  console.log(`  Actual:   Low=${(coverAnalysis.distribution.low * 100).toFixed(0)}%  Mid=${(coverAnalysis.distribution.mid * 100).toFixed(0)}%  High=${(coverAnalysis.distribution.high * 100).toFixed(0)}%`);
  
  if (expectations?.expectedCoverDistribution) {
    const exp = expectations.expectedCoverDistribution;
    console.log(`  Expected: Low=${(exp.low * 100).toFixed(0)}%  Mid=${(exp.mid * 100).toFixed(0)}%  High=${(exp.high * 100).toFixed(0)}%`);
    
    const deviation = Math.abs(coverAnalysis.distribution.low - exp.low) +
                      Math.abs(coverAnalysis.distribution.mid - exp.mid) +
                      Math.abs(coverAnalysis.distribution.high - exp.high);
    console.log(`  Deviation: ${(deviation * 100).toFixed(0)}% total`);
  }
  console.log();
  
  // 2. Sightline lengths
  const sightlines = measureSightlines(definition);
  console.log('SIGHTLINE LENGTHS:');
  sightlines.forEach(s => {
    const category = s.length < 600 ? '(close)' : s.length < 1200 ? '(mid)' : '(long)';
    console.log(`  ${s.from} → ${s.to}: ${s.length.toFixed(0)} units ${category}`);
  });
  const avgSightline = sightlines.reduce((sum, s) => sum + s.length, 0) / (sightlines.length || 1);
  console.log(`  Average: ${avgSightline.toFixed(0)} units`);
  console.log();
  
  // 3. Weapon optimality
  const weaponAnalysis = analyzeWeaponOptimality(coverAnalysis.distribution, sightlines);
  console.log('WEAPON OPTIMALITY:');
  console.log(`  Sniper:  ${(weaponAnalysis.effectiveness.sniper * 100).toFixed(0)}%`);
  console.log(`  Rifle:   ${(weaponAnalysis.effectiveness.rifle * 100).toFixed(0)}%`);
  console.log(`  Shotgun: ${(weaponAnalysis.effectiveness.shotgun * 100).toFixed(0)}%`);
  console.log(`  SMG:     ${(weaponAnalysis.effectiveness.smg * 100).toFixed(0)}%`);
  console.log(`  Optimal: ${weaponAnalysis.optimal.toUpperCase()}${weaponAnalysis.optimal !== 'rifle' ? '' : ' (rifle dominates)'}`);
  console.log(`  Variety pick: ${weaponAnalysis.variety.toUpperCase()}`);
  console.log();
  
  // Summary verdict
  const rifleDominates = weaponAnalysis.effectiveness.rifle > 0.85 && 
                         weaponAnalysis.effectiveness.rifle > weaponAnalysis.effectiveness.shotgun + 0.3 &&
                         weaponAnalysis.effectiveness.rifle > weaponAnalysis.effectiveness.smg + 0.3;
  
  console.log(rifleDominates 
    ? '⚠️  VERDICT: Single mid-range rifle is too optimal - needs weapon diversity tuning'
    : '✓ VERDICT: Weapon diversity looks healthy');
  
  results.push({
    arenaId,
    coverDistribution: coverAnalysis.distribution,
    averageCoverHeight: coverAnalysis.averageHeight,
    averageSightline: avgSightline,
    weaponEffectiveness: weaponAnalysis.effectiveness,
    optimalWeapon: weaponAnalysis.optimal,
    rifleDominates,
  });
}

console.log('\n' + '='.repeat(80));
console.log('SUMMARY TABLE');
console.log('='.repeat(80));
console.log();
console.log('Arena       | Avg Cover | Sightline | Optimal  | Rifle Issue?');
console.log('-'.repeat(80));
results.forEach(r => {
  const issue = r.rifleDominates ? '⚠️  YES' : '✓ no';
  console.log(`${r.arenaId.padEnd(11)} | ${r.averageCoverHeight.toFixed(2).padStart(9)}m | ${r.averageSightline.toFixed(0).padStart(9)} | ${r.optimalWeapon.padEnd(8)} | ${issue}`);
});

console.log('\n' + '='.repeat(80));
console.log('RECOMMENDATIONS');
console.log('='.repeat(80));

const problematicArenas = results.filter(r => r.rifleDominates);
if (problematicArenas.length > 0) {
  console.log('\nArenas where rifle is too dominant:');
  problematicArenas.forEach(r => {
    console.log(`  • ${r.arenaId}: consider adding more low cover for shotgun lanes`);
    console.log(`    or more varied sightlines to support alternative weapons.`);
  });
} else {
  console.log('\n✓ All arenas show reasonable weapon diversity potential.');
}

console.log();
