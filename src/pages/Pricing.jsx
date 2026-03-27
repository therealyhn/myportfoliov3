import { useEffect } from 'react'
import SEO from '../components/shared/SEO'
import Navbar from '../components/layout/Navbar'
import Button from '../components/ui/Button'
import useTranslation from '../hooks/useTranslation'
import { useLang } from '../context/LangContext'

// ── Data ──────────────────────────────────────────────────────────────────────

const WEBSITES = [
  {
    name: 'Standard',
    badge: {
      en: 'Marketing site, landing page',
      sr: 'Marketing sajt, landing page',
    },
    price: '€399',
    oldPrice: '€499',
    features: {
      en: [
        'Up to 5 pages',
        'Responsive design',
        'Sanity CMS (predefined schemas)',
        'Basic SEO (meta, OG tags)',
        'Contact form / email integration',
        '1 month post-delivery support',
      ],
      sr: [
        'Do 5 stranica',
        'Responsive dizajn',
        'Sanity CMS (predefinisane šeme)',
        'Osnovna SEO optimizacija (meta, OG tagovi)',
        'Kontakt forma / email integracija',
        '1 mesec podrške po isporuci',
      ],
    },
  },
  {
    name: 'Pro',
    badge: {
      en: 'For serious sites — multiple pages, store, blog',
      sr: 'Za ozbiljnije sajtove — više stranica, prodavnica, blog',
    },
    price: '€899',
    oldPrice: '€1,199',
    highlight: true,
    features: {
      en: [
        'Unlimited pages',
        'Admin panel — update content yourself, no developer needed',
        'Blog, galleries, sales pages',
        'Animations and interactions',
        'Complete SEO optimization',
        'Fast loading on every device',
        '3 months post-delivery support',
      ],
      sr: [
        'Neograničen broj stranica',
        'Admin panel — menjate sadržaj sami, bez programera',
        'Blog, galerije, prodajne stranice',
        'Animacije i interakcije',
        'Kompletna SEO optimizacija',
        'Brzo učitavanje na svakom uređaju',
        '3 meseca podrške po isporuci',
      ],
    },
  },
]

const APPS = [
  {
    name: 'Web App',
    badge: {
      en: 'Dashboard, auth, custom logic',
      sr: 'Dashboard, autentifikacija, custom logika',
    },
    oldPrice: '€1,499',
    price: '€1,249',
    features: {
      en: [
        'React + PHP/MySQL backend',
        'Auth system (login, registration, roles)',
        'Admin dashboard and data management',
        'REST API design',
        'Integration with external services',
      ],
      sr: [
        'React + PHP/MySQL backend',
        'Auth sistem (login, registracija, uloge)',
        'Admin dashboard i upravljanje podacima',
        'REST API dizajn',
        'Integracija sa eksternim servisima',
      ],
    },
  },
  {
    name: 'Mobile App',
    badge: {
      en: 'iOS + Android',
      sr: 'iOS + Android',
    },
    oldPrice: '€1,999',
    price: '€1,749',
    features: {
      en: [
        'React Native (Expo)',
        'iOS + Android from one codebase',
        'Auth and user management',
        'Push notifications',
        'API integration',
      ],
      sr: [
        'React Native (Expo)',
        'iOS + Android iz jedne codebase',
        'Auth i user management',
        'Push notifikacije',
        'API integracija',
      ],
    },
  },
]

const MAINTENANCE = [
  {
    name: 'Pay-as-you-go',
    badge: {
      en: 'No commitment — pay only for what gets done',
      sr: 'Bez obaveze — plaćaš samo ono što se uradi',
    },
    price: '€40',
    per: '/h',
    features: {
      en: [
        'Open a task when needed — bug fix, change, new feature',
        'Every task confirmed before work begins',
        'Transparent time log per task',
        'Response within 24h on business days',
      ],
      sr: [
        'Otvori task kad zatreba — bug fix, promena, nova funkcija',
        'Svaki task potvrđen pre početka rada',
        'Transparentan vremenski log po zadatku',
        'Odgovor u roku od 24h radnim danom',
      ],
    },
  },
  {
    name: 'Retainer',
    badge: {
      en: 'Prepaid hours — better rate, priority',
      sr: 'Prepaid sati — povoljnija satnica, prioritet',
    },
    price: '€30',
    per: '/h',
    highlight: true,
    features: {
      en: [
        'Minimum 5h/month (prepaid)',
        'Unused hours roll over to next month',
        'Priority task processing',
        'Response within 12h on business days',
      ],
      sr: [
        'Minimum 5h mesečno (prepaid)',
        'Neutrošeni sati se prenose u naredni mesec',
        'Prioritetna obrada taskova',
        'Odgovor u roku od 12h radnim danom',
      ],
    },
  },
]

const ADDONS = [
  { label: { en: 'Content update', sr: 'Promena sadržaja' }, price: '€10 – €15 / h' },
  { label: { en: 'New page', sr: 'Nova stranica' }, price: '€50 – €100' },
  { label: { en: 'Gallery + lightbox', sr: 'Galerija + lightbox' }, price: '€50 – €80' },
  { label: { en: 'Booking system', sr: 'Booking sistem' }, price: '€80 – €150' },
  { label: { en: 'Email integration', sr: 'Email integracija' }, price: '€30 – €60' },
  { label: { en: 'SEO setup', sr: 'SEO setup' }, price: '€60 – €120' },
  { label: { en: 'Performance audit', sr: 'Performance audit' }, price: '€80 – €150' },
]

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-xs font-mono text-muted/40 tracking-widest tabular-nums">{number}</span>
      <span className="h-px w-8 bg-line flex-shrink-0" />
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">{label}</span>
    </div>
  )
}

function PlanCard({ name, badge, price, oldPrice, per, features, highlight = false, cta, lang, startingFrom }) {
  return (
    <div className={`relative flex flex-col p-7 border transition-colors duration-200 ${highlight
      ? 'border-accent/40 bg-surface'
      : 'border-line bg-surface'
      }`}>
      {highlight && (
        <div className="absolute top-0 inset-x-0 h-[2px] bg-accent" />
      )}

      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">{name}</p>
        <p className="text-sm text-muted font-light">{badge[lang]}</p>
      </div>

      <div className="mb-6">
        <p className="text-[10px] font-medium uppercase tracking-widest text-muted/50 mb-1">{startingFrom}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-ink leading-none">{price}</span>
          {per && <span className="text-sm text-muted">{per}</span>}
          {oldPrice && <span className="text-sm font-normal text-muted/40 line-through">{oldPrice}</span>}
        </div>
      </div>

      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {features[lang].map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted leading-snug">
            <span className="mt-[5px] w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <Button variant={highlight ? 'primary' : 'ghost'} href="/#contact" arrow>
        {cta}
      </Button>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Pricing() {
  const { t } = useTranslation()
  const { lang } = useLang()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  const startingFrom = t('pricing.startingFrom')

  return (
    <>
      <SEO
        title="Pricing"
        description="Web development pricing — websites, web apps, and maintenance packages. Clear packages, no hidden costs."
        url="/pricing"
      />
      <Navbar />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">

          {/* ── Header ── */}
          <div className="mb-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              {t('pricing.label')}
            </p>
            <h1
              className="font-black leading-[1.0] tracking-tight text-ink mb-5"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              {t('pricing.heading')}
            </h1>
            <p className="text-base sm:text-lg text-muted font-light max-w-xl">
              {t('pricing.subtext')}
            </p>
          </div>

          {/* ── Quick access ── */}
          <div className="flex flex-wrap gap-2 mb-20 -mt-10">
            {[
              { href: '#websites', key: 'pricing.nav.websites' },
              { href: '#apps', key: 'pricing.nav.apps' },
              { href: '#maintenance', key: 'pricing.nav.maintenance' },
              { href: '#addons', key: 'pricing.nav.addons' },
            ].map(({ href, key }) => (
              <a
                key={href}
                href={href}
                className="px-3 py-1.5 text-xs font-medium text-muted border border-line hover:border-accent/40 hover:text-ink transition-colors duration-200"
              >
                {t(key)}
              </a>
            ))}
          </div>

          {/* ── 01 Websites ── */}
          <section id="websites" className="mb-20">
            <SectionLabel number="01" label={t('pricing.section.websites')} />
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {WEBSITES.map((plan) => (
                <PlanCard
                  key={plan.name}
                  {...plan}
                  lang={lang}
                  startingFrom={startingFrom}
                  cta={t('pricing.card.getQuote')}
                />
              ))}
            </div>
          </section>

          {/* ── 02 Web & Mobile Apps ── */}
          <section id="apps" className="mb-20 border-t border-line pt-16">
            <SectionLabel number="02" label={t('pricing.section.apps')} />
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {APPS.map((plan) => (
                <PlanCard
                  key={plan.name}
                  {...plan}
                  lang={lang}
                  startingFrom={startingFrom}
                  cta={t('pricing.card.letsTalk')}
                />
              ))}
            </div>
          </section>

          {/* ── 03 Maintenance ── */}
          <section id="maintenance" className="mb-20 border-t border-line pt-16">
            <SectionLabel number="03" label={t('pricing.section.maintenance')} />
            <p className="text-sm text-muted font-light mb-8 max-w-xl">
              {t('pricing.maintenance.intro')}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {MAINTENANCE.map((plan) => (
                <PlanCard
                  key={plan.name}
                  {...plan}
                  lang={lang}
                  startingFrom={startingFrom}
                  cta={t('pricing.card.getStarted')}
                />
              ))}
            </div>
          </section>

          {/* ── 04 Add-ons ── */}
          <section id="addons" className="mb-20 border-t border-line pt-16">
            <SectionLabel number="04" label={t('pricing.section.addons')} />
            <p className="text-sm text-muted font-light mb-6 max-w-xl">
              {t('pricing.addons.intro')}
            </p>
            <div className="max-w-2xl border border-line overflow-hidden">
              <div className="grid grid-cols-[1fr_auto] px-5 py-3 border-b border-line bg-surface">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted/60">{t('pricing.addons.col.service')}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted/60">{t('pricing.addons.col.price')}</span>
              </div>
              <div className="divide-y divide-line">
                {ADDONS.map((item) => (
                  <div
                    key={item.label.en}
                    className="grid grid-cols-[1fr_auto] px-5 py-3.5 text-sm hover:bg-surface/50 transition-colors duration-150"
                  >
                    <span className="text-muted">{item.label[lang]}</span>
                    <span className="font-medium text-ink tabular-nums">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs text-muted/50">
              {t('pricing.addons.note')}
            </p>
          </section>

          {/* ── Bottom CTA ── */}
          <section className="border-t border-line pt-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              {t('pricing.cta.unsure')}
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-ink mb-6 max-w-xl leading-tight">
              {t('pricing.cta.heading')}
            </p>
            <Button variant="primary" href="/#contact" arrow>
              {t('pricing.cta.button')}
            </Button>
          </section>

        </div>
      </main>
    </>
  )
}
