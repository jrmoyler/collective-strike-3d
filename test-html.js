const fs = require('fs');
const html = fs.readFileSync('COLLECTIVE_STRIKE_3D.html', 'utf8');
const scriptMatch = html.match(/<script>\s*"use strict";([\s\S]*?)<\/script>/);
if (scriptMatch) {
  console.log("Found script tag");
} else {
  console.log("Could not find script tag");
}
