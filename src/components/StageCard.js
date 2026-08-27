/**
 * StageCard Component (Stages 1 through 6)
 * Luxury Glassmorphic Stage Altar:
 * Integrates Soulful Shayari, Spinning Vinyl Turntable, and Integrated Audio Deck Controls.
 */

export function renderStageCard(stageData, isPlaying, audioEngine, onTogglePlay) {
  const card = document.createElement('div');
  card.className = 'stage-altar-card';
  card.id = `stage-card-${stageData.id}`;

  const isCurrentPlaying = isPlaying;

  card.innerHTML = `
    <!-- Top Altar Header Meta -->
    <div class="altar-header">
      <div class="altar-header-left">
        <span class="altar-stage-badge">STAGE ${stageData.stageNumber} OF 06</span>
        <span class="altar-devanagari-watermark">${stageData.devanagariTitle}</span>
      </div>
      <div class="altar-meaning-pill">
        <span>✦ ${stageData.meaning}</span>
      </div>
    </div>

    <!-- Main Stage Grid (Poetry on Left, Vinyl Player Deck on Right) -->
    <div class="altar-body-grid">
      <!-- Left Column: Soulful Shayari & Meaning -->
      <div class="altar-poetry-pane">
        <div class="altar-title-block">
          <h2 class="altar-stage-title">${stageData.title}</h2>
          <span class="altar-devanagari-subtitle">${stageData.devanagariTitle}</span>
        </div>

        <!-- Shayari Poetry Box -->
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

      <!-- Right Column: Integrated Vinyl Turntable & Player Deck -->
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

        <!-- Turntable Vinyl Showcase -->
        <div class="deck-vinyl-showcase">
          <div class="vinyl-record ${isCurrentPlaying ? 'spinning' : ''}" id="deck-vinyl-record">
            <div class="vinyl-center-disc">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </div>
            <div class="vinyl-lines"></div>
          </div>

          <!-- Floating musical notes animation -->
          <div class="vinyl-notes-overlay ${isCurrentPlaying ? 'active' : ''}">
            <span class="music-note n1">♪</span>
            <span class="music-note n2">♫</span>
            <span class="music-note n3">✦</span>
          </div>
        </div>

        <!-- Song Details Metadata -->
        <div class="deck-song-info">
          <h3 class="deck-song-title">${stageData.song.title}</h3>
          <p class="deck-singer-name">Vocals: ${stageData.song.singer}</p>
          <div class="deck-credits-row">
            <span>Film: ${stageData.song.film}</span>
            <span>•</span>
            <span>Music: ${stageData.song.musicDirector}</span>
          </div>
        </div>

        <!-- Integrated Player Controls & Scrubber -->
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

            <!-- Volume Slider in Deck -->
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

  // Attach Play / Pause
  const playBtn = card.querySelector('#deck-play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (onTogglePlay) onTogglePlay(stageData.id);
    });
  }

  // Attach Scrubber Seek
  const scrubber = card.querySelector('#deck-scrubber-bar');
  if (scrubber && audioEngine) {
    scrubber.addEventListener('click', (e) => {
      const rect = scrubber.getBoundingClientRect();
      const percent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      audioEngine.seek(percent);
    });
  }

  // Volume & Mute in card
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

  // Copy Shayari Button
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

  // 3D Parallax Tilt on Mouse Move
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
