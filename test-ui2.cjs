const fs = require('fs');
const { extractFunction } = require('./extract-function.cjs');
const html = fs.readFileSync('COLLECTIVE_STRIKE_3D.html', 'utf8');

const checkRoundMatch = extractFunction(html, 'function checkRound()');
if(checkRoundMatch) {
    console.log(checkRoundMatch);
} else {
    console.log("Not found");
}
