import { useState, useEffect, useRef, useCallback } from 'react'
import { useHeroScrollHijack } from './useHeroScrollHijack'
import { useHeroKeyboard } from './useHeroKeyboard'
import { useHeroSwipe } from './useHeroSwipe'

export function useHeroPanels(panelsCount) {
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)

  useEffect(() => { activeRef.current = active }, [active])

  const goTo = useCallback((i) => setActive(i), [])

  const sectionRef = useHeroScrollHijack(activeRef, panelsCount, goTo)
  useHeroKeyboard(activeRef, panelsCount, goTo)
  const { handleTouchStart, handleTouchEnd } = useHeroSwipe(activeRef, panelsCount, goTo)

  return { active, goTo, sectionRef, handleTouchStart, handleTouchEnd }
}
