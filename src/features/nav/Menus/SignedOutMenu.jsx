import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = () => {
  return (
    <Menu.Item position ="right">
    <Button color='yellow' content="Login" />
    <Button color='yellow'content="Register" style={{marginLeft: '0.5em'}} /> 
  </Menu.Item>
  )
}

export default SignedOutMenu
