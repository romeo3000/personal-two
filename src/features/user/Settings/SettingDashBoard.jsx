import React from 'react'
import { Switch,Route } from 'react-router-dom'

import { Grid } from 'semantic-ui-react'
import SettingsNav from './SettingsNav'

const SettingDashBoard = () => {
  return (
  <Grid>
    <Grid.Column width={12}>
    <h1>Settings</h1>
    </Grid.Column>
    <Grid.Column width={12}>
    <SettingsNav/>
    </Grid.Column>
    </Grid>
    


  )
}

export default SettingDashBoard
