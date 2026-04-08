'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function ScrollReveal({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`rv${visible ? ' in' : ''}${className ? ' ' + className : ''}`}
    >
      {children}
    </div>
  )
}
