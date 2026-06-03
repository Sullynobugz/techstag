'use client'

import { useEffect, useState } from 'react'

export default function CursorLight() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [visible])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        background: `radial-gradient(
          320px circle at ${pos.x}px ${pos.y}px,
          rgba(0, 212, 255, 0.07) 0%,
          rgba(0, 212, 255, 0.03) 35%,
          transparent 70%
        )`,
      }}
    />
  )
}
