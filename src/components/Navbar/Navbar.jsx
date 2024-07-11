import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaSearch, FaRegUserCircle, FaBell } from "react-icons/fa";
import SearchPopup from '../SearchPopup/SearchPopup';
import { Link, Outlet } from 'react-router-dom';
import { auth, logout } from '../../firebase';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className='navbar'>
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>Wish List</li>
          <li>Only on BingeBox</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch className='icons' onClick={openPopup} />
        <p>Subscription</p>
        <FaBell className='icons' />
        <div className="navbar-profile">
          <FaRegUserCircle className='profile' />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out</p>
          </div>
        </div>
      </div>
      <SearchPopup isOpen={isPopupOpen} onClose={closePopup} />
      <Outlet />
    </div>
  );
};

export default Navbar;