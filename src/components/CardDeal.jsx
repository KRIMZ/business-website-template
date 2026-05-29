import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = ({ onContactClick }) => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Eficiencia, seguridad y resultados <br className='sm:block hidden'/>en cada solución TI.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Experiencia en proyectos TI, desarrollo de sofware,
          integracion de sistemas, BI, SAP, ISO27001 y NIST.
          Trabajamos en entornos exigentes, con soluciones 
          personalizadas y eficientes.
        </p>
        <Button onClick={onContactClick} styles='mt-10'>Contactanos!</Button>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
