import { useState } from 'react'
import PageHero from '../components/PageHero'
import regras from '../data/regras.json'

export default function Regras() {
  const [expanded, setExpanded] = useState(null)

  const toggle = (n) => setExpanded(prev => prev === n ? null : n)

  return (
    <div>
      <PageHero
        accent="Código de Conduta"
        title="Regras do Tatame"
        subtitle="19 princípios que guiam nossa prática e nosso caráter dentro e fora do tatame."
      />

      <section className="bg-light py-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Intro banner */}
          <div className="bg-black text-white rounded-2xl p-8 mb-12 flex gap-6 items-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-scroll text-white text-2xl"></i>
            </div>
            <div>
              <h3 className="font-display text-2xl tracking-wider mb-1">Por que as Regras Importam</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                O Jiu-Jitsu é uma arte marcial baseada em respeito e disciplina. Estas regras não
                são restrições — são os valores que nos tornam uma comunidade coesa e um projeto que
                transforma vidas desde 2013.
              </p>
            </div>
          </div>

          {/* Rules grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {regras.map((regra) => {
              const isOpen = expanded === regra.numero
              return (
                <div
                  key={regra.numero}
                  className={`bg-white rounded-xl overflow-hidden shadow-sm border transition-all duration-300
                    ${isOpen ? 'border-accent shadow-md' : 'border-zinc-100 hover:border-zinc-300'}`}
                >
                  <button
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                    onClick={() => toggle(regra.numero)}
                  >
                    {/* Number */}
                    <span className={`font-display text-5xl leading-none flex-shrink-0 transition-colors duration-300
                      ${isOpen ? 'text-accent' : 'text-zinc-200'}`}>
                      {String(regra.numero).padStart(2, '0')}
                    </span>
                    {/* Title */}
                    <span className="font-bold text-sm uppercase tracking-wider text-black flex-1">
                      {regra.titulo}
                    </span>
                    {/* Chevron */}
                    <i className={`fas fa-chevron-down text-accent text-xs transition-transform duration-300
                      ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Expandable body */}
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                    <p className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed border-t border-zinc-100 pt-4">
                      {regra.descricao}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Expand all hint */}
          <p className="text-center text-zinc-400 text-xs mt-8">
            Clique em cada regra para expandir e ler a descrição completa.
          </p>

          {/* CTA */}
          <div className="mt-16 text-center bg-accent rounded-2xl p-10 text-white">
            <h3 className="font-display text-4xl tracking-wide mb-3">Aceita o Desafio?</h3>
            <p className="text-red-200 text-sm mb-6 max-w-md mx-auto">
              Ao entrar no tatame, você assume o compromisso com esses valores. Estamos prontos para te receber.
            </p>
            <a
              href="https://wa.me/558386909986"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-accent font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-zinc-100 transition-colors"
            >
              Quero Fazer Parte
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
