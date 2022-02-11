import React, { useContext } from "react";
import { DivGrid } from "./styles";
import { MusicContext } from "../../context/MusicContext";

const Galeria = () => {
  const { info } = useContext(MusicContext);
  if (!info.artists) return null;

  const {
    strArtistBanner,
    strArtistClearart,
    strArtistFanart,
    strArtistFanart2,
    strArtistFanart3,
    strArtistFanart4,
    strArtistLogo,
    strArtistThumb,
    strArtistWideThumb,
  } = info.artists[0];

  return (
    <>
      {!!info.artists ? (
        <DivGrid>
          <div>
            <img src={strArtistBanner} alt="" />
          </div>
          <div>
            <img src={strArtistClearart} alt="" />
          </div>
          <div>
            <img src={strArtistFanart} alt="" />
          </div>
          <div>
            <img src={strArtistFanart2} alt="" />
          </div>
          <div>
            <img src={strArtistFanart3} alt="" />
          </div>
          <div>
            <img src={strArtistFanart4} alt="" />
          </div>
          <div>
            <img src={strArtistLogo} alt="" />
          </div>
          <div>
            <img src={strArtistThumb} alt="" />
          </div>
          <div>
            <img src={strArtistWideThumb} alt="" />
          </div>
        </DivGrid>
      ) : (
        <p>No se encontro el artista</p>
      )}
    </>
  );
};

export default Galeria;
