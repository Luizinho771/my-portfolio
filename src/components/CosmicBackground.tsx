"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftSpeed: number;
};

const STAR_DENSITY = 1 / 9000; // stars per px²
const ACCENT_COLOR = "225, 117, 100"; // --light, used on a few stars

function createStars(width: number, height: number): Star[] {
  const count = Math.floor(width * height * STAR_DENSITY);
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 0.4 + Math.random() * 1.2,
    baseAlpha: 0.2 + Math.random() * 0.6,
    twinkleSpeed: 0.3 + Math.random() * 1.2,
    twinklePhase: Math.random() * Math.PI * 2,
    driftSpeed: 2 + Math.random() * 6, // px per second, downward drift
  }));
}

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let stars: Star[] = [];
    let rafId = 0;
    let running = true;
    let lastTime = performance.now();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = createStars(window.innerWidth, window.innerHeight);
    };

    const draw = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const isLightTheme = document.documentElement.dataset.theme === "light";
      const baseColor = isLightTheme ? "9, 18, 44" : "255, 255, 255";

      stars.forEach((star, i) => {
        if (!reducedMotion) {
          star.y += star.driftSpeed * dt;
          if (star.y > h + 2) {
            star.y = -2;
            star.x = Math.random() * w;
          }
        }
        const twinkle = reducedMotion
          ? 1
          : 0.7 + 0.3 * Math.sin(time / 1000 * star.twinkleSpeed + star.twinklePhase);
        const alpha = star.baseAlpha * twinkle;
        const color = i % 17 === 0 ? ACCENT_COLOR : baseColor;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();
      });

      if (!reducedMotion && running) {
        rafId = requestAnimationFrame(draw);
      }
    };

    const onVisibilityChange = () => {
      running = document.visibilityState === "visible";
      if (running && !reducedMotion) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(rafId);
      }
    };

    resize();
    rafId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Under reduced motion draw() runs once, so repaint on theme change
    const themeObserver = new MutationObserver(() => {
      if (reducedMotion) draw(performance.now());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
