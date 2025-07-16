import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import SocialProof from '@/components/SocialProof'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  )
}