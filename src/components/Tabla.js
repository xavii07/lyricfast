import React from 'react'
import styled from 'styled-components'
import TableRow from './TableRow'



const Tabla = ({titulo, icono, areglo, funcion}) => {


    return (
        <Table>
            <caption>{titulo}</caption>
            <THead>
                <Tr>
                    <Th colSpan="2">Artista</Th>
                    <Th>Cancion</Th>
                    <Th>Acciones</Th>
                </Tr>
            </THead>
            <tbody>
                {areglo.map(array => (
                    <TableRow
                        key={array.id}
                        artista={array.artista}
                        cancion={array.cancion}
                        urlP={array.urlP}
                        icono={icono}
                        funcion={funcion}
                        id={array.id}
                    />
                ))}
            </tbody>
        </Table>
    )
}


const Table = styled.table`
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 6rem;
    background-color: #fff;
    text-align: center;
    border-collapse: collapse;
`;

const Tr = styled.tr`
    font-size:0.9rem;
`;

const Th = styled.th`
    padding:0.8rem 0;
`;

const THead = styled.thead`
     background:#FF4C4C;
    color:#fff;
    padding:1rem;
`;



export default Tabla
