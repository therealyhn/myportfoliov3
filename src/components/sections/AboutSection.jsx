import heroImg from '../../assets/hero.png'
import Button from '../ui/Button'
import useTranslation from '../../hooks/useTranslation'

const TECH = [
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="currentColor" strokeWidth="0" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.8" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.8" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'PHP',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
        <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: 'Sanity CMS',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 2c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm-1 3v2H8v2h3v2H8v2h4v-2h3v-2h-3V8h-1z" />
      </svg>
    ),
  },
  {
    name: 'React Native',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="currentColor" strokeWidth="0" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.8" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.8" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'Vite',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'REST APIs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    name: 'Git',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
  },
]

export default function AboutSection() {
  const { t } = useTranslation()

  const BADGES = [
    { key: 'about.badge.location' },
    { key: 'about.badge.experience' },
    { key: 'about.badge.openToWork' },
  ]

  return (
    <section id="about" className="py-20 lg:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            {t('about.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight">
            {t('about.heading')}
          </h2>
        </div>

        {/* Split */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left — bio */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Mobile only: image + badges + buttons side by side */}
            <div className="flex gap-4 items-start sm:hidden">
              <div className="relative flex-shrink-0 w-[calc(50%-8px)]">
                <div className="absolute -top-3 right-0 h-0.5 w-12 bg-accent" />
                <div
                  className="relative overflow-hidden w-full"
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src={heroImg}
                    alt="Jovan Ljušić"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 border-l-2 border-b-2 border-accent/50 pointer-events-none" />
                  <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-page/60 to-transparent pointer-events-none" />
                </div>
                <div className="absolute -bottom-3 left-0 h-0.5 w-6 bg-accent/50" />
              </div>
              <div className="flex flex-col gap-3 min-w-0 flex-1 pt-1">
                <div className="flex flex-col gap-1.5">
                  {BADGES.map(({ key }) => (
                    <span
                      key={key}
                      className="px-2.5 py-1 text-xs font-medium text-muted border-l-2 border-accent/30 bg-surface"
                    >
                      {t(key)}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <Button variant="primary" href="#contact" arrow>{t('about.cta.contact')}</Button>
                  <Button variant="ghost" href="/JovanLjusicCV.pdf" download>{t('about.cta.cv')}</Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-8 items-start">

              {/* Photo — sm/tablet shows inline, desktop hidden here (shown right) */}
              <div className="relative flex-shrink-0 hidden sm:block lg:hidden">
                <div className="absolute -top-3 right-0 h-0.5 w-12 bg-accent" />
                <div
                  className="relative overflow-hidden"
                  style={{ width: 'clamp(140px, 30vw, 200px)', aspectRatio: '3/4' }}
                >
                  <img
                    src={heroImg}
                    alt="Jovan Ljušić"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 border-l-2 border-b-2 border-accent/50 pointer-events-none" />
                  <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-page/60 to-transparent pointer-events-none" />
                </div>
                <div className="absolute -bottom-3 left-0 h-0.5 w-6 bg-accent/50" />
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                  {t('about.bio1')}
                </p>
                <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                  {t('about.bio2')}
                </p>
              </div>
            </div>

            {/* Badges — sm+ only (mobile shows them next to image) */}
            <div className="hidden sm:flex flex-wrap gap-2">
              {BADGES.map(({ key }) => (
                <span
                  key={key}
                  className="px-3 py-1.5 text-xs font-medium text-muted border-l-2 border-accent/30 bg-surface"
                >
                  {t(key)}
                </span>
              ))}
            </div>

            {/* CTA — sm+ only */}
            <div className="hidden sm:flex flex-wrap gap-3 pt-2">
              <Button variant="primary" href="#contact" arrow>{t('about.cta.contact')}</Button>
              <Button variant="ghost" href="/JovanLjusicCV.pdf" download>{t('about.cta.cv')}</Button>
            </div>
          </div>

          {/* Right — photo */}
          <div className="hidden lg:block w-full lg:w-[32%] shrink-0">
            <div className="relative">
              <div className="absolute -top-3 right-0 h-0.5 w-12 bg-accent" />
              <div className="relative overflow-hidden w-full" style={{ aspectRatio: '4/5' }}>
                <img
                  src={heroImg}
                  alt="Jovan Ljušić"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 border-l-2 border-b-2 border-accent/50 pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-page/60 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-3 left-0 h-0.5 w-6 bg-accent/50" />
            </div>
          </div>

        </div>

      </div>

      {/* Tech stack marquee — full bleed */}
      <div className="mt-16 overflow-hidden border-t border-b border-line py-6">
        <div className="flex animate-marquee w-max">
          {[...TECH, ...TECH, ...TECH, ...TECH].map(({ name, icon }, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 px-7 py-2 border-l border-line cursor-default"
            >
              <span className="w-5 h-5 flex-shrink-0 text-accent/50 group-hover:text-accent transition-colors duration-200">
                {icon}
              </span>
              <span className="text-sm font-medium text-muted group-hover:text-ink transition-colors duration-200 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
