import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import SubNavigation from "../components/SubNavigation";
import Help from "../pages/Help";
import Map from "../pages/Map";
import WomenSafety from "../pages/WomenSafety";
import Landing from "../pages/Landing";

function AppRouter() {
  return (
    <BrowserRouter className="body-wrapper">
      <LocationAwareApp />
    </BrowserRouter>
  );
}

function LocationAwareApp() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className="main-wrapper">
      {!isLandingPage && <Navigation className="main-navigation" />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/map" element={<Map />} />
        <Route path="/help-centers" element={<Help />} />
        <Route path="/safety-for-women" element={<WomenSafety />} />
      </Routes>
      {!isLandingPage && <SubNavigation />}
    </div>
  );
}

export default AppRouter;
