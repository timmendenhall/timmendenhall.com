import React from 'react';

export interface PageContainerProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export const PageContainer = ({
    id,
    children,
    className,
}: PageContainerProps) => {
    return (
        <section
            id={id}
            className={`flex min-h-screen w-full flex-col items-center justify-center py-8 ${className}`}
        >
            {children}
        </section>
    );
};
