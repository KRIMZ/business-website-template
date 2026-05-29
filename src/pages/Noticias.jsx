import React from 'react'
import styles from '../style'

const Noticias = ({ onBack }) => {
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
        <h2 className={styles.heading2}>Noticias</h2>
        <p className={`${styles.paragraph} mt-4`}>Mantente al día con las últimas novedades de Successys y el mundo tecnológico.</p>
        <div className='mt-8 grid gap-5'>
          <input
            type='text'
            placeholder='Buscar noticias'
            className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
          />
          <div className='grid gap-4'>
            <article className='p-6 bg-white/5 rounded-[20px] border border-white/10'>
              <h3 className='text-white font-semibold text-[20px]'>Lanzamiento de Successys Cloud</h3>
              <p className='text-dimWhite mt-2'>Conoce cómo nuestra nueva plataforma ayuda a empresas a escalar su TI.</p>
            </article>
            <article className='p-6 bg-white/5 rounded-[20px] border border-white/10'>
              <h3 className='text-white font-semibold text-[20px]'>Tendencias de ciberseguridad 2026</h3>
              <p className='text-dimWhite mt-2'>Descubre las mejores prácticas para proteger tus datos y tu infraestructura.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Noticias
