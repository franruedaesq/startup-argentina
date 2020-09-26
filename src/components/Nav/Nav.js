import React from 'react';
import Search from '../Search/Search';
import {Link} from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    return (
        <nav className="nav">
            {/* <img alt=''/> */}
            <h2 className="nav__title">STARTUP ARGENTINA</h2>
            <Search/>
    <Link to={'/agregar'}> <a className="nav__btn" href="">Agregar Startup</a></Link>
        </nav>
    );
}

export default Nav;
