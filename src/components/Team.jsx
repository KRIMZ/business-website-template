import styles from '../style'
import { team } from '../constants'

const Team = () => (
  <section id='team' className={`${styles.paddingY} text-theme`}>
    <div className='max-w-7xl mx-auto px-6'>
      <div className='flex flex-col gap-4 mb-12'>
        <p className='text-sm uppercase tracking-[0.3em] text-[#9B1022] font-semibold'>Equipo</p>
        <h2 className='text-4xl sm:text-5xl font-bold leading-tight text-theme'>El equipo que hace posible cada proyecto.</h2>
      </div>
      <div className='grid gap-6 lg:grid-cols-3'>
        {team.map((person) => (
          <article key={person.name} className='surface-panel rounded-[28px] p-6 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#9B1022]'>
            <div className='mb-6 h-48 rounded-3xl overflow-hidden bg-[#474E45]'>
              <img src={person.image} alt={person.name} className='w-full h-full object-cover' />
            </div>
            <h3 className='text-xl font-semibold text-theme mb-1'>{person.name}</h3>
            <p className='text-[#9B1022] font-semibold mb-3'>{person.role}</p>
            <p className='text-theme-muted leading-7'>{person.summary}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Team
