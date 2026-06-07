import React from 'react'

const TarjetaProducto = ({ product, onQuote }) => {
  // Emojis por categoría
  const categoryIcons = {
    hardware: '💻',
    software: '⚙️',
    licencias: '📜',
    perifericos: '🖱️',
    tecnologia: '🔧',
  }

  const icon = categoryIcons[product.category] || '📦'

  // Calcular estrellas basado en popularidad
  const stars = Math.round((product.popularity || 0) / 20)

  return (
    <div className='surface-panel rounded-[24px] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022] border border-transparent overflow-hidden flex flex-col h-full'>
      {/* Imagen o Placeholder */}
      <div className='h-44 rounded-[16px] theme-surface mb-5 flex items-center justify-center text-5xl bg-gradient-to-br from-[#9B1022]/10 to-[#474E45]/10 flex-shrink-0'>
        {icon}
      </div>

      {/* Badges */}
      <div className='flex gap-2 mb-4 flex-wrap'>
        <span className='text-xs bg-[#9B1022]/20 text-[#9B1022] px-3 py-1 rounded-full font-semibold'>
          {product.brand}
        </span>
        {product.recommended && (
          <span className='text-xs bg-green-500/20 text-green-700 px-3 py-1 rounded-full font-semibold'>
            ⭐ Recomendado
          </span>
        )}
      </div>

      {/* Nombre */}
      <h3 className='text-lg font-semibold text-theme mb-2 line-clamp-2'>{product.name}</h3>

      {/* Categoría */}
      <p className='text-xs uppercase tracking-[0.1em] text-theme-muted mb-4 capitalize'>{product.category}</p>

      {/* Características */}
      <div className='mb-6 flex-grow'>
        {product.specs && product.specs.length > 0 ? (
          <ul className='text-sm text-theme-muted space-y-2'>
            {product.specs.slice(0, 2).map((spec, idx) => (
              <li key={idx} className='flex items-start gap-2'>
                <span className='text-[#9B1022] mt-0.5 flex-shrink-0'>•</span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-sm text-theme-muted'>{product.description}</p>
        )}
        {product.specs && product.specs.length > 2 && (
          <p className='text-xs text-theme-muted/60 mt-3'>+{product.specs.length - 2} más</p>
        )}
      </div>

      {/* Popularidad */}
      <div className='flex items-center gap-1 mb-6 py-3 border-t border-theme-muted/20'>
        <span className='text-xs text-theme-muted flex-shrink-0'>Popularidad:</span>
        <div className='flex gap-0.5'>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < stars ? '⭐' : '☆'} />
          ))}
        </div>
      </div>

      {/* Stock */}
      {product.stock !== undefined && (
        <div className='mb-4 py-3 border-t border-theme-muted/20'>
          <p className={`text-xs font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? `${product.stock} en stock` : 'Agotado'}
          </p>
        </div>
      )}

      {/* Precio y Botón */}
      <div className='flex items-center justify-between gap-4 pt-4 border-t border-theme-muted/20'>
        <div>
          <p className='text-xs text-theme-muted mb-1'>Desde</p>
          <p className='text-2xl font-bold text-[#9B1022]'>${product.price.toLocaleString()}</p>
        </div>
        <button
          onClick={() => onQuote(product)}
          disabled={product.stock === 0}
          className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold transition active:scale-95 ${
            product.stock === 0
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-[#9B1022] text-white hover:bg-[#7a1018]'
          }`}
        >
          {product.stock === 0 ? 'Agotado' : 'Cotizar'}
        </button>
      </div>
    </div>
  )
}

export default TarjetaProducto
