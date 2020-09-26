import { useState } from "react"

export const useValidateInput = () => {

    const [value, setValue] = useState('')

    const inputRequired = (e) => {
        if (e) {
            const {value} = e.target
            console.log(value)
            let valueLength = value.length >= 1? '' : 'is required'
            setValue(value)
        } else {
            setValue('')
        }

    }

    return [value, inputRequired]
}