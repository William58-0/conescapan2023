import { Header } from '../components/Header';
import { useEffect } from "react"

export const CalendarPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-wrap w-full flex-col"
      style={{ backgroundImage:"url('imgs/calendario.png')", 
      backgroundSize:'cover',
      backgroundPosition:'top',
      position:'absolute', 
      top:'0',
      height:'120%' }}>
      <Header />
      <div className="w-full flex justify-center ">
        <h3 className="text-xl lg:text-5xl font-bold text-[#053A91]">Calendario</h3>
      </div>
    </div>
  )
}

