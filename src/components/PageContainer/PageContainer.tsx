import React from 'react';

export interface PageContainerProps {
    children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <section className={`flex flex-1 flex-col items-center p-3`}>
            {children}
        </section>
    );
};
