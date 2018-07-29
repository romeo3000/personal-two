import React from 'react'
import { connect } from 'react-redux'
import { Switch,Route,Redirect } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import SettingsNav from './SettingsNav'
import BasicPage from './BasicPage'
import AboutPage from './AboutPage'
import PhotosPage from './PhotosPage'
import AccountPage from './AccountPage'
import {updatePassword  } from '../../auth/authActions'

// due the nation of setting up store for each pages within the setting componets i 
 //think the setup the setDashboard then pass props would save time and coding?
// pass props to : about,basicPage, PhotoPages
// connect to the store // setup actions updates as props


const actions = {
  updatePassword
}

// will need to pass down or to get state from the store
const mapState = (state) => ({
providerId: state.firebase.auth.providerData[0].providerId
})
// issue have shown itself with the {state.firebase.auth.providerData[0]} 
//due to component load before authentication


const SettingDashBoard = ({updatePassword,providerId}) => {
  return (
  <Grid>
    <Grid.Column width={12}>
    <Switch>
      <Redirect exact from ='/settings' to='/settings/basic'/>
      <Route path='/settings/basic' component={BasicPage}/>
      <Route path='/settings/about' component={AboutPage}/>
      <Route path='/settings/photos' component={PhotosPage}/>
      {/* this game so much trouble until i was help about the render function to fix issue  component={AccountPage}*/}
      <Route path='/settings/accounts' render={()=> <AccountPage updatePassword={updatePassword} providerId={providerId}/>} />
    </Switch>
   
    </Grid.Column>
    <Grid.Column width={4}>
    <SettingsNav/>
    </Grid.Column>
    </Grid>
    


  )
}

export default connect(mapState, actions)(SettingDashBoard)
