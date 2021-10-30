import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { faFileAudio, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { MusicContext } from '../context/MusicContext';
import styled from 'styled-components';
import fondo from '../img/fondo.svg'
import Input from './Input';




const Formulario = () => {

    const [artista, setArtista] = useState({campo: "", valido: null})
    const [cancion, setCancion] = useState({campo: "", valido: null})

    const {setBusqueda} = useContext(MusicContext)
    const history = useHistory()


    const handleSubmit = e => {
        e.preventDefault()

        if(artista.campo.length > 0 && cancion.campo.length > 0) {
           setBusqueda({artista:artista.campo, cancion:cancion.campo})
           history.push('/letra')
        }

    }

    
    return (
        <Form 
            onSubmit={handleSubmit}
        >
            <H1> Search your favorite lyric</H1>
            <Input 
                tipo="text"
                placeholder="Avicii"
                name="artista"
                icono={faUserTie}
                label="Artista"
                estado={artista}
                setEstado={setArtista}
            />
            <Input 
                tipo="text"
                placeholder="The nights"
                name="cancion"
                icono={faFileAudio}
                label="Cancion"
                estado={cancion}
                setEstado={setCancion}
            />
            
            <InputSubmit 
                type='submit'
                value='Buscar Letra'
            />
        </Form>
    )
}




const Form = styled.form`
    background: linear-gradient(to top, rgba(15, 32, 39, 0.4), rgba(32, 58, 67, 0.59), rgba(44, 83, 100, 0.8)),url(${fondo}); 
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0 0 10px 10px;
    grid-area: formu;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
`;

const H1 = styled.h1`
    color: var(--neutral-light);
    grid-column:1/13;
    grid-row:1/5;
    align-self: center;
    justify-self: center;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-family: 'News Cycle', sans-serif;
    font-weight: 700;
    
    @media(min-width: 768px) {
        font-size: 1.5rem;
    }
`;

const InputSubmit = styled.input`
    padding: 0.7rem 1rem;
    outline: none;
    border: none;
    background-color: #FF4C4C;
    font-weight: 700;
    cursor: pointer;
    color: #fff;
    grid-column: 2/12;
    grid-row:8/9;
    
    @media(min-width: 768px) {
        grid-column: 5/9;
        grid-row:9/10;
    }
`;


export default Formulario
