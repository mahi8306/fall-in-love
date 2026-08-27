/**
 * Fall in Love — Complete Self-Contained Luxury Application Bundle
 * Pure HTML/CSS/JS with zero backend or C# dependencies.
 * 
 * Features:
 * 1. 6 Sacred Stages of Romance (after Main Page Prologue).
 * 2. Luxury Panoramic Stage Altar with Poetry & Integrated Turntable Music Deck.
 * 3. 60FPS Elevated Canvas VFX for all stages (Rose Petals, Fireflies, Heartbeat, Rain on Glass, Emerald Aurora, Celestial Rings).
 * 4. Interactive 3D Card Parallax Tilt, Copy Shayari, and Floating Navigation Dock.
 */

(function () {
  'use strict';

  // ============================================================================
  // 1. DATA SPECIFICATION (6 STAGES AFTER MAIN PAGE)
  // ============================================================================

  const STAGES_DATA = [
    {
      id: 0,
      slug: 'hero',
      stageNumber: '00',
      title: 'Fall in Love',
      devanagariTitle: 'इश्क़ का सफ़र',
      subtitle: 'A Symphonic Journey Through the 6 Sacred Stages of Romance',
      tagline: 'Step into an evocative odyssey where timeless vintage melodies, soul-stirring Hindi & Urdu poetry, and breathtaking visual landscapes awaken the romance within.',
      vfx: 'celestial-hero',
      themeClass: 'theme-hero',
      palette: {
        primary: '#f43f5e',
        secondary: '#fb7185',
        accent: '#ffe4e6',
        bgGlow1: 'rgba(244, 63, 94, 0.22)',
        bgGlow2: 'rgba(147, 51, 234, 0.18)',
        orbColor: '#fb7185'
      },
      isHero: true,
      audio: null
    },
    {
      id: 1,
      slug: 'mulaqat',
      stageNumber: '01',
      stageIndexLabel: '1 of 6',
      title: 'Mulaqat',
      devanagariTitle: 'मुलाक़ात',
      meaning: 'The Serendipitous Encounter',
      quoteHindi: 'एक अजनबी हसीना से यूँ मुलाक़ात हो गई,\nफिर क्या हुआ ये ना पूछो, कुछ ऐसी बात हो गई...',
      quoteUrdu: 'اک اجنبی حسینہ سے یوں ملاقات ہو گئی\nپھر کیا ہوا یہ نہ پوچھو، کچھ ایسی بات ہو گئی',
      quoteEnglish: 'A fleeting glance across a crowded room, and the universe quietly shifted. Words dissolved into the warmth of blushing smiles, marking the beginning of an unwritten eternity.',
      audioSources: [
        'audio/1-mulaqat.mp3',
        'audio/mulaqat.mp3',
        'audio/Ek Ajnabi Hasina Se.mp3'
      ],
      song: {
        title: 'Ek Ajnabi Hasina Se',
        film: 'Ajanabee (1974)',
        singer: 'Kishore Kumar',
        musicDirector: 'R. D. Burman',
        lyricist: 'Anand Bakshi',
        duration: '4:25',
        durationSec: 265,
        mood: 'Playful, Charming & Hopeful'
      },
      vfx: 'rose-petals',
      themeClass: 'theme-mulaqat',
      palette: {
        primary: '#fb7185',
        secondary: '#f43f5e',
        accent: '#ffe4e6',
        bgGlow1: 'rgba(251, 113, 133, 0.28)',
        bgGlow2: 'rgba(244, 63, 94, 0.15)',
        orbColor: '#fda4af'
      },
      melodyMotif: [
        { note: 'D4', dur: 0.35, chord: ['D3', 'F#3', 'A3'] },
        { note: 'F#4', dur: 0.35 },
        { note: 'A4', dur: 0.35 },
        { note: 'B4', dur: 0.6 },
        { note: 'A4', dur: 0.35 },
        { note: 'F#4', dur: 0.35 },
        { note: 'E4', dur: 0.5 },
        { note: 'D4', dur: 0.7, chord: ['G3', 'B3', 'D4'] },
        { note: 'F#4', dur: 0.35 },
        { note: 'A4', dur: 0.35 },
        { note: 'D5', dur: 0.8 },
        { note: 'C#5', dur: 0.35 },
        { note: 'B4', dur: 0.5 },
        { note: 'A4', dur: 0.7, chord: ['A3', 'C#4', 'E4'] },
        { note: 'G4', dur: 0.35 },
        { note: 'F#4', dur: 0.5 },
        { note: 'E4', dur: 0.5 },
        { note: 'D4', dur: 1.2, chord: ['D3', 'F#3', 'A3'] }
      ]
    },
    {
      id: 2,
      slug: 'nazdeeki',
      stageNumber: '02',
      stageIndexLabel: '2 of 6',
      title: 'Nazdeeki',
      devanagariTitle: 'नज़दीकी',
      meaning: 'The Blossoming Closeness',
      quoteHindi: 'ये शाम मस्तानी मदहोश किए जाए,\nमुझे डोर कोई खींचे तेरी ओर लिए जाए...',
      quoteUrdu: 'یہ شام مستانی مدہوش کیے جائے\nمجھے ڈور کوئی کھینچے تیری اور لیے جائے',
      quoteEnglish: 'The dusk whispers secrets of golden warmth, drawing our shadows together. In the quiet symphony of evening breezes, every unspoken sigh brings our worlds closer.',
      audioSources: [
        'audio/2-nazdeeki.mp3',
        'audio/nazdeeki.mp3',
        'audio/Ye Shaam Mastani.mp3'
      ],
      song: {
        title: 'Ye Shaam Mastani',
        film: 'Kati Patang (1971)',
        singer: 'Kishore Kumar',
        musicDirector: 'R. D. Burman',
        lyricist: 'Anand Bakshi',
        duration: '4:35',
        durationSec: 275,
        mood: 'Intoxicating, Romantic & Breezy'
      },
      vfx: 'golden-fireflies',
      themeClass: 'theme-nazdeeki',
      palette: {
        primary: '#f59e0b',
        secondary: '#d97706',
        accent: '#fef3c7',
        bgGlow1: 'rgba(245, 158, 11, 0.25)',
        bgGlow2: 'rgba(217, 119, 6, 0.18)',
        orbColor: '#fbbf24'
      },
      melodyMotif: [
        { note: 'G4', dur: 0.45, chord: ['G3', 'B3', 'D4'] },
        { note: 'B4', dur: 0.45 },
        { note: 'D5', dur: 0.6 },
        { note: 'C5', dur: 0.35 },
        { note: 'B4', dur: 0.35 },
        { note: 'A4', dur: 0.6 },
        { note: 'G4', dur: 0.45, chord: ['C3', 'E3', 'G3'] },
        { note: 'A4', dur: 0.45 },
        { note: 'B4', dur: 0.7 },
        { note: 'D5', dur: 0.4 },
        { note: 'B4', dur: 0.5 },
        { note: 'G4', dur: 0.9, chord: ['D3', 'F#3', 'A3'] },
        { note: 'A4', dur: 0.4 },
        { note: 'B4', dur: 0.4 },
        { note: 'A4', dur: 0.6 },
        { note: 'G4', dur: 1.2, chord: ['G3', 'B3', 'D4'] }
      ]
    },
    {
      id: 3,
      slug: 'mohabbat',
      stageNumber: '03',
      stageIndexLabel: '3 of 6',
      title: 'Mohabbat',
      devanagariTitle: 'मोहब्बत',
      meaning: 'The Infinite Devotion',
      quoteHindi: 'पल पल दिल के पास तुम रहती हो,\nजीवन मीठी प्यास ये कहती हो...',
      quoteUrdu: 'پل پل دل کے پاس تم رہتی ہو\nجیون میٹھی پیاس یہ کہتی ہو',
      quoteEnglish: 'You reside in every silent beat of my heart—a sweet, immortal thirst. Love is no longer just a feeling, but the sacred warmth that keeps my soul alive.',
      audioSources: [
        'audio/3-mohabbat.mp3',
        'audio/mohabbat.mp3',
        'audio/Pal Pal Dil Ke Paas.mp3'
      ],
      song: {
        title: 'Pal Pal Dil Ke Paas',
        film: 'Blackmail (1973)',
        singer: 'Kishore Kumar',
        musicDirector: 'Kalyanji-Anandji',
        lyricist: 'Rajendra Krishan',
        duration: '5:28',
        durationSec: 328,
        mood: 'Deeply Soulful, Tender & Passionate'
      },
      vfx: 'heartbeat-constellation',
      themeClass: 'theme-mohabbat',
      palette: {
        primary: '#e11d48',
        secondary: '#be123c',
        accent: '#ffe4e6',
        bgGlow1: 'rgba(225, 29, 72, 0.32)',
        bgGlow2: 'rgba(159, 18, 57, 0.22)',
        orbColor: '#f43f5e'
      },
      melodyMotif: [
        { note: 'E4', dur: 0.45, chord: ['E3', 'G3', 'B3'] },
        { note: 'G4', dur: 0.45 },
        { note: 'B4', dur: 0.7 },
        { note: 'A4', dur: 0.35 },
        { note: 'G4', dur: 0.35 },
        { note: 'F#4', dur: 0.6 },
        { note: 'E4', dur: 0.8, chord: ['A3', 'C4', 'E4'] },
        { note: 'G4', dur: 0.4 },
        { note: 'B4', dur: 0.5 },
        { note: 'D5', dur: 0.7 },
        { note: 'C5', dur: 0.4 },
        { note: 'B4', dur: 0.9, chord: ['B3', 'D#4', 'F#4'] },
        { note: 'A4', dur: 0.4 },
        { note: 'G4', dur: 0.5 },
        { note: 'F#4', dur: 0.5 },
        { note: 'E4', dur: 1.3, chord: ['E3', 'G3', 'B3'] }
      ]
    },
    {
      id: 4,
      slug: 'bichadna',
      stageNumber: '04',
      stageIndexLabel: '4 of 6',
      title: 'Bichadna',
      devanagariTitle: 'बिछड़ना',
      meaning: 'The Melancholy of Longing & Distance',
      quoteHindi: 'लग जा गले कि फिर ये हसीं रात हो न हो,\nशायद फिर इस जनम में मुलाक़ात हो न हो...',
      quoteUrdu: 'لگ جا گلے کہ پھر یہ حسیں رات ہو نہ ہو\nشاید پھر اس جنم میں ملاقات ہو نہ ہو',
      quoteEnglish: 'Hold me close in the tender shadows of the night, for moments slip away like raindrops. Even in separation, true love burns with eternal, bittersweet tenderness.',
      audioSources: [
        'audio/4-bichadna.mp3',
        'audio/bichadna.mp3',
        'audio/Lag Ja Gale.mp3'
      ],
      song: {
        title: 'Lag Ja Gale',
        film: 'Woh Kaun Thi? (1964)',
        singer: 'Lata Mangeshkar',
        musicDirector: 'Madan Mohan',
        lyricist: 'Raja Mehdi Ali Khan',
        duration: '4:18',
        durationSec: 258,
        mood: 'Ethereal, Nostalgic & Melancholic'
      },
      vfx: 'rain-ripples',
      themeClass: 'theme-bichadna',
      palette: {
        primary: '#38bdf8',
        secondary: '#0284c7',
        accent: '#e0f2fe',
        bgGlow1: 'rgba(56, 189, 248, 0.22)',
        bgGlow2: 'rgba(30, 58, 138, 0.35)',
        orbColor: '#38bdf8'
      },
      melodyMotif: [
        { note: 'F#4', dur: 0.55, chord: ['F#3', 'A3', 'C#4'] },
        { note: 'A4', dur: 0.55 },
        { note: 'C#5', dur: 0.8 },
        { note: 'B4', dur: 0.45 },
        { note: 'A4', dur: 0.4 },
        { note: 'G#4', dur: 0.7 },
        { note: 'F#4', dur: 0.9, chord: ['B3', 'D4', 'F#4'] },
        { note: 'E4', dur: 0.4 },
        { note: 'F#4', dur: 0.55 },
        { note: 'G#4', dur: 0.45 },
        { note: 'A4', dur: 0.7 },
        { note: 'G#4', dur: 0.4 },
        { note: 'F#4', dur: 0.6, chord: ['C#3', 'E#3', 'G#3'] },
        { note: 'E4', dur: 0.4 },
        { note: 'F#4', dur: 1.4, chord: ['F#3', 'A3', 'C#4'] }
      ]
    },
    {
      id: 5,
      slug: 'manzil',
      stageNumber: '05',
      stageIndexLabel: '5 of 6',
      title: 'Manzil',
      devanagariTitle: 'मंज़िल',
      meaning: 'The Union & Destined Sanctuary',
      quoteHindi: 'अभी ना जाओ छोड़कर कि दिल अभी भरा नहीं,\nअभी अभी तो आई हो, बहार बनके छाई हो...',
      quoteUrdu: 'ابھی نہ جاؤ چھوڑ کر کہ دل ابھی بھرا نہیں\nابھی ابھی تو آئی ہو، بہار بن کے چھائی ہو',
      quoteEnglish: 'Stay a little longer, for the soul has only just begun to bask in your presence. When two destined wandering spirits unite, time itself surrenders to peace.',
      audioSources: [
        'audio/5-manzil.mp3',
        'audio/manzil.mp3',
        'audio/Abhi Na Jao Chhod Kar.mp3'
      ],
      song: {
        title: 'Abhi Na Jao Chhod Kar',
        film: 'Hum Dono (1961)',
        singer: 'Mohd. Rafi & Asha Bhosle',
        musicDirector: 'Jaidev',
        lyricist: 'Sahir Ludhianvi',
        duration: '4:15',
        durationSec: 255,
        mood: 'Tender, Yearning & Eternal Warmth'
      },
      vfx: 'emerald-aurora',
      themeClass: 'theme-manzil',
      palette: {
        primary: '#10b981',
        secondary: '#059669',
        accent: '#d1fae5',
        bgGlow1: 'rgba(168, 85, 247, 0.28)',
        bgGlow2: 'rgba(16, 185, 129, 0.25)',
        orbColor: '#34d399'
      },
      melodyMotif: [
        { note: 'D4', dur: 0.45, chord: ['D3', 'F#3', 'A3'] },
        { note: 'F#4', dur: 0.45 },
        { note: 'A4', dur: 0.6 },
        { note: 'B4', dur: 0.4 },
        { note: 'A4', dur: 0.4 },
        { note: 'G4', dur: 0.5 },
        { note: 'F#4', dur: 0.7, chord: ['G3', 'B3', 'D4'] },
        { note: 'E4', dur: 0.4 },
        { note: 'D4', dur: 0.55 },
        { note: 'G4', dur: 0.5 },
        { note: 'F#4', dur: 0.5 },
        { note: 'E4', dur: 0.7, chord: ['A3', 'C#4', 'E4'] },
        { note: 'D4', dur: 1.2, chord: ['D3', 'F#3', 'A3'] }
      ]
    },
    {
      id: 6,
      slug: 'jeevan-saathi',
      stageNumber: '06',
      stageIndexLabel: '6 of 6',
      title: 'Jeevan Saathi',
      devanagariTitle: 'जीवन साथी',
      meaning: 'The Eternal Companion & Cosmic Symphony',
      quoteHindi: 'प्यार दीवाना होता है मस्ताना होता है,\nहर ख़ुशी से हर ग़म से बेगाना होता है...\nसातों जनम का ये अटूट बंधन है सनम,\nतू हमसफ़र है मेरा, तू ही मेरा जहाँ है।',
      quoteUrdu: 'پیار دیوانہ ہوتا ہے مستانہ ہوتا ہے\nہر خوشی سے ہر غم سے بیگانہ ہوتا ہے',
      quoteEnglish: 'Love is an intoxicating, transcendental devotion, soaring beyond all transient joys and sorrows. Two wandering souls bound across eternity, walking hand in hand through every lifetime.',
      audioSources: [
        'audio/6-jeevansaathi.mp3',
        'audio/jeevansaathi.mp3',
        'audio/Pyaar Deewana Hota Hai.mp3'
      ],
      song: {
        title: 'Pyaar Deewana Hota Hai',
        film: 'Kati Patang (1971)',
        singer: 'Kishore Kumar',
        musicDirector: 'R. D. Burman',
        lyricist: 'Anand Bakshi',
        duration: '4:45',
        durationSec: 285,
        mood: 'Celebratory, Triumphant & Infinite'
      },
      vfx: 'celestial-gold',
      themeClass: 'theme-jeevan-saathi',
      palette: {
        primary: '#a855f7',
        secondary: '#9333ea',
        accent: '#f3e8ff',
        bgGlow1: 'rgba(168, 85, 247, 0.28)',
        bgGlow2: 'rgba(88, 28, 135, 0.35)',
        orbColor: '#c084fc'
      },
      melodyMotif: [
        { note: 'C4', dur: 0.45, chord: ['C3', 'E3', 'G3'] },
        { note: 'E4', dur: 0.45 },
        { note: 'G4', dur: 0.7 },
        { note: 'A4', dur: 0.45 },
        { note: 'G4', dur: 0.4 },
        { note: 'F4', dur: 0.5 },
        { note: 'E4', dur: 0.7, chord: ['F3', 'A3', 'C4'] },
        { note: 'D4', dur: 0.45 },
        { note: 'C4', dur: 0.75 },
        { note: 'E4', dur: 0.4 },
        { note: 'G4', dur: 0.6 },
        { note: 'C5', dur: 0.9, chord: ['G3', 'B3', 'D4'] },
        { note: 'B4', dur: 0.4 },
        { note: 'A4', dur: 0.5 },
        { note: 'G4', dur: 0.6 },
        { note: 'C4', dur: 1.3, chord: ['C3', 'E3', 'G3'] }
      ]
    }
  ];

  // ============================================================================
  // 2. STREAMLINED AUDIO ENGINE
  // ============================================================================

  const NOTE_FREQS = {
    'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'A3': 220.00, 'B3': 246.94,
    'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99,
    'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
    'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99,
    'G5': 783.99, 'G#5': 830.61, 'A5': 880.00, 'B5': 987.77, 'C6': 1046.50
  };

  class RomanticAudioEngine {
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
      this.mode = 'synth';

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

      if (stage.audioSources && stage.audioSources.length > 0) {
        this.mode = 'audio-file';
        this.audioEl.src = stage.audioSources[0];
        this.audioEl.currentTime = this.currentTime;
        this.audioEl.play().catch(() => {
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

  // ============================================================================
  // 3. 60FPS ELEVATED CANVAS PARTICLE VFX
  // ============================================================================

  class CanvasManager {
    constructor(canvasElement) {
      this.canvas = canvasElement;
      this.ctx = canvasElement.getContext('2d');
      this.currentEffect = 'celestial-hero';
      this.particles = [];
      this.ripples = [];
      this.trailSparks = [];
      this.floatingHearts = [];
      this.auroraTime = 0;
      this.animFrameId = null;
      this.mouse = { x: -1000, y: -1000, active: false };

      this.resize = this.resize.bind(this);
      this.animate = this.animate.bind(this);

      window.addEventListener('resize', this.resize);
      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        this.mouse.active = true;
        this.addTrailSpark(e.clientX, e.clientY);
      });
      window.addEventListener('mouseleave', () => {
        this.mouse.active = false;
      });

      window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          const touch = e.touches[0];
          this.mouse.x = touch.clientX;
          this.mouse.y = touch.clientY;
          this.mouse.active = true;
          this.addTrailSpark(touch.clientX, touch.clientY);
        }
      }, { passive: true });

      window.addEventListener('touchend', () => {
        this.mouse.active = false;
      });

      window.addEventListener('click', (e) => {
        this.triggerClickBurst(e.clientX, e.clientY);
      });

      this.resize();
      this.initEffect(this.currentEffect);
      this.start();
    }

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      this.ctx.scale(dpr, dpr);
      this.initEffect(this.currentEffect);
    }

    setEffect(effectName) {
      if (this.currentEffect === effectName) return;
      this.currentEffect = effectName;
      this.initEffect(effectName);
    }

    addTrailSpark(x, y) {
      const count = Math.random() > 0.4 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        this.trailSparks.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.4,
          radius: Math.random() * 2.2 + 1,
          alpha: 0.9,
          decay: Math.random() * 0.035 + 0.02,
          color: this.getSparkColor()
        });
      }
    }

    triggerClickBurst(x, y) {
      for (let i = 0; i < 14; i++) {
        const angle = (i / 14) * Math.PI * 2 + Math.random() * 0.3;
        const speed = Math.random() * 3 + 2;
        this.trailSparks.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 2.8 + 1.2,
          alpha: 1,
          decay: Math.random() * 0.03 + 0.015,
          color: this.getSparkColor()
        });
      }
    }

    getSparkColor() {
      switch (this.currentEffect) {
        case 'rose-petals': return '#fda4af';
        case 'golden-fireflies': return '#fbbf24';
        case 'heartbeat-constellation': return '#f43f5e';
        case 'rain-ripples': return '#7dd3fc';
        case 'emerald-aurora': return '#34d399';
        case 'celestial-gold': return '#c084fc';
        default: return '#fb7185';
      }
    }

    initEffect(effect) {
      this.particles = [];
      this.ripples = [];
      this.floatingHearts = [];

      switch (effect) {
        case 'celestial-hero': this.initCelestialHero(); break;
        case 'rose-petals': this.initRosePetals(); break;
        case 'golden-fireflies': this.initFireflies(); break;
        case 'heartbeat-constellation': this.initHeartbeat(); break;
        case 'rain-ripples': this.initRain(); break;
        case 'emerald-aurora': this.initEmeraldAurora(); break;
        case 'celestial-gold': this.initCelestialGold(); break;
        default: this.initCelestialHero();
      }
    }

    initCelestialHero() {
      const count = Math.min(Math.floor((this.width * this.height) / 9000), 120);
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          radius: Math.random() * 2.2 + 0.8,
          baseAlpha: Math.random() * 0.7 + 0.25,
          alpha: 0,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          color: Math.random() > 0.4 ? '#fb7185' : '#c084fc'
        });
      }
    }

    renderCelestialHero() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = this.width;
        if (p.x > this.width) p.x = 0;
        if (p.y < 0) p.y = this.height;
        if (p.y > this.height) p.y = 0;

        if (this.mouse.active) {
          const dx = p.x - this.mouse.x;
          const dy = p.y - this.mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (1 - dist / 120) * 1.5;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        p.alpha = p.baseAlpha + Math.sin(Date.now() * p.twinkleSpeed) * 0.35;
        p.alpha = Math.max(0.1, Math.min(1, p.alpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#f43f5e';
            ctx.globalAlpha = (1 - dist / 85) * 0.18;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    initRosePetals() {
      const count = Math.min(Math.floor(this.width / 26), 55);
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * (this.height + 100) - 100,
          size: Math.random() * 18 + 10,
          speedY: Math.random() * 1.6 + 0.9,
          speedX: Math.random() * 1.0 - 0.5,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.04,
          flip: Math.random() * Math.PI * 2,
          flipSpeed: Math.random() * 0.035 + 0.015,
          color1: '#fda4af',
          color2: '#f43f5e',
          color3: '#be123c',
          opacity: Math.random() * 0.45 + 0.55
        });
      }

      for (let i = 0; i < 30; i++) {
        this.particles.push({
          isPollen: true,
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          radius: Math.random() * 1.5 + 0.6,
          alpha: Math.random() * 0.6 + 0.2,
          vy: -Math.random() * 0.5 - 0.2,
          vx: (Math.random() - 0.5) * 0.4
        });
      }
    }

    renderRosePetals() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      for (let p of this.particles) {
        if (p.isPollen) {
          p.y += p.vy;
          p.x += p.vx;
          if (p.y < 0) { p.y = this.height; p.x = Math.random() * this.width; }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#fef08a';
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 6;
          ctx.shadowColor = '#fef08a';
          ctx.fill();
          ctx.shadowBlur = 0;
          continue;
        }

        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.flip) * 0.8;
        p.angle += p.angleSpeed;
        p.flip += p.flipSpeed;

        if (this.mouse.active) {
          const dx = p.x - this.mouse.x;
          const dy = p.y - this.mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && dist > 0) {
            const force = (1 - dist / 150) * 3;
            p.x += (dy / dist) * force;
            p.y -= (dx / dist) * force;
          }
        }

        if (p.y > this.height + 40) {
          p.y = -40;
          p.x = Math.random() * this.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.scale(Math.cos(p.flip), 1);

        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.85);
        ctx.bezierCurveTo(p.size * 0.75, -p.size * 0.75, p.size * 0.95, p.size * 0.35, 0, p.size * 0.95);
        ctx.bezierCurveTo(-p.size * 0.95, p.size * 0.35, -p.size * 0.75, -p.size * 0.75, 0, -p.size * 0.85);

        const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
        grad.addColorStop(0, p.color1);
        grad.addColorStop(0.5, p.color2);
        grad.addColorStop(1, p.color3);

        ctx.fillStyle = grad;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(244, 63, 94, 0.45)';
        ctx.fill();
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    }

    initFireflies() {
      const count = Math.min(Math.floor((this.width * this.height) / 10000), 80);
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          radius: Math.random() * 3.5 + 1.5,
          baseGlow: Math.random() * 0.6 + 0.3,
          glowPulse: Math.random() * 0.04 + 0.02,
          phase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          hue: Math.random() > 0.35 ? 42 : 28,
          isBokeh: Math.random() > 0.7
        });
      }
    }

    renderFireflies() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      for (let f of this.particles) {
        f.phase += f.glowPulse;
        f.x += f.vx + Math.cos(f.phase * 0.8) * 0.5;
        f.y += f.vy + Math.sin(f.phase * 0.8) * 0.5;

        if (f.x < 0) f.x = this.width;
        if (f.x > this.width) f.x = 0;
        if (f.y < 0) f.y = this.height;
        if (f.y > this.height) f.y = 0;

        if (this.mouse.active) {
          const dx = f.x - this.mouse.x;
          const dy = f.y - this.mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130 && dist > 0) {
            const force = (1 - dist / 130) * 2;
            f.x += (dx / dist) * force;
            f.y += (dy / dist) * force;
          }
        }

        const alpha = Math.max(0.12, f.baseGlow + Math.sin(f.phase) * 0.45);

        if (f.isBokeh) {
          ctx.beginPath();
          ctx.arc(f.x, f.y, f.radius * 4, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${f.hue}, 100%, 65%, ${alpha * 0.18})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${f.hue}, 95%, 75%)`;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsl(${f.hue}, 100%, 55%)`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${f.hue}, 100%, 60%, ${alpha * 0.3})`;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }

    initHeartbeat() {
      const count = Math.min(Math.floor((this.width * this.height) / 8000), 95);
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          radius: Math.random() * 2.8 + 1.2,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          color: Math.random() > 0.4 ? '#f43f5e' : '#e11d48'
        });
      }

      for (let i = 0; i < 15; i++) {
        this.floatingHearts.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          size: Math.random() * 10 + 8,
          speedY: -Math.random() * 0.7 - 0.3,
          alpha: Math.random() * 0.5 + 0.3,
          wobble: Math.random() * Math.PI * 2
        });
      }
    }

    renderHeartbeat() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      const t = (Date.now() % 1350) / 1350;
      let pulseScale = 1;
      if (t < 0.16) {
        pulseScale = 1 + Math.sin((t / 0.16) * Math.PI) * 0.35;
      } else if (t >= 0.24 && t < 0.42) {
        pulseScale = 1 + Math.sin(((t - 0.24) / 0.18) * Math.PI) * 0.22;
      }

      const centerX = this.width / 2;
      const centerY = this.height / 2;

      ctx.beginPath();
      ctx.arc(centerX, centerY, 90 * pulseScale, 0, Math.PI * 2);
      const radGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 220 * pulseScale);
      radGrad.addColorStop(0, 'rgba(225, 29, 72, 0.28)');
      radGrad.addColorStop(0.5, 'rgba(244, 63, 94, 0.12)');
      radGrad.addColorStop(1, 'rgba(225, 29, 72, 0)');
      ctx.fillStyle = radGrad;
      ctx.fill();

      for (let h of this.floatingHearts) {
        h.y += h.speedY;
        h.wobble += 0.03;
        h.x += Math.sin(h.wobble) * 0.5;

        if (h.y < -30) {
          h.y = this.height + 30;
          h.x = Math.random() * this.width;
        }

        ctx.save();
        ctx.translate(h.x, h.y);
        ctx.globalAlpha = h.alpha;
        ctx.fillStyle = '#f43f5e';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#e11d48';

        const s = h.size * 0.5;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s, -s * 0.5, -s * 1.5, s * 0.5, 0, s * 1.5);
        ctx.bezierCurveTo(s * 1.5, s * 0.5, s, -s * 0.5, 0, s * 0.3);
        ctx.fill();
        ctx.restore();
      }

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = this.width;
        if (p.x > this.width) p.x = 0;
        if (p.y < 0) p.y = this.height;
        if (p.y > this.height) p.y = 0;

        const dxCenter = p.x - centerX;
        const dyCenter = p.y - centerY;
        const distCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
        const shift = (pulseScale - 1) * Math.max(0, 1 - distCenter / 650) * 30;

        const renderX = p.x + (dxCenter / (distCenter || 1)) * shift;
        const renderY = p.y + (dyCenter / (distCenter || 1)) * shift;

        ctx.beginPath();
        ctx.arc(renderX, renderY, p.radius * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.85;
        ctx.shadowBlur = 14 * pulseScale;
        ctx.shadowColor = '#e11d48';
        ctx.fill();

        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dX = p.x - p2.x;
          const dY = p.y - p2.y;
          const d = Math.sqrt(dX * dX + dY * dY);
          if (d < 115) {
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#f43f5e';
            ctx.globalAlpha = (1 - d / 115) * 0.25 * pulseScale;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }

    initRain() {
      const dropCount = Math.min(Math.floor(this.width / 12), 110);
      for (let i = 0; i < dropCount; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          length: Math.random() * 26 + 16,
          speed: Math.random() * 10 + 12,
          alpha: Math.random() * 0.45 + 0.25,
          width: Math.random() * 1.6 + 0.8,
          drift: Math.random() * 0.8 + 0.4
        });
      }
    }

    renderRain() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      for (let drop of this.particles) {
        drop.y += drop.speed;
        drop.x += drop.drift;

        if (drop.y > this.height) {
          drop.y = -35;
          drop.x = Math.random() * this.width;

          if (Math.random() > 0.5) {
            this.ripples.push({
              x: drop.x,
              y: this.height - Math.random() * 50,
              radius: 1,
              maxRadius: Math.random() * 26 + 12,
              alpha: 0.75
            });
          }
        }

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + drop.drift * 2, drop.y + drop.length);
        ctx.strokeStyle = '#38bdf8';
        ctx.globalAlpha = drop.alpha;
        ctx.lineWidth = drop.width;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      for (let i = this.ripples.length - 1; i >= 0; i--) {
        const r = this.ripples[i];
        r.radius += 0.75;
        r.alpha -= 0.018;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          this.ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.ellipse(r.x, r.y, r.radius * 1.8, r.radius * 0.65, 0, 0, Math.PI * 2);
        ctx.strokeStyle = '#7dd3fc';
        ctx.globalAlpha = r.alpha * 0.7;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
    }

    initEmeraldAurora() {
      this.auroraTime = 0;
      const count = 55;
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          radius: Math.random() * 2.4 + 0.9,
          alpha: Math.random() * 0.7 + 0.3,
          vy: -Math.random() * 0.7 - 0.25,
          color: Math.random() > 0.4 ? '#34d399' : '#a7f3d0'
        });
      }
    }

    renderEmeraldAurora() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);
      this.auroraTime += 0.014;

      const layers = [
        { color: 'rgba(16, 185, 129, 0.22)', speed: 1.0, freq: 0.0028, yOffset: this.height * 0.26 },
        { color: 'rgba(52, 211, 153, 0.16)', speed: 0.8, freq: 0.0038, yOffset: this.height * 0.36 },
        { color: 'rgba(5, 150, 105, 0.26)', speed: 1.25, freq: 0.0022, yOffset: this.height * 0.46 }
      ];

      for (let layer of layers) {
        ctx.beginPath();
        ctx.moveTo(0, this.height);
        for (let x = 0; x <= this.width; x += 12) {
          const y =
            layer.yOffset +
            Math.sin(x * layer.freq + this.auroraTime * layer.speed) * 65 +
            Math.cos(x * 0.002 + this.auroraTime * 0.6) * 40;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(this.width, this.height);
        ctx.closePath();
        ctx.fillStyle = layer.color;
        ctx.shadowBlur = 35;
        ctx.shadowColor = 'rgba(52, 211, 153, 0.55)';
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      for (let p of this.particles) {
        p.y += p.vy;
        if (p.y < 0) {
          p.y = this.height;
          p.x = Math.random() * this.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }

    initCelestialGold() {
      this.auroraTime = 0;
      const count = 70;
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          radius: Math.random() * 2.8 + 1.2,
          angle: Math.random() * Math.PI * 2,
          dist: Math.random() * 260 + 40,
          speed: (Math.random() - 0.5) * 0.018,
          alpha: Math.random() * 0.75 + 0.25,
          color: Math.random() > 0.4 ? '#fbbf24' : '#c084fc'
        });
      }
    }

    renderCelestialGold() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);
      this.auroraTime += 0.009;

      const cx = this.width / 2;
      const cy = this.height / 2;

      ctx.save();
      ctx.translate(cx, cy);

      for (let ring = 1; ring <= 3; ring++) {
        ctx.save();
        ctx.rotate(this.auroraTime * (ring % 2 === 0 ? 0.35 : -0.25) + ring);
        ctx.beginPath();
        ctx.ellipse(0, 0, 190 + ring * 60, 80 + ring * 28, (ring * Math.PI) / 4, 0, Math.PI * 2);
        ctx.strokeStyle = ring === 2 ? 'rgba(251, 191, 36, 0.4)' : 'rgba(192, 132, 252, 0.3)';
        ctx.lineWidth = 1.4;
        ctx.shadowBlur = 12;
        ctx.shadowColor = ring === 2 ? '#fbbf24' : '#c084fc';
        ctx.stroke();
        ctx.restore();
      }

      ctx.restore();

      for (let p of this.particles) {
        p.angle += p.speed;
        const x = cx + Math.cos(p.angle) * p.dist;
        const y = cy + Math.sin(p.angle) * (p.dist * 0.68);

        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }

    renderTrailSparks() {
      const ctx = this.ctx;
      for (let i = this.trailSparks.length - 1; i >= 0; i--) {
        const s = this.trailSparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          this.trailSparks.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = s.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }

    animate() {
      switch (this.currentEffect) {
        case 'celestial-hero': this.renderCelestialHero(); break;
        case 'rose-petals': this.renderRosePetals(); break;
        case 'golden-fireflies': this.renderFireflies(); break;
        case 'heartbeat-constellation': this.renderHeartbeat(); break;
        case 'rain-ripples': this.renderRain(); break;
        case 'emerald-aurora': this.renderEmeraldAurora(); break;
        case 'celestial-gold': this.renderCelestialGold(); break;
        default: this.renderCelestialHero();
      }

      this.renderTrailSparks();
      this.animFrameId = requestAnimationFrame(this.animate);
    }

    start() {
      if (!this.animFrameId) {
        this.animate();
      }
    }

    stop() {
      if (this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }
    }
  }

  // ============================================================================
  // 4. UI COMPONENTS (HERO SECTION & STAGE ALTAR & TAB NAVIGATION)
  // ============================================================================

  function renderHeroSection(stageData, onStartJourney) {
    const container = document.createElement('div');
    container.className = 'hero-container';
    container.id = 'hero-section';

    const stagePortalsHTML = STAGES_DATA.filter(s => !s.isHero).map(stage => `
      <button class="hero-stage-portal" data-id="${stage.id}" aria-label="Jump to Stage ${stage.stageNumber}: ${stage.title}">
        <div class="portal-badge-num">STAGE ${stage.stageNumber}</div>
        <div class="portal-title">${stage.title}</div>
        <div class="portal-devanagari">${stage.devanagariTitle}</div>
        <div class="portal-song-hint">♫ ${stage.song.title}</div>
      </button>
    `).join('');

    container.innerHTML = `
      <div class="hero-badge">
        <span class="hero-badge-dot"></span>
        <span>A Symphonic Romance Journey</span>
      </div>

      <div class="hero-title-wrapper">
        <span class="hero-devanagari-bg">${stageData.devanagariTitle}</span>
        <h1 class="hero-main-title">${stageData.title}</h1>
      </div>

      <p class="hero-subtitle">
        "${stageData.subtitle}"
      </p>

      <p class="hero-tagline">
        ${stageData.tagline}
      </p>

      <div class="hero-actions">
        <button id="hero-start-cta" class="btn-primary-glow" aria-label="Begin Sacred Journey">
          <span>Begin Sacred Journey</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      <div class="hero-stages-grid-section">
        <div class="hero-grid-header">
          <span class="grid-header-line"></span>
          <span class="grid-header-text">✦ Explore the 6 Sacred Stages ✦</span>
          <span class="grid-header-line"></span>
        </div>
        <div class="hero-portals-grid">
          ${stagePortalsHTML}
        </div>
      </div>
    `;

    const startCta = container.querySelector('#hero-start-cta');
    if (startCta) startCta.addEventListener('click', () => onStartJourney && onStartJourney(1));

    const portals = container.querySelectorAll('.hero-stage-portal');
    portals.forEach(portal => {
      portal.addEventListener('click', () => {
        const sId = parseInt(portal.getAttribute('data-id'), 10);
        if (onStartJourney && !isNaN(sId)) {
          onStartJourney(sId);
        }
      });
    });

    return container;
  }

  function renderStageCard(stageData, isPlaying, audioEngine, onTogglePlay) {
    const card = document.createElement('div');
    card.className = 'stage-altar-card';
    card.id = `stage-card-${stageData.id}`;

    const isCurrentPlaying = isPlaying;

    card.innerHTML = `
      <div class="altar-header">
        <div class="altar-header-left">
          <span class="altar-stage-badge">STAGE ${stageData.stageNumber} OF 06</span>
          <span class="altar-devanagari-watermark">${stageData.devanagariTitle}</span>
        </div>
        <div class="altar-meaning-pill">
          <span>✦ ${stageData.meaning}</span>
        </div>
      </div>

      <div class="altar-body-grid">
        <div class="altar-poetry-pane">
          <div class="altar-title-block">
            <h2 class="altar-stage-title">${stageData.title}</h2>
            <span class="altar-devanagari-subtitle">${stageData.devanagariTitle}</span>
          </div>

          <div class="altar-shayari-card">
            <div class="shayari-top-row">
              <span class="shayari-quote-glyph">“</span>
              <button class="btn-copy-shayari" id="btn-copy-shayari" title="Copy Romantic Shayari" aria-label="Copy Shayari">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span class="copy-text">Copy Shayari</span>
              </button>
            </div>
            <p class="shayari-hindi-content">${stageData.quoteHindi}</p>
            <p class="shayari-english-content">${stageData.quoteEnglish}</p>
          </div>
        </div>

        <div class="altar-music-deck">
          <div class="deck-ribbon">
            <span class="deck-mood-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
              ${stageData.song.mood}
            </span>
          </div>

          <div class="deck-vinyl-showcase">
            <div class="vinyl-record ${isCurrentPlaying ? 'spinning' : ''}" id="deck-vinyl-record">
              <div class="vinyl-center-disc">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
              <div class="vinyl-lines"></div>
            </div>

            <div class="vinyl-notes-overlay ${isCurrentPlaying ? 'active' : ''}">
              <span class="music-note n1">♪</span>
              <span class="music-note n2">♫</span>
              <span class="music-note n3">✦</span>
            </div>
          </div>

          <div class="deck-song-info">
            <h3 class="deck-song-title">${stageData.song.title}</h3>
            <p class="deck-singer-name">Vocals: ${stageData.song.singer}</p>
            <div class="deck-credits-row">
              <span>Film: ${stageData.song.film}</span>
              <span>•</span>
              <span>Music: ${stageData.song.musicDirector}</span>
            </div>
          </div>

          <div class="deck-player-controls">
            <div class="deck-scrubber-row">
              <span class="deck-time-display" id="deck-curr-time">0:00</span>
              <div class="deck-scrubber-bar" id="deck-scrubber-bar">
                <div class="deck-scrubber-fill" id="deck-scrubber-fill"></div>
              </div>
              <span class="deck-time-display" id="deck-dur-time">${stageData.song.duration}</span>
            </div>

            <div class="deck-buttons-row">
              <button id="deck-play-btn" class="btn-deck-play" aria-label="${isCurrentPlaying ? 'Pause Melody' : 'Play Melody'}">
                ${
                  isCurrentPlaying
                    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                      <span>Pause</span>`
                    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      <span>Play Melody</span>`
                }
              </button>

              <div class="deck-volume-box">
                <button id="deck-mute-btn" class="btn-deck-mute" title="Mute/Unmute" aria-label="Mute">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                </button>
                <input type="range" class="deck-volume-slider" id="deck-vol-slider" min="0" max="100" value="80" aria-label="Volume" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const playBtn = card.querySelector('#deck-play-btn');
    if (playBtn) playBtn.addEventListener('click', () => onTogglePlay && onTogglePlay(stageData.id));

    const scrubber = card.querySelector('#deck-scrubber-bar');
    if (scrubber && audioEngine) {
      scrubber.addEventListener('click', (e) => {
        const rect = scrubber.getBoundingClientRect();
        const percent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        audioEngine.seek(percent);
      });
    }

    const volSlider = card.querySelector('#deck-vol-slider');
    const muteBtn = card.querySelector('#deck-mute-btn');

    if (volSlider && audioEngine) {
      volSlider.addEventListener('input', (e) => {
        audioEngine.setVolume(e.target.value / 100);
      });
    }

    if (muteBtn && audioEngine) {
      muteBtn.addEventListener('click', () => {
        audioEngine.toggleMute();
      });
    }

    const copyBtn = card.querySelector('#btn-copy-shayari');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const textToCopy = `${stageData.quoteHindi}\n\n"${stageData.quoteEnglish}"\n— Fall in Love (Stage ${stageData.stageNumber}: ${stageData.title})`;
        try {
          await navigator.clipboard.writeText(textToCopy);
          const copyText = copyBtn.querySelector('.copy-text');
          if (copyText) copyText.textContent = 'Copied!';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            if (copyText) copyText.textContent = 'Copy Shayari';
            copyBtn.classList.remove('copied');
          }, 2000);
        } catch (err) {}
      });
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.008, 1.008, 1.008)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });

    return card;
  }

  const TAB_ICONS = {
    0: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    1: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`,
    2: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path></svg>`,
    3: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`,
    4: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>`,
    5: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    6: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="12" r="5"></circle><circle cx="16" cy="12" r="5"></circle></svg>`
  };

  class TabNavigation {
    constructor(dockContainer, stagesData, onSelectStage) {
      this.dockContainer = dockContainer;
      this.stagesData = stagesData;
      this.onSelectStage = onSelectStage;
      this.activeStageId = 0;
      this.render();
    }

    render() {
      this.dockContainer.innerHTML = '';
      this.stagesData.forEach((stage) => {
        const tabBtn = document.createElement('button');
        tabBtn.className = `dock-tab-item ${stage.id === this.activeStageId ? 'active' : ''}`;
        tabBtn.id = `tab-stage-${stage.id}`;
        tabBtn.setAttribute('data-id', stage.id);
        tabBtn.setAttribute('aria-label', `Navigate to ${stage.title}`);

        const iconSvg = TAB_ICONS[stage.id] || TAB_ICONS[0];
        const stageName = stage.isHero ? 'Home' : stage.title;
        const stageBadge = stage.isHero ? '00' : `0${stage.id}`;

        tabBtn.innerHTML = `
          ${iconSvg}
          <span class="dock-tab-number">${stageBadge}</span>
          <span class="dock-tab-text">${stageName}</span>
        `;

        tabBtn.addEventListener('click', () => {
          if (this.onSelectStage) this.onSelectStage(stage.id);
        });

        this.dockContainer.appendChild(tabBtn);
      });
    }

    setActiveStage(stageId) {
      this.activeStageId = stageId;
      const tabs = this.dockContainer.querySelectorAll('.dock-tab-item');
      tabs.forEach((tab) => {
        const id = parseInt(tab.getAttribute('data-id'), 10);
        if (id === stageId) {
          tab.classList.add('active');
          tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          tab.classList.remove('active');
        }
      });
    }
  }

  // ============================================================================
  // 5. MAIN APPLICATION ORCHESTRATOR
  // ============================================================================

  class FallInLoveApp {
    constructor() {
      this.currentStageId = 0;
      this.stages = STAGES_DATA;
      this.isAudioStarted = false;

      this.viewportCardWrapper = document.getElementById('stage-card-wrapper');
      this.progressBar = document.getElementById('stage-progress-bar');
      this.progressLabel = document.getElementById('stage-progress-label');
      this.navPrevBtn = document.getElementById('nav-prev-btn');
      this.navNextBtn = document.getElementById('nav-next-btn');
      this.brandHomeBtn = document.getElementById('brand-home-btn');
      this.audioMuteBtn = document.getElementById('audio-mute-toggle');
      this.soundIconOn = document.getElementById('sound-icon-on');
      this.soundIconOff = document.getElementById('sound-icon-off');
      this.toastEl = document.getElementById('toast-notification');

      this.vfx = new CanvasManager(document.getElementById('vfx-canvas'));
      this.audio = new RomanticAudioEngine();

      this.tabNav = new TabNavigation(
        document.getElementById('dock-inner'),
        this.stages,
        (stageId) => this.goToStage(stageId)
      );

      this.init();
    }

    init() {
      this.setupEventListeners();
      this.setupTouchGestures();
      this.setupKeyboardShortcuts();
      this.goToStage(0, false);
    }

    setupEventListeners() {
      if (this.brandHomeBtn) {
        this.brandHomeBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.goToStage(0);
        });
      }

      if (this.navPrevBtn) this.navPrevBtn.addEventListener('click', () => this.prevStage());
      if (this.navNextBtn) this.navNextBtn.addEventListener('click', () => this.nextStage());

      if (this.audioMuteBtn) {
        this.audioMuteBtn.addEventListener('click', () => {
          const isMuted = this.audio.toggleMute();
          if (this.soundIconOn && this.soundIconOff) {
            this.soundIconOn.classList.toggle('hidden', isMuted);
            this.soundIconOff.classList.toggle('hidden', !isMuted);
          }
          this.showToast(isMuted ? 'Sound Muted' : 'Sound Restored');
        });
      }

      this.audio.onTimeUpdate = (currSeconds, durSeconds) => {
        this.updateStageDeckTime(currSeconds, durSeconds);
      };

      this.audio.onStateChange = ({ isPlaying }) => {
        this.updateStageCardPlayState(isPlaying);
      };
    }

    setupKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          e.preventDefault();
          this.nextStage();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          e.preventDefault();
          this.prevStage();
        } else if (e.key === ' ' || e.code === 'Space') {
          e.preventDefault();
          if (this.currentStageId > 0) {
            this.audio.togglePlayPause(this.currentStageId);
          }
        } else if (e.key === 'm' || e.key === 'M') {
          if (this.audioMuteBtn) this.audioMuteBtn.click();
        }
      });
    }

    setupTouchGestures() {
      let touchStartX = 0;
      let touchStartY = 0;

      window.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      window.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
          if (diffX < 0) this.nextStage();
          else this.prevStage();
        }
      }, { passive: true });
    }

    goToStage(stageId, autoPlay = true) {
      if (stageId < 0 || stageId >= this.stages.length) return;

      if (this.currentStageId !== stageId && this.audio.isPlaying) {
        this.audio.stop();
      }

      this.currentStageId = stageId;
      const stage = this.stages[stageId];

      document.body.className = `${stage.themeClass}`;
      document.body.setAttribute('data-stage', stageId);

      this.vfx.setEffect(stage.vfx);

      if (this.progressBar) {
        const progressPercent = stageId === 0 ? 8 : (stageId / 6) * 100;
        this.progressBar.style.setProperty('--progress-width', `${progressPercent}%`);
      }
      if (this.progressLabel) {
        this.progressLabel.textContent = stageId === 0 ? 'Main Page: Prologue' : `Stage ${stageId} of 6`;
      }

      if (this.navPrevBtn) this.navPrevBtn.classList.toggle('hidden', stageId === 0);
      if (this.navNextBtn) this.navNextBtn.classList.toggle('hidden', stageId === this.stages.length - 1);

      this.renderStageView(stage);
      this.tabNav.setActiveStage(stageId);

      if (autoPlay && !stage.isHero && this.isAudioStarted) {
        this.audio.playStage(stage.id);
      }

      if (stageId > 0) {
        this.isAudioStarted = true;
      }
    }

    renderStageView(stage) {
      this.viewportCardWrapper.innerHTML = '';

      if (stage.isHero) {
        const heroEl = renderHeroSection(stage, (targetStage) => {
          this.goToStage(targetStage, true);
        });
        this.viewportCardWrapper.appendChild(heroEl);
      } else {
        const isPlaying = this.audio.isPlaying && this.audio.currentStageId === stage.id;
        const stageCardEl = renderStageCard(
          stage,
          isPlaying,
          this.audio,
          (sId) => this.audio.togglePlayPause(sId)
        );
        this.viewportCardWrapper.appendChild(stageCardEl);
      }
    }

    updateStageCardPlayState(isPlaying) {
      const playBtn = document.getElementById('deck-play-btn');
      const vinylRecord = document.getElementById('deck-vinyl-record');
      const notesOverlay = document.querySelector('.vinyl-notes-overlay');

      if (vinylRecord) vinylRecord.classList.toggle('spinning', isPlaying);
      if (notesOverlay) notesOverlay.classList.toggle('active', isPlaying);

      if (playBtn) {
        playBtn.innerHTML = isPlaying
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg><span>Pause</span>`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span>Play Melody</span>`;
      }
    }

    updateStageDeckTime(currSeconds, durSeconds) {
      const currEl = document.getElementById('deck-curr-time');
      const durEl = document.getElementById('deck-dur-time');
      const fillEl = document.getElementById('deck-scrubber-fill');

      if (currEl) {
        const m = Math.floor(currSeconds / 60);
        const s = Math.floor(currSeconds % 60);
        currEl.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
      }

      if (durEl && durSeconds > 0) {
        const dm = Math.floor(durSeconds / 60);
        const ds = Math.floor(durSeconds % 60);
        durEl.textContent = `${dm}:${ds < 10 ? '0' : ''}${ds}`;
      }

      if (fillEl && durSeconds > 0) {
        const pct = (currSeconds / durSeconds) * 100;
        fillEl.style.width = `${pct}%`;
      }
    }

    nextStage() {
      if (this.currentStageId < this.stages.length - 1) {
        this.goToStage(this.currentStageId + 1);
      }
    }

    prevStage() {
      if (this.currentStageId > 0) {
        this.goToStage(this.currentStageId - 1);
      }
    }

    showToast(message) {
      if (!this.toastEl) return;
      this.toastEl.textContent = message;
      this.toastEl.classList.remove('hidden');

      clearTimeout(this.toastTimeout);
      this.toastTimeout = setTimeout(() => {
        this.toastEl.classList.add('hidden');
      }, 3000);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.app = new FallInLoveApp();
  });
})();
