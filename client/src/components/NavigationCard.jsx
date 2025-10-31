import { Link } from 'react-router-dom'
import '../styles/navigationCard.css'

export default function NavigationCard({ image, title, to = '#' }) {
  return (
    <Link to={to} className="nav-card" aria-label={title}>
      <div className="nav-card-media">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="nav-card-title">{title}</div>
    </Link>
  )
}
