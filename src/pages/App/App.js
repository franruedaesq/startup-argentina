import React from 'react'
import password, { usePassword } from '../../hooks/password'

export default function App() {

    const [password, setPassword] = usePassword(5)

    return (
        <div>
                <input type="text" name="" id="" onChange={setPassword}/>
                La contraseña es: {password? 'valida' : 'invalida'}
        </div>
    )
}
