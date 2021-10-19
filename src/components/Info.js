import React from 'react'
import 'boxicons'




const Info = ({info, infobusqueda}) => {

    const {strBiographyEN, strBiographyES, strArtistFanart, strFacebook, strTwitter, strLastFMChart} = info
    if(Object.keys(info).length === 0) return null
    
    const{artista} = infobusqueda

    const parrafo = (info.strBiographyES === null) ? <p className="card-text info">{strBiographyEN}</p> : <p className="card-text info">{strBiographyES}</p>

    return (
        <div className='card'>
            <h2 className='card-title text-center text-uppercase  text-info py-2'>{artista}</h2>
            <img className='card-img-top' src={strArtistFanart} alt={artista} />
            <div className='card-body'>



                <div className='row'>
                    <h4 className='my-3 col-6'>Biografia:</h4>
                    <nav className="my-3 card-text col-6 text-right">
                        <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                            <box-icon type='logo' name='facebook' color='#3b5998'></box-icon>
                        </a>
                        <a href={`https://${strTwitter}`} className='mx-3' target="_blank" rel="noopener noreferrer">
                            <box-icon name='twitter' type='logo' color='#1da1f2'></box-icon>
                        </a>
                        <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                            <box-icon type='solid' name='music' color='#d51007'></box-icon>
                        </a>
                    </nav>
                </div>












                <p className='card-text text-justify'>{parrafo}</p>
            </div>
        </div>
    )
}

export default Info
