import React from 'react';
import './Footer.css';

export const Footer = () => {
  const year = new Date().getFullYear();
  return <div className="footer__container">© {year} Tim Mendenhall</div>;
};
