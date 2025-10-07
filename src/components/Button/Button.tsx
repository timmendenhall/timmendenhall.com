import React from 'react';
import { merriweatherSans } from '@/font';
import { FaGithub, FaLinkedin, FaFilePdf, FaFileWord } from 'react-icons/fa';

export type Icon = 'github' | 'linkedin' | 'pdf' | 'word' | undefined;

export interface ButtonProps {
    href: string;
    target?: string;
    icon?: Icon;
    text: string;
}

const getIcon = (icon: Icon): React.ReactElement | null => {
    switch (icon) {
        case 'github':
            return <FaGithub />;
        case 'linkedin':
            return <FaLinkedin />;
        case 'pdf':
            return <FaFilePdf />;
        case 'word':
            return <FaFileWord />;
        default:
            return null;
    }
};

export const Button = ({
    href = '',
    target = '_blank',
    icon,
    text,
}: ButtonProps) => {
    const iconContent = getIcon(icon);

    return (
        <a
            href={href}
            className={`${merriweatherSans.className} flex flex-row items-center justify-evenly gap-2 rounded-md border-2 border-white bg-black/30 p-2 text-white no-underline transition-colors duration-500 ease-out hover:bg-black`}
            target={target}
            rel="noreferrer"
        >
            {iconContent}
            {text}
        </a>
    );
};
