import React, {useState} from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaSearch, FaRegUserCircle, FaBell } from "react-icons/fa";
import SearchPopup from '../SearchPopup/SearchPopup';


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
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>Wish List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch className='icons' onClick={openPopup} />
        <p>Children</p>
        <FaBell className='icons'/>
        <div className="navbar-profile">
          <FaRegUserCircle className='profile' />
          <div className="dropdown">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
      <SearchPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default Navbar;