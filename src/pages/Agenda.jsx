import { useState } from 'react'
import PageHero from '../components/PageHero'
import agenda from '../data/agenda.json'

export default function Agenda() {
  const [tab, setTab] = useState('todos')

  // Lógica de processamento e filtro
  const filtered = agenda.map(d => {
    // Atualiza o horário de Sábado para 11:30 via código
    const treinosProcessados = d.dia.toLowerCase() === 'sábado' 
      ? d.treinos.map(t => ({ ...t, horario: '11:30' }))
      : d.treinos;

    return {
      ...d,
      treinos: treinosProcessados.filter(t => {
        if (tab === 'todos') return true
        if (tab === 'infantil') return t.categoria.toLowerCase().includes('infantil')
        if (tab === 'adulto') return !t.categoria.toLowerCase().includes('infantil')
        return true
      })
    };
  }).filter(d => d.treinos.length > 0)

  return (
    <div className="bg-light min-h-screen">
      {/* 1. Cabeçalho Principal */}
      <PageHero
        accent="Horários de Treino"
        title="Agenda"
        subtitle="Confira os horários semanais e planeje sua semana no tatame."
      />

      {/* 2. Galeria com Título "Nosso Tatame" */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Título da Galeria */}
          <div className="text-center mb-12">
            <p className="text-accent font-bold uppercase tracking-[4px] text-[10px] mb-2">Vivência</p>
            <h2 className="font-display text-4xl text-black tracking-wide">Nosso Tatame</h2>
            <div className="w-10 h-1 bg-accent mx-auto mt-4" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Esquerda */}
            <div className="w-full md:w-1/4 order-2 md:order-1 self-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video border border-zinc-100">
                <img src="/img/treinos/equipefeminina.jpeg" alt="Treino" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/5" />
              </div>
            </div>

            {/* Centro (Destaque) - Etiqueta Removida */}
            <div className="w-full md:w-2/5 order-1 md:order-2 z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video border-4 border-white transform md:scale-110">
                <img src="/img/treinos/treinogeral.jpeg" alt="Treino Principal" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Direita */}
            <div className="w-full md:w-1/4 order-3 md:order-3 self-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video border border-zinc-100">
                <img src="/img/treinos/treinogeral2026.jpeg" alt="Treino" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/5" />
              </div>
            </div>
          </div>

          <div className="text-center mt-16 md:mt-20">
            <p className="text-zinc-400 italic text-sm">"Onde o esforço se torna evolução."</p>
          </div>
        </div>
      </section>

      {/* 3. Seção da Agenda com Novo Título */}
      <section className="bg-light py-16 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Título da Seção de Agenda */}
          <div className="text-center mb-12">
            <p className="text-accent font-bold uppercase tracking-[4px] text-[10px] mb-2">Cronograma</p>
            <h2 className="font-display text-4xl text-black tracking-wide">Horários das Aulas</h2>
            <p className="text-zinc-500 text-sm mt-2">Selecione sua categoria para filtrar</p>
          </div>
          
          {/* Filtros (Tabs) */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 flex shadow-md border border-zinc-200">
              {[
                { key: 'todos', label: 'Todos' },
                { key: 'infantil', label: 'Infantil' },
                { key: 'adulto', label: 'Adulto' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200
                    ${tab === key ? 'bg-accent text-white shadow' : 'text-zinc-500 hover:text-zinc-800'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards dos Dias */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ dia, treinos }) => (
              <div key={dia} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-lg transition-all duration-300">
                <div className="bg-black px-6 py-4 flex items-center justify-between">
                  <h3 className="font-display text-3xl text-white tracking-wider">{dia}</h3>
                  <span className="text-accent text-xs font-bold uppercase tracking-widest">{treinos.length} aulas</span>
                </div>
                <div className="divide-y divide-zinc-100">
                  {treinos.map((t, i) => (
                    <div key={i} className="px-6 py-5 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-display text-3xl text-accent leading-none">{t.horario}</p>
                        <p className="text-zinc-500 text-[10px] mt-1 font-bold uppercase tracking-wide">{t.categoria}</p>
                      </div>
                      <span className={t.tipo === 'Kimono' ? 'tag-kimono' : 'tag-nogi'}>{t.tipo}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Rodapé CTA */}
          <div className="mt-16 bg-black text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-info text-white text-xl"></i>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h4 className="font-display text-2xl tracking-wider mb-2">Primeira Aula Gratuita</h4>
              <p className="text-zinc-400 text-sm">Traga roupas confortáveis e venha conhecer nossa metodologia.</p>
            </div>
            <a href="https://wa.me/558386909986" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all flex items-center">
              <i className="fab fa-whatsapp mr-2 text-lg"></i>Agendar agora
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}