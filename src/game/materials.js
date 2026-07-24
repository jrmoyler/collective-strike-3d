import * as THREE from "three";

function canvasTexture(size, paint) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const context = canvas.getContext("2d");
  paint(context, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

export function createStoneTextures() {
  const color = canvasTexture(512, (ctx, size) => {
    ctx.fillStyle = "#171d2b";
    ctx.fillRect(0, 0, size, size);
    const block = 64;
    for (let y = 0; y < size; y += block) {
      for (let x = 0; x < size; x += block * 2) {
        const offset = (y / block) % 2 ? block : 0;
        const px = x + offset;
        const shade = 24 + Math.floor(Math.random() * 18);
        ctx.fillStyle = `rgb(${shade},${shade + 7},${shade + 18})`;
        ctx.fillRect(px + 2, y + 2, block * 2 - 4, block - 4);
        ctx.strokeStyle = "rgba(102,126,166,.2)";
        ctx.strokeRect(px + 3, y + 3, block * 2 - 6, block - 6);
      }
    }
    for (let i = 0; i < 3200; i++) {
      const alpha = Math.random() * 0.11;
      ctx.fillStyle = Math.random() > 0.5 ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`;
      ctx.fillRect(Math.random() * size, Math.random() * size, Math.random() * 3 + 1, Math.random() * 3 + 1);
    }
  });
  color.repeat.set(8, 8);

  const roughness = canvasTexture(256, (ctx, size) => {
    ctx.fillStyle = "#d4d4d4";
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 1800; i++) {
      const value = Math.floor(150 + Math.random() * 100);
      ctx.fillStyle = `rgb(${value},${value},${value})`;
      ctx.fillRect(Math.random() * size, Math.random() * size, 2, 2);
    }
  });
  roughness.repeat.set(8, 8);
  return { color, roughness };
}

export function createMetalTexture() {
  const texture = canvasTexture(256, (ctx, size) => {
    const gradient = ctx.createLinearGradient(0, 0, size, 0);
    gradient.addColorStop(0, "#111827");
    gradient.addColorStop(0.42, "#334155");
    gradient.addColorStop(0.5, "#64748b");
    gradient.addColorStop(0.58, "#263244");
    gradient.addColorStop(1, "#0b1120");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    for (let y = 8; y < size; y += 14) {
      ctx.fillStyle = "rgba(255,255,255,.045)";
      ctx.fillRect(0, y, size, 1);
    }
  });
  texture.repeat.set(2, 2);
  return texture;
}

export const runeVertexShader = `
  varying vec2 vUv;
  varying vec3 vWorld;
  void main() {
    vUv = uv;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

export const runeFragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uIntensity;
  varying vec2 vUv;
  varying vec3 vWorld;
  float ring(vec2 uv, float radius, float width) {
    return 1.0 - smoothstep(width, width + .012, abs(length(uv) - radius));
  }
  void main() {
    vec2 uv = vUv - .5;
    float angle = atan(uv.y, uv.x);
    float radial = length(uv);
    float pulse = .72 + .28 * sin(uTime * 2.3 + radial * 22.0);
    float rings = ring(uv, .18, .008) + ring(uv, .31, .006) + ring(uv, .45, .005);
    float spokes = smoothstep(.94, 1.0, cos(angle * 8.0 + uTime * .32)) * smoothstep(.47, .12, radial);
    float glyph = smoothstep(.48, .05, radial) * step(.78, fract((angle / 6.2831 + .5) * 24.0 + radial * 2.0));
    float alpha = clamp((rings + spokes * .7 + glyph * .14) * pulse * uIntensity, 0.0, .92);
    gl_FragColor = vec4(uColor * (1.2 + pulse), alpha);
  }
`;

export const mistVertexShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.z += sin(p.x * .18 + uTime * .35) * .55 + cos(p.y * .13 - uTime * .22) * .35;
    vWave = p.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

export const mistFragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;
  varying float vWave;
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  void main() {
    vec2 uv = vUv;
    float grain = noise(floor((uv + uTime * .007) * 55.0));
    float bands = sin(uv.x * 23.0 + uTime * .3) * cos(uv.y * 19.0 - uTime * .22);
    float edge = smoothstep(0.0, .22, uv.x) * smoothstep(1.0, .78, uv.x) * smoothstep(0.0, .2, uv.y) * smoothstep(1.0, .8, uv.y);
    float alpha = edge * (.045 + bands * .022 + grain * .026);
    gl_FragColor = vec4(uColor, max(0.0, alpha));
  }
`;
