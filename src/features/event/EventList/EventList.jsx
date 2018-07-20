import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EvenList extends Component {
  render() {
    const { events, deleteEvent} = this.props;
    return (
      <div>
       
        {events.map((event) => (
          <EventListItem 
          key={event.id} 
          event={event} 
          deleteEvent={deleteEvent}
          />
         

        ))}
        
   
        
      </div>
    );
  }
}
export default  EvenList;
