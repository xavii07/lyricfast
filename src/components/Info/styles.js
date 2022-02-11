import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  0% {
      transform: rotate(10deg) scale(0.8);
}

100% {
    transform: rotate(0) scale(1);
  }
`;

export const DivBiography = styled.div`
  margin-top: 2rem;
  padding: 2rem 2rem 5rem 2rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 3rem;
  }
  @media (min-width: 1200px) {
    width: 40%;
  }
`;

export const DivImagen = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Imagen = styled.img`
  width: 40%;
  border-radius: 50%;
  animation-name: ${rotate};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: both;

  @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }
`;

export const DivIconos = styled.div`
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const DivInfo = styled.div`
  width: 90%;
  padding: 1em;
  margin-right: auto;
  margin-left: auto;

  p {
    text-align: left;
    color: #303643;
  }
`;
