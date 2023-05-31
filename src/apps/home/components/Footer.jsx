
import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full mt-auto flex-wrap py-11 bg-[#053A91]'>
        <div className='w-full flex justify-center'>
            <h2 className='text-center font-bold text-white'>Siguenos en nuestras redes sociales</h2>
        </div>
      <div className='w-full flex justify-center mt-4'>
        <div className='w-2/12 m-2 max-w-[60px]'>
            <a href="#">
                <img src="logos/facebook.png" alt="facebook" className='w-[40px]' />
            </a>
        </div>
        <div className='w-2/12 m-2 max-w-[60px]'>
            <a href="#">
                <img src="logos/instagram.png" alt="instagram" className='w-[40px]' />
            </a>
        </div>
        <div className='w-2/12 m-2 max-w-[60px]'>
            <a href="#">
                <img src="logos/gmail.png" alt="gmail" className='w-[40px]' />
            </a>
        </div>
      </div>
    </footer>
  )
}

