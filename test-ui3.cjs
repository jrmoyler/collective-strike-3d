const fs = require('fs');
const html = fs.readFileSync('COLLECTIVE_STRIKE_3D.html', 'utf8');

const damageMatch = html.match(/function damage\(q,dmg,src,flags=\{}\)\{([\s\S]*?)\n\}/);
if (damageMatch) console.log("damage:\n" + damageMatch[0]);

const killMatch = html.match(/function kill\(q,src\)\{([\s\S]*?)\n\}/);
if (killMatch) console.log("kill:\n" + killMatch[0]);
