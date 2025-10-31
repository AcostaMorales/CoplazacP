import { useParams } from 'react-router-dom'
import NavigationCard from '../components/NavigationCard'

// Simulación: aquí tú agregas/filtras por categoría
const catalogo = {
  desechables: [
    //bolsas
    { id: 'b1', title: 'Bolsas 30x40',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_30X40cm_lbywox.png' },
    { id: 'b2', title: 'Bolsas 20x30.',   image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_20X30_cm_xcdujr.png' },
    { id: 'b3', title: 'Bolsas 15x25',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_15X25_yvx2sx.png' },
    { id: 'b4', title: 'Bolsas 40x60',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937673/bolsa_en_rollon_40X60_cm_re5ocv.png' },
    //bolsas negras
    { id: 'bn1', title: 'Bolsas negras 60x90',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938013/bolsa_para_basufra_60x90_pexc1h.png' },
    { id: 'bn2', title: 'Bolsas negras 120x90',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938012/bolsa_para_basura_120x90_jhhapd.png' },
    { id: 'bn1', title: 'Bolsas negras jumbo',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938011/bolsa_jumbo_j8gifv.png' },
    { id: 'bn1', title: 'Bolsas negras grandes',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938010/bolsa_grande_mxy6x2.png' },
    { id: 'bn1', title: 'Bolsas negras mediana',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938007/bolsa_mediana_rhtnnh.png' },
    

  ],
  industrial: [
    { id: 'd1', title: 'Vaso 12 oz',      image: '/assets/vaso12.jpg' },
    { id: 'd2', title: 'Tapa domo',       image: '/assets/tapa.jpg' },
    { id: 'd3', title: 'Plato 9"',        image: '/assets/plato.jpg' },
  ],
  jerceria: [
    { id: 'l1', title: 'Cloro 1L',        image: '/assets/cloro.jpg' },
    { id: 'l2', title: 'Jabón multiusos', image: '/assets/jabon.jpg' },
    { id: 'l3', title: 'Fibras',          image: '/assets/fibra.jpg' },
  ],
  papelinstitucionalkc: [
    { id: 'b1', title: 'Bolsas 30x40',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_30X40cm_lbywox.png' },
    { id: 'b2', title: 'Bolsa 20x30.',   image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_20X30_cm_xcdujr.png' },
    { id: 'b3', title: 'Bolsa 15x25',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_15X25_yvx2sx.png' },
    { id: 'b4', title: 'Bolsa 40x60',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937673/bolsa_en_rollon_40X60_cm_re5ocv.png' },

  ],
  papelinstitucionalpsf: [
    { id: 'b1', title: 'Bolsas 30x40',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_30X40cm_lbywox.png' },
    { id: 'b2', title: 'Bolsa 20x30.',   image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_20X30_cm_xcdujr.png' },
    { id: 'b3', title: 'Bolsa 15x25',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_15X25_yvx2sx.png' },
    { id: 'b4', title: 'Bolsa 40x60',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937673/bolsa_en_rollon_40X60_cm_re5ocv.png' },

  ],
  plasticos: [
    { id: 'b1', title: 'Bolsas 30x40',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_30X40cm_lbywox.png' },
    { id: 'b2', title: 'Bolsa 20x30.',   image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_20X30_cm_xcdujr.png' },
    { id: 'b3', title: 'Bolsa 15x25',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_15X25_yvx2sx.png' },
    { id: 'b4', title: 'Bolsa 40x60',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937673/bolsa_en_rollon_40X60_cm_re5ocv.png' },

  ],
  productosreconocidos: [
    { id: 'b1', title: 'Bolsas 30x40',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_30X40cm_lbywox.png' },
    { id: 'b2', title: 'Bolsa 20x30.',   image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_20X30_cm_xcdujr.png' },
    { id: 'b3', title: 'Bolsa 15x25',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_15X25_yvx2sx.png' },
    { id: 'b4', title: 'Bolsa 40x60',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937673/bolsa_en_rollon_40X60_cm_re5ocv.png' },

  ],
  quimicos: [
    { id: 'b1', title: 'Bolsas 30x40',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_30X40cm_lbywox.png' },
    { id: 'b2', title: 'Bolsa 20x30.',   image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_20X30_cm_xcdujr.png' },
    { id: 'b3', title: 'Bolsa 15x25',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937678/bolsa_en_rollo_15X25_yvx2sx.png' },
    { id: 'b4', title: 'Bolsa 40x60',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937673/bolsa_en_rollon_40X60_cm_re5ocv.png' },

  ],
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
