import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w: number, h: number;
    let particles: Particle[] = [];
    const opts = { count: 80, size: 2.2, speed: 0.6, color: '#00a3ff' };

    const rand = (a: number, b: number) => Math.random() * (b - a) + a;

    const resize = () => {
      w = canvas.width = canvas.clientWidth || window.innerWidth;
      h = canvas.height = canvas.clientHeight || Math.max(window.innerHeight * 0.6, 400);
      init();
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < opts.count; i++) {
        particles.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-opts.speed, opts.speed),
          vy: rand(-opts.speed, opts.speed),
          r: rand(1, opts.size)
        });
      }
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        
        ctx.beginPath();
        ctx.fillStyle = opts.color;
        ctx.globalAlpha = 0.9;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = opts.color;
            ctx.globalAlpha = 0.04 + (0.35 * (1 - dist / 110));
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(step);
    };

    window.addEventListener('resize', resize);
    resize();
    step();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="novaweb-hero-canvas" 
      aria-hidden="true"
      data-testid="hero-canvas"
    />
  );
}
