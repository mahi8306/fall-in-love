/**
 * Fall in Love — Main Application Orchestrator
 * Connects 60fps Canvas VFX, Streamlined Audio Engine, Stage Transitions,
 * Keyboard & Touch Gestures with All-in-One Luxury Stage Altars.
 */

import { STAGES_DATA } from './data/stagesData.js';
import { CanvasManager } from './visuals/CanvasManager.js';
import { RomanticAudioEngine } from './audio/RomanticAudioEngine.js';
import { renderHeroSection } from './components/HeroSection.js';
import { renderStageCard } from './components/StageCard.js';
import { TabNavigation } from './components/TabNavigation.js';

class FallInLoveApp {
  constructor() {
    this.currentStageId = 0;
    this.stages = STAGES_DATA;
    this.isAudioStarted = false;

    // DOM Elements
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

    // Subsystems
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
    // Brand home logo
    if (this.brandHomeBtn) {
      this.brandHomeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.goToStage(0);
      });
    }

    // Side navigation arrows
    if (this.navPrevBtn) this.navPrevBtn.addEventListener('click', () => this.prevStage());
    if (this.navNextBtn) this.navNextBtn.addEventListener('click', () => this.nextStage());

    // Mute toggle
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

    // Audio time update sync with stage card deck
    this.audio.onTimeUpdate = (currSeconds, durSeconds) => {
      this.updateStageDeckTime(currSeconds, durSeconds);
    };

    // Sync audio state with stage card
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

    // Update body theme class & dataset
    document.body.className = `${stage.themeClass}`;
    document.body.setAttribute('data-stage', stageId);

    // Update Canvas Particle VFX
    this.vfx.setEffect(stage.vfx);

    // Update Progress Bar
    if (this.progressBar) {
      const progressPercent = stageId === 0 ? 8 : (stageId / 6) * 100;
      this.progressBar.style.setProperty('--progress-width', `${progressPercent}%`);
    }
    if (this.progressLabel) {
      this.progressLabel.textContent = stageId === 0 ? 'Main Page: Prologue' : `Stage ${stageId} of 6`;
    }

    // Side navigation arrows
    if (this.navPrevBtn) this.navPrevBtn.classList.toggle('hidden', stageId === 0);
    if (this.navNextBtn) this.navNextBtn.classList.toggle('hidden', stageId === this.stages.length - 1);

    // Render Stage View
    this.renderStageView(stage);

    // Update Tab Navigation Dock
    this.tabNav.setActiveStage(stageId);

    // Optional autoplay
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
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
          <span>Pause</span>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>Play Melody</span>`;
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

// Bootstrap when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new FallInLoveApp();
});
