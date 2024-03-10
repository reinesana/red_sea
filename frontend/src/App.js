import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Navigation from "./components/Navigation";
import Map from "./pages/Map";
import AppRouter from "./router/AppRouter";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div>
      <Landing />
      <Map />
      <Navigation />
    </div>
  );
};

export default App;
