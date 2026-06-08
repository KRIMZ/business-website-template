import React from 'react'

const FormularioCompra = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className='fixed inset-0 z-[70] flex items-center justify-center bg-black/80'>
      <div className='bg-[#1A1F1A] p-8 rounded-3xl w-full max-w-2xl'>
        <h2 className='text-2xl font-bold text-white mb-4'>
          Finalizar Compra
        </h2>

        <p className='text-gray-300 mb-6'>
          Formulario de compra en construcción.
        </p>

        <button
          onClick={onClose}
          className='bg-[#9B1022] text-white px-6 py-3 rounded-full'
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default FormularioCompra