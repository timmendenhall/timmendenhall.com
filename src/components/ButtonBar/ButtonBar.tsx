import React from 'react';

export interface ButtonBarProps {
    children?: React.ReactNode;
}

export const ButtonBar = ({ children }: ButtonBarProps) => {
    return (
        <div className="z-0 mt-3 flex flex-row flex-wrap justify-center gap-3">
            {children}
        </div>
    );
};
