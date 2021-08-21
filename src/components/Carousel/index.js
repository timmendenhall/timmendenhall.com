import './Carousel.css';
import { useState } from 'react';
import { useInterval } from '../../hooks/useInterval';

export const Carousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // start a timer to change up the selected image index
  useInterval(() => {
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  }, 4000);

  // No images are set, then don't render the carousel
  if (!images || !Array.isArray(images)) {
    return null;
  }

  // Get the selected image info
  const { src, alt } = images[selectedImageIndex];

  return (
    <div className="carousel__container">
      <div className="carousel__image-container">
        <img src={src} alt={alt} className="carousel__image" />
      </div>
      <div className="carousel__indicator-container">
        {images.map(({ src, alt }, index) => (
          <span
            onClick={() => setSelectedImageIndex(index)}
            className={`carousel__image-indicator ${
              index === selectedImageIndex ? 'active' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};
