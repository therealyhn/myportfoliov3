import { useState } from 'react'
import useProjectsContent from '../../hooks/useProjectsContent'
import useTranslation from '../../hooks/useTranslation'
import ProjectsGrid from '../projects/ProjectsGrid'

function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-[200px] w-full rounded-xl bg-surface sm:h-[220px] lg:h-[260px]" />
      <div className="mt-3 h-4 w-3/4 rounded bg-surface" />
      <div className="mt-2 h-3 w-1/2 rounded bg-surface" />
    </div>
  )
}

export default function ProjectsSection() {
  const { data: projects, loading, error } = useProjectsContent()
  const { t } = useTranslation()

  const [initialCount] = useState(() =>
    window.matchMedia('(min-width: 1024px)').matches ? 6 : 3
  )
  const [expanded, setExpanded] = useState(false)

  const visibleProjects = expanded ? projects : projects.slice(0, initialCount)
  const hasMore = projects.length > initialCount

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            {t('projects.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight">
            {t('projects.heading')}
          </h2>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {Array.from({ length: initialCount }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <p className="text-muted text-sm">{t('projects.error')}</p>
        ) : (
          <ProjectsGrid projects={visibleProjects} />
        )}

        {/* Expand / collapse */}
        {!loading && !error && hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="group inline-flex items-center gap-3 text-sm font-semibold text-ink
                hover:text-accent transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>{expanded ? t('projects.seeLess') : t('projects.seeMore')}</span>
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-line
                  bg-surface group-hover:ring-accent/50 transition-all duration-300
                  ${expanded ? 'rotate-180' : ''}`}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l5 5 5-5" />
                </svg>
              </span>
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
