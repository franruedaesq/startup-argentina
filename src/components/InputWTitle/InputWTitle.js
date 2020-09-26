import React from 'react'
import './InputWTitle.scss'

export default function InputWTitle({type,title, placeholder, handleChange, name, handleBlur, handleSubmit}) {
    return (
        <div className='InputWTitle'>
            {title && <h3 className='InputWTitle__title'>{title}</h3>}
            <input onSubmit={handleSubmit} name={name} onBlur={handleBlur} onChange={handleChange} className='InputWTitle__input' type={type} placeholder={placeholder}/>
        </div>
    )
}
