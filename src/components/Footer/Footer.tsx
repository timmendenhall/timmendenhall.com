import React from 'react';
import Image from 'next/image';
import Logo from './logo192.png';

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="flex flex-col items-center justify-center bg-cyan-900 pt-6">
            <Image src={Logo} alt="Tim Mendenhall Logo" className="w-16" />
            <span className="text-sm">© {year} Tim Mendenhall</span>
        </div>
    );
};
