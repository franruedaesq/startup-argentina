import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav'
import List from '../../components/List/List'
import {StartupProvider} from '../../contexts/StartupContext'
const Home = () => {

    const [startupList, setStartupList] = useState([])

    useEffect(() => {
        setStartupList(startupsArr || [])
    }, [])

    const startupsArr = JSON.parse(localStorage.getItem('startups'))

    const onChangeSearch = async(e) => {
        let value = (e.target.value).toLowerCase()
        let list = startupsArr.filter(item => {
            return item.name.toLowerCase().includes(value)
        }).map(item => {
            return item
        })
        console.log(list)
        setStartupList(list)
    }

    const StartupObj = {
        onChangeSearch
    }

    return (
        <StartupProvider value={StartupObj}>
            <Nav/>
            <List items={startupList}/>
        </StartupProvider>
    );
}

export default Home;
