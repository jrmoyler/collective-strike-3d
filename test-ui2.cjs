const fs = require('fs');
const html = fs.readFileSync('COLLECTIVE_STRIKE_3D.html', 'utf8');

const checkRoundMatch = html.match(/function checkRound\(\)\{([\s\S]*?)^\}/m);
if(checkRoundMatch) {
    console.log(checkRoundMatch[0]);
} else {
    console.log("Not found");
}
