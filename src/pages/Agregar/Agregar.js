import React, { useEffect, useState } from 'react'
import './Agregar.scss'
import InputWTitle from '../../components/InputWTitle/InputWTitle'
import TextAreaWTitle from '../../components/TextAreaWTitle/TextAreaWTitle'
import Button from '../../components/Button/Button'
import { useNotEmpety } from '../../hooks/notEmpty'
import { useLocalStorage } from '../../hooks/localStorage'

export default function Agregar() {

    const [inputs, setInputs] = useState({})
    const requiredFields = ["name", "logo", "email", "description"];
    const errors = useNotEmpety(inputs, requiredFields)
    const setStoreInput = useLocalStorage()

    // useEffect(() => {
    //     window.localStorage.setItem('startups', '[]' )
    // }, [])

    const handleInput = (e) => {
        const {name, value} = e.target
        const newInputs = {
            ...inputs, [name]: value
        }
        setInputs(newInputs)
    }

    const addStartup = () => {
        if (errors.length == 0) {
            console.log('El formulario es valido')
            setStoreInput('startups', inputs)
        } else {
            console.log('El formulario es invalido', errors)
        }
    }

    return (
        <div className="Agregar">
            <div className="Agregar__container">
                <InputWTitle handleChange={handleInput}  name='name' type='text' placeholder='Nombre' title='Nombre' />
                
                <InputWTitle handleChange={handleInput}  name='logo' type='text' placeholder='Link a imagen' title='Logo' /> 
                
                <InputWTitle handleChange={handleInput}  name='email' type='email' placeholder='Email' title='Email' /> 
                
                <TextAreaWTitle handleChange={handleInput} name='description' title='Descripción'/>
                
                <InputWTitle handleChange={handleInput} type='text' placeholder='Web (opcional)' title='Web' /> 
                <InputWTitle handleChange={handleInput} type='text' placeholder='Twitter (opcional)' title='Twitter' /> 
                <InputWTitle handleChange={handleInput} type='text' placeholder='Instagram (opcional)' title='Instagram' /> 
                <Button handleClick={addStartup} text="Enviar" />
            </div>
        </div>
    )
}
