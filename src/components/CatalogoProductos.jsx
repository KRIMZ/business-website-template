import React, { useState, useEffect, useMemo } from 'react'
import TarjetaProducto from './TarjetaProducto'

const CatalogoProductos = ({ onQuoteProduct }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeCategory, setActiveCategory] = useState('home')
  const [priceRange, setPriceRange] = useState([0, 3000000])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [sortBy, setSortBy] = useState('popular')

  // Cargar productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:5000/api/products')
        if (!response.ok) throw new Error('Error al cargar productos')
        const data = await response.json()
        setProducts(data)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Obtener categorías únicas
  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category))
    return Array.from(cats).sort()
  }, [products])

  // Obtener marcas únicas
  const allBrands = useMemo(() => {
    const brands = new Set(products.map((p) => p.brand))
    return Array.from(brands).sort()
  }, [products])

  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    let filtered = products

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
      case 'price_asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price_desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'popular':
        sorted.sort((a, b) => b.popularity - a.popularity)
        break
      case 'recommended':
        sorted.sort((a, b) => {
          if (a.recommended === b.recommended) return 0
          return a.recommended ? -1 : 1
        })
        break
      default:
        break
    }

    return sorted
  }, [activeCategory, priceRange, selectedBrands, sortBy, products])

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  const handleCategorySelect = (category) => {
    setActiveCategory(category)
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
                    onClick={() => handleCategorySelect('home')}
                    className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition ${
                      activeCategory === 'home'
                        ? 'bg-[#9B1022] text-white'
                        : 'text-theme-muted hover:bg-[#9B1022]/10'
                    }`}
                  >
                    Todos los productos
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition capitalize ${
                        activeCategory === cat
                          ? 'bg-[#9B1022] text-white'
                          : 'text-theme-muted hover:bg-[#9B1022]/10'
                      }`}
                    >
                      {cat}
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
                    max='9000000'
                    step='100000'
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className='w-full'
                  />
                  <input
                    type='range'
                    min='0'
                    max='9000000'
                    step='100000'
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className='w-full'
                  />
                  <p className='text-sm text-theme-muted'>
                    ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
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
                  setPriceRange([0, 3000000])
                  setSelectedBrands([])
                  setSortBy('popular')
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
                {loading ? 'Cargando...' : `${filteredProducts.length} producto${filteredProducts.length !== 1 ? 's' : ''} encontrado${filteredProducts.length !== 1 ? 's' : ''}`}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='px-4 py-2 rounded-lg bg-theme-surface text-theme border border-[#474E45] text-sm font-medium cursor-pointer outline-none focus:border-[#9B1022]'
              >
                <option value='popular'>Más Populares</option>
                <option value='recommended'>Recomendados</option>
                <option value='price_asc'>Menor Precio</option>
                <option value='price_desc'>Mayor Precio</option>
              </select>
            </div>

            {/* Mensaje de Error */}
            {error && (
              <div className='bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-8'>
                <p>Error: {error}</p>
                <p className='text-sm mt-2'>Asegúrate de que el backend está ejecutándose en http://localhost:5000</p>
              </div>
            )}

            {/* Estado de Carga */}
            {loading ? (
              <div className='text-center py-12'>
                <p className='text-theme-muted'>Cargando productos...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
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
              <div className='text-center py-12'>
                <p className='text-theme-muted'>No se encontraron productos que coincidan con los filtros</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CatalogoProductos
