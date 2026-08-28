"use client";

import { useEffect, useRef } from "react";

interface Particle {
  angle: number;
  speed: number;
  radius: number;
  maxRadius: number;
  size: number;
  opacity: number;
  life: number;
}

function createParticle(): Particle {
  const angle = Math.random() * Math.PI * 2;
  return {
    angle,
    speed: 0.4 + Math.random() * 0.8,
    radius: 8 + Math.random() * 12,
    maxRadius: 55 + Math.random() * 45,
    size: 1 + Math.random() * 2,
    opacity: 0.6 + Math.random() * 0.4,
    life: Math.random(),
  };
}

export function CoreParticleEmitter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    const size = 220;

    const resize = () => {
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    particlesRef.current = Array.from({ length: 36 }, createParticle);

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;

      for (const p of particlesRef.current) {
        p.radius += p.speed;
        p.life += 0.012;
        p.opacity = Math.max(0, 1 - p.radius / p.maxRadius);

        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, p.size * 2);
        gradient.addColorStop(0, `rgba(255, 220, 120, ${p.opacity})`);
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${p.opacity * 0.6})`);
        gradient.addColorStop(1, "rgba(212, 175, 55, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();

        if (p.radius >= p.maxRadius) {
          Object.assign(p, createParticle());
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 m-auto"
      aria-hidden
    />
  );
}
