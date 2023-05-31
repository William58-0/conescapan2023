import React from 'react'

export const ConescapanDescription = () => {
  return (
    <aside className='bg-[#053A91] text-white shadow-lg rounded-md flex flex-wrap p-5 w-full lg:w-10/12 animate__animated animate__fadeInLeft animate__faster'>
      <div className='w-full my-2'>
        <h3 className='font-semibold text-lg md:text-xl mb-2'>
            Acerca De CONESCAPAN:
        </h3>
        <p className='text-justify'>
        El Instituto de Ingenieros en Electricidad y Electrónica (IEEE) Sección Guatemala, 
        organiza la cuadragésima Convención de Estudiantes de Centroamérica y Panamá, 
        CONESCAPAN XL, Guatemala 2023, que es el mayor evento estudiantil de la región dónde 
        reúne a estudiantes y profesionales de área de la electricidad, electrónica y ramas 
        afines, con el fin de presentar, a través de conferencias, posters y visitas 
        técnicas, sus trabajos originales de investigación y aplicación, con un alto grado 
        de innovación tecnológica. Este es uno de los eventos más relevantes para los 
        miembros IEEE de la región, y se enfoca en las áreas de:
        </p>
      </div>
      <div className='m-3'>
        <ul className='list-disc'>
            <li>
                Potencia y Energía
            </li>      
            <li>
                Electrónica
            </li>
            <li>
                Aplicaciones Industriales
            </li>
            <li>
                Robótica y automatización
            </li>
            <li>
                Telecomunicaciones
            </li>
            <li>
                Electromedicina
            </li>
            <li>
                Sistemas computacionales
            </li>
        </ul>
      </div>
    </aside>
  )
}

