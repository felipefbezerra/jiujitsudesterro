import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'

const conquistas = [
  { ano: '2026', titulo: '3º lugar — Paraibano de Jiu-Jitsu' },
  { ano: '2026', titulo: 'Representação no Open Itapetim – PE' },
  { ano: '2023', titulo: 'Campeonato Paraibano em Pombal - PB' },
  { ano: '2023', titulo: 'Open Patos - PB' },
  { ano: '2013', titulo: 'Fundação do Projeto Social em Desterro – PB' },
]

export default function Professor() {
  return (
    <div className="bg-light min-h-screen">
      {/* 1. Cabeçalho da Página */}
      <PageHero
        accent="Liderança & Técnica"
        title="Professor"
        subtitle="Conheça o fundador e mestre por trás do projeto."
      />

      {/* 2. Seção Biográfica com a Foto Estilizada */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* COLUNA DA FOTO - Estilo Home.jsx */}
            <div className="relative order-2 md:order-1">
              <div className="relative max-w-md mx-auto">
                {/* Molduras Decorativas nos Cantos */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent opacity-50" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent opacity-50" />
                
                {/* Container da Imagem Real */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 aspect-[3/4]">
                  <img 
                    src="/img/membros/professorramon.jpeg" 
                    alt="Professor Ramon Cleber"                   />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
                </div>

                {/* Badge Flutuante */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-accent text-white px-8 py-4 rounded-full shadow-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                  Fundador · Desde 2013
                </div>
              </div>
            </div>

            {/* COLUNA DA BIO */}
            <div className="order-1 md:order-2">
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">Sobre o Mestre</p>
              <h2 className="font-display text-6xl tracking-wide text-black leading-tight mb-6">
                Ramon<br />Cleber
              </h2>
              <div className="w-12 h-1 bg-accent mb-8" />

              <div className="space-y-4 text-zinc-600 text-sm leading-relaxed text-justify">
                <p>
                  Faixa Preta de Jiu-Jitsu e fundador do projeto social <strong>JIU-JITSU — Disciplina e Educação para a Vida</strong>,
                  Ramon Cleber é a força motriz por trás de uma das iniciativas sociais mais impactantes da cidade de Desterro.
                </p>
                <p>
                  Sua trajetória no Jiu-Jitsu é marcada não apenas pelas conquistas técnicas no tatame, mas pelo compromisso
                  genuíno em usar a arte marcial como veículo de transformação social. Em 2013, fundou o projeto em Desterro – PB, 
                  oferecendo aulas gratuitas para a comunidade.
                </p>
                <p className="mb-8">
                  Hoje, sob sua liderança, o projeto atende crianças, jovens e adultos, formando não apenas atletas
                  competitivos, mas cidadãos íntegros e disciplinados através de uma pedagogia voltada para o desenvolvimento humano integral.
                </p>
              </div>

              {/* Highlights Rápidos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 mt-8">
                {[
                  { icon: 'fas fa-certificate', label: 'Faixa Preta' },
                  { icon: 'fas fa-users', label: '+80 alunos' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-zinc-50 border border-zinc-100 rounded-xl p-4">
                    <i className={`${icon} text-accent`}></i>
                    <span className="text-xs font-bold text-zinc-700 uppercase tracking-wider">{label}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/558386909986"
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest inline-flex items-center gap-3 hover:bg-accent transition-all duration-300"
              >
                <i className="fab fa-whatsapp text-lg"></i>
                Falar com o Professor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção de Conquistas (Histórico) */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent font-bold uppercase tracking-[4px] text-xs text-center mb-3">Histórico</p>
          <h2 className="font-display text-5xl text-white tracking-wide text-center mb-4">Conquistas</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-16" />
          
          <div className="space-y-4">
            {conquistas.map((c, i) => (
              <div
                key={i}
                className="group bg-zinc-800/50 border border-zinc-700/50 rounded-2xl px-6 py-6 flex items-center gap-6 hover:bg-zinc-800 hover:border-accent/50 transition-all duration-300"
              >
                <span className="font-display text-4xl text-accent flex-shrink-0 w-20 text-center">{c.ano}</span>
                <div className="w-px h-10 bg-zinc-700 flex-shrink-0" />
                <span className="text-zinc-300 text-sm md:text-base font-medium group-hover:text-white transition-colors">{c.titulo}</span>
                <i className="fas fa-medal text-accent ml-auto flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"></i>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}