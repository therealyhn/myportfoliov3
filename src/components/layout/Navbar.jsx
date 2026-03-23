import { useEffect, useState } from 'react'
import logoLight from '../../assets/logo-light.png'
import logoDark from '../../assets/logo-dark.png'
import NavLinks from '../nav/NavLinks'
import ThemeToggle from '../nav/ThemeToggle'
import VersionsDropdown from '../nav/VersionsDropdown'
import MobileOverlay from '../nav/MobileOverlay'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-page/80 backdrop-blur-md border-b border-line/60'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="/" aria-label="Home" className="flex-shrink-0">
            <img src={logoLight} alt="Jovan Ljušić" className="dark:hidden h-12 w-auto" />
            <img src={logoDark}  alt="Jovan Ljušić" className="hidden dark:block h-12 w-auto" />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <NavLinks />
            <div className="flex items-center gap-2 pl-2 border-l border-line">
              <VersionsDropdown />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="w-9 h-9 grid place-items-center rounded-lg
                bg-surface text-ink ring-1 ring-line
                hover:ring-accent/40 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </button>
          </div>

        </div>
      </nav>

      <MobileOverlay open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
