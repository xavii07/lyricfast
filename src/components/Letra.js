import React, { Fragment } from 'react'

const Letra = ({letra, infobusqueda}) => {

    if(letra.length === 0) return null

    const {cancion } = infobusqueda

    return (
        <Fragment>
            <h2 className='text-center mt-4 mb-3 text-uppercase'>{cancion}</h2>
            <p className='letra text-center'>{letra}</p>
        </Fragment>
    )
}

export default Letra
