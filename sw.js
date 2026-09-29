/*
 * Collective Strike 3D service worker.
 *
 * - The app shell (page, runtime bundle, fonts, browser scripts, icons) is
 *   precached per build, so an installed copy launches with no network at all.
 * - Pages are network-first so a new deploy is picked up on the next launch;
 *   the cached shell answers when offline.
 * - Soundtrack MP3s are too large to precache. Each one is cached the first
 *   time it plays and served with byte-range support afterwards, which media
 *   elements (Safari in particular) require.
 *
 * scripts/build.mjs stamps BUILD_ID and PRECACHE into the dist copy.
 */
const BUILD_ID = "source";
const PRECACHE = ["./", "index.html"];
const SHELL = `cs3d-shell-${BUILD_ID}`;
const MEDIA = "cs3d-media-v1";

self.addEventListener("install", event => {
  event.waitUntil(caches.open(SHELL).then(cache => cache.addAll(PRECACHE.map(url => new Request(url, { cache: "reload" })))));
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key.startsWith("cs3d-shell-") && key !== SHELL) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener("message", event => {
  if (event.data === "skip-waiting") self.skipWaiting();
});

async function rangedResponse(request, cached) {
  const range = request.headers.get("range");
  if (!range) return cached;
  const blob = await cached.blob();
  const match = /bytes=(\d*)-(\d*)/.exec(range);
  const size = blob.size;
  let start = match && match[1] ? Number(match[1]) : 0;
  let end = match && match[2] ? Number(match[2]) : size - 1;
  if (match && !match[1] && match[2]) { start = Math.max(0, size - Number(match[2])); end = size - 1; }
  if (start >= size || start > end) return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
  end = Math.min(end, size - 1);
  return new Response(blob.slice(start, end + 1), {
    status: 206,
    headers: {
      "Content-Type": cached.headers.get("Content-Type") || "audio/mpeg",
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Content-Length": String(end - start + 1),
      "Accept-Ranges": "bytes",
    },
  });
}

async function handleMedia(event) {
  const { request } = event;
  const cache = await caches.open(MEDIA);
  const cached = await cache.match(request.url);
  if (cached) return rangedResponse(request, cached);
  // Stream this play straight from the network and fill the cache in the background.
  event.waitUntil(fetch(request.url).then(response => response.ok && response.status === 200 ? cache.put(request.url, response) : null).catch(() => {}));
  return fetch(request);
}

async function handlePage(request) {
  const cache = await caches.open(SHELL);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put("index.html", response.clone());
    return response;
  } catch {
    return (await cache.match("index.html")) || (await cache.match("./")) || Response.error();
  }
}

async function handleAsset(event) {
  const { request } = event;
  const cache = await caches.open(SHELL);
  const cached = await cache.match(request, { ignoreSearch: true });
  const network = fetch(request).then(response => {
    if (response.ok && response.status === 200) cache.put(request, response.clone());
    return response;
  });
  if (cached) {
    event.waitUntil(network.catch(() => {}));
    return cached;
  }
  return network;
}

self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.includes("/assets/audio/")) { event.respondWith(handleMedia(event)); return; }
  if (request.mode === "navigate") { event.respondWith(handlePage(request)); return; }
  event.respondWith(handleAsset(event));
});
