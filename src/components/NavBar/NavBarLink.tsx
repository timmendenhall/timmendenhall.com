import React from 'react';
import Link from 'next/link';
import { openSans } from '@/font';

export interface NavBarLinkProps {
    to: string;
    text: string;
    active?: boolean;
}

export const NavBarLink = ({ to, text, active }: NavBarLinkProps) => {
    return (
        <Link
            href={to}
            className={`${openSans.className} m-3 gap-2 underline-offset-8 hover:text-white hover:underline ${active ? 'text-white underline' : 'text-neutral-400'}`}
        >
            {text}
        </Link>
    );
};
