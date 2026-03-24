import { useThemeContext } from '../../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useThemeContext()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg
        bg-transparent text-ink
        hover:text-accent transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60
        active:scale-[0.95] ${className}`}
    >
      {isDark ? (
        // Sun
        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        // Moon
        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
        </svg>
      )}
    </button>
  )
}
