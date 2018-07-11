import React, { Component } from 'react'
//import {Grid } from 'semantic-ui-react'
 class EventDashboard extends Component {
  render() {
    return (
      <div>
     {/* <Grid>
         <Grid.Column width={10}>  */}
         <div className="Rounded_Rectangle_4"> 
         <h2>Left Column</h2>
         </div>
         {/* </Grid.Column>
         <Grid.Column width={6}>   */}
         <div className="Rounded_Rectangle_3">
         <h2>Right Column</h2>
         <div className="Rounded_Rectangle_1"> 
         <h2>Recent Activities!</h2>
         
         </div>
         </div>
         {/* </Grid.Column>
     </Grid> */}
     </div>
        
      
    )
  }
}
export default EventDashboard;