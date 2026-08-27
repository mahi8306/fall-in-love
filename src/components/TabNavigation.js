/**
 * TabNavigation Component
 * Modern glassmorphism bottom dock featuring stage icons, numbers (01-06),
 * active highlight glow, and smooth horizontal scrolling.
 */

const TAB_ICONS = {
  0: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
  1: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`,
  2: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path></svg>`,
  3: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`,
  4: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>`,
  5: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  6: `<svg class="tab-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="12" r="5"></circle><circle cx="16" cy="12" r="5"></circle></svg>`
};

export class TabNavigation {
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
        if (this.onSelectStage) {
          this.onSelectStage(stage.id);
        }
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
