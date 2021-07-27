import React from 'react';
import Scrollspy from 'react-scrollspy';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="nav-bar__container">
      <Scrollspy
        items={['home', 'about', 'work', 'resume']}
        currentClassName="active"
        componentTag={React.Fragment}
        offset={-10}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#resume">Resume</a>
      </Scrollspy>
    </nav>
  );
};
