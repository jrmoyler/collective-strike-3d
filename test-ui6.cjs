const fs = require('fs');
const html = fs.readFileSync('COLLECTIVE_STRIKE_3D.html', 'utf8');

const crosshairMatch = html.match(/#crosshair\.hit span\{([^\}]+)\}/);
if (crosshairMatch) console.log("crosshair:", crosshairMatch[0]);

const vignetteMatch = html.match(/#damageVignette\{([^\}]+)\}/);
if (vignetteMatch) console.log("vignette:", vignetteMatch[0]);
