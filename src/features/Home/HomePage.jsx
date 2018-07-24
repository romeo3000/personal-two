import React from 'react'
import {Image } from 'semantic-ui-react'
import logo from '../../Logo/logo.png'



const Home = ({history}) => {
  return (
<div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <Image
              className="ui image massive"
              src={logo}
              alt='PlyaGame'
            />

            <div className="content">Ply a Game</div>
          </h1>
          <h2>Create A Game and Share With Friends!!</h2>
          <div onClick={()=>history.push('/events') }className="ui huge white inverted button">
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default Home
