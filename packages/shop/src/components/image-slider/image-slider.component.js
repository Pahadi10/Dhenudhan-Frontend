import React, { useState } from 'react';
import { Box, Button } from '@mui/material'; // Import Button from MUI
import { styles } from './image-slider.styles';
import rightArrow from '@lib/assets//svgs/angle-right.svg'

const ImageSlider = ({ banners }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const lastIndex = banners.length - 1;

    const handleNext = () => {
        const newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    return (
        <Box style={styles.root}>
            {currentIndex !== 0 &&
                <Button onClick={handlePrev} style={styles.prevButton} >&#8678; </Button>
            }
            <Box style={styles.sliderBox}>
                {banners.map((banner, index) => {
                    const isVisible =
                        index >= currentIndex &&
                        index < currentIndex + 3;
                    return (
                        <img
                            key={index}
                            src={banner.original}
                            alt={`Promotional Banner ${index}`}
                            style={{
                                width: '33.33%',
                                height: 'auto',
                                padding: 20,
                                display: isVisible ? 'block' : 'none',
                            }}
                        />
                    );
                })}
            </Box>
            {currentIndex !== (lastIndex-2) &&
                <Button onClick={handleNext} style={styles.nextButton} >&#8680;</Button>
            }
        </Box>
    );
};

export default ImageSlider;
