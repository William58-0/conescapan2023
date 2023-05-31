import { activities } from "../../../constants/activities";
//import { DisplayActivity } from "./DisplayActivity";


export const Submission = () => {
  return (
    <section id="submission" className="w-full flex flex-wrap my-2 justify-left bg-[#f1f1f1] py-4">
      <div className="w-full flex justify-center">
        <h2 className="font-bold text-[#053A91]">Submission Guidelines</h2>
      </div>
      <div style={{ marginLeft: '4%', marginRight: '2%' }}>
        <ul className='list-disc'>
          <li>
            Todos los trabajos deben ser originales y no enviarse simultáneamente a otra revista o conferencia. Full papers
          </li>
          <li>
            <strong>Deben ser entregados dentro del periodo de fechas establecidas.</strong> (Fecha limite para recibir papers :
            <strong>17 de Julio</strong> del 2023)
          </li>
          <li>
            Pueden tener varios autores, pero un máximo de dos expositores.
          </li>
          <li>
            Máximo <strong>6 páginas</strong>.
          </li>
          <li>
            Los trabajos deben enviarse en el formato <strong>IEEE elegido para el evento</strong>.
            <a href="https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn"> IEEE conference template</a>
          </li>
          <li>
            Como mínimo, el <strong>título y el abstract</strong> del artículo deben estar redactados en <strong>inglés.</strong>
          </li>
          <li>
            Deben Incluir:
            <ul className='pl-3 list-disc list-inside'>
              <li>
                Nombre del autor o autores
              </li>
              <li>
                Institución o compañía
              </li>
              <li>
                E-mail de contacto
              </li>
              <li>
                Abstract/Resumen, al menos 5 palabras clave
              </li>
              <li>
                Introducción, especificando el problema estudiado y el estado del arte con una discusión bibliográfica.
              </li>
              <li>
                Metodología.
              </li>
              <li className='text-justify'>
                Descripción del proyecto/investigación y resultados, la parte principal del artículo deberá presentar la
                fundamentación en la que se apoya el estudio, la metodología utilizada, un análisis de la información o resultados.
                Esto deberá estar organizado de forma secuencial y bien estructurada, con resultados numéricos presentados por
                tablas o gráficos
              </li>
              <li>
                Conclusión.
              </li>
              <li>
                Referencias
              </li>
            </ul>
          </li>
        </ul>
        <span>Aquí puedes encontrar el formato en IEEE para el paper :</span>
        <a href="https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn"> IEEE conference template</a>
      </div>
    </section>
  )
}


