import React, { useState } from "react";
import { Link } from "react-router-dom";
// CSS file import karein
import "./Navbar.css";

const Navbar = () => {
  // Menu open/close state manage karne ke liye
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="nav-logo">Dairy Farm Admin</h2>

      {/* Mobile ke liye Hamburger Icon */}
      {/* Jab click hoga to state toggle hogi (true/false) */}
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? "✖" : "☰"}
      </div>

      {/* Links Container */}
      {/* Agar isMobile true hai to 'active' class add ho jayegi */}
      <div
        className={isMobile ? "nav-links active" : "nav-links"}
        onClick={() => setIsMobile(false)} // Link click hone par menu band ho jaye
      >
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
        <Link to="/add-product" className="nav-link">
          Add Product
        </Link>
        <Link to="/orders" className="nav-link">
          Orders
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
