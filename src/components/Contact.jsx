import styles from '../style'

const Contact = ({ onOpenModal }) => (
  <section id='contact' className={`${styles.paddingY} text-theme`}>
    <div className='max-w-7xl mx-auto px-6'>
      <div className='flex flex-col gap-4 mb-10'>
        <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold'>Contacto</p>
        <h2 className='text-4xl sm:text-5xl font-bold leading-tight text-theme'>¿Listo para impulsar tu área de TI?</h2>
        <p className='max-w-3xl text-theme-muted leading-8'>Déjanos tu mensaje y un especialista se comunicará contigo para analizar tu proyecto, optimizar la infraestructura y proteger tu empresa.</p>
      </div>
      <div className='grid gap-6 lg:grid-cols-[1.3fr_0.7fr]'>
        <div className='rounded-[32px] theme-card p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl'>
          <p className='text-theme-muted leading-8 mb-8'>Estamos aquí para ayudarte con desarrollo web, ciberseguridad, SAP, diseño de redes y soluciones de hardware para equipos empresariales.</p>
          <button onClick={onOpenModal} className='inline-flex items-center justify-center rounded-full bg-[#9B1022] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#7a1018]'>Enviar solicitud</button>
        </div>
        <div className='rounded-[32px] theme-card p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl'>
          <div className='space-y-6'>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold mb-2'>Email</p>
              <p className='text-theme-muted'>hola@successys.com</p>
            </div>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold mb-2'>Teléfono</p>
              <p className='text-theme-muted'>+52 55 1234 5678</p>
            </div>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold mb-2'>Ubicación</p>
              <p className='text-theme-muted'>Ciudad de México, México</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
