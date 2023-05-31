import { activities } from "../../../constants/activities";
//import { DisplayActivity } from "./DisplayActivity";


export const Topics_Seleccion = () => {
  return (
    <section className='w-full flex flex-wrap max-w-[1400px] mx-auto justify-between'>
      {/*Topics*/}
      <aside className='bg-[#053A91] text-white shadow-lg rounded-md flex flex-wrap p-5 w-full lg:w-6/12'>
        <div>
          <h3 className='font-semibold text-lg md:text-xl mb-2'>
            List of Topics
          </h3>
        </div>
        <div className='m-3'>
          <ul className='list-disc'>
            <li>
              Sistemas de Potencia y Energía / Power and Energy Systems
            </li>
            <li>
              Energías Renovables / Renewable energy
            </li>
            <li>
              Sistemas de Telecomunicación / Telecommunication Systems
            </li>
            <li>
              Electrónica / electronics
            </li>
            <li>
              Ciencias de la tierra y teledetección / Earth sciences and remote sensing
            </li>
            <li>
              Sistemas de control automáticos / Automatic control systems
            </li>
            <li>
              Aplicaciones industriales / industrial applications
            </li>
            <li>
              Sistemas informáticos / Information systems
            </li>
            <li>
              TI y Telecomunicaciones / IT and Telecommunications
            </li>
            <li>
              Ingeniería biomédica / Biomedical engineering
            </li>
            <li>
              Aeronáutica / Aeronautics
            </li>
            <li>
              Machine learning / machine learning
            </li>
            <li>
              Inteligencia artificial / Artificial intelligence
            </li>
            <li>
              Automatización / Automation
            </li>
            <li>
              Robótica / robotics
            </li>
            <li>
              IoT
            </li>
          </ul>
        </div>
      </aside>
      {/*Selección de Trabajos*/}
      <aside className='flex flex-wrap p-5 w-full lg:w-6/12'>
        <div >
          <h3 className='font-semibold text-lg md:text-xl mb-2'>
            Selección de los trabajos
          </h3><br/>
          <p className='text-justify'>
            Cada uno de los artículos será evaluado por 3 revisores que asignarán un puntaje a cada uno de los artículos
            basados en los siguientes criterios: Adecuada revisión bibliográfica, buen desarrollo teórico, adecuada presentación
            de la metodología, análisis de los resultados, conclusiones coherentes con los resultados, bibliografía adecuada,
            buena redacción y que cumpla con el formato IEEE.
          </p>
          <p className='text-justify'>
            Los artículos aceptados que tengan el mayor puntaje serán programados en agenda para presentarse en formato
            conferencia de 20-30 minutos. El resto de los trabajos aprobados serán presentados en formato Póster, y expuestos
            durante una de las jornadas de día de conferencias de CONESCAPAN XL.
          </p>
        </div>
      </aside>
    </section>


  )
}