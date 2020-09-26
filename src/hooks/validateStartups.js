import {useState} from 'react';

export const useValidateStartups = (inputValue) => {
    const [isValid, setIsValid] = useState({nombre: false, logo: false, mail: false, descripcion: false})
    
    const checkInputs = () => {
        console.log(inputValue)
        if(inputValue.hasOwnProperty('nombre')) {
            const nombre = inputValue.nombre.length >= 1 ? true : false
            console.log(inputValue.nombre.length >= 1)
            setIsValid(prevState => ({
                ...prevState,
                nombre: nombre
            }))
        } 

        if(inputValue.hasOwnProperty('logo')) {
            const logo = inputValue.logo.length >= 1 ? true : false
            setIsValid(prevState => ({
                ...prevState,
                logo: logo
            }))
        }

        if(inputValue.hasOwnProperty('mail')){
            const mail = inputValue.mail.length >= 1 ? true : false
            setIsValid(prevState => ({
                ...prevState,
                mail: mail
            }))
        }

        if(inputValue.hasOwnProperty('descripcion')) {
            const descripcion = inputValue.descripcion.length >= 1 ? true : false
            setIsValid(prevState => ({
                ...prevState,
                descripcion: descripcion
            }))
        }
        
        console.log(isValid)
    }

    return [isValid, checkInputs]
}