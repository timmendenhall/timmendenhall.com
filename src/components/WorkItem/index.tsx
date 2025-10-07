import React from 'react';
import { twMerge } from 'tailwind-merge';
import ati from './ati.png';
import Image from 'next/image';

export interface WorkItemProps {
    shortName: string;
    longName: string;
    isActive: boolean;
    onClick: (name: string) => void;
}

export const WorkItem = ({
    shortName,
    longName,
    onClick,
    isActive,
}: WorkItemProps) => {
    const mergedClasses = twMerge(
        'm-1 flex flex-1 rounded-sm border-2 border-black bg-contain bg-center bg-no-repeat',
        isActive ? 'border-white' : undefined,
        // `bg-[url(/img/work/${shortName}.png)]`,
    );

    return (
        <div
            onClick={() => onClick(shortName)}
            className="relative h-36 w-36 cursor-pointer border-0"
        >
            <Image
                src={ati}
                alt={longName}
                className="h-fit w-fit transition-all duration-300 hover:opacity-0"
            />

            <div className="absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-300 hover:opacity-0">
                {longName}
            </div>
        </div>
    );
};
