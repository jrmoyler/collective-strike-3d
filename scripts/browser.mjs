/*
 * Shared headless-browser plumbing for the smoke run and the arena budget gate.
 * playwright-core ships no browsers, so both entry points resolve an installed
 * Chromium the same way and serve dist/ from a throwaway loopback server.
 */
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import process from "node:process";

export const repoRoot = path.resolve(import.meta.dirname, "..");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".woff2": "font/woff2",
  ".png": "image/png",
  ".mp3": "audio/mpeg"
};

/** Set CS3D_CHROMIUM, or PLAYWRIGHT_BROWSERS_PATH to a Playwright browser pool. */
export function resolveChromium() {
  const explicit = process.env.CS3D_CHROMIUM;
  if (explicit) {
    if (!fs.existsSync(explicit)) throw new Error(`CS3D_CHROMIUM points at a missing binary: ${explicit}`);
    return explicit;
  }
  const pool = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (pool && fs.existsSync(pool)) {
    const builds = fs.readdirSync(pool).filter(entry => /^chromium(_headless_shell)?-\d+$/.test(entry)).sort();
    for (const build of builds.reverse()) {
      for (const candidate of [
        path.join(pool, build, "chrome-linux", "chrome"),
        path.join(pool, build, "chrome-linux", "headless_shell")
      ]) if (fs.existsSync(candidate)) return candidate;
    }
  }
  for (const candidate of ["/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome"]) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error("No Chromium found. Set CS3D_CHROMIUM to a Chrome/Chromium binary.");
}

export async function serveDist() {
  const distRoot = path.join(repoRoot, "dist");
  const server = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "") || "index.html";
    const file = path.join(distRoot, rel);
    if (!file.startsWith(distRoot) || !fs.existsSync(file)) {
      res.writeHead(404).end("not found");
      return;
    }
    res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  return {
    origin: `http://127.0.0.1:${server.address().port}`,
    async close() {
      server.closeAllConnections?.();
      await new Promise(resolve => server.close(resolve));
    }
  };
}

export const CHROMIUM_ARGS = ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"];

/** Total committed bytes below a repository directory, 0 when it does not exist. */
export function directoryBytes(relative) {
  const base = path.join(repoRoot, relative);
  if (!fs.existsSync(base)) return 0;
  let total = 0;
  const walk = dir => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else total += fs.statSync(full).size;
    }
  };
  walk(base);
  return total;
}
