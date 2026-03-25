import heroImg from '../../assets/hero.png'
import Button from '../ui/Button'
import useTranslation from '../../hooks/useTranslation'

const fadeIn = (active, delay) => ({
  opacity: active ? 1 : 0,
  transform: active ? 'translateY(0)' : 'translateY(12px)',
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
})

export default function HeroPanelBio({ active }) {
  const { t } = useTranslation()

  const BADGES = [
    {
      key: 'hero.badge.location',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      key: 'hero.badge.experience',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      key: 'hero.badge.openToWork',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      ),
    },
  ]

  return (
    <div className="w-screen h-full flex-shrink-0 relative flex flex-col overflow-y-auto">
      <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 justify-start lg:justify-center px-8 sm:px-16 lg:px-24 max-w-7xl mx-auto w-full py-10 lg:py-0 pb-14">

        <div className="flex-1 max-w-xl">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted/50 mb-8" style={fadeIn(active, 100)}>
            03 / 03
          </p>

          <p
            className="text-muted text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10 font-light"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s',
            }}
          >
            {t('hero.bio')}
          </p>

          <div className="flex flex-wrap gap-3 mb-10" style={fadeIn(active, 400)}>
            <Button variant="primary" href="#projects" arrow>{t('hero.viewWork')}</Button>
            <Button variant="ghost" href="#contact">{t('hero.getInTouch')}</Button>
          </div>

          <div
            className="flex flex-wrap gap-1.5"
            style={{ opacity: active ? 1 : 0, transition: 'opacity 0.6s ease 0.6s' }}
          >
            {BADGES.map(({ key, icon }) => (
              <div
                key={key}
                className="group flex items-center gap-2.5 px-3 py-2.5 border-l-2 border-accent/20 hover:border-accent hover:bg-accent/5 cursor-default transition-all duration-200"
              >
                <span className="w-4 h-4 flex-shrink-0 text-accent/50 group-hover:text-accent transition-colors duration-200">
                  {icon}
                </span>
                <span className="text-xs font-medium text-muted group-hover:text-ink transition-colors duration-200 whitespace-nowrap">
                  {t(key)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div
          className="hidden lg:block flex-shrink-0"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? 'translateX(0)' : 'translateX(32px)',
            transition: 'opacity 0.9s cubic-bezier(0.4,0,0.2,1) 0.35s, transform 0.9s cubic-bezier(0.4,0,0.2,1) 0.35s',
          }}
        >
          <div className="relative">
            <div className="absolute -top-3 right-0 h-0.5 w-12 bg-accent" />
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
              <div className="absolute inset-0 border-l-2 border-b-2 border-accent/50 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-page/60 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-3 left-0 h-0.5 w-6 bg-accent/50" />
          </div>
        </div>

      </div>
    </div>
  )
}
