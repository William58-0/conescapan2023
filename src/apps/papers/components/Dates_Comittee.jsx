import { activities } from "../../../constants/activities";
//import { DisplayActivity } from "./DisplayActivity";


export const Dates_Comittee = () => {
  return (
    <section className='w-full flex flex-wrap max-w-[1400px] mx-auto justify-between'>
      {/*Dates*/}
      <aside className='flex flex-wrap p-5 w-full lg:w-6/12'>
        <div >
          <h3 className='font-semibold text-lg md:text-xl mb-2'>
            Dates
          </h3>
        </div>
        <table class="table table-striped">
          <thead className="text-center">
            <tr>
              <th scope="col">ACTIVIDAD</th>
              <th scope="col">FECHA</th>
              <th scope="col">RESPONSABLE</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>Fecha de inicio de recepción de artículos</td>
              <td>31 de mayo de 2023</td>
              <td>Autores</td>
            </tr>
            <tr>
              <td>Fecha límite de envío de artículos</td>
              <td>17 de julio de 2023</td>
              <td>Autores</td>
            </tr>
            <tr>
              <td>Notificación de artículos aceptados</td>
              <td>21 de agosto de 2023</td>
              <td>Comité Técnico</td>
            </tr>
            <tr>
              <td>Envío de Material de apoyo (presentaciones)</td>
              <td>31 de agosto de 2023</td>
              <td>Autores</td>
            </tr>
            <tr>
              <td>Notificación de lugar, fecha y hora de la presentación</td>
              <td>22 de septiembre de 2023</td>
              <td>Comité Técnico</td>
            </tr>
            <tr>
              <td>Realización de CONESCAPAN</td>
              <td>26 AL 29 de septiembre de 2023</td>
              <td>Todos</td>
            </tr>
          </tbody>
        </table>

      </aside>
      {/*Comittees*/}
      <aside className='bg-[#053A91] text-white  rounded-md flex flex-wrap p-5 w-full lg:w-6/12'>
        <div>
          <h3 className='font-semibold text-base md:text-xl mb-2'>
            Comittees - Organizing committee
          </h3><br />
          <p className='text-justify'>
            Diana Estefania Berducido Domingo<br />
            dianaberducido@ieee.org<br />
            +502 5573 5044<br />
          </p>
          <p className='text-justify'>
            Paula Madeleine Menchú Melgar<br />
            pmathnature@gmail.com<br />
            +502 5319 8692<br />
          </p><br />
          <h3 className='font-semibold text-base md:text-xl mb-2'>
            Contact
          </h3><br />
          <p>
            All questions about submissions should be emailed to: 502conescapan23@gmail.com
          </p>
        </div>
      </aside>
    </section >


  )
}