import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Header from "../components/Header";
import Map from "./Map";

const App = () => {
  return (
    <div>
      <Header />
      <Map />
    </div>
  );
};

export default App;
