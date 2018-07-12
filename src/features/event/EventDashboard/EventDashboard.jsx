import React, { Component } from 'react'
import {Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Fern',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/23.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Fern',
        photoURL: 'https://randomuser.me/api/portraits/men/23.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/23.jpg',
    attendees: [
      {
        id: 'd',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/23.jpg'
      },
      {
        id: 'c',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  },


  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/25.jpg',
    attendees: [
      {
        id: 'e',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/25.jpg'
      },
      {
        id: 'f',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/28.jpg'
      }
    ]
  },





]




 class EventDashboard extends Component {
   constructor(){
     super()

     this.state = {
       events: eventsDashboard,
       isOpen:false

     }
      
     //this.handleFormOPen=this.handleFormOPen.bind(this);
     //this.handleCancel=this.handleCancel.bind(this);


   }
   
   handleFormOPen = () => {
    this.setState({
      isOPen:true

    })
  }

  handleCancel = () => {
    this.setState({
      isOPen:false

    })
  }


  render() {
    return (
      
      <Grid>
         <Grid.Column width={10}>  
         <EventList events={this.state.events}/>
         
         </Grid.Column>
         <Grid.Column width={6}>   
         <div className="">
         <Button onClick = {this.handleFormOPen} positive content="Create Game"/>
         {this.state.isOpen &&
         <EventForm handleCancel={this.handleCancel}/>}
         </div> 
          </Grid.Column>
     </Grid> 
   
        
      
    )
  }
}
export default EventDashboard;