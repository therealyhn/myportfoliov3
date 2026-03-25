import { Link } from 'react-router-dom'

const LINKS = [
  { href: '/#projects', label: 'Projects', type: 'hash' },
  { href: '/#about', label: 'About', type: 'hash' },
  { href: '/#contact', label: 'Contact', type: 'hash' },
  { href: '/pricing', label: 'Pricing', type: 'route' },
]

function NavItem({ children, mobile = false }) {
  if (mobile) {
    return (
      <span className="group flex items-center  gap-3 text-base font-semibold text-ink hover:text-accent transition-colors duration-200 cursor-pointer">
        {children}
      </span>
    )
  }

  return (
    <span className="group relative flex items-center uppercase gap-1.5 py-1 text-sm font-medium text-muted hover:text-ink transition-colors duration-200 cursor-pointer">
      {children}
      <span className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-0
        bg-accent transition-all duration-300 group-hover:w-full" />
    </span>
  )
}

export default function NavLinks({ onClick, mobile = false }) {
  const base = mobile ? 'flex flex-col gap-5' : 'flex items-center gap-6'

  return (
    <ul className={base}>
      {LINKS.map(({ href, label, type }) => (
        <li key={label} onClick={onClick}>
          {type === 'hash' ? (
            <a href={href}>
              <NavItem mobile={mobile}>{label}</NavItem>
            </a>
          ) : (
            <Link to={href}>
              <NavItem mobile={mobile}>{label}</NavItem>
            </Link>
          )}
        </li>
      ))}

      {/* Resume */}
      <li onClick={onClick}>
        <a href="/JovanLjusicCV.pdf" download>
          <span className={
            mobile
              ? 'group flex items-center gap-3 uppercase text-base font-semibold text-accent cursor-pointer'
              : 'group relative flex items-center uppercase gap-1 py-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-200 cursor-pointer'
          }>
            {mobile && <span className="w-5 uppercase" />}
            Resume
            <svg className="w-3 h-3 opacity-60" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h8M6 2l4 4-4 4" />
            </svg>
          </span>
        </a>
      </li>
    </ul>
  )
}
