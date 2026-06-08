import React, { useState } from 'react'

const FormularioContacto = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  if (!open) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        alert(data.message || 'Error al enviar el formulario')
        return
      }

      alert('Contacto guardado correctamente')

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })

      onClose()
    } catch (error) {
      console.error('Error al enviar formulario:', error)
      alert('No se pudo conectar con el servidor')
    }
  }

  return (
    <div className='fixed inset-0 z-[60] flex items-center justify-center bg-[#1A1F1A]/90 px-4 py-6'>
      <div className='w-full max-w-3xl rounded-[32px] theme-card p-8 shadow-2xl max-h-[90vh] overflow-y-auto'>
        <div className='flex items-start justify-between gap-4 mb-8'>
          <div>
            <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold mb-2'>
              Formulario de contacto
            </p>
            <h3 className='text-3xl font-bold text-theme'>
              Escríbenos para recibir asesoría personalizada.
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

          <input
            type='tel'
            name='phone'
            placeholder='Teléfono'
            value={formData.phone}
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
            required
            className='w-full rounded-3xl border border-[#474E45] theme-surface px-5 py-4 text-theme outline-none focus:border-[#9B1022]'
          />

          <div className='mt-2 flex gap-3'>
            <button
              type='submit'
              className='inline-flex items-center justify-center rounded-full bg-[#9B1022] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#7a1018]'
            >
              Enviar mensaje
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