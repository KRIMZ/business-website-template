import React from 'react'

const Modal = ({ title, children, onClose }) => {
  return (
    <div className='fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 p-4'>
      <div className='w-full max-w-[600px] bg-primary rounded-[20px] p-6 border border-white/10 shadow-2xl'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='font-poppins font-semibold text-[28px] text-white'>{title}</h2>
          <button
            type='button'
            onClick={onClose}
            className='text-white text-[20px] bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20'
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
