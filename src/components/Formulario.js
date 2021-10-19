import React, { useState } from 'react'
import Error from './Error'

const Formulario = ({setInfoBusqueda}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })
    const [error, setError] = useState(false)


    //actualizar el estado cuando el usuario escribe en los inputs
    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //estraer los datos que ingresa
    const {artista, cancion} = busqueda


    //cunado el usuario presiona el boton buscar cancion
    const handleSubmit = e => {
        e.preventDefault()

        //validar los inputs
        if(artista.trim() === '' || cancion.trim() === '') {
            setError(true)
            return
        }

        //si pasa la validacion
        setError(false)

        setInfoBusqueda(busqueda)
    }




    return (
           <div className='container header'>
                <div className='row'>
                    <form 
                        onSubmit={handleSubmit}
                        className='col pb-5 mt-3'
                        >
                        <h1 className='text-center text-white'>Your Lyrics</h1>

                       <div className='row my-4'>
                           <div className='col-11 mx-auto col-md-6 mb-3'>
                                <label>Artista</label>
                                <input 
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre Artista'
                                    name='artista'
                                    onChange={handleChange}
                                    value={artista}
                                    /> 
                           </div>   
                           
                           <div className='col-11 mx-auto col-md-6'>
                                <label>Canción</label>
                                <input 
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre Canción'
                                    name='cancion'
                                    onChange={handleChange}
                                    value={cancion}
                                    /> 
                           </div>   
                       </div>

                       {error && <Error mensaje='Todos los campos son Obligatorios'/>}
                       <input 
                        type='submit'
                        className='btn btn-danger col-11 col-md-6 d-block mx-auto'
                        value='Buscar Letra'
                        />
                    </form>
                </div>     
           </div>
    )
}

export default Formulario
