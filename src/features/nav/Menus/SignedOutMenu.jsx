import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = ({signIn,register}) => {
  return (
    <Menu.Item position ="right">
    <Button onClick ={signIn} color='yellow' content="Login" />
    <Button onClick={register} color='yellow'content="Register" style={{marginLeft: '0.5em'}} /> 
  </Menu.Item>
  )
}

export default SignedOutMenu
