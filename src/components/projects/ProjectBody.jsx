import { useState } from 'react'
import Lightbox from '../ui/Lightbox'

export default function ProjectBody({ project }) {
  const images = project.galleryImages.length > 0
    ? project.galleryImages
    : project.image
      ? [project.image]
      : []

  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 bg-surface text-muted text-sm">
        No images
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="w-full overflow-hidden bg-surface cursor-zoom-in"
            onClick={() => setLightboxIndex(i)}
          >
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

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => Math.max(0, i - 1))}
          onNext={() => setLightboxIndex(i => Math.min(images.length - 1, i + 1))}
        />
      )}
    </>
  )
}
