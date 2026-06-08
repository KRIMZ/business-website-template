import styles from '../style'
import { robot } from '../assets'

const PortadaVentas = ({ onContactClick }) => {
  return (
    <section id='home' className={`${styles.paddingY} flex flex-col lg:flex-row items-center gap-12 lg:gap-16 theme-bg`}>
      <div className='max-w-4xl'>
        <div className='inline-flex items-center gap-2 rounded-full bg-[#9B1022]/10 px-4 py-2 mb-6'>
          <span className='text-sm font-semibold text-[#9B1022]'>
            Tecnología para empresas y particulares
          </span>
        </div>

        <h1 className='font-poppins font-bold text-[42px] md:text-[64px] leading-tight text-theme mb-6'>
          Encuentra Hardware, Software, Licencias y Periféricos
        </h1>

        <p className='text-lg text-theme-muted max-w-3xl mb-8'>
          Compara productos, revisa especificaciones, encuentra las mejores
          soluciones tecnológicas y agrega todo a tu carrito en un solo lugar.
        </p>
        <div className='flex-1 relative w-full'>
          <div className='rounded-[40px] overflow-hidden border border-[#474E45] shadow-2xl bg-[#1A1F1A]/90'>
            <img src={robot} alt='Successys tecnologia' className='w-full h-full object-cover' />
          </div>
          <div className='pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#9B1022]/20 blur-3xl' />
          <div className='pointer-events-none absolute bottom-10 right-0 h-32 w-32 rounded-full bg-[#77817B]/20 blur-3xl' />
        </div>

        {/* Estadísticas */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='surface-panel rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022] border border-transparent'>
            <p className='text-3xl font-bold text-[#9B1022]'>500+</p>
            <p className='text-sm text-theme-muted'>Productos</p>
          </div>

          <div className='surface-panel rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022] border border-transparent'>
            <p className='text-3xl font-bold text-[#9B1022]'>50+</p>
            <p className='text-sm text-theme-muted'>Marcas</p>
          </div>

          <div className='surface-panel rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022] border border-transparent'>
            <p className='text-3xl font-bold text-[#9B1022]'>24/7</p>
            <p className='text-sm text-theme-muted'>Soporte</p>
          </div>

          <div className='surface-panel rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022] border border-transparent'>
            <p className='text-3xl font-bold text-[#9B1022]'>100%</p>
            <p className='text-sm text-theme-muted'>Licencias Originales</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortadaVentas

