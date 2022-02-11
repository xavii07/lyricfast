import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { faFileAudio, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { MusicContext } from "../../context/MusicContext";
import Input from "../Input";
import { Form, H1, InputSubmit } from "./styles";

const Formulario = () => {
  const [artista, setArtista] = useState({ campo: "" });
  const [cancion, setCancion] = useState({ campo: "" });

  const { setBusqueda, datatoedit, setDatatoedit } = useContext(MusicContext);
  const history = useHistory();

  useEffect(() => {
    if (datatoedit) {
      setArtista({ campo: datatoedit.artista, valido: true });
      setCancion({ campo: datatoedit.cancion, valido: true });
    } else {
      setArtista({ campo: "", valido: null });
      setCancion({ campo: "", valido: null });
    }
  }, [datatoedit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (artista.campo.length > 0 && cancion.campo.length > 0) {
      setBusqueda({ artista: artista.campo, cancion: cancion.campo });
      history.push("/letra");
      setArtista({ campo: "", valido: null });
      setCancion({ campo: "", valido: null });
      setDatatoedit(null);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <H1> Search your favorite lyric</H1>
      <Input
        tipo="text"
        name="artista"
        placeholder="Avicii"
        estado={artista}
        setEstado={setArtista}
        icono={faUserTie}
        label="Artista"
      />
      <Input
        tipo="text"
        name="cancion"
        placeholder="The nights"
        estado={cancion}
        setEstado={setCancion}
        icono={faFileAudio}
        label="Cancion"
      />

      <InputSubmit type="submit" value="Buscar Letra" />
    </Form>
  );
};

export default Formulario;
