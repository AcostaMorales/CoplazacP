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
    { id: 'bn3', title: 'Bolsas negras 50x70',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938005/bolsa_para_basura_50x70_slcept.png' },
    { id: 'bn4', title: 'Bolsas negras jumbo',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938011/bolsa_jumbo_j8gifv.png' },
    { id: 'bn5', title: 'Bolsas negras grandes',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938010/bolsa_grande_mxy6x2.png' },
    { id: 'bn6', title: 'Bolsas negras mediana',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938007/bolsa_mediana_rhtnnh.png' },
    { id: 'bn7', title: 'Bolsas negras chica',     image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938002/bolsa_ch_hv62gp.png' },
    

  ],
  industrial: [
    { id: 'd1', title: 'Cubeta con exprimidor',      image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938855/Copia_de_CUBETA_CON_EXPRIMIDOR_1_m7jhtg.png' },
    { id: 'd2', title: 'Toalla shop towels',       image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938811/toalla-shop-towels-2_eihsjf.png' },
    { id: 'd3', title: 'Toalla shop towels paquete con 10',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938809/toalla-shop-towels_tmxaoh.png' },
    { id: 'd4', title: 'Disco pulidor"',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938672/disco-pulidor_qtpo1y.png' },
    
    { id: 'd5', title: 'Dispensador de papel jumbo',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938667/DV039_acqe9w.png' },
    { id: 'd6', title: 'Cesto con ruedas"',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938665/cesto-ruedas_mpdy9o.png' },
    { id: 'd7', title: 'Dispensador de toallas interdobladas',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938663/DV041_l66fip.jpg' },
    { id: 'd8', title: 'Dispensador de toallas en rollo',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938658/DV013_cepmkj.jpg' },
    { id: 'd9', title: 'Dispensador de toallas interdobladas DV046',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938656/DV046_jltcou.jpg' },
    { id: 'd10', title: 'Dispensador de papel hiénico',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938653/DV039_hgrtrm.jpg' },
    { id: 'd11', title: 'Carro de limpieza',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938651/JA071_zwqxg7.jpg' },
    { id: 'd12', title: 'Señal de piso mojado',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938649/JA045_mfmkmx.jpg' },
    { id: 'd13', title: 'Dispensador de jabón DV012',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938646/DV012_ft78ub.jpg' },
    { id: 'd14', title: 'Dispensador de jabón DV018',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938644/DV018_zrx1gs.jpg' },
    { id: 'd15', title: 'Dispensador de jabón DV006',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938603/DV006_fwodig.jpg' },

  ],
  jarceria: [
    { id: 'j1', title: 'Jaladores',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939358/Copia_de_JALADORES_pk9bh5.png' },
    { id: 'j2', title: 'Microfibra',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939267/Microfibra_eaulzg.png' },
    { id: 'j3', title: 'Fregon',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939266/fregon_rsgvor.png' },
    { id: 'j4', title: 'Cepillo espatula',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939256/cepillo-espatula_gxf6pv.png' },
    { id: 'j5', title: 'Jerga',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939256/jerga_osryiq.png' },
    { id: 'j6', title: 'Cepillo vidrio',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939246/cepillo-vidrio_gng8tb.png' },
    { id: 'j7', title: 'Fibra acero',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939246/fibra-acero_v88g8q.png' },
    { id: 'j8', title: 'Mops',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939240/mops_mv7za8.png' },
    { id: 'j9', title: 'Escoba abanico',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939237/escoba-abanico_ivoiiq.png' },
    { id: 'j10', title: 'Cepillo plancha',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939234/cepillo-plancha_phuskq.png' },
    { id: 'j11', title: 'Franela',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939226/franela_orswvn.png' },
    { id: 'j12', title: 'Fibra ochito',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939221/fibra-ochito_g71yut.png' },
    { id: 'j13', title: 'Guante rojo',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939217/guante-rojo_s3sc5z.png' },
    { id: 'j14', title: 'Cepillo plano',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939216/cepillo-plano_x4payu.png' },
    { id: 'j15', title: 'Trapeador ',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939212/Copia_de_TRAPEADORES_4_gwjt8v.png' },
    { id: 'j16', title: 'Escoba cepillo',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939209/escoba-cepillo_vd40st.png' },
    { id: 'j17', title: 'Guantes verdes',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939200/guante-verde_jbjt7y.png' },
    { id: 'j18', title: 'Trapeadores de hilo',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761939198/Copia_de_TRAPEADORES_2_1_lbkaob.png' },
    { id: 'j19', title: 'Cepillo wc',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938941/cepillo-wc_mu5jpl.png' },
    { id: 'j20', title: 'Bomba WC',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938939/bomba-wc_ua636a.png' },
    { id: 'j21', title: 'Recogedor',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938938/recogedor_brqjf1.png' },
    { id: 'j22', title: 'Scotch-Brite fibra-esponja',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938937/p94_sdqjxt.png' },
    { id: 'j23', title: 'Scotch-Brite fibra para trabajo ligero',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938875/p66_uefvzh.png' },
    { id: 'j24', title: 'Scotch-Brite fibra para trabajo extra pesado',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938873/p76_wfw8d2.png' },
    { id: 'j25', title: 'Scotch-btite fibra verde',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938866/p96_xxbgjw.png' },
    { id: 'j26', title: 'Atomizador',        image: 'https://res.cloudinary.com/dbebikryr/image/upload/v1761938859/atomizador_s4cbfd.png' },


    
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
