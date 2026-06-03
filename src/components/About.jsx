import styles from '../style'

const About = () => (
  <section id='about' className={`${styles.paddingY} text-theme`}>
    <div className='max-w-7xl mx-auto px-6'>
      <div className='max-w-3xl'>
        <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold mb-4'>Quiénes somos</p>
        <h2 className='text-4xl sm:text-5xl font-bold text-theme leading-tight mb-6'>Successys transforma tecnología en resultados.</h2>
        <p className='text-base text-theme-muted leading-8 mb-6'>Somos un equipo de expertos en soluciones IT para empresas. Ayudamos a mejorar la productividad, seguridad y continuidad de negocio con desarrollo web, ciberseguridad, infraestructuras SAP y redes empresariales.</p>
        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='surface-panel rounded-3xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022]'>
            <h3 className='text-xl font-semibold text-theme mb-2'>Misión</h3>
            <p className='text-theme-muted'>Diseñar soluciones confiables y escalables para grandes organizaciones.</p>
          </div>
          <div className='surface-panel rounded-3xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022]'>
            <h3 className='text-xl font-semibold text-theme mb-2'>Visión</h3>
            <p className='text-theme-muted'>Ser el aliado tecnológico de confianza para empresas que quieren crecer con seguridad.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
