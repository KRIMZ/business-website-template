import styles from '../style'
import { services } from '../constants'

const Servicios = () => (
  <section id='services' className={`${styles.paddingY} text-theme`}>
    <div className='max-w-7xl mx-auto px-6'>
      <div className='flex flex-col gap-4 mb-12'>
        <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold'>Servicios</p>
        <h2 className='text-4xl sm:text-5xl font-bold leading-tight text-theme'>Soluciones completas para empresas grandes.</h2>
      </div>
      <div className='grid gap-6 lg:grid-cols-3'>
        {services.map((service) => (
          <article key={service.title} className='surface-panel rounded-[28px] p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022]'>
            <div className='mb-6 inline-flex items-center justify-center rounded-3xl bg-[#9B1022]/10 text-[#9B1022] w-14 h-14'>
              <span className='text-2xl'>{service.icon}</span>
            </div>
            <h3 className='text-xl font-semibold text-theme mb-3'>{service.title}</h3>
            <p className='text-theme-muted leading-7'>{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Servicios
