import { IoIosHelpCircleOutline } from "react-icons/io";

function SubNavigation() {
  return (
    <div className="side-navigation">
      <button className="hidden open">
        <IoIosHelpCircleOutline className="help-icon" />
        <br></br>
        Help
      </button>
      <nav className="sub-nav">
        <p>Here's additional help for using this app!</p>
        <ul className="sub-nav-menu">
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
      </nav>
    </div>
  );
}

export default SubNavigation;
