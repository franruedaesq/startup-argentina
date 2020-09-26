import {useState} from 'react'

export const useLocalStorage = () => {

    const setValue = (key, initialValue) => {
      if(!localStorage.getItem(key)) {
        localStorage.setItem(key, '[]' )
      }

      if (typeof initialValue == 'object') {
        let stored = window.localStorage.getItem(key)
        let parse = JSON.parse(stored)
        parse.push(initialValue)
        let value = JSON.stringify(parse)
        window.localStorage.setItem(key, value);
        
      } else {

      }
    }

    return setValue;
}
