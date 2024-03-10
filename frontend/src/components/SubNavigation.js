import { useState, useEffect, useRef } from "react";
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

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const subNavRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isOpen &&
        subNavRef.current &&
        !subNavRef.current.contains(e.target) &&
        !e.target.closest(".open")
      ) {
        setIsOpen(false);
        setShowModal1(false);
        setShowModal2(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="side-navigation">
      <button onClick={toggleMenu} className={`open ${isOpen ? "active" : ""}`}>
        <IoIosHelpCircleOutline className="help-icon" />
      </button>
      <nav className={`sub-nav ${isOpen ? "open" : "hidden"}`} ref={subNavRef}>
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
