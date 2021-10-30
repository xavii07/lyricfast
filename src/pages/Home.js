import React from 'react';
import Formulario from '../components/Formulario';
import styled from 'styled-components';
import Table from '../components/Tabla';




function Home() {


  return (
    <ContainerGrid>
      <Formulario />
      <Table />
    </ContainerGrid>
  );
}



const ContainerGrid = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: 65rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50vh auto;
  grid-template-areas:
    "formu formu"
    "tabla tabla"
  ;
`;

export default Home;
