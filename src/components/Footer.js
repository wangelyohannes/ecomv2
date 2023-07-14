import React from 'react';
import './Footer.css';
// import logo from '../img/Funko_Logo_White.webp';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <div className="footer">
      {/* <img src ={logo} alt="" /> */}
      <footer>
        <div className="footer-navbar">
        <Link to="/index"> Home</Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/shop"> Shop</Link>
          </div>

          <div className="social-media">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.pinterest.com/"><i className="fab fa-pinterest"></i></a>
            <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
