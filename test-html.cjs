const fs = require('fs');
const { extractFunction } = require('./extract-function.cjs');
const html = fs.readFileSync('COLLECTIVE_STRIKE_3D.html', 'utf8');
const maxHpMatch = extractFunction(html, 'function maxHp(p)');
console.log("maxHp:", maxHpMatch || "not found");

const damageMatch = extractFunction(html, 'function damage(q,dmg,src,flags={})');
console.log("damage:", damageMatch || "not found");
