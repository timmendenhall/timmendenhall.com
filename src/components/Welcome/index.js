import React from 'react';
import './Welcome.css';
import { SocialBar } from '../SocialBar';
import profileImage from './profile-pic.jpg';

export const Welcome = () => {
  return (
    <>
      <div className="welcome__background" />
      <div className="page__container">
        <img src={profileImage} className="welcome__profile-image" />
        <div className="welcome__card">
          <span className="welcome__card-greeting">Hello, I'm</span>
          <span className="welcome__card-greeting">Tim Mendenhall</span>
          <span className="welcome__card-greeting-small">
            Full-stack Web Developer
          </span>
        </div>
        <SocialBar />
      </div>
    </>
  );
};
