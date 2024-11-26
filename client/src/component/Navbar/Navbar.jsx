import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Import icons from react-icons
import "./style.css";
// import Logo from '../../assests/logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Grow Organic India</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
        </button>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          {/* Login and Signup Links */}
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)} className="nav-icon-link">
              <FaSignInAlt className="nav-icon" /> Login
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={() => setIsOpen(false)} className="nav-icon-link">
              <FaUserPlus className="nav-icon" /> Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
