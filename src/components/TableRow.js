import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { MusicContext } from '../context/MusicContext';

const TableRow = ({icono, artista, cancion, urlP, funcion, id}) => {

    const {consultarAPIletras} = useContext(MusicContext)

    const buscarCancion = (artista,cancion) => {
        alert('buscando song')
        console.log(artista,cancion)
    }

    return (
        <Tr>
            <Td><Img src={urlP} alt={artista} /></Td>
            <Td>{artista}</Td>
            <Td>{cancion}</Td>
            <Td>
                <BotonIcono
                    onClick={() => funcion(id, cancion)}
                    ><FontIcono icon={icono}/></BotonIcono>
                <BotonIcono
                    onClick={() => buscarCancion(artista, cancion)}
                ><FontIcono icon={faSearch}/></BotonIcono>
            </Td>
        </Tr>
    )
}

const Img = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
`;

const BotonIcono = styled.button`
    border: none;
    padding: 0.2rem;
    cursor: pointer;
`;

const FontIcono = styled(FontAwesomeIcon)`
    font-size: 1rem;
    color: #FFA6A6;

    &:hover {
        color: #A60000;
    }
`;

const Td = styled.td`
    padding:0.8rem 0;
    `;

const Tr = styled.tr`
    color: #303643;
    font-size:0.8rem;
    &:nth-child(even) {
        background:rgba(29, 156, 240, 0.1);
    }
`;


export default TableRow
