import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Map</NavLink></li>
          <li><NavLink to="/help"></NavLink>Help</li>
          <li><NavLink to="/safety-for-women"></NavLink>Safety for Women</li>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;
