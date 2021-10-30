import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'







const Icono = ({link, icono}) => {
    return (
        <IconoEnlace href={`https://${link}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icono} />
        </IconoEnlace>
    )
}


const IconoEnlace = styled.a`
    color: #FF7979; 
    font-size: 1rem;

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

export default Icono
