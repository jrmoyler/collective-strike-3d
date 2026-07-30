#!/usr/bin/env node
/**
 * One-shot patch: redesign Cognara operator doctrine special from
 * EMPATHY MIRROR → COGNITIVE BRAND so it no longer collides with the
 * boss Cognara Mirror ability-thief fantasy.
 *
 * Run: node scripts/apply-cognara-brand.mjs
 * Idempotent — safe to re-run.
 */
import fs from 'fs';

const file = 'COLLECTIVE_STRIKE_3D.html';
let html = fs.readFileSync(file, 'utf8');

const before = html;

// Rename special + rewrite description / effect to a brand (mark) identity.
html = html.replace(
  /special:\{n:"EMPATHY MIRROR",d:"Mirrors the highest-threat enemy and exposes its cognitive weak points\.",eff:"Revealed targets take 25% more damage from all sources\."\}/,
  'special:{n:"COGNITIVE BRAND",d:"Brands the highest-threat enemy with a stacking cognitive fracture.",eff:"Branded targets take 25% more damage and briefly reflect a portion of incoming damage."}'
);

// Fallback if formatting differs slightly
if (html === before) {
  html = html.replace(/EMPATHY MIRROR/g, 'COGNITIVE BRAND');
  html = html.replace(
    /Mirrors the highest-threat enemy and exposes its cognitive weak points\./g,
    'Brands the highest-threat enemy with a stacking cognitive fracture.'
  );
  html = html.replace(
    /Revealed targets take 25% more damage from all sources\./g,
    'Branded targets take 25% more damage and briefly reflect a portion of incoming damage.'
  );
}

if (html === before) {
  console.log('No changes needed (already applied or strings not found).');
  process.exit(0);
}

fs.writeFileSync(file, html);
console.log('Applied Cognitive Brand redesign to', file);
