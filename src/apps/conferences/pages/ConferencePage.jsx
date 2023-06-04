import { Header } from '../components/Header';
import { Tablita } from '../components/Tablita';


export const ConferencePage = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="w-full flex justify-center my-1" >
        <h3 className=" font-bold text-[#053A91]">Conferencistas</h3>
      </div>
      <Tablita />
    </main>
  )
}
