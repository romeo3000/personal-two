import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";


const mapState =(state) => ({
events: state.events
})

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  //this.handleFormOPen=this.handleFormOPen.bind(this);
  //this.handleCancel=this.handleCancel.bind(this);
  //change because arrow function also helps with the same process.

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else{
          return event
        }
      }),
      isOpen:false,
      selectedEvent:null
    })
  }

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/src/assets/user.png";
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    })
  }

  handleDeleteEvent =(eventId) => () =>{
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    })
  }
  

  render() {
    const { selectedEvent } = this.state;
    const {events} =this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent ={this.handleDeleteEvent}
            onEventOpen={this.handleOpenEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Game"
          />
          {this.state.isOpen && 
            <EventForm
              updatedEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              handleCancel={this.handleCancel}
            />
          }
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(mapState)(EventDashboard);
