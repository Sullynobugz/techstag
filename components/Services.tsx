import React from 'react'

const SERVICES = [
  {
    id: '01',
    title: 'KI-Entwicklung',
    desc: 'Custom AI-Applikationen auf Basis von Claude, GPT und Open-Source-Modellen. Von der Idee bis zum Deploy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Business Automation',
    desc: 'n8n-Workflows, API-Integrationen und intelligente Prozessautomatisierung die echten ROI liefern.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'SaaS-Produkte',
    desc: 'Wir bauen vertikale SaaS-Tools für spezifische Märkte — schlank, schnell, profitabel.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Data & Analytics',
    desc: 'Business Intelligence, KPI-Dashboards und KI-Analyse die Entscheidungen smarter macht.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 4-8" />
      </svg>
    ),
  },
  {
    id: '05',
    title: 'Rapid Prototyping',
    desc: 'Von der Idee zum funktionalen Prototypen in Tagen, nicht Monaten. Validieren bevor investiert wird.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    id: '06',
    title: 'Cloud Deployment',
    desc: 'Hetzner, Coolify, Docker — skalierbare Infrastruktur ohne Big-Tech-Preise.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-black circuit-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="label-tag mb-6">// WHAT WE BUILD</div>
          <h2 className="section-title text-3xl md:text-5xl font-black text-silver mb-6">
            Unsere <span className="neon-text">Services</span>
          </h2>
          <p className="font-body text-muted text-lg max-w-2xl mx-auto">
            Kein Agentur-Overhead. Keine Kompromisse. Nur Software die liefert.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ id, title, desc, icon }) => (
            <div key={id} className="glass-card relative p-8 rounded-xl overflow-hidden group">

              {/* ID number */}
              <div className="font-mono text-[10px] text-neon/40 tracking-widest mb-6 group-hover:text-neon/70 transition-colors">
                {id} ────────────
              </div>

              {/* Icon */}
              <div className="text-neon mb-5 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] transition-all">
                {icon}
              </div>

              {/* Text */}
              <h3 className="section-title text-base font-bold text-silver mb-3">
                {title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                {desc}
              </p>

              {/* Hover glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/0 to-transparent group-hover:via-neon/60 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
