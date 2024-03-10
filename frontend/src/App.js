import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Navigation from "./components/Navigation";
import Map from "./pages/Map";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <Map />
      <Navigation />
    </div>
  );
};

export default App;
