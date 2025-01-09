import React from "react";
import styled from "../Navbar/Navbar.scss";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className={styled.nav}>
            <div className={styled.container}>
                <div className="row">
                    <div className="col-xl-2">
                        <img src="https://websitedemos.net/restaurant-bbq-02/wp-content/uploads/sites/1435/2023/12/Logo.png" alt="" />
                    </div>
                    <div className="col-xl-7">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Menu</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="col-xl-3">
                        <button>asasas</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar