import NavArrow from '../ui/NavArrow'

export default function HeroPanelNav({ active, panelsCount, onPrev, onNext, goTo }) {
  return (
    <div className="absolute bottom-5 left-0 right-0 z-10 flex items-center justify-center gap-5">
      <NavArrow direction="prev" disabled={active === 0} onClick={onPrev} />

      <div className="flex items-center gap-2">
        {Array.from({ length: panelsCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active ? 'w-5 h-1.5 bg-accent' : 'w-1.5 h-1.5 bg-line hover:bg-muted/60'
            }`}
            aria-label={`Panel ${i + 1}`}
          />
        ))}
      </div>

      <NavArrow direction="next" disabled={active === panelsCount - 1} onClick={onNext} />
    </div>
  )
}
