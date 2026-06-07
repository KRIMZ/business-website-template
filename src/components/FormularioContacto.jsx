import React, { useState } from 'react'

const FormularioContacto = ({ open, onClose, productData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: productData ? `Cotización para: ${productData.name}` : '',
  })

  if (!open) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí irá la lógica de envío
    console.log('Formulario enviado:', formData)
    onClose()
  }

  return (
    <div className='fixed inset-0 z-[60] flex items-center justify-center bg-[#1A1F1A]/90 px-4 py-6'>
      <div className='w-full max-w-3xl rounded-[32px] theme-card p-8 shadow-2xl max-h-[90vh] overflow-y-auto'>
        <div className='flex items-start justify-between gap-4 mb-8'>
          <div>
            <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold mb-2'>
              {productData ? 'Cotización de Producto' : 'Formulario de contacto'}
            </p>
            <h3 className='text-3xl font-bold text-theme'>
              {productData ? `${productData.name}` : 'Escríbenos para recibir asesoría personalizada.'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className='text-theme-muted hover:text-theme text-2xl leading-none'
            aria-label='Cerrar modal'
          >
            ×
          </button>
        </div>

        {/* Información del Producto si existe */}
        {productData && (
          <div className='surface-panel rounded-[16px] p-4 mb-6 border border-[#9B1022]/30'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <p className='text-xs uppercase text-theme-muted mb-1'>Producto</p>
                <p className='font-semibold text-theme'>{productData.name}</p>
              </div>
              <div>
                <p className='text-xs uppercase text-theme-muted mb-1'>Precio</p>
                <p className='font-semibold text-[#9B1022]'>${productData.price}</p>
              </div>
              <div>
                <p className='text-xs uppercase text-theme-muted mb-1'>Marca</p>
                <p className='font-semibold text-theme'>{productData.brand}</p>
              </div>
              <div>
                <p className='text-xs uppercase text-theme-muted mb-1'>Categoría</p>
                <p className='font-semibold text-theme capitalize'>{productData.category}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className='grid gap-4'>
          <input
            type='text'
            name='name'
            placeholder='Nombre completo'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full rounded-3xl border border-[#474E45] theme-surface px-5 py-4 text-theme outline-none focus:border-[#9B1022]'
          />
          <input
            type='email'
            name='email'
            placeholder='Correo electrónico'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full rounded-3xl border border-[#474E45] theme-surface px-5 py-4 text-theme outline-none focus:border-[#9B1022]'
          />
          <textarea
            name='message'
            placeholder='Mensaje'
            rows='5'
            value={formData.message}
            onChange={handleChange}
            className='w-full rounded-3xl border border-[#474E45] theme-surface px-5 py-4 text-theme outline-none focus:border-[#9B1022]'
          />
          <div className='mt-2 flex gap-3'>
            <button
              type='submit'
              className='inline-flex items-center justify-center rounded-full bg-[#9B1022] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#7a1018]'
            >
              {productData ? 'Solicitar Cotización' : 'Enviar mensaje'}
            </button>
            <button
              type='button'
              onClick={onClose}
              className='inline-flex items-center justify-center rounded-full border border-[#474E45] px-8 py-4 text-sm font-semibold text-theme transition hover:bg-theme-surface'
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormularioContacto
