import React from 'react';
import Navbar from './Navbar';
import './Header.css';
import logo from '../img/Funko_Logo_White.webp';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src ={logo} alt="" />
      </div>
      <nav className="navbar">

        <Link to="/index"> Home</Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/shop"> Shop</Link>
      </nav>
      <Navbar />
      <div className="contactBotton">
        <i className="fa fa-bird"></i>
        <Link className="contact-btn" to="/contact"> Connect</Link>

      </div>
    </header>
  );
};

export default Header;
