import React from 'react';

export interface ButtonBarProps {
    children?: React.ReactNode;
}

export const ButtonBar = ({ children }: ButtonBarProps) => {
    return <div className="z-0 flex flex-row justify-center">{children}</div>;
};
