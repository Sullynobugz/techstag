'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SERVICES = [
  { value: 'webglow', label: 'Webglow — Website-Redesign' },
  { value: 'automation', label: 'Business-Automatisierung (n8n)' },
  { value: 'ai-dev', label: 'Individuelle KI-Entwicklung' },
  { value: 'chief', label: 'Chief — BI-Plattform Demo' },
  { value: 'consulting', label: 'KI-Beratung & Schulung' },
]

const STEPS = [
  { n: '01', title: 'Erstgespräch', desc: 'Wir analysieren deine Situation und Ziele — 30 Minuten, kostenlos.' },
  { n: '02', title: 'Strategie', desc: 'Konkreter Plan mit Zeitrahmen und Investition — präzise, nachvollziehbar.' },
  { n: '03', title: 'Umsetzung', desc: 'Wir bauen. Du siehst Ergebnisse, keine Zwischenberichte.' },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!formData.name || formData.name.length < 2) e.name = 'Name muss mindestens 2 Zeichen lang sein'
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Gültige E-Mail-Adresse erforderlich'
    if (!formData.service) e.service = 'Bitte ein Thema auswählen'
    if (!formData.message || formData.message.length < 10) e.message = 'Nachricht muss mindestens 10 Zeichen lang sein'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    await new Promise(r => setTimeout(r, 900))
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  if (isSubmitted) {
    return (
      <main className="bg-black min-h-screen">
        <Header />
        <div className="min-h-screen flex items-center justify-center circuit-bg px-6">
          <div className="scanlines absolute inset-0 pointer-events-none" />
          <div className="relative glass-card neon-border rounded-2xl p-12 max-w-md w-full text-center">
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon" />
            <div className="w-16 h-16 rounded-full border-2 border-neon flex items-center justify-center mx-auto mb-6 shadow-neon">
              <svg className="w-8 h-8 text-neon" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="label-tag mb-4">// ÜBERTRAGUNG ERFOLGREICH</div>
            <h2 className="section-title text-2xl font-black text-silver mb-4">Nachricht empfangen.</h2>
            <p className="font-body text-muted mb-8">Wir melden uns innerhalb von 24 Stunden. Versprochen.</p>
            <button onClick={() => setIsSubmitted(false)} className="neon-btn-fill cursor-pointer">
              Weitere Nachricht senden
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-black">
      <Header />

      <section className="relative min-h-screen pt-36 pb-24 circuit-bg overflow-hidden">
        <div className="scanlines absolute inset-0 pointer-events-none" />
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent animate-scan pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="label-tag mb-6 typing-cursor">// KONTAKT</div>
            <h1 className="section-title text-4xl md:text-6xl font-black text-silver mb-6">
              Lass uns <span className="neon-text glitch" data-text="reden.">reden.</span>
            </h1>
            <p className="font-body text-muted text-lg max-w-xl mx-auto">
              Kein Vertriebsgespräch. Kein Overhead. Direkt mit dem Gründer.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Form */}
            <div className="glass-card neon-border rounded-2xl p-8 relative">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon" />

              <div className="font-mono text-[10px] text-neon/50 tracking-widest mb-8">// ANFRAGE SENDEN</div>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-neon/70 uppercase mb-2">Name *</label>
                    <input
                      name="name" type="text" value={formData.name} onChange={handleChange}
                      placeholder="Max Mustermann"
                      className="contact-input"
                    />
                    {errors.name && <p className="mt-1.5 font-mono text-[10px] text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-neon/70 uppercase mb-2">E-Mail *</label>
                    <input
                      name="email" type="email" value={formData.email} onChange={handleChange}
                      placeholder="max@firma.de"
                      className="contact-input"
                    />
                    {errors.email && <p className="mt-1.5 font-mono text-[10px] text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-widest text-neon/70 uppercase mb-2">Unternehmen</label>
                  <input
                    name="company" type="text" value={formData.company} onChange={handleChange}
                    placeholder="Musterfirma GmbH (optional)"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-widest text-neon/70 uppercase mb-2">Thema *</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="contact-input">
                    <option value="">Thema auswählen</option>
                    {SERVICES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                  {errors.service && <p className="mt-1.5 font-mono text-[10px] text-red-400">{errors.service}</p>}
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-widest text-neon/70 uppercase mb-2">Nachricht *</label>
                  <textarea
                    name="message" rows={5} value={formData.message} onChange={handleChange}
                    placeholder="Was willst du erreichen? Wo drückt der Schuh?"
                    className="contact-input resize-none"
                  />
                  {errors.message && <p className="mt-1.5 font-mono text-[10px] text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-btn-fill disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? '// SENDE...' : 'Nachricht senden'}
                </button>
              </form>
            </div>

            {/* Info side */}
            <div className="space-y-8">
              <div>
                <div className="font-mono text-[10px] text-neon/50 tracking-widest mb-6">// WIE ES LÄUFT</div>
                <div className="space-y-4">
                  {STEPS.map(({ n, title, desc }) => (
                    <div key={n} className="glass-card rounded-xl p-6 group relative overflow-hidden">
                      <div className="flex items-start gap-4">
                        <div className="font-display text-3xl font-black text-neon/20 group-hover:text-neon/40 transition-colors flex-shrink-0 leading-none">
                          {n}
                        </div>
                        <div>
                          <h3 className="section-title text-sm font-bold text-silver mb-1">{title}</h3>
                          <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/0 to-transparent group-hover:via-neon/40 transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card neon-border rounded-xl p-6 relative">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon" />
                <div className="font-mono text-[10px] text-neon/50 tracking-widest mb-4">// DIREKT ERREICHBAR</div>
                <a
                  href="mailto:hallo@techstag.de"
                  className="font-mono text-sm text-neon hover:text-white transition-colors tracking-wide"
                >
                  hallo@techstag.de
                </a>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon animate-neon-pulse" />
                  <span className="font-mono text-[10px] text-muted tracking-widest uppercase">Antwort innerhalb 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
