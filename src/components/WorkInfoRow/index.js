import React from 'react';
import './WorkInfoRow.css';

export const WorkInfoRow = ({ name, value }) => {
  return (
    <div className="work__info-row">
      <span className="work__info-name">{name}:</span>
      <span className="work__info-value">{value}</span>
    </div>
  );
};
