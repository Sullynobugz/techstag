import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'AI Services - TechStag',
  description: 'Comprehensive AI services including strategy, development, and integration solutions for your business transformation.',
}

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <div className="bg-gradient-to-br from-gray-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Services That Drive Results
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic planning to full implementation, we provide end-to-end AI solutions 
              tailored to your business needs.
            </p>
          </div>
        </div>
        <Services />
        <CTA />
      </div>
      <Footer />
    </main>
  )
}