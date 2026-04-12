'use client';
import { useRef, ReactNode, MouseEvent } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  glareOpacity = 0.06,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const rotX = -dy * maxTilt;
    const rotY = dx * maxTilt;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
    if (glare) {
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) + 90;
      glare.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${glareOpacity}), transparent 80%)`;
    }
  }

  function onMouseLeave() {
    const card = cardRef.current;
    if (card) card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative ${className}`}
      style={{ transition: 'transform 0.15s ease-out', willChange: 'transform' }}
    >
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
      />
      {children}
    </div>
  );
}
