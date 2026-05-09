'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-neon/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded overflow-hidden ring-1 ring-neon/30 group-hover:ring-neon/70 transition-all group-hover:shadow-neon-sm">
              <img src="/assets/logo-futuristic.jpg" alt="TechStag" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-lg font-bold tracking-widest text-neon uppercase">
              TechStag
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: '#produkte', label: 'Produkte' },
              { href: '#services', label: 'Services' },
              { href: '#kontakt', label: 'Kontakt' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-mono text-xs tracking-widest text-muted hover:text-neon transition-colors uppercase"
              >
                {label}
              </a>
            ))}
            <a href="#kontakt" className="neon-btn text-xs">
              Projekt starten
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-muted hover:text-neon transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü öffnen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neon/20 py-6 flex flex-col gap-4">
            {[
              { href: '#produkte', label: 'Produkte' },
              { href: '#services', label: 'Services' },
              { href: '#kontakt', label: 'Kontakt' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-xs tracking-widest text-muted hover:text-neon transition-colors uppercase"
              >
                {label}
              </a>
            ))}
            <a href="#kontakt" className="neon-btn text-xs text-center mt-2" onClick={() => setIsMenuOpen(false)}>
              Projekt starten
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
