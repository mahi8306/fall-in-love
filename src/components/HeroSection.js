/**
 * HeroSection Component (Main Page Landing)
 * Grand cinematic hero presentation with romantic typography, interactive stage portals,
 * and seamless journey starters.
 */

import { STAGES_DATA } from '../data/stagesData.js';

export function renderHeroSection(stageData, onStartJourney) {
  const container = document.createElement('div');
  container.className = 'hero-container';
  container.id = 'hero-section';

  // Generate 6 quick stage cards for the interactive portal grid
  const stagePortalsHTML = STAGES_DATA.filter(s => !s.isHero).map(stage => `
    <button class="hero-stage-portal" data-id="${stage.id}" aria-label="Jump to Stage ${stage.stageNumber}: ${stage.title}">
      <div class="portal-badge-num">STAGE ${stage.stageNumber}</div>
      <div class="portal-title">${stage.title}</div>
      <div class="portal-devanagari">${stage.devanagariTitle}</div>
      <div class="portal-song-hint">♫ ${stage.song.title}</div>
    </button>
  `).join('');

  container.innerHTML = `
    <!-- Top Prologue Badge -->
    <div class="hero-badge">
      <span class="hero-badge-dot"></span>
      <span>A Symphonic Romance Journey</span>
    </div>

    <!-- Grand Animated Title -->
    <div class="hero-title-wrapper">
      <span class="hero-devanagari-bg">${stageData.devanagariTitle}</span>
      <h1 class="hero-main-title">${stageData.title}</h1>
    </div>

    <!-- Subtitle & Soul Tagline -->
    <p class="hero-subtitle">
      "${stageData.subtitle}"
    </p>

    <p class="hero-tagline">
      ${stageData.tagline}
    </p>

    <!-- Primary Journey CTAs -->
    <div class="hero-actions">
      <button id="hero-start-cta" class="btn-primary-glow" aria-label="Begin Sacred Journey">
        <span>Begin Sacred Journey</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>

    <!-- 6 Sacred Stage Portals Grid -->
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

  // Attach start CTA event
  const startCta = container.querySelector('#hero-start-cta');
  if (startCta) {
    startCta.addEventListener('click', () => {
      if (onStartJourney) onStartJourney(1);
    });
  }

  // Attach quick portal clicks
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
