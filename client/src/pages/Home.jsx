import NavigationCard from '../components/NavigationCard'

export default function Main() {
  // Imagen promo (cámbiala por la real)
  const promoUrl = 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937306/promo_m47vy5.png'

  const items = [
    { id: 1, title: 'Desechables',       image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937961/ImagenCategoria_1_opv2rn.png',       to: '/productos/desechables' },
    { id: 2, title: 'Industrial',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761941035/PRODUCTOS_2_jb7eiu.png',  to: '/' },
    { id: 3, title: 'Jarceria',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939227/Copia_de_TRAPEADORES_3_1_gl9z9i.png',     to: '/' },
    { id: 4, title: 'Papel Insitucional (Kimberly-Clark)',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939386/Copia_de_SANITAS_1_txyepw.png',       to: '/' },
    { id: 5, title: 'Papel Insitucional (PSF)',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939497/2_qz3jki.png',  to: '/' },
    { id: 6, title: 'Plasticos',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761940248/plasticos_wrduh3.png',  to: '/' },
    { id: 7, title: 'Productos Reconocidos',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761940773/productos_xscvjv.png',to: '/' },
    { id: 8, title: 'Quimicos',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761941171/Copia_de_SPARK_BUBBLES_CEREZA_1_nzzkg9.png',       to: '/' },

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
