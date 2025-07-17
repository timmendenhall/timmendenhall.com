'use client';

import React from 'react';
import { NavBarLink } from '@/components/NavBar/NavBarLink';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export interface NavBarLinkProps {
    id: string;
    text: string;
}

export const NavItems: Array<NavBarLinkProps> = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'resume', text: 'Resume' },
];

export const NavBar = () => {
    const sections = NavItems.map((item) => item.id);
    const [intersectingSectionIndex] = useScrollSpy(sections, { offset: 41 });
    return (
        <nav className="fixed top-0 z-20 min-h-9 w-full bg-neutral-900 p-2 text-neutral-400 shadow-md/30">
            {NavItems.map((item: NavBarLinkProps, index: number) => (
                <NavBarLink
                    to={`#${item.id}`}
                    text={item.text}
                    key={item.id}
                    active={index === intersectingSectionIndex}
                />
            ))}
        </nav>
    );
};
