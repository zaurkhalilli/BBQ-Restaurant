import React from 'react'
import styled from "../HomeAbout/Homeabout.scss";
import { Link } from 'react-router-dom';
import { SiCodechef } from "react-icons/si";
import { FaFire } from "react-icons/fa";
import { GiMeat } from "react-icons/gi";
const Homeabout = () => {
  return (
    <div className='homeabout'>
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                <div className="leftimg">
                    <img src="https://websitedemos.net/restaurant-bbq-02/wp-content/uploads/sites/1435/2023/12/image-2.jpg" alt="" />
               <p><FaFire color='orange' size={40}/> High Quality</p>
                <br />
                <p><SiCodechef color='orange' size={40} /> Top Chefs</p>
                <br />
               <p><GiMeat color='orange' size={40}/> Best Meat</p>
                </div>
                </div>
                <div className="col-xl-6">
                   <div className="rightside">
                    <p>About</p>
                    <h2>We Serve Tasty Grilled Goodness!</h2>
                    <span>Figma ipsum component variant main layer. Asset bullet project prototype draft main. Content vertical figjam slice pixel undo bold draft ipsum underline. Select clip prototype flows content. Scrolling inspect scale auto frame opacity. Community opacity</span>
                    <div className="rightbtn">
                    <Link to="/about"><button>Learn More</button></Link>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homeabout
