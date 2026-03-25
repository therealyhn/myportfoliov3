import logoLight from '../../assets/logo-light.png'
import logoDark from '../../assets/logo-dark.png'
import useScrollLock from '../../hooks/useScrollLock'
import NavLinks from './NavLinks'
import { useLang } from '../../context/LangContext'

const VERSIONS = [
  { label: 'v2', href: 'https://v2.jovanljusic.com' },
  { label: 'v1', href: 'https://v1.jovanljusic.com' },
]

export default function MobileOverlay({ open, onClose }) {
  useScrollLock(open)
  const { lang, toggle } = useLang()

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[2000] bg-page text-ink flex flex-col"
      role="dialog"
      aria-modal="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-line">
        <a href="/" aria-label="Home" onClick={onClose}>
          <img src={logoLight} alt="Logo" className="dark:hidden h-12 w-auto" />
          <img src={logoDark} alt="Logo" className="hidden dark:block h-12 w-auto" />
        </a>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-9 h-9 grid place-items-center rounded-sm
            bg-surface text-ink ring-1 ring-line hover:ring-accent/40 transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div className="flex-1 overflow-y-auto px-4 pt-8 pb-10">
        <NavLinks onClick={onClose} mobile />
      </div>

      {/* Footer */}
      <div className="px-4 py-5 border-t border-line flex items-center justify-between">
        {/* Lang toggle */}
        <button
          type="button"
          onClick={toggle}
          aria-label={lang === 'en' ? 'Switch to Serbian' : 'Prebaci na engleski'}
          className="inline-flex items-center justify-center h-9 px-3 rounded-sm text-sm font-medium
            bg-surface text-ink ring-1 ring-line
            hover:ring-accent/40 hover:text-accent transition-all duration-200
            active:scale-[0.95]"
        >
          <span className={lang === 'en' ? 'text-ink dark:text-white' : 'text-muted/50'}>EN</span>
          <span className="text-line mx-1.5">|</span>
          <span className={lang === 'sr' ? 'text-ink dark:text-white' : 'text-muted/50'}>SR</span>
        </button>

        {/* Old versions — flat links */}
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted uppercase tracking-widest mr-2">Old ver.</span>
          {VERSIONS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-sm text-sm font-medium
                bg-surface text-ink ring-1 ring-line
                hover:ring-accent/40 hover:text-accent transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
