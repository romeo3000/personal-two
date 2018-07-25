import React from 'react'
import {Image } from 'semantic-ui-react/dist/commonjs'
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
              alt='iEventz'
            />

            <div className="content">iEventz</div>
          </h1>
          <h2>Create an Event and Share it With Your Friends!!</h2>
          <div onClick={()=>history.push('/events') } className="ui huge white inverted button">
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default Home
