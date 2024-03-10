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
        <br></br>
        Help
      </button>
      <nav className={`sub-nav ${isOpen ? "open" : "hidden"}`}>
        <p>Here's additional help for using this app!</p>
        <ul className="sub-nav-menu">
          <li>
            <MdLanguage />
            <br></br>Language
          </li>
          <li>
            <FaBookOpenReader />
            <br></br>Instructions
          </li>
          <li>
            See nearby hospitals:
            <button>Hospitals</button>
            <HospitalSwitch/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SubNavigation;
