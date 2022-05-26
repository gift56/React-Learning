import React from 'react';
import style from './css/navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.logo}>
                <h1>My Logo</h1>
            </div>
            <div className={style.links}>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Service">Service</a>
                <a href="#Contact">Contact</a>
                <a href="#Setting">Setting</a>
            </div>
        </nav>
    )
}

export default Navbar;
