import React from 'react';
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are an ecommerce platform offering the best cricket products. Quality and customer satisfaction are our top priorities.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cricket Zone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
