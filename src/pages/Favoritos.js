import React, { useContext } from 'react'
import Tabla from '../components/Tabla'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { MusicContext } from '../context/MusicContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Favoritos = () => {

    const {favoritos, setFavoritos} = useContext(MusicContext)

    const eliminarFavoritos = (id, cancion) => {

        MySwal.fire({
            titleText: `¿Estas seguro de eliminar ${cancion}?`,
            icon: "error",
            iconColor: "#FF4C4C",
            background: '#243b55',
            showCancelButton: true,
            confirmButtonColor: '#f02849',
            cancelButtonColor: '#45bd62',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar',
            focusConfirm: false,
        }).then(res => {
            if(res.isConfirmed) {
                MySwal.fire({
                    titleText: `${cancion} eliminado de favoritos`,
                    icon: "success",
                    iconColor: '#FF4C4C',
                    background: '#243b55',
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    padding: '1rem'
                })
                const newArray = favoritos.filter(favorito => favorito.id !== id)
                setFavoritos(newArray)
            } else {
                return
            }
        })
    }




    return (
        <DivTabla>
            <Tabla
                titulo="Mis Favoritos"
                icono={faTrash}
                areglo={favoritos}
                funcion={eliminarFavoritos}
            />
        </DivTabla>
    )
}


const DivTabla = styled.div`
    width: 90%;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (min-width: 992px) {
        width: 40%;
    }
`;

export default Favoritos
