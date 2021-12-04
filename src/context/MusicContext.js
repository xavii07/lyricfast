import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helper/helpHttp";


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
    const [datatoedit, setDatatoedit] = useState(null)



    useEffect(() => {
      consultarAPIletras()
      // eslint-disable-next-line
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

      const [letra, informacion] = await Promise.all([
        helpHttp().get(url),
        helpHttp().get(url2)
      ])

      setLetra(letra)
      setInfo(informacion)
      const urlP = informacion.artists && informacion.artists[0].strArtistThumb
      const id = Date.now()
      setUltimasBusquedas([{artista, cancion, urlP, id}, ...ultimasbusquedas])
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
                datatoedit,
                ultimasbusquedas,
                favoritos,
                isloading,
                setBusqueda,
                setFavoritos,
                setDatatoedit
            }}
        >
            {children}
        </MusicContext.Provider>
    )
}

export default MusicProvider