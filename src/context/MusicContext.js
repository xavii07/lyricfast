import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const MusicContext = createContext()

const initialUltimasBusquedas = JSON.parse(sessionStorage.getItem('ultimasbusquedas')) || []
const initiaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || []

const MusicProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({})
    const [letra, setLetra] = useState('')
    const [info, setInfo] = useState({})
    const [isloading, setIsLoading] = useState(false)
    const [ultimasbusquedas, setUltimasBusquedas] = useState(initialUltimasBusquedas)
    const [favoritos, setFavoritos] = useState(initiaFavoritos)



    useEffect(() => {
      consultarAPIletras()
    }, [busqueda])

    useEffect(() => {
      sessionStorage.setItem('ultimasbusquedas', JSON.stringify(ultimasbusquedas))
    }, [ultimasbusquedas])

    useEffect(() => {
      localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }, [favoritos])



    const consultarAPIletras = async () => {
      setIsLoading(true)

      if(Object.keys(busqueda).length === 0) return
      const {artista, cancion} = busqueda

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const[letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ])

      setLetra(letra.data.lyrics)
      setInfo(informacion.data.artists[0])
      const urlP = informacion.data.artists[0].strArtistThumb
      const id = Date.now()
      setUltimasBusquedas([{artista, cancion, urlP, id}, ...ultimasbusquedas])
      console.log('api')
      setTimeout(() => {
        setIsLoading(false)
      },300)
    }





    return(
        <MusicContext.Provider
            value={{
                busqueda,
                letra,
                info,
                ultimasbusquedas,
                favoritos,
                isloading,
                setBusqueda,
                setFavoritos,
            }}
        >
            {children}
        </MusicContext.Provider>
    )
}

export default MusicProvider