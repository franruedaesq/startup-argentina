import {useState} from 'react';

export const usePassword = (minLength) => {
    const [isValid, setIsValid] = useState(0)

    const validPassword = (e) => {
        const {value} = e.target
        const _isValid = value.length >= minLength ? true : false;

        setIsValid(_isValid)
    }

    return [isValid, validPassword]
}