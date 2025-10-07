'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '@/../public/logo192.png';
import { NavBarLink } from '@/components/NavBar/NavBarLink';

export interface NavBarLinkProps {
    id: string;
    text: string;
    to: string;
}

export const NavItems: Array<NavBarLinkProps> = [
    { id: 'home', text: 'Home', to: '/' },
    { id: 'about', text: 'About', to: '/about' },
    { id: 'work', text: 'Work', to: '/work' },
    { id: 'resume', text: 'Resume', to: '/resume' },
    { id: 'posts', text: 'Posts', to: '/posts' },
];

export const NavBar = () => {
    return (
        <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center bg-neutral-900 shadow-md/30">
            <Image
                src={Logo}
                alt="Tim Mendenhall Logo"
                className="mx-3 h-8 w-8"
            />
            <div className="flex items-center justify-between text-neutral-400">
                {NavItems.map((item: NavBarLinkProps) => (
                    <NavBarLink to={item.to} text={item.text} key={item.id} />
                ))}
            </div>
        </nav>
    );
};
