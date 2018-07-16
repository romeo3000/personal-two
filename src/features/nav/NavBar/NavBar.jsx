import React, { Component } from 'react'
import { Menu, Container, Button, Image} from 'semantic-ui-react'
import logo from '../../../assets//logo.png'
import { NavLink, Link} from 'react-router-dom'


export default class NavBar extends Component {
  render() {
    return (
     
       <Menu inverted fixed="top">
         <Container>
           <Menu.Item as={NavLink} to='/' header>
          
          <Image className="ui mini image"  src={logo}  alt='PlyaGame' />
           </Menu.Item>
            <Menu.Item as={NavLink}to ='/events' name="Games" /> 
            <Menu.Item as={NavLink}to ='/people' name="People" /> 
           <Menu.Item>
             <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Game" />
           </Menu.Item>
           <Menu.Item position ="right">
             {/* <Button color='orange' content="Login" />
             <Button color='yellow'content="Sign Out" style={{marginLeft: '0.5em'}} /> */}
           </Menu.Item>
         </Container>
       </Menu>

    )
  }
}
