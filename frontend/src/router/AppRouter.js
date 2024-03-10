import { BrowserRouter, Route, Routes, GlobalProvider } from "react-router-dom";
import Header from "../components/Navigation";
import Help from "../pages/Help";
import Map from "../pages/Map";
import WomenSafety from "../pages/WomenSafety";

function AppRouter() {

    return (
        <BrowserRouter basename="/">
                <Header />
                <div className="main-wrapper">
                    <Routes>
                        <Route path="/" element={<Map/>} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/safety-for-women" element={<WomenSafety />} />
                    </Routes>
                </div>
        </BrowserRouter>
    );
}

export default AppRouter;