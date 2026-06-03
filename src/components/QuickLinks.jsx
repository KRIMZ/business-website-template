import React from 'react'
import { navLinks } from '../constants'

const QuickLinks = ({ activeSection, onContactClick, onToggleTheme, theme }) => {
  return (
    <aside className='hidden lg:flex fixed right-6 top-28 z-40 flex-col gap-3 rounded-3xl theme-card p-4 shadow-2xl backdrop-blur-xl'>
      <div className='mb-2 rounded-3xl border border-white/10 bg-[#474E45]/90 p-3 text-sm font-semibold text-[#D36C75]'>Atajos</div>
      {navLinks.slice(0, 4).map((nav) => (
        <a
          key={nav.id}
          href={`#${nav.id}`}
          className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${activeSection === nav.id ? 'bg-[#9B1022] text-white shadow-lg' : 'bg-[#474E45]/80 text-[#D36C75] hover:bg-[#9B1022]/90 hover:text-white'}`}
        >
          {nav.title}
        </a>
      ))}
      <button
        onClick={onToggleTheme}
        className='mt-3 rounded-2xl border border-[#9B1022] bg-[#9B1022] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#7a0f1a]'
        aria-label='Cambiar tema'
      >
        {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
      </button>
      <button
        onClick={onContactClick}
        className='rounded-2xl border border-[#9B1022] bg-transparent px-4 py-3 text-sm font-semibold text-[#D36C75] transition hover:bg-[#9B1022]/10 hover:text-white'
      >
        Contacto rápido
      </button>
    </aside>
  )
}

export default QuickLinks
