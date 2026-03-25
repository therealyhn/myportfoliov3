import { useState, useRef } from 'react'
import Lightbox from '../ui/Lightbox'

export default function ProjectBodySwiper({ project }) {
  const images = project.galleryImages.length > 0
    ? project.galleryImages
    : project.image
      ? [project.image]
      : []

  const [current, setCurrent] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const touchStartX = useRef(null)
  const didSwipe = useRef(false)

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 bg-surface text-muted text-sm">
        No images
      </div>
    )
  }

  if (images.length === 1) {
    return (
      <>
        <div
          className="w-full overflow-hidden bg-surface cursor-zoom-in"
          onClick={() => setLightboxIndex(0)}
        >
          <img
            src={images[0]}
            alt={`${project.title} screen 1`}
            loading="eager"
            decoding="async"
            className="w-full h-auto block"
          />
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

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(images.length - 1, c + 1))

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    didSwipe.current = false
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (delta > 40) { next(); didSwipe.current = true }
    else if (delta < -40) { prev(); didSwipe.current = true }
    touchStartX.current = null
  }

  return (
    <>
      <div className="flex flex-col gap-3">

        {/* Slide strip */}
        <div
          className="w-full overflow-hidden cursor-zoom-in"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => { if (!didSwipe.current) setLightboxIndex(current) }}
        >
          <div
            className="flex transition-transform duration-300 ease-out will-change-transform"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, i) => (
              <div key={i} className="w-full flex-shrink-0 bg-surface">
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
        </div>

        {/* Counter + dots */}
        <div className="flex items-center justify-between px-1">
          <span className="text-xs text-muted/50 tabular-nums">
            {current + 1} / {images.length}
          </span>
          <div className="flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Image ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-200 ${
                  i === current ? 'w-4 bg-accent' : 'w-1.5 bg-muted/30'
                }`}
              />
            ))}
          </div>
        </div>

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
