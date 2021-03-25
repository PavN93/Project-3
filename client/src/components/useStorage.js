import { useEffect, useState } from "react"

export const useStorage = (selecter) => {

    const [item, setItem] = useState(localStorage.getItem(selecter))
    useEffect(() => {
        const checkLocalStorage = () => {
            const value = localStorage.getItem(selecter);
            setItem(value)
            console.log('USEEFFECT', value)
        }
        window.addEventListener('storage',checkLocalStorage)
        return ()=>{
            window.removeEventListener('storage',checkLocalStorage)
        }
    }, [])
    return [item]
}