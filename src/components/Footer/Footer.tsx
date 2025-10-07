import React from 'react';
import Image from 'next/image';
import Logo from './logo192.png';

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="flex w-full flex-1 flex-col items-center justify-center pt-6">
            <Image src={Logo} alt="Tim Mendenhall Logo" className="w-16" />
            <span className="text-sm">© {year} Tim Mendenhall</span>
        </div>
    );
};
