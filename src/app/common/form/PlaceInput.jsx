import React, { Component } from 'react'
import {Form, Label  } from 'semantic-ui-react'
import Script from 'react-load-script'
import PlacesAutocomplete from 'react-places-autocomplete'


 class PlaceInput extends Component {
     state = {
         scriptLoaded:false
        
     }

     handleScriptLoaded = () => this.setState({
      scriptLoaded:true });

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default PlaceInput