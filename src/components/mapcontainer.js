import React from "react";
import GoogleMapReact from "google-map-react";

const LocationMap = ({ selectedPlace, ...extraProps }) => {
  return (
    <div style={{ width: "100%", height: "50vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB5Hd3yyXPtfBZOkLG0IkJlmqfO0pUrpG8" }}
        defaultCenter={selectedPlace}
        defaultZoom={17}
        className="w-2/3 mx-auto"
      >
        <div
          className="text-purple-600 transform -translate-y-3"
          text="Allotment"
          lat={selectedPlace.lat}
          lng={selectedPlace.lng}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-10 h-10"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default LocationMap;
