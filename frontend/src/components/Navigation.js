import { NavLink } from "react-router-dom";
import { FaMapPin } from "react-icons/fa";
import { RiFirstAidKitFill } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";

function Navigation() {
  return (
    <div className="navigation-container">
      <nav className="thumb-nav">
        <ul className="nav-menu">
          <li className="map-li">
            <NavLink to="/map">
              <FaMapPin className="map-icon" />
              <br></br>
              map
            </NavLink>
          </li>
          <li>
            <NavLink to="/safety-for-women">
              <MdOutlineHealthAndSafety className="safety-icon" />
              <br></br>
              satefy feed
            </NavLink>
          </li>
          <li className="help-center-li">
            <NavLink to="/help-centers">
              <RiFirstAidKitFill className="help-center-icon" />
              <br></br>
              help centers
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
