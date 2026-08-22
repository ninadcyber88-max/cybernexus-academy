"use client";

import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame: number;

    const characters =
      "NINAD01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]$#@%&*";

    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.floor(window.innerWidth / 18);

      drops = Array.from(
        { length: columns },
        () => Math.random() * -50
      );
    };

    resize();

    window.addEventListener("resize", resize);

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Dark transparent layer creates the trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.075)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = "14px monospace";

      for (let i = 0; i < drops.length; i++) {
        const char =
          characters[
            Math.floor(Math.random() * characters.length)
          ];

        const x = i * 18;
        const y = drops[i] * 18;

        // Bright leading character
        ctx.fillStyle = "rgba(34, 211, 238, 0.9)";
        ctx.fillText(char, x, y);

        // Secondary glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(34, 211, 238, 0.8)";

        ctx.fillStyle = "rgba(34, 211, 238, 0.35)";
        ctx.fillText(char, x, y);

        ctx.shadowBlur = 0;

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += 0.55;
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-35"
    />
  );
  
}