import React from 'react';
import './Welcome.css';
import { ButtonBar } from '../../../components/ButtonBar';
import { Button } from '../../../components/Button';
import profileImage from './profile-pic.jpg';

export const Welcome = () => {
  return (
    <>
      <div className="welcome__background" />
      <section className="page__container" id="home">
        <img
          src={profileImage}
          className="welcome__profile-image"
          alt="Tim Mendenhall"
        />
        <div className="welcome__card">
          <span className="welcome__card-greeting">Tim Mendenhall</span>
          <span className="welcome__card-greeting-small">
            Full-stack Web Developer
          </span>
        </div>
        <ButtonBar>
          <Button
            href="https://github.com/timmendenhall"
            icon="fab fa-github"
            text="GitHub"
          />
          <Button
            href="https://www.linkedin.com/in/timmendenhall/"
            icon="fab fa-linkedin-in"
            text="LinkedIn"
          />
        </ButtonBar>
      </section>
    </>
  );
};
