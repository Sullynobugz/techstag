'use client'

import React, { useState } from 'react'

const PROJECTS = [
  {
    id: '01',
    industry: 'Handwerker',
    label: 'Sanitärbetrieb · München',
    beforeDesc: 'Veraltetes WordPress-Theme, keine mobile Optimierung, kein CTA.',
    afterDesc: 'Modernes Design, klarer Lead-Funnel, 3× schnellere Ladezeit.',
    metric: '+312%',
    metricLabel: 'Mehr Anfragen',
    accentColor: '#ff6b35',
    bgBefore: 'from-neutral-700 to-neutral-800',
  },
  {
    id: '02',
    industry: 'Zahnarztpraxis',
    label: 'Zahnarztpraxis · Hamburg',
    beforeDesc: 'Kein Online-Terminbuchung, verwirrende Navigation, Desktop-only.',
    afterDesc: 'Online-Buchung, vertrauensbildendes Design, mobil-optimiert.',
    metric: '↑ 89%',
    metricLabel: 'Mehr Terminbuchungen',
    accentColor: '#00d4ff',
    bgBefore: 'from-neutral-700 to-neutral-800',
  },
  {
    id: '03',
    industry: 'Steuerberater',
    label: 'Steuerkanzlei · Berlin',
    beforeDesc: 'Kein Impressum, fehlende Vertrauenssignale, keine Kontaktmöglichkeit.',
    afterDesc: 'Seriöses Auftreten, DSGVO-konform, direkte Kontaktführung.',
    metric: '0€',
    metricLabel: 'Risiko — Pay per Result',
    accentColor: '#7c3aed',
    bgBefore: 'from-neutral-700 to-neutral-800',
  },
]

function BeforeAfterCard({ project }: { project: typeof PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="glass-card rounded-xl overflow-hidden group cursor-pointer relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Demo badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className="font-mono text-[9px] tracking-widest uppercase border border-white/20 text-white/50 px-2 py-0.5 bg-black/60 backdrop-blur-sm">
          Demo Redesign
        </span>
      </div>

      {/* Industry tag */}
      <div className="absolute top-4 right-4 z-20">
        <span className="label-tag text-[9px]">{project.industry}</span>
      </div>

      {/* Before / After visual */}
      <div className="relative h-52 overflow-hidden">

        {/* BEFORE — left side, always visible */}
        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center p-6">
          <div className="w-full space-y-2 opacity-70">
            {/* Fake old website mockup */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-neutral-600" />
              <div className="h-3 w-24 rounded bg-neutral-600" />
              <div className="ml-auto flex gap-2">
                {[40, 32, 44].map((w, i) => (
                  <div key={i} className="h-2 rounded bg-neutral-700" style={{ width: w }} />
                ))}
              </div>
            </div>
            <div className="h-14 w-3/4 rounded bg-neutral-700" />
            <div className="h-3 w-full rounded bg-neutral-800" />
            <div className="h-3 w-5/6 rounded bg-neutral-800" />
            <div className="h-3 w-4/6 rounded bg-neutral-800" />
            <div className="mt-3 h-8 w-28 rounded bg-neutral-600" />
          </div>
          <div className="absolute bottom-2 left-3 font-mono text-[9px] text-white/30 uppercase tracking-widest">// VORHER</div>
        </div>

        {/* AFTER — slides in on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 ease-out circuit-bg"
          style={{
            background: '#050508',
            transform: hovered ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <div className="w-full space-y-2">
            {/* Fake new website mockup */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded" style={{ background: project.accentColor, opacity: 0.8 }} />
              <div className="h-3 w-24 rounded" style={{ background: project.accentColor, opacity: 0.4 }} />
              <div className="ml-auto flex gap-2">
                {[40, 32, 44].map((w, i) => (
                  <div key={i} className="h-2 rounded" style={{ width: w, background: 'rgba(0,212,255,0.2)' }} />
                ))}
              </div>
            </div>
            <div className="h-14 w-3/4 rounded neon-border" style={{ background: `${project.accentColor}15` }} />
            <div className="h-3 w-full rounded" style={{ background: 'rgba(0,212,255,0.1)' }} />
            <div className="h-3 w-5/6 rounded" style={{ background: 'rgba(0,212,255,0.07)' }} />
            <div className="h-3 w-4/6 rounded" style={{ background: 'rgba(0,212,255,0.05)' }} />
            <div className="mt-3 h-8 w-28 rounded neon-border flex items-center justify-center">
              <div className="h-2 w-16 rounded" style={{ background: project.accentColor, opacity: 0.7 }} />
            </div>
          </div>
          <div className="absolute bottom-2 right-3 font-mono text-[9px] tracking-widest uppercase" style={{ color: project.accentColor, opacity: 0.7 }}>// NACHHER</div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px transition-all duration-500 z-10"
          style={{
            left: hovered ? '0%' : '50%',
            background: `linear-gradient(to bottom, transparent, ${project.accentColor}, transparent)`,
            opacity: hovered ? 0 : 1,
          }}
        />

        {/* Hover instruction */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 pointer-events-none"
          style={{ opacity: hovered ? 0 : 1 }}
        >
          <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded font-mono text-[9px] text-neon/80 tracking-widest uppercase border border-neon/20">
            Hover für Ergebnis
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <div className="font-mono text-[10px] text-muted tracking-widest mb-3 uppercase">
          {project.id} · {project.label}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <div className="font-mono text-[9px] text-white/30 tracking-widest uppercase mb-1">Vorher</div>
            <p className="font-body text-xs text-muted leading-relaxed">{project.beforeDesc}</p>
          </div>
          <div>
            <div className="font-mono text-[9px] tracking-widest uppercase mb-1" style={{ color: project.accentColor, opacity: 0.8 }}>Nachher</div>
            <p className="font-body text-xs text-muted leading-relaxed">{project.afterDesc}</p>
          </div>
        </div>

        {/* Metric */}
        <div className="flex items-center justify-between border-t border-neon/10 pt-4">
          <div>
            <div className="font-display text-2xl font-black" style={{ color: project.accentColor }}>
              {project.metric}
            </div>
            <div className="font-mono text-[9px] text-muted tracking-widest uppercase mt-0.5">
              {project.metricLabel}
            </div>
          </div>
          <div className="font-mono text-[9px] text-neon/40 tracking-widest uppercase">
            Webglow · TechStag
          </div>
        </div>
      </div>

      {/* Bottom hover glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/0 to-transparent group-hover:via-neon/60 transition-all duration-500" />
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 bg-black circuit-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="label-tag mb-6">// WEBGLOW · WEBSITE-REDESIGN</div>
          <h2 className="section-title text-3xl md:text-5xl font-black text-silver mb-6">
            Websites die <span className="neon-text">konvertieren</span>
          </h2>
          <p className="font-body text-muted text-lg max-w-2xl mx-auto">
            Wir analysieren deinen digitalen Auftritt und bauen ihn neu —
            strategisch, modern, auf Anfragen optimiert.
            Die gezeigten Projekte sind Demo-Redesigns realer Branchen.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROJECTS.map(project => (
            <BeforeAfterCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA block */}
        <div className="relative glass-card rounded-2xl p-10 md:p-14 neon-border text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon" />

          <div className="relative">
            <div className="label-tag mb-6">// KOSTENLOSE ANALYSE</div>
            <h3 className="section-title text-2xl md:text-4xl font-black text-silver mb-4">
              Deine Website. <span className="neon-text">Neu gedacht.</span>
            </h3>
            <p className="font-body text-muted text-lg max-w-xl mx-auto mb-8">
              Wir analysieren deinen digitalen Auftritt kostenlos und zeigen dir konkret,
              was Anfragen und Umsatz kostet. Unverbindlich. Einmalig. Direkt.
            </p>
            <a
              href="/contact"
              className="neon-btn-fill inline-block cursor-pointer"
            >
              Jetzt kostenlose Demo anfragen
            </a>
            <div className="mt-6 font-mono text-[10px] text-muted tracking-widest uppercase">
              Antwort innerhalb von 24h · Keine Verpflichtung
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
