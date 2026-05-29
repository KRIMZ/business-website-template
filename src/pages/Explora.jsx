import React from 'react'
import styles from '../style'

const Explora = ({ onBack }) => {
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
        <h2 className={styles.heading2}>Explora con nosotros</h2>
        <p className={`${styles.paragraph} mt-4`}>Descubre nuestros servicios y encuentra la mejor solución para tu empresa.</p>
        <form className='mt-8 grid gap-5'>
          <input
            type='text'
            placeholder='¿Qué te gustaría explorar?'
            className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
          />
          <input
            type='email'
            placeholder='Tu correo electrónico'
            className='w-full p-4 rounded-xl border border-white/20 bg-transparent text-white outline-none'
          />
          <button
            type='button'
            className='w-full py-4 rounded-[10px] bg-secondary text-primary font-poppins font-medium'
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  )
}

export default Explora
