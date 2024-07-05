import React from 'react'
import './Footer.css'
import { FaYoutube, FaFacebook,FaTwitter} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <FaFacebook className='icons'/>
        <IoLogoInstagram className='icons'/>
        <FaTwitter className='icons'/>
        <FaYoutube className='icons'/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relationship</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preference</li>
        <li>Corporate Infromation</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">© 2024 BingeBox, Inc.</p>
    </div>
  )
}

export default Footer