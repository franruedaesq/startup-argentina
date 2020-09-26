import React from 'react'
import './TextAreaWTitle.scss'

export default function TextAreaWTitle({title, handleChange, name, handleBlur, handleSubmit}) {
    return (
        <div className='TextAreaWTitle'>
            <h3 className='TextAreaWTitle__title'>{title}</h3>
            <textarea onSubmit={handleSubmit} name={name} onBlur={handleBlur} onChange={handleChange} className='TextAreaWTitle__textarea' ></textarea>
        </div>
    )
}
