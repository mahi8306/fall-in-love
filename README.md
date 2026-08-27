# Fall in Love — A Symphonic Journey Through the 6 Sacred Stages of Romance

A romantic web application crafted in **pure HTML5, CSS3, Canvas 2D, Web Audio API, and JavaScript**.

---

## 🌟 The 6 Sacred Stages of Romance & Song Identifications

| Stage | Name | Devanagari | Theme | Featured Song | Film & Artists | Audio Status |
|---|---|---|---|---|---|---|
| **00** | **Prologue** | **इश्क़ का सफ़र** | The Invitation | *Fall in Love Theme* | Instrumental Atmosphere | Built-in |
| **01** | **Mulaqat** | **मुलाक़ात** | The Serendipitous Encounter | *Ek Ajnabee Haseena Se* | *Ajanabee* (1974) • Kishore Kumar • R.D. Burman | `audio/1-mulaqat.mp3` |
| **02** | **Nazdeeki** | **नज़दीकी** | The Blossoming Closeness | *Ye Shaam Mastani* | *Kati Patang* (1971) • Kishore Kumar • R.D. Burman | `audio/2-nazdeeki.mp3` |
| **03** | **Mohabbat** | **मोहब्बत** | The Infinite Devotion | *Pal Pal Dil Ke Paas* | *Blackmail* (1973) • Kishore Kumar • Kalyanji-Anandji | `audio/3-mohabbat.mp3` |
| **04** | **Bichadna** | **बिछड़ना** | The Melancholy of Longing | *Lag Ja Gale* | *Woh Kaun Thi?* (1964) • Lata Mangeshkar • Madan Mohan | `audio/4-bichadna.mp3` |
| **05** | **Manzil** | **मंज़िल** | The Union & Sanctuary | *Abhi Na Jao Chhod Kar* | *Hum Dono* (1961) • Mohd. Rafi & Asha Bhosle • Jaidev | `audio/5-manzil.mp3` |
| **06** | **Jeevan Saathi** | **जीवन साथी** | The Eternal Companion | *Pyaar Deewana Hota Hai* | *Kati Patang* (1971) • Kishore Kumar • R.D. Burman | `audio/6-jeevansaathi.mp3` |

---

## 🎤 Real-Time Synchronized Lyrics & Karaoke Studio

- **Live Karaoke Banner on Stage Card**: As the song plays, the card highlights the current line in real-time with glowing Devanagari script, Roman transliteration, English translation, line progress bar, and next-line preview.
- **Interactive Full Lyrics & Poetry Studio**:
  - Highlights the actively sung verse in real time with an energetic pulsating glow.
  - **Click to Jump (Timestamp Seeking)**: Click on any verse in the modal to immediately seek the audio to that exact moment in the song!
  - **Script Filters**: Switch easily between *All Scripts*, *हिंदी (Devanagari)*, *Roman Hindi*, and *English Meaning*.
  - **Live Auto-Scroll**: Automatically scrolls to keep the current singing line centered in view.
  - **Copy Complete Lyrics**: One-click copy for the full song lyrics and poetic translation.

---

## 🚀 How to Deploy

This application is **100% serverless, zero-build, and ready to deploy instantly** on any platform:

### Option 1: Deploy on Vercel
1. Push this repository to GitHub or run `vercel` via the Vercel CLI.
2. The included `vercel.json` automatically configures caching and clean URLs.

### Option 2: Deploy on Netlify
1. Drag and drop this folder directly into the [Netlify Drop](https://app.netlify.com/drop) dashboard, or connect your Git repository.
2. The included `netlify.toml` automatically applies security and audio streaming headers.

### Option 3: GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings > Pages > Branch: main / root**.
3. Your site will be live instantly!

### Option 4: Run Locally
- Simply double-click `index.html` in any web browser, or run any static server:
  ```bash
  # Python
  python -m http.server 8000
  
  # Or with Node / npx
  npx serve .
  ```

---

## 🎹 Keyboard Shortcuts

- **Spacebar**: Play / Pause current song
- **Right Arrow / Page Down**: Next stage
- **Left Arrow / Page Up**: Previous stage
- **L**: Open Poetry & Lyrics Studio
- **M**: Mute / Unmute audio
- **0 to 6**: Jump directly to Stage 0 through 6
