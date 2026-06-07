import styles from '../style'
import { products } from '../constants'

const Productos = () => (
  <section id='products' className={`${styles.paddingY} text-theme`}>
    <div className='max-w-7xl mx-auto px-6'>
      <div className='flex flex-col gap-4 mb-12'>
        <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold'>Productos</p>
        <h2 className='text-4xl sm:text-5xl font-bold leading-tight text-theme'>Tecnología preparada para tu empresa.</h2>
      </div>
      <div className='grid gap-6 lg:grid-cols-3'>
        {products.map((product) => (
          <div key={product.name} className='surface-panel rounded-[28px] p-6 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022]'>
            <div className='h-48 rounded-3xl theme-surface mb-6 flex items-center justify-center text-[#9B1022] text-5xl'>{product.icon}</div>
            <h3 className='text-xl font-semibold text-theme mb-3'>{product.name}</h3>
            <p className='text-theme-muted leading-7'>{product.description}</p>
          </div>
        ))}
      </div>
      <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
        <a
          href='/ventas.html'
          onClick={(e) => { e.preventDefault(); window.location.href = '/ventas.html' }}
          className='inline-flex items-center justify-center rounded-full bg-[#9B1022] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#7a1018]'
        >
          Ver productos
        </a>
        <p className='max-w-xl text-center text-theme-muted'>Abre la página de compra y venta diseñada para la próxima integración de SQL y gestión de inventario.</p>
      </div>
    </div>
  </section>
)

export default Productos
