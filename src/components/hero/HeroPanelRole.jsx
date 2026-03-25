import useTranslation from '../../hooks/useTranslation'

const TAGS = [
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="currentColor" strokeWidth="0" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.8" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.8" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'PHP',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
        <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: 'Vite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      </svg>
    ),
  },
  {
    name: 'REST API',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
]

const fadeIn = (active, delay) => ({
  opacity: active ? 1 : 0,
  transform: active ? 'translateY(0)' : 'translateY(12px)',
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
})

export default function HeroPanelRole({ active }) {
  const { t } = useTranslation()

  return (
    <div className="w-screen h-full flex-shrink-0 relative flex flex-col">
      <div className="relative flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-7xl mx-auto w-full pb-14">
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted/50 mb-8" style={fadeIn(active, 100)}>
          02 / 03
        </p>

        <div
          style={{
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s',
          }}
        >
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-accent mb-5">
            {t('hero.role')}
          </p>
          <h2
            className="font-black text-ink tracking-tight leading-[0.88]"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
          >
            {t('hero.building')}<br />
            <span className="text-muted/35">2024</span>
          </h2>
        </div>

        <div
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5"
          style={fadeIn(active, 500)}
        >
          {TAGS.map(({ name, icon }) => (
            <div
              key={name}
              className="group flex items-center gap-2.5 px-3 py-2.5 border-l-2 border-accent/20 hover:border-accent hover:bg-accent/5 cursor-default transition-all duration-200"
            >
              <span className="w-4 h-4 flex-shrink-0 text-accent/50 group-hover:text-accent transition-colors duration-200">
                {icon}
              </span>
              <span className="text-xs font-medium text-muted group-hover:text-ink transition-colors duration-200 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
