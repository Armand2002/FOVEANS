'use client';
import { useRef, ReactNode, MouseEvent } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotColor?: string;
  spotSize?: number;
}

export default function SpotlightCard({
  children,
  className = '',
  spotColor = 'rgba(220,38,38,0.12)',
  spotSize = 350,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    if (!card || !overlay) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    overlay.style.background = `radial-gradient(${spotSize}px circle at ${x}px ${y}px, ${spotColor}, transparent 70%)`;
    overlay.style.opacity = '1';
  }

  function onMouseLeave() {
    if (overlayRef.current) overlayRef.current.style.opacity = '0';
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Spotlight overlay */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      {children}
    </div>
  );
}
