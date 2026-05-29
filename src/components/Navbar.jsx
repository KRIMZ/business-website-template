import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='fixed top-6 left-1/2 transform -translate-x-1/2 z-[1000] floating-navbar'>
      <div className='w-full flex py-4 px-8 justify-between items-center bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-[0px_20px_80px_rgba(204,0,0,0.15)]'>
        <img src={logo} alt='successys' className='w-[100px] h-[28px] object-contain cursor-pointer' />
        <ul className='list-none sm:flex hidden justify-center items-center gap-8 flex-1 ml-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className='font-poppins font-normal cursor-pointer text-[14px] text-white hover:text-secondary transition-colors duration-300'
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[24px] h-[24px] object-contain cursor-pointer'
            onClick={() => setToggle((previous) => !previous)}
          />
          {toggle && (
            <div className='absolute top-16 right-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-6 w-[200px] shadow-[0px_20px_80px_rgba(204,0,0,0.15)]'>
              <ul className='list-none flex flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className='font-poppins font-normal cursor-pointer text-[14px] text-white hover:text-secondary transition-colors duration-300'
                  >
                    <a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
