import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="app-footer">
      <nav className="footer-nav">
        <NavLink to="/" className="footer-link">🏠<span>Inicio</span></NavLink>
        <NavLink to="/productos/bolsas" className="footer-link">🛍️<span>Bolsas</span></NavLink>
        <NavLink to="/productos/desechables" className="footer-link">🥤<span>Desechables</span></NavLink>
        <NavLink to="/productos/limpieza" className="footer-link">🧼<span>Limpieza</span></NavLink>
      </nav>
    </footer>
  )
}
