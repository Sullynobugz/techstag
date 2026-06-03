import React from 'react'

export default function CTA() {
  return (
    <section id="kontakt" className="relative py-20 md:py-32 bg-black circuit-bg overflow-hidden">

      {/* Neon glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-neon/8 blur-2xl pointer-events-none animate-neon-pulse" />

      {/* Corner deco */}
      <div className="absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 border-neon/50" />
      <div className="absolute top-12 right-12 w-8 h-8 border-t-2 border-r-2 border-neon/50" />
      <div className="absolute bottom-12 left-12 w-8 h-8 border-b-2 border-l-2 border-neon/50" />
      <div className="absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 border-neon/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">

        <div className="label-tag mb-8">// BEREIT ANZUFANGEN?</div>

        <h2 className="section-title text-4xl md:text-6xl font-black leading-tight mb-8">
          <span className="text-silver">Dein nächstes Projekt.</span>
          <br />
          <span className="neon-text animate-neon-flicker">KI-First.</span>
        </h2>

        <p className="font-body text-lg text-muted leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
          Egal ob SaaS-Idee, Automatisierungsprojekt oder KI-Integration — lass uns reden.
          Kein Sales-Pitch, keine Agentur-Bürokratie. Direkt, schnell, ehrlich.
        </p>


        {/* Bottom tagline */}
        <div className="mt-10 md:mt-16 pt-8 border-t border-neon/10">
          <p className="font-mono text-[11px] text-muted/50 tracking-widest uppercase">
            Kein Overhead. Keine leeren Versprechen. Nur Ergebnisse die zählen.
          </p>
        </div>
      </div>
    </section>
  )
}
