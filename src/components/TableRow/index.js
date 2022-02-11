import React, { useContext } from "react";
import { Td, Tr, Img, BotonIcono, FontIcono, ContIconos } from "./styles";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { MusicContext } from "../../context/MusicContext";

const TableRow = ({ icono, artista, cancion, urlP, funcion, id }) => {
  const { setDatatoedit } = useContext(MusicContext);
  const history = useHistory();

  const buscarCancion = (artista, cancion) => {
    setDatatoedit({ artista, cancion });
    history.push("/");
  };

  return (
    <Tr>
      <Td>
        <Img src={urlP} alt={artista} />
      </Td>
      <Td>{artista}</Td>
      <Td>{cancion}</Td>
      <Td>
        <ContIconos>
          <BotonIcono onClick={() => funcion({ id, cancion })}>
            <FontIcono
              icon={icono}
              color={icono === faStar ? "#ffbd0a" : "#cc0000"}
            />
          </BotonIcono>
          <BotonIcono onClick={() => buscarCancion(artista, cancion)}>
            <FontIcono icon={faSearch} color="#123962" />
          </BotonIcono>
        </ContIconos>
      </Td>
    </Tr>
  );
};

export default TableRow;
