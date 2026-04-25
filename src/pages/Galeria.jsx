import { useState, useCallback } from 'react'
import PageHero from '../components/PageHero'
import fotos from '../data/fotos.json'
import { X } from 'lucide-react'

const categories = [
  { key: 'all', label: 'Todas' },
  { key: 'campeonatos', label: 'Campeonatos' },
  { key: 'treinos', label: 'Treinos' },
  { key: 'visitas', label: 'Visitas' },
  { key: 'graduacoes', label: 'Graduações' },
]

const INITIAL_LIMIT = 12

export default function Galeria() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null) // { src, alt }
  const [showAll, setShowAll] = useState(false)

  const filtered = activeFilter === 'all'
    ? fotos
    : fotos.filter(f => f.categoria === activeFilter)

  const displayed = (activeFilter === 'all' && !showAll)
    ? filtered.slice(0, INITIAL_LIMIT)
    : filtered

  const handleFilter = useCallback((key) => {
    setActiveFilter(key)
    setShowAll(false)
  }, [])

  const openLightbox = useCallback((foto) => {
    setLightbox(foto)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.style.overflow = ''
  }, [])

  // Keyboard close
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') closeLightbox()
  }, [closeLightbox])

  return (
    <div onKeyDown={handleKeyDown} tabIndex={-1}>
      <PageHero
        accent="Memórias do Tatame"
        title="Galeria"
        subtitle="Conquistas, treinos e momentos que contam nossa história."
      />

      <section className="bg-light py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(({ key, label }) => {
              const count = key === 'all' ? fotos.length : fotos.filter(f => f.categoria === key).length
              return (
                <button
                  key={key}
                  onClick={() => handleFilter(key)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border-2 transition-all duration-200
                    ${activeFilter === key
                      ? 'bg-accent border-accent text-white shadow-lg shadow-red-900/30'
                      : 'bg-transparent border-zinc-300 text-zinc-600 hover:border-accent hover:text-accent'
                    }`}
                >
                  {label}
                  <span className={`ml-2 text-[10px] font-normal ${activeFilter === key ? 'text-red-300' : 'text-zinc-400'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayed.map((foto, i) => (
              <div
                key={`${foto.src}-${i}`}
                className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group filter-item-enter
                           shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${(i % 12) * 40}ms` }}
                onClick={() => openLightbox(foto)}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  loading="lazy"
                  onError={(e) => {
                    e.target.parentElement.style.background = '#1a1a1a'
                    e.target.style.display = 'none'
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {foto.alt}
                  </p>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-accent text-white text-[9px] px-2 py-1 rounded font-bold uppercase tracking-wider">
                    {foto.categoria}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {activeFilter === 'all' && !showAll && filtered.length > INITIAL_LIMIT && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="btn-primary"
              >
                Ver Mais Fotos ({filtered.length - INITIAL_LIMIT} restantes)
              </button>
            </div>
          )}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-zinc-400">
              <i className="fas fa-images text-5xl mb-4 opacity-30"></i>
              <p className="text-sm">Nenhuma foto nesta categoria ainda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 lightbox-overlay"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={36} />
          </button>
          <div
            className="max-w-4xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[80vh] rounded-lg object-contain shadow-2xl border border-zinc-800"
            />
            <p className="text-white text-center text-sm mt-4 opacity-80 font-medium">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}
