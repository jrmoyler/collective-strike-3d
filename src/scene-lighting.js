import { PMREMGenerator } from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

/** A locally generated reflection probe gives metal surfaces something to reflect.
 * Baked once at boot/context restoration, with no network or per-frame capture. */
export function createReflectionEnvironment(renderer) {
  const room = new RoomEnvironment();
  const generator = new PMREMGenerator(renderer);
  try {
    const target = generator.fromScene(room, .08, .1, 100, { size: 128 });
    target.texture.name = 'collective-neutral-reflection-probe';
    return target;
  } finally {
    room.dispose();
    generator.dispose();
  }
}
