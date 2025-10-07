import React from 'react';
import { twMerge } from 'tailwind-merge';
import ati from './ati.jpg';
import caesars from './caesars.png';
import mars from './mars.png';
import vsp from './vsp.jpg';
import Image from 'next/image';

export interface WorkItemProps {
    shortName: string;
    longName: string;
    isActive: boolean;
    onClick: (name: string) => void;
}

const getImage = (shortName: string) => {
    switch (shortName) {
        case 'ati':
            return ati;
        case 'caesars':
            return caesars;
        case 'mars':
            return mars;
        case 'vsp':
            return vsp;
        default:
            return ati;
    }
};

export const WorkItem = ({
    shortName,
    longName,
    onClick,
    isActive,
}: WorkItemProps) => {
    const mergedClasses = twMerge(
        'group relative h-36 w-36 cursor-pointer overflow-hidden rounded-sm border-2 border-black bg-white',
        isActive ? 'border-white' : undefined,
    );

    const backgroundOpacity = isActive ? 'opacity-0' : 'opacity-55';

    return (
        <div onClick={() => onClick(shortName)} className={mergedClasses}>
            <div
                className={`absolute inset-0 z-10 flex bg-black ${backgroundOpacity} transition-opacity duration-300 group-hover:opacity-0`}
            ></div>

            <Image
                src={getImage(shortName)}
                alt={longName}
                fill
                className="object-contain object-center"
            />
        </div>
    );
};
