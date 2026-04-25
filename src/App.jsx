import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Agenda from './pages/Agenda'
import Galeria from './pages/Galeria'
import Regras from './pages/Regras'
import Contato from './pages/Contato'
import Professor from './pages/Professor'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/regras" element={<Regras />} />
          <Route path="/professor" element={<Professor />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
