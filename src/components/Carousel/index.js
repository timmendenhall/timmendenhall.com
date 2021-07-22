import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

import './Carousel.css';

export const Carousel = ({ children }) => {
  return (
    <ReactResponsiveCarousel infiniteLoop={true}>
      {children}
    </ReactResponsiveCarousel>
  );
};
