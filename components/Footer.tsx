import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-neon/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded overflow-hidden ring-1 ring-neon/30">
                <img src="/assets/logo-futuristic.jpg" alt="TechStag" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-sm font-bold tracking-widest text-neon uppercase">TechStag</span>
            </div>
            <p className="font-body text-sm text-muted leading-relaxed max-w-xs">
              KI-First Software Studio. Wir bauen Produkte die wirklich funktionieren.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-mono text-[10px] text-muted/60 tracking-widest uppercase mb-5">Produkte</div>
            <ul className="space-y-3">
              {['Chief', 'Spare', 'Quest', 'Clipzy'].map(name => (
                <li key={name}>
                  <span className="font-mono text-xs text-muted hover:text-neon transition-colors cursor-pointer">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] text-muted/60 tracking-widest uppercase mb-5">Kontakt</div>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hallo@techstag.de" className="font-mono text-xs text-muted hover:text-neon transition-colors">
                  hallo@techstag.de
                </a>
              </li>
              <li>
                <a href="https://github.com/sullynobugz" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted hover:text-neon transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neon/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-muted/50 tracking-widest uppercase">
            © {new Date().getFullYear()} TechStag — All Systems Go.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-neon animate-neon-pulse" />
            <span className="font-mono text-[10px] text-neon/60 tracking-widest uppercase">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
