'use client';
import { useEffect, useRef } from 'react';

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

export default function Threads({
  color = [1, 0.15, 0.15],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = true,
}: ThreadsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const frame = useRef(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;

    function resize() {
      if (!canvas) return;
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const N = 60;
    const threads = Array.from({ length: N }, (_, i) => ({
      y: (i / (N - 1)) * 1.2 - 0.1,
      phase: Math.random() * Math.PI * 2,
      speed: 0.003 + Math.random() * 0.004,
      amp: (0.04 + Math.random() * 0.08) * amplitude,
    }));

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, W, H);

      const mx = mouse.current.x / W;
      const my = mouse.current.y / H;
      const t = frame.current;

      for (const th of threads) {
        ctx.beginPath();
        const alpha = 0.08 + Math.abs(Math.sin(th.phase + t * th.speed)) * 0.18;
        ctx.strokeStyle = `rgba(${Math.round(color[0] * 255)},${Math.round(color[1] * 255)},${Math.round(color[2] * 255)},${alpha})`;
        ctx.lineWidth = 0.8;

        for (let x = 0; x <= W; x += 3) {
          const px = x / W;
          const dist = enableMouseInteraction
            ? Math.sqrt((px - mx) ** 2 + (th.y - my) ** 2)
            : 1;
          const push = enableMouseInteraction
            ? Math.max(0, 1 - dist / 0.3) * 0.06
            : 0;
          const y =
            th.y * H +
            Math.sin(px * 8 + t * th.speed * 60 + th.phase) * th.amp * H +
            Math.sin(px * 3 + t * th.speed * 30) * th.amp * 0.5 * H +
            push * H * (my > th.y ? 1 : -1);

          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      frame.current += 1;
      raf.current = requestAnimationFrame(draw);
    }

    draw();

    function onMove(e: MouseEvent) {
      mouse.current = { x: e.clientX, y: e.clientY };
    }
    if (enableMouseInteraction) window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, [color, amplitude, enableMouseInteraction, distance]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}
