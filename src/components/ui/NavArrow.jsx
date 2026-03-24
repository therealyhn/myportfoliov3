export default function NavArrow({ direction, disabled, onClick, label }) {
  const isNext = direction === 'next'

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-line bg-page/80 backdrop-blur-sm text-ink hover:ring-accent/50 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
      aria-label={label ?? (isNext ? 'Next' : 'Previous')}
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
        {isNext
          ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
          : <path strokeLinecap="round" strokeLinejoin="round" d="M10 3L5 8l5 5" />
        }
      </svg>
    </button>
  )
}
