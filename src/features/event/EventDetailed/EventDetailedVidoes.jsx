import React from 'react'
import {Segment, Icon, Item, Header, Button, Embed  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const EventEmbedYouTube = ({event}) => {
    return (
  
  
     <Segment.Group>
        <Segment basic attached="top" style={{ padding: '0' }}>
        <Embed id='rhZO_Evqy6s' placeholder='/images/image-16by9.png' source='youtube' />

  
          <Segment basic style={eventImageTextStyle}> 
            <Item.Group>
              <Item>
                <Item.Content>
                  <Header
                    size="huge"
                    content={event.title}
                    style={{ color: 'white' }}
                  />
                  <p>{event.date}</p>
                  <p>
                    Hosted by <strong>{event.hostedBy}</strong>
                  </p>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Segment>
          
        <Segment attached="bottom">
          <Icon name='thumbs up'/>
          <Icon name='thumbs down outline' />
          <Icon name='cloud download'/>
          <Button as={Link} to={`/manage/${event.id}`} color="orange" floated="right">
            Manage Event
          </Button>
        </Segment>
      </Segment.Group>  )
}
  
  export default EventEmbedYouTube
  