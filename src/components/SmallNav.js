import { useState } from "react";
import { Link } from "react-scroll";
import { FaAlignJustify } from "react-icons/fa";

const SmallNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
      <nav id="nav-small">
        <button className="menu-icon" onClick={handleToggle}><FaAlignJustify /></button>
        {isOpen && (
        <ul id="nav-small-content">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Tech Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="social"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Social
            </Link>
          </li>
        </ul>
        )}
      </nav>
      <div>
      </div>
    </>
  );
};

export default SmallNav;
