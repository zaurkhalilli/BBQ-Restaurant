import React from 'react'
import styled from '../HomeMenu/Homemenu.scss'
import { Link, Router } from 'react-router-dom';
const Homemenu = () => {
  return (
    <div className='homemenu'>
      <h2>Our Food Varieties</h2>
      <div className="homemenubtn">
      <Link to="/menu"><button>View Menu</button></Link>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-sm-3">
            <div className="homemenuimg">
            <Link to="/menu"><img src="https://cleavermeatsltd.co.uk/images/products/271/small/1727106152-097762500.webp" alt="" />
            </Link>
             <h4>Main Dishes</h4>
            </div>
            </div>
            <div className="col-sm-3">
            <div className="homemenuimg">
            <Link to="/menu"><img src="https://plus.unsplash.com/premium_photo-1689596510134-fdd551076006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FsYWRzfGVufDB8fDB8fHww" alt="" />
            </Link>
            <h4>Sides</h4>
            </div>
            </div>
            <div className="col-sm-3">
            <div className="homemenuimg">
            <Link to="/menu"><img src="https://instantpoteats.com/wp-content/uploads/2021/10/Instant-Pot-Desserts-topimage.jpg" alt="" />
            </Link>
          <h4>Desserts</h4>
            </div>
            </div>
            <div className="col-sm-3">
            <div className="homemenuimg">
            <Link to="/menu"> <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-802667754.jpg?c=original" alt="" />
            </Link>
            <h4>Drinks</h4>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homemenu
