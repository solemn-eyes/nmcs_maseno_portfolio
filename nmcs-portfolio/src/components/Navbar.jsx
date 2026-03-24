import logo from "../assets/gallery/nmcs_logo.jpg"

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#leaders">Leaders</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#join">Join</a></li>
      </ul>

      <img src={logo} alt="NMCS Logo" className="logo" />
    </nav>
  )
}

export default Navbar
