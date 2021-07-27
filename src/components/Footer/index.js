import React from 'react';
import './Footer.css';
import Logo from './logo192.png';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer__container">
      <img src={Logo}></img>
      <span>© {year} Tim Mendenhall</span>
    </div>
  );
};
