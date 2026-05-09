import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TechStag — AI-Powered Software. Built to Scale.',
  description: 'Wir bauen KI-Produkte die wirklich funktionieren. Chief, Spare, Quest und mehr.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}