import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


       
const mapStyles = {
  position: 'relative',
  width: '55%',
  height: '55%',
  marginLeft: '10rem'
};


export class MapContainer extends React.Component {

  render() {
    return (
     
      <Map
      
        style={mapStyles}
        google={this.props.google}
        zoom={11}
      
        initialCenter={{
         lat: 45.22580337524414,
         lng: -81.52481079101562
        }}>
        
        </Map>
       
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD4Shj3UreA0bf_aCsMh7yJF_-RRUJUtaw'
})(MapContainer);