import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import Script from 'react-load-script'
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import { incrementCounter, decrementCounter } from './testActions'


const mapState = (state) =>({
    data:state.test.data
})

const actions = {
  incrementCounter,
  decrementCounter
}

 class TestComponent extends Component {

 static defaultProps = {
   center: {
     lat: 59.95,
     lng: 30.33
   },
 }


   state = {
     address:'',
     scriptLoaded:false

   }

   handleScriptLoad = () =>{
     this.setState({scriptLoaded: true});
   }

  handleFormSubmit = event => {
    event.preventDefault();
  };

  handleFormSubmit = event => {
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  onChange = address => this.setState({address});

  render() {
   const inputProps ={
     value: this.state.address,
     onChange: this.onChange
   };

     const {incrementCounter, decrementCounter, data} = this.props;

    return (
      <div>
        <Script
        url='https://maps.googleapis.com/maps/api/js?key=AIzaSyDrXigGmuzGniH791b00weA_XHGZMqQoUw&libraries=places'
        onLoad={this.handleScriptLoad}
        />
       <h1> Test Area</h1>
       <h3>this is the answer: {data}</h3>
       <br />
       <br/>
       <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && 
            <PlacesAutocomplete inputProps={inputProps} />
          }
          <button type="submit">Submit</button>
         </form>

        <Button onClick={incrementCounter} color='green' content='Increment' />
       <Button onClick={decrementCounter} color='red' content='Decrement' />  
       

      </div>
    )
  }
}
export default connect(mapState, actions)(TestComponent)