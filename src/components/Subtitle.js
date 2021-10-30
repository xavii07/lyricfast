import React from 'react'
import styled from 'styled-components';


const H3 = styled.h3`
    text-transform: uppercase;
    text-align: center;
    color: #F80000;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const Subtitle = ({text}) => {
    return (
        <H3>{text}</H3>
    )
}

export default Subtitle
