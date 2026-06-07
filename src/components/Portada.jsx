import styles from '../style'
import { robot } from '../assets'

const Portada = ({ onContactClick }) => {
  return (
    <section id='home' className={`${styles.paddingY} flex flex-col lg:flex-row items-center gap-12 lg:gap-16 theme-bg`}>
      <div className='flex-1 lg:text-left'>
        <div className='inline-flex items-center rounded-full border border-[#9B1022]/30 bg-[#9B1022]/10 px-4 py-2 mb-8 text-[#D36C75] text-sm font-medium'>
          Successys · Information Technology Solutions
        </div>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-theme mb-8'>
          Impulsamos tu negocio con tecnología segura, inteligente y confiable.
        </h1>
        <p className='text-lg sm:text-xl text-theme-muted leading-8 max-w-3xl mb-10'>
          Desarrollo web, ciberseguridad, SAP, redes y equipos corporativos diseñados para empresas grandes que necesitan rendimiento, control y continuidad.
        </p>
        <div className='mt-12 flex flex-col sm:flex-row gap-4 mb-14'>
          <button onClick={onContactClick} className='rounded-full bg-[#9B1022] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#7a1018] shadow-lg hover:shadow-xl'>Contáctanos</button>
          <a href='#services' className='inline-flex items-center justify-center rounded-full border border-[#474E45] px-8 py-4 text-sm font-semibold text-theme transition hover:border-[#9B1022] hover:text-[#9B1022]'>Ver servicios</a>
        </div>
        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='theme-card rounded-[28px] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022] border border-transparent'>
            <h3 className='text-lg font-semibold text-theme mb-3'>Soluciones para grandes empresas</h3>
            <p className='text-theme-muted leading-7 text-sm'>Asesoría integral en TI, desde diseño de infraestructura hasta implementación de software crítico.</p>
          </div>
          <div className='theme-card rounded-[28px] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022] border border-transparent'>
            <h3 className='text-lg font-semibold text-theme mb-3'>Ciberseguridad con foco empresarial</h3>
            <p className='text-theme-muted leading-7 text-sm'>Auditorías, respuesta ante incidentes y protección de activos digitales estratégicos.</p>
          </div>
        </div>
      </div>
      <div className='flex-1 relative w-full'>
        <div className='rounded-[40px] overflow-hidden border border-[#474E45] shadow-2xl bg-[#1A1F1A]/90'>
          <img src={robot} alt='Successys tecnologia' className='w-full h-full object-cover' />
        </div>
        <div className='pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#9B1022]/20 blur-3xl' />
        <div className='pointer-events-none absolute bottom-10 right-0 h-32 w-32 rounded-full bg-[#77817B]/20 blur-3xl' />
      </div>
    </section>
  )
}

export default Portada
