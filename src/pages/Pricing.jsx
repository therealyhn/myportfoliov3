import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Button from '../components/ui/Button'

// ── Data ──────────────────────────────────────────────────────────────────────

const WEBSITES = [
  {
    name: 'Standard',
    badge: 'Marketing sajt, landing page',
    price: '€400',
    features: [
      'Do 5 stranica',
      'Responsive dizajn',
      'Sanity CMS (predefinisane šeme)',
      'Osnovna SEO optimizacija (meta, OG tagovi)',
      'Kontakt forma / email integracija',
      '2 runde revizija',
      '1 mesec podrške po isporuci',
    ],
  },
  {
    name: 'Pro',
    badge: 'Kompletan web prezens',
    price: '€900',
    highlight: true,
    features: [
      'Neograničen broj stranica',
      'Custom Sanity šeme i Studio podešavanja',
      'Rich text, galerije, custom content blokovi',
      'Animacije i micro-interactions',
      'Napredna SEO (sitemap, schema markup, Core Web Vitals)',
      'Performance optimizacija',
      '3 runde revizija',
      '3 meseca podrške po isporuci',
    ],
  },
]

const APPS = [
  {
    name: 'Web App',
    badge: 'Dashboard, auth, custom logika',
    price: '€1,250',
    features: [
      'React + PHP/MySQL backend',
      'Auth sistem (login, registracija, uloge)',
      'Admin dashboard i upravljanje podacima',
      'REST API dizajn',
      'Integracija sa eksternim servisima',
    ],
  },
  {
    name: 'Mobile App',
    badge: 'iOS + Android',
    price: '€1,750',
    features: [
      'React Native (Expo)',
      'iOS + Android iz jedne codebase',
      'Auth i user management',
      'Push notifikacije',
      'API integracija',
    ],
  },
]

const MAINTENANCE = [
  {
    name: 'Basic',
    price: '€40',
    per: '/mo',
    features: [
      '1h mesečno (bug fixes)',
      'Security & uptime monitoring',
      'Provere hostinga i SSL-a',
    ],
  },
  {
    name: 'Standard',
    price: '€90',
    per: '/mo',
    highlight: true,
    features: [
      '3h mesečno (bug fixes + promene)',
      'Security & uptime monitoring',
      'Ažuriranje sadržaja',
      'Performance monitoring',
    ],
  },
  {
    name: 'Pro',
    price: '€175',
    per: '/mo',
    features: [
      '5h mesečno',
      'Sve iz Standard paketa',
      'Prioritetna podrška',
      'Dodavanje novih funkcionalnosti',
      'Mesečni izveštaj',
    ],
  },
]

const ADDONS = [
  { label: 'Promena sadržaja', price: '€10 – €15 / h' },
  { label: 'Nova stranica', price: '€50 – €100' },
  { label: 'Galerija + lightbox', price: '€50 – €80' },
  { label: 'Booking sistem', price: '€80 – €150' },
  { label: 'Email integracija', price: '€30 – €60' },
  { label: 'SEO setup', price: '€60 – €120' },
  { label: 'Performance audit', price: '€80 – €150' },
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

function PlanCard({ name, badge, price, per, features, highlight = false, cta }) {
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
        <p className="text-sm text-muted font-light">{badge}</p>
      </div>

      <div className="mb-6">
        <p className="text-[10px] font-medium uppercase tracking-widest text-muted/50 mb-1">starting from</p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-ink leading-none">{price}</span>
          {per && <span className="text-sm text-muted">{per}</span>}
        </div>
      </div>

      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {features.map((f, i) => (
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
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">

          {/* ── Header ── */}
          <div className="mb-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              services
            </p>
            <h1
              className="font-black leading-[1.0] tracking-tight text-ink mb-5"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              Work with me.
            </h1>
            <p className="text-base sm:text-lg text-muted font-light max-w-xl">
              Transparentne cene za sajtove, aplikacije i mesečno održavanje.
              Svaka ponuda se prilagođava konkretnom projektu i obimu posla.
            </p>
          </div>

          {/* ── Quick access ── */}
          <div className="flex flex-wrap gap-2 mb-20 -mt-10">
            {[
              { href: '#websites', label: 'Websites' },
              { href: '#apps', label: 'Apps' },
              { href: '#maintenance', label: 'Maintenance' },
              { href: '#addons', label: 'Add-ons' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-3 py-1.5 text-xs font-medium text-muted border border-line hover:border-accent/40 hover:text-ink transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* ── 01 Websites ── */}
          <section id="websites" className="mb-20">
            <SectionLabel number="01" label="websites" />
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {WEBSITES.map((plan) => (
                <PlanCard key={plan.name} {...plan} cta="Get a quote" />
              ))}
            </div>
          </section>

          {/* ── 02 Web & Mobile Apps ── */}
          <section id="apps" className="mb-20 border-t border-line pt-16">
            <SectionLabel number="02" label="web & mobile apps" />
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {APPS.map((plan) => (
                <PlanCard key={plan.name} {...plan} cta="Let's talk" />
              ))}
            </div>
          </section>

          {/* ── 03 Maintenance ── */}
          <section id="maintenance" className="mb-20 border-t border-line pt-16">
            <SectionLabel number="03" label="maintenance" />
            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
              {MAINTENANCE.map((plan) => (
                <PlanCard key={plan.name} {...plan} cta="Get started" />
              ))}
            </div>
          </section>

          {/* ── 04 Add-ons ── */}
          <section id="addons" className="mb-20 border-t border-line pt-16">
            <SectionLabel number="04" label="add-ons" />
            <p className="text-sm text-muted font-light mb-6 max-w-xl">
              Ove usluge se mogu dodati na bilo koji paket ili naručiti samostalno.
            </p>
            <div className="max-w-2xl border border-line overflow-hidden">
              <div className="grid grid-cols-[1fr_auto] px-5 py-3 border-b border-line bg-surface">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted/60">Usluga</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted/60">Cena</span>
              </div>
              <div className="divide-y divide-line">
                {ADDONS.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[1fr_auto] px-5 py-3.5 text-sm hover:bg-surface/50 transition-colors duration-150"
                  >
                    <span className="text-muted">{item.label}</span>
                    <span className="font-medium text-ink tabular-nums">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs text-muted/50">
              * Sve cene su okvirne i zavise od konkretnih zahteva, obima sadržaja i rokova.
            </p>
          </section>

          {/* ── Bottom CTA ── */}
          <section className="border-t border-line pt-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              not sure?
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-ink mb-6 max-w-xl leading-tight">
              Opišite projekat, a ja ću predložiti pravi paket.
            </p>
            <Button variant="primary" href="/#contact" arrow>
              Get in touch
            </Button>
          </section>

        </div>
      </main>
    </>
  )
}
