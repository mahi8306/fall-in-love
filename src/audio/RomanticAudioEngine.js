/**
 * Streamlined Romantic Audio Engine
 * Automatically plays local downloaded MP3s from audio/ folder with
 * seamless fallback to warm acoustic synthesized melodies and real-time Web Audio Analyser.
 */

const NOTE_FREQS = {
  'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'A3': 220.00, 'B3': 246.94,
  'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99,
  'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
  'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99,
  'G5': 783.99, 'G#5': 830.61, 'A5': 880.00, 'B5': 987.77, 'C6': 1046.50
};

import { STAGES_DATA } from '../data/stagesData.js';

export class RomanticAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.analyser = null;
    this.mediaElementSource = null;
    this.audioEl = new Audio();
    this.audioEl.crossOrigin = 'anonymous';

    this.isPlaying = false;
    this.isMuted = false;
    this.currentStageId = null;
    this.currentTime = 0;
    this.duration = 240;
    this.volume = 0.8;
    this.mode = 'synth'; // 'audio-file' | 'synth'

    this.sequenceTimer = null;
    this.currentNoteIndex = 0;
    this.onTimeUpdate = null;
    this.onStateChange = null;
    this.tickerInterval = null;

    this.initAudioElementListeners();
  }

  initAudioContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.analyser.smoothingTimeConstant = 0.8;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);

      try {
        this.mediaElementSource = this.ctx.createMediaElementSource(this.audioEl);
        this.mediaElementSource.connect(this.masterGain);
      } catch (err) {}
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initAudioElementListeners() {
    this.audioEl.addEventListener('timeupdate', () => {
      if (this.mode === 'audio-file') {
        this.currentTime = this.audioEl.currentTime;
        this.duration = this.audioEl.duration || this.duration;
        if (this.onTimeUpdate) {
          this.onTimeUpdate(this.currentTime, this.duration);
        }
      }
    });

    this.audioEl.addEventListener('loadedmetadata', () => {
      if (this.audioEl.duration && !isNaN(this.audioEl.duration)) {
        this.duration = this.audioEl.duration;
        if (this.onTimeUpdate) {
          this.onTimeUpdate(this.currentTime, this.duration);
        }
      }
    });

    this.audioEl.addEventListener('ended', () => {
      this.isPlaying = false;
      this.notifyState();
    });

    this.audioEl.addEventListener('error', () => {
      if (this.mode === 'audio-file') {
        this.mode = 'synth';
        if (this.isPlaying) {
          this.playSynthMelody(this.currentStageId);
        }
      }
    });
  }

  playStage(stageId) {
    if (stageId === 0) {
      this.stop();
      return;
    }

    this.initAudioContext();

    const stage = STAGES_DATA.find((s) => s.id === stageId);
    if (!stage) return;

    if (this.currentStageId !== stageId) {
      this.stop();
      this.currentStageId = stageId;
      this.currentTime = 0;
      this.currentNoteIndex = 0;
      this.duration = stage.song.durationSec || 240;
    }

    this.isPlaying = true;

    // Try loading audio from audio/ folder
    if (stage.audioSources && stage.audioSources.length > 0) {
      this.mode = 'audio-file';
      this.audioEl.src = stage.audioSources[0];
      this.audioEl.currentTime = this.currentTime;
      this.audioEl.play().catch(() => {
        // Fallback to synth melody on autoplay restriction or missing file
        this.mode = 'synth';
        this.playSynthMelody(stageId);
      });
    } else {
      this.mode = 'synth';
      this.playSynthMelody(stageId);
    }

    this.startTicker();
    this.notifyState();
  }

  playSynthMelody(stageId) {
    const stage = STAGES_DATA.find((s) => s.id === stageId);
    if (!this.isPlaying || !stage || !stage.melodyMotif) return;

    const seq = stage.melodyMotif;
    const item = seq[this.currentNoteIndex];
    this.playAcousticNote(item.note, item.dur, item.chord);

    this.currentNoteIndex = (this.currentNoteIndex + 1) % seq.length;

    this.sequenceTimer = setTimeout(() => {
      if (this.isPlaying && this.mode === 'synth') {
        this.playSynthMelody(stageId);
      }
    }, item.dur * 1000);
  }

  playAcousticNote(noteName, duration, chordNotes = null) {
    if (!this.ctx || this.isMuted) return;

    const freq = NOTE_FREQS[noteName] || 440;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, now);

    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(5.5, now);
    lfoGain.gain.setValueAtTime(freq * 0.012, now);
    lfo.connect(osc1.frequency);
    lfo.start(now);
    lfo.stop(now + duration);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, now);
    filter.frequency.exponentialRampToValueAtTime(700, now + duration);

    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.linearRampToValueAtTime(0.35, now + 0.06);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration + 0.2);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.25);
    osc2.stop(now + duration + 0.25);

    if (chordNotes && Array.isArray(chordNotes)) {
      chordNotes.forEach((cNote) => {
        const cFreq = NOTE_FREQS[cNote];
        if (!cFreq) return;

        const chordOsc = this.ctx.createOscillator();
        const chordGain = this.ctx.createGain();
        chordOsc.type = 'sine';
        chordOsc.frequency.setValueAtTime(cFreq, now);

        chordGain.gain.setValueAtTime(0.001, now);
        chordGain.gain.linearRampToValueAtTime(0.12, now + 0.08);
        chordGain.gain.exponentialRampToValueAtTime(0.001, now + duration * 1.5);

        chordOsc.connect(chordGain);
        chordGain.connect(this.masterGain);

        chordOsc.start(now);
        chordOsc.stop(now + duration * 1.5);
      });
    }
  }

  pause() {
    this.isPlaying = false;
    if (this.sequenceTimer) {
      clearTimeout(this.sequenceTimer);
      this.sequenceTimer = null;
    }
    if (this.mode === 'audio-file') {
      this.audioEl.pause();
    }
    this.stopTicker();
    this.notifyState();
  }

  stop() {
    this.isPlaying = false;
    if (this.sequenceTimer) {
      clearTimeout(this.sequenceTimer);
      this.sequenceTimer = null;
    }
    if (this.audioEl) {
      this.audioEl.pause();
      this.audioEl.currentTime = 0;
    }
    this.stopTicker();
    this.currentTime = 0;
    this.currentNoteIndex = 0;
    this.notifyState();
    if (this.onTimeUpdate) {
      this.onTimeUpdate(0, this.duration);
    }
  }

  togglePlayPause(stageId) {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.playStage(stageId || this.currentStageId || 1);
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
    if (this.audioEl) {
      this.audioEl.volume = this.isMuted ? 0 : this.volume;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
    if (this.audioEl) {
      this.audioEl.muted = this.isMuted;
    }
    return this.isMuted;
  }

  seek(percent) {
    const target = (percent / 100) * this.duration;
    this.currentTime = target;
    if (this.mode === 'audio-file') {
      this.audioEl.currentTime = target;
    }
    if (this.onTimeUpdate) {
      this.onTimeUpdate(this.currentTime, this.duration);
    }
  }

  startTicker() {
    this.stopTicker();
    this.tickerInterval = setInterval(() => {
      if (this.isPlaying && this.mode === 'synth') {
        this.currentTime += 1;
        if (this.currentTime >= this.duration) {
          this.currentTime = 0;
        }
        if (this.onTimeUpdate) {
          this.onTimeUpdate(this.currentTime, this.duration);
        }
      }
    }, 1000);
  }

  stopTicker() {
    if (this.tickerInterval) {
      clearInterval(this.tickerInterval);
      this.tickerInterval = null;
    }
  }

  notifyState() {
    if (this.onStateChange) {
      this.onStateChange({
        isPlaying: this.isPlaying,
        stageId: this.currentStageId,
        mode: this.mode
      });
    }
  }

  getFrequencyData() {
    if (!this.analyser || !this.isPlaying) {
      return new Uint8Array(16).fill(0);
    }
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);
    return dataArray;
  }
}
