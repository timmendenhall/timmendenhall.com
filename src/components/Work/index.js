import React from 'react';
import './Work.css';
import { WorkItem } from '../WorkItem';

export const Work = () => {
  return (
    <section className="page__container" id="work">
      <h1>Work</h1>
      <div className="work__container">
        <WorkItem shortName="ati" longName="ATI Physical Therapy" />
        <WorkItem shortName="mars" longName="Mars" />
        <WorkItem shortName="caesars" longName="Caesars" />
        <WorkItem shortName="vsp" longName="VSP" />
      </div>
    </section>
  );
};
