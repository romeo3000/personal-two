import React, { Component } from 'react'
import {Grid } from 'semantic-ui-react'
 class EventDashboard extends Component {
  render() {
    return (
      
      <Grid>
         <Grid.Column width={10}>  
         <div className=""> 
         <h2>Left Column</h2>
         </div> 
         </Grid.Column>
         <Grid.Column width={6}>   
         <div className="">
         <h2>Right Column</h2>
         </div> 
          </Grid.Column>
     </Grid> 
   
        
      
    )
  }
}
export default EventDashboard;