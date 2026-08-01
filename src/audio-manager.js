(function createCollectiveStrikeAudioManager(root) {
  "use strict";

  const manifest = root.CS3D_SOUNDTRACK || { TRACKS: {}, BOSS_TRACKS: {}, ARENA_TRACKS: {} };
  const DEFAULT_MUSIC_VOLUME = 0.42;
  const CROSSFADE_MS = 700;
  const DUCK_LEVEL = 0.22;
  const DUCK_ATTACK_MS = 180;
  const DUCK_RELEASE_MS = 500;
  const STORAGE_KEYS = Object.freeze({
    muted: "cs3d.audio.muted",
    musicVolume: "cs3d.audio.musicVolume"
  });

  let context = null;
  let masterGain = null;
  let musicBus = null;
  let stingerBus = null;
  let decks = [];
  let activeDeck = -1;
  let currentTrackKey = null;
  let requestedTrackKey = null;
  let requestedOptions = {};
  let pendingTrackKey = null;
  let stinger = null;
  let stingerKey = null;
  let initialized = false;
  let unlocked = false;
  let gameplayPaused = false;
  let visibilityPaused = false;
  let muted = false;
  let musicVolume = DEFAULT_MUSIC_VOLUME;
  let masterVolume = 1;
  let duckMultiplier = 1;
  let transitionSerial = 0;
  const warned = new Set();

  const clamp01 = value => Math.max(0, Math.min(1, Number(value) || 0));
  const readStored = (key, fallback) => {
    try {
      const value = root.localStorage?.getItem(key);
      return value === null || value === undefined ? fallback : value;
    } catch (_) {
      return fallback;
    }
  };
  const persist = (key, value) => {
    try { root.localStorage?.setItem(key, String(value)); } catch (_) {}
  };
  const warn = (key, message) => {
    if (warned.has(key)) return;
    warned.add(key);
    root.console?.warn?.(`[CS3D audio] ${message}`);
  };
  const notify = () => {
    try {
      root.dispatchEvent?.(new root.CustomEvent("cs3d:audiochange", { detail: getState() }));
    } catch (_) {}
  };
  const targetMusicGain = () => muted ? 0 : musicVolume * masterVolume * duckMultiplier;
  const ramp = (param, value, durationMs) => {
    if (!param || !context) return;
    const now = context.currentTime;
    param.cancelScheduledValues(now);
    param.setValueAtTime(param.value, now);
    param.linearRampToValueAtTime(value, now + durationMs / 1000);
  };
  const applyOutputGain = (durationMs = 80) => ramp(musicBus?.gain, targetMusicGain(), durationMs);

  function resolveTrack(trackKey, seen = new Set()) {
    if (!trackKey || seen.has(trackKey)) return null;
    seen.add(trackKey);
    const entry = manifest.TRACKS?.[trackKey];
    if (!entry) {
      warn(`unknown:${trackKey}`, `Unknown track key '${trackKey}'.`);
      return null;
    }
    if (entry.path) return { key: trackKey, entry };
    warn(`missing:${trackKey}`, entry.note || `Track '${trackKey}' has no local asset; using its fallback.`);
    return entry.fallbackKey ? resolveTrack(entry.fallbackKey, seen) : null;
  }

  function makeDeck() {
    const audio = new root.Audio();
    audio.preload = "auto";
    audio.playsInline = true;
    const gain = context.createGain();
    gain.gain.value = 0;
    context.createMediaElementSource(audio).connect(gain);
    gain.connect(musicBus);
    return { audio, gain, trackKey: null };
  }

  function initAudio() {
    if (initialized) return api;
    initialized = true;
    muted = readStored(STORAGE_KEYS.muted, "false") === "true";
    const storedVolume = Number(readStored(STORAGE_KEYS.musicVolume, DEFAULT_MUSIC_VOLUME));
    musicVolume = Number.isFinite(storedVolume) ? clamp01(storedVolume) : DEFAULT_MUSIC_VOLUME;
    root.document?.addEventListener?.("visibilitychange", handleVisibilityChange);
    notify();
    return api;
  }

  async function unlockAudioFromUserGesture() {
    initAudio();
    try {
      if (!context) {
        const AudioContextCtor = root.AudioContext || root.webkitAudioContext;
        if (!AudioContextCtor || !root.Audio) return false;
        context = new AudioContextCtor();
        masterGain = context.createGain();
        musicBus = context.createGain();
        stingerBus = context.createGain();
        musicBus.connect(masterGain);
        stingerBus.connect(masterGain);
        masterGain.connect(context.destination);
        masterGain.gain.value = 1;
        stingerBus.gain.value = muted ? 0 : masterVolume;
        musicBus.gain.value = targetMusicGain();
        decks = [makeDeck(), makeDeck()];
      }
      if (context.state === "suspended") await context.resume();
      unlocked = context.state === "running";
      if (unlocked && requestedTrackKey && !gameplayPaused && !visibilityPaused) {
        await playMusic(requestedTrackKey, requestedOptions);
      }
      notify();
      return unlocked;
    } catch (_) {
      unlocked = false;
      return false;
    }
  }

  async function playMusic(trackKey, options = {}) {
    initAudio();
    requestedTrackKey = trackKey;
    requestedOptions = { ...options };
    const resolved = resolveTrack(trackKey);
    if (!resolved) return false;
    if ((currentTrackKey === resolved.key || pendingTrackKey === resolved.key) && !options.restart) return true;
    if (!unlocked || gameplayPaused || visibilityPaused) return false;

    const serial = ++transitionSerial;
    pendingTrackKey = resolved.key;
    const nextIndex = activeDeck === 0 ? 1 : 0;
    const next = decks[nextIndex];
    const previous = activeDeck >= 0 ? decks[activeDeck] : null;
    next.audio.pause();
    next.audio.onerror = null;
    next.audio.onended = null;
    next.audio.removeAttribute?.("src");
    next.audio.load?.();
    next.trackKey = resolved.key;
    next.audio.src = new URL(resolved.entry.path, root.document?.baseURI || root.location?.href || "http://localhost/").href;
    next.audio.loop = options.loop ?? resolved.entry.loop;
    next.audio.currentTime = 0;
    next.gain.gain.cancelScheduledValues(context.currentTime);
    next.gain.gain.setValueAtTime(0, context.currentTime);
    next.audio.onended = next.audio.loop ? null : () => {
      if (activeDeck !== nextIndex || next.trackKey !== currentTrackKey) return;
      const follow = options.nextTrackKey || resolved.entry.nextTrackKey;
      if (follow) playMusic(follow);
    };
    next.audio.onerror = () => {
      warn(`load:${resolved.key}`, `Could not load '${resolved.entry.filename}'; playback will continue without it.`);
      if (resolved.entry.fallbackKey && serial === transitionSerial) {
        pendingTrackKey = null;
        playMusic(resolved.entry.fallbackKey, { ...options, restart: true });
      }
    };

    try {
      await next.audio.play();
    } catch (error) {
      pendingTrackKey = null;
      if (error?.name !== "NotAllowedError" && resolved.entry.fallbackKey && serial === transitionSerial) {
        return playMusic(resolved.entry.fallbackKey, { ...options, restart: true });
      }
      unlocked = false;
      return false;
    }
    if (serial !== transitionSerial) {
      next.audio.pause();
      return false;
    }

    const now = context.currentTime;
    next.gain.gain.linearRampToValueAtTime(1, now + CROSSFADE_MS / 1000);
    if (previous && previous !== next) {
      previous.gain.gain.cancelScheduledValues(now);
      previous.gain.gain.setValueAtTime(previous.gain.gain.value, now);
      previous.gain.gain.linearRampToValueAtTime(0, now + CROSSFADE_MS / 1000);
      root.setTimeout(() => {
        if (activeDeck === nextIndex) {
          previous.audio.pause();
          previous.audio.currentTime = 0;
          previous.trackKey = null;
        }
      }, CROSSFADE_MS + 40);
    }
    activeDeck = nextIndex;
    currentTrackKey = resolved.key;
    pendingTrackKey = null;
    notify();
    return true;
  }

  function playBossMusic(bossId, options = {}) {
    const trackKey = manifest.BOSS_TRACKS?.[bossId];
    if (!trackKey) {
      warn(`boss:${bossId}`, `No boss-specific track for '${bossId}'; using the standard boss track.`);
      return playMusic("standard_boss", options);
    }
    return playMusic(trackKey, options);
  }

  function playArenaMusic(arenaId, options = {}) {
    const trackKey = manifest.ARENA_TRACKS?.[arenaId] || "arena_combat_1";
    return playMusic(trackKey, options);
  }

  function setDuck(multiplier, durationMs) {
    duckMultiplier = clamp01(multiplier);
    applyOutputGain(durationMs);
  }

  async function playStinger(trackKey, options = {}) {
    initAudio();
    const resolved = resolveTrack(trackKey);
    if (!resolved || !unlocked) {
      if (options.nextTrackKey) playMusic(options.nextTrackKey);
      return false;
    }
    if (stinger) {
      stinger.audio.pause();
      stinger = null;
      stingerKey = null;
    }
    setDuck(DUCK_LEVEL, DUCK_ATTACK_MS);
    const audio = new root.Audio();
    audio.preload = "auto";
    audio.playsInline = true;
    audio.loop = false;
    audio.src = new URL(resolved.entry.path, root.document?.baseURI || root.location?.href || "http://localhost/").href;
    const gain = context.createGain();
    gain.gain.value = 1;
    context.createMediaElementSource(audio).connect(gain);
    gain.connect(stingerBus);
    const token = { audio, gain };
    stinger = token;
    stingerKey = trackKey;
    const finish = () => {
      if (stinger !== token) return;
      stinger = null;
      stingerKey = null;
      setDuck(1, DUCK_RELEASE_MS);
      if (options.nextTrackKey) playMusic(options.nextTrackKey);
      options.onEnded?.();
      notify();
    };
    audio.addEventListener("ended", finish, { once: true });
    audio.addEventListener("error", () => {
      warn(`stinger:${trackKey}`, `Could not play stinger '${resolved.entry.filename}'.`);
      finish();
    }, { once: true });
    try {
      await audio.play();
      notify();
      return true;
    } catch (_) {
      finish();
      return false;
    }
  }

  function stopMusic(options = {}) {
    requestedTrackKey = null;
    requestedOptions = {};
    pendingTrackKey = null;
    transitionSerial++;
    const fadeMs = options.fadeMs ?? CROSSFADE_MS;
    for (const deck of decks) {
      if (!deck?.audio) continue;
      if (context && fadeMs > 0) ramp(deck.gain.gain, 0, fadeMs);
      root.setTimeout(() => {
        deck.audio.pause();
        if (options.reset !== false) deck.audio.currentTime = 0;
        deck.trackKey = null;
      }, Math.max(0, fadeMs));
    }
    currentTrackKey = null;
    activeDeck = -1;
    notify();
  }

  function pausePlayback() {
    for (const deck of decks) deck.audio?.pause();
    stinger?.audio?.pause();
  }
  function resumePlayback() {
    if (!unlocked || gameplayPaused || visibilityPaused) return;
    if (activeDeck >= 0 && currentTrackKey) decks[activeDeck].audio.play().catch(() => { unlocked = false; });
    if (stinger?.audio) stinger.audio.play().catch(() => {});
  }
  function setPaused(isPaused) {
    gameplayPaused = Boolean(isPaused);
    if (gameplayPaused) pausePlayback(); else resumePlayback();
    notify();
  }
  function handleVisibilityChange() {
    visibilityPaused = Boolean(root.document?.hidden);
    if (visibilityPaused) pausePlayback(); else resumePlayback();
  }
  function setMusicVolume(value) {
    musicVolume = clamp01(value);
    persist(STORAGE_KEYS.musicVolume, musicVolume);
    applyOutputGain();
    notify();
    return musicVolume;
  }
  function setMasterVolume(value) {
    masterVolume = clamp01(value);
    if (stingerBus) stingerBus.gain.value = muted ? 0 : masterVolume;
    applyOutputGain();
  }
  function setMuted(isMuted) {
    muted = Boolean(isMuted);
    persist(STORAGE_KEYS.muted, muted);
    if (stingerBus) stingerBus.gain.value = muted ? 0 : masterVolume;
    applyOutputGain(60);
    notify();
    return muted;
  }
  function toggleMuted() { return setMuted(!muted); }
  function getState() {
    return Object.freeze({
      initialized, unlocked, muted, volume: musicVolume, masterVolume,
      currentTrackKey, requestedTrackKey, pendingTrackKey, stingerKey,
      paused: gameplayPaused, visibilityPaused
    });
  }
  function disposeAudio() {
    transitionSerial++;
    root.document?.removeEventListener?.("visibilitychange", handleVisibilityChange);
    for (const deck of decks) {
      deck.audio.pause();
      deck.audio.removeAttribute?.("src");
      deck.audio.load?.();
    }
    stinger?.audio?.pause();
    context?.close?.();
    context = masterGain = musicBus = stingerBus = null;
    decks = [];
    activeDeck = -1;
    currentTrackKey = requestedTrackKey = pendingTrackKey = stingerKey = null;
    stinger = null;
    initialized = unlocked = false;
  }

  const api = Object.freeze({
    initAudio,
    unlockAudioFromUserGesture,
    playMusic,
    playBossMusic,
    playArenaMusic,
    playStinger,
    stopMusic,
    setMusicVolume,
    setMasterVolume,
    setMuted,
    toggleMuted,
    setPaused,
    getState,
    disposeAudio,
    constants: Object.freeze({ DEFAULT_MUSIC_VOLUME, CROSSFADE_MS, DUCK_LEVEL, STORAGE_KEYS })
  });

  root.CS3D_AUDIO = api;
})(typeof window !== "undefined" ? window : globalThis);
