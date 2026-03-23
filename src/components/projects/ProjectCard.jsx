import { Link } from 'react-router-dom'

function CircleArrow() {
  return (
    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/90 shadow-lg ring-1 ring-white/20">
      <svg
        className="w-5 h-5 text-[#0a0a0a]"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h12M10 4l6 6-6 6" />
      </svg>
    </div>
  )
}

export default function ProjectCard({ project, index = 0 }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group/project block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page"
    >
      <article>
        {/* Image */}
        <div className="relative overflow-hidden bg-surface">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              decoding="async"
              className="h-[200px] w-full object-cover transition-transform duration-500
                group-hover/project:scale-[1.03]
                sm:h-[220px] lg:h-[260px]"
            />
          ) : (
            <div className="h-[200px] w-full sm:h-[220px] lg:h-[260px] flex items-center justify-center">
              <span className="text-muted text-sm">No image</span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-ink/50 opacity-0 transition-opacity duration-300 group-hover/project:opacity-100" />

          {/* CircleArrow */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/project:opacity-100">
            <CircleArrow />
          </div>

          {/* Role badge — hover only */}
          {project.role && (
            <p className="absolute bottom-3 left-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] text-white opacity-0 transition-opacity duration-300 group-hover/project:opacity-100">
              {project.role}
            </p>
          )}

          {/* Index number — always visible, top-right */}
          <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest text-white/70 font-mono">
            {num}
          </span>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/0 group-hover/project:bg-accent/60 transition-colors duration-300" />
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-semibold text-ink leading-tight">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="mt-0.5 text-xs sm:text-sm text-muted line-clamp-1">
                {project.tagline}
              </p>
            )}
          </div>
          {project.year && (
            <span className="flex-shrink-0 text-[10px] font-mono font-medium text-muted/60 mt-0.5">
              {project.year}
            </span>
          )}
        </div>
      </article>
    </Link>
  )
}
