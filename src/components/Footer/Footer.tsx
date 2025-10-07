import React from 'react';
import Image from 'next/image';
import Logo from '@/../public/logo192.png';

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="z-10 flex w-full flex-col items-center justify-center pt-6">
            <Image src={Logo} alt="Tim Mendenhall Logo" className="w-16" />
            <span className="text-sm">© {year} Tim Mendenhall</span>
        </footer>
    );
};
