'use client';
import { CSSProperties, ReactNode } from 'react';

interface StarBorderProps {
  children: ReactNode;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
}

export default function StarBorder({
  children,
  className = '',
  color = '#DC2626',
  speed = '6s',
  thickness = 1,
}: StarBorderProps) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ '--star-color': color, '--speed': speed } as CSSProperties}
    >
      {/* Animated border via conic-gradient sweep */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
        style={{ padding: thickness }}
      >
        <div
          className="absolute inset-[-150%] animate-[star-spin_var(--speed)_linear_infinite]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, ${color} 60deg, transparent 120deg)`,
            animationDuration: speed,
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>

      <style>{`
        @keyframes star-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
