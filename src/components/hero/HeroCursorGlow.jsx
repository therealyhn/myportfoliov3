export default function HeroCursorGlow({ pos }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.07), transparent 60%)`,
      }}
      aria-hidden="true"
    />
  )
}
