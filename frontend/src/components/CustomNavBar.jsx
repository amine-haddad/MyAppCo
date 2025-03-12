import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/CustomNavBar.css';
import { FaBars } from 'react-icons/fa';
import Logo from './Logo';
import DynamicLine from './Navbar/DynamicLine';

const CustomNavbar = ({ profile, error }) => {
  const [activeMenu, setActiveMenu] = useState(null); // Suivre l'élément actif
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const handleClick = (index) => {
    setActiveMenu(index);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      setIsVisible(window.scrollY <= lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`navbar navbar-light bg-light ${isSticky ? "sticky" : ""} ${isVisible ? "visible" : ""}`}>
      <Container>
        {/* Logo à gauche */}
        <Navbar.Brand as={Link} to="/">
          <img src="/assets/cannon_old_weapon.svg" alt="Logo" className="navbar-logo" />
        </Navbar.Brand>

        {/* Nom et titre du profil */}
        <div className="navbar-center">
          {error && <span className="error">{error}</span>}
          {profile ? (
            <span className="navbar-name">
              {profile.name} <span className="navbar-title">/ Senior Touco {profile.title}</span>
            </span>
          ) : (
            <span>Loading...</span>
          )}
        </div>

        {/* Bouton menu mobile */}
        <Navbar.Toggle aria-controls="navbarNav">
          <FaBars size={25} color="#333" />
        </Navbar.Toggle>

        {/* Menu mobile */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                className="nav-link" 
                onClick={() => handleClick(0)}
              >
                Accueil
                <span className="dynamic-line" /> {/* Ligne dynamique */}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/projects" 
                className="nav-link" 
                onClick={() => handleClick(1)}
              >
                Projects
                <span className="dynamic-line" /> {/* Ligne dynamique */}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/experiences" 
                className="nav-link" 
                onClick={() => handleClick(2)}
              >
                Expériences
                <span className="dynamic-line" /> {/* Ligne dynamique */}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/about" 
                className="nav-link" 
                onClick={() => handleClick(3)}
              >
                À propos
                <span className="dynamic-line" /> {/* Ligne dynamique */}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {/* Bouton de changement de thème */}
              <Nav.Link 
                id="themeButton" 
                className="themeButton" 
                onClick={toggleTheme}
              >
                {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
