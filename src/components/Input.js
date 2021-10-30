import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Input = ({tipo, name, placeholder, estado, setEstado, icono, label}) => {

    
   
    const handleChange = e => {
        setEstado({...estado, campo: e.target.value})
    }
   
   
    return (
        <>
            <DivInputIcon>
                <Label htmlFor={name}>{label}</Label>
                <InputForm 
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={handleChange}
                    autoComplete="off"
                /> 
                <DivIcon>
                    <FontAwesome icon={icono} />
                </DivIcon>
            </DivInputIcon>
        </>
        
    )
}


const DivInputIcon = styled.div`
    margin-top: 1.5rem;
    position: relative;
    grid-column: 2/12;
    grid-row:5/6;
    
    & + & {
        grid-row:6/7;
    }
    
    @media(min-width: 768px) {
        margin-left: 0.2rem;
        margin-top: 0;
        grid-row:5/6;
        grid-column: 2/7;
        
        & + & {
            grid-column: 7/12;
        }
    }

    @media(min-width: 992px) {
        grid-row:5/6;
        grid-column: 3/7;
        
        & + & {
            grid-column: 7/11;
        }
    }
`;

const InputForm = styled.input`
    background-color: var(--neutral-light);
    border: none;  
    outline: none;
    padding: 0.7rem 1rem;
    width: 100%;
    transition: background-color .2s ease-in;

    &:focus {
        background-color: #FF7979;
        color: var(--neutral-light);

        &::placeholder {
            color: #e4e4e4;
        }
    }
    
`;

const DivIcon = styled.div`
    background-color: #FF7979; 
    width: 2.5rem;
    height: 100%;
    position: absolute; 
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FontAwesome = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 16px;
`;

const Label = styled.label`
    display: block;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    position: absolute;
    top:-22px;
    left: 3px;
    
    @media(min-width: 768px) {
        top:-28px;
    }
    
`;

export default Input
