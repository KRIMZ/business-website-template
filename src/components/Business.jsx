import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card transition-all duration-300 bg-transparent hover:bg-black-gradient-2 hover:shadow-[0_20px_50px_rgba(255,255,255,0.08)] cursor-pointer border border-white/10 hover:border-white/20`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = ({ onContactClick }) => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Confia en nosotros, <br className='sm:block hidden'/>lo hacemos por TI ;) .</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Transformamos la tecnologia en crecimiento, 
          desde 2015 apoyando con soluciones TI,
          eficientes, seguras y adaptadas.
          Experiencia, compromiso y calidad.
        </p>
        <Button onClick={onContactClick} styles='mt-10'>Contactanos!</Button>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
