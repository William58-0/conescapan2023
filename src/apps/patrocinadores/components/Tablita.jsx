import '../css.css';


export const Tablita = () => {
  return (
    <div>
      <table style={{ margin: 'auto', marginTop: '2%', width: '95%' }}>
        <thead style={{ textAlign: 'center' }}>
          <tr >
            <th style={{width:'22%'}} scope="col">Platinium</th>
            <th style={{width:'22%'}} scope="col">Oro</th>
            <th style={{width:'22%'}} scope="col">Plata</th>
            <th style={{width:'22%'}} scope="col">Bronce</th>
          </tr>
        </thead>
      </table>
      <div style={{ overflowY: 'scroll', maxHeight:'410px' }}>
        <table style={{ margin: 'auto', marginTop: '0', width: '95%' }}>
          <tbody >
          <tr>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={275} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={275} /></td>
              <td style={{backgroundColor:'black'}}>
                <img src="imgs/patrocinadores/plata_1.jpeg" width={275} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={275} /></td>
            </tr>
            <tr>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={275} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={275} /></td>
              <td><img src="imgs/patrocinadores/plata_2.png" width={275} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={275} /></td>
            </tr>
            <tr>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={250} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={250} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={250} /></td>
              <td><img src="imgs/patrocinadores/oro_1.jpg" width={250} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


