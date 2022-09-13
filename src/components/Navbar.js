import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <ul>
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
      </nav>
      <div>
      </div>
    </>
  );
};

export default Navbar;
