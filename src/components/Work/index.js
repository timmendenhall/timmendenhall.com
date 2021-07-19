import React from 'react';
import './Work.css';
import atiImage from './ati.jpg';
import marsImage from './mars.png';
import caesarsImage from './caesars.png';
import vspImage from './vsp.jpg';

export const Work = () => {
  return (
    <section className="page__container" id="work">
      <h1>Work</h1>
      <div className="work__container">
        <div className="work__work-item">
          <img
            src={atiImage}
            className="work__work-image"
            alt="ATI Physical Therapy"
          />
        </div>
        <div className="work__work-item">
          <img src={marsImage} className="work__work-image" alt="Mars" />
        </div>
        <div className="work__work-item">
          <img
            src={caesarsImage}
            className="work__work-image"
            alt="Caesars Entertainment"
          />
        </div>
        <div className="work__work-item">
          <img src={vspImage} className="work__work-image" alt="VSP" />
        </div>
      </div>
    </section>
  );
};
