import { useEffect, useRef, useState } from 'react'

const VERSIONS = [
  { label: 'v2', href: 'https://v2.jovanljusic.com' },
  { label: 'v1', href: 'https://v1.jovanljusic.com' },
]

export default function VersionsDropdown() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    if (!open) return
    function onDocClick(e) {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) setOpen(false)
    }
    function onKey(e) { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 px-3 h-9 rounded-lg text-sm
          bg-surface text-ink ring-1 ring-line
          hover:ring-accent/40 transition-all duration-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60
          active:scale-[0.95]"
      >
        Old ver.
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          ref={menuRef}
          role="menu"
          className="absolute right-0 mt-2 w-28 overflow-hidden rounded-lg
            bg-surface text-ink ring-1 ring-line shadow-lg
            animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {VERSIONS.map(({ label, href }) => (
            <li key={label} role="none">
              <a
                role="menuitem"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-center hover:bg-accent hover:text-white transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
