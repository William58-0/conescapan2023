import { useEffect } from 'react';

import { Header } from '../components/Header';
import { About } from '../components/About';
import { Submission } from '../components/Submission';
import { Topics_Seleccion } from '../components/Topics_Seleccion';
import { Dates_Comittee } from '../components/Dates_Comittee';
import { Links } from '../components/Links';


export const PaperPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <main className="flex flex-wrap w-full justify-center flex-col"
      style={{ overflow: 'hidden' }}>
      <Header />
      <div className="w-full flex justify-center ">
        <h3 className="text-xl lg:text-5xl font-bold text-[#053A91]">Call for Papers</h3>
      </div>
      <About />
        <Submission />
        <Topics_Seleccion />
        <Dates_Comittee />
        <Links/>
    </main>
    <br/><br/><br/>
    </>
  )
}

