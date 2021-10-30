import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMusic, faUserTie, faImage, faStar } from '@fortawesome/free-solid-svg-icons'


const active = {
    fontWeight: "bold",
    color: "#FF4C4C"
  }


const Navbar = () => {
    return (
        <Nav>
            <Ul>
                <li><NavLin exact activeStyle={active} to="/"><FontAwesome icon={faHome} /><span>Home</span></NavLin></li>
                <li><NavLin exact activeStyle={active} to="/letra"><FontAwesome icon={faMusic} /><span>Letra</span></NavLin></li>
                <li><NavLin exact activeStyle={active} to="/artista"><FontAwesome icon={faUserTie} /><span>Artista</span></NavLin></li>
                <li><NavLin exact activeStyle={active} to="/album"><FontAwesome icon={faImage} /><span>Album</span></NavLin></li>
                <li><NavLin exact activeStyle={active} to="/favoritos"><FontAwesome icon={faStar} /><span>Favoritos</span></NavLin></li>
            </Ul>
        </Nav>
    )
}


const Nav = styled.nav`
    background: linear-gradient(to left, #141e30, #243b55);
    position: fixed;
    z-index: 100;
    width: 100%;
    bottom: 0;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Ul = styled.ul`
        display: flex;
        width: inherit;
        justify-content: space-evenly;
        list-style-type: none;

        @media (min-width: 768px) {
            width: 50%;
        }
        @media (min-width: 1200px) {
            width: 40%;
        }
`;
const NavLin = styled(NavLink)`
    color: #fff;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`;

const FontAwesome = styled(FontAwesomeIcon)`
    font-size: 16px;
`;



export default Navbar
