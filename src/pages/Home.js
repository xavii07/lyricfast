import React, {useEffect, useState} from 'react';
import Formulario from '../components/Formulario';
import Letra from '../components/Letra';
import Info from '../components/Info';
import axios from 'axios'







function Home() {

  const [infobusqueda, setInfoBusqueda] = useState({})
  const [letra, setLetra] = useState('')
  const [info, setInfo] = useState({})
  
  
  useEffect(() => {
    //extraer los datos de busqueda letraque viene desde el formulario
    const {artista, cancion} = infobusqueda
    
    if(Object.keys(infobusqueda).length === 0) return
    
    const consultarAPIletras = async () => {

        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
        const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const[letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ])

      
      
      setLetra(letra.data.lyrics)
      setInfo(informacion.data.artists[0])
      
    
   
    }
    consultarAPIletras()

  }, [infobusqueda])










  return (
   <>
     <Formulario 
      setInfoBusqueda={setInfoBusqueda}
     />

     <div className='container my-5'>
       <div className='row'>
         <div className='col-12 col-lg-6'>
            <Letra 
              infobusqueda={infobusqueda}
              letra={letra}
            />
         </div>

         <div className='col-11 mx-auto col-lg-6 info'>
           <Info
            info={info}
            infobusqueda={infobusqueda}
           />
         </div>
       </div>
     </div>

     
   </>
  );
}

export default Home;
