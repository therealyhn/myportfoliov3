import { useEffect } from 'react'

export function useHeroKeyboard(activeRef, panelsCount, goTo) {
  useEffect(() => {
    const onKey = (e) => {
      const curr = activeRef.current
      if (e.key === 'ArrowRight') goTo(Math.min(curr + 1, panelsCount - 1))
      if (e.key === 'ArrowLeft') goTo(Math.max(curr - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeRef, panelsCount, goTo])
}
