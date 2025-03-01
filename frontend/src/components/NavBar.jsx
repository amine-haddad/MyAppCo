import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < window.innerHeight) {
      setSticky(false);
      setVisible(true);
      setScrollCount(0);
    } else if (currentScrollY > lastScrollY) {
      setScrollCount((prevCount) => prevCount + 1);
      if (scrollCount > 5) {
        setVisible(false);
        setHasScrolled(true);
      }
    } else {
      setScrollCount(0);
      setVisible(true);
    }

    if (currentScrollY >= window.innerHeight) {
      setSticky(true);
    } else {
      setSticky(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollCount]);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""} ${isVisible ? "visible" : ""}`}>
      <div className="navbar-content">
        <h1>My Portfolio</h1>
        {/* Ajoutez d'autres éléments de navigation ici */}
      </div>
    </nav>
  );
};

export default NavBar;