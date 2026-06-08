import React, { useState } from 'react'
import { useCarrito } from '../Context/CarritoContext'

const Carrito = () => {
  const [open, setOpen] = useState(false)

  const {
    cartItems,
    removeFromCart,
  } = useCarrito()

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(true)}
        className='fixed bottom-24 right-6 z-50 rounded-full bg-[#9B1022] px-5 py-4 text-white shadow-2xl'
      >
        🛒 ({totalItems})
      </button>

      {/* Modal carrito */}
      {open && (
        <div className='fixed inset-0 z-[80] bg-black/70 flex justify-end'>
          <div className='w-full max-w-md h-full theme-card p-6 overflow-y-auto'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-theme'>
                Carrito
              </h2>

              <button
                onClick={() => setOpen(false)}
                className='text-2xl text-theme'
              >
                ✕
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className='text-theme-muted'>
                No hay productos en el carrito.
              </p>
            ) : (
              <>
                <div className='space-y-4'>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className='surface-panel p-4 rounded-xl'
                    >
                      <h3 className='font-semibold text-theme'>
                        {item.name}
                      </h3>

                      <p className='text-theme-muted text-sm'>
                        {item.brand}
                      </p>

                      <p className='text-[#9B1022] font-bold'>
                        ${item.price.toLocaleString()}
                      </p>

                      <p className='text-sm text-theme-muted'>
                        Cantidad: {item.quantity}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className='mt-2 text-red-500 text-sm'
                      >
                        Eliminar
                      </button>
                    </div>
                  ))}
                </div>

                <div className='mt-6 pt-6 border-t border-theme-muted/20'>
                  <p className='text-xl font-bold text-theme'>
                    Total: ${total.toLocaleString()}
                  </p>

                  <button
                    className='mt-4 w-full rounded-full bg-[#9B1022] py-3 text-white font-semibold'
                  >
                    Comprar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Carrito