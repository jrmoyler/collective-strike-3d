/** Camera and sound presentation; never feeds back into aim, damage or movement. */
export function combatCameraFocus(actor, aim, scale, elevation = 0, allowLead = true) {
  const dx = allowLead ? (aim.x - actor.x) * .08 * scale : 0;
  const dz = allowLead ? (aim.y - actor.y) * .08 * scale : 0;
  // Looking across the map must not push the player out of the useful playfield.
  const length = Math.hypot(dx, dz), weight = length > 3.2 ? 3.2 / length : 1;
  return { x: actor.x * scale + dx * weight, y: elevation, z: actor.y * scale + dz * weight };
}

export function cameraDamping(dt, response = 7) {
  return 1 - Math.exp(-Math.max(0, Number.isFinite(dt) ? dt : 0) * response);
}

export function shotAcoustics(source, listener, obstructed = false) {
  if (!source || !listener) return { gain: 0, pan: 0, cutoff: 14000 };
  const dx = source.x - listener.x, dz = source.y - listener.y;
  const distance = Math.hypot(dx, dz);
  return {
    gain: Math.max(0, 1 - distance / 650) * .5 * (obstructed ? .55 : 1),
    pan: Math.max(-.85, Math.min(.85, dx / 220)),
    cutoff: obstructed ? 1800 : 14000,
  };
}
