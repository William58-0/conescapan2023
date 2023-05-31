import { useState, useEffect, useRef } from 'react';

import { About } from '../components/About';
import { Activities } from '../components/Activities';
import { Header } from '../components/Header';
import { Links } from '../components/Links';
import { Presentation } from '../components/Presentation';
import { Stats } from '../components/Stats';
import { Footer } from '../components/Footer';


export const HomePage = () => {

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
        <Header/>
        <Presentation/>
        <About/>
        <Activities/>
        <Links/>
        <Stats startAnimation={startAnimation} reference={elementoRef}/>
        <Footer/>
    </main>
  )
}

