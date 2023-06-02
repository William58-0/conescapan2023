import { Header } from '../components/Header';
import { Tablita } from '../components/Tablita';


export const Patrocinadores = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="w-full flex justify-center my-1" >
        <h3 className="text-xl lg:text-5xl font-bold text-[#053A91]">Patrocinadores</h3>
      </div>
      <Tablita />
    </main>
  )
}

