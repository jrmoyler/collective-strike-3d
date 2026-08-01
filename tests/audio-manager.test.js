import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const manifestSource = fs.readFileSync(path.join(root, 'src', 'soundtrack-manifest.js'), 'utf8');
const managerSource = fs.readFileSync(path.join(root, 'src', 'audio-manager.js'), 'utf8');

class FakeParam {
  constructor(value = 1) { this.value = value; }
  cancelScheduledValues() {}
  setValueAtTime(value) { this.value = value; }
  linearRampToValueAtTime(value) { this.value = value; }
}

class FakeNode {
  constructor() { this.gain = new FakeParam(); }
  connect() { return this; }
}

class FakeAudioContext {
  constructor() {
    this.state = 'suspended';
    this.currentTime = 0;
    this.destination = new FakeNode();
  }
  createGain() { return new FakeNode(); }
  createMediaElementSource() { return new FakeNode(); }
  async resume() { this.state = 'running'; }
  async close() { this.state = 'closed'; }
}

class FakeAudio {
  static instances = [];
  constructor() {
    this.listeners = new Map();
    this.playCalls = 0;
    this.pauseCalls = 0;
    this.currentTime = 0;
    this.loop = false;
    FakeAudio.instances.push(this);
  }
  addEventListener(type, listener) { this.listeners.set(type, listener); }
  async play() { this.playCalls++; }
  pause() { this.pauseCalls++; }
  load() {}
  removeAttribute(name) { if (name === 'src') this.src = ''; }
}

function makeSandbox() {
  FakeAudio.instances = [];
  const storage = new Map();
  const documentListeners = new Map();
  const sandbox = {
    Audio: FakeAudio,
    AudioContext: FakeAudioContext,
    URL,
    console: { warn() {} },
    location: { href: 'http://localhost/index.html' },
    document: {
      baseURI: 'http://localhost/index.html',
      hidden: false,
      addEventListener(type, listener) { documentListeners.set(type, listener); },
      removeEventListener(type) { documentListeners.delete(type); }
    },
    localStorage: {
      getItem(key) { return storage.has(key) ? storage.get(key) : null; },
      setItem(key, value) { storage.set(key, value); }
    },
    setTimeout(callback) { callback(); return 1; },
    clearTimeout() {},
    dispatchEvent() {},
    CustomEvent: class CustomEvent { constructor(type, init) { this.type = type; this.detail = init?.detail; } }
  };
  vm.runInNewContext(manifestSource, sandbox);
  vm.runInNewContext(managerSource, sandbox);
  return { sandbox, storage, audio: sandbox.CS3D_AUDIO };
}

test('repeated state updates do not start duplicate persistent music', async () => {
  const { audio } = makeSandbox();
  audio.initAudio();
  await audio.unlockAudioFromUserGesture();
  assert.equal(await audio.playMusic('main_menu'), true);
  const firstPlayCount = FakeAudio.instances.reduce((sum, item) => sum + item.playCalls, 0);
  assert.equal(await audio.playMusic('main_menu'), true);
  assert.equal(FakeAudio.instances.reduce((sum, item) => sum + item.playCalls, 0), firstPlayCount);
  assert.equal(audio.getState().currentTrackKey, 'main_menu');
});

test('missing optional and unknown boss tracks fall back without throwing', async () => {
  const { audio } = makeSandbox();
  audio.initAudio();
  await audio.unlockAudioFromUserGesture();
  assert.equal(await audio.playMusic('final_boss'), true);
  assert.equal(audio.getState().currentTrackKey, 'standard_boss');
  assert.equal(await audio.playBossMusic('not_in_roster'), true);
  assert.equal(audio.getState().currentTrackKey, 'standard_boss');
});

test('mute and music volume preferences persist under namespaced keys', () => {
  const { audio, storage } = makeSandbox();
  audio.initAudio();
  assert.equal(audio.setMuted(true), true);
  assert.equal(audio.setMusicVolume(0.37), 0.37);
  assert.equal(storage.get('cs3d.audio.muted'), 'true');
  assert.equal(storage.get('cs3d.audio.musicVolume'), '0.37');
});
