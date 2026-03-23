import { Link } from 'react-router-dom'

const LINKS = [
  { href: '/#projects', label: 'Projects', type: 'hash' },
  { href: '/#about',    label: 'About',    type: 'hash' },
  { href: '/#contact',  label: 'Contact',  type: 'hash' },
  { href: '/pricing',   label: 'Pricing',  type: 'route' },
]

function NavItem({ children, className = '' }) {
  return (
    <span className={`group relative py-1 text-sm font-medium text-muted
      hover:text-ink transition-colors duration-200 cursor-pointer ${className}`}>
      {children}
      <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-0
        bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
    </span>
  )
}

export default function NavLinks({ onClick, mobile = false }) {
  const base = mobile
    ? 'flex flex-col gap-5'
    : 'flex items-center gap-6'

  return (
    <ul className={base}>
      {LINKS.map(({ href, label, type }) => (
        <li key={label} onClick={onClick}>
          {type === 'hash' ? (
            <a href={href}>
              <NavItem>{label}</NavItem>
            </a>
          ) : (
            <Link to={href}>
              <NavItem>{label}</NavItem>
            </Link>
          )}
        </li>
      ))}

      {/* Resume download */}
      <li onClick={onClick}>
        <a href="/JovanLjusicCV.pdf" download>
          <NavItem>Resume</NavItem>
        </a>
      </li>
    </ul>
  )
}
