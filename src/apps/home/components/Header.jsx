

export const Header = () => {
  return (
    <header className='p-10 bg-white w-full flex justify-end sticky top-0 z-50'>
      <div className='w-full xl:w-5/12 flex justify-between'>
        <div className='w-3/12 flex justify-end'>
            <a href="#nosotros" className='hover:underline text-[#053A91] text-sm md:text-md lg:text-lg px-1'>Nosotros</a>
        </div>
        <div className='w-3/12 flex justify-center'>
            <a href="#activities" className='hover:underline text-[#053A91] text-sm md:text-md lg:text-lg px-1'>Actividades</a>
        </div>
        <div className='w-3/12 flex justify-center'>
            <a href="patrocinadores" className='hover:underline text-[#053A91] text-sm md:text-md lg:text-lg px-1'>Patrocinadores</a>
        </div>
        <div className='w-3/12 flex justify-center'>
            <a href="#" className='hover:underline text-[#053A91] text-sm md:text-md lg:text-lg px-1'>Noticias</a>
        </div>
      </div>
    </header>
  )
}


