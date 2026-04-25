import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-500 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-white text-2xl tracking-wider mb-3">JIU-JITSU</h3>
            <p className="text-xs text-accent font-bold tracking-widest uppercase mb-4">Disciplina e Educação para a Vida</p>
            <p className="text-sm leading-relaxed">
              Projeto social sem fins lucrativos fundado em 2013 em Desterro – PB.
              Transformando vidas através da arte suave.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/sobre', label: 'Nossa História' },
                { to: '/agenda', label: 'Agenda de Treinos' },
                { to: '/professor', label: 'Professor' },
                { to: '/galeria', label: 'Galeria' },
                { to: '/regras', label: 'Código de Conduta' },
                { to: '/contato', label: 'Contato & Inscrição' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <i className="fas fa-envelope text-accent mt-0.5 w-4 flex-shrink-0"></i>
                <span>jiusocialprojeto25@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-phone text-accent mt-0.5 w-4 flex-shrink-0"></i>
                <span>(83) 98690-9986 / (83) 98134-7497</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-location-dot text-accent mt-0.5 w-4 flex-shrink-0"></i>
                <span>Rua Aprígio Leite, S/N, Centro<br />Desterro – PB</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a
                href="https://wa.me/558386909986"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-green-600 hover:text-white transition-all"
              >
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
              <a
                href="https://www.instagram.com/projetojiujitsu_desterro/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-pink-600 hover:text-white transition-all"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <p>© 2026 JIU-JITSU — Disciplina e Educação para a Vida</p>
          <p className="text-zinc-600">CNPJ 62.946.261/0001-56</p>
        </div>
      </div>
    </footer>
  )
}
