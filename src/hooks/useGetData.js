import {useEffect, useState} from 'react'
import { helpHttp } from '../helper/helpHttp'

const useGetData = (url, url2) => {


    const [resBio, resLyric] = Promise.all([
        helpHttp().get(url),
        helpHttp().get(url2)
    ])


    return [letra, artista, loading]
}

export default useGetData
