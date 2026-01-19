import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/brand.png";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Brand Section */}
        <div className="footer-brand">
          <img src={logo} alt="Samrat Dairy Logo" className="footer-logo" />
          <h2 className="footer-title">
            THE SAMRAT <span>DAIRY</span>
          </h2>
          <p>
            Doodh ki Shuddhata, Vishwas ka doosra naam. Fresh from our farm to
            your kitchen.
          </p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Our Products</Link>
            </li>
            <li>
              <Link to="/departments">Departments</Link>
            </li>
            <li>
              <Link to="/cart">My Cart</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Samrat Farm House, Khalilabad (Sant Kabir Nagar),
             India.
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 7905134870
          </p>
          <p>
            <i className="fas fa-envelope"></i> sudhakarmaurya71208@gmail.com
          </p>
        </div>
      </div>

      {/* Tiranga Border & Copyright */}
      <div className="footer-bottom">
        <div className="tiranga-line">
          <div className="line-saffron"></div>
          <div className="line-white"></div>
          <div className="line-green"></div>
        </div>
        <p>
          &copy; 2025 <span>The Samrat Dairy Farm</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
