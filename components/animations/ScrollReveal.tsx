'use client';
import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;        // ms
  distance?: number;     // px translateY
  duration?: number;     // ms
  style?: CSSProperties;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  distance = 28,
  duration = 600,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = `translateY(${distance}px)`;
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, distance, duration]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
