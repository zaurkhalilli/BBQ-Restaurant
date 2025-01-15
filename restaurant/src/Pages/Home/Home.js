import React from 'react'
import App from '../../App'
import Hometop from '../../Components/HomeTop/Hometop'
import Homeabout from '../../Components/HomeAbout/Homeabout'
import Homeinfo from '../../Components/HomeInfo/Homeinfo'
import Homemenu from '../../Components/HomeMenu/Homemenu'
import Homeimg from '../../Components/HomeImage/Homeimg'
const Home = () => {
  return (
    <div>
      <Hometop/>
      <Homeabout/>
      <Homeinfo/>
      <Homemenu/>
      <Homeimg/>
    </div>
  )
}

export default Home
