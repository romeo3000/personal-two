import React from 'react'
import { Switch,Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import SettingsNav from './SettingsNav'


const SettingDashBoard = () => {
  return (
  <Grid>
    <Grid.Column width={12}>
    <Switch>
      <Route path='/settings/basics' component={BasicPage}/>
      <Route path='/settings/about' component={AboutPage}/>
      <Route path='/settings/photos' component={PhotosPage}/>
      <Route path='/settings/account' component={AccountPage}/>
    </Switch>
    <h1>Settings</h1>
    </Grid.Column>
    <Grid.Column width={12}>
    <SettingsNav/>
    </Grid.Column>
    </Grid>
    


  )
}

export default SettingDashBoard
