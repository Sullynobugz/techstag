'use client'

import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "TechStag transformed our operations with AI solutions that actually work. Their strategic approach cut through the hype and delivered real results.",
    author: "Sarah Chen",
    title: "CTO, InnovateCorp",
    company: "Fortune 500 Technology Company"
  },
  {
    quote: "The team's expertise in AI integration saved us months of trial and error. They navigated the complexity so we could focus on our business.",
    author: "Michael Rodriguez",
    title: "VP of Operations",
    company: "Global Manufacturing Leader"
  }
]

const clientLogos = [
  { name: "TechFlow", width: "120" },
  { name: "DataSync", width: "100" },
  { name: "CloudVision", width: "140" },
  { name: "SmartOps", width: "110" },
  { name: "AICore", width: "90" }
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div key={logo.name} className="text-gray-400 font-bold text-lg">
                {logo.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real partnerships
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary-600 mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-primary-600 font-medium">{testimonial.title}</div>
                <div className="text-gray-500 text-sm">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}