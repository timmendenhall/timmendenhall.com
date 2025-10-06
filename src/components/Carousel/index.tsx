import React, { ReactNode } from 'react';
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

export const Carousel = ({
    children,
}: {
    children: ReactNode[] | undefined;
}) => {
    return (
        <ReactResponsiveCarousel infiniteLoop={true}>
            {children}
        </ReactResponsiveCarousel>
    );
};
