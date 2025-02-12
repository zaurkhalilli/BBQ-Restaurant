import React from "react";
import styled from "../Navbar/Navbar.scss";
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
const Navbar = () => {
    return (
        <nav className={styled.nav}>
           <img src="https://websitedemos.net/restaurant-bbq-02/wp-content/uploads/sites/1435/2023/12/Logo.png" alt="" />
            <div className="navmenu">
           <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
             <Link to="/contact">Contact</Link>
            </div>
        <ul className="responsivemenu" tabIndex="0"> <CiMenuBurger color="white" />
           <div className="list">
           <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/menu">Menu</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
           </div>
        </ul>
        </nav>
    )
}

export default Navbar
