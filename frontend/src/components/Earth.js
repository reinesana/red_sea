import React, { useEffect } from "react";
import ReactMapGL from "react-map-gl"; // Import ReactMapGL component
import "mapbox-gl/dist/mapbox-gl.css"; // Import Mapbox GL CSS file

const Earth = () => {
  useEffect(() => {
    const mapboxgl = require("mapbox-gl");
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZ3ByZW0wOSIsImEiOiJjbHRmbHYzODMwdG1wMmtwZnY0a2hsajljIn0.0gvPRWKNSxCQgnM4mnOXdA";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/gprem09/cltl2l1e0013701o84kkc3nqv",
      center: [-74.5, 40],
      zoom: 0.01,
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "600px",
        position: "fixed",
        top: "0",
        zIndex: "-10",
      }}
    />
  );
};

export default Earth;
