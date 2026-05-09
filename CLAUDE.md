# TechStag — Dachmarke für KI-Dienstleistungen

## Was diese App ist
TechStag ist die übergeordnete Marke und Plattform für alle KI-Dienstleistungen. Unter diesem Dach laufen:

1. **Chief** — Flagship-SaaS-Produkt (All-in-One Business Intelligence, ~1.000€/Monat pro Unternehmen)
2. **Webglow** — Website-Redesign-Dienstleistungen für Kunden (KI-gestützt)
3. **KI-Beratung & Schulungen** — Implementierung, Automatisierung, ggf. AZAV-Zertifizierung für geförderte Weiterbildungen

**Rolle der Website**: Haupt-Marketingkanal und Vertriebsplattform. Generiert Leads für Chief und die Agenturdienstleistungen. Conversion-optimiert mit klaren CTAs pro Produkt/Service.

**Zielkunden**: KMU (10–100 MA) die KI-Potenzial erkennen aber nicht wissen wo anfangen — entweder als Chief-Kunden oder als Beratungskunden.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Animationen**: Framer Motion
- **Deployment**: (Vercel empfohlen)

## Aktueller Stand
Vollständig fertige statische Marketing-Website. Alle vier Seiten (Homepage, Services, About, Contact) mit Komponenten implementiert. Kontaktformular vorhanden (Frontend-only, kein Backend-Submit). Responsives Layout, SEO-Metadaten.

## Architektur
```
techstag/
├── app/
│   ├── page.tsx          # Homepage (Header, Hero, Services, SocialProof, CTA, Footer)
│   ├── layout.tsx        # Root Layout + Metadaten
│   ├── globals.css
│   ├── about/            # About-Seite
│   ├── services/         # Services-Detail-Seite
│   └── contact/          # Kontakt-Formular
├── components/
│   ├── Header.tsx        # Navigation
│   ├── Hero.tsx          # Hero-Sektion
│   ├── Services.tsx      # Leistungsübersicht
│   ├── SocialProof.tsx   # Testimonials/Vertrauen
│   ├── CTA.tsx           # Call-to-Action
│   ├── Footer.tsx
│   └── Logo.tsx
└── public/               # Statische Assets
```

## Dev-Befehle
```bash
npm install
npm run dev    # localhost:3000
npm run build  # Production Build
npm run start  # Production Server
npm run lint   # ESLint
```

## Nächste Schritte
1. **Kontaktformular-Backend**: Form-Submit an E-Mail-Service (Resend, SendGrid) oder n8n
2. **Blog-Sektion**: Artikel zu KI-Themen für SEO
3. **Case Studies**: Konkrete Projekterfolge zeigen
4. **Analytics**: Plausible oder Google Analytics einbinden
5. **Echter Content**: Texte, Referenzen und Team-Infos mit echten Daten füllen
6. **Domain + Deploy**: Auf Vercel deployen, Domain verknüpfen

## Bekannte Probleme / Technische Schulden
- Kontaktformular sendet nichts — kein Backend oder Form-Service eingebunden
- Content ist Placeholder — muss mit echten Agentur-Infos gefüllt werden
- Next.js 14 (nicht auf 15/16 upgraded)
- Keine Tests vorhanden

## Wichtige Entscheidungen & Konventionen
- Next.js App Router für moderne React-Architektur
- Framer Motion für subtile Animationen (Scroll-Reveal, Hover-Effekte)
- Tailwind CSS für schnelle Anpassbarkeit
- Statische Website — kein Backend nötig für reine Marketing-Seite


---

## Entwicklungslog & Nächste Schritte

> **Anweisung für Claude Code**: Halte diesen Abschnitt nach jeder Session aktuell.
> - **Nach Änderungen**: Kurzen Log-Eintrag hinzufügen (Datum + was gemacht + warum)
> - **Nächste Schritte**: Immer nach Rücksprache mit dem Nutzer definieren — nie eigenständig befüllen
> - **"Mach weiter"**: Den obersten offenen Punkt aus "Nächste Schritte" aufgreifen und umsetzen, dann Log aktualisieren und neue Schritte vorschlagen

### Nächste Schritte
<!-- Priorisierte TODO-Liste — wird nach Rücksprache mit dem Nutzer befüllt -->
- [ ] (noch nicht definiert — bitte kurz besprechen)

### Log
<!-- Neueste Einträge zuerst -->
| Datum | Was & Warum |
|-------|-------------|
| 2026-05-07 | CLAUDE.md angelegt — Projektdokumentation initialisiert |


---

## Git-Konvention

Nach jeder größeren Änderung wird committed — niemals ungesicherte Arbeit liegenlassen.

**Wann committen:** Nach jedem abgeschlossenen Feature, Bugfix, Refactoring oder bevor die Session endet.

**Commit-Message Format:**
```
<typ>: <kurze Beschreibung was & warum>
Typen: feat / fix / refactor / docs / chore
```

**Für Claude Code:** Nach jeder größeren Änderung eigenständig committen. Staging selektiv — keine .env, keine Secrets. Nie blind `git add -A`.
