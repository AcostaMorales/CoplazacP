import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './pages/Home'
import Products from './pages/Products'

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  return (
    <div className="app-shell">
      <Header
        showBack={!isHome}
        onBack={() => navigate(-1)}
      />

      {/* Área de contenido desplazable entre header y footer */}
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productos/:categoria" element={<Products />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
