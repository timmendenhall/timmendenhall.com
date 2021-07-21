import React from 'react';
import './WorkItem.css';

export const WorkItem = ({ shortName, longName }) => {
  return (
    <div className={`work__work-item work__${shortName}`}>
      <a href={`#${shortName}`}>
        <span className="work__work-item-text">{longName}</span>
      </a>
    </div>
  );
};
