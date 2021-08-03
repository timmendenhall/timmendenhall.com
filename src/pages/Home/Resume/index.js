import React from 'react';
import './Resume.css';
import { EmploymentInfo } from '../../../components/EmploymentInfo';
import { ButtonBar } from '../../../components/ButtonBar';
import { Button } from '../../../components/Button';

export const Resume = () => {
  return (
    <section className="page__container resume__background" id="resume">
      <div className="resume__container">
        <h1>Resume</h1>
        <ButtonBar>
          <Button
            href="/Tim_Mendenhall_Resume.pdf"
            icon="far fa-file-pdf"
            text="PDF"
          />
          <Button
            href="/Tim_Mendenhall_Resume.docx"
            icon="far fa-file-word"
            text="Word"
          />
        </ButtonBar>
        <h2>Employment</h2>
        <EmploymentInfo
          company="Bounteous"
          title="Lead Developer"
          description="React Web Development | React Native App Development | Angular 5+ Web Development | Career Coach | Architect | Leader"
          time="2018 - present"
        />
        <EmploymentInfo
          company="FlashRecruit"
          title="Software Development Lead"
          description="Architect | React Web Development | React Native App Development | Node.JS Back-end Development | Team Leader"
          time="2016 - 2018"
        />
        <EmploymentInfo
          company="MeridianRx"
          title="Senior Software Engineer"
          description="React Web Development"
          time="2015 - 2016"
        />
        <EmploymentInfo
          company="UnitedHealthcare"
          title="Technical Lead"
          description="Angular 1 Web Development | AEM Development | Development Team Manager | Team Leader"
          time="2013 - 2015"
        />
        <EmploymentInfo
          company="Grand River, Inc."
          title="Software Engineer"
          description="Magento Web Development | e-Commerce"
          time="2012 - 2013"
        />
        <h2>Skills</h2>
        <div className="resume__skills-container">
          <p>
            I primarily use React and React Native for web development and
            native app development respectfully. I prefer using Node JS when
            writing server side code. I prefer Typescript over plain Javascript
            on large scale projects for strong typing and ease of code
            maintenance.
          </p>
          <p>
            I have used an array of content management systems (AEM, Concrete5,
            Word Press, Drupal, Magento, Magnolia) both standard and headless to
            fit whatever the project's needs are.
          </p>
          <p>
            I use Git for version control and also have practice or light usage
            with many programming languages (C, C++, C#, python, VB.net, Go,
            PHP, Java, and more).
          </p>
          <p>
            I have developed several apps for both iOS and Android. These
            include 2 React Native apps, a C custom game engine (using SDL) game
            (also released on Windows and Mac), a C++ game (using Cocos2dx
            framework).
          </p>
        </div>
        <h2>Education</h2>
        <EmploymentInfo
          company="DeVry University"
          title="BSA Game and Simulation Programming"
          description="Vice President of Student Game Dev Group"
          time="2005 - 2009"
        />
      </div>
    </section>
  );
};
