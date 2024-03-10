import { NavLink } from "react-router-dom";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaMapPin } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="thumb-nav">
        <ul className="nav-menu">
          <li className="map-li">
            <FaMapPin className="map-icon" />
            <br></br>
            <NavLink to="/">Map</NavLink>
          </li>
          <li className="help-li">
            <IoIosHelpCircleOutline className="help-icon" />
            <br></br>
            <NavLink to="/help">Help</NavLink>
          </li>
          <li>
            <MdOutlineHealthAndSafety className="safety-icon"/>
            <br></br>
            <NavLink to="/safety-for-women">Women's Safety</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
