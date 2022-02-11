import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Img = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

export const BotonIcono = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
export const FontIcono = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: ${({ color }) => color};

  &:hover {
    color: #a60000;
  }
`;

export const Td = styled.td`
  padding: 0.8rem 0;
`;

export const Tr = styled.tr`
  color: #303643;
  font-size: 0.8rem;
  &:nth-child(even) {
    background: rgba(29, 156, 240, 0.1);
  }
`;

export const ContIconos = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
