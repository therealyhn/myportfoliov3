import { useState, useEffect } from 'react'
import { useHeroPanels } from '../../hooks/useHeroPanels'
import { useCursorPos } from '../../hooks/useCursorPos'
import HeroCursorGlow from '../hero/HeroCursorGlow'
import HeroPanelName from '../hero/HeroPanelName'
import HeroPanelRole from '../hero/HeroPanelRole'
import HeroPanelBio from '../hero/HeroPanelBio'
import HeroPanelNav from '../hero/HeroPanelNav'

const PANELS_COUNT = 3

export default function HeroSection() {
  const [ready, setReady] = useState(false)
  const { active, goTo, sectionRef, handleTouchStart, handleTouchEnd } = useHeroPanels(PANELS_COUNT)
  const cursorPos = useCursorPos()

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[calc(100svh-4rem)] overflow-hidden flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.5s ease' }}
    >
      <HeroCursorGlow pos={cursorPos} />

      {/* Vertical grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] xl:left-[8%] top-0 bottom-0 w-px bg-line/50" />
        <div className="absolute right-[5%] xl:right-[8%] top-0 bottom-0 w-px bg-line/50" />
      </div>

      {/* Panels wrapper */}
      <div className="relative flex-1 overflow-hidden">
        <div
          className="absolute top-0 left-0 bottom-0 flex"
          style={{
            transform: `translateX(-${active * 100}vw)`,
            transition: 'transform 0.75s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <HeroPanelName active={active === 0} />
          <HeroPanelRole active={active === 1} />
          <HeroPanelBio active={active === 2} />
        </div>

        <HeroPanelNav
          active={active}
          panelsCount={PANELS_COUNT}
          onPrev={() => goTo(Math.max(active - 1, 0))}
          onNext={() => goTo(Math.min(active + 1, PANELS_COUNT - 1))}
          goTo={goTo}
        />
      </div>

    </section>
  )
}
