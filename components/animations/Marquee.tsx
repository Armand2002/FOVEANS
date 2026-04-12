'use client';
import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // seconds for one full loop
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  speed = 30,
  direction = 'left',
  className = '',
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10
                      bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10
                      bg-gradient-to-l from-black to-transparent" />

      <div
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: 'running',
        }}
        onMouseEnter={e => {
          if (pauseOnHover)
            (e.currentTarget as HTMLElement).style.animationPlayState = 'paused';
        }}
        onMouseLeave={e => {
          if (pauseOnHover)
            (e.currentTarget as HTMLElement).style.animationPlayState = 'running';
        }}
      >
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-0">{children}</div>
        <div className="flex items-center gap-0" aria-hidden="true">{children}</div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
