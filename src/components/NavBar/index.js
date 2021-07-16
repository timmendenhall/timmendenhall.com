import React from 'react';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="nav-bar__container">
      <a href="/" className="active">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#">Work</a>
      <a href="#">Resume</a>
    </nav>
  );
};
