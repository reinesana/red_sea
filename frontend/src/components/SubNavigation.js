import { useState } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import HospitalSwitch from "./HospitalSwitch";
import LanguagesModal from "./LanguagesModal";
import HelpModal from "./HelpModal";

function SubNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)

  return (
    <div className="side-navigation">
      <button onClick={toggleMenu} className="open">
        <IoIosHelpCircleOutline className="help-icon" />
      </button>
      <nav className={`sub-nav ${isOpen ? "open" : "hidden"}`}>
        <p className="greeting">Here's additional help for using this app!</p>
        <ul className="sub-nav-menu">
          <li className="pop-up" onClick={() => setShowModal1(true)}>
            <MdLanguage className="language-icon"/>
            Language
          </li>
          {showModal1 && <LanguagesModal onClose={() => setShowModal1(false)} />}

          <li className="pop-up" onClick={() => setShowModal2(true)}>
            <FaBookOpenReader className="instruction-icon"/>
            Instructions
          </li>
          {showModal2 && <HelpModal onClose={() => setShowModal2(false)} />}

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
