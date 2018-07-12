import React, { Component } from 'react'
import { Menu, Container, Button, Image } from 'semantic-ui-react'
import '../../../assets//logo.png'


export default class NavBar extends Component {
  render() {
    return (
     
       <Menu inverted fixed="top">
         <Container>
           <Menu.Item header>
           
             <Image as='a' src="../../../assets/logo.png"  alt="logo" /> 
            
           </Menu.Item>
           <Menu.Item name="Games" />
           <Menu.Item>
             <Button floated="right" positive inverted content="Create Game" />
           </Menu.Item>
           <Menu.Item position="right">
             <Button basic inverted content="Login" />
             <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
           </Menu.Item>
         </Container>
       </Menu>

    )
  }
}
