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
        <nav className="sticky top-0 z-50 flex bg-neutral-900 shadow-md/30">
            <div className="mx-auto flex items-center justify-between p-4 text-neutral-400">
                {NavItems.map((item: NavBarLinkProps) => (
                    <NavBarLink to={item.to} text={item.text} key={item.id} />
                ))}
            </div>
        </nav>
    );
};
