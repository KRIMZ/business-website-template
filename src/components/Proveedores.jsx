import styles from '../style'
import { providerLogos } from '../constants'

const Proveedores = () => (
  <section id='providers' className={`${styles.paddingY} text-theme`}>
    <div className='max-w-7xl mx-auto px-6'>
      <div className='flex flex-col gap-4 mb-12'>
        <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold'>Proveedores</p>
        <h2 className='text-4xl sm:text-5xl font-bold leading-tight'>Marcas y partners con los que trabajamos.</h2>
      </div>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center'>
        {providerLogos.map((logo) => (
          <div key={logo.name} className='surface-panel rounded-[24px] p-6 flex items-center justify-center h-28 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022]'>
            {logo.src ? <img src={logo.src} alt={logo.name} className='max-h-12 object-contain' /> : <span className='text-theme-muted font-semibold'>{logo.name}</span>}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Proveedores
