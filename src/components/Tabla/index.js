import { Table, THead, Th, Tr } from "./styles";
import TableRow from "../TableRow";

const Tabla = ({ titulo, icono, areglo, funcion }) => {
  return (
    <Table>
      <caption>{titulo}</caption>
      <THead>
        <Tr>
          <Th colSpan="2">Artista</Th>
          <Th>Cancion</Th>
          <Th>Acciones</Th>
        </Tr>
      </THead>
      <tbody>
        {areglo.map((array) => (
          <TableRow
            key={array.id}
            artista={array.artista}
            cancion={array.cancion}
            urlP={array.urlP}
            icono={icono}
            funcion={funcion}
            id={array.id}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default Tabla;
