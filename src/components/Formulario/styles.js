import styled from "styled-components";

export const Form = styled.form`
  background: linear-gradient(
      to top,
      rgba(15, 32, 39, 0.4),
      rgba(32, 58, 67, 0.59),
      rgba(44, 83, 100, 0.8)
    ),
    url("img/fondo.svg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0 0 10px 10px;
  grid-area: formu;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

export const H1 = styled.h1`
  color: var(--neutral-light);
  grid-column: 1/13;
  grid-row: 1/5;
  align-self: center;
  justify-self: center;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-family: "News Cycle", sans-serif;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const InputSubmit = styled.input`
  padding: 0.7rem 1rem;
  outline: none;
  border: none;
  background-color: #ff4c4c;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  grid-column: 2/12;
  grid-row: 8/9;

  @media (min-width: 768px) {
    grid-column: 5/9;
    grid-row: 9/10;
  }
`;
