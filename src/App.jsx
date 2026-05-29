import React, { useEffect, useState } from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  Contact,
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials 
} from './components'
import styles from './style'
import { logo as successysLogo } from './assets'
import Noticias from './pages/Noticias'
import Modal from './components/Modal'
import { clients } from './constants'

const App = () => {
  const [activePage, setActivePage] = useState('main')
  const [pendingScroll, setPendingScroll] = useState(null)
  const [modalType, setModalType] = useState(null)
  const [activePartnersIndex, setActivePartnersIndex] = useState(0)

  useEffect(() => {
    if (activePage === 'main' && pendingScroll) {
      const element = document.getElementById(pendingScroll)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setPendingScroll(null)
    }
  }, [activePage, pendingScroll])

  const handleFooterLink = (item) => {
    if (item.action === 'anchor') {
      setActivePage('main')
      setPendingScroll(item.target)
      return
    }

    if (item.action === 'page') {
      setActivePage(item.target)
      return
    }

    if (item.action === 'modal') {
      setActivePage('main')
      setModalType(item.target)
    }
  }

  const closeModal = () => {
    setModalType(null)
    setActivePartnersIndex(0)
  }
  
  const handleContactClick = () => setModalType('contact')

  const renderPage = () => {
    switch (activePage) {
      case 'noticias':
        return <Noticias onBack={() => setActivePage('main')} />
      default:
        return null
    }
  }

  const renderModalContent = () => {
    switch (modalType) {
      case 'terms':
        return (
          <p className='text-dimWhite leading-[28px]'>
            Estos son los términos y servicios de Successys. Aquí describimos el uso, las
            responsabilidades y la política de datos de la empresa. Esta información está creada
            para que tus clientes entiendan cómo trabajamos y qué pueden esperar de nuestros
            servicios.
          </p>
        )
      case 'help':
        return (
          <form onSubmit={(e) => e.preventDefault()} className='grid gap-4'>
            <p className='text-dimWhite'>Describe tu necesidad y un agente virtual te guiará.</p>
            <input
              type='text'
              placeholder='Nombre'
              className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
            />
            <input
              type='email'
              placeholder='Correo electrónico'
              className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
            />
            <textarea
              rows='4'
              placeholder='¿En qué puedo ayudarte?'
              className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
            />
            <button
              type='submit'
              className='w-full py-4 rounded-[10px] bg-secondary text-primary font-poppins font-medium'
            >
              Iniciar asistencia virtual
            </button>
          </form>
        )
      case 'suggestions':
        return (
          <form onSubmit={(e) => e.preventDefault()} className='grid gap-4'>
            <p className='text-dimWhite'>Gracias por tu sugerencia. Cuéntanos cómo podemos mejorar.</p>
            <input
              type='text'
              placeholder='Nombre'
              className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
            />
            <textarea
              rows='5'
              placeholder='Escribe tu sugerencia aquí'
              className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
            />
            <button
              type='submit'
              className='w-full py-4 rounded-[10px] bg-secondary text-primary font-poppins font-medium'
            >
              Enviar sugerencia
            </button>
          </form>
        )
      case 'partnerForm':
        return (
          <form onSubmit={(e) => e.preventDefault()} className='grid gap-4'>
            <p className='text-dimWhite'>Rellena este formulario si quieres convertirte en socio.</p>
            <input
              type='text'
              placeholder='Nombre de la empresa'
              className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
            />
            <input
              type='text'
              placeholder='Tu nombre'
              className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
            />
            <input
              type='email'
              placeholder='Correo electrónico'
              className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
            />
            <textarea
              rows='4'
              placeholder='¿Por qué quieres ser socio?'
              className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
            />
            <button
              type='submit'
              className='w-full py-4 rounded-[10px] bg-secondary text-primary font-poppins font-medium'
            >
              Enviar solicitud
            </button>
          </form>
        )
      case 'contact':
        return <Contact onClose={closeModal} />
      case 'partners':
        const currentPartner = clients[activePartnersIndex]
        return (
          <div className='grid gap-6'>
            <p className='text-dimWhite'>Un carrusel con nuestros partners destacados</p>
            <div className='w-full p-6 bg-white/5 rounded-[20px] border border-white/10 flex flex-col items-center gap-4'>
              <img src={currentPartner.logo} alt={currentPartner.id} className='w-[180px] h-[60px] object-contain'/>
              <p className='text-dimWhite text-sm'>Partner {activePartnersIndex + 1} de {clients.length}</p>
            </div>
            <div className='flex gap-4'>
              <button
                type='button'
                onClick={() => setActivePartnersIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1))}
                className='flex-1 px-5 py-3 rounded-[10px] bg-white/10 text-white font-poppins font-medium hover:bg-white/20 transition-all'
              >
                Anterior
              </button>
              <button
                type='button'
                onClick={() => setActivePartnersIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1))}
                className='flex-1 px-5 py-3 rounded-[10px] bg-secondary text-primary font-poppins font-medium hover:bg-secondary/90 transition-all'
              >
                Siguiente
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} pt-20`}>
        <div className={`${styles.boxWidth}`}>
          <Hero onContactClick={handleContactClick}/>
        </div>
      </div>
      <button
        onClick={() => setModalType('contact')}
        className='floating-contact'
      >
        Contáctanos
      </button>
      <a href='#home' className='logo-home'>
        <img src={successysLogo} alt='Successys' className='logo-button' />
      </a>
      {activePage === 'main' ? (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats/>
            <Business onContactClick={handleContactClick}/>
            <Billing/>
            <CardDeal onContactClick={handleContactClick}/>
            <Testimonials/>
            <Clients/>
            <CTA onContactClick={handleContactClick}/>
            <Footer onFooterLink={handleFooterLink}/>
          </div>
        </div>
      ) : (
        <>
          {renderPage()}
          <Footer onFooterLink={handleFooterLink}/>
        </>
      )}
      {modalType && (
        <Modal
          title={
            modalType === 'terms'
              ? 'Términos y servicios'
              : modalType === 'help'
              ? 'Asistencia virtual'
              : modalType === 'suggestions'
              ? 'Sugerencias'
              : modalType === 'partnerForm'
              ? 'Conviértete en socio'
              : modalType === 'contact'
              ? 'Contactanos'
              : 'Nuestros socios'
          }
          onClose={closeModal}
        >
          {renderModalContent()}
        </Modal>
      )}
    </div>
  )
}

export default App