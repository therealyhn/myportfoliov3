import { useState, useEffect } from 'react'

export function useCursorPos() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return pos
}
