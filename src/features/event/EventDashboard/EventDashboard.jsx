import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { deleteEvent } from '../eventActions'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import EventActivity from '../../EventActivity/EventActivity'



const mapState = (state) => ({
events: state.events,
loading: state.async.loading
})

const actions = {
  deleteEvent,
  

}

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  //this.handleFormOPen=this.handleFormOPen.bind(this);
  //this.handleCancel=this.handleCancel.bind(this);
  //change because arrow function also helps with the same process


  

  handleDeleteEvent = eventId => () =>{
    this.props.deleteEvent(eventId);
  };
  

  render() {
    const {events, loading} = this.props;
    if(loading) return <LoadingComponent inverted={true}/>
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent ={this.handleDeleteEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity/>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(mapState, actions)(EventDashboard);
