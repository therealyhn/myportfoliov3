export default function ProjectBody({ project }) {
  const images = project.galleryImages.length > 0
    ? project.galleryImages
    : project.image
      ? [project.image]
      : []

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 bg-surface text-muted text-sm">
        No images
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {images.map((src, i) => (
        <div key={i} className="w-full overflow-hidden bg-surface">
          <img
            src={src}
            alt={`${project.title} screen ${i + 1}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className="w-full h-auto block"
          />
        </div>
      ))}
    </div>
  )
}
