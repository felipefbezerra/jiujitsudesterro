import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'


const valores = [
  { icon: 'fas fa-hand-fist', title: 'Disciplina', desc: 'O domínio da mente e do corpo para alcançar qualquer objetivo.' },
  { icon: 'fas fa-heart', title: 'Respeito', desc: 'Honrar mestres, adversários e a si mesmo em qualquer situação.' },
  { icon: 'fas fa-fire-alt', title: 'Perseverança', desc: 'Levantar após cada queda, superando todos os limites diários.' },
  { icon: 'fas fa-users', title: 'Comunidade', desc: 'Construir laços que vão além do tatame, fortalecendo famílias.' },
]

const graduados = [
  { nome: "Jerffeson Ramon", cargo: "Adulto - Faixa Roxa", img: "/img/membros/jerffeson.jpeg" },
  { nome: "Thaissa Vitória", cargo: "Adulto - Faixa Azul", img: "/img/membros/thaissavitoria.jpeg" },
  { nome: "Arquires Ryan", cargo: "Juvenil - Faixa Azul", img: "/img/membros/arquires.jpeg" },
  { nome: "Laís Oliveira", cargo: "Adulto - Faixa Azul", img: "/img/membros/laisoliveira.jpeg" },
  { nome: "Inácio Teles", cargo: "Adulto - Faixa Azul", img: "/img/membros/inacioteles.jpeg" },
  { nome: "Iasmin Silva", cargo: "Adulto - Faixa Azul", img: "/img/membros/iasminsilva.jpeg" },
]

export default function Sobre() {
  return (
    <div className="bg-light min-h-screen">
      <PageHero
        accent="Desde 2013"
        title="Nossa História"
        subtitle="Como um sonho em Desterro–PB se tornou um projeto que transforma vidas."
      />

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">Nossa Missão</p>
            <h2 className="font-display text-5xl tracking-wide text-black mb-6 leading-none">
              Mais que um Esporte,<br />Uma Ferramenta de Vida
            </h2>
            <div className="w-12 h-1 bg-accent mb-6" />
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              Fundado em 2013, o projeto sem fins lucrativos <strong>JIU-JITSU — Disciplina e Educação para a Vida</strong> nasceu do sonho de transformar realidades através da arte suave.
            </p>
            <p className="text-zinc-600 text-sm leading-relaxed mb-8">
              Dentro do tatame, ensinamos que a verdadeira vitória não está apenas em finalizar o oponente, mas em superar as próprias limitações diárias.
            </p>
            <Link to="/contato" className="btn-primary">
              Faça Parte do Projeto
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '2013', label: 'Funcionamento', icon: 'fas fa-flag' },
              { num: '80+', label: 'Alunos', icon: 'fas fa-users' },
              { num: '0', label: 'Custo Mensal', icon: 'fas fa-heart' },
              { num: '6', label: 'Dias por semana', icon: 'fas fa-calendar' },
            ].map(({ num, label, icon }) => (
              <div key={label} className="bg-zinc-50 rounded-2xl p-6 text-center border border-zinc-100">
                <i className={`${icon} text-accent text-2xl mb-3`}></i>
                <p className="font-display text-4xl text-black">{num}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="alunos" className="py-20 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent font-bold uppercase tracking-[4px] text-xs text-center mb-3">Reconhecimento</p>
          <h2 className="font-display text-5xl text-black tracking-wide text-center mb-4">Alunos Graduados</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {graduados.map((aluno, index) => (
              <div 
                key={index} 
                className="group relative bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={aluno.img} 
                    alt={aluno.nome} 
                    className="w-full h-full object-cover object-center"                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-display text-2xl text-white tracking-wider">{aluno.nome}</h3>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mt-1">
                      {aluno.cargo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção: Valores */}
      <section className="bg-zinc-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent font-bold uppercase tracking-[4px] text-xs text-center mb-3">Pilares</p>
          <h2 className="font-display text-5xl text-white tracking-wide text-center mb-4">Nossos Valores</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v) => (
              <div key={v.title} className="bg-zinc-800 rounded-2xl p-8 text-center hover:bg-zinc-700 transition-colors group">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-accent transition-colors">
                  <i className={`${v.icon} text-accent text-xl group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="font-display text-2xl text-white tracking-wider mb-2">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}