import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const BarraNavegacion = ({ activeSection, theme, onToggleTheme }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar z-20 relative'>
      <div className='flex flex-col items-center justify-center gap-0 min-w-[240px]'>
        <span className='font-poppins font-semibold text-[28px] uppercase tracking-[0.18em] text-[#9B1022] leading-tight'>
          SUCCESSYS
        </span>
        <span className='font-poppins text-[12px] tracking-[0.18em] text-theme-muted leading-tight'>
          Information technology solutions
        </span>
      </div>
      <ul className='list-none sm:flex hidden justify-center items-center flex-1 gap-2'>
        {navLinks.map((nav) => (
          <li key={nav.id} className='mr-10 last:mr-0'>
            <a
              href={`#${nav.id}`}
              className={`font-poppins font-medium text-[15px] ${activeSection === nav.id ? 'text-theme-accent' : 'text-theme-muted'} hover:text-theme-accent transition`}
            >
              {nav.title}
            </a>
          </li>
        ))}
        <li>
          <button onClick={onToggleTheme} className='rounded-full border border-[#9B1022] bg-transparent px-5 py-3 text-sm font-semibold text-[#9B1022] transition hover:bg-[#9B1022]/10'>
            {theme === 'dark' ? 'Claro' : 'Oscuro'}
          </button>
        </li>
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 theme-card absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-xl sidebar shadow-2xl`}>
          <ul className='list-none flex flex-col justify-end items-start gap-4'>
            {navLinks.map((nav) => (
              <li key={nav.id} className='w-full'>
                <a
                  href={`#${nav.id}`}
                  className={`block w-full font-poppins font-medium text-[16px] ${activeSection === nav.id ? 'text-theme-accent' : 'text-theme-muted'} hover:text-theme-accent transition`}
                  onClick={() => setToggle(false)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default BarraNavegacion
