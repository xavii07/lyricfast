import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'


const useLocalStorage = ({key, initialValue}) => {
    const initialStorage = JSON.parse(localStorage.getItem(key)) || initialValue

    const [storedvalue, setStoredValue] = useState(initialStorage)

    useEffect(() => {
        setValue()
    }, [storedvalue])

    const setValue = value => {
        setStoredValue(value)
        localStorage.setItem(key, JSON.stringify(storedvalue))
    }

    return [storedvalue, setValue]
}

export default useLocalStorage
