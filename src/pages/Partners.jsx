import React, { useState } from 'react'
import styles from '../style'
import { clients } from '../constants'

const Partners = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = clients[activeIndex]

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col`}> 
      <div className='w-full max-w-[900px] bg-black-gradient-2 rounded-[20px] p-8'>
        <button
          type='button'
          onClick={onBack}
          className='mb-6 text-secondary font-medium'
        >
          ← Volver al inicio
        </button>
        <h2 className={styles.heading2}>Nuestros socios</h2>
        <p className={`${styles.paragraph} mt-4`}>Un carrusel con nuestros partners destacados.</p>
        <div className='mt-8 flex flex-col items-center gap-6'>
          <div className='w-full p-6 bg-white/5 rounded-[20px] border border-white/10 flex flex-col items-center'>
            <img src={current.logo} alt={current.id} className='w-[180px] h-[60px] object-contain'/>
            <p className='text-dimWhite mt-4'>Partner {activeIndex + 1} de {clients.length}</p>
          </div>
          <div className='flex gap-4'>
            <button
              type='button'
              onClick={() => setActiveIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1))}
              className='px-5 py-3 rounded-[10px] bg-white/10 text-white'
            >
              Anterior
            </button>
            <button
              type='button'
              onClick={() => setActiveIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1))}
              className='px-5 py-3 rounded-[10px] bg-secondary text-primary'
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
