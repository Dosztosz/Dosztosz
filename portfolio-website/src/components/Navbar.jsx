// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src="../img/ds.PNG"/>
      <ul className='nav-list'>
        <li>
          <Link className='nav-item' to="/">Home</Link>
        </li>
        <li>
          <Link className='nav-item' to="/about">About</Link>
        </li>
        <li>
          <Link className='nav-item' to="/services">Services</Link>
        </li>
        <li>
          <Link className='nav-item' to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;