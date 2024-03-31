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
              Map
            </NavLink>
          </li>
          <li>
            <NavLink to="/safety-for-women">
              <MdOutlineHealthAndSafety className="safety-icon" />
              <br></br>
              Women's Safety
            </NavLink>
          </li>
          <li className="help-center-li">
            <NavLink to="/help-centers">
              <RiFirstAidKitFill className="help-center-icon" />
              <br></br>
              Help Centers
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
