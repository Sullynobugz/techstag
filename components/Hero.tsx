import React from 'react'

const STATS = [
  { value: '100%', label: 'KI-First Ansatz' },
  { value: '0€', label: 'Vendor Lock-in' },
  { value: 'DE', label: 'Hosting in Deutschland' },
  { value: '1', label: 'Team. Volle Power.' },
]

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

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 flex-1 gap-16">

        {/* Left: Text */}
        <div className="flex-1 max-w-2xl">
          <div className="label-tag mb-8 animate-fade-up">// KI-FIRST SOFTWARE STUDIO</div>

          <h1 className="section-title text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            <span className="text-silver block">AI-Powered</span>
            <span className="text-silver block">Software.</span>
            <span className="neon-text block">Built to Scale.</span>
          </h1>

          <p className="font-body text-lg text-muted leading-relaxed mb-10 max-w-xl animate-fade-up"
            style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            Wir bauen KI-Produkte die wirklich funktionieren — keine Demos, keine Buzzwords.
            Vom Business-Tool bis zur Automatisierungsplattform. Alles KI-First.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <a href="#services" className="neon-btn-fill text-center">
              Services entdecken
            </a>
          </div>
        </div>

        {/* Right: Logo */}
        <div className="flex-shrink-0 relative">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-float">
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-full bg-neon/5 animate-neon-pulse scale-125" />
            <div className="absolute inset-0 rounded-full bg-neon/10 animate-neon-pulse scale-110" style={{ animationDelay: '0.5s' }} />

            <div className="relative w-full h-full rounded-2xl overflow-hidden neon-border shadow-neon">
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

          {/* Floating data chip */}
          <div className="absolute -top-4 -right-4 glass-card px-3 py-2 neon-border animate-float" style={{ animationDelay: '1s' }}>
            <div className="font-mono text-[10px] text-neon tracking-widest">SYSTEM ONLINE</div>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-neon animate-neon-pulse" />
              <span className="font-mono text-[9px] text-muted">ALL SYSTEMS GO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-neon/20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-3xl font-black text-neon animate-neon-pulse">{value}</div>
              <div className="font-mono text-[10px] text-muted tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
