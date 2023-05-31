import { useState, useEffect, useRef } from 'react';

import { Header } from '../components/Header';
import '../css.css';
import { Tablita } from '../components/Tablita';


export const Patrocinadores = () => {
  return (
    <main className="flex flex-wrap w-full justify-center flex-col">
      <Header />
      <div className="w-full flex justify-center my-1" >
        <h3 className="text-xl lg:text-5xl font-bold text-[#053A91]">Patrocinadores</h3>
      </div>
      <Tablita />
    </main>
  )
}

