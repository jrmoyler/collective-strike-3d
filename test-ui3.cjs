const fs = require('fs');
const { extractFunction } = require('./extract-function.cjs');
const html = fs.readFileSync('COLLECTIVE_STRIKE_3D.html', 'utf8');

const damageMatch = extractFunction(html, 'function damage(q,dmg,src,flags={})');
if (damageMatch) console.log("damage:\n" + damageMatch);

const killMatch = extractFunction(html, 'function kill(q,src)');
if (killMatch) console.log("kill:\n" + killMatch);
