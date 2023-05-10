import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import Navigation from "../navigation/Navigation";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const dropdownRef = useRef(null);
  let timeoutId;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuVisible(false);
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setIsMenuVisible(true);
      }, 300);
    };

    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <div className={`header ${isMenuVisible ? "visible" : "hidden"}`}>
        <nav>
          <div className={`menu ${isMenuVisible ? "visible" : "hidden"}`}>
            <a href="#profile">top</a>
            <a href="#about">about</a>
            <a href="#skills">skills</a>
            <a href="#contact">contact</a>
          </div>
          <div className="dropdown-toggle" onClick={toggleDropdown}>
            &#9776;
          </div>
          {isDropdownOpen && (
            <div
              className="dropdown-menu"
              ref={dropdownRef}
              onClick={closeDropdown}
            >
              <a href="#profile">home</a>
              <a href="#about">about</a>
              <a href="#skills">skills</a>
              <a href="#contact">contact</a>
            </div>
          )}
        </nav>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;