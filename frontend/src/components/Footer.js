import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Company Address:</h3>
        <p>123 Main Street, City, State, ZIP</p>
      </div>
      <div>
        <h3>Contact No.:</h3>
        <p>123-456-7890</p>
      </div>
      <div>
        <h3>Social Media:</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/companyhttps://www.facebook.com/madhya.infosoft/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/madhyainfosoftpvt.ltd.1/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://in.linkedin.com/company/madhya-infosoft-private-limited" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Email Address:</h3>
        <p>info@company.com</p>
      </div>
    </footer>
  );
};

export default Footer;
