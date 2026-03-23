import { useEffect, useState } from 'react'
import heroImg from '../../assets/hero.png'

const TECH = [
  'React', 'Tailwind CSS', 'PHP', 'MySQL', 'Vite',
  'Git', 'Figma', 'JavaScript', 'REST API', 'CSS',
]

const fade = (ready, delay) => ({
  opacity: ready ? 1 : 0,
  transform: ready ? 'translateY(0)' : 'translateY(18px)',
  transition: 'opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s cubic-bezier(0.4,0,0.2,1)',
  transitionDelay: `${delay}ms`,
})

export default function HeroSection() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-4rem)] flex flex-col overflow-hidden"
    >

      {/* Ghost initials — background layer */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span
          className="font-black text-ink leading-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: 'clamp(12rem, 40vw, 36rem)', opacity: 0.055 }}
          aria-hidden="true"
        >
          JL
        </span>
      </div>

      {/* Vertical grid lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] xl:left-[8%] top-0 bottom-0 w-px bg-line/50" />
        <div className="absolute right-[5%] xl:right-[8%] top-0 bottom-0 w-px bg-line/50" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col">

        {/* Top bar */}
        <div
          className="flex items-center justify-between pt-8 lg:pt-10 text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-muted"
          style={fade(ready, 0)}
        >
          <span>01 / Portfolio</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            Available for work
          </span>
        </div>

        {/* Core grid */}
        <div className="flex-1 grid lg:grid-cols-[28px_1fr_auto] items-center gap-0 py-10 lg:py-0">

          {/* Left: vertical label */}
          <div
            className="hidden lg:flex items-center justify-center"
            style={fade(ready, 80)}
          >
            <span
              className="text-[16px] font-bold tracking-[0.35em] uppercase text-muted/60 whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Front-End Engineer
            </span>
          </div>

          {/* Center: text block */}
          <div className="lg:pl-10 xl:pl-14 max-w-2xl">

            {/* Name */}
            <div style={fade(ready, 120)}>
              <h1
                className="font-black tracking-tight leading-[0.88] mb-6"
                style={{ fontSize: 'clamp(3.8rem, 10vw, 8rem)' }}
              >
                <span className="block text-ink">Jovan</span>
                <span className="block text-accent">Ljusic</span>
              </h1>
            </div>

            {/* Role line */}
            <div className="flex items-center gap-4 mb-5" style={fade(ready, 220)}>
              <span className="h-px w-10 bg-accent flex-shrink-0" />
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted">
                Building for the web since 2021
              </p>
            </div>

            {/* Bio */}
            <p
              className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-[42ch]"
              style={fade(ready, 300)}
            >
              Fast, accessible, visually sharp — I craft frontends that hold up
              under real load, real users, and real scrutiny.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" style={fade(ready, 380)}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent/90 active:scale-[0.98] transition-all duration-200"
              >
                View Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                  viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-ink text-sm font-semibold rounded-sm ring-1 ring-line hover:ring-accent/40 active:scale-[0.98] transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div
            className="hidden lg:block pl-10 xl:pl-16"
            style={fade(ready, 160)}
          >
            <div className="relative">

              {/* Top accent bar */}
              <div className="absolute -top-3 right-0 h-0.5 w-12 bg-accent" />

              {/* Photo — sharp crop, editorial borders */}
              <div
                className="relative overflow-hidden"
                style={{ width: 'clamp(200px, 18vw, 280px)', aspectRatio: '3/4' }}
              >
                <img
                  src={heroImg}
                  alt="Jovan Ljušić"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
                {/* Left + bottom accent border */}
                <div className="absolute inset-0 border-l-2 border-b-2 border-accent/50 pointer-events-none" />
                {/* Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-page/60 to-transparent pointer-events-none" />
              </div>

              {/* Bottom accent bar */}
              <div className="absolute -bottom-3 left-0 h-0.5 w-6 bg-accent/50" />

              {/* Year label — rotated beside photo */}
              <div
                className="absolute -left-8 top-1/2 -translate-y-1/2 text-[16px] font-bold tracking-[0.3em] uppercase text-muted/50 whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
              >
                2024 — Present
              </div>
            </div>
          </div>

        </div>

        {/* Bottom metadata strip */}
        <div
          className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-6 lg:pb-8 text-[10px] sm:text-xs font-medium text-muted/70 tracking-wide"
          style={fade(ready, 460)}
        >
          <span className="flex items-center gap-1.5">
            <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M6 0C3.79 0 2 1.79 2 4c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5C5.17 5.5 4.5 4.83 4.5 4S5.17 2.5 6 2.5 7.5 3.17 7.5 4 6.83 5.5 6 5.5z" />
            </svg>
            Serbia · Remote
          </span>
          <span aria-hidden="true">·</span>
          <span>React · PHP · MySQL</span>
          <span aria-hidden="true">·</span>
          <span>2+ yrs experience</span>
          <span aria-hidden="true">·</span>
          <span>Open to freelance</span>
        </div>
      </div>

      {/* Tech marquee */}
      <div
        className="border-t border-line"
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.7s ease', transitionDelay: '540ms' }}
      >
        <div className="py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...TECH, ...TECH].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-6 text-sm font-medium text-muted">
                {item}
                <span className="text-line" aria-hidden="true">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
