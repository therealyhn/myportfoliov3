import { useState } from 'react'
import logoNoText from '../../assets/logo-no-text.png'

const fadeIn = (active, delay) => ({
  opacity: active ? 1 : 0,
  transform: active ? 'translateY(0)' : 'translateY(12px)',
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
})

export default function HeroPanelName({ active }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="w-screen h-full flex-shrink-0 relative flex flex-col">
      {/* Ghost logo */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src={logoNoText}
          alt=""
          aria-hidden="true"
          className="w-[clamp(26rem,75vw,72rem)] opacity-[0.08]"
        />
      </div>

      <div className="relative flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-7xl mx-auto w-full pb-14">
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted/50 mb-8" style={fadeIn(active, 100)}>
          01 / 03
        </p>

        <h1
          className="font-black leading-[0.85] cursor-default select-none"
          style={{
            fontSize: 'clamp(4rem, 13vw, 11rem)',
            letterSpacing: hovered ? '0.06em' : '-0.02em',
            transition: 'letter-spacing 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(28px)',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className="block text-ink">Jovan</span>
          <span className="block text-accent">Ljusic</span>
        </h1>

        <div className="mt-8 flex items-center gap-2.5" style={fadeIn(active, 450)}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Available for work
          </span>
        </div>
      </div>
    </div>
  )
}
