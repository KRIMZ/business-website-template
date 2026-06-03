import React, { useEffect, useState } from 'react'
import {
  About,
  Contact,
  Footer,
  Hero,
  ModalContact,
  Navbar,
  Products,
  Providers,
  Services,
  Team,
} from './components'
import styles from './style'

const sectionIds = ['home', 'about', 'services', 'products', 'providers', 'team', 'contact']

const App = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [modalOpen, setModalOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0.25,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <div data-theme={theme} className='relative overflow-hidden theme-bg text-theme min-h-screen'>
      <div className='fixed inset-x-0 top-0 z-40 theme-card backdrop-blur-xl border-theme-border'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar
              activeSection={activeSection}
              theme={theme}
              onToggleTheme={toggleTheme}
            />
          </div>
        </div>
      </div>
      <main className={`${styles.paddingX} relative pt-28`}>
        <div className={`${styles.boxWidth}`}>
          <Hero onContactClick={() => setModalOpen(true)} />
          <About />
          <Services />
          <Products />
          <Providers />
          <Team />
          <Contact onOpenModal={() => setModalOpen(true)} />
          <Footer />
        </div>
      </main>
      <button
        onClick={() => setModalOpen(true)}
        className='fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#9B1022] px-5 py-4 text-sm font-semibold text-white shadow-2xl transition hover:bg-[#7a1018]'
        aria-label='Abrir contacto'
      >
        <span className='text-lg'>📞</span>
        Contacto
      </button>
      <ModalContact open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default App