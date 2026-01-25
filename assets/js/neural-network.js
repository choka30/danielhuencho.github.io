/**
 * Neural Network Background Animation
 * A subtle, elegant canvas animation for portfolio hero section
 *
 * Features:
 * - Floating nodes connected by gradient lines
 * - Gentle particle flow between connections
 * - Subtle mouse interaction
 * - Responsive and performant
 * - Respects prefers-reduced-motion
 */

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Configuration
  const CONFIG = {
    nodeCount: 35,
    connectionDistance: 200,
    nodeMinRadius: 2,
    nodeMaxRadius: 4,
    particleSpeed: 0.3,
    particleSpawnRate: 0.015,
    mouseInfluenceRadius: 150,
    mouseInfluenceStrength: 0.02,
    returnSpeed: 0.02,
    pulseSpeed: 0.008,

    // Ocean blue color palette
    colors: {
      background: '#0d1b2a',
      nodePrimary: '#63b3ed',
      nodeSecondary: '#4299e1',
      connectionBase: 'rgba(99, 179, 237, 0.08)',
      connectionActive: 'rgba(99, 179, 237, 0.25)',
      particlePrimary: '#90cdf4',
      particleSecondary: '#63b3ed',
      glowColor: 'rgba(99, 179, 237, 0.3)'
    }
  };

  let canvas, ctx;
  let width, height;
  let nodes = [];
  let particles = [];
  let mouse = { x: -1000, y: -1000, active: false };
  let animationId;
  let lastTime = 0;

  /**
   * Initialize canvas and start animation
   */
  function init() {
    canvas = document.getElementById('neural-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');

    resize();
    createNodes();

    // Event listeners
    window.addEventListener('resize', debounce(resize, 150));
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleMouseLeave);

    // Start animation
    lastTime = performance.now();
    animate();
  }

  /**
   * Handle canvas resize
   */
  function resize() {
    const container = canvas.parentElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = container.clientWidth;
    height = container.clientHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);

    // Recreate nodes on significant resize
    if (nodes.length > 0) {
      repositionNodes();
    }
  }

  /**
   * Create network nodes with organic distribution
   */
  function createNodes() {
    nodes = [];
    const padding = 60;

    for (let i = 0; i < CONFIG.nodeCount; i++) {
      const node = {
        x: padding + Math.random() * (width - padding * 2),
        y: padding + Math.random() * (height - padding * 2),
        baseX: 0,
        baseY: 0,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: CONFIG.nodeMinRadius + Math.random() * (CONFIG.nodeMaxRadius - CONFIG.nodeMinRadius),
        pulse: Math.random() * Math.PI * 2,
        connections: []
      };

      node.baseX = node.x;
      node.baseY = node.y;
      nodes.push(node);
    }

    // Create connections
    updateConnections();
  }

  /**
   * Reposition nodes after resize
   */
  function repositionNodes() {
    const padding = 60;
    nodes.forEach(node => {
      node.x = Math.min(Math.max(node.x, padding), width - padding);
      node.y = Math.min(Math.max(node.y, padding), height - padding);
      node.baseX = node.x;
      node.baseY = node.y;
    });
    updateConnections();
  }

  /**
   * Update node connections based on distance
   */
  function updateConnections() {
    nodes.forEach(node => {
      node.connections = [];
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = distance(nodes[i], nodes[j]);
        if (dist < CONFIG.connectionDistance) {
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        }
      }
    }
  }

  /**
   * Create a particle traveling between nodes
   */
  function createParticle(startIdx, endIdx) {
    return {
      startIdx,
      endIdx,
      progress: 0,
      speed: CONFIG.particleSpeed + Math.random() * 0.15,
      size: 1.5 + Math.random() * 1,
      alpha: 0.6 + Math.random() * 0.4
    };
  }

  /**
   * Main animation loop
   */
  function animate(currentTime = 0) {
    const deltaTime = Math.min((currentTime - lastTime) / 16.67, 2); // Normalize to ~60fps
    lastTime = currentTime;

    ctx.clearRect(0, 0, width, height);

    updateNodes(deltaTime);
    spawnParticles();
    updateParticles(deltaTime);

    drawConnections();
    drawParticles();
    drawNodes();

    animationId = requestAnimationFrame(animate);
  }

  /**
   * Update node positions
   */
  function updateNodes(deltaTime) {
    nodes.forEach(node => {
      // Gentle floating motion
      node.x += node.vx * deltaTime;
      node.y += node.vy * deltaTime;

      // Mouse influence
      if (mouse.active) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.mouseInfluenceRadius && dist > 0) {
          const force = (CONFIG.mouseInfluenceRadius - dist) / CONFIG.mouseInfluenceRadius;
          node.x += dx * force * CONFIG.mouseInfluenceStrength * deltaTime;
          node.y += dy * force * CONFIG.mouseInfluenceStrength * deltaTime;
        }
      }

      // Return to base position (elastic)
      node.x += (node.baseX - node.x) * CONFIG.returnSpeed * deltaTime;
      node.y += (node.baseY - node.y) * CONFIG.returnSpeed * deltaTime;

      // Update pulse
      node.pulse += CONFIG.pulseSpeed * deltaTime;
    });
  }

  /**
   * Spawn new particles occasionally
   */
  function spawnParticles() {
    if (Math.random() < CONFIG.particleSpawnRate && particles.length < 20) {
      const candidates = nodes.filter(n => n.connections.length > 0);
      if (candidates.length > 0) {
        const startNode = candidates[Math.floor(Math.random() * candidates.length)];
        const startIdx = nodes.indexOf(startNode);
        const endIdx = startNode.connections[Math.floor(Math.random() * startNode.connections.length)];
        particles.push(createParticle(startIdx, endIdx));
      }
    }
  }

  /**
   * Update particle positions
   */
  function updateParticles(deltaTime) {
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      particle.progress += particle.speed * deltaTime * 0.02;

      if (particle.progress >= 1) {
        // Chain to next connection or remove
        const currentNode = nodes[particle.endIdx];
        if (currentNode.connections.length > 0 && Math.random() > 0.4) {
          const nextIdx = currentNode.connections[Math.floor(Math.random() * currentNode.connections.length)];
          particle.startIdx = particle.endIdx;
          particle.endIdx = nextIdx;
          particle.progress = 0;
        } else {
          particles.splice(i, 1);
        }
      }
    }
  }

  /**
   * Draw connections between nodes
   */
  function drawConnections() {
    const drawn = new Set();

    nodes.forEach((node, idx) => {
      node.connections.forEach(connIdx => {
        const key = idx < connIdx ? `${idx}-${connIdx}` : `${connIdx}-${idx}`;
        if (drawn.has(key)) return;
        drawn.add(key);

        const other = nodes[connIdx];
        const dist = distance(node, other);
        const alpha = Math.max(0, 1 - dist / CONFIG.connectionDistance) * 0.12;

        // Check if any particle is on this connection
        const hasParticle = particles.some(p =>
          (p.startIdx === idx && p.endIdx === connIdx) ||
          (p.startIdx === connIdx && p.endIdx === idx)
        );

        const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
        const baseAlpha = hasParticle ? alpha * 2.5 : alpha;
        gradient.addColorStop(0, `rgba(99, 179, 237, ${baseAlpha})`);
        gradient.addColorStop(0.5, `rgba(66, 153, 225, ${baseAlpha * 0.7})`);
        gradient.addColorStop(1, `rgba(99, 179, 237, ${baseAlpha})`);

        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = hasParticle ? 1.5 : 1;
        ctx.stroke();
      });
    });
  }

  /**
   * Draw particles
   */
  function drawParticles() {
    particles.forEach(particle => {
      const start = nodes[particle.startIdx];
      const end = nodes[particle.endIdx];

      const x = start.x + (end.x - start.x) * particle.progress;
      const y = start.y + (end.y - start.y) * particle.progress;

      // Glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 4);
      gradient.addColorStop(0, `rgba(144, 205, 244, ${particle.alpha * 0.5})`);
      gradient.addColorStop(1, 'rgba(144, 205, 244, 0)');

      ctx.beginPath();
      ctx.arc(x, y, particle.size * 4, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core particle
      ctx.beginPath();
      ctx.arc(x, y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(144, 205, 244, ${particle.alpha})`;
      ctx.fill();
    });
  }

  /**
   * Draw nodes
   */
  function drawNodes() {
    nodes.forEach(node => {
      const pulseScale = 1 + Math.sin(node.pulse) * 0.15;
      const radius = node.radius * pulseScale;

      // Outer glow
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 3);
      gradient.addColorStop(0, 'rgba(99, 179, 237, 0.15)');
      gradient.addColorStop(1, 'rgba(99, 179, 237, 0)');

      ctx.beginPath();
      ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Main node
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = CONFIG.colors.nodePrimary;
      ctx.fill();

      // Inner highlight
      ctx.beginPath();
      ctx.arc(node.x - radius * 0.25, node.y - radius * 0.25, radius * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();
    });
  }

  // Utility functions
  function distance(a, b) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }

  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  }

  function handleTouchMove(e) {
    if (e.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
      mouse.active = true;
    }
  }

  function handleMouseLeave() {
    mouse.active = false;
  }

  // Cleanup function
  function cleanup() {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    window.removeEventListener('resize', resize);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Cleanup on page unload
  window.addEventListener('beforeunload', cleanup);

})();
