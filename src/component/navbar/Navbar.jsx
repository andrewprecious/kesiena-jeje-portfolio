import { useState } from "react";
import navbarStyles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={navbarStyles.header}>
      <div className={`${navbarStyles.navbar} ${navbarStyles.container}`}>
        {/* ================= LOGO ================= */}
        <Link to="/" className={navbarStyles.navleft} onClick={closeMenu}>
          <img src="/images/wardrobe.svg" alt="DJJS Furniture World logo" />

          <h1>DJJS FURNITURE WORLD</h1>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className={navbarStyles.navRight}>
          <Link to="/" className={navbarStyles.link}>
            Home
          </Link>

          <Link to="/about-me" className={navbarStyles.link}>
            About Me
          </Link>

          <Link to="/experience" className={navbarStyles.link}>
            Experience
          </Link>

          <Link to="/gallery" className={navbarStyles.link}>
            Gallery
          </Link>

          <Link to="/skills" className={navbarStyles.link}>
            Skills
          </Link>

          <Link to="/contact-me" className={navbarStyles.link}>
            Contact Me
          </Link>
        </nav>

        {/* ================= HAMBURGER ================= */}
        <button
          className={`${navbarStyles.menuButton} ${
            menuOpen ? navbarStyles.menuOpen : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <nav
        className={`${navbarStyles.mobileMenu} ${
          menuOpen ? navbarStyles.mobileMenuOpen : ""
        }`}
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/about-me" onClick={closeMenu}>
          About Me
        </Link>

        <Link to="/experience" onClick={closeMenu}>
          Experience
        </Link>

        <Link to="/gallery" onClick={closeMenu}>
          Gallery
        </Link>

        <Link to="/skills" onClick={closeMenu}>
          Skills
        </Link>

        <Link to="/contact-me" onClick={closeMenu}>
          Contact Me
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
