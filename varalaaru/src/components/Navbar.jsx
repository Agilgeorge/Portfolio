import wojak from "../assets/wojak.jpg"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaDiscord} from "react-icons/fa";
 
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} className=" ml-3 h-44 w-44" alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-xl">
          <FaLinkedin/>
          <FaGithub/>
          <FaDiscord/>
        </div>
    </nav>
  )
}

export default Navbar