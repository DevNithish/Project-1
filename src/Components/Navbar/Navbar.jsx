import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar1">
      <img src="logo.svg" alt="Velandev Logo" className="navbar-logo" />

      <div className="navbar-right">
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <div className={`hamburger-icon ${menuOpen ? "is-open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`navbar-links ${menuOpen ? "is-open" : ""}`}>
          <a href="/" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#Features" onClick={handleLinkClick}>
            Features
          </a>
          <a href="#About" onClick={handleLinkClick}>
            About
          </a>
          <a href="#Services" onClick={handleLinkClick}>
            Services
          </a>
          <a href="#Contact" onClick={handleLinkClick}>
            Contact
          </a>
          <a href="#ContactForm" onClick={handleLinkClick}>
            <button className="navbar-contact-btn">Contact</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
