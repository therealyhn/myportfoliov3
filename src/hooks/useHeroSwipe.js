import { useRef } from 'react'

export function useHeroSwipe(activeRef, panelsCount, goTo) {
  const touchStartX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    const curr = activeRef.current
    if (diff > 50) goTo(Math.min(curr + 1, panelsCount - 1))
    if (diff < -50) goTo(Math.max(curr - 1, 0))
    touchStartX.current = null
  }

  return { handleTouchStart, handleTouchEnd }
}
