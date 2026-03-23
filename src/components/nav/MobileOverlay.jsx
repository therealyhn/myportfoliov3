import logoLight from '../../assets/logo-light.png'
import logoDark from '../../assets/logo-dark.png'
import useScrollLock from '../../hooks/useScrollLock'
import NavLinks from './NavLinks'
import VersionsDropdown from './VersionsDropdown'

export default function MobileOverlay({ open, onClose }) {
  useScrollLock(open)

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
          <img src={logoDark}  alt="Logo" className="hidden dark:block h-12 w-auto" />
        </a>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-9 h-9 grid place-items-center rounded-lg
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

        <div className="mt-8 pt-6 border-t border-line">
          <p className="text-xs uppercase tracking-widest text-muted mb-3">Old versions</p>
          <VersionsDropdown />
        </div>
      </div>
    </div>
  )
}
