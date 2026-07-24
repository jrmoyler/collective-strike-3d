class RiftAudio {
  constructor() {
    this.context = null;
    this.master = null;
    this.sfx = null;
    this.ambience = null;
    this.enabled = true;
    this.started = false;
  }

  start() {
    if (this.started) {
      this.context?.resume();
      return;
    }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.context = new AudioContext();
    this.master = this.context.createGain();
    this.sfx = this.context.createGain();
    this.ambience = this.context.createGain();
    this.master.gain.value = this.enabled ? 0.82 : 0;
    this.sfx.gain.value = 0.72;
    this.ambience.gain.value = 0.055;
    this.sfx.connect(this.master);
    this.ambience.connect(this.master);
    this.master.connect(this.context.destination);
    this.startAmbience();
    this.started = true;
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (this.master && this.context) {
      this.master.gain.cancelScheduledValues(this.context.currentTime);
      this.master.gain.linearRampToValueAtTime(enabled ? 0.82 : 0, this.context.currentTime + 0.08);
    }
  }

  startAmbience() {
    const now = this.context.currentTime;
    [41.2, 55, 82.4].forEach((frequency, index) => {
      const oscillator = this.context.createOscillator();
      const gain = this.context.createGain();
      const filter = this.context.createBiquadFilter();
      oscillator.type = index === 2 ? "triangle" : "sine";
      oscillator.frequency.value = frequency;
      oscillator.detune.value = index * 5 - 4;
      filter.type = "lowpass";
      filter.frequency.value = 210 + index * 90;
      gain.gain.value = 0.12 / (index + 1);
      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(this.ambience);
      oscillator.start(now);
    });
  }

  tone(frequency, endFrequency, duration, gain = 0.12, type = "sine", delay = 0) {
    if (!this.context || !this.enabled) return;
    const now = this.context.currentTime + delay;
    const oscillator = this.context.createOscillator();
    const envelope = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), now + duration);
    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(gain, now + 0.008);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(envelope);
    envelope.connect(this.sfx);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  }

  noise(duration = 0.08, gain = 0.05, frequency = 1800) {
    if (!this.context || !this.enabled) return;
    const length = Math.ceil(this.context.sampleRate * duration);
    const buffer = this.context.createBuffer(1, length, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < length; index++) data[index] = Math.random() * 2 - 1;
    const source = this.context.createBufferSource();
    const filter = this.context.createBiquadFilter();
    const envelope = this.context.createGain();
    source.buffer = buffer;
    filter.type = "bandpass";
    filter.frequency.value = frequency;
    filter.Q.value = 0.7;
    envelope.gain.setValueAtTime(gain, this.context.currentTime);
    envelope.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + duration);
    source.connect(filter);
    filter.connect(envelope);
    envelope.connect(this.sfx);
    source.start();
  }

  ui() {
    this.tone(640, 900, 0.06, 0.035, "sine");
  }

  shot() {
    this.tone(190, 68, 0.09, 0.12, "sawtooth");
    this.noise(0.045, 0.045, 2200);
  }

  hit(kill = false) {
    this.tone(kill ? 150 : 880, kill ? 48 : 560, kill ? 0.24 : 0.07, kill ? 0.12 : 0.045, kill ? "sawtooth" : "square");
  }

  hurt() {
    this.tone(92, 42, 0.22, 0.15, "sawtooth");
    this.noise(0.12, 0.06, 420);
  }

  ability() {
    this.tone(130, 980, 0.38, 0.11, "sine");
    this.tone(260, 1480, 0.3, 0.065, "triangle", 0.04);
  }

  reload() {
    this.tone(420, 260, 0.08, 0.045, "square");
    this.tone(280, 620, 0.1, 0.05, "square", 0.62);
  }

  wave() {
    this.tone(82, 164, 0.5, 0.11, "sawtooth");
  }

  boss() {
    this.tone(48, 32, 1.1, 0.2, "sawtooth");
    this.tone(72, 38, 1.35, 0.12, "triangle", 0.18);
  }
}

export const riftAudio = new RiftAudio();
