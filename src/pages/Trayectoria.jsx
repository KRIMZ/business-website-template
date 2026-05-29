import React from 'react'
import styles from '../style'

const Trayectoria = ({ onBack }) => {
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
        <h2 className={styles.heading2}>Trayectoria</h2>
        <p className={`${styles.paragraph} mt-4`}>Conoce cómo hemos crecido y cómo ayudamos a las empresas a transformar su tecnología.</p>
        <div className='mt-8 grid gap-5'>
          <input
            type='text'
            placeholder='Tu nombre'
            className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
          />
          <input
            type='email'
            placeholder='Tu correo electrónico'
            className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
          />
          <textarea
            rows='4'
            placeholder='Cuéntanos qué quieres saber sobre nuestra trayectoria'
            className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
          />
          <button
            type='button'
            className='w-full py-4 rounded-[10px] bg-secondary text-primary font-poppins font-medium'
          >
            Solicitar información
          </button>
        </div>
      </div>
    </section>
  )
}

export default Trayectoria
