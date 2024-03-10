import { useState } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";

function SubNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="side-navigation">
      <button onClick={toggleMenu} className="open">
        <IoIosHelpCircleOutline className="help-icon" />
        <br></br>
        Help
      </button>
      <nav className={`sub-nav ${isOpen ? 'open' : 'hidden'}`}>
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
