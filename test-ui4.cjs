const fs = require('fs');
const html = fs.readFileSync('COLLECTIVE_STRIKE_3D.html', 'utf8');

const fxMatch = html.match(/function makeFX\(\)\{([\s\S]*?)return\{([\s\S]*?)\}/);
if (fxMatch) {
    console.log(fxMatch[0]);
}
