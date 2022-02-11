import styled from "styled-components";

export const DivGrid = styled.div`
  width: 80%;
  margin: 3rem auto 6rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  grid-auto-flow: dense;
  padding: 0.1rem;

  div {
    border: none;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`;
