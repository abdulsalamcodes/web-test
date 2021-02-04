import React from 'react';
import './Navbar.css';
import image from '../../assets/EntreLogo.svg';

function Navbar() {
  return (
    <div className="Navbar">
      <img src={image} alt="Logo" />
    </div>
  );
}

export default Navbar;
