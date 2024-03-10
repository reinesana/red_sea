import React, { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

const Earth = () => {
  useEffect(() => {
    const mapboxgl = require("mapbox-gl");
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZ3ByZW0wOSIsImEiOiJjbHRmbHYzODMwdG1wMmtwZnY0a2hsajljIn0.0gvPRWKNSxCQgnM4mnOXdA";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/gprem09/cltl7l6vq014901oi92wuer6w",
      center: [-74.5, 40],
      zoom: 0.01,
      pitch: 50, // Set the pitch to make the map appear 3D
      bearing: 0, // Initial bearing (rotation)
    });

    // Function to rotate the map
    const rotateMap = () => {
      const bearing = map.getBearing();
      map.rotateTo(bearing + 1, { duration: 100, easing: () => 0.5 });
      requestAnimationFrame(rotateMap);
    };

    // Start the rotation animation
    rotateMap();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="earth" />;
};

export default Earth;
