import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="thumb-nav">
        <ul className="nav-menu">
          <li><NavLink to="/">Map</NavLink></li>
          <li><NavLink to="/help">Help</NavLink></li>
          <li><NavLink to="/safety-for-women">Safety for Women</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
