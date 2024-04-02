import React from 'react';
import { styles } from './imageslider.styles';

const ProductImageSlider = ({ images, currentImageIndex, setCurrentImageIndex }) => {
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div style={styles.root}>
      {currentImageIndex !== 0 && (
        <button style={styles.prevButton} onClick={prevSlide}>
          &#10094;
        </button>
      )}

      {images?.map((image, index) => (
        <div key={index} style={{ display: index === currentImageIndex ? 'block' : 'none', width: '100%', textAlign: 'center' }}>
          <img src={image?.original} alt={`Product ${index + 1}`} style={styles.sliderImage} />
        </div>
      ))}

      {currentImageIndex !== images?.length - 1 && (
        <button style={styles.nextButton} onClick={nextSlide}>
          &#10095;
        </button>
      )}
    </div>
  );
};

export default ProductImageSlider;
