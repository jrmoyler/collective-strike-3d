import test from "node:test";
import assert from "node:assert/strict";

import {
  CAREER_KEY,
  SAVE_VERSION,
  SETTINGS_KEY,
  createMemoryStorage,
  loadCareer,
  loadSettings,
  resetCareer,
  resetSettings,
  saveCareer,
  saveSettings,
} from "../src/persistence.js";

test("legacy settings migrate without losing audio or accessibility preferences", () => {
  const storage = createMemoryStorage({
    cs3d_cfg: JSON.stringify({ master: 0.45, music: 0.2, sfx: 0.7, shake: 0.25, bloom: 0 }),
  });
  const settings = loadSettings(storage, { reducedMotion: true });
  assert.equal(settings.version, SAVE_VERSION);
  assert.equal(settings.master, 0.45);
  assert.equal(settings.effects, 0.7);
  assert.equal(settings.shake, 0.25);
  assert.equal(settings.bloom, false);
  assert.equal(settings.reducedMotion, true);
  assert.equal(JSON.parse(storage.getItem(SETTINGS_KEY)).version, SAVE_VERSION);
});

test("legacy career data migrates without erasing progression", () => {
  const storage = createMemoryStorage({ cs3d_career: JSON.stringify({ matches: 8, wins: 5, xp: 912, mastery: { zenflow: 400 } }) });
  const career = loadCareer(storage);
  assert.equal(career.version, SAVE_VERSION);
  assert.equal(career.matches, 8);
  assert.equal(career.wins, 5);
  assert.equal(career.xp, 912);
  assert.equal(career.mastery.zenflow, 400);
});

test("corrupt saves recover to safe defaults and preserve the invalid payload for diagnosis", () => {
  const storage = createMemoryStorage({ [CAREER_KEY]: "{not-json" });
  const career = loadCareer(storage);
  assert.equal(career.matches, 0);
  assert.equal(career.xp, 0);
  assert.equal(storage.getItem(`${CAREER_KEY}.corrupt`), "{not-json");
});

test("settings and career persist independently and reset without affecting each other", () => {
  const storage = createMemoryStorage();
  saveSettings(storage, { uiScale: 1.2, tutorialCompleted: true });
  saveCareer(storage, { matches: 3, xp: 500 });
  resetSettings(storage);
  assert.equal(loadSettings(storage).tutorialCompleted, false);
  assert.equal(loadCareer(storage).xp, 500);
  resetCareer(storage);
  assert.equal(loadCareer(storage).matches, 0);
});
