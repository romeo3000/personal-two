import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EvenList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <h1>Game List</h1>
        {events.map((event) => (
          <EventListItem key = {event.id} event ={event}/>

        ))}
        
   
        
      </div>
    )
  }
}
export default  EvenList
