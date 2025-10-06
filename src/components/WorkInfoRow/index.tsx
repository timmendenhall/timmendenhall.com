import React from 'react';

export interface WorkInfoRowProps {
    name: string;
    value: string;
}

export const WorkInfoRow = ({ name, value }: WorkInfoRowProps) => {
  return (
    <div className="work__info-row">
      <span className="work__info-name">{name}:</span>
      <span className="work__info-value">{value}</span>
    </div>
  );
};
