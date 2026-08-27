/**
 * Complete Data Specification for the 6 Sacred Stages of "Fall in Love" (after Main Page)
 * Pure, clean data structure for poetic stages, song details, and acoustic melodic motifs.
 */

export const STAGES_DATA = [
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
