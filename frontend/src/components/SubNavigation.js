import { useState } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import HospitalSwitch from "./HospitalSwitch";

function SubNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="side-navigation">
      <button onClick={toggleMenu} className="open">
        <IoIosHelpCircleOutline className="help-icon" />
      </button>
      <nav className={`sub-nav ${isOpen ? "open" : "hidden"}`}>
        <p className="greeting">Here's additional help for using this app!</p>
        <ul className="sub-nav-menu">
          <li className="pop-up">
            <MdLanguage className="language-icon"/>
            Language
          </li>
          <li className="pop-up">
            <FaBookOpenReader className="instruction-icon"/>
            Instructions
          </li>
          <li className="hospital-toggle">
            <p>See nearby hospitals:</p>
            <HospitalSwitch/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SubNavigation;
