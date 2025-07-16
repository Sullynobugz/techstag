import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export const metadata = {
    title: 'About TechStag - AI Agency',
    description: 'Learn about TechStag\'s mission to guide businesses through AI transformation with expert consulting and development services.',
}

const team = [
    {
        name: 'Alex Thompson',
        role: 'CEO & AI Strategist',
        bio: 'Former AI lead at Fortune 500 companies with 10+ years in machine learning and business transformation.',
        image: '/api/placeholder/150/150'
    },
    {
        name: 'Dr. Sarah Kim',
        role: 'Chief Technology Officer',
        bio: 'PhD in Computer Science, specializing in deep learning and neural networks with 50+ published papers.',
        image: '/api/placeholder/150/150'
    },
    {
        name: 'Marcus Rodriguez',
        role: 'Head of Integration',
        bio: 'Enterprise architect with expertise in seamless AI integration across complex business systems.',
        image: '/api/placeholder/150/150'
    }
]

export default function AboutPage() {
    return (
        <main>
            <Header />
            <div className="pt-20">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-gray-50 to-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                About TechStag
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We're your guides through the AI forest, helping businesses navigate
                                complexity and unlock the transformative power of artificial intelligence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Our Mission
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    At TechStag, we believe AI shouldn't be intimidating or overwhelming.
                                    Like a skilled guide leading you through a dense forest, we help businesses
                                    navigate the complex AI landscape with confidence and clarity.
                                </p>
                                <p className="text-lg text-gray-600 mb-6">
                                    Our approach combines deep technical expertise with practical business
                                    acumen, ensuring that every AI solution we develop drives real,
                                    measurable results for your organization.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-2xl font-bold text-primary-600 mb-2">50+</div>
                                        <div className="text-gray-600">Projects Delivered</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-primary-600 mb-2">95%</div>
                                        <div className="text-gray-600">Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                                <h3 className="text-xl font-semibold mb-4">Why Choose TechStag?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Expert guidance through AI complexity
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Proven track record of success
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        End-to-end AI solutions
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Focus on business outcomes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Meet Our Team
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Experienced AI professionals dedicated to your success
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <div key={member.name} className="bg-white rounded-xl p-8 text-center shadow-lg">
                                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary-600 font-medium mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600">
                                        {member.bio}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </div>
            <Footer />
        </main>
    )
}