import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/agenda', label: 'Agenda' },
  { to: '/professor', label: 'Professor' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/regras', label: 'Regras' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-2xl shadow-black/50' : 'bg-black/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/img/bjjlogo.png"
            alt="BJJ Desterro"
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <div className="hidden sm:block">
            <p className="font-display text-white text-xl tracking-widest leading-none">JIU-JITSU</p>
            <p className="text-[10px] text-red-700 font-bold uppercase tracking-[3px] leading-none mt-0.5">Desterro · PB</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 rounded
                 ${isActive
                   ? 'text-white bg-accent'
                   : 'text-zinc-400 hover:text-white hover:bg-white/10'
                 }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <Link
          to="/contato"
          className="hidden md:inline-flex btn-primary text-xs py-2 px-5"
        >
          Inscreva-se
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded transition-colors hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black border-t border-zinc-800 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col py-4 px-6 gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `py-3 px-4 text-sm font-bold uppercase tracking-widest rounded transition-all
                 ${isActive
                   ? 'text-white bg-accent'
                   : 'text-zinc-400 hover:text-white hover:bg-white/10'
                 }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contato"
            className="mt-4 btn-primary text-center text-xs py-3"
          >
            Inscreva-se
          </Link>
        </nav>
      </div>
    </header>
  )
}
