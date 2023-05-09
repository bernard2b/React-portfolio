import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import Navigation from "../navigation/Navigation";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="header">
      <nav>
        <div className="profile-logo">
          <a href="#profile">.B</a>
        </div>
        <div className="menu">
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
      <Navigation />
    </div>
  );
};

export default Header;
