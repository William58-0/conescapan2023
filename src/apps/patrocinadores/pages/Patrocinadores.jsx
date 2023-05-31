import { useState, useEffect, useRef } from 'react';

import { Header } from '../components/Header';
import '../css.css';


export const Patrocinadores = () => {

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
      <div className="w-full flex justify-center my-1" >
        <h3 className="text-xl lg:text-5xl font-bold text-[#053A91]">Patrocinadores</h3>
      </div>

      <table style={{ margin: 'auto', marginTop: '2%', width: '85%' }}>
        <thead style={{ textAlign: 'center' }}>
          <tr>
            <th scope="col">Platinium</th>
            <th scope="col">Oro</th>
            <th scope="col">Plata</th>
            <th scope="col">Bronce</th>
          </tr>
        </thead>
      </table>
      <div style={{ overflowY: 'scroll' }}>
        <table style={{ margin: 'auto', marginTop: '2%', width: '85%' }}>
          <tbody >
            <tr>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
            </tr>
            <tr>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
            </tr>
            <tr>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={200} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

