import fs from 'node:fs';
const html = fs.readFileSync('COLLECTIVE_STRIKE_3D.html', 'utf8');
const scriptMatch = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .find(match => /^\s*"use strict";/.test(match[1]));
if (scriptMatch) {
  console.log("Found script tag");
} else {
  console.log("Could not find script tag");
}
