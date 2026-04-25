import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import agenda from '../data/agenda.json'

const values = [
  {
    icon: 'fas fa-hand-fist',
    title: 'Disciplina',
    desc: 'O domínio da mente e do corpo para alcançar qualquer objetivo na vida.',
  },
  {
    icon: 'fas fa-heart',
    title: 'Respeito',
    desc: 'Honrar mestres, adversários e a si mesmo, dentro e fora do tatame.',
  },
  {
    icon: 'fas fa-fire-alt',
    title: 'Perseverança',
    desc: 'Aprender a levantar após cada queda, superando todos os limites.',
  },
]

const stats = [
  { num: '2013', label: 'Funcionamento do Projeto' },
  { num: '80+', label: 'Alunos Atendidos' },
  { num: '19', label: 'Regras de Conduta' },
  { num: '0', label: 'Custo para o Aluno' },
]

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const isNum = !isNaN(target.replace('+', ''))
    if (!isNum) { setCount(target); return }
    const end = parseInt(target)
    let start = 0
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(target); clearInterval(timer) }
      else setCount(String(start) + (target.includes('+') ? '+' : ''))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])
  return count
}

function StatCard({ num, label }) {
  const val = useCountUp(num)
  return (
    <div className="text-center">
      <p className="font-display text-5xl md:text-6xl text-accent">{val}</p>
      <p className="text-zinc-400 text-xs uppercase tracking-widest mt-1 font-bold">{label}</p>
    </div>
  )
}

// Get today's trainings
function getTodayTrainings() {
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const today = days[new Date().getDay()]
  return agenda.find(d => d.dia === today) || null
}

export default function Home() {
  const today = getTodayTrainings()

  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white text-center px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8b0000 0%, #1a1a1a 50%, #000000 100%)',
        }}
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
        {/* Diagonal dark overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-accent-light font-bold uppercase tracking-[5px] text-xs mb-6 animate-fade-in">
            Projeto Social · Desterro – PB · Desde 2013
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-wide mb-6"
              style={{ textShadow: '4px 4px 20px rgba(0,0,0,0.8)' }}>
            Transformando  Vidas Através do Jiu-Jitsu
          </h1>
          <p className="text-zinc-300 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Disciplina, Respeito e Educação para um futuro melhor. Gratuito para toda a comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="btn-primary">
              Quero Participar
            </Link>
            <Link
              to="/sobre"
              className="px-8 py-3 rounded-full border-2 border-white/30 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              Nossa História
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-zinc-900 py-14 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-light py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent font-bold uppercase tracking-[4px] text-xs text-center mb-3">Nossos Pilares</p>
          <h2 className="section-title">Valores que nos Guiam</h2>
          <div className="title-bar" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-10 text-center shadow-sm border-b-4 border-transparent
                           hover:border-accent hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-300">
                  <i className={`${v.icon} text-accent text-2xl group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="font-display text-2xl tracking-wider text-black mb-3">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TODAY'S TRAINING ── */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-2">Horários</p>
              <h2 className="font-display text-5xl tracking-wide">Treinos de Hoje</h2>
            </div>
            <Link to="/agenda" className="btn-primary text-xs">
              Ver Agenda Completa
            </Link>
          </div>

          {today ? (
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-500 font-bold text-xs uppercase tracking-widest">Hoje · {today.dia}</span>
              </div>
              <div className="space-y-4">
                {today.treinos.map((t, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-zinc-800 pb-4 last:border-0">
                    <div>
                      <p className="font-display text-3xl text-accent">{t.horario}</p>
                      <p className="text-zinc-400 text-sm mt-1">{t.categoria}</p>
                    </div>
                    <span className={t.tipo === 'Kimono' ? 'tag-kimono' : 'tag-nogi'}>
                      {t.tipo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 max-w-2xl">
              <p className="text-zinc-400">Sem treinos programados hoje. Descanse e volte amanhã! 🥋</p>
            </div>
          )}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">Sobre o Projeto</p>
              <h2 className="font-display text-5xl md:text-6xl tracking-wide text-black mb-6 leading-none">
                Arte Suave para
                <br />a Vida Inteira
              </h2>
              <div className="w-12 h-1 bg-accent mb-6" />
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Fundado em 2013, o projeto <strong>JIU-JITSU — Disciplina e Educação para a Vida</strong> nasceu
                do sonho de transformar realidades. Mais do que formar atletas, nossa missão é inclusão social.
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                Dentro do tatame, ensinamos que a verdadeira vitória está em superar as próprias limitações diárias,
                forjando o caráter de nossos alunos para serem campeões na vida.
              </p>
              <Link to="/sobre" className="btn-primary">
                Conhecer a História
              </Link>
            </div>
            {/* Onde estava o placeholder, coloque isto: */}
<div className="relative">
  {/* --- INÍCIO DO BLOCO DA FOTO --- */}
<div className="relative max-w-xs mx-auto ml-4 md:ml-24"> 
  <div className="absolute -top-3 -left-3 w-full h-full bg-accent rounded-2xl opacity-20" />
  
  <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-xl border border-white/5">
    <img 
      src="/img/membros/professorramon.jpeg" 
      alt="Prof. Ramon Cleber" 
      className="w-full h-auto block" 
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
      <div>
        <p className="font-display text-2xl text-white tracking-wider">Prof. Ramon Cleber</p>
        <p className="text-accent text-[10px] font-bold uppercase tracking-widest mt-1">
          Faixa Preta · Fundador
        </p>
      </div>
    </div>
  </div>

  {/* AQUI ENTRA O TRECHO: Ele fica fora da div com overflow-hidden para não ser cortado */}
  <div className="absolute -bottom-4 -right-4 bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg z-10">
    Sem fins lucrativos
  </div>
</div>
{/* --- FIM DO BLOCO DA FOTO --- */}
</div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        className="py-24 px-6 text-center text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #8b0000, #000)' }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px'
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl tracking-wide mb-6">
            Pronto para
            <br />começar?
          </h2>
          <p className="text-zinc-300 mb-10 text-sm leading-relaxed">
            O Jiu-Jitsu vai além do esporte. É um caminho de autoconhecimento, disciplina e superação.
            Entre em contato e inicie sua jornada gratuitamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="btn-primary">
              Entre em Contato
            </Link>
            <Link to="/regras" className="px-8 py-3 rounded-full border-2 border-white/30 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
              Ver Código de Conduta
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
