import React, { useContext } from 'react'
import styled from 'styled-components'
import { MusicContext } from '../context/MusicContext';
import Loader from './Loader';
import Subtitle from './Subtitle';


const Letra = () => {

    const {letra, busqueda, isloading} = useContext(MusicContext)

    if(Object.keys(busqueda).length === 0) return null
    if(letra.length === 0) return null
    const {cancion} = busqueda

    return (
        <DivLetra>
            {isloading ? <Loader /> : (
                <>
                    <Subtitle text={cancion} />
                    <PLetra>{letra}</PLetra>
                </>
            )}
        </DivLetra>
    )
}


const DivLetra = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem; 
    padding-bottom: 6rem;
    
    @media(min-width: 768px) {
        margin-top: 3rem; 
        width: 60%;
    }
`;

const PLetra = styled.p`
    white-space: pre;
    text-align: center;
    color: #303643;
`;


export default Letra
