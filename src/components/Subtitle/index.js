import styled from "styled-components";

const Subtitle = ({ text }) => {
  return <H3>{text}</H3>;
};

const H3 = styled.h3`
  text-transform: uppercase;
  text-align: center;
  color: #f80000;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export default Subtitle;
