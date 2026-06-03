import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col theme-surface`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt='successys logo' className='w-[240px] h-auto object-contain mb-4' />
          <p className={`${styles.paragraph} mt-4 max-w-[320px] text-theme-muted`}>
            Successys ofrece soluciones tecnológicas profesionales para empresas grandes con foco en seguridad y rendimiento.
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 gap-6'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-semibold text-[18px] leading-[27px] text-theme'>
                {link.title}
              </h4>
              <ul className='list-none mt-4 space-y-3'>
                {link.links.map((item) => (
                  <li key={item.name} className='font-poppins text-[16px] leading-[24px] text-theme-muted hover:text-[#9B1022] cursor-pointer'>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-[#474E45]'>
        <p className='font-poppins font-normal text-[16px] leading-[27px] text-theme-muted'>
          © 2026 Successys. Todos los derechos reservados.
        </p>
        <div className='flex flex-row items-center gap-5'>
          {socialMedia.map((social) => (
            <a key={social.id} href={social.link} target='_blank' rel='noreferrer'>
              <img src={social.icon} alt={social.id} className='w-[22px] h-[22px] object-contain opacity-80 hover:opacity-100 transition' />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer
