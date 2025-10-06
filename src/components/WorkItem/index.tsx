import React from 'react';

export interface WorkItemProps {
    shortName: string;
    longName: string;
    isActive: boolean;
    onClick: (name: string) => void;
}

export const  WorkItem = ({ shortName, longName, onClick, isActive }: WorkItemProps) => {
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
