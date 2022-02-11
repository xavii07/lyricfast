import React, { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";
import Icono from "../Icono";
import Subtitle from "../Subtitle";
import {
  faFacebook,
  faTwitter,
  faLastfm,
} from "@fortawesome/free-brands-svg-icons";
import { DivBiography, DivImagen, Imagen, DivIconos, DivInfo } from "./styles";

const Info = () => {
  const { info } = useContext(MusicContext);

  if (Object.keys(info).length === 0) return null;
  if (!info.artists) return null;

  const {
    strBiographyEN,
    strArtist,
    strBiographyES,
    strArtistFanart,
    strArtistThumb,
    strFacebook,
    strTwitter,
    strLastFMChart,
  } = info.artists[0];

  const parrafo = strBiographyES || strBiographyEN;
  const imagen = strArtistThumb || strArtistFanart;
  const linkTwitter =
    strTwitter || `twitter.com/${strArtist.split(" ").join("")}`;
  const linkMusic =
    strLastFMChart?.slice(7, -1) ||
    `www.last.fm/music/${strArtist}/+tracks?rangetype=6mont`;

  return (
    <>
      {!!info.artists ? (
        <DivBiography>
          <Subtitle text={strArtist} />
          <DivImagen>
            <Imagen src={imagen} alt={strArtist} />
          </DivImagen>
          <DivIconos>
            <Icono link={strFacebook} icono={faFacebook} />
            <Icono link={linkTwitter} icono={faTwitter} />
            <Icono link={linkMusic} icono={faLastfm} />
          </DivIconos>
          <DivInfo>
            <p>{parrafo}</p>
          </DivInfo>
        </DivBiography>
      ) : (
        <p>No se encontro el artista</p>
      )}
    </>
  );
};

export default Info;
