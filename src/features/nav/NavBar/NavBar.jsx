import React, { Component } from 'react'
import { Menu, Container, Button, Image} from 'semantic-ui-react'
import '../../../assets//logo.png'


export default class NavBar extends Component {
  render() {
    return (
     
       <Menu inverted fixed="top">
         <Container>
           <Menu.Item header>
          
          <Image class="ui small image" src="../../../assets/logo.png" />
           </Menu.Item>
           {/* <Menu.Item name="Games" /> */}
           <Menu.Item>
             {/* //<Button floated="right" positive inverted content="Create Game" /> */}
           </Menu.Item>
           <Menu.Item position ="right">
             <Button color='orange' content="Login" />
             <Button color='yellow'content="Sign Out" style={{marginLeft: '0.5em'}} />
           </Menu.Item>
         </Container>
       </Menu>

    )
  }
}
