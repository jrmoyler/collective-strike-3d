/*
 * App shell: the parts of Collective Strike that make the browser build behave
 * like an installed game — service worker + update prompt, install surfaces
 * (Chromium install prompt, iOS Add to Home Screen sheet), and immersive
 * fullscreen with a landscape lock when a touch player deploys.
 *
 * Everything here is progressive: on a browser without a capability the game
 * simply keeps running as a normal page.
 */
(function appShell(root) {
  "use strict";
  const doc = root.document;
  const nav = root.navigator;
  const body = () => doc.body;
  const byId = id => doc.getElementById(id);
  const media = query => root.matchMedia?.(query).matches === true;
  const standalone = () => media("(display-mode: standalone)") || media("(display-mode: fullscreen)") || nav.standalone === true;
  const coarse = () => media("(pointer: coarse)");
  const isIOS = /iPad|iPhone|iPod/.test(nav.userAgent) || (nav.platform === "MacIntel" && nav.maxTouchPoints > 1);
  let deferredPrompt = null;

  function ready(fn) {
    if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", fn, { once: true });
    else fn();
  }

  /* ---- service worker ---- */
  function registerWorker() {
    const build = doc.querySelector('meta[name="cs3d-build"]')?.content;
    if (!("serviceWorker" in nav) || !build || build === "source" || !/^https?:$/.test(root.location.protocol)) return;
    // Automated browsers measure a cold, uncached boot; don't let a worker change that.
    if (nav.webdriver) return;
    root.addEventListener("load", () => {
      nav.serviceWorker.register("sw.js").then(registration => {
        const offer = worker => {
          if (!worker || !nav.serviceWorker.controller) return;
          const toast = byId("updateToast");
          toast?.classList.add("on");
          byId("updateReload")?.addEventListener("click", () => worker.postMessage("skip-waiting"), { once: true });
        };
        if (registration.waiting) offer(registration.waiting);
        registration.addEventListener("updatefound", () => {
          const worker = registration.installing;
          worker?.addEventListener("statechange", () => { if (worker.state === "installed") offer(worker); });
        });
      }).catch(() => {});
      let reloading = false;
      nav.serviceWorker.addEventListener("controllerchange", () => {
        if (reloading || !byId("updateToast")?.classList.contains("on")) return;
        reloading = true;
        root.location.reload();
      });
    }, { once: true });
  }

  /* ---- install surfaces ---- */
  function refreshInstallChip() {
    const can = !standalone() && (Boolean(deferredPrompt) || (isIOS && coarse()));
    body()?.classList.toggle("can-install", can);
  }
  root.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
    refreshInstallChip();
  });
  root.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    refreshInstallChip();
    root.CS3D_haptic?.("win");
  });
  function openInstall() {
    root.CS3D_haptic?.("tap");
    if (deferredPrompt) {
      const prompt = deferredPrompt;
      deferredPrompt = null;
      prompt.prompt();
      prompt.userChoice?.finally?.(refreshInstallChip);
      return;
    }
    byId("installSheet")?.classList.add("on");
  }

  /* ---- immersive play on touch devices ---- */
  async function goImmersive() {
    if (!coarse() || standalone()) return lockLandscape();
    const el = doc.documentElement;
    try {
      if (!doc.fullscreenElement && el.requestFullscreen) await el.requestFullscreen({ navigationUI: "hide" });
      else if (!doc.webkitFullscreenElement && el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    } catch {}
    lockLandscape();
  }
  function lockLandscape() {
    try { root.screen?.orientation?.lock?.("landscape").catch(() => {}); } catch {}
  }

  ready(() => {
    body().classList.toggle("is-standalone", standalone());
    body().classList.toggle("is-touch", coarse());
    refreshInstallChip();
    byId("installChip")?.addEventListener("click", openInstall);
    byId("installSheetClose")?.addEventListener("click", () => byId("installSheet")?.classList.remove("on"));
    byId("installSheet")?.addEventListener("click", event => { if (event.target.id === "installSheet") event.currentTarget.classList.remove("on"); });
    // Deploying is the user gesture that earns a fullscreen, sideways game.
    for (const id of ["arenaDeployBtn", "rematchBtn", "nextOperationBtn"]) byId(id)?.addEventListener("click", goImmersive);
    // Long-press and pinch gestures belong to the game, not the browser.
    doc.addEventListener("contextmenu", event => { if (coarse()) event.preventDefault(); });
    doc.addEventListener("gesturestart", event => event.preventDefault());
    doc.addEventListener("dblclick", event => { if (coarse()) event.preventDefault(); }, { passive: false });
    // Light tap feedback on menu buttons.
    doc.addEventListener("pointerdown", event => {
      if (event.pointerType !== "touch") return;
      const button = event.target.closest?.("button:not(.touchBtn)");
      if (button) root.CS3D_haptic?.("tap");
    }, { passive: true });
  });

  registerWorker();
  root.CS3D_APP_SHELL = Object.freeze({ standalone, openInstall, goImmersive });
})(window);
