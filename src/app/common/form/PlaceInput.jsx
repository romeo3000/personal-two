import React, { Component } from 'react'
import {Form, Label  } from 'semantic-ui-react/dist/commonjs'
import Script from 'react-load-script'
import PlacesAutocomplete from 'react-places-autocomplete'


const styles = {
    autocompleteContainer:{
        zIndex: 1000
    }

}

 class PlaceInput extends Component {
     state = {
         scriptLoaded:false
        
     }

     handleScriptLoaded = () => this.setState({
      scriptLoaded:true });

  render() {
      const { input, width, onSelect, placeholder,multiple, options, meta :{touched, error}} =this.props
    
      return (

     <Form.Field error={touched && !!error} width={width} >
     <Script
        url='https://maps.googleapis.com/maps/api/js?key=AIzaSyDrXigGmuzGniH791b00weA_XHGZMqQoUw&libraries=places'
        onLoad={this.handleScriptLoaded}
        />
        {this.state.scriptLoaded && (
        <PlacesAutocomplete
        inputProps={{...input, placeholder}}
        options={options}
        onSelect={onSelect}
        multiple={multiple}
        styles={styles}
        />)}
         {touched && error && <Label basic color='red'> {error}</Label>}
     </Form.Field>
    );
  }
}
export default PlaceInput