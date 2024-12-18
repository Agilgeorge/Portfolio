
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaDiscord} from "react-icons/fa";
import {motion} from "framer-motion"
 
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} className=" ml-3 h-28 w-28" alt="" />
        </div>
        <div>
          <motion.p  
          whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1}} className="text-base ">"Throughout Heaven and Earth, I alone am the honored One"</motion.p>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-xl">
          <a href="https://www.linkedin.com/in/anthony-george-agil-934121249/"><FaLinkedin/> </a>
          <a href="https://github.com/Agilgeorge"><FaGithub/></a>
          <a href="https://discord.com/users/857273429227864114"><FaDiscord/></a>
        </div>
    </nav>
  )
}

export default Navbar