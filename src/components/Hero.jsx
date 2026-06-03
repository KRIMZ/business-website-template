import styles from '../style'
import { robot } from '../assets'

const Hero = ({ onContactClick }) => {
  return (
    <section id='home' className={`${styles.paddingY} flex flex-col lg:flex-row items-center gap-10 theme-bg`}>
      <div className='flex-1'>
        <div className='inline-flex items-center rounded-full border border-[#9B1022]/30 bg-[#9B1022]/10 px-4 py-2 mb-6 text-[#D36C75] text-sm font-medium'>
          Successys · Information Technology Solutions
        </div>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-theme'>
          Impulsamos tu negocio con tecnología segura, inteligente y confiable.
        </h1>
        <p className='mt-6 max-w-2xl text-theme-muted leading-8 text-lg'>
          Desarrollo web, ciberseguridad, SAP, redes y equipos corporativos diseñados para empresas grandes que necesitan rendimiento, control y continuidad.
        </p>
        <div className='mt-10 flex flex-col sm:flex-row gap-4'>
          <button onClick={onContactClick} className='rounded-full bg-[#9B1022] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#7a1018]'>Contáctanos</button>
          <a href='#services' className='inline-flex items-center justify-center rounded-full border border-[#474E45] px-8 py-4 text-sm font-semibold text-theme transition hover:border-[#9B1022] hover:text-[#9B1022]'>Ver servicios</a>
        </div>
        <div className='mt-12 grid gap-4 sm:grid-cols-2'>
          <div className='theme-card rounded-[28px] p-6 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022]'>
            <h3 className='text-xl font-semibold text-theme mb-2'>Soluciones para grandes empresas</h3>
            <p className='text-theme-muted leading-7'>Asesoría integral en TI, desde diseño de infraestructura hasta implementación de software crítico.</p>
          </div>
          <div className='theme-card rounded-[28px] p-6 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022]'>
            <h3 className='text-xl font-semibold text-theme mb-2'>Ciberseguridad con foco empresarial</h3>
            <p className='text-theme-muted leading-7'>Auditorías, respuesta ante incidentes y protección de activos digitales estratégicos.</p>
          </div>
        </div>
      </div>
      <div className='flex-1 relative'>
        <div className='rounded-[40px] overflow-hidden border border-[#474E45] shadow-2xl bg-[#1A1F1A]/90'>
          <img src={robot} alt='Successys tecnologia' className='w-full h-full object-cover' />
        </div>
        <div className='pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#9B1022]/20 blur-3xl' />
        <div className='pointer-events-none absolute bottom-10 right-0 h-32 w-32 rounded-full bg-[#77817B]/20 blur-3xl' />
      </div>
    </section>
  )
}

export default Hero
