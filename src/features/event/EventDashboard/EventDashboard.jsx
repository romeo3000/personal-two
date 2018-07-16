import React, { Component } from 'react'
import {Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid'


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
  }


 





]




 class EventDashboard extends Component {
  
    
       state = {
       events: eventsDashboard,
       isOpen:false,
       selectedEvent:null

     }
      
      //this.handleFormOPen=this.handleFormOPen.bind(this);
     //this.handleCancel=this.handleCancel.bind(this);
    //change because arrow function also helps with the same process. 
   
   
   handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen:true

    });
  };

  handleCancel = () => {
    this.setState({
      isOpen:false

    });
  };

  handleEditEvent =(eventToUpdate)=>()=>{

    this.setState({
selectedEvent: eventToUpdate,
isOpen:true

    })
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '../../../assets/user.png';
    const updatedEvents =[...this.state.events, newEvent];
    this.setState({
      events:updatedEvents,
      isOpen:false
    });
  };


  render() {
    const { selectedEvent} = this.state;
    return (
      
      <Grid>
         <Grid.Column width={10}>  
         <EventList onEventEdit={this.handleEditEvent} events={this.state.events}/>
         
         </Grid.Column>
         <Grid.Column width={6}>   
         <Button onClick={this.handleFormOpen} positive content="Create Game"/>
         {this.state.isOpen &&
         <EventForm  selectedEvent={selectedEvent} createEvent={this.handleCreateEvent}  handleCancel={this.handleCancel}/>}
          </Grid.Column>
     </Grid> 
                        
        
      
    );
  }
}
export default EventDashboard;