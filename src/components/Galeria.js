import React, { useContext } from 'react'
import styled from 'styled-components'
import { MusicContext } from '../context/MusicContext'

const Galeria = () => {

    const {info} = useContext(MusicContext)

    const {strArtistBanner, strArtistClearart, strArtistFanart, strArtistFanart2, strArtistFanart3, strArtistFanart4, strArtistLogo, strArtistThumb, strArtistWideThumb} = info


    return (
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
    )
}

const DivGrid = styled.div`
    width: 80%;
    margin: 3rem auto 6rem auto;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    grid-auto-flow: dense;
    padding:0.1rem;

    div {
        border: none;
        outline: none;
    }

    @media (min-width: 768px) {
        width: 70%;
    }
`;

export default Galeria
