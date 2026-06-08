import React, { useEffect, useState } from 'react'
import { close, menu } from '../assets'
import { ventasNavLinks } from '../constants'
import { navLinks } from '../constants'

const NavegacionVentas = ({ activeCategory, onCategoryChange, theme, onToggleTheme }) => {
  const [toggle, setToggle] = useState(false)
  const [products, setProducts] = useState([])
  const [openMenu, setOpenMenu] = useState(false)
  


useEffect(() => {
  const loadProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/products')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error('Error cargando productos navbar:', error)
    }
  }

  loadProducts()
}, [])

const groupedProducts = products.reduce((acc, product) => {
  const category = product.category || 'otros'
  const brand = product.brand || 'Sin marca'

  if (!acc[category]) acc[category] = {}
  if (!acc[category][brand]) acc[category][brand] = []

  acc[category][brand].push(product)
  return acc
}, {})

const categoryLabels = {
  hardware: 'Hardware',
  software: 'Software',
  licencias: 'Licencias',
  perifericos: 'Periféricos',
  tecnologia: 'Tecnología',
}

return (
    <nav className='w-full flex py-6 justify-between items-center navbar z-20 relative'>
      <div className='flex flex-col items-center justify-center gap-0 min-w-[240px]'>
        <button 
          onClick={() => {
            window.location.href = '/'
          }}
          className='font-poppins font-semibold text-[28px] uppercase tracking-[0.18em] text-[#9B1022] leading-tight'>
          SUCCESSYS

        </button>
        <span className='font-poppins text-[12px] tracking-[0.18em] text-theme-muted leading-tight'>
          Information technology solutions
        </span>
      </div>
      <ul className='list-none sm:flex hidden justify-center items-center flex-1 gap-2'>
        {ventasNavLinks.map((nav) => (
          <li key={nav.id} className='mr-10 last:mr-0'>
            <button
              onClick={() => {
                if (nav.id === 'homesells') {
                  const section = document.getElementById('homesells')

                  if (section) {
                    section.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                  }

                  setOpenMenu(false)
                  return
                }

                setOpenMenu(true)
                onCategoryChange(nav.id)
              }}
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
      {openMenu && (
        <div
          onMouseLeave={() => setOpenMenu(false)}
          className='absolute left-0 top-full z-50 w-full rounded-b-3xl border-t border-[#474E45] bg-[#1A1F1A] px-8 py-8 shadow-2xl'
        >
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
            {Object.entries(groupedProducts).map(([category, brands]) => (
              <div key={category}>
                <h3 className='mb-3 text-sm font-bold uppercase text-[#9B1022]'>
                  {categoryLabels[category] || category}
                </h3>

                {Object.entries(brands).slice(0, 4).map(([brand, items]) => (
                  <div key={brand} className='mb-4'>
                    <button
                      onClick={() => {
                        onCategoryChange(category)
                        setOpenMenu(false)
                      }}
                      className='mb-1 block text-left text-sm font-semibold text-white hover:text-[#D36C75]'
                    >
                      {brand}
                    </button>

                    {items.slice(0, 3).map((product) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          onCategoryChange(category)
                          setOpenMenu(false)
                        }}
                        className='block text-left text-xs text-gray-300 hover:text-[#D36C75] mb-1'
                      >
                        {product.name}
                      </button>
                    ))}

                    <button
                      onClick={() => {
                        onCategoryChange(category)
                        setOpenMenu(false)
                      }}
                      className='mt-1 text-xs text-[#D36C75] hover:text-[#9B1022]'
                    >
                      Ver todos
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavegacionVentas
