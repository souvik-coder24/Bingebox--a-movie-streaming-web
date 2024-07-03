import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch className='icons' />
        <p>Children</p>
        <FaBell className='icons'/>
        <div className="navbar-profile">
          <FaRegUserCircle className='profile' />
          <div className="dropdown">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
