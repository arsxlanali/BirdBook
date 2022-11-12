import React from "react";
import { Card } from "react-bootstrap";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { useState } from "react";
import "./Maps.css";

// To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app
const apiKey = "AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA";

const defaultZoom = 11;
const defaultCenter = { lat: 37.431489, lng: -122.163719 };
const locations = [
  {
    lat: 37.431489,
    lng: -122.163719,
    label: "A",
    draggable: false,
    title: "Abbot Bobby",
    www: "https://en.wikipedia.org/wiki/Abbott%27s_booby",
    image:
      "https://www.edgeofexistence.org/wp-content/uploads/2017/06/Papasula_abbotti_xlarge3.jpg",
  },
  {
    lat: 37.394694,
    lng: -122.150333,
    label: "B",
    draggable: false,
    title: "Barn Owl",
    www: "https://en.wikipedia.org/wiki/Barn_owl",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrYIpW1MfXjSHuiJGqc7KLmlUKBCeMHHa1g&usqp=CAU",
  },
  {
    lat: 37.331681,
    lng: -122.0301,
    label: "D",
    draggable: false,
    title: "Dusky Lory",
    www: "https://en.wikipedia.org/wiki/Dusky_lory",
    image:
      "https://i.pinimg.com/originals/ff/67/25/ff6725f4ca42b3bf4e9311dec4679b81.jpg",
  },
  {
    lat: 37.484722,
    lng: -122.148333,
    label: "G",
    draggable: false,
    title: "Grren Jay",
    www: "https://en.wikipedia.org/wiki/Green_jay",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNS1f155tOZ-wf2WrzjCAhRC8FI0wS8X1tRg7JsFt-cjS3UkW-xJJaNRWP-DF-MI8nEVM&usqp=CAU",
  },
];

const MarkerList = () => {
  return locations.map((location, index) => {
    return <MarkerWithInfoWindow key={index.toString()} location={location} />;
  });
};

function MarkerWithInfoWindow({ location }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Marker
      onClick={() => setIsOpen(!isOpen)}
      position={location}
      title={location.title}
      label={location.label}
      image={location.image}
    >
      {isOpen && (
        <InfoWindow onCloseClick={() => setIsOpen(false)}>
          <div className="infowindow">
            <img
              src={location.image}
              className="card-imgg"
              alt="Bird image"
              // styles={{ borderRadius: "5px" }}
            />
            <a href={location.www} target="_blank" rel="noopener noreferrer">
              {location.title}
            </a>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
}

const GoogleMapsComponent = withScriptjs(
  withGoogleMap(() => {
    return (
      <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
        {<MarkerList locations={locations} />}
      </GoogleMap>
    );
  })
);

const GoogleMaps = () => {
  return (
    <Card className="Maps-container">
      <div>
        <GoogleMapsComponent
          key="map"
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `500px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </Card>
  );
};

export default GoogleMaps;
