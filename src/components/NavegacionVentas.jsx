import React, { useState } from 'react'
import { close, menu } from '../assets'
import { ventasNavLinks } from '../constants'

const NavegacionVentas = ({ activeCategory, onCategoryChange, theme, onToggleTheme }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar z-20 relative'>
      <div className='flex flex-col items-center justify-center gap-0 min-w-[240px]'>
        <span className='font-poppins font-semibold text-[28px] uppercase tracking-[0.18em] text-[#9B1022] leading-tight'>
          CATÁLOGO
        </span>
        <span className='font-poppins text-[12px] tracking-[0.18em] text-theme-muted leading-tight'>
          Productos y Soluciones
        </span>
      </div>
      <ul className='list-none sm:flex hidden justify-center items-center flex-1 gap-2'>
        {ventasNavLinks.map((nav) => (
          <li key={nav.id} className='mr-10 last:mr-0'>
            <button
              onClick={() => onCategoryChange(nav.id)}
              className={`font-poppins font-medium text-[15px] ${
                activeCategory === nav.id ? 'text-[#9B1022]' : 'text-theme-muted'
              } hover:text-[#9B1022] transition cursor-pointer bg-none border-none p-0`}
            >
              {nav.title}
            </button>
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
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 theme-card absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-xl sidebar shadow-2xl`}>
          <ul className='list-none flex flex-col justify-end items-start gap-4 w-full'>
            {ventasNavLinks.map((nav) => (
              <li key={nav.id} className='w-full'>
                <button
                  onClick={() => {
                    onCategoryChange(nav.id)
                    setToggle(false)
                  }}
                  className={`block w-full text-left font-poppins font-medium text-[16px] ${
                    activeCategory === nav.id ? 'text-[#9B1022]' : 'text-theme-muted'
                  } hover:text-[#9B1022] transition bg-none border-none p-0`}
                >
                  {nav.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavegacionVentas
