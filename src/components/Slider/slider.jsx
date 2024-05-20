import React, { useState, useEffect } from 'react';
import './slider.css';

export default function Slider() {
    const slideImg = [
        './ult1.jpg',
        './ult2.jpg',
        './ult3.jpg',
        './ult4.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        const isLastSlide = currentIndex === slideImg.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            goToNextSlide();
        }, 2000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="slider-container">
            <div
                className="slides"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slideImg.map((image, index) => (
                    <div className="slide" key={index}>
                        <img className='slider_img' src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
