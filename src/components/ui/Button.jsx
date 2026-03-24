const VARIANTS = {
  primary: 'group inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent/90 active:scale-[0.98] transition-all duration-200',
  ghost: 'inline-flex items-center gap-2 px-6 py-3 text-ink text-sm font-semibold rounded-sm ring-1 ring-line hover:ring-accent/40 active:scale-[0.98] transition-all duration-200',
}

export default function Button({ variant = 'ghost', href, arrow = false, children, ...props }) {
  const className = VARIANTS[variant]

  const content = (
    <>
      {children}
      {arrow && (
        <svg
          className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
          viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      )}
    </>
  )

  if (href) {
    return <a href={href} className={className} {...props}>{content}</a>
  }

  return <button type="button" className={className} {...props}>{content}</button>
}
