import { useLang } from '../../context/LangContext'

export default function LangToggle() {
  const { lang, toggle } = useLang()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === 'en' ? 'Switch to Serbian' : 'Prebaci na engleski'}
      className="flex items-center px-2 py-1 text-xs font-semibold ring-1 ring-line hover:ring-accent/40 transition-colors duration-200"
    >
      <span className={lang === 'en' ? 'text-ink' : 'text-muted/40'}>EN</span>
      <span className="text-muted/30 mx-1">/</span>
      <span className={lang === 'sr' ? 'text-ink' : 'text-muted/40'}>SR</span>
    </button>
  )
}
