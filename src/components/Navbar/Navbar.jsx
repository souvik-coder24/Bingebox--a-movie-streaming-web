import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaSearch, FaRegUserCircle, FaBell } from "react-icons/fa";
import SearchPopup from '../SearchPopup/SearchPopup';
import { Link } from 'react-router-dom';
import { logout } from '../../firebase';

const Navbar = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('new-popular')}>New & Popular</li>
          <li onClick={() => scrollToSection('wish-list')}>Wish List</li>
          <li onClick={() => scrollToSection('only-on-bingebox')}>Only on BingeBox</li>
          <li onClick={() => scrollToSection('movies')}>Movies</li>
          <li onClick={() => scrollToSection('upcoming')}>Upcoming</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch className="icons" onClick={openPopup} />
        <Link to="/subs">
          <p>Subscription</p>
        </Link>
        <FaBell className="icons" />
        <div className="navbar-profile">
          <FaRegUserCircle className="profile" />
          <div className="dropdown">
            <p onClick={() => logout()}>Sign Out</p>
          </div>
        </div>
      </div>
      <SearchPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Navbar;