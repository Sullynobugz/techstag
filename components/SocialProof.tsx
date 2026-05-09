import React from 'react'

const PRODUCTS = [
  {
    id: 'chief',
    name: 'Chief',
    tagline: 'All-in-One Business Intelligence',
    desc: 'KI-Unternehmensberater der alle Daten kennt — CRM, Finanzen, Funnel Analytics in einer Plattform.',
    status: 'active',
    flagship: true,
    tags: ['AI Advisor', 'CRM', 'Analytics', 'SaaS'],
  },
  {
    id: 'spare',
    name: 'Spare',
    tagline: 'KI-Budgetmanager',
    desc: 'Persönliches Finanzmanagement mit KI-Analyse und smarten Sparempfehlungen.',
    status: 'active',
    tags: ['Finance', 'AI', 'Mobile'],
  },
  {
    id: 'quest',
    name: 'Quest',
    tagline: 'Gamified Productivity',
    desc: 'Produktivität durch Gamification — Aufgaben werden zu Quests.',
    status: 'active',
    tags: ['Productivity', 'Gamification'],
  },
  {
    id: 'clipzy',
    name: 'Clipzy',
    tagline: 'KI Video Clipping',
    desc: 'Automatische Short-Clip-Erstellung aus Long-Form-Videos mit KI.',
    status: 'active',
    tags: ['Video', 'AI', 'Creator'],
  },
  {
    id: 'guesswho',
    name: 'GuessWho',
    tagline: 'Viral Guessing Game',
    desc: 'Social-First Web-Game mit viralem Sharing-Mechanismus.',
    status: 'paused',
    tags: ['Game', 'Social'],
  },
  {
    id: 'learn2play',
    name: 'Learn2Play',
    tagline: 'Instrument lernen mit KI',
    desc: 'Personalisierter KI-Coach für Einsteiger auf Gitarre, Piano & Co.',
    status: 'paused',
    tags: ['EdTech', 'Music', 'AI'],
  },
]

export default function SocialProof() {
  const flagship = PRODUCTS.find(p => p.flagship)
  const rest = PRODUCTS.filter(p => !p.flagship)

  return (
    <section id="produkte" className="py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="label-tag mb-6">// OUR PORTFOLIO</div>
          <h2 className="section-title text-3xl md:text-5xl font-black text-silver mb-6">
            8+ <span className="neon-text">Produkte</span> in Entwicklung
          </h2>
          <p className="font-body text-muted text-lg max-w-2xl mx-auto">
            Wir bauen nicht für andere — wir bauen für uns. Und wenn es intern funktioniert, wird es SaaS.
          </p>
        </div>

        {/* Flagship: Chief */}
        {flagship && (
          <div className="relative glass-card rounded-2xl p-8 md:p-12 mb-8 neon-border overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="label-tag">FLAGSHIP</span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-neon/70 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon animate-neon-pulse inline-block" />
                    Live
                  </span>
                </div>
                <h3 className="section-title text-4xl md:text-5xl font-black text-silver mb-3">
                  {flagship.name}
                </h3>
                <div className="font-mono text-sm text-neon/70 mb-6 tracking-wide">
                  {flagship.tagline}
                </div>
                <p className="font-body text-muted leading-relaxed mb-8 text-lg">
                  {flagship.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {flagship.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] tracking-widest text-neon/60 border border-neon/20 px-3 py-1 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual placeholder */}
              <div className="relative h-48 md:h-64 rounded-xl bg-raised neon-border overflow-hidden">
                <div className="circuit-bg absolute inset-0 opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-6xl font-black text-neon/20 animate-neon-pulse">C</div>
                    <div className="font-mono text-[10px] text-neon/40 tracking-widest mt-2">CHIEF // EXECUTIVE SUITE</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
              </div>
            </div>

            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon" />
          </div>
        )}

        {/* Rest of products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map(({ id, name, tagline, desc, status, tags }) => (
            <div key={id} className="glass-card rounded-xl p-6 relative group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="section-title text-xl font-bold text-silver">{name}</h4>
                  <div className="font-mono text-[10px] text-neon/60 tracking-wide mt-1">{tagline}</div>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0 mt-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${status === 'active' ? 'bg-neon animate-neon-pulse' : 'bg-muted/50'}`} />
                  <span className="font-mono text-[9px] text-muted uppercase tracking-widest">
                    {status === 'active' ? 'Active' : 'Paused'}
                  </span>
                </div>
              </div>

              <p className="font-body text-sm text-muted leading-relaxed mb-5">{desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {tags.map(tag => (
                  <span key={tag} className="font-mono text-[9px] tracking-widest text-muted border border-border px-2 py-0.5 uppercase group-hover:border-neon/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/0 to-transparent group-hover:via-neon/40 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
