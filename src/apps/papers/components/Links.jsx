import { activities } from "../../../constants/activities";
//import { DisplayActivity } from "./DisplayActivity";


export const Links = () => {
  return (
    <>
      <br/><br/>
      <section className='w-full flex flex-wrap max-w-[1400px] my-6 mx-auto justify-between'>
        <aside className="col">
          <a href="https://easychair.org/conferences/?conf=conescapan2023" target="_blank" rel="noreferrer">
            <img
              src="imgs/enviarPaper.png"
              alt="a"
              width={300}
            />
          </a>
        </aside>
        <aside className="col">
          <a href="https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn" target="_blank" rel="noreferrer">
            <img
              src="imgs/plantilla.png"
              alt="a"
              width={300}
            />
          </a>
        </aside>
      </section>
    </>
  )
}


