// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className={`nav-item ${isDropdownOpen ? 'dropdown' : ''}`} onClick={toggleDropdown}>
          Find Lesson
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li  className="dropdown-item"><a href="/firstbook" className="nav-item">First Book</a></li>
              <li  className="dropdown-item"><a href="/secondbook" className="nav-item">Second Book</a></li>
              <li  className="dropdown-item"><a href="/thirdbook" className="nav-item">Third Book</a></li>
              <li  className="dropdown-item"><a href="/firstbooklectures" className="nav-item">First Book Lectures</a></li>
              <li  className="dropdown-item"><a href="/secondbooklectures" className="nav-item">Second Book Lectures</a></li>
              <li  className="dropdown-item"><a href="/thirdbooklectures" className="nav-item">third Book Lectures</a></li>
              
            </ul>
          )}
        </li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
