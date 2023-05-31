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
import { useState, useEffect, useRef } from 'react';

import { Header } from '../components/Header';


export const CalendarPage = () => {

  const [startAnimation, setStartAnimation] = useState(false);

  const elementoRef = useRef(null);

  const handleScroll = () => {
    if (elementoRef.current) {
      const posicionElemento = elementoRef.current.getBoundingClientRect().top;
      const alturaViewport = window.innerHeight;
      if (posicionElemento < alturaViewport) {
        setStartAnimation(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-wrap w-full justify-center flex-col">
      <Header />
      <div className="w-full flex justify-center my-1">
        <h3 className="text-xl lg:text-5xl font-bold text-[#053A91]">Calendario</h3>
      </div>
      
      <section style={{margin:'auto', marginTop:'2%'}}>
        <img src="imgs/calendario.jpg" alt="Conescapan 2023" width={770} />
      </section>

    </main>
  )
}

