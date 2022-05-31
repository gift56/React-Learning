import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import style from './css/navbar.module.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMobileMenu = () => {
        setIsMobile((prev) => !prev);
    };

    return (
        <nav className={style.nav}>
            <div className={style.logo}>
                <h1>My Logo</h1>
            </div>
            <span className={style.ham} onClick={handleMobileMenu}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </span>
            <div className={` ${isMobile ? style.show : style.links}`}>
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
