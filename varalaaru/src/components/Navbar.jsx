import wojak from "../assets/wojak.jpg"
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-center py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="" />

        </div>
    </nav>
  )
}

export default Navbar