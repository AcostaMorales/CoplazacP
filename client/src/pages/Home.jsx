import NavigationCard from '../components/NavigationCard'
import '../styles/misionVision.css';

export default function Main() {
  // Imagen promo (cámbiala por la real)
  const promoUrl = 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937306/promo_m47vy5.png'
  const parrafomision = 'Proporcionar soluciones integrales en productos de limpieza con altos estándares de calidad, precios competitivos y un servicio confiable, contribuyendo al bienestar de nuestros clientes mediante atención profesional y entregas eficientes en toda la región.';
  const parrafovision ='Consolidarnos como la empresa líder en distribución de productos de limpieza en Zacatecas y estados vecinos, distinguiéndonos por nuestra excelencia operativa, innovación constante y relaciones duraderas con nuestros clientes.';
  const parrafoobjetivo ='Ampliar nuestra cobertura comercial y fortalecer nuestra presencia regional mediante estrategias de distribución eficientes, alianzas estratégicas y la mejora continua en la calidad de nuestros productos y servicios.';
  const items = [
    { id: 1, title: 'Desechables',       image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761937961/ImagenCategoria_1_opv2rn.png',       to: '/productos/desechables' },
    { id: 2, title: 'Industrial',  image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761941035/PRODUCTOS_2_jb7eiu.png',  to: '/productos/industrial' },
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
      <div className="mision">
        <p>{parrafomision}</p>
      </div>
      <div className="vision">
        <p>{parrafovision}</p>
      </div>
      <div className="objetivo">
        <p>{parrafoobjetivo}</p>
      </div>

      <section className="grid-2">
        {items.map(it => (
          <NavigationCard key={it.id} image={it.image} title={it.title} to={it.to} />
        ))}
      </section>
    </div>
  )
}
