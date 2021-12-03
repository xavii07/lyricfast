import React, { useContext } from 'react';
import Formulario from '../components/Formulario';
import styled from 'styled-components';
import Table from '../components/Tabla';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { MusicContext } from '../context/MusicContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)




const Home = () => {

  const {ultimasbusquedas, setFavoritos, favoritos} = useContext(MusicContext)

  const agregarFavoritos = (id) => {
      ultimasbusquedas.map(busqueda => busqueda.id === id ? setFavoritos([busqueda, ...favoritos]) : null)

      MySwal.fire({
        titleText: 'Agregado a favoritos',
        icon: 'success',
        toast: true,
        background: '#243b55',
        iconColor: '#FF4C4C',
        customClass: {text: "color-white"},
        position: 'top',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 1500,
        padding: '1rem'
      })
    }



  return (
    <ContainerGrid>
      <Formulario />
     {ultimasbusquedas.length > 0 && <DivTabla>
        <Table
          titulo="Ultimas Busquedas"
          icono={faStar}
          areglo={ultimasbusquedas}
          funcion={agregarFavoritos}
        />
      </DivTabla>}
    </ContainerGrid>
  );
}



const ContainerGrid = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: 65rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50vh;
  grid-template-areas:
    "formu formu"
  ;
`;


const DivTabla = styled.div`
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 80%;
    }

    @media (min-width: 992px) {
        width: 60%;
    }
`;


export default Home;
