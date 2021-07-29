import React from 'react';

import './ATI.css';
import dashboardImage from './ati_dashboard.png';
import hepImage from './ati_hep.png';
import progressImage from './ati_progress.png';
import { Carousel } from '../../../../components/Carousel';
import { WorkInfo } from '../../../../components/WorkInfo';
import { WorkInfoRow } from '../../../../components/WorkInfoRow';

export const ATI = () => {
  return (
    <section>
      <h2>Customer Portal</h2>
      <Carousel>
        <div className="work__carousel-image">
          <img src={dashboardImage} alt="Dashboard" />
        </div>
        <div className="work__carousel-image">
          <img src={hepImage} alt="Home Exercise Program" />
        </div>
        <div className="work__carousel-image">
          <img src={progressImage} alt="My Progress" />
        </div>
      </Carousel>
      <WorkInfo>
        <WorkInfoRow name="Role" value="Front-end Architect" />
        <WorkInfoRow name="Platforms" value="iOS, Android, Web" />
        <WorkInfoRow name="Technology" value="React Native, React Native Web" />
        <WorkInfoRow name="Status" value="In development" />
      </WorkInfo>

      <p>
        On this project I was tasked with creating the foundation of the project
        in React Native / React Native Web. This included setting up the CI/CD
        for native with Fastlane and AppCenter, Azure pipelines for building and
        deployment, Azure B2C integration for user management and more.
      </p>
      <p>
        I lead a team of three front end engineers, set the coding standards and
        reviewed pull requests. I worked closely with the client, design,
        developers, project managers and business analyst to ensure the team was
        always unblocked and moving towards the target goals.
      </p>
    </section>
  );
};
