import { useParams } from 'react-router-dom'
import NavigationCard from '../components/NavigationCard'

// Simulación: aquí tú agregas/filtras por categoría
const catalogo = {
  bolsas: [
    { id: 'b1', title: 'Bolsa camiseta',  image: '/assets/bolsa1.jpg' },
    { id: 'b2', title: 'Bolsa biodeg.',   image: '/assets/bolsa2.jpg' },
    { id: 'b3', title: 'Bolsa jumbo',     image: '/assets/bolsa3.jpg' },
  ],
  desechables: [
    { id: 'd1', title: 'Vaso 12 oz',      image: '/assets/vaso12.jpg' },
    { id: 'd2', title: 'Tapa domo',       image: '/assets/tapa.jpg' },
    { id: 'd3', title: 'Plato 9"',        image: '/assets/plato.jpg' },
  ],
  limpieza: [
    { id: 'l1', title: 'Cloro 1L',        image: '/assets/cloro.jpg' },
    { id: 'l2', title: 'Jabón multiusos', image: '/assets/jabon.jpg' },
    { id: 'l3', title: 'Fibras',          image: '/assets/fibra.jpg' },
  ]
}

export default function Products() {
  const { categoria } = useParams()
  const data = catalogo[categoria] ?? []
  const title = (categoria?.[0]?.toUpperCase() + categoria?.slice(1)) || 'Productos'

  return (
    <div className="page">
      <h2 className="page-title">{title}</h2>

      <section className="grid-2">
        {data.map(it => (
          <NavigationCard
            key={it.id}
            image={it.image}
            title={it.title}
            to="#"   // en el prototipo se queda en '#'; luego lo cambias a /producto/:id
          />
        ))}
      </section>
    </div>
  )
}
