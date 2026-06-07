import React, { useState, useMemo } from 'react'
import { productosVenta, categoriasVenta } from '../constants'
import TarjetaProducto from './TarjetaProducto'

const CatalogoProductos = ({ onQuoteProduct }) => {
  const [activeCategory, setActiveCategory] = useState('home')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [sortBy, setSortBy] = useState('popularidad')

  // Obtener marcas únicas
  const allBrands = useMemo(() => {
    const brands = new Set(productosVenta.map((p) => p.brand))
    return Array.from(brands).sort()
  }, [])

  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    let filtered = productosVenta

    // Filtrar por categoría
    if (activeCategory !== 'home') {
      filtered = filtered.filter((p) => p.category === activeCategory)
    }

    // Filtrar por rango de precio
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Filtrar por marca
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand))
    }

    // Ordenar
    const sorted = [...filtered]
    switch (sortBy) {
      case 'precio-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'precio-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'popularidad':
        sorted.sort((a, b) => b.popularity - a.popularity)
        break
      case 'recomendados':
        sorted.sort((a, b) => {
          if (a.isRecommended === b.isRecommended) return 0
          return a.isRecommended ? -1 : 1
        })
        break
      default:
        break
    }

    return sorted
  }, [activeCategory, priceRange, selectedBrands, sortBy])

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  return (
    <section className='py-16 text-theme'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Encabezado Centrado */}
        <div className='mb-16 text-center'>
          <h1 className='text-5xl sm:text-6xl font-bold text-theme mb-6 leading-tight'>
            Catálogo de Productos
          </h1>
          <p className='text-lg text-theme-muted max-w-2xl mx-auto'>
            Explora nuestro amplio catálogo de hardware, software, licencias y soluciones tecnológicas para tu empresa.
          </p>
        </div>

        <div className='flex gap-8'>
          {/* Panel de Filtros */}
          <aside className='w-72 flex-shrink-0 hidden lg:block'>
            <div className='sticky top-32 space-y-6'>
              {/* Filtrar por Categoría */}
              <div className='surface-panel rounded-[16px] p-6'>
                <h3 className='font-semibold text-theme mb-4'>Categorías</h3>
                <div className='space-y-3'>
                  <button
                    onClick={() => setActiveCategory('home')}
                    className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition ${
                      activeCategory === 'home'
                        ? 'bg-[#9B1022] text-white'
                        : 'text-theme-muted hover:bg-[#9B1022]/10'
                    }`}
                  >
                    Todos los productos
                  </button>
                  {categoriasVenta.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition ${
                        activeCategory === cat.id
                          ? 'bg-[#9B1022] text-white'
                          : 'text-theme-muted hover:bg-[#9B1022]/10'
                      }`}
                    >
                      {cat.icon} {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtrar por Precio */}
              <div className='surface-panel rounded-[16px] p-6'>
                <h3 className='font-semibold text-theme mb-4'>Precio</h3>
                <div className='space-y-3'>
                  <input
                    type='range'
                    min='0'
                    max='5000'
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className='w-full'
                  />
                  <input
                    type='range'
                    min='0'
                    max='5000'
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className='w-full'
                  />
                  <p className='text-sm text-theme-muted'>
                    ${priceRange[0]} - ${priceRange[1]}
                  </p>
                </div>
              </div>

              {/* Filtrar por Marca */}
              <div className='surface-panel rounded-[16px] p-6'>
                <h3 className='font-semibold text-theme mb-4'>Marca</h3>
                <div className='space-y-2 max-h-48 overflow-y-auto'>
                  {allBrands.map((brand) => (
                    <label key={brand} className='flex items-center gap-3 cursor-pointer'>
                      <input
                        type='checkbox'
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className='w-4 h-4 accent-[#9B1022]'
                      />
                      <span className='text-sm text-theme-muted hover:text-theme'>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Limpiar Filtros */}
              <button
                onClick={() => {
                  setActiveCategory('home')
                  setPriceRange([0, 5000])
                  setSelectedBrands([])
                  setSortBy('popularidad')
                }}
                className='w-full bg-[#9B1022]/20 text-[#9B1022] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#9B1022]/30 transition'
              >
                Limpiar Filtros
              </button>
            </div>
          </aside>

          {/* Zona de Productos */}
          <div className='flex-1'>
            {/* Opciones de Orden */}
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8'>
              <p className='text-sm text-theme-muted'>
                {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado
                {filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='px-4 py-2 rounded-lg bg-theme-surface text-theme border border-[#474E45] text-sm font-medium cursor-pointer outline-none focus:border-[#9B1022]'
              >
                <option value='popularidad'>Más Populares</option>
                <option value='recomendados'>Recomendados</option>
                <option value='precio-asc'>Menor Precio</option>
                <option value='precio-desc'>Mayor Precio</option>
              </select>
            </div>

            {/* Grid de Productos */}
            {filteredProducts.length > 0 ? (
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {filteredProducts.map((product) => (
                  <TarjetaProducto
                    key={product.id}
                    product={product}
                    onQuote={onQuoteProduct}
                  />
                ))}
              </div>
            ) : (
              <div className='py-16 text-center'>
                <p className='text-2xl text-theme-muted mb-2'>No se encontraron productos</p>
                <p className='text-theme-muted'>Intenta con otros filtros</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CatalogoProductos
