import { useRef, useState, useEffect } from 'react'

function MetaField({ label, value }) {
  if (!value) return null
  return (
    <div>
      <p className="text-xs font-light leading-snug text-accent">{label}</p>
      <p className="mt-1 text-base font-medium text-ink leading-snug">{value}</p>
    </div>
  )
}

export default function ProjectMeta({ project }) {
  const overviewRef = useRef(null)
  const [showFade, setShowFade] = useState(false)

  useEffect(() => {
    const el = overviewRef.current
    if (!el) return

    const check = () => {
      setShowFade(el.scrollHeight > el.clientHeight && el.scrollTop + el.clientHeight < el.scrollHeight - 4)
    }

    check()
    el.addEventListener('scroll', check)
    window.addEventListener('resize', check)
    return () => {
      el.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [project.overview])

  return (
    <div className="flex flex-col gap-10">

      {/* Overview */}
      {project.overview && (
        <div>
          <p className="text-xs font-light leading-snug text-accent mb-3">overview</p>
          <div className="relative">
            <div ref={overviewRef} className="max-h-44 sm:max-h-72 md:max-h-[500px] overflow-y-auto no-scrollbar">
              <p className="text-base sm:text-lg text-muted leading-relaxed font-light">
                {project.overview}
              </p>
            </div>
            <div
              className={`absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-page to-transparent pointer-events-none transition-opacity duration-300 ${showFade ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </div>
      )}

      {/* 2-col metadata grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-8">
        <MetaField label="role" value={project.role} />
        <MetaField label="year" value={project.year} />
        <MetaField label="duration" value={project.duration} />
        <MetaField label="status" value={project.status} />
      </div>

      {/* Tech stack */}
      {project.techStack.length > 0 && (
        <div>
          <p className="text-xs font-light leading-snug text-accent mb-2">stack</p>
          <p className="text-base text-muted leading-snug">
            {project.techStack.join(', ')}
          </p>
        </div>
      )}

      {/* CTAs */}
      {(project.liveUrl || project.githubUrl) && (
        <div className="flex flex-col gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold hover:bg-accent/90 active:scale-[0.98] transition-all duration-200"
            >
              Live Site
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-ink text-sm font-semibold ring-1 ring-line hover:ring-accent/40 active:scale-[0.98] transition-all duration-200"
            >
              GitHub
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          )}
        </div>
      )}

    </div>
  )
}
