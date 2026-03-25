import { useEffect } from 'react'

const CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'March 2025',
    sections: [
      {
        heading: 'What data I collect',
        body: 'When you submit the contact form, I collect your name, email address, and the message you write. That\'s it — no tracking pixels, no analytics, no cookies beyond what your browser sets by default.',
      },
      {
        heading: 'How your data is used',
        body: 'Your contact details are used solely to respond to your inquiry. I do not store form submissions on my own servers — messages are forwarded to my inbox via Web3Forms (web3forms.com), a third-party email delivery service.',
      },
      {
        heading: 'Third parties',
        body: 'The only third-party service this site uses is Web3Forms for form submission handling. No advertising networks, no analytics platforms, no social tracking scripts are loaded on this site.',
      },
      {
        heading: 'Data retention',
        body: 'I retain your message in my email inbox only as long as necessary to handle your inquiry. I will not share, sell, or forward your data to any other party.',
      },
      {
        heading: 'Your rights',
        body: 'You can request deletion of any data you\'ve submitted at any time by emailing contact@jovanljusic.com. I\'ll confirm deletion within 72 hours.',
      },
      {
        heading: 'Contact',
        body: 'Questions? Reach me at contact@jovanljusic.com.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'March 2025',
    sections: [
      {
        heading: 'What this site is',
        body: 'This is a personal portfolio site showcasing my work as a freelance developer. Nothing on this site constitutes a binding offer or contract until a separate written agreement is signed between both parties.',
      },
      {
        heading: 'Project engagements',
        body: 'All freelance work is governed by a project-specific contract agreed upon before work begins. This covers scope, timeline, payment schedule, and intellectual property transfer. No work starts without a signed agreement.',
      },
      {
        heading: 'Pricing',
        body: 'Any pricing shown on this site is indicative and subject to change based on project scope, complexity, and timeline. Final pricing is confirmed in writing before the project starts.',
      },
      {
        heading: 'Intellectual property',
        body: 'All code, designs, and deliverables become the client\'s property upon full payment, unless otherwise agreed in the project contract. I retain the right to showcase the work in my portfolio unless the client requests otherwise in writing.',
      },
      {
        heading: 'Liability',
        body: 'I build software to professional standards and test thoroughly before delivery. However, I am not liable for issues arising from third-party services, client-provided content, or changes made to deliverables after handoff.',
      },
      {
        heading: 'Contact',
        body: 'Questions about working together? Reach me at contact@jovanljusic.com.',
      },
    ],
  },
}

export default function LegalModal({ type, onClose }) {
  const content = CONTENT[type]

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
      aria-modal="true"
      role="dialog"
      aria-label={content.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-xl max-h-[80vh] bg-page border border-line flex flex-col">

        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-line flex-shrink-0">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
              Legal
            </p>
            <h2 className="text-xl font-bold text-ink tracking-tight">
              {content.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center text-muted hover:text-ink border border-line hover:border-accent/40 transition-colors duration-200 flex-shrink-0 mt-0.5"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-6 py-5 flex flex-col gap-5">
          <p className="text-xs text-muted/60">Last updated: {content.lastUpdated}</p>

          {content.sections.map(({ heading, body }) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-ink mb-1.5">{heading}</h3>
              <p className="text-sm text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
