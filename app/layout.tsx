import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechStag - Navigate the AI Forest with Expert Guidance',
  description: 'Transform your business with strategic AI solutions that cut through complexity. AI Strategy, Development, and Integration services.',
  keywords: 'AI consulting, artificial intelligence, AI strategy, AI development, AI integration, business transformation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}