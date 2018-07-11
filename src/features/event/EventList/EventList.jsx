import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EvenList extends Component {
  render() {
    return (
      <div>
        <h1>Game List</h1>
        <EventListItem/>
        <EventListItem/>
        <EventListItem/>
        
      </div>
    )
  }
}
export default  EvenList
