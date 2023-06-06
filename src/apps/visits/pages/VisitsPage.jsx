import React from 'react';
import { useEffect, useState } from "react"

import './css.css'
import { Header } from '../components/Header';

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const visitas = [{
  foto: 'imgs/visitas/visita_1.jpeg',
  nombre: 'Parque Eólico San Antonio el Sitio',
  lugar: 'Aldea Los Llanos Km 43, Carretera de a Dolores, Santa Elena Barillas, Guatemala',
  backgroundColor: "#0088FE",
  fontColor: "white"
}, {
  foto: 'imgs/visitas/visita_1.jpeg',
  nombre: 'Parque Eólico San Antonio el Sitio',
  lugar: 'Aldea Los Llanos Km 43, Carretera de a Dolores, Santa Elena Barillas, Guatemala',
  backgroundColor: "white",
  fontColor: "black"
},
]
const delay = 2500;

export const VisitsPage = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === visitas.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <Header />
      <div className="w-full flex justify-center my-1" >
        <h3 className=" font-bold text-[#053A91]">Visitas técnicas</h3>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, }}
        >
          {visitas.map((visita, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundColor: visita.backgroundColor, color: visita.fontColor }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                width: '100%'
              }}>
                <h4 style={{ margin: 'auto' }}>{visita.nombre}</h4>
                <img style={{ margin: 'auto' }} src={visita.foto} width={550} />
                <h5 style={{ margin: 'auto', fontSize: 'auto' }}>{visita.lugar}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {visitas.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}



