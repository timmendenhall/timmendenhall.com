'use client';

import React from 'react';
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
        <nav className="fixed top-0 z-20 min-h-9 w-full bg-neutral-900 p-2 text-center text-neutral-400 shadow-md/30">
            {NavItems.map((item: NavBarLinkProps) => (
                <NavBarLink to={item.to} text={item.text} key={item.id} />
            ))}
        </nav>
    );
};
