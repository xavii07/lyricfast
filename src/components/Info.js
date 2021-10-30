import React, { useContext } from 'react'
import { MusicContext } from '../context/MusicContext';
import styled, {keyframes} from 'styled-components'
import Icono from './Icono';
import Subtitle from './Subtitle';
import {faFacebook, faTwitter, faLastfm} from '@fortawesome/free-brands-svg-icons'




const Info = () => {

    const {info, busqueda} = useContext(MusicContext)

    if(Object.keys(busqueda).length === 0) return null
    if(Object.keys(info).length === 0) return null

    const{artista} = busqueda
    const {strBiographyEN, strBiographyES, strArtistFanart, strArtistThumb, strFacebook, strTwitter, strLastFMChart} = info

    console.log(artista.split(' ').join(''))
    const parrafo = strBiographyES || strBiographyEN
    const imagen = strArtistThumb || strArtistFanart
    const linkTwitter = strTwitter || `twitter.com/${artista.split(' ').join('')}`
    const linkMusic = strLastFMChart?.slice(7,-1) || `www.last.fm/music/${artista}/+tracks?rangetype=6mont`




    return (
        <DivBiography>
            <Subtitle text={artista}/>
            <DivImagen>
                <Imagen src={imagen} alt={artista} />
            </DivImagen>
            <DivIconos>
                <Icono link={strFacebook} icono={faFacebook} />
                <Icono link={linkTwitter} icono={faTwitter} />
                <Icono link={linkMusic} icono={faLastfm} />
            </DivIconos>
            <DivInfo>
                <p>{parrafo}</p>
            </DivInfo>
        </DivBiography>
    )
}

const rotate = keyframes`
  0% {
      transform: rotate(10deg) scale(0.8);
}

100% {
    transform: rotate(0) scale(1);
  }
`;

const DivBiography = styled.div`
    margin-top: 2rem;
    padding: 2rem 2rem 5rem 2rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;

    @media(min-width: 768px) {
        width: 50%;
        margin-top: 3rem;
    }
    @media(min-width: 1200px) {
        width: 40%;
    }
`;

const DivImagen = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Imagen = styled.img`
    width: 40%;
    border-radius: 50%;
    animation-name: ${rotate};
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count:infinite;
    animation-direction: alternate;
    animation-fill-mode: both;

    @media(min-width: 768px) {
        width: 30%;
    }

    @media(min-width: 1200px) {
        width: 25%;
    }
`;

const DivIconos = styled.div`
    width: 50%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const DivInfo = styled.div`
    width: 90%;
    padding: 1em;
    margin-right: auto;
    margin-left: auto;

    p {
        text-align: left;
        color: #303643;
    }
`;



export default Info


