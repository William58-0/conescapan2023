import './css.css'
import styled from 'styled-components';
import { useState } from 'react';
import { textos } from "./textos";

const ConTexto = styled.div`
  width: 85%;
  height: 450px;
  box-sizing: border-box;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${props => props.img}'), no-repeat center top;
  background-size: contain;
  background-repeat: no-repeat; 
  background-position: center; 
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
  margin: auto;
  font-size: 0.95em;
`;

const SinTexto = styled.div`
  width: 85%;
  height: 450px;
  box-sizing: border-box;
  background: url('${props => props.img}'), no-repeat center top;
  background-size: contain;
  background-repeat: no-repeat; 
  background-position: center; 
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
  margin: auto;
  max-heigth: 450px;
`;

const Foto = (numero, imagen, nombreInge, tema, texto, img) => {
  return (
    <>
      <h6 className='tema'>{tema}</h6>
      {
        img == numero ?
          <ConTexto img={"imgs/conferencistas/" + imagen}>
            <p style={{whiteSpace: 'pre-line'}}>{texto}</p>
          </ConTexto> :
          <SinTexto img={"imgs/conferencistas/" + imagen}>
            <div className='nombre-ing'>
              {nombreInge}
            </div>
          </SinTexto>
      }
    </>
  )
}

export const Tablita = () => {
  const [img, setImg] = useState(0);

  return (
    <div>
      <div style={{ overflowY: 'scroll', maxHeight: '500px' }}>
        <table style={{ margin: 'auto', marginTop: '0', width: '95%' }}>
          <tbody >
            <tr>
              <td onMouseOver={() => setImg(1)} onMouseLeave={() => setImg(0)}>
                {Foto(1, "ing edson raymundo.png", "Ing. Edson Raymundo",
                  "Tema: Política energética en Guatemala",
                  textos.ing_edson_raymundo, img)}
              </td>
              <td onMouseOver={() => setImg(2)} onMouseLeave={() => setImg(0)}>
                {Foto(2, "ing sergio kestler.png", "Ing. Sergio Kestler",
                  "Tema: Big Data, Inteligencia Artifical y Blockchain como herramientas innovadoraspara la hibridación de tecnologías verdes",
                  textos.ing_sergio_kestler, img)}
              </td>
              <td onMouseOver={() => setImg(3)} onMouseLeave={() => setImg(0)}>
                {Foto(3, "ing gabriel velasquez.png", "Ing. Gabriel Velasquez",
                  "Tema: Política energética y sus perspectivas a futuro",
                  textos.ing_gabriel_velasquez, img)}
              </td>
            </tr>
            <tr>
            <td onMouseOver={() => setImg(4)} onMouseLeave={() => setImg(0)}>
                {Foto(4, "ing marco baten.png", "Ing. Marco Baten",
                  "Tema:	Espectro radioelectrico en Guatemala",
                  textos.ing_marco_baten, img)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


