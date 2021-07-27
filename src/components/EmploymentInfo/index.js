import React from 'react';
import './EmploymentInfo.css';

export const EmploymentInfo = ({ company, title, description, time }) => {
  return (
    <div className="employment-info__container">
      <span className="employment-info__company">{company}</span>
      <span className="employment-info__title">{title}</span>
      <span className="employment-info__description">{description}</span>
      <span className="employment-info__time">{time}</span>
    </div>
  );
};
