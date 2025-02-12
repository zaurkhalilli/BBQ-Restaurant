import React from 'react'
import styled from '../Contactlogin/Contactlogin.scss';
const Contactlogin = () => {
  return (
    <div className='contactlogin'>
      <div className="container">
        <div className="row">
            <div className="col-xl-6">
            <h2>Get in Touch</h2>
            <h5>An extremely detailed and comprehensive description goes here, providing an extensive amount of information about the topic</h5>
            <p>Phone</p>
            <span>(303) 555-0105</span>
            <hr />
            <p>Email</p>
            <span>mail@example.com</span>
            <hr />
            <p>Address</p>
            <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            </div>
            <div className="col-xl-6">
            <div className="details">
               <div className="name">
               <input type="text" placeholder='First Name' />
               </div>
               <div className="lastname">
               <input type="text" placeholder='Last Name' />
               </div>
               <div className="email">
               <input type="text" placeholder='Email Adress'/>
               </div>
               <div className="text">
               <input type="text" placeholder='Type your message...'/>
               </div>
               <button>Submit</button>
               <br />
               <br />
            </div>
            </div>
        </div>
      </div>
      <div className="map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d886046.1871288485!2d-96.6441272759514!3d29.832017920591188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20Teksas!5e0!3m2!1str!2sus!4v1739196941282!5m2!1str!2sus">
    </iframe>      </div>
    </div>
  )
}

export default Contactlogin
