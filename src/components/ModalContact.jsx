import React from 'react'

const ModalContact = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className='fixed inset-0 z-[60] flex items-center justify-center bg-[#1A1F1A]/90 px-4 py-6'>
      <div className='w-full max-w-3xl rounded-[32px] theme-card p-8 shadow-2xl'>
        <div className='flex items-start justify-between gap-4 mb-8'>
          <div>
            <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold mb-2'>Formulario de contacto</p>
            <h3 className='text-3xl font-bold text-theme'>Escríbenos para recibir asesoría personalizada.</h3>
          </div>
          <button onClick={onClose} className='text-theme-muted hover:text-theme text-2xl leading-none' aria-label='Cerrar modal'>×</button>
        </div>
        <form className='grid gap-4'>
          <input type='text' placeholder='Nombre completo' className='w-full rounded-3xl border border-[#474E45] theme-surface px-5 py-4 text-theme outline-none focus:border-[#9B1022]' />
          <input type='email' placeholder='Correo electrónico' className='w-full rounded-3xl border border-[#474E45] theme-surface px-5 py-4 text-theme outline-none focus:border-[#9B1022]' />
          <textarea rows='5' placeholder='Mensaje' className='w-full rounded-3xl border border-[#474E45] theme-surface px-5 py-4 text-theme outline-none focus:border-[#9B1022]' />
          <div className='mt-2'>
            <button type='submit' className='inline-flex items-center justify-center rounded-full bg-[#9B1022] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#7a1018]'>Enviar mensaje</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalContact
