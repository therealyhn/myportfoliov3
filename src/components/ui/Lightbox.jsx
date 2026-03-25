import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return createPortal(
    <div
      className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-white/40 hover:text-white border border-white/10 hover:border-white/30 transition-colors duration-200 z-20"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M1 1l12 12M13 1L1 13" />
        </svg>
      </button>

      {/* Prev */}
      {activeIndex > 0 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Previous image"
          className="absolute left-4 md:left-8 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white border border-white/10 hover:border-white/30 transition-colors duration-200 z-20"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 3L5 8l5 5" />
          </svg>
        </button>
      )}

      {/* Next */}
      {activeIndex < images.length - 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Next image"
          className="absolute right-4 md:right-8 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white border border-white/10 hover:border-white/30 transition-colors duration-200 z-20"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3l5 5-5 5" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative w-full h-full p-4 sm:p-10 md:p-16 lg:p-24 flex items-center justify-center pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={activeIndex}
          src={images[activeIndex]}
          alt={`Image ${activeIndex + 1}`}
          decoding="async"
          className="max-w-full max-h-full object-contain pointer-events-auto select-none"
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="text-xs text-white/30 font-mono tracking-widest tabular-nums">
          {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
      </div>

    </div>,
    document.body
  )
}
