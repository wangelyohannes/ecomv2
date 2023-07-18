import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-mobile">
      <div className="dropdown">
        <button className="dropbtn">Menu
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
        <Link to="/"> Home</Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/shop"> Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
