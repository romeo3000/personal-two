import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EvenList extends Component {
  render() {
    const { events, onEventEdit } = this.props;
    return (
      <div>
        <h1>Game List</h1>
        {events.map((event) => (
          <EventListItem key = {event.id} event={event} onEventEdit={onEventEdit}/>
         

        ))}
        
   
        
      </div>
    )
  }
}
export default  EvenList
