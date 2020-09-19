import React, {useContext} from 'react';
import './Search.scss'
import StartupContext from '../../contexts/StartupContext'

const Search = () => {

    const data = useContext(StartupContext)
    const {onChangeSearch} = data

    return (
        <>
            <input onChange={onChangeSearch} type="text" name="" id="" className="searchBar" placeholder="Buscar"/>
        </>
    );
}

export default Search;
