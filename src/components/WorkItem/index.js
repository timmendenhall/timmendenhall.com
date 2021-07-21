import React from 'react';
import './WorkItem.css';
import { Link } from 'react-router-dom';

export const WorkItem = ({ shortName, longName }) => {
  return (
    <div className={`work__work-item work__${shortName}`}>
      <Link to={`/${shortName}`}>
        <span className="work__work-item-text">{longName}</span>
      </Link>
    </div>
  );
};
