'use client'

import React, { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 100, suffix: '%', label: 'KI-First Ansatz' },
  { value: 0, suffix: '€', label: 'Vendor Lock-in' },
  { value: 48, suffix: 'h', label: 'Bis zur neuen Website' },
  { value: 1, suffix: '', label: 'Team. Volle Power.' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1200
        const steps = 40
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="font-display text-3xl font-black text-neon animate-neon-pulse">
      {count}{suffix}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black circuit-bg flex flex-col overflow-hidden">

      {/* Scanline overlay */}
      <div className="scanlines absolute inset-0 pointer-events-none" />

      {/* Animated scan bar */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent animate-scan pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 corner-tl w-16 h-16 relative pointer-events-none" />
      <div className="absolute top-24 right-8 pointer-events-none">
        <div className="relative w-16 h-16 corner-br" />
      </div>

      {/* Vertical data stream — links */}
      <div className="absolute left-4 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-neon/20 to-transparent pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-8 bg-neon/60 animate-scan" style={{ animationDuration: '3s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 flex-1 gap-16">

        {/* Left: Text */}
        <div className="flex-1 max-w-2xl">
          <div className="label-tag mb-8 animate-fade-up typing-cursor">// KI-FIRST SOFTWARE STUDIO</div>

          <h1
            className="section-title text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <span className="text-silver block">AI-Powered</span>
            <span className="text-silver block">Software.</span>
            <span
              className="neon-text block glitch"
              data-text="Built to Scale."
            >
              Built to Scale.
            </span>
          </h1>

          <p
            className="font-body text-lg text-muted leading-relaxed mb-10 max-w-xl animate-fade-up"
            style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
          >
            Wir bauen KI-Produkte die in der Praxis bestehen — durchdacht, messbar, skalierbar.
            Vom Business-Tool bis zur Automatisierungsplattform. Alles KI-First.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <a href="#services" className="neon-btn-fill text-center">
              Services entdecken
            </a>
            <a href="#portfolio" className="neon-btn text-center">
              Portfolio ansehen
            </a>
          </div>
        </div>

        {/* Right: Logo */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-float">
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-full bg-neon/5 animate-neon-pulse scale-125" />
            <div className="absolute inset-0 rounded-full bg-neon/10 animate-neon-pulse scale-110" style={{ animationDelay: '0.5s' }} />

            <div className="relative w-full h-full rounded-2xl overflow-hidden neon-border shadow-neon holo-card">
              <img
                src="/assets/logo-futuristic.jpg"
                alt="TechStag Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Corner decorations on logo card */}
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-neon" />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-neon" />
          </div>

          {/* Floating chips */}
          <div className="absolute -top-4 -right-4 glass-card px-3 py-2 neon-border animate-float" style={{ animationDelay: '1s' }}>
            <div className="font-mono text-[10px] text-neon tracking-widest">SYSTEM ONLINE</div>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-neon animate-neon-pulse" />
              <span className="font-mono text-[9px] text-muted">ALL SYSTEMS GO</span>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 glass-card px-3 py-2 neon-border animate-float" style={{ animationDelay: '1.8s' }}>
            <div className="font-mono text-[10px] text-neon/70 tracking-widest">AI ENGINE</div>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-1 bg-neon/60 animate-neon-pulse rounded-sm"
                    style={{ height: `${6 + (i % 3) * 4}px`, animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
              <span className="font-mono text-[9px] text-muted">CLAUDE 4</span>
            </div>
          </div>

          <div className="absolute top-1/2 -right-16 glass-card px-3 py-2 neon-border animate-float hidden lg:block" style={{ animationDelay: '0.7s' }}>
            <div className="font-mono text-[9px] text-muted tracking-widest">DEPLOY</div>
            <div className="font-mono text-[10px] text-neon mt-0.5">✓ LIVE</div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-neon/20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ value, suffix, label }) => (
            <div key={label} className="text-center">
              <CountUp target={value} suffix={suffix} />
              <div className="font-mono text-[10px] text-muted tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
