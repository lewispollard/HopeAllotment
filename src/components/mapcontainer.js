import React from "react";
import GoogleMapReact from "google-map-react";

const LocationMap = ({ selectedPlace, ...extraProps }) => {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB5Hd3yyXPtfBZOkLG0IkJlmqfO0pUrpG8" }}
        defaultCenter={selectedPlace}
        defaultZoom={14}
      ></GoogleMapReact>
    </div>
  );
};

export default LocationMap;
