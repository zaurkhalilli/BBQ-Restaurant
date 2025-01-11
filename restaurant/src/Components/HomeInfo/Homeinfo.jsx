import React from 'react';
import styled from '../HomeInfo/Homeinfo.scss';
const Homeinfo = () => {
  return (
    <div className='info'>
      <div className="container">
        <div className="row">
            <div className="col-sm-3">
            <p>01</p>
            <h3>Location</h3>
            <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            </div>
            <div className="col-sm-3">
            <p>02</p>
            <h3>Phone</h3>
            <span>(303) 555-0105</span>
            </div>
            <div className="col-sm-3">
            <p>03</p>
            <h3>Email</h3>
            <span>mail@example.com</span>
            </div>
            <div className="col-sm-3">
            <p>04</p>
            <h3>Working Hours</h3>
            <span>Mon - Sun <br /> 12.00pm - 01.00am</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homeinfo
