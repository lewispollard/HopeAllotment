import React from "react";

const LocationMap = ({ selectedPlace, ...extraProps }) => {
  return (
    <div style={{ width: "100%", height: "50vh" }}>
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe width="710" height="580" id="gmap_canvas" style={ {overflow:"hidden", background:"none, !important", height:"580px", width:"710px"}}
                        src="https://maps.google.com/maps?q=53.41561155973524,%20-1.442938707955667&t=k&z=19&ie=UTF8&iwloc=&output=embed"
                        className={"rounded-lg shadow border-4 border-indigo-900 shadow-lg overflow-hidden"}
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
        </div>
    </div>
  );
};

export default LocationMap;
