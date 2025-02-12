import React from 'react'
import styled from '../HomeWhyUs/Homewhyus.scss'
import { MdVerified } from "react-icons/md";
const Homewhyus = () => {
  return (
    <div className='whyus'>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
           <div className="backgrimg">
           <img src="https://websitedemos.net/restaurant-bbq-02/wp-content/uploads/sites/1435/2023/12/image.jpg" alt="" />
           </div>
            </div>
            <div className="col-md-6">
            <p>Why Us</p>
            <h3>We Offer The Best BBQ In All of Texas</h3>
            <h5>Our craft is steeped in tradition and a love for authentic, Southern-style BBQ. Discover the magic behind our signature slow-smoked meats and the tried-and-true techniques.</h5>
            <span>
            <MdVerified color='orange'/> High Quality Meat
            <br />
            <MdVerified color='orange' /> Organic Meat and Ingredients
            <br />
            <MdVerified color='orange' /> Best Service in Texas</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homewhyus
