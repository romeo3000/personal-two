import React, { Component } from 'react'
import { Menu, Container, Button, Image} from 'semantic-ui-react'
import logo from '../../../Logo/logo.png'
import { NavLink, Link, withRouter} from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'

class NavBar extends Component {
state = {
  authenticated:false
};

handleSignIn = () => {
  this.setState({
    authenticated:true
  })
}

handleSignOut = () =>{
this.setState({
  authenticated:false
})
 this.props.history.push('/')
}


  render() {
    const {authenticated} =this.state;
    return (
     
       <Menu inverted fixed="top">
         <Container>
           <Menu.Item as={NavLink} to='/' header>
          
          <Image className="ui mini image"  src={logo}  alt='PlyaGame' />
           </Menu.Item>
            <Menu.Item as={NavLink}to ='/events' name="Games" /> 
            <Menu.Item as={NavLink}to ='' name="" /> 
            {authenticated &&
            <Menu.Item as={NavLink}to ='/people' name="People" /> }
            {authenticated &&
           <Menu.Item>
             <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Game" />
           </Menu.Item>}
    {authenticated  ? (<SignedInMenu signOut={this.handleSignOut}/> ) : ( <SignedOutMenu signIn={this.handleSignIn}/>) }
           
          
           
         </Container>
       </Menu>

    )
  }
}
export default withRouter(NavBar);
