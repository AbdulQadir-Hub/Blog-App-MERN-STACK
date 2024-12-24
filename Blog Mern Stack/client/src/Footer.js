

import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section branding">
          <h3 className="footer-logo">Blog With AB</h3>
          <p className="footer-tagline">
            Sharing insightful articles and resources to inspire growth and
            innovation.
          </p>
        </div>
        <div className="footer-section links">
          <h4 className="section-title">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4 className="section-title">Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook-square"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fa fa-twitter-square"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa fa-linkedin-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Blog With AB. All rights reserved.
        </p>
        <p className="footer-credit">
          Designed with ❤️ by Blog With AB (AbdulQadir).
        </p>
      </div>
    </footer>
  );
};

export default Footer;
