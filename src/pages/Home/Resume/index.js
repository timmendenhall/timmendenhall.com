import React from 'react';
import './Resume.css';
import { EmploymentInfo } from '../../../components/EmploymentInfo';

export const Resume = () => {
  return (
    <section className="page__container" id="resume">
      <div className="about__container">
        <h2>Employment</h2>
        <EmploymentInfo
          company="Bounteous"
          title="Lead Developer"
          description="Web Development | Native App Development | Career Coach | Architect | Leader"
          time="2018 - present"
        />
        <EmploymentInfo
          company="FlashRecruit"
          title="Software Development Lead"
          description="Architect | Web Development | Native App Development | Back-end Development | Team Leader"
          time="2016 - 2018"
        />
        <EmploymentInfo
          company="MeridianRx"
          title="Senior Software Engineer"
          description="Web Development"
          time="2015 - 2016"
        />
        <EmploymentInfo
          company="UnitedHealthcare"
          title="Technical Lead"
          description="Web Development"
          time="2013 - 2015"
        />
        <EmploymentInfo
          company="Grand River, Inc."
          title="Software Engineer"
          description="Web Development"
          time="2012 - 2013"
        />
      </div>
    </section>
  );
};
