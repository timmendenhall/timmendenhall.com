import React from 'react';
import './About.css';

export const About = () => {
  return (
    <div className="page__container">
      <div className="about__container">
        <h1>About</h1>

        <p>Hi! I'm Tim Mendenhall. Here's a little bit about my journey.</p>

        <div className="about__content-container">
          <p className="pr2">
            When I was young my dad got me my very first video game, Super Mario
            Brothers on the original Nintendo. This sparked my interest in
            gaming and I'm still quite a passionate gamer and indie game
            developer in my spare time.
          </p>
          <i className="fas fa-gamepad about__content-icon"></i>
        </div>

        <div className="about__content-container">
          <i className="fas fa-book about__content-icon"></i>
          <p className="pl2">
            In middle school a friend showed me his website he made for a
            Starcraft gaming group he ran. I was so thrilled seeing his original
            art, HTML and CSS skills in action that I just knew I had to do it
            too. The very next day I went to the library and rented "HTML For
            Dummies" unknowingly starting my web development career.
          </p>
        </div>

        <div className="about__content-container">
          <p className="pr2">
            By high school I got a graphing calculator, the TI-83. This changed
            my world forever with game development. I spent all of my spare time
            in class making small games in Basic on the calculator.
          </p>
          <i className="fas fa-calculator about__content-icon"></i>
        </div>

        <div className="about__content-container">
          <i className="fas fa-user-graduate about__content-icon"></i>
          <p className="pl2">
            After high school, I knew I wanted to be a game developer! So, I
            went to college and got my degree in Game and Simulation
            Programming. I learned a lot in a short amount of time making a few
            small game projects along the way.
          </p>
        </div>

        <div className="about__content-container">
          <p>
            Today, I have kept my passion for learning technology, gaming and
            still work on small indie game projects in my free time all while I
            continue my career in the web development world.
          </p>
        </div>
      </div>
    </div>
  );
};
