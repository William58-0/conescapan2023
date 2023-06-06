/*
import React from 'react'

export const CalendarPage = () => {
  return (
    <div>
      <h1>Calendario</h1>
    </div>
  )
}
*/
import { Header } from '../components/Header';

export const CalendarPage = () => {
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

