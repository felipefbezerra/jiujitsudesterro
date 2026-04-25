export default function PageHero({ title, subtitle, accent }) {
  return (
    <div className="relative bg-black pt-32 pb-16 px-6 overflow-hidden">
      {/* decorative texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #8b0000 0, #8b0000 1px, transparent 0, transparent 50%)`,
          backgroundSize: '12px 12px'
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
      <div className="max-w-7xl mx-auto relative">
        {accent && (
          <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">{accent}</p>
        )}
        <h1 className="font-display text-white text-5xl md:text-7xl tracking-wide">{title}</h1>
        {subtitle && (
          <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-xl">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
