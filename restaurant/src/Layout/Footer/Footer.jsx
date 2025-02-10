import React from "react";
import styled from '../Footer/Footer.scss';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    <img src="https://websitedemos.net/restaurant-bbq-02/wp-content/uploads/sites/1435/2023/12/Logo.png" alt="" />
                    </div>
                    <div className="col-sm-7">
                    <div className="footerlist">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <p>Copyright © 2025 BBQ Restaurant. All Rights Reserved.</p>
                    </div>
                    <div className="col-sm-3">
                   <div className="footericons">
                   <div className="fb">
                    <a href=""><FaFacebook size={25} color="white" /></a>
                    </div>
                   <div className="intsa">
                  <a href=""> <FaInstagram size={25} color="white"/></a>
                   </div>
                   <div className="x">
                   <a href=""><FaSquareXTwitter size={25} color="white"/></a>
                   </div>
                   <div className="linkedn">
                  <a href=""> <FaLinkedin size={25} color="white"/></a>
                   </div>
                    <div className="ytb">
                   <a href=""> <FaYoutube size={25} color="white"/></a>
                    </div>
                   </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer