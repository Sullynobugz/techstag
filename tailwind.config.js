/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#050508',
        surface: '#0a0d14',
        raised: '#0f1420',
        border: '#1a2235',
        neon: '#00d4ff',
        'neon-dim': '#0096cc',
        'neon-dark': '#003a4d',
        silver: '#c0c8d8',
        muted: '#4a5568',
      },
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        body: ['Exo 2', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'neon-pulse': 'neonPulse 2.5s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 4s linear infinite',
        'scan': 'scan 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'circuit-draw': 'circuitDraw 2s ease forwards',
        'fade-up': 'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.7', filter: 'brightness(1.4)' },
        },
        neonFlicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.4' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.6' },
          '99%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        circuitDraw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        neon: '0 0 20px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.15)',
        'neon-sm': '0 0 10px rgba(0, 212, 255, 0.3)',
        'neon-lg': '0 0 40px rgba(0, 212, 255, 0.5), 0 0 100px rgba(0, 212, 255, 0.2)',
        'inner-neon': 'inset 0 0 30px rgba(0, 212, 255, 0.05)',
      },
    },
  },
  plugins: [],
}
