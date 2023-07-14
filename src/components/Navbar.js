import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-mobile">
      <div className="dropdown">
        <button className="dropbtn">Menu
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="index.html">Home</a>
          <a href="contact.html">Contact</a>
          <a href="shop.html">Shop</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
