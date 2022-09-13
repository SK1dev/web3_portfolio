import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";


const BackToTop = () => {
    return (
         <Link
          className="backToTop"
          to="header"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FaArrowUp />
        </Link> 
    )
}

export default BackToTop