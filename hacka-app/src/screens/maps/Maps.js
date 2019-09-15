import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
 
export class MapContainer extends React.Component {
  render() {
      const { google } = this.props;
    return (
      <Map google={google} zoom={14}>
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