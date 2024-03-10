import { BrowserRouter, Route, Routes, GlobalProvider } from "react-router-dom";
import Navigation from "../components/Navigation";
import SubNavigation from "../components/SubNavigation";
import Help from "../pages/Help";
import Map from "../pages/Map";
import WomenSafety from "../pages/WomenSafety";
import Landing from "../pages/Landing";

function AppRouter() {
  return (
    <BrowserRouter className="body-wrapper" basename="/">
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/help-centers" element={<Help />} />
          <Route path="/safety-for-women" element={<WomenSafety />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      <SubNavigation />
      </div>
      <Navigation className="main-navigation" />
    </BrowserRouter>
  );
}

export default AppRouter;
