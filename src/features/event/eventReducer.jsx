import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants'


const initialState = [
    {
      id: "1",
      title: "Zelda Breathe of the Wild",
      date: "2018-03-27",
      category: "culture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
      city: "London, UK",
      venue: "Tower of Kingston, Jamaica",
      hostedBy: "Fern",
      hostPhotoURL: "https://randomuser.me/api/portraits/men/23.jpg",
      attendees: [
        {
          id: "a",
          name: "Fern",
          photoURL: "https://randomuser.me/api/portraits/men/23.jpg"
        },
        {
          id: "b",
          name: "Tom",
          photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
        }
      ]
    },
    {
      id: "2",
      title: " Judy's Game Night Pub",
      date: "2018-03-28",
      category: "drinks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
      city: "London, UK",
      venue: "Tom's House ",
      hostedBy: "Tom",
      hostPhotoURL: "https://randomuser.me/api/portraits/men/23.jpg",
      attendees: [
        {
          id: "d",
          name: "Tom",
          photoURL: "https://randomuser.me/api/portraits/men/23.jpg"
        },
        {
          id: "c",
          name: "Bob",
          photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
        }
      ]
    }
  ];

  export const createEvent = (state, payload) => {
   return [...state, Object.assign({}, payload.event)]

  }

  export const updateEvent = ( state, payload) =>{
      return [
          ...state.filter(event => event.id !== payload.event.id ),
          Object.assign({}, payload.event)
      ]
  }

  export const deleteEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.eventId)
]

  }

  export default createReducer(initialState, {
      [CREATE_EVENT]: createEvent,
      [UPDATE_EVENT]:updateEvent,
      [DELETE_EVENT]: deleteEvent
      
  })