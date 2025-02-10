import React from 'react'
import styled from "../Aboutteam/Aboutteam.scss"
const Aboutteam = () => {
  return (
    <div className='team'>
      <h3>Meet the Team</h3>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
            <img src="https://websitedemos.net/restaurant-bbq-02/wp-content/uploads/sites/1435/2023/12/image-1-1.jpg" alt="" />
            <h4>Wade Warren</h4>
            <span>Restaurant Manager</span>
            </div>
            <div className="col-md-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Anna_kitchen_headshot.jpg" alt="" />
            <h4>Jade Teen</h4>
            <span>Senior Chef</span>
            </div>
            <div className="col-md-4">
            <img src="https://websitedemos.net/restaurant-bbq-02/wp-content/uploads/sites/1435/2023/12/image-4.jpg" alt="" />
            <h4>Esther Howard</h4>
            <span>Senior Chef</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Aboutteam
