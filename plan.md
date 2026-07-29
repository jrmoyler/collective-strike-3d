1. **Fix player health/dying issue:**
   - Modify `COLLECTIVE_STRIKE_3D.html` to double the time-to-kill. Replace `function maxHp(p){return p.div.id==="animus"?125:p.div.id==="kinetic"?90:100}` with `function maxHp(p){return p.div.id==="animus"?250:p.div.id==="kinetic"?180:200}`.
   - We will also modify line `p={id:Math.random().toString(36).slice(2),team,div,human,name,x:sp.x,y:sp.y,angle:team==="ATK"?-Math.PI/2:Math.PI/2,hp:100,armor:0,...` to `hp:maxHp(p)`. Wait, it already has `p.hp=maxHp(p);` later. So changing `maxHp` is enough.
2. **UI and gameplay polish:**
   - Modify `COLLECTIVE_STRIKE_3D.html` to improve hit crosshair CSS: Replace `#crosshair.hit span{background:#facc15}` with `#crosshair.hit span{background:#f97316;box-shadow:0 0 12px #f97316;transform:scale(1.2)}`
   - Modify `COLLECTIVE_STRIKE_3D.html` to improve `dmgText` effect: Replace `if(it.type==='float'){it.m.position.addScaledVector(it.v,dt);it.v.y=Math.max(.5,it.v.y-3.6*dt);it.m.material.opacity=Math.max(0,it.t/it.max)}` with `if(it.type==='float'){it.m.position.addScaledVector(it.v,dt);it.v.y=Math.max(1.2,it.v.y-2.4*dt);it.m.material.opacity=Math.max(0,Math.pow(it.t/it.max,1.5));const sc=(it.max?it.t/it.max:1)*.4+.6;it.m.scale.set(it.baseScale.x*sc,it.baseScale.y*sc,1)}`. This requires tracking `baseScale` in `dmgText` creation. Wait, it's easier to just adjust `it.v.y` and `opacity`. Let's just do `if(it.type==='float'){it.m.position.addScaledVector(it.v,dt);it.v.y=Math.max(.8,it.v.y-2.8*dt);it.m.material.opacity=Math.max(0,Math.pow(it.t/it.max, 1.2))}`.
   - Modify `COLLECTIVE_STRIKE_3D.html` to improve `damageVignette` CSS: Replace `background:radial-gradient(circle at center,transparent 45%,rgba(239,68,68,.45))` with `background:radial-gradient(circle at center,transparent 30%,rgba(239,68,68,.65))` and `opacity:0;transition:opacity .18s` with `opacity:0;transition:opacity .12s cubic-bezier(0.4, 0, 0.2, 1)`.
   - Directional damage indicators are out of scope for this polish pass; the existing hit-direction state will not gain a new rendered indicator.
3. **Write changes:**
   - Use a Python script to perform these exact string replacements in `COLLECTIVE_STRIKE_3D.html`.
4. **Verification:**
   - Run the relevant inspection scripts (`node test-html.cjs`, `node test-html.js`, `node test-ui3.cjs`, and `node test-ui6.cjs`) and assert the exact `maxHp` values (250/180/200), crosshair color/shadow/scale, floating-text velocity floor/deceleration/opacity exponent, and vignette gradient/opacity-transition values.
   - Exercise the game in a browser and confirm the hit crosshair visibly scales and glows, damage text follows the intended motion and fade curve, and the vignette renders with the stronger, faster effect. Directional indicator rendering is not expected because it is explicitly out of scope.
5. **Build:**
   - Run `npm run check` after the inspection assertions so syntax, build output, and the rendered smoke test are validated together.
6. **Pre-commit:**
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.
7. **Submit:**
   - Submit the PR.
