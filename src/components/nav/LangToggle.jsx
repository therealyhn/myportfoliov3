import { useLang } from '../../context/LangContext'

export default function LangToggle() {
  const { lang, toggle } = useLang()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === 'en' ? 'Switch to Serbian' : 'Prebaci na engleski'}
      className="inline-flex items-center justify-center h-9 px-3 rounded-sm text-sm font-medium
        bg-surface text-ink ring-1 ring-line
        hover:ring-accent/40 hover:text-accent transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60
        active:scale-[0.95]"
    >
      <span className={lang === 'en' ? 'text-ink dark:text-white' : 'text-muted/50'}>EN</span>
      <span className="text-line mx-1.5">|</span>
      <span className={lang === 'sr' ? 'text-ink dark:text-white' : 'text-muted/50'}>SR</span>
    </button>
  )
}
