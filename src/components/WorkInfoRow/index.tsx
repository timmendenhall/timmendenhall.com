import React from 'react';

export interface WorkInfoRowProps {
    name: string;
    value: string;
}

export const WorkInfoRow = ({ name, value }: WorkInfoRowProps) => {
    return (
        <div className="flex flex-row justify-between gap-5">
            <span className="font-bold">{name}:</span>
            <span className="">{value}</span>
        </div>
    );
};
