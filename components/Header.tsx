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
      className={`fixed w-full z-50 transition-all duration-300 bg-black/95 backdrop-blur-md border-b border-neon/20 ${
        scrolled ? 'md:bg-black/95 md:backdrop-blur-md' : 'md:bg-transparent md:backdrop-blur-none md:border-b-0'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between pt-3 pb-0">

          {/* Logo */}
          <Link href="/" className="flex items-end group self-end">
            {/* Mobile: 65% Skalierung */}
            <div className="flex items-end gap-1 md:hidden">
              <div className="flex-shrink-0 overflow-hidden" style={{ width: 85, height: 58 }}>
                <img
                  src="/assets/logo-futuristic.jpg"
                  alt="TechStag"
                  style={{ width: 85, height: 'auto' }}
                  className="drop-shadow-[0_0_8px_rgba(0,212,255,0.4)] group-hover:drop-shadow-[0_0_14px_rgba(0,212,255,0.7)] transition-all duration-300"
                />
              </div>
              <div className="flex-shrink-0 overflow-hidden" style={{ width: 145, height: 31 }}>
                <img src="/assets/logo-futuristic.jpg" alt="" aria-hidden="true" style={{ width: 145, height: 'auto', marginTop: -100 }} />
              </div>
            </div>
            {/* Desktop: originale Größe */}
            <div className="hidden md:flex items-end gap-2">
              <div className="flex-shrink-0 overflow-hidden" style={{ width: 130, height: 89 }}>
                <img
                  src="/assets/logo-futuristic.jpg"
                  alt="TechStag"
                  style={{ width: 130, height: 'auto' }}
                  className="drop-shadow-[0_0_8px_rgba(0,212,255,0.4)] group-hover:drop-shadow-[0_0_14px_rgba(0,212,255,0.7)] transition-all duration-300"
                />
              </div>
              <div className="flex-shrink-0 overflow-hidden" style={{ width: 220, height: 48 }}>
                <img src="/assets/logo-futuristic.jpg" alt="" aria-hidden="true" style={{ width: 220, height: 'auto', marginTop: -154 }} />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: '/#services', label: 'Services' },
              { href: '/#portfolio', label: 'Portfolio' },
              { href: '/#produkte', label: 'Produkte' },
              { href: '/contact', label: 'Kontakt' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="nav-link font-mono text-xs tracking-widest text-muted hover:text-neon transition-colors uppercase"
              >
                {label}
              </a>
            ))}
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
          <div className="md:hidden border-t border-neon/20 py-4 flex flex-col">
            {[
              { href: '/#services', label: 'Services' },
              { href: '/#portfolio', label: 'Portfolio' },
              { href: '/#produkte', label: 'Produkte' },
              { href: '/contact', label: 'Kontakt' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-sm tracking-widest text-muted hover:text-neon transition-colors uppercase py-3 border-b border-neon/10 last:border-b-0"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
