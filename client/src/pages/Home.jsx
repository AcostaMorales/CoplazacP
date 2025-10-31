import NavigationCard from '../components/NavigationCard'

export default function Main() {
  // Imagen promo (cámbiala por la real)
  const promoUrl = 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937306/promo_m47vy5.png'

  const items = [
    { id: 1, title: 'Desechables',       image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937961/ImagenCategoria_1_opv2rn.png',       to: '/' },
    { id: 2, title: 'Desechables',  image: '/assets/cat-desechables.jpg',  to: '/' },
    { id: 3, title: 'Limpieza',     image: '/assets/cat-limpieza.jpg',     to: '/' },
    { id: 4, title: 'Promociones',  image: '/assets/cat-promos.jpg',       to: '/' }
  ]

  return (
    <div className="page">
      <section className="promo">
        <img src={promoUrl} alt="Promoción" className="promo-img" />
      </section>

      <section className="grid-2">
        {items.map(it => (
          <NavigationCard key={it.id} image={it.image} title={it.title} to={it.to} />
        ))}
      </section>
    </div>
  )
}
