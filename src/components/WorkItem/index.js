import React from 'react';
import './WorkItem.css';

export const WorkItem = ({ shortName, longName, onClick, isActive }) => {
  return (
    <div
      className={`work__work-item work__${shortName} ${
        isActive ? 'active' : ''
      }`}
    >
      <button onClick={() => onClick(shortName)}>
        <span className="work__work-item-text">{longName}</span>
      </button>
    </div>
  );
};
