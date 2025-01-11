import React from "react";
import styled from "../Navbar/Navbar.scss";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className={styled.nav}>
           <img src="https://websitedemos.net/restaurant-bbq-02/wp-content/uploads/sites/1435/2023/12/Logo.png" alt="" />
            <div className="navmenu">
           <Link to="/">Home</Link>
            <a href="">About</a>
            <Link to="/menu">Menu</Link>
            <a href="">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
