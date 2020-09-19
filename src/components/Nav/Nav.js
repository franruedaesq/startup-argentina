import React from 'react';
import Search from '../Search/Search';
import './Nav.scss'

const Nav = () => {
    return (
        <nav className="nav">
            {/* <img alt=''/> */}
            <h2 className="nav__title">STARTUP ARGENTINA</h2>
            <Search/>
            <a className="nav__btn" href="">Agregar Startup</a>
        </nav>
    );
}

export default Nav;
