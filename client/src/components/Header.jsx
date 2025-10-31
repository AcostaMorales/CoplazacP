import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ showBack = false, onBack = () => {} }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="app-header">
      <div className="header-bar">
        <div className="left">
          {showBack ? (
            <button className="icon-btn" aria-label="Regresar" onClick={onBack}>←</button>
          ) : (
            <button className="icon-btn" aria-label="Menú" onClick={() => setOpen(v => !v)}>☰</button>
          )}
        </div>

        <div className="center">
          <Link to="/" className="logo">
            {/* Reemplaza por tu logo */}
            <span className="logo-text">COPLAZAC</span>
          </Link>
        </div>

        <div className="right">
          {/* Botón opcional (ej. carrito o notificaciones) */}
        </div>
      </div>

      {open && (
        <nav className="header-drawer" onClick={() => setOpen(false)}>
          <Link to="/">Inicio</Link>
          <Link to="/productos/bolsas">Bolsas</Link>
          <Link to="/productos/desechables">Desechables</Link>
          <Link to="/productos/limpieza">Limpieza</Link>
        </nav>
      )}
    </header>
  )
}
