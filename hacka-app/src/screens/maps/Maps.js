import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import "./maps.css";
 
export class MapContainer extends React.Component {
  render() {
      const { google } = this.props;
    return (
      <Map 
        google={google} 
        zoom={14}
        className="mapContainer"
      >
        <Marker 
            onClick={this.onMarkerClick}
            name={'Current location'}
        />
        <InfoWindow onClose={this.onInfoWindowClose} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAsTwxtoSEMumFlEaP4DUcu4MomxfJx8L0')
})(MapContainer)