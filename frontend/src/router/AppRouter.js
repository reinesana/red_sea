import { BrowserRouter, Route, Routes, GlobalProvider } from "react-router-dom";
import Navigation from "../components/Navigation";
import Help from "../pages/Help";
import Map from "../pages/Map";
import WomenSafety from "../pages/WomenSafety";

function AppRouter() {
  return (
    <BrowserRouter className="body-wrapper" basename="/">
      <Navigation className="main-navigation" />
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/help-centers" element={<Help />} />
          <Route path="/safety-for-women" element={<WomenSafety />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
