import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faTrash} from '@fortawesome/free-solid-svg-icons'



const Tabla = () => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Artista</th>
                    <th>Cancion</th>
                    <th></th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Avicii</td>
                    <td>The nights</td>
                    <td><Img src="https://static.dw.com/image/43477419_303.jpg" alt="" /></td>
                    <td><FontAwesomeIcon icon={faStar}/></td>
                </tr>
            </tbody>
        </Table>
    )
}


const Table = styled.table`
    margin-top: 3rem;
    margin-bottom: 6rem;
    grid-area: tabla;
    text-align: center;
`;

const Img = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
`;

export default Tabla
