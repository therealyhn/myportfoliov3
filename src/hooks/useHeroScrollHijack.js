import { useEffect, useRef } from 'react'

/**
 * Hijacks wheel scroll to advance hero panels.
 * Releases to normal page scroll only after the last panel + animation buffer.
 */
export function useHeroScrollHijack(activeRef, panelsCount, goTo) {
  const sectionRef = useRef(null)
  const scrollLockedRef = useRef(false)
  const pageScrollBlockedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onWheel = (e) => {
      if (window.scrollY > 0) return

      const goingDown = e.deltaY > 0
      const goingUp = e.deltaY < 0
      const curr = activeRef.current

      if (scrollLockedRef.current) {
        e.preventDefault()
        return
      }

      if (pageScrollBlockedRef.current) {
        e.preventDefault()
        return
      }

      if (goingDown && curr < panelsCount - 1) {
        e.preventDefault()
        scrollLockedRef.current = true
        const next = curr + 1
        goTo(next)
        setTimeout(() => {
          scrollLockedRef.current = false
          if (next === panelsCount - 1) {
            pageScrollBlockedRef.current = true
            setTimeout(() => { pageScrollBlockedRef.current = false }, 500)
          }
        }, 1000)
      } else if (goingUp && curr > 0) {
        e.preventDefault()
        scrollLockedRef.current = true
        goTo(curr - 1)
        setTimeout(() => { scrollLockedRef.current = false }, 1000)
      }
    }

    section.addEventListener('wheel', onWheel, { passive: false })
    return () => section.removeEventListener('wheel', onWheel)
  }, [activeRef, panelsCount, goTo])

  return sectionRef
}
