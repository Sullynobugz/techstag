import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-full h-full'
  }

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image
        src="/assets/techstag-logo.png"
        alt="TechStag Logo"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}