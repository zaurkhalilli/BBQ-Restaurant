import React from 'react'
import App from '../../App'
import Hometop from '../../Components/HomeTop/Hometop'
import Homeabout from '../../Components/HomeAbout/Homeabout'
import Homeinfo from '../../Components/HomeInfo/Homeinfo'
import Homemenu from '../../Components/HomeMenu/Homemenu'
const Home = () => {
  return (
    <div>
      <Hometop/>
      <Homeabout/>
      <Homeinfo/>
      <Homemenu/>
    </div>
  )
}

export default Home
