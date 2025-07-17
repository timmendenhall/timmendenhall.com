import React from 'react';
import { ubuntuSans, robotoCondensed } from '@/font';

export interface EmploymentInfoProps {
    company: string;
    title: string;
    description: string;
    time: string;
}

export const EmploymentInfo = ({
    company,
    title,
    description,
    time,
}: EmploymentInfoProps) => {
    return (
        <div className="mx-4 mt-8 flex flex-col items-center justify-center">
            <span className={`${ubuntuSans.className} text-3xl`}>
                {company}
            </span>
            <span className="text-2xl text-neutral-300">{title}</span>
            <span
                className={`${robotoCondensed.className} max-w-2xl text-xl wrap-normal text-neutral-400`}
            >
                {description}
            </span>
            <span className="text-xl text-neutral-300">{time}</span>
        </div>
    );
};
