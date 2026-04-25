import PageHero from '../components/PageHero'

const faqs = [
  { q: 'O projeto é realmente gratuito?', r: 'Sim. O projeto é sem fins lucrativos e todas as aulas são completamente gratuitas para a comunidade.' },
  { q: 'Qual a idade mínima para participar?', r: 'Aceitamos crianças a partir de 5 anos na turma infantil. Adultos de qualquer idade são bem-vindos.' },
  { q: 'Preciso ter experiência prévia?', r: 'Não. Aceitamos iniciantes completos. O professor adapta o ensino ao nível de cada aluno.' },
  { q: 'O que devo levar na primeira aula?', r: 'Roupas confortáveis (agasalho ou bermuda) e disposição. O kimono não é obrigatório no início.' },
  { q: 'Posso assistir antes de me inscrever?', r: 'Com certeza. Venha visitar um treino e conheça o ambiente antes de qualquer compromisso.' },
]

export default function Contato() {
  return (
    <div>
      <PageHero
        accent="Fale Conosco"
        title="Contato"
        subtitle="Tire suas dúvidas, agende uma visita ou inscreva-se no projeto."
      />

      <section className="bg-light py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Info & Links */}
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">Informações</p>
              <h2 className="font-display text-5xl text-black tracking-wide mb-6">Entre em Contato</h2>
              <div className="w-12 h-1 bg-accent mb-8" />

              <ul className="space-y-5 mb-10">
                {[
                  { icon: 'fas fa-envelope', label: 'E-mail', value: 'jiusocialprojeto25@gmail.com', href: 'mailto:jiusocialprojeto25@gmail.com' },
                  { icon: 'fas fa-phone', label: 'Ramon', value: '(83) 98690-9986', href: 'tel:+558386909986' },
                  { icon: 'fas fa-phone', label: 'Jerffeson', value: '(83) 98134-7497', href: 'tel:+558381347497' },
                  { icon: 'fas fa-location-dot', label: 'Endereço', value: 'Rua Aprígio Leite, S/N, Centro — Desterro, PB', href: null },
                ].map(({ icon, label, value, href }) => (
                  <li key={label + value} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${icon} text-accent text-sm`}></i>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-black font-semibold text-sm hover:text-accent transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-black font-semibold text-sm">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Social CTAs */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/558386909986"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: '#25d366', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  WhatsApp — Professor Ramon
                </a>
                <a
                  href="https://wa.me/558381347497"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: '#25d366', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  WhatsApp — Jerffeson
                </a>
                <a
                  href="https://www.instagram.com/projetojiujitsu_desterro/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                    boxShadow: '0 4px 15px rgba(220,39,67,0.3)'
                  }}
                >
                  <i className="fab fa-instagram text-xl"></i>
                  Instagram — @projetojiujitsu_desterro
                </a>
              </div>
            </div>

            {/* Right: FAQ */}
            <div>
              <p className="text-accent font-bold uppercase tracking-[4px] text-xs mb-3">Dúvidas Frequentes</p>
              <h2 className="font-display text-5xl text-black tracking-wide mb-6">FAQ</h2>
              <div className="w-12 h-1 bg-accent mb-8" />

              <div className="space-y-3">
                {faqs.map(({ q, r }) => (
                  <details key={q} className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden group">
                    <summary className="px-6 py-5 font-bold text-sm text-black cursor-pointer list-none flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors">
                      <span>{q}</span>
                      <i className="fas fa-chevron-down text-accent text-xs flex-shrink-0 transition-transform duration-300 group-open:rotate-180"></i>
                    </summary>
                    <p className="px-6 pb-5 text-zinc-500 text-sm leading-relaxed border-t border-zinc-100 pt-4">
                      {r}
                    </p>
                  </details>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-zinc-900 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-zinc-800">
                  <p className="text-white font-bold text-sm flex items-center gap-2">
                    <i className="fas fa-location-dot text-accent"></i>
                    Localização
                  </p>
                </div>
                <div className="relative h-48 flex items-center justify-center bg-zinc-800">
                  <a
                    href="https://maps.google.com/?q=Rua+Aprigio+Leite,+Desterro,+PB"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  >
                    <i className="fas fa-map-location-dot text-5xl text-accent opacity-60"></i>
                    <span className="text-xs font-bold uppercase tracking-widest">Abrir no Google Maps</span>
                    <span className="text-xs text-zinc-500">Rua Aprígio Leite, S/N, Centro — Desterro, PB</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
