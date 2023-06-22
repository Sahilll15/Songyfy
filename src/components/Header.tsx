import React from 'react';
import '../styles.css';
import { ReactComponent as Hero } from '../assets/hero.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <>
      <div className="header">
        <Hero className="hero" />
        <div className="header-text">
          <h1>Your favourite tunes</h1>
          <h2>All <FontAwesomeIcon icon={faSun} style={{ color: '#FFD95A' }} /> and all <FontAwesomeIcon icon={faMoon} style={{ color: 'black' }} /></h2>
        </div>

      </div>


    </>


  );
};

export default Header;
