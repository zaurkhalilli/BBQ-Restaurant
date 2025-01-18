import React from 'react'
import App from '../../App'
import styled from '../Home/Home.scss';
import Hometop from '../../Components/HomeTop/Hometop'
import Homeabout from '../../Components/HomeAbout/Homeabout'
import Homeinfo from '../../Components/HomeInfo/Homeinfo'
import Homemenu from '../../Components/HomeMenu/Homemenu'
import Homeimg from '../../Components/HomeImage/Homeimg'
import Homewhyus from '../../Components/HomeWhyUs/Homewhyus'
const Home = () => {
  return (
    <div>
      <Hometop/>
      <Homeabout/>
      <Homeinfo/>
      <Homemenu/>
      <Homeimg/>
      <Homewhyus/>
    </div>
  )
}

export default Home
