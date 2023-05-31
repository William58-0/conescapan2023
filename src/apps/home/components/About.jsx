
import { ConescapanDescription } from './ConescapanDescription'

export const About = () => {
  return (
    <section className='w-full flex flex-wrap my-6 max-w-[1400px] mx-auto justify-between'>
      <div className='w-full lg:w-6/12 my-4'>
        <ConescapanDescription/>
      </div>
      <div className='w-full lg:w-6/12 my-4'>
        <div className='w-full p-3 flex justify-center lg:justify-start'>
          <img src="imgs/about1.jpeg" alt="Conescapan previos" className='w-full max-w-[400px] h-auto animate__animated animate__faster animate__fadeIn rounded-sm'/>
        </div>
        <div className='w-full p-3 flex justify-center lg:justify-end'>
          <img 
            src="imgs/about2.jpeg" 
            alt="Participacion de guatemala en conescapan 2022" 
            className='w-full max-w-[400px] h-auto animate__animated animate__faster animate__fadeIn rounded-sm'
          />
        </div>
      </div>
    </section>
  )
}


