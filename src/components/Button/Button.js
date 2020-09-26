import React from 'react'
import './Button.scss'

export default function Button({text, handleClick, type}) {
    return (
        <button type={type} onClick={handleClick} className="Button">{text}</button>
    )
}
