import React from 'react'
import {Image } from 'semantic-ui-react'
import logo from '../../assets/logo.png'



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
      {/* <div style={{ textAlign: 'center' }}>
        Icons made by{' '}
        <a href="" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="" title="Flaticon">
          www.flaticon.com
        </a>{' '}
        is licensed by{' '}
        <a
          href=""
          title="Creative Commons BY 3.0"
        >
          CC 3.0 BY
        </a>
      </div> */}
    </div>

  )
}

export default Home
