import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className={`${styles.paddingY} relative w-full`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-10 w-full gap-8 max-w-7xl mx-auto px-6`}>
        {/* Branding */}
        <div className='flex-1 flex flex-col justify-start'>
          <img src={logo} alt='successys logo' className='w-[200px] h-auto object-contain mb-4' />
          <p className='text-sm text-theme-muted leading-7 max-w-[300px]'>
            Transformamos tecnología en soluciones empresariales confiables y escalables.
          </p>
        </div>

        {/* Links */}
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap gap-8'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col gap-4'>
              <h4 className='font-semibold text-sm uppercase tracking-[0.1em] text-theme'>
                {link.title}
              </h4>
              <ul className='list-none space-y-3'>
                {link.links.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.link}
                      className='text-sm text-theme-muted hover:text-[#9B1022] transition duration-300'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider and Footer Bottom */}
      <div className='max-w-7xl mx-auto px-6 border-t border-[#474E45] pt-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-xs text-theme-muted'>
            © 2026 Successys. Todos los derechos reservados.
          </p>
          
          {/* Social Media */}
          <div className='flex flex-row items-center gap-6'>
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target='_blank'
                rel='noreferrer'
                aria-label={social.id}
                className='transition duration-300 hover:opacity-100 opacity-70'
              >
                <img 
                  src={social.icon} 
                  alt={social.id} 
                  className='w-5 h-5 object-contain' 
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
