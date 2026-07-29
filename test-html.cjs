const fs = require('fs');
const html = fs.readFileSync('COLLECTIVE_STRIKE_3D.html', 'utf8');
const maxHpMatch = html.match(/function maxHp\(p\){([^}]+)}/);
console.log("maxHp:", maxHpMatch ? maxHpMatch[0] : "not found");

const damageMatch = html.match(/function damage\(q,dmg,src,flags=\{}\)\{([\s\S]*?)^}/m);
console.log("damage:", damageMatch ? damageMatch[0] : "not found");
