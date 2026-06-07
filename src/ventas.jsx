import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  NavegacionVentas,
  CatalogoProductos,
  PiePagina,
  FormularioContacto,
} from './components'
import styles from './style'

const VentasPage = () => {
  const [activeCategory, setActiveCategory] = useState('home')
  const [modalOpen, setModalOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const handleQuoteProduct = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  return (
    <React.StrictMode>
      <div data-theme={theme} className='relative overflow-hidden theme-bg text-theme min-h-screen'>
        {/* Navbar Fija */}
        <div className='fixed inset-x-0 top-0 z-40 theme-card backdrop-blur-xl border-theme-border'>
          <div className={`${styles.paddingX} flex justify-center`}>
            <div className={`${styles.boxWidth}`}>
              <NavegacionVentas
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                theme={theme}
                onToggleTheme={toggleTheme}
              />
            </div>
          </div>
        </div>

        {/* Contenido Principal */}
        <main className={`${styles.paddingX} relative pt-28`}>
          <div className={`${styles.boxWidth}`}>
            <CatalogoProductos onQuoteProduct={handleQuoteProduct} />
          </div>
        </main>

        {/* Footer */}
        <PiePagina />

        {/* Botón Flotante de Contacto */}
        <button
          onClick={() => {
            setSelectedProduct(null)
            setModalOpen(true)
          }}
          className='fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#9B1022] px-5 py-4 text-sm font-semibold text-white shadow-2xl transition hover:bg-[#7a1018]'
          aria-label='Abrir contacto'
        >
          <span className='text-lg'>📞</span>
          Contacto
        </button>

        {/* Modal de Contacto/Cotización */}
        <FormularioContacto
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          productData={selectedProduct}
        />
      </div>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<VentasPage />)
