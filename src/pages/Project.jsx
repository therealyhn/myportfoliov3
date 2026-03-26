import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import SEO from '../components/shared/SEO'
import Navbar from '../components/layout/Navbar'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectMeta from '../components/projects/ProjectMeta'
import ProjectBody from '../components/projects/ProjectBody'
import ProjectBodySwiper from '../components/projects/ProjectBodySwiper'
import useProjectsContent from '../hooks/useProjectsContent'
import useTranslation from '../hooks/useTranslation'
import { useLang } from '../context/LangContext'

export default function Project() {
  const { slug } = useParams()
  const { lang } = useLang()
  const { loading, data: projects } = useProjectsContent(lang)
  const { t } = useTranslation()

  const project = projects.find((p) => p.slug === slug)
  const related = projects.filter((p) => p.slug !== slug).slice(0, 2)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug])

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen" />
      </>
    )
  }

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.tagline || project.overview?.slice(0, 160) || undefined}
        image={project.image || undefined}
        url={`/projects/${project.slug}`}
        type="article"
      />
      <Navbar />

      {/* Back — fixed top-left */}
      <div className="fixed top-[72px] left-4 sm:left-6 lg:left-8 z-40">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-muted bg-transparent backdrop-blur-sm hover:text-ink hover:ring-accent/40 transition-all duration-200"
        >
          <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 3L5 8l5 5" />
          </svg>
          {t('projects.back')}
        </Link>
      </div>

      <main className="min-h-screen overflow-x-clip">

        {/* ── Content ── */}

        {/* Mobile layout */}
        <section className="px-4 pt-6 sm:hidden">
          <div className="mt-24">
            <h1 className="font-black leading-[1.0] tracking-tight text-ink" style={{ fontSize: 'clamp(2.2rem, 13vw, 3.25rem)' }}>
              {project.title}
            </h1>
            {project.tagline && (
              <p className="mt-3 text-base text-muted font-light">{project.tagline}</p>
            )}
            <div className="mt-8">
              <ProjectMeta project={project} />
            </div>
            <div className="mt-10">
              <ProjectBodySwiper project={project} />
            </div>
          </div>
        </section>

        {/* Desktop layout — full bleed */}
        <section className="hidden sm:block pt-6 pb-24">
          {/* Title + tagline — left-padded */}
          <div className="pl-8 lg:pl-16 xl:pl-24 pr-8 mt-28">
            <h1
              className="font-black leading-[1.0] tracking-tight text-ink"
              style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
            >
              {project.title}
            </h1>
            {project.tagline && (
              <p className="mt-4 text-lg text-muted font-light max-w-2xl">{project.tagline}</p>
            )}
          </div>

          {/* Split row — 1/3 left, 2/3 right */}
          <div className="mt-12 flex items-start">

            {/* Left — sticky meta, 1/3 width */}
            <div className="w-1/3 shrink-0 pl-8 lg:pl-16 xl:pl-24 pr-10 lg:pr-14 xl:pr-16 lg:sticky lg:top-28 lg:pt-14">
              <ProjectMeta project={project} />
            </div>

            {/* Right — scrollable gallery, 2/3 width */}
            <div className="w-2/3 min-w-0 flex flex-col gap-3 pr-6 lg:h-[calc(100vh-140px)] lg:overflow-y-auto no-scrollbar lg:sticky lg:top-28">
              <ProjectBody project={project} />
            </div>

          </div>
        </section>

        {/* ── Related projects ── */}
        {related.length > 0 && (
          <section className="px-4 pb-16 pt-12 sm:px-8 border-t border-line">
            <div className="mx-auto w-full max-w-7xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight mb-8">
                {t('projects.moreProjects')}
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-2xl">
                {related.map((item, i) => (
                  <ProjectCard key={item.id} project={item} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
    </>
  )
}
