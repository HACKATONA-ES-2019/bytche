import React from 'react';
import ReactDOM from "react-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import "./maps.css";

const { compose, withProps, lifecycle } = require("recompose");
const { withScriptjs } = require("react-google-maps");
const {
  StandaloneSearchBox
} = require("react-google-maps/lib/components/places/StandaloneSearchBox");

var mapPlaces = undefined;

const PlacesWithStandaloneSearchBox = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAsTwxtoSEMumFlEaP4DUcu4MomxfJx8L0&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />
    }),
    lifecycle({
      componentWillMount() {
        const refs = {};
  
        this.setState({
          places: [],
          onSearchBoxMounted: ref => {
            refs.searchBox = ref;
          },
          onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();
            mapPlaces = places;
          }
        });
      }
    }),
    withScriptjs
  )(props => (
    <div data-standalone-searchbox="">
      <StandaloneSearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Buscar local"
          style={{
            alignSelf: "center",
            "margin-bottom": `10px`,
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: "700%",
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`
          }}
        />
      </StandaloneSearchBox>
      </div>
  ));

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: undefined
        }
    }
  render() {
      const { google } = this.props;
    return (
      <div style={{ top: 0, height: "100%", width: "100%" }}>
        <PlacesWithStandaloneSearchBox className="searchBox" />
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
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAsTwxtoSEMumFlEaP4DUcu4MomxfJx8L0')
})(MapContainer)
