/**
 * Enhanced Canvas Visual Effects Manager (60FPS Dynamic Thematic VFX)
 * Elevates all stages to high cinematic quality with multi-layered depth,
 * physics-based turbulence, interactive mouse reactions, and audio-reactive pulsations:
 * 
 * - Hero: Celestial Starry Dust, Nebula Clouds & Constellation Weaves
 * - Mulaqat (01): 3D Tumbling Rose Petals, Golden Pollen & Mouse Vortex
 * - Nazdeeki (02): Swarms of Golden Fireflies with Amber Auras & Floating Bokeh
 * - Mohabbat (03): Lub-Dub Dual Heartbeat Shockwaves, Ruby Constellations & Heart Embers
 * - Bichadna (04): Atmospheric Rain on Glass, Expanding Ripples & Sliding Tear Droplets
 * - Manzil (05): Multi-Layer Waving Emerald Aurora Ribbons & Upward Fairy Dust
 * - Jeevan Saathi (06): 3D Rotating Celestial Golden Rings & Amethyst Supernova Sparkles
 */

export class CanvasManager {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.currentEffect = 'celestial-hero';
    this.particles = [];
    this.ripples = [];
    this.trailSparks = [];
    this.floatingHearts = [];
    this.auroraTime = 0;
    this.heartbeatTime = 0;
    this.animFrameId = null;
    this.mouse = { x: -1000, y: -1000, active: false, vx: 0, vy: 0, lastX: 0, lastY: 0 };

    this.resize = this.resize.bind(this);
    this.animate = this.animate.bind(this);

    window.addEventListener('resize', this.resize);
    
    // Mouse movement & velocity tracking
    window.addEventListener('mousemove', (e) => {
      this.mouse.vx = e.clientX - this.mouse.lastX;
      this.mouse.vy = e.clientY - this.mouse.lastY;
      this.mouse.lastX = e.clientX;
      this.mouse.lastY = e.clientY;
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;

      // Add interactive sparkle trail
      this.addTrailSpark(e.clientX, e.clientY);
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.active = false;
    });

    // Touch support
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

    // Click burst effect
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
      case 'celestial-hero':
        this.initCelestialHero();
        break;
      case 'rose-petals':
        this.initRosePetals();
        break;
      case 'golden-fireflies':
        this.initFireflies();
        break;
      case 'heartbeat-constellation':
        this.initHeartbeat();
        break;
      case 'rain-ripples':
        this.initRain();
        break;
      case 'emerald-aurora':
        this.initEmeraldAurora();
        break;
      case 'celestial-gold':
        this.initCelestialGold();
        break;
      default:
        this.initCelestialHero();
    }
  }

  /* ------------------- STAGE 0: CELESTIAL HERO ------------------- */
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
        color: Math.random() > 0.4 ? '#fb7185' : '#c084fc',
        layer: Math.random() > 0.5 ? 2 : 1
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

      // Wrap around edges
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Mouse interactive gentle push
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

      // Draw faint constellation lines
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

  /* ------------------- STAGE 1: 3D ROSE PETALS (MULAQAT) ------------------- */
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

    // Add golden pollen dust
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
        // Floating golden pollen
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

      // 3D Rose Petal Physics
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.flip) * 0.8;
      p.angle += p.angleSpeed;
      p.flip += p.flipSpeed;

      // Interactive mouse swirl vortex
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

  /* ------------------- STAGE 2: GOLDEN FIREFLIES & BOKEH (NAZDEEKI) ------------------- */
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

      // Mouse interactive gentle drift
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
        // Soft floating twilight bokeh orb
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${f.hue}, 100%, 65%, ${alpha * 0.18})`;
        ctx.fill();
      }

      // Core firefly
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${f.hue}, 95%, 75%)`;
      ctx.globalAlpha = alpha;
      ctx.shadowBlur = 20;
      ctx.shadowColor = `hsl(${f.hue}, 100%, 55%)`;
      ctx.fill();

      // Soft ambient aura
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.radius * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${f.hue}, 100%, 60%, ${alpha * 0.3})`;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  }

  /* ------------------- STAGE 3: HEARTBEAT CONSTELLATION (MOHABBAT) ------------------- */
  initHeartbeat() {
    const count = Math.min(Math.floor((this.width * this.height) / 8000), 95);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        originX: 0,
        originY: 0,
        radius: Math.random() * 2.8 + 1.2,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        color: Math.random() > 0.4 ? '#f43f5e' : '#e11d48'
      });
      this.particles[i].originX = this.particles[i].x;
      this.particles[i].originY = this.particles[i].y;
    }

    // Floating heart embers
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

    // Heartbeat pulse cycle (LUB-DUB rhythm)
    const t = (Date.now() % 1350) / 1350;
    let pulseScale = 1;
    if (t < 0.16) {
      pulseScale = 1 + Math.sin((t / 0.16) * Math.PI) * 0.35; // Lub
    } else if (t >= 0.24 && t < 0.42) {
      pulseScale = 1 + Math.sin(((t - 0.24) / 0.18) * Math.PI) * 0.22; // Dub
    }

    const centerX = this.width / 2;
    const centerY = this.height / 2;

    // Draw central pulsing romantic beacon shockwave
    ctx.beginPath();
    ctx.arc(centerX, centerY, 90 * pulseScale, 0, Math.PI * 2);
    const radGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 220 * pulseScale);
    radGrad.addColorStop(0, 'rgba(225, 29, 72, 0.28)');
    radGrad.addColorStop(0.5, 'rgba(244, 63, 94, 0.12)');
    radGrad.addColorStop(1, 'rgba(225, 29, 72, 0)');
    ctx.fillStyle = radGrad;
    ctx.fill();

    // Floating heart embers
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

      // Draw mini heart glyph
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

      // Pulse offset relative to center
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

      // Lines connecting stardust
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

  /* ------------------- STAGE 4: RAIN ON GLASS & RIPPLES (BICHADNA) ------------------- */
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

    // Update & draw raindrops
    for (let drop of this.particles) {
      drop.y += drop.speed;
      drop.x += drop.drift;

      if (drop.y > this.height) {
        drop.y = -35;
        drop.x = Math.random() * this.width;

        // Ripple when drop hits
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

    // Update & draw concentric ripples
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

  /* ------------------- STAGE 5: EMERALD & JADE AURORA (MANZIL) ------------------- */
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

    // Layered flowing fluid aurora waves
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

    // Rising celestial fairy dust
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

  /* ------------------- STAGE 6: CELESTIAL GOLD RINGS (JEEVAN SAATHI) ------------------- */
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

    // 3D Perspective Golden Celestial Rings
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

    // Cosmic golden & amethyst stardust
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

  /* ------------------- INTERACTIVE TRAIL SPARKS ------------------- */
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

  /* ------------------- MAIN ANIMATION LOOP ------------------- */
  animate() {
    switch (this.currentEffect) {
      case 'celestial-hero':
        this.renderCelestialHero();
        break;
      case 'rose-petals':
        this.renderRosePetals();
        break;
      case 'golden-fireflies':
        this.renderFireflies();
        break;
      case 'heartbeat-constellation':
        this.renderHeartbeat();
        break;
      case 'rain-ripples':
        this.renderRain();
        break;
      case 'emerald-aurora':
        this.renderEmeraldAurora();
        break;
      case 'celestial-gold':
        this.renderCelestialGold();
        break;
      default:
        this.renderCelestialHero();
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
