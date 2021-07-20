import React from 'react';
import './Work.css';

export const Work = () => {
  return (
    <section className="page__container" id="work">
      <h1>Work</h1>
      <div className="work__container">
        <div className="work__work-item work__ati">
          <a href="#ati">
            <span className="work__work-item-text">ATI Physical Therapy</span>
          </a>
        </div>
        <div className="work__work-item work__mars">
          <a href="#mars">
            <span className="work__work-item-text">Mars</span>
          </a>
        </div>
        <div className="work__work-item work__caesars">
          <a href="#caesars">
            <span className="work__work-item-text">Caesars</span>
          </a>
        </div>
        <div className="work__work-item work__vsp">
          <a href="#vsp">
            <span className="work__work-item-text">VSP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
