import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
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

export const Ul = styled.ul`
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
export const NavLin = styled(NavLink)`
  color: #fff;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const FontAwesome = styled(FontAwesomeIcon)`
  font-size: 16px;
`;
