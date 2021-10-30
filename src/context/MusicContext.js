import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const MusicContext = createContext()

const MusicProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({})
    const [letra, setLetra] = useState('')
    const [info, setInfo] = useState({})
    const [isloading, setIsLoading] = useState(false)
    const [ultimasbusquedas, setUltimasBusquedas] = useState([])


    useEffect(() => {
        if(Object.keys(busqueda).length === 0) return
        const {artista, cancion} = busqueda

        const consultarAPIletras = async () => {
            setIsLoading(true)

            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

          const[letra, informacion] = await Promise.all([
            axios(url),
            axios(url2)
          ])

          setLetra(letra.data.lyrics)
          setInfo(informacion.data.artists[0])
          setTimeout(() => {
            setIsLoading(false)
          },300)
        }
        consultarAPIletras()

      }, [busqueda])




    return(
        <MusicContext.Provider
            value={{
                busqueda,
                letra,
                info,
                ultimasbusquedas,
                isloading,
                setBusqueda
            }}
        >
            {children}
        </MusicContext.Provider>
    )
}

export default MusicProvider